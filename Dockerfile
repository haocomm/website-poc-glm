# Use Node.js 20 LTS as base image (Debian-based for better native module support)
FROM node:20-bullseye-slim AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install build dependencies for native modules
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package files and install with npm (generate fresh package-lock.json)
COPY package.json ./
RUN npm install --package-lock-only --ignore-scripts && \
    npm install --ignore-scripts && \
    npm rebuild

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set Node environment to treat .mjs files as ES modules and use import.meta
ENV NODE_OPTIONS="--experimental-vm-modules"

# Generate the Nuxt application
RUN npm run build

# Production image, copy all the files and run nuxi generate
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV HOST 0.0.0.0

# Don't run production as root
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 --gid nodejs nuxtjs

# Copy the built application
COPY --from=builder /app/.output ./.output
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/package-lock.json ./package-lock.json

# Install only production dependencies
RUN npm install --ignore-scripts && \
    npm rebuild

USER nuxtjs

EXPOSE 3000

ENV PORT 3000
ENV HOST 0.0.0.0

CMD ["node", ".output/server/index.mjs"]