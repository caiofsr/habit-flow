FROM oven/bun:latest AS base

# Install dev dependencies
FROM base AS dev

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

# Build the application
FROM base AS builder

WORKDIR /app

COPY --from=dev /app/node_modules ./node_modules
COPY . .

RUN bun run build

# Production image
FROM base AS production

WORKDIR /app

COPY --from=builder /app/.output ./.output

CMD ["bun", "run", ".output/server/index.mjs"]
