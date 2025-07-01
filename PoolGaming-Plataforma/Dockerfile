# Dockerfile para PoolGaming Plataforma
FROM node:20-alpine
WORKDIR /app

# Create and use a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

COPY . .
RUN npm install --legacy-peer-deps || true

# Add a simple healthcheck (adjust as needed)
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["npm", "run", "start"]
