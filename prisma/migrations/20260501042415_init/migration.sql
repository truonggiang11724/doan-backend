-- CreateTable
CREATE TABLE `cancel_requests` (
    `cancel_request_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NULL,
    `reason` TEXT NULL,
    `status` VARCHAR(50) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `order_id`(`order_id`),
    PRIMARY KEY (`cancel_request_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart_items` (
    `cart_item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cart_id` INTEGER NULL,
    `variant_id` INTEGER NULL,
    `quantity` INTEGER NULL,
    `render_id` INTEGER NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `cart_id`(`cart_id`),
    INDEX `variant_id`(`variant_id`),
    INDEX `render_id`(`render_id`),
    PRIMARY KEY (`cart_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carts` (
    `cart_id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NULL,
    `updated_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `customer_id`(`customer_id`),
    PRIMARY KEY (`cart_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NULL,
    `description` TEXT NULL,
    `thumbnail` TEXT NULL,
    `status` VARCHAR(50) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_addresses` (
    `address_id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NULL,
    `receiver_name` VARCHAR(150) NULL,
    `phone` VARCHAR(20) NULL,
    `ward_id` INTEGER NULL,
    `address_detail` TEXT NULL,
    `is_default` BOOLEAN NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `customer_id`(`customer_id`),
    PRIMARY KEY (`address_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `customer_id` INTEGER NOT NULL,
    `loyalty_point` INTEGER NULL DEFAULT 0,
    `level` INTEGER NULL DEFAULT 1,
    `status` ENUM('active', 'inactive') NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_items` (
    `order_item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NULL,
    `variant_id` INTEGER NULL,
    `quantity` INTEGER NULL,
    `unit_price` DECIMAL(10, 2) NULL,
    `render_id` INTEGER NULL,

    INDEX `order_id`(`order_id`),
    INDEX `variant_id`(`variant_id`),
    INDEX `render_id`(`render_id`),
    PRIMARY KEY (`order_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `order_id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NULL,
    `address_id` INTEGER NULL,
    `order_status` VARCHAR(50) NULL,
    `payment_status` VARCHAR(50) NULL,
    `total_amount` DECIMAL(14, 2) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `address_id`(`address_id`),
    INDEX `customer_id`(`customer_id`),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payments` (
    `payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NULL,
    `payment_method` VARCHAR(100) NULL,
    `provider` VARCHAR(100) NULL,
    `amount` DECIMAL(14, 2) NULL,
    `status` VARCHAR(50) NULL,
    `transaction_code` VARCHAR(150) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `order_id`(`order_id`),
    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_media` (
    `media_id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NULL,
    `media_url` TEXT NULL,
    `media_type` ENUM('image', 'video') NULL DEFAULT 'image',
    `is_primary` BOOLEAN NULL,

    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`media_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_variants` (
    `variant_id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NULL,
    `sku` VARCHAR(100) NULL,
    `color` VARCHAR(50) NULL,
    `size` VARCHAR(50) NULL,
    `price` DECIMAL(12, 2) NULL,
    `stock_quantity` INTEGER NULL,
    `image_url` TEXT NULL,

    UNIQUE INDEX `sku`(`sku`),
    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`variant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `product_id` INTEGER NOT NULL AUTO_INCREMENT,
    `seller_id` INTEGER NULL,
    `category_id` INTEGER NULL,
    `product_name` VARCHAR(200) NULL,
    `description` TEXT NULL,
    `status` ENUM('active', 'inactive') NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `category_id`(`category_id`),
    INDEX `seller_id`(`seller_id`),
    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promotion_usages` (
    `promotion_usage_id` INTEGER NOT NULL AUTO_INCREMENT,
    `promotion_id` INTEGER NULL,
    `customer_id` INTEGER NULL,
    `order_id` INTEGER NULL,
    `used_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `customer_id`(`customer_id`),
    INDEX `order_id`(`order_id`),
    INDEX `promotion_id`(`promotion_id`),
    PRIMARY KEY (`promotion_usage_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promotions` (
    `promotion_id` INTEGER NOT NULL AUTO_INCREMENT,
    `promotion_type` ENUM('PERCENT', 'FIXED', 'FREESHIP') NULL,
    `discount_value` DECIMAL(12, 2) NULL,
    `min_order_value` DECIMAL(12, 2) NULL,
    `start_date` DATE NULL,
    `end_date` DATE NULL,
    `status` VARCHAR(50) NULL,

    PRIMARY KEY (`promotion_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `provinces` (
    `province_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NULL,
    `full_name` VARCHAR(255) NOT NULL,
    `full_name_en` VARCHAR(255) NULL,
    `code_name` VARCHAR(255) NULL,
    `administrative_unit_id` INTEGER NULL,

    INDEX `idx_provinces_unit`(`administrative_unit_id`),
    PRIMARY KEY (`province_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refunds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `reason` TEXT NULL,
    `status` ENUM('pending', 'approved', 'rejected') NULL DEFAULT 'pending',
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `order_id`(`order_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review_media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `review_id` INTEGER NOT NULL,
    `media_url` VARCHAR(255) NULL,
    `media_type` ENUM('image', 'video') NULL DEFAULT 'image',

    INDEX `review_id`(`review_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `review_id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NULL,
    `product_id` INTEGER NULL,
    `order_item_id` INTEGER NULL,
    `rating` INTEGER NULL,
    `content` TEXT NULL,
    `media_url` TEXT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `customer_id`(`customer_id`),
    INDEX `order_item_id`(`order_item_id`),
    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sellers` (
    `user_id` INTEGER NOT NULL,
    `shop_name` VARCHAR(150) NULL,
    `rating` DECIMAL(2, 1) NULL,
    `theme_description` TEXT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shipments` (
    `shipment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NULL,
    `tracking_number` VARCHAR(150) NULL,
    `carrier` VARCHAR(100) NULL,
    `shipping_fee` DECIMAL(12, 2) NULL,
    `status` VARCHAR(50) NULL,
    `expected_delivery_date` DATE NULL,

    INDEX `order_id`(`order_id`),
    PRIMARY KEY (`shipment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tiktok_user_id` VARCHAR(100) NULL,
    `username` VARCHAR(100) NULL,
    `password_hash` VARCHAR(255) NULL,
    `email` VARCHAR(100) NULL,
    `phone` VARCHAR(20) NULL,
    `full_name` VARCHAR(150) NULL,
    `avatar_url` TEXT NULL,
    `role` ENUM('ADMIN', 'SELLER', 'CUSTOMER') NULL,
    `status` ENUM('active', 'inactive') NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `tiktok_user_id`(`tiktok_user_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conversations` (
    `conversation_id` INTEGER NOT NULL AUTO_INCREMENT,
    `buyer_id` INTEGER NOT NULL,
    `seller_id` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `buyer_id`(`buyer_id`),
    INDEX `seller_id`(`seller_id`),
    PRIMARY KEY (`conversation_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messages` (
    `message_id` INTEGER NOT NULL AUTO_INCREMENT,
    `conversation_id` INTEGER NOT NULL,
    `sender_id` INTEGER NOT NULL,
    `content` TEXT NULL,
    `type` VARCHAR(50) NULL DEFAULT 'text',
    `is_read` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `conversation_id`(`conversation_id`),
    INDEX `sender_id`(`sender_id`),
    PRIMARY KEY (`message_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallet_transactions` (
    `transaction_id` INTEGER NOT NULL AUTO_INCREMENT,
    `wallet_id` INTEGER NULL,
    `order_id` INTEGER NULL,
    `transaction_type` ENUM('CREDIT', 'DEBIT', 'REFUND') NULL,
    `amount` DECIMAL(14, 2) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `order_id`(`order_id`),
    INDEX `wallet_id`(`wallet_id`),
    PRIMARY KEY (`transaction_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallets` (
    `wallet_id` INTEGER NOT NULL AUTO_INCREMENT,
    `seller_id` INTEGER NULL,
    `available_balance` DECIMAL(14, 2) NULL,
    `pending_balance` DECIMAL(14, 2) NULL,
    `withdrawn_balance` DECIMAL(14, 2) NULL,
    `total_revenue` DECIMAL(14, 2) NULL,
    `updated_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `seller_id`(`seller_id`),
    PRIMARY KEY (`wallet_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wards` (
    `ward_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NULL,
    `full_name` VARCHAR(255) NULL,
    `full_name_en` VARCHAR(255) NULL,
    `code_name` VARCHAR(255) NULL,
    `province_id` INTEGER NULL,
    `administrative_unit_id` INTEGER NULL,

    INDEX `idx_wards_province`(`province_id`),
    INDEX `idx_wards_unit`(`administrative_unit_id`),
    PRIMARY KEY (`ward_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mockup_templates` (
    `template_id` INTEGER NOT NULL AUTO_INCREMENT,
    `variant_id` INTEGER NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `mockup_uuid` VARCHAR(100) NOT NULL,
    `thumbnail_url` TEXT NULL,
    `category` VARCHAR(100) NULL,
    `smart_objects` LONGTEXT NULL,
    `is_active` BOOLEAN NULL DEFAULT true,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `mockup_templates_mockup_uuid_key`(`mockup_uuid`),
    INDEX `variant_id`(`variant_id`),
    PRIMARY KEY (`template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mockup_renders` (
    `render_id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NULL,
    `product_id` INTEGER NULL,
    `template_id` INTEGER NULL,
    `design_image_url` TEXT NULL,
    `rendered_image_url` TEXT NULL,
    `render_config` LONGTEXT NULL,
    `status` ENUM('pending', 'processing', 'completed', 'failed') NULL DEFAULT 'pending',
    `error_message` TEXT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `customer_id`(`customer_id`),
    INDEX `product_id`(`product_id`),
    INDEX `template_id`(`template_id`),
    PRIMARY KEY (`render_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `administrative_regions` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NOT NULL,
    `code_name` VARCHAR(255) NULL,
    `code_name_en` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `administrative_units` (
    `id` INTEGER NOT NULL,
    `full_name` VARCHAR(255) NULL,
    `full_name_en` VARCHAR(255) NULL,
    `short_name` VARCHAR(255) NULL,
    `short_name_en` VARCHAR(255) NULL,
    `code_name` VARCHAR(255) NULL,
    `code_name_en` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cancel_requests` ADD CONSTRAINT `cancel_requests_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts`(`cart_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`variant_id`) REFERENCES `product_variants`(`variant_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_ibfk_3` FOREIGN KEY (`render_id`) REFERENCES `mockup_renders`(`render_id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `customer_addresses` ADD CONSTRAINT `customer_addresses_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`variant_id`) REFERENCES `product_variants`(`variant_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_ibfk_3` FOREIGN KEY (`render_id`) REFERENCES `mockup_renders`(`render_id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`address_id`) REFERENCES `customer_addresses`(`address_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `product_media` ADD CONSTRAINT `product_media_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `product_variants` ADD CONSTRAINT `product_variants_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `sellers`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `promotion_usages` ADD CONSTRAINT `promotion_usages_ibfk_1` FOREIGN KEY (`promotion_id`) REFERENCES `promotions`(`promotion_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `promotion_usages` ADD CONSTRAINT `promotion_usages_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `promotion_usages` ADD CONSTRAINT `promotion_usages_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `provinces` ADD CONSTRAINT `provinces_administrative_unit_id_fkey` FOREIGN KEY (`administrative_unit_id`) REFERENCES `administrative_units`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `refunds` ADD CONSTRAINT `refunds_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `review_media` ADD CONSTRAINT `review_media_ibfk_1` FOREIGN KEY (`review_id`) REFERENCES `reviews`(`review_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`order_item_id`) REFERENCES `order_items`(`order_item_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `sellers` ADD CONSTRAINT `sellers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `shipments` ADD CONSTRAINT `shipments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conversations` ADD CONSTRAINT `conversations_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conversations` ADD CONSTRAINT `conversations_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`conversation_id`) REFERENCES `conversations`(`conversation_id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`sender_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `wallet_transactions` ADD CONSTRAINT `wallet_transactions_ibfk_1` FOREIGN KEY (`wallet_id`) REFERENCES `wallets`(`wallet_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `wallet_transactions` ADD CONSTRAINT `wallet_transactions_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `wallets` ADD CONSTRAINT `wallets_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `sellers`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `wards` ADD CONSTRAINT `wards_administrative_unit_id_fkey` FOREIGN KEY (`administrative_unit_id`) REFERENCES `administrative_units`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `wards` ADD CONSTRAINT `wards_province_code_fkey` FOREIGN KEY (`province_id`) REFERENCES `provinces`(`province_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `mockup_templates` ADD CONSTRAINT `mockup_templates_ibfk_1` FOREIGN KEY (`variant_id`) REFERENCES `product_variants`(`variant_id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `mockup_renders` ADD CONSTRAINT `mockup_renders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `mockup_renders` ADD CONSTRAINT `mockup_renders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `mockup_renders` ADD CONSTRAINT `mockup_renders_ibfk_3` FOREIGN KEY (`template_id`) REFERENCES `mockup_templates`(`template_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
