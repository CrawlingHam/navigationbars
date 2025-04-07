# Build stage
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
COPY .env ./.env
RUN pnpm build:only

# Production stage with nginx
FROM nginx:1.25.4-alpine

# Install curl for healthcheck
RUN apk add --no-cache curl

# Set up nginx directories and permissions
RUN mkdir -p /var/cache/nginx/{client_temp,proxy_temp,fastcgi_temp,uwsgi_temp,scgi_temp} /var/run && \
    chown -R nginx:nginx /var/cache/nginx /var/run && \
    chmod -R 700 /var/cache/nginx && \
    touch /var/run/nginx.pid && \
    chown nginx:nginx /var/run/nginx.pid

# Copy configuration and files
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/.env /usr/share/nginx/html/.env

# Set up health check
RUN echo "healthy" > /usr/share/nginx/html/health && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Health check configuration
HEALTHCHECK --interval=10s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# Run as non-root user (EKS security best practice)
USER nginx

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

