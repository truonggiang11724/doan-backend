import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly cancel_requests: "cancel_requests";
    readonly cart_items: "cart_items";
    readonly carts: "carts";
    readonly categories: "categories";
    readonly customer_addresses: "customer_addresses";
    readonly customers: "customers";
    readonly order_items: "order_items";
    readonly orders: "orders";
    readonly payments: "payments";
    readonly product_media: "product_media";
    readonly product_variants: "product_variants";
    readonly products: "products";
    readonly promotion_usages: "promotion_usages";
    readonly promotions: "promotions";
    readonly provinces: "provinces";
    readonly refunds: "refunds";
    readonly review_media: "review_media";
    readonly reviews: "reviews";
    readonly sellers: "sellers";
    readonly shipments: "shipments";
    readonly users: "users";
    readonly wallet_transactions: "wallet_transactions";
    readonly wallets: "wallets";
    readonly wards: "wards";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Cancel_requestsScalarFieldEnum: {
    readonly cancel_request_id: "cancel_request_id";
    readonly order_id: "order_id";
    readonly reason: "reason";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type Cancel_requestsScalarFieldEnum = (typeof Cancel_requestsScalarFieldEnum)[keyof typeof Cancel_requestsScalarFieldEnum];
export declare const Cart_itemsScalarFieldEnum: {
    readonly cart_item_id: "cart_item_id";
    readonly cart_id: "cart_id";
    readonly variant_id: "variant_id";
    readonly quantity: "quantity";
    readonly created_at: "created_at";
};
export type Cart_itemsScalarFieldEnum = (typeof Cart_itemsScalarFieldEnum)[keyof typeof Cart_itemsScalarFieldEnum];
export declare const CartsScalarFieldEnum: {
    readonly cart_id: "cart_id";
    readonly customer_id: "customer_id";
    readonly updated_at: "updated_at";
};
export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum];
export declare const CategoriesScalarFieldEnum: {
    readonly category_id: "category_id";
    readonly name: "name";
    readonly description: "description";
    readonly thumbnail: "thumbnail";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];
export declare const Customer_addressesScalarFieldEnum: {
    readonly address_id: "address_id";
    readonly customer_id: "customer_id";
    readonly receiver_name: "receiver_name";
    readonly phone: "phone";
    readonly province: "province";
    readonly district: "district";
    readonly ward: "ward";
    readonly address_detail: "address_detail";
    readonly is_default: "is_default";
    readonly created_at: "created_at";
};
export type Customer_addressesScalarFieldEnum = (typeof Customer_addressesScalarFieldEnum)[keyof typeof Customer_addressesScalarFieldEnum];
export declare const CustomersScalarFieldEnum: {
    readonly customer_id: "customer_id";
    readonly loyalty_point: "loyalty_point";
    readonly level: "level";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum];
export declare const Order_itemsScalarFieldEnum: {
    readonly order_item_id: "order_item_id";
    readonly order_id: "order_id";
    readonly variant_id: "variant_id";
    readonly quantity: "quantity";
    readonly unit_price: "unit_price";
};
export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum];
export declare const OrdersScalarFieldEnum: {
    readonly order_id: "order_id";
    readonly customer_id: "customer_id";
    readonly seller_id: "seller_id";
    readonly address_id: "address_id";
    readonly order_status: "order_status";
    readonly payment_status: "payment_status";
    readonly total_amount: "total_amount";
    readonly created_at: "created_at";
};
export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly payment_id: "payment_id";
    readonly order_id: "order_id";
    readonly payment_method: "payment_method";
    readonly provider: "provider";
    readonly amount: "amount";
    readonly status: "status";
    readonly transaction_code: "transaction_code";
    readonly created_at: "created_at";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const Product_mediaScalarFieldEnum: {
    readonly media_id: "media_id";
    readonly product_id: "product_id";
    readonly media_url: "media_url";
    readonly media_type: "media_type";
    readonly is_primary: "is_primary";
};
export type Product_mediaScalarFieldEnum = (typeof Product_mediaScalarFieldEnum)[keyof typeof Product_mediaScalarFieldEnum];
export declare const Product_variantsScalarFieldEnum: {
    readonly variant_id: "variant_id";
    readonly product_id: "product_id";
    readonly sku: "sku";
    readonly color: "color";
    readonly size: "size";
    readonly price: "price";
    readonly stock_quantity: "stock_quantity";
};
export type Product_variantsScalarFieldEnum = (typeof Product_variantsScalarFieldEnum)[keyof typeof Product_variantsScalarFieldEnum];
export declare const ProductsScalarFieldEnum: {
    readonly product_id: "product_id";
    readonly seller_id: "seller_id";
    readonly category_id: "category_id";
    readonly product_name: "product_name";
    readonly description: "description";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum];
export declare const Promotion_usagesScalarFieldEnum: {
    readonly promotion_usage_id: "promotion_usage_id";
    readonly promotion_id: "promotion_id";
    readonly customer_id: "customer_id";
    readonly order_id: "order_id";
    readonly used_at: "used_at";
};
export type Promotion_usagesScalarFieldEnum = (typeof Promotion_usagesScalarFieldEnum)[keyof typeof Promotion_usagesScalarFieldEnum];
export declare const PromotionsScalarFieldEnum: {
    readonly promotion_id: "promotion_id";
    readonly promotion_type: "promotion_type";
    readonly discount_value: "discount_value";
    readonly min_order_value: "min_order_value";
    readonly start_date: "start_date";
    readonly end_date: "end_date";
    readonly status: "status";
};
export type PromotionsScalarFieldEnum = (typeof PromotionsScalarFieldEnum)[keyof typeof PromotionsScalarFieldEnum];
export declare const ProvincesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type ProvincesScalarFieldEnum = (typeof ProvincesScalarFieldEnum)[keyof typeof ProvincesScalarFieldEnum];
export declare const RefundsScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly reason: "reason";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type RefundsScalarFieldEnum = (typeof RefundsScalarFieldEnum)[keyof typeof RefundsScalarFieldEnum];
export declare const Review_mediaScalarFieldEnum: {
    readonly id: "id";
    readonly review_id: "review_id";
    readonly media_url: "media_url";
    readonly media_type: "media_type";
};
export type Review_mediaScalarFieldEnum = (typeof Review_mediaScalarFieldEnum)[keyof typeof Review_mediaScalarFieldEnum];
export declare const ReviewsScalarFieldEnum: {
    readonly review_id: "review_id";
    readonly customer_id: "customer_id";
    readonly product_id: "product_id";
    readonly order_item_id: "order_item_id";
    readonly rating: "rating";
    readonly content: "content";
    readonly media_url: "media_url";
    readonly created_at: "created_at";
};
export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum];
export declare const SellersScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly shop_name: "shop_name";
    readonly rating: "rating";
    readonly theme_description: "theme_description";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SellersScalarFieldEnum = (typeof SellersScalarFieldEnum)[keyof typeof SellersScalarFieldEnum];
export declare const ShipmentsScalarFieldEnum: {
    readonly shipment_id: "shipment_id";
    readonly order_id: "order_id";
    readonly tracking_number: "tracking_number";
    readonly carrier: "carrier";
    readonly shipping_fee: "shipping_fee";
    readonly status: "status";
    readonly expected_delivery_date: "expected_delivery_date";
};
export type ShipmentsScalarFieldEnum = (typeof ShipmentsScalarFieldEnum)[keyof typeof ShipmentsScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly tiktok_user_id: "tiktok_user_id";
    readonly username: "username";
    readonly password_hash: "password_hash";
    readonly email: "email";
    readonly phone: "phone";
    readonly full_name: "full_name";
    readonly avatar_url: "avatar_url";
    readonly role: "role";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const Wallet_transactionsScalarFieldEnum: {
    readonly transaction_id: "transaction_id";
    readonly wallet_id: "wallet_id";
    readonly order_id: "order_id";
    readonly transaction_type: "transaction_type";
    readonly amount: "amount";
    readonly created_at: "created_at";
};
export type Wallet_transactionsScalarFieldEnum = (typeof Wallet_transactionsScalarFieldEnum)[keyof typeof Wallet_transactionsScalarFieldEnum];
export declare const WalletsScalarFieldEnum: {
    readonly wallet_id: "wallet_id";
    readonly seller_id: "seller_id";
    readonly available_balance: "available_balance";
    readonly pending_balance: "pending_balance";
    readonly withdrawn_balance: "withdrawn_balance";
    readonly total_revenue: "total_revenue";
    readonly updated_at: "updated_at";
};
export type WalletsScalarFieldEnum = (typeof WalletsScalarFieldEnum)[keyof typeof WalletsScalarFieldEnum];
export declare const WardsScalarFieldEnum: {
    readonly id: "id";
    readonly province_id: "province_id";
    readonly name: "name";
};
export type WardsScalarFieldEnum = (typeof WardsScalarFieldEnum)[keyof typeof WardsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const cancel_requestsOrderByRelevanceFieldEnum: {
    readonly reason: "reason";
    readonly status: "status";
};
export type cancel_requestsOrderByRelevanceFieldEnum = (typeof cancel_requestsOrderByRelevanceFieldEnum)[keyof typeof cancel_requestsOrderByRelevanceFieldEnum];
export declare const categoriesOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
    readonly thumbnail: "thumbnail";
    readonly status: "status";
};
export type categoriesOrderByRelevanceFieldEnum = (typeof categoriesOrderByRelevanceFieldEnum)[keyof typeof categoriesOrderByRelevanceFieldEnum];
export declare const customer_addressesOrderByRelevanceFieldEnum: {
    readonly receiver_name: "receiver_name";
    readonly phone: "phone";
    readonly province: "province";
    readonly district: "district";
    readonly ward: "ward";
    readonly address_detail: "address_detail";
};
export type customer_addressesOrderByRelevanceFieldEnum = (typeof customer_addressesOrderByRelevanceFieldEnum)[keyof typeof customer_addressesOrderByRelevanceFieldEnum];
export declare const ordersOrderByRelevanceFieldEnum: {
    readonly order_status: "order_status";
    readonly payment_status: "payment_status";
};
export type ordersOrderByRelevanceFieldEnum = (typeof ordersOrderByRelevanceFieldEnum)[keyof typeof ordersOrderByRelevanceFieldEnum];
export declare const paymentsOrderByRelevanceFieldEnum: {
    readonly payment_method: "payment_method";
    readonly provider: "provider";
    readonly status: "status";
    readonly transaction_code: "transaction_code";
};
export type paymentsOrderByRelevanceFieldEnum = (typeof paymentsOrderByRelevanceFieldEnum)[keyof typeof paymentsOrderByRelevanceFieldEnum];
export declare const product_mediaOrderByRelevanceFieldEnum: {
    readonly media_url: "media_url";
};
export type product_mediaOrderByRelevanceFieldEnum = (typeof product_mediaOrderByRelevanceFieldEnum)[keyof typeof product_mediaOrderByRelevanceFieldEnum];
export declare const product_variantsOrderByRelevanceFieldEnum: {
    readonly sku: "sku";
    readonly color: "color";
    readonly size: "size";
};
export type product_variantsOrderByRelevanceFieldEnum = (typeof product_variantsOrderByRelevanceFieldEnum)[keyof typeof product_variantsOrderByRelevanceFieldEnum];
export declare const productsOrderByRelevanceFieldEnum: {
    readonly product_name: "product_name";
    readonly description: "description";
};
export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum];
export declare const promotionsOrderByRelevanceFieldEnum: {
    readonly status: "status";
};
export type promotionsOrderByRelevanceFieldEnum = (typeof promotionsOrderByRelevanceFieldEnum)[keyof typeof promotionsOrderByRelevanceFieldEnum];
export declare const provincesOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type provincesOrderByRelevanceFieldEnum = (typeof provincesOrderByRelevanceFieldEnum)[keyof typeof provincesOrderByRelevanceFieldEnum];
export declare const refundsOrderByRelevanceFieldEnum: {
    readonly reason: "reason";
};
export type refundsOrderByRelevanceFieldEnum = (typeof refundsOrderByRelevanceFieldEnum)[keyof typeof refundsOrderByRelevanceFieldEnum];
export declare const review_mediaOrderByRelevanceFieldEnum: {
    readonly media_url: "media_url";
};
export type review_mediaOrderByRelevanceFieldEnum = (typeof review_mediaOrderByRelevanceFieldEnum)[keyof typeof review_mediaOrderByRelevanceFieldEnum];
export declare const reviewsOrderByRelevanceFieldEnum: {
    readonly content: "content";
    readonly media_url: "media_url";
};
export type reviewsOrderByRelevanceFieldEnum = (typeof reviewsOrderByRelevanceFieldEnum)[keyof typeof reviewsOrderByRelevanceFieldEnum];
export declare const sellersOrderByRelevanceFieldEnum: {
    readonly shop_name: "shop_name";
    readonly theme_description: "theme_description";
};
export type sellersOrderByRelevanceFieldEnum = (typeof sellersOrderByRelevanceFieldEnum)[keyof typeof sellersOrderByRelevanceFieldEnum];
export declare const shipmentsOrderByRelevanceFieldEnum: {
    readonly tracking_number: "tracking_number";
    readonly carrier: "carrier";
    readonly status: "status";
};
export type shipmentsOrderByRelevanceFieldEnum = (typeof shipmentsOrderByRelevanceFieldEnum)[keyof typeof shipmentsOrderByRelevanceFieldEnum];
export declare const usersOrderByRelevanceFieldEnum: {
    readonly tiktok_user_id: "tiktok_user_id";
    readonly username: "username";
    readonly password_hash: "password_hash";
    readonly email: "email";
    readonly phone: "phone";
    readonly full_name: "full_name";
    readonly avatar_url: "avatar_url";
};
export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum];
export declare const wardsOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type wardsOrderByRelevanceFieldEnum = (typeof wardsOrderByRelevanceFieldEnum)[keyof typeof wardsOrderByRelevanceFieldEnum];
