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

# Generate package-lock.json and install with npm (better Docker support)
COPY package.json pnpm-lock.yaml* ./
RUN npm install --package-lock-only --ignore-scripts && \
    npm install --ignore-scripts && \
    npm rebuild

# Production image, copy all the files and run
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3001

# Don't run production as root
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 --gid nodejs backend

# Copy the built application
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Install only production dependencies
RUN npm install --package-lock-only --ignore-scripts && \
    npm install --ignore-scripts && \
    npm rebuild

USER backend

EXPOSE 3001

CMD ["npm", "run", "server:dev"]