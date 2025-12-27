############################
# 1) Composer dependencies #
############################
FROM php:8.2-cli-alpine AS vendor

RUN apk add --no-cache \
    git unzip icu-dev libzip-dev \
    libpng-dev libjpeg-turbo-dev libwebp-dev \
    oniguruma-dev

RUN docker-php-ext-configure gd --with-jpeg --with-webp \
    && docker-php-ext-install \
    pdo pdo_mysql mbstring zip intl gd

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY composer.json composer.lock ./

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_MEMORY_LIMIT=-1

RUN composer install --no-dev --prefer-dist --no-interaction --optimize-autoloader


############################
# 2) Build Vite assets
############################
FROM node:22-alpine AS vite

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


############################
# 3) PHP runtime
############################
FROM php:8.2-fpm-alpine

RUN apk add --no-cache \
    bash curl mysql-client \
    icu-dev libzip-dev \
    libpng-dev libjpeg-turbo-dev libwebp-dev \
    oniguruma-dev

RUN docker-php-ext-configure gd --with-jpeg --with-webp \
    && docker-php-ext-install \
    pdo pdo_mysql mbstring zip intl gd

WORKDIR /var/www/html

COPY . .
COPY --from=vendor /app/vendor ./vendor
COPY --from=vite /app/dist ./public/dist

RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

RUN php artisan config:clear \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

EXPOSE 8000
CMD ["php-fpm"]
