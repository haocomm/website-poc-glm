# Use Node.js 18 LTS as base image (Debian-based for better native module support)
FROM node:18-bullseye-slim AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install build dependencies for native modules
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies using pnpm with native module fixes
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && \
    pnpm i --frozen-lockfile --ignore-scripts && \
    pnpm rebuild

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate the Nuxt application
RUN corepack enable pnpm && pnpm run build

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
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Install only production dependencies
RUN corepack enable pnpm && \
    pnpm i --frozen-lockfile --prod --ignore-scripts && \
    pnpm rebuild

USER nuxtjs

EXPOSE 3000

ENV PORT 3000
ENV HOST 0.0.0.0

CMD ["node", ".output/server/index.mjs"]