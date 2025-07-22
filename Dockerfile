FROM node:23-alpine AS builder

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .

RUN pnpm build:only

FROM node:23-alpine

RUN npm install -g serve

ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser

WORKDIR /app

COPY --from=builder /app/dist ./dist

RUN echo "healthy" > ./dist/health

RUN chown -R appuser:appuser /app

EXPOSE 80

USER appuser

CMD ["serve", "-s", "dist", "-l", "80"]