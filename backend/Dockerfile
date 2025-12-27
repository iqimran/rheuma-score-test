# backend/Dockerfile

############################
# 1) Composer dependencies #
############################
FROM composer:2 AS vendor

WORKDIR /app

# Copy only composer files first (better layer caching)
COPY composer.json composer.lock ./

# Install dependencies (no dev deps for prod)
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader


############################
# 2) Build vite assets
############################
FROM node:22-alpine AS vite

WORKDIR /app

# Copy only frontend files first (better layer caching)
COPY package.json package-lock.json ./
# Install dependencies
RUN npm install
# Copy frontend source code
COPY . .
# Build production assets
RUN npm run build

# Copy frontend assets
FROM vendor AS final
COPY --from=frontend /app/dist ./public/dist


############################
# 3) PHP runtime image     #
############################
FROM php:8.2-fpm-alpine

# Install system dependencies
RUN apk add --no-cache \
    bash \
    git \
    curl \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    libzip-dev \
    oniguruma-dev \
    icu-dev \
    mysql-client \
    nodejs \
    npm

# Install PHP extensions
RUN docker-php-ext-configure gd --with-jpeg --with-webp \
    && docker-php-ext-install \
    pdo \
    pdo_mysql \
    mbstring \
    zip \
    intl \
    gd

WORKDIR /var/www/html

# Copy app code
COPY . .

# Copy vendor from previous stage
COPY --from=vendor /app/vendor ./vendor

# Set appropriate permissions for storage and bootstrap/cache
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

RUN php artisan config:cache || true && \
    php artisan route:cache || true && \
    php artisan view:cache || true

# Expose Laravel port
EXPOSE 8000

# Run Laravel's built-in server (OK for small/medium apps & simplicity)
CMD ["php-fpm"]