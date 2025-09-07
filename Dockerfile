# Multi-stage Dockerfile for Next.js (standalone output)

FROM node:20-alpine AS base
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1
RUN apk update && apk add --no-cache libc6-compat

# Install dependencies only
FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN npm install -g bun && bun install

# Build stage
FROM base AS builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN npm install -g bun && bun install
COPY . .
RUN bun run build

# Production runner (standalone server.js)
FROM base AS runner
WORKDIR /app
ENV PORT=8080 \
    HOSTNAME=0.0.0.0 \
    NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

# Copy standalone server and static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 8080
CMD ["node", "server.js"]

