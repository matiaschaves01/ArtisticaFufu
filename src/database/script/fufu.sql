DROP DATABASE IF EXISTS `fufu_db`;
CREATE DATABASE IF NOT EXISTS `fufu_db`;
USE `fufu_db`;

CREATE TABLE `product_categories` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT current_timestamp,
    `updated_at` TIMESTAMP DEFAULT current_timestamp ON UPDATE current_timestamp,
    `deleted_at` DATETIME DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `user_category` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT current_timestamp,
    `updated_at` TIMESTAMP DEFAULT current_timestamp ON UPDATE current_timestamp,
    `deleted_at` DATETIME DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `product_subcategory` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `subCategory` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT current_timestamp,
    `updated_at` TIMESTAMP DEFAULT current_timestamp ON UPDATE current_timestamp,
    `deleted_at` DATETIME DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `product_colors` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `color` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT current_timestamp,
    `updated_at` TIMESTAMP DEFAULT current_timestamp ON UPDATE current_timestamp,
    `deleted_at` DATETIME DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
    `id` INT AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `image` VARCHAR(255),
    `capacity` VARCHAR(255),
    `description` VARCHAR(255),
    `product_color_id` INT,
    `product_sub_category_id` INT,
    `product_categories_id` INT,
    `created_at` TIMESTAMP DEFAULT current_timestamp,
    `updated_at` TIMESTAMP DEFAULT current_timestamp ON UPDATE current_timestamp,
    `deleted_at` DATETIME DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`product_color_id`) REFERENCES `product_colors`(`id`),
    FOREIGN KEY (`product_sub_category_id`) REFERENCES `product_subcategory`(`id`),
    FOREIGN KEY (`product_categories_id`) REFERENCES `product_categories`(`id`)
);

CREATE TABLE `user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    `lastname` VARCHAR(255),
    `username` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255),
    `email` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255),
    `password` VARCHAR(255) NOT NULL,
    `user_category_id` INT,
    `created_at` TIMESTAMP DEFAULT current_timestamp,
    `updated_at` TIMESTAMP DEFAULT current_timestamp ON UPDATE current_timestamp,
    `deleted_at` DATETIME DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_category_id`) REFERENCES `user_category`(`id`)
);
