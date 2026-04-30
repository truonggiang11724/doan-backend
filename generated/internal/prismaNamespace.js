"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentsOrderByRelevanceFieldEnum = exports.ordersOrderByRelevanceFieldEnum = exports.customer_addressesOrderByRelevanceFieldEnum = exports.categoriesOrderByRelevanceFieldEnum = exports.cancel_requestsOrderByRelevanceFieldEnum = exports.NullsOrder = exports.SortOrder = exports.WardsScalarFieldEnum = exports.WalletsScalarFieldEnum = exports.Wallet_transactionsScalarFieldEnum = exports.UsersScalarFieldEnum = exports.ShipmentsScalarFieldEnum = exports.SellersScalarFieldEnum = exports.ReviewsScalarFieldEnum = exports.Review_mediaScalarFieldEnum = exports.RefundsScalarFieldEnum = exports.ProvincesScalarFieldEnum = exports.PromotionsScalarFieldEnum = exports.Promotion_usagesScalarFieldEnum = exports.ProductsScalarFieldEnum = exports.Product_variantsScalarFieldEnum = exports.Product_mediaScalarFieldEnum = exports.PaymentsScalarFieldEnum = exports.OrdersScalarFieldEnum = exports.Order_itemsScalarFieldEnum = exports.CustomersScalarFieldEnum = exports.Customer_addressesScalarFieldEnum = exports.CategoriesScalarFieldEnum = exports.CartsScalarFieldEnum = exports.Cart_itemsScalarFieldEnum = exports.Cancel_requestsScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.defineExtension = exports.wardsOrderByRelevanceFieldEnum = exports.usersOrderByRelevanceFieldEnum = exports.shipmentsOrderByRelevanceFieldEnum = exports.sellersOrderByRelevanceFieldEnum = exports.reviewsOrderByRelevanceFieldEnum = exports.review_mediaOrderByRelevanceFieldEnum = exports.refundsOrderByRelevanceFieldEnum = exports.provincesOrderByRelevanceFieldEnum = exports.promotionsOrderByRelevanceFieldEnum = exports.productsOrderByRelevanceFieldEnum = exports.product_variantsOrderByRelevanceFieldEnum = exports.product_mediaOrderByRelevanceFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.5.0",
    engine: "280c870be64f457428992c43c1f6d557fab6e29e"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    cancel_requests: 'cancel_requests',
    cart_items: 'cart_items',
    carts: 'carts',
    categories: 'categories',
    customer_addresses: 'customer_addresses',
    customers: 'customers',
    order_items: 'order_items',
    orders: 'orders',
    payments: 'payments',
    product_media: 'product_media',
    product_variants: 'product_variants',
    products: 'products',
    promotion_usages: 'promotion_usages',
    promotions: 'promotions',
    provinces: 'provinces',
    refunds: 'refunds',
    review_media: 'review_media',
    reviews: 'reviews',
    sellers: 'sellers',
    shipments: 'shipments',
    users: 'users',
    wallet_transactions: 'wallet_transactions',
    wallets: 'wallets',
    wards: 'wards'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Cancel_requestsScalarFieldEnum = {
    cancel_request_id: 'cancel_request_id',
    order_id: 'order_id',
    reason: 'reason',
    status: 'status',
    created_at: 'created_at'
};
exports.Cart_itemsScalarFieldEnum = {
    cart_item_id: 'cart_item_id',
    cart_id: 'cart_id',
    variant_id: 'variant_id',
    quantity: 'quantity',
    created_at: 'created_at'
};
exports.CartsScalarFieldEnum = {
    cart_id: 'cart_id',
    customer_id: 'customer_id',
    updated_at: 'updated_at'
};
exports.CategoriesScalarFieldEnum = {
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    thumbnail: 'thumbnail',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Customer_addressesScalarFieldEnum = {
    address_id: 'address_id',
    customer_id: 'customer_id',
    receiver_name: 'receiver_name',
    phone: 'phone',
    province: 'province',
    district: 'district',
    ward: 'ward',
    address_detail: 'address_detail',
    is_default: 'is_default',
    created_at: 'created_at'
};
exports.CustomersScalarFieldEnum = {
    customer_id: 'customer_id',
    loyalty_point: 'loyalty_point',
    level: 'level',
    status: 'status',
    created_at: 'created_at'
};
exports.Order_itemsScalarFieldEnum = {
    order_item_id: 'order_item_id',
    order_id: 'order_id',
    variant_id: 'variant_id',
    quantity: 'quantity',
    unit_price: 'unit_price'
};
exports.OrdersScalarFieldEnum = {
    order_id: 'order_id',
    customer_id: 'customer_id',
    seller_id: 'seller_id',
    address_id: 'address_id',
    order_status: 'order_status',
    payment_status: 'payment_status',
    total_amount: 'total_amount',
    created_at: 'created_at'
};
exports.PaymentsScalarFieldEnum = {
    payment_id: 'payment_id',
    order_id: 'order_id',
    payment_method: 'payment_method',
    provider: 'provider',
    amount: 'amount',
    status: 'status',
    transaction_code: 'transaction_code',
    created_at: 'created_at'
};
exports.Product_mediaScalarFieldEnum = {
    media_id: 'media_id',
    product_id: 'product_id',
    media_url: 'media_url',
    media_type: 'media_type',
    is_primary: 'is_primary'
};
exports.Product_variantsScalarFieldEnum = {
    variant_id: 'variant_id',
    product_id: 'product_id',
    sku: 'sku',
    color: 'color',
    size: 'size',
    price: 'price',
    stock_quantity: 'stock_quantity'
};
exports.ProductsScalarFieldEnum = {
    product_id: 'product_id',
    seller_id: 'seller_id',
    category_id: 'category_id',
    product_name: 'product_name',
    description: 'description',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Promotion_usagesScalarFieldEnum = {
    promotion_usage_id: 'promotion_usage_id',
    promotion_id: 'promotion_id',
    customer_id: 'customer_id',
    order_id: 'order_id',
    used_at: 'used_at'
};
exports.PromotionsScalarFieldEnum = {
    promotion_id: 'promotion_id',
    promotion_type: 'promotion_type',
    discount_value: 'discount_value',
    min_order_value: 'min_order_value',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status'
};
exports.ProvincesScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.RefundsScalarFieldEnum = {
    id: 'id',
    order_id: 'order_id',
    reason: 'reason',
    status: 'status',
    created_at: 'created_at'
};
exports.Review_mediaScalarFieldEnum = {
    id: 'id',
    review_id: 'review_id',
    media_url: 'media_url',
    media_type: 'media_type'
};
exports.ReviewsScalarFieldEnum = {
    review_id: 'review_id',
    customer_id: 'customer_id',
    product_id: 'product_id',
    order_item_id: 'order_item_id',
    rating: 'rating',
    content: 'content',
    media_url: 'media_url',
    created_at: 'created_at'
};
exports.SellersScalarFieldEnum = {
    user_id: 'user_id',
    shop_name: 'shop_name',
    rating: 'rating',
    theme_description: 'theme_description',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ShipmentsScalarFieldEnum = {
    shipment_id: 'shipment_id',
    order_id: 'order_id',
    tracking_number: 'tracking_number',
    carrier: 'carrier',
    shipping_fee: 'shipping_fee',
    status: 'status',
    expected_delivery_date: 'expected_delivery_date'
};
exports.UsersScalarFieldEnum = {
    user_id: 'user_id',
    tiktok_user_id: 'tiktok_user_id',
    username: 'username',
    password_hash: 'password_hash',
    email: 'email',
    phone: 'phone',
    full_name: 'full_name',
    avatar_url: 'avatar_url',
    role: 'role',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Wallet_transactionsScalarFieldEnum = {
    transaction_id: 'transaction_id',
    wallet_id: 'wallet_id',
    order_id: 'order_id',
    transaction_type: 'transaction_type',
    amount: 'amount',
    created_at: 'created_at'
};
exports.WalletsScalarFieldEnum = {
    wallet_id: 'wallet_id',
    seller_id: 'seller_id',
    available_balance: 'available_balance',
    pending_balance: 'pending_balance',
    withdrawn_balance: 'withdrawn_balance',
    total_revenue: 'total_revenue',
    updated_at: 'updated_at'
};
exports.WardsScalarFieldEnum = {
    id: 'id',
    province_id: 'province_id',
    name: 'name'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.cancel_requestsOrderByRelevanceFieldEnum = {
    reason: 'reason',
    status: 'status'
};
exports.categoriesOrderByRelevanceFieldEnum = {
    name: 'name',
    description: 'description',
    thumbnail: 'thumbnail',
    status: 'status'
};
exports.customer_addressesOrderByRelevanceFieldEnum = {
    receiver_name: 'receiver_name',
    phone: 'phone',
    province: 'province',
    district: 'district',
    ward: 'ward',
    address_detail: 'address_detail'
};
exports.ordersOrderByRelevanceFieldEnum = {
    order_status: 'order_status',
    payment_status: 'payment_status'
};
exports.paymentsOrderByRelevanceFieldEnum = {
    payment_method: 'payment_method',
    provider: 'provider',
    status: 'status',
    transaction_code: 'transaction_code'
};
exports.product_mediaOrderByRelevanceFieldEnum = {
    media_url: 'media_url'
};
exports.product_variantsOrderByRelevanceFieldEnum = {
    sku: 'sku',
    color: 'color',
    size: 'size'
};
exports.productsOrderByRelevanceFieldEnum = {
    product_name: 'product_name',
    description: 'description'
};
exports.promotionsOrderByRelevanceFieldEnum = {
    status: 'status'
};
exports.provincesOrderByRelevanceFieldEnum = {
    name: 'name'
};
exports.refundsOrderByRelevanceFieldEnum = {
    reason: 'reason'
};
exports.review_mediaOrderByRelevanceFieldEnum = {
    media_url: 'media_url'
};
exports.reviewsOrderByRelevanceFieldEnum = {
    content: 'content',
    media_url: 'media_url'
};
exports.sellersOrderByRelevanceFieldEnum = {
    shop_name: 'shop_name',
    theme_description: 'theme_description'
};
exports.shipmentsOrderByRelevanceFieldEnum = {
    tracking_number: 'tracking_number',
    carrier: 'carrier',
    status: 'status'
};
exports.usersOrderByRelevanceFieldEnum = {
    tiktok_user_id: 'tiktok_user_id',
    username: 'username',
    password_hash: 'password_hash',
    email: 'email',
    phone: 'phone',
    full_name: 'full_name',
    avatar_url: 'avatar_url'
};
exports.wardsOrderByRelevanceFieldEnum = {
    name: 'name'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map