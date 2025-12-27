############################
# 1) Composer dependencies #
############################
FROM php:8.2-cli-alpine AS vendor

# System dependencies required by Composer + Laravel
RUN apk add --no-cache \
    git unzip curl \
    icu-dev libzip-dev \
    libpng-dev libjpeg-turbo-dev libwebp-dev \
    oniguruma-dev \
    openssl-dev \
    libsodium-dev \
    linux-headers

# PHP extensions required by Laravel
RUN docker-php-ext-configure gd --with-jpeg --with-webp \
    && docker-php-ext-install \
    pdo \
    pdo_mysql \
    mbstring \
    zip \
    intl \
    gd \
    sodium

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy only composer files (better cache)
COPY composer.json composer.lock ./

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_MEMORY_LIMIT=-1

# Install PHP dependencies (CI-safe)
RUN composer install \
    --no-dev \
    --prefer-dist \
    --no-interaction \
    --optimize-autoloader


############################
# 2) Build Vite assets
############################
FROM node:22-alpine AS vite

WORKDIR /app

# Install frontend deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy only required frontend files
COPY resources ./resources
COPY public ./public
COPY vite.config.js ./

# Build production assets
RUN npm run build


############################
# 3) PHP runtime image
############################
FROM php:8.2-fpm-alpine

# Runtime system dependencies
RUN apk add --no-cache \
    bash curl mysql-client \
    icu-dev libzip-dev \
    libpng-dev libjpeg-turbo-dev libwebp-dev \
    oniguruma-dev \
    openssl-dev \
    libsodium-dev

# Runtime PHP extensions
RUN docker-php-ext-configure gd --with-jpeg --with-webp \
    && docker-php-ext-install \
    pdo \
    pdo_mysql \
    mbstring \
    zip \
    intl \
    gd \
    sodium

WORKDIR /var/www/html

# Copy application code
COPY . .

# Copy vendor dependencies
COPY --from=vendor /app/vendor ./vendor

# Copy Vite build output (Laravel default)
COPY --from=vite /app/public/build ./public/build

# Permissions
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Laravel optimizations
RUN php artisan key:generate --force || true \
    && php artisan config:clear \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

EXPOSE 8000

CMD ["php-fpm"]
