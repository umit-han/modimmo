# Build aşaması
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production aşaması
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

# Sadece gerekli dosyaları kopyala
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Next.js için gerekli port
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]