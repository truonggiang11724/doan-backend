import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ordersModel = runtime.Types.Result.DefaultSelection<Prisma.$ordersPayload>;
export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null;
    _avg: OrdersAvgAggregateOutputType | null;
    _sum: OrdersSumAggregateOutputType | null;
    _min: OrdersMinAggregateOutputType | null;
    _max: OrdersMaxAggregateOutputType | null;
};
export type OrdersAvgAggregateOutputType = {
    order_id: number | null;
    customer_id: number | null;
    seller_id: number | null;
    address_id: number | null;
    total_amount: runtime.Decimal | null;
};
export type OrdersSumAggregateOutputType = {
    order_id: bigint | null;
    customer_id: bigint | null;
    seller_id: bigint | null;
    address_id: number | null;
    total_amount: runtime.Decimal | null;
};
export type OrdersMinAggregateOutputType = {
    order_id: bigint | null;
    customer_id: bigint | null;
    seller_id: bigint | null;
    address_id: number | null;
    order_status: string | null;
    payment_status: string | null;
    total_amount: runtime.Decimal | null;
    created_at: Date | null;
};
export type OrdersMaxAggregateOutputType = {
    order_id: bigint | null;
    customer_id: bigint | null;
    seller_id: bigint | null;
    address_id: number | null;
    order_status: string | null;
    payment_status: string | null;
    total_amount: runtime.Decimal | null;
    created_at: Date | null;
};
export type OrdersCountAggregateOutputType = {
    order_id: number;
    customer_id: number;
    seller_id: number;
    address_id: number;
    order_status: number;
    payment_status: number;
    total_amount: number;
    created_at: number;
    _all: number;
};
export type OrdersAvgAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    seller_id?: true;
    address_id?: true;
    total_amount?: true;
};
export type OrdersSumAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    seller_id?: true;
    address_id?: true;
    total_amount?: true;
};
export type OrdersMinAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    seller_id?: true;
    address_id?: true;
    order_status?: true;
    payment_status?: true;
    total_amount?: true;
    created_at?: true;
};
export type OrdersMaxAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    seller_id?: true;
    address_id?: true;
    order_status?: true;
    payment_status?: true;
    total_amount?: true;
    created_at?: true;
};
export type OrdersCountAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    seller_id?: true;
    address_id?: true;
    order_status?: true;
    payment_status?: true;
    total_amount?: true;
    created_at?: true;
    _all?: true;
};
export type OrdersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrdersCountAggregateInputType;
    _avg?: OrdersAvgAggregateInputType;
    _sum?: OrdersSumAggregateInputType;
    _min?: OrdersMinAggregateInputType;
    _max?: OrdersMaxAggregateInputType;
};
export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
    [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrders[P]> : Prisma.GetScalarType<T[P], AggregateOrders[P]>;
};
export type ordersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithAggregationInput | Prisma.ordersOrderByWithAggregationInput[];
    by: Prisma.OrdersScalarFieldEnum[] | Prisma.OrdersScalarFieldEnum;
    having?: Prisma.ordersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrdersCountAggregateInputType | true;
    _avg?: OrdersAvgAggregateInputType;
    _sum?: OrdersSumAggregateInputType;
    _min?: OrdersMinAggregateInputType;
    _max?: OrdersMaxAggregateInputType;
};
export type OrdersGroupByOutputType = {
    order_id: bigint;
    customer_id: bigint | null;
    seller_id: bigint | null;
    address_id: number | null;
    order_status: string | null;
    payment_status: string | null;
    total_amount: runtime.Decimal | null;
    created_at: Date | null;
    _count: OrdersCountAggregateOutputType | null;
    _avg: OrdersAvgAggregateOutputType | null;
    _sum: OrdersSumAggregateOutputType | null;
    _min: OrdersMinAggregateOutputType | null;
    _max: OrdersMaxAggregateOutputType | null;
};
type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrdersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrdersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrdersGroupByOutputType[P]>;
}>>;
export type ordersWhereInput = {
    AND?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    OR?: Prisma.ordersWhereInput[];
    NOT?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    order_id?: Prisma.BigIntFilter<"orders"> | bigint | number;
    customer_id?: Prisma.BigIntNullableFilter<"orders"> | bigint | number | null;
    seller_id?: Prisma.BigIntNullableFilter<"orders"> | bigint | number | null;
    address_id?: Prisma.IntNullableFilter<"orders"> | number | null;
    order_status?: Prisma.StringNullableFilter<"orders"> | string | null;
    payment_status?: Prisma.StringNullableFilter<"orders"> | string | null;
    total_amount?: Prisma.DecimalNullableFilter<"orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"orders"> | Date | string | null;
    cancel_requests?: Prisma.Cancel_requestsListRelationFilter;
    order_items?: Prisma.Order_itemsListRelationFilter;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    sellers?: Prisma.XOR<Prisma.SellersNullableScalarRelationFilter, Prisma.sellersWhereInput> | null;
    wards?: Prisma.XOR<Prisma.WardsNullableScalarRelationFilter, Prisma.wardsWhereInput> | null;
    payments?: Prisma.PaymentsListRelationFilter;
    promotion_usages?: Prisma.Promotion_usagesListRelationFilter;
    refunds?: Prisma.RefundsListRelationFilter;
    shipments?: Prisma.ShipmentsListRelationFilter;
    wallet_transactions?: Prisma.Wallet_transactionsListRelationFilter;
};
export type ordersOrderByWithRelationInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    seller_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    address_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancel_requests?: Prisma.cancel_requestsOrderByRelationAggregateInput;
    order_items?: Prisma.order_itemsOrderByRelationAggregateInput;
    customers?: Prisma.customersOrderByWithRelationInput;
    sellers?: Prisma.sellersOrderByWithRelationInput;
    wards?: Prisma.wardsOrderByWithRelationInput;
    payments?: Prisma.paymentsOrderByRelationAggregateInput;
    promotion_usages?: Prisma.promotion_usagesOrderByRelationAggregateInput;
    refunds?: Prisma.refundsOrderByRelationAggregateInput;
    shipments?: Prisma.shipmentsOrderByRelationAggregateInput;
    wallet_transactions?: Prisma.wallet_transactionsOrderByRelationAggregateInput;
    _relevance?: Prisma.ordersOrderByRelevanceInput;
};
export type ordersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: bigint | number;
    AND?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    OR?: Prisma.ordersWhereInput[];
    NOT?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    customer_id?: Prisma.BigIntNullableFilter<"orders"> | bigint | number | null;
    seller_id?: Prisma.BigIntNullableFilter<"orders"> | bigint | number | null;
    address_id?: Prisma.IntNullableFilter<"orders"> | number | null;
    order_status?: Prisma.StringNullableFilter<"orders"> | string | null;
    payment_status?: Prisma.StringNullableFilter<"orders"> | string | null;
    total_amount?: Prisma.DecimalNullableFilter<"orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"orders"> | Date | string | null;
    cancel_requests?: Prisma.Cancel_requestsListRelationFilter;
    order_items?: Prisma.Order_itemsListRelationFilter;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    sellers?: Prisma.XOR<Prisma.SellersNullableScalarRelationFilter, Prisma.sellersWhereInput> | null;
    wards?: Prisma.XOR<Prisma.WardsNullableScalarRelationFilter, Prisma.wardsWhereInput> | null;
    payments?: Prisma.PaymentsListRelationFilter;
    promotion_usages?: Prisma.Promotion_usagesListRelationFilter;
    refunds?: Prisma.RefundsListRelationFilter;
    shipments?: Prisma.ShipmentsListRelationFilter;
    wallet_transactions?: Prisma.Wallet_transactionsListRelationFilter;
}, "order_id">;
export type ordersOrderByWithAggregationInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    seller_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    address_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ordersCountOrderByAggregateInput;
    _avg?: Prisma.ordersAvgOrderByAggregateInput;
    _max?: Prisma.ordersMaxOrderByAggregateInput;
    _min?: Prisma.ordersMinOrderByAggregateInput;
    _sum?: Prisma.ordersSumOrderByAggregateInput;
};
export type ordersScalarWhereWithAggregatesInput = {
    AND?: Prisma.ordersScalarWhereWithAggregatesInput | Prisma.ordersScalarWhereWithAggregatesInput[];
    OR?: Prisma.ordersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ordersScalarWhereWithAggregatesInput | Prisma.ordersScalarWhereWithAggregatesInput[];
    order_id?: Prisma.BigIntWithAggregatesFilter<"orders"> | bigint | number;
    customer_id?: Prisma.BigIntNullableWithAggregatesFilter<"orders"> | bigint | number | null;
    seller_id?: Prisma.BigIntNullableWithAggregatesFilter<"orders"> | bigint | number | null;
    address_id?: Prisma.IntNullableWithAggregatesFilter<"orders"> | number | null;
    order_status?: Prisma.StringNullableWithAggregatesFilter<"orders"> | string | null;
    payment_status?: Prisma.StringNullableWithAggregatesFilter<"orders"> | string | null;
    total_amount?: Prisma.DecimalNullableWithAggregatesFilter<"orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null;
};
export type ordersCreateInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    customers?: Prisma.customersCreateNestedOneWithoutOrdersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutOrdersInput;
    wards?: Prisma.wardsCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersUpdateInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutOrdersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutOrdersNestedInput;
    wards?: Prisma.wardsUpdateOneWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateManyInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type ordersUpdateManyMutationInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ordersUncheckedUpdateManyInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OrdersNullableScalarRelationFilter = {
    is?: Prisma.ordersWhereInput | null;
    isNot?: Prisma.ordersWhereInput | null;
};
export type OrdersListRelationFilter = {
    every?: Prisma.ordersWhereInput;
    some?: Prisma.ordersWhereInput;
    none?: Prisma.ordersWhereInput;
};
export type ordersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ordersOrderByRelevanceInput = {
    fields: Prisma.ordersOrderByRelevanceFieldEnum | Prisma.ordersOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ordersCountOrderByAggregateInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    order_status?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ordersAvgOrderByAggregateInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
};
export type ordersMaxOrderByAggregateInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    order_status?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ordersMinOrderByAggregateInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    order_status?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ordersSumOrderByAggregateInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
};
export type OrdersScalarRelationFilter = {
    is?: Prisma.ordersWhereInput;
    isNot?: Prisma.ordersWhereInput;
};
export type ordersCreateNestedOneWithoutCancel_requestsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCancel_requestsInput, Prisma.ordersUncheckedCreateWithoutCancel_requestsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCancel_requestsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneWithoutCancel_requestsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCancel_requestsInput, Prisma.ordersUncheckedCreateWithoutCancel_requestsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCancel_requestsInput;
    upsert?: Prisma.ordersUpsertWithoutCancel_requestsInput;
    disconnect?: Prisma.ordersWhereInput | boolean;
    delete?: Prisma.ordersWhereInput | boolean;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutCancel_requestsInput, Prisma.ordersUpdateWithoutCancel_requestsInput>, Prisma.ordersUncheckedUpdateWithoutCancel_requestsInput>;
};
export type ordersCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput> | Prisma.ordersCreateWithoutCustomersInput[] | Prisma.ordersUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCustomersInput | Prisma.ordersCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.ordersCreateManyCustomersInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput> | Prisma.ordersCreateWithoutCustomersInput[] | Prisma.ordersUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCustomersInput | Prisma.ordersCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.ordersCreateManyCustomersInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput> | Prisma.ordersCreateWithoutCustomersInput[] | Prisma.ordersUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCustomersInput | Prisma.ordersCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutCustomersInput | Prisma.ordersUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.ordersCreateManyCustomersInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutCustomersInput | Prisma.ordersUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutCustomersInput | Prisma.ordersUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput> | Prisma.ordersCreateWithoutCustomersInput[] | Prisma.ordersUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCustomersInput | Prisma.ordersCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutCustomersInput | Prisma.ordersUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.ordersCreateManyCustomersInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutCustomersInput | Prisma.ordersUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutCustomersInput | Prisma.ordersUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_itemsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_itemsInput;
    upsert?: Prisma.ordersUpsertWithoutOrder_itemsInput;
    disconnect?: Prisma.ordersWhereInput | boolean;
    delete?: Prisma.ordersWhereInput | boolean;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutOrder_itemsInput, Prisma.ordersUpdateWithoutOrder_itemsInput>, Prisma.ordersUncheckedUpdateWithoutOrder_itemsInput>;
};
export type ordersCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutPaymentsInput, Prisma.ordersUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutPaymentsInput, Prisma.ordersUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.ordersUpsertWithoutPaymentsInput;
    disconnect?: Prisma.ordersWhereInput | boolean;
    delete?: Prisma.ordersWhereInput | boolean;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutPaymentsInput, Prisma.ordersUpdateWithoutPaymentsInput>, Prisma.ordersUncheckedUpdateWithoutPaymentsInput>;
};
export type ordersCreateNestedOneWithoutPromotion_usagesInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutPromotion_usagesInput, Prisma.ordersUncheckedCreateWithoutPromotion_usagesInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutPromotion_usagesInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneWithoutPromotion_usagesNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutPromotion_usagesInput, Prisma.ordersUncheckedCreateWithoutPromotion_usagesInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutPromotion_usagesInput;
    upsert?: Prisma.ordersUpsertWithoutPromotion_usagesInput;
    disconnect?: Prisma.ordersWhereInput | boolean;
    delete?: Prisma.ordersWhereInput | boolean;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutPromotion_usagesInput, Prisma.ordersUpdateWithoutPromotion_usagesInput>, Prisma.ordersUncheckedUpdateWithoutPromotion_usagesInput>;
};
export type ordersCreateNestedOneWithoutRefundsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutRefundsInput, Prisma.ordersUncheckedCreateWithoutRefundsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutRefundsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneRequiredWithoutRefundsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutRefundsInput, Prisma.ordersUncheckedCreateWithoutRefundsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutRefundsInput;
    upsert?: Prisma.ordersUpsertWithoutRefundsInput;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutRefundsInput, Prisma.ordersUpdateWithoutRefundsInput>, Prisma.ordersUncheckedUpdateWithoutRefundsInput>;
};
export type ordersCreateNestedManyWithoutSellersInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutSellersInput, Prisma.ordersUncheckedCreateWithoutSellersInput> | Prisma.ordersCreateWithoutSellersInput[] | Prisma.ordersUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutSellersInput | Prisma.ordersCreateOrConnectWithoutSellersInput[];
    createMany?: Prisma.ordersCreateManySellersInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUncheckedCreateNestedManyWithoutSellersInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutSellersInput, Prisma.ordersUncheckedCreateWithoutSellersInput> | Prisma.ordersCreateWithoutSellersInput[] | Prisma.ordersUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutSellersInput | Prisma.ordersCreateOrConnectWithoutSellersInput[];
    createMany?: Prisma.ordersCreateManySellersInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUpdateManyWithoutSellersNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutSellersInput, Prisma.ordersUncheckedCreateWithoutSellersInput> | Prisma.ordersCreateWithoutSellersInput[] | Prisma.ordersUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutSellersInput | Prisma.ordersCreateOrConnectWithoutSellersInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutSellersInput | Prisma.ordersUpsertWithWhereUniqueWithoutSellersInput[];
    createMany?: Prisma.ordersCreateManySellersInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutSellersInput | Prisma.ordersUpdateWithWhereUniqueWithoutSellersInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutSellersInput | Prisma.ordersUpdateManyWithWhereWithoutSellersInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersUncheckedUpdateManyWithoutSellersNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutSellersInput, Prisma.ordersUncheckedCreateWithoutSellersInput> | Prisma.ordersCreateWithoutSellersInput[] | Prisma.ordersUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutSellersInput | Prisma.ordersCreateOrConnectWithoutSellersInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutSellersInput | Prisma.ordersUpsertWithWhereUniqueWithoutSellersInput[];
    createMany?: Prisma.ordersCreateManySellersInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutSellersInput | Prisma.ordersUpdateWithWhereUniqueWithoutSellersInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutSellersInput | Prisma.ordersUpdateManyWithWhereWithoutSellersInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersCreateNestedOneWithoutShipmentsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutShipmentsInput, Prisma.ordersUncheckedCreateWithoutShipmentsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutShipmentsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneWithoutShipmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutShipmentsInput, Prisma.ordersUncheckedCreateWithoutShipmentsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutShipmentsInput;
    upsert?: Prisma.ordersUpsertWithoutShipmentsInput;
    disconnect?: Prisma.ordersWhereInput | boolean;
    delete?: Prisma.ordersWhereInput | boolean;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutShipmentsInput, Prisma.ordersUpdateWithoutShipmentsInput>, Prisma.ordersUncheckedUpdateWithoutShipmentsInput>;
};
export type ordersCreateNestedOneWithoutWallet_transactionsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutWallet_transactionsInput, Prisma.ordersUncheckedCreateWithoutWallet_transactionsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutWallet_transactionsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneWithoutWallet_transactionsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutWallet_transactionsInput, Prisma.ordersUncheckedCreateWithoutWallet_transactionsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutWallet_transactionsInput;
    upsert?: Prisma.ordersUpsertWithoutWallet_transactionsInput;
    disconnect?: Prisma.ordersWhereInput | boolean;
    delete?: Prisma.ordersWhereInput | boolean;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutWallet_transactionsInput, Prisma.ordersUpdateWithoutWallet_transactionsInput>, Prisma.ordersUncheckedUpdateWithoutWallet_transactionsInput>;
};
export type ordersCreateNestedManyWithoutWardsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutWardsInput, Prisma.ordersUncheckedCreateWithoutWardsInput> | Prisma.ordersCreateWithoutWardsInput[] | Prisma.ordersUncheckedCreateWithoutWardsInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutWardsInput | Prisma.ordersCreateOrConnectWithoutWardsInput[];
    createMany?: Prisma.ordersCreateManyWardsInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUncheckedCreateNestedManyWithoutWardsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutWardsInput, Prisma.ordersUncheckedCreateWithoutWardsInput> | Prisma.ordersCreateWithoutWardsInput[] | Prisma.ordersUncheckedCreateWithoutWardsInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutWardsInput | Prisma.ordersCreateOrConnectWithoutWardsInput[];
    createMany?: Prisma.ordersCreateManyWardsInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUpdateManyWithoutWardsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutWardsInput, Prisma.ordersUncheckedCreateWithoutWardsInput> | Prisma.ordersCreateWithoutWardsInput[] | Prisma.ordersUncheckedCreateWithoutWardsInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutWardsInput | Prisma.ordersCreateOrConnectWithoutWardsInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutWardsInput | Prisma.ordersUpsertWithWhereUniqueWithoutWardsInput[];
    createMany?: Prisma.ordersCreateManyWardsInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutWardsInput | Prisma.ordersUpdateWithWhereUniqueWithoutWardsInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutWardsInput | Prisma.ordersUpdateManyWithWhereWithoutWardsInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersUncheckedUpdateManyWithoutWardsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutWardsInput, Prisma.ordersUncheckedCreateWithoutWardsInput> | Prisma.ordersCreateWithoutWardsInput[] | Prisma.ordersUncheckedCreateWithoutWardsInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutWardsInput | Prisma.ordersCreateOrConnectWithoutWardsInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutWardsInput | Prisma.ordersUpsertWithWhereUniqueWithoutWardsInput[];
    createMany?: Prisma.ordersCreateManyWardsInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutWardsInput | Prisma.ordersUpdateWithWhereUniqueWithoutWardsInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutWardsInput | Prisma.ordersUpdateManyWithWhereWithoutWardsInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersCreateWithoutCancel_requestsInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    customers?: Prisma.customersCreateNestedOneWithoutOrdersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutOrdersInput;
    wards?: Prisma.wardsCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutCancel_requestsInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutCancel_requestsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutCancel_requestsInput, Prisma.ordersUncheckedCreateWithoutCancel_requestsInput>;
};
export type ordersUpsertWithoutCancel_requestsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutCancel_requestsInput, Prisma.ordersUncheckedUpdateWithoutCancel_requestsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutCancel_requestsInput, Prisma.ordersUncheckedCreateWithoutCancel_requestsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutCancel_requestsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutCancel_requestsInput, Prisma.ordersUncheckedUpdateWithoutCancel_requestsInput>;
};
export type ordersUpdateWithoutCancel_requestsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutOrdersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutOrdersNestedInput;
    wards?: Prisma.wardsUpdateOneWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutCancel_requestsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutCustomersInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutOrdersInput;
    wards?: Prisma.wardsCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutCustomersInput = {
    order_id?: bigint | number;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutCustomersInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput>;
};
export type ordersCreateManyCustomersInputEnvelope = {
    data: Prisma.ordersCreateManyCustomersInput | Prisma.ordersCreateManyCustomersInput[];
    skipDuplicates?: boolean;
};
export type ordersUpsertWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.ordersWhereUniqueInput;
    update: Prisma.XOR<Prisma.ordersUpdateWithoutCustomersInput, Prisma.ordersUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput>;
};
export type ordersUpdateWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.ordersWhereUniqueInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutCustomersInput, Prisma.ordersUncheckedUpdateWithoutCustomersInput>;
};
export type ordersUpdateManyWithWhereWithoutCustomersInput = {
    where: Prisma.ordersScalarWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyWithoutCustomersInput>;
};
export type ordersScalarWhereInput = {
    AND?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
    OR?: Prisma.ordersScalarWhereInput[];
    NOT?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
    order_id?: Prisma.BigIntFilter<"orders"> | bigint | number;
    customer_id?: Prisma.BigIntNullableFilter<"orders"> | bigint | number | null;
    seller_id?: Prisma.BigIntNullableFilter<"orders"> | bigint | number | null;
    address_id?: Prisma.IntNullableFilter<"orders"> | number | null;
    order_status?: Prisma.StringNullableFilter<"orders"> | string | null;
    payment_status?: Prisma.StringNullableFilter<"orders"> | string | null;
    total_amount?: Prisma.DecimalNullableFilter<"orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"orders"> | Date | string | null;
};
export type ordersCreateWithoutOrder_itemsInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsCreateNestedManyWithoutOrdersInput;
    customers?: Prisma.customersCreateNestedOneWithoutOrdersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutOrdersInput;
    wards?: Prisma.wardsCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
};
export type ordersUpsertWithoutOrder_itemsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutOrder_itemsInput, Prisma.ordersUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutOrder_itemsInput, Prisma.ordersUncheckedUpdateWithoutOrder_itemsInput>;
};
export type ordersUpdateWithoutOrder_itemsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutOrdersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutOrdersNestedInput;
    wards?: Prisma.wardsUpdateOneWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutPaymentsInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    customers?: Prisma.customersCreateNestedOneWithoutOrdersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutOrdersInput;
    wards?: Prisma.wardsCreateNestedOneWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutPaymentsInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutPaymentsInput, Prisma.ordersUncheckedCreateWithoutPaymentsInput>;
};
export type ordersUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutPaymentsInput, Prisma.ordersUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutPaymentsInput, Prisma.ordersUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutPaymentsInput, Prisma.ordersUncheckedUpdateWithoutPaymentsInput>;
};
export type ordersUpdateWithoutPaymentsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutOrdersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutOrdersNestedInput;
    wards?: Prisma.wardsUpdateOneWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutPaymentsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutPromotion_usagesInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    customers?: Prisma.customersCreateNestedOneWithoutOrdersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutOrdersInput;
    wards?: Prisma.wardsCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutPromotion_usagesInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutPromotion_usagesInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutPromotion_usagesInput, Prisma.ordersUncheckedCreateWithoutPromotion_usagesInput>;
};
export type ordersUpsertWithoutPromotion_usagesInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutPromotion_usagesInput, Prisma.ordersUncheckedUpdateWithoutPromotion_usagesInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutPromotion_usagesInput, Prisma.ordersUncheckedCreateWithoutPromotion_usagesInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutPromotion_usagesInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutPromotion_usagesInput, Prisma.ordersUncheckedUpdateWithoutPromotion_usagesInput>;
};
export type ordersUpdateWithoutPromotion_usagesInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutOrdersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutOrdersNestedInput;
    wards?: Prisma.wardsUpdateOneWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutPromotion_usagesInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutRefundsInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    customers?: Prisma.customersCreateNestedOneWithoutOrdersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutOrdersInput;
    wards?: Prisma.wardsCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutRefundsInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutRefundsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutRefundsInput, Prisma.ordersUncheckedCreateWithoutRefundsInput>;
};
export type ordersUpsertWithoutRefundsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutRefundsInput, Prisma.ordersUncheckedUpdateWithoutRefundsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutRefundsInput, Prisma.ordersUncheckedCreateWithoutRefundsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutRefundsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutRefundsInput, Prisma.ordersUncheckedUpdateWithoutRefundsInput>;
};
export type ordersUpdateWithoutRefundsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutOrdersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutOrdersNestedInput;
    wards?: Prisma.wardsUpdateOneWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutRefundsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutSellersInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    customers?: Prisma.customersCreateNestedOneWithoutOrdersInput;
    wards?: Prisma.wardsCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutSellersInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutSellersInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutSellersInput, Prisma.ordersUncheckedCreateWithoutSellersInput>;
};
export type ordersCreateManySellersInputEnvelope = {
    data: Prisma.ordersCreateManySellersInput | Prisma.ordersCreateManySellersInput[];
    skipDuplicates?: boolean;
};
export type ordersUpsertWithWhereUniqueWithoutSellersInput = {
    where: Prisma.ordersWhereUniqueInput;
    update: Prisma.XOR<Prisma.ordersUpdateWithoutSellersInput, Prisma.ordersUncheckedUpdateWithoutSellersInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutSellersInput, Prisma.ordersUncheckedCreateWithoutSellersInput>;
};
export type ordersUpdateWithWhereUniqueWithoutSellersInput = {
    where: Prisma.ordersWhereUniqueInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutSellersInput, Prisma.ordersUncheckedUpdateWithoutSellersInput>;
};
export type ordersUpdateManyWithWhereWithoutSellersInput = {
    where: Prisma.ordersScalarWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyWithoutSellersInput>;
};
export type ordersCreateWithoutShipmentsInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    customers?: Prisma.customersCreateNestedOneWithoutOrdersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutOrdersInput;
    wards?: Prisma.wardsCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutShipmentsInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutShipmentsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutShipmentsInput, Prisma.ordersUncheckedCreateWithoutShipmentsInput>;
};
export type ordersUpsertWithoutShipmentsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutShipmentsInput, Prisma.ordersUncheckedUpdateWithoutShipmentsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutShipmentsInput, Prisma.ordersUncheckedCreateWithoutShipmentsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutShipmentsInput, Prisma.ordersUncheckedUpdateWithoutShipmentsInput>;
};
export type ordersUpdateWithoutShipmentsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutOrdersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutOrdersNestedInput;
    wards?: Prisma.wardsUpdateOneWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutShipmentsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutWallet_transactionsInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    customers?: Prisma.customersCreateNestedOneWithoutOrdersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutOrdersInput;
    wards?: Prisma.wardsCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutWallet_transactionsInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutWallet_transactionsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutWallet_transactionsInput, Prisma.ordersUncheckedCreateWithoutWallet_transactionsInput>;
};
export type ordersUpsertWithoutWallet_transactionsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutWallet_transactionsInput, Prisma.ordersUncheckedUpdateWithoutWallet_transactionsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutWallet_transactionsInput, Prisma.ordersUncheckedCreateWithoutWallet_transactionsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutWallet_transactionsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutWallet_transactionsInput, Prisma.ordersUncheckedUpdateWithoutWallet_transactionsInput>;
};
export type ordersUpdateWithoutWallet_transactionsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutOrdersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutOrdersNestedInput;
    wards?: Prisma.wardsUpdateOneWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutWallet_transactionsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutWardsInput = {
    order_id?: bigint | number;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    customers?: Prisma.customersCreateNestedOneWithoutOrdersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutWardsInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutWardsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutWardsInput, Prisma.ordersUncheckedCreateWithoutWardsInput>;
};
export type ordersCreateManyWardsInputEnvelope = {
    data: Prisma.ordersCreateManyWardsInput | Prisma.ordersCreateManyWardsInput[];
    skipDuplicates?: boolean;
};
export type ordersUpsertWithWhereUniqueWithoutWardsInput = {
    where: Prisma.ordersWhereUniqueInput;
    update: Prisma.XOR<Prisma.ordersUpdateWithoutWardsInput, Prisma.ordersUncheckedUpdateWithoutWardsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutWardsInput, Prisma.ordersUncheckedCreateWithoutWardsInput>;
};
export type ordersUpdateWithWhereUniqueWithoutWardsInput = {
    where: Prisma.ordersWhereUniqueInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutWardsInput, Prisma.ordersUncheckedUpdateWithoutWardsInput>;
};
export type ordersUpdateManyWithWhereWithoutWardsInput = {
    where: Prisma.ordersScalarWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyWithoutWardsInput>;
};
export type ordersCreateManyCustomersInput = {
    order_id?: bigint | number;
    seller_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type ordersUpdateWithoutCustomersInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutOrdersNestedInput;
    wards?: Prisma.wardsUpdateOneWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutCustomersInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateManyWithoutCustomersInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ordersCreateManySellersInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    address_id?: number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type ordersUpdateWithoutSellersInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutOrdersNestedInput;
    wards?: Prisma.wardsUpdateOneWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutSellersInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateManyWithoutSellersInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    address_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ordersCreateManyWardsInput = {
    order_id?: bigint | number;
    customer_id?: bigint | number | null;
    seller_id?: bigint | number | null;
    order_status?: string | null;
    payment_status?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type ordersUpdateWithoutWardsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutOrdersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutWardsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancel_requests?: Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateManyWithoutWardsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OrdersCountOutputType = {
    cancel_requests: number;
    order_items: number;
    payments: number;
    promotion_usages: number;
    refunds: number;
    shipments: number;
    wallet_transactions: number;
};
export type OrdersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cancel_requests?: boolean | OrdersCountOutputTypeCountCancel_requestsArgs;
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs;
    payments?: boolean | OrdersCountOutputTypeCountPaymentsArgs;
    promotion_usages?: boolean | OrdersCountOutputTypeCountPromotion_usagesArgs;
    refunds?: boolean | OrdersCountOutputTypeCountRefundsArgs;
    shipments?: boolean | OrdersCountOutputTypeCountShipmentsArgs;
    wallet_transactions?: boolean | OrdersCountOutputTypeCountWallet_transactionsArgs;
};
export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdersCountOutputTypeSelect<ExtArgs> | null;
};
export type OrdersCountOutputTypeCountCancel_requestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cancel_requestsWhereInput;
};
export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
};
export type OrdersCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
};
export type OrdersCountOutputTypeCountPromotion_usagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotion_usagesWhereInput;
};
export type OrdersCountOutputTypeCountRefundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refundsWhereInput;
};
export type OrdersCountOutputTypeCountShipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipmentsWhereInput;
};
export type OrdersCountOutputTypeCountWallet_transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wallet_transactionsWhereInput;
};
export type ordersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    order_id?: boolean;
    customer_id?: boolean;
    seller_id?: boolean;
    address_id?: boolean;
    order_status?: boolean;
    payment_status?: boolean;
    total_amount?: boolean;
    created_at?: boolean;
    cancel_requests?: boolean | Prisma.orders$cancel_requestsArgs<ExtArgs>;
    order_items?: boolean | Prisma.orders$order_itemsArgs<ExtArgs>;
    customers?: boolean | Prisma.orders$customersArgs<ExtArgs>;
    sellers?: boolean | Prisma.orders$sellersArgs<ExtArgs>;
    wards?: boolean | Prisma.orders$wardsArgs<ExtArgs>;
    payments?: boolean | Prisma.orders$paymentsArgs<ExtArgs>;
    promotion_usages?: boolean | Prisma.orders$promotion_usagesArgs<ExtArgs>;
    refunds?: boolean | Prisma.orders$refundsArgs<ExtArgs>;
    shipments?: boolean | Prisma.orders$shipmentsArgs<ExtArgs>;
    wallet_transactions?: boolean | Prisma.orders$wallet_transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrdersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orders"]>;
export type ordersSelectScalar = {
    order_id?: boolean;
    customer_id?: boolean;
    seller_id?: boolean;
    address_id?: boolean;
    order_status?: boolean;
    payment_status?: boolean;
    total_amount?: boolean;
    created_at?: boolean;
};
export type ordersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"order_id" | "customer_id" | "seller_id" | "address_id" | "order_status" | "payment_status" | "total_amount" | "created_at", ExtArgs["result"]["orders"]>;
export type ordersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cancel_requests?: boolean | Prisma.orders$cancel_requestsArgs<ExtArgs>;
    order_items?: boolean | Prisma.orders$order_itemsArgs<ExtArgs>;
    customers?: boolean | Prisma.orders$customersArgs<ExtArgs>;
    sellers?: boolean | Prisma.orders$sellersArgs<ExtArgs>;
    wards?: boolean | Prisma.orders$wardsArgs<ExtArgs>;
    payments?: boolean | Prisma.orders$paymentsArgs<ExtArgs>;
    promotion_usages?: boolean | Prisma.orders$promotion_usagesArgs<ExtArgs>;
    refunds?: boolean | Prisma.orders$refundsArgs<ExtArgs>;
    shipments?: boolean | Prisma.orders$shipmentsArgs<ExtArgs>;
    wallet_transactions?: boolean | Prisma.orders$wallet_transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrdersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ordersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "orders";
    objects: {
        cancel_requests: Prisma.$cancel_requestsPayload<ExtArgs>[];
        order_items: Prisma.$order_itemsPayload<ExtArgs>[];
        customers: Prisma.$customersPayload<ExtArgs> | null;
        sellers: Prisma.$sellersPayload<ExtArgs> | null;
        wards: Prisma.$wardsPayload<ExtArgs> | null;
        payments: Prisma.$paymentsPayload<ExtArgs>[];
        promotion_usages: Prisma.$promotion_usagesPayload<ExtArgs>[];
        refunds: Prisma.$refundsPayload<ExtArgs>[];
        shipments: Prisma.$shipmentsPayload<ExtArgs>[];
        wallet_transactions: Prisma.$wallet_transactionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        order_id: bigint;
        customer_id: bigint | null;
        seller_id: bigint | null;
        address_id: number | null;
        order_status: string | null;
        payment_status: string | null;
        total_amount: runtime.Decimal | null;
        created_at: Date | null;
    }, ExtArgs["result"]["orders"]>;
    composites: {};
};
export type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ordersPayload, S>;
export type ordersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrdersCountAggregateInputType | true;
};
export interface ordersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['orders'];
        meta: {
            name: 'orders';
        };
    };
    findUnique<T extends ordersFindUniqueArgs>(args: Prisma.SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ordersFindFirstArgs>(args?: Prisma.SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ordersFindManyArgs>(args?: Prisma.SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ordersCreateArgs>(args: Prisma.SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ordersCreateManyArgs>(args?: Prisma.SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ordersDeleteArgs>(args: Prisma.SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ordersUpdateArgs>(args: Prisma.SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ordersDeleteManyArgs>(args?: Prisma.SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ordersUpdateManyArgs>(args: Prisma.SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ordersUpsertArgs>(args: Prisma.SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ordersCountArgs>(args?: Prisma.Subset<T, ordersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrdersCountAggregateOutputType> : number>;
    aggregate<T extends OrdersAggregateArgs>(args: Prisma.Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>;
    groupBy<T extends ordersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ordersGroupByArgs['orderBy'];
    } : {
        orderBy?: ordersGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ordersFieldRefs;
}
export interface Prisma__ordersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cancel_requests<T extends Prisma.orders$cancel_requestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$cancel_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    order_items<T extends Prisma.orders$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customers<T extends Prisma.orders$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$customersArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sellers<T extends Prisma.orders$sellersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$sellersArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wards<T extends Prisma.orders$wardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$wardsArgs<ExtArgs>>): Prisma.Prisma__wardsClient<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.orders$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    promotion_usages<T extends Prisma.orders$promotion_usagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$promotion_usagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refunds<T extends Prisma.orders$refundsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$refundsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shipments<T extends Prisma.orders$shipmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wallet_transactions<T extends Prisma.orders$wallet_transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$wallet_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ordersFieldRefs {
    readonly order_id: Prisma.FieldRef<"orders", 'BigInt'>;
    readonly customer_id: Prisma.FieldRef<"orders", 'BigInt'>;
    readonly seller_id: Prisma.FieldRef<"orders", 'BigInt'>;
    readonly address_id: Prisma.FieldRef<"orders", 'Int'>;
    readonly order_status: Prisma.FieldRef<"orders", 'String'>;
    readonly payment_status: Prisma.FieldRef<"orders", 'String'>;
    readonly total_amount: Prisma.FieldRef<"orders", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"orders", 'DateTime'>;
}
export type ordersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type ordersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type ordersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type ordersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.ordersCreateInput, Prisma.ordersUncheckedCreateInput>;
};
export type ordersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ordersCreateManyInput | Prisma.ordersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ordersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ordersUpdateInput, Prisma.ordersUncheckedUpdateInput>;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyInput>;
    where?: Prisma.ordersWhereInput;
    limit?: number;
};
export type ordersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateInput, Prisma.ordersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ordersUpdateInput, Prisma.ordersUncheckedUpdateInput>;
};
export type ordersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
    limit?: number;
};
export type orders$cancel_requestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
    where?: Prisma.cancel_requestsWhereInput;
    orderBy?: Prisma.cancel_requestsOrderByWithRelationInput | Prisma.cancel_requestsOrderByWithRelationInput[];
    cursor?: Prisma.cancel_requestsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cancel_requestsScalarFieldEnum | Prisma.Cancel_requestsScalarFieldEnum[];
};
export type orders$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_itemsScalarFieldEnum | Prisma.Order_itemsScalarFieldEnum[];
};
export type orders$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
};
export type orders$sellersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where?: Prisma.sellersWhereInput;
};
export type orders$wardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wardsSelect<ExtArgs> | null;
    omit?: Prisma.wardsOmit<ExtArgs> | null;
    include?: Prisma.wardsInclude<ExtArgs> | null;
    where?: Prisma.wardsWhereInput;
};
export type orders$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type orders$promotion_usagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_usagesSelect<ExtArgs> | null;
    omit?: Prisma.promotion_usagesOmit<ExtArgs> | null;
    include?: Prisma.promotion_usagesInclude<ExtArgs> | null;
    where?: Prisma.promotion_usagesWhereInput;
    orderBy?: Prisma.promotion_usagesOrderByWithRelationInput | Prisma.promotion_usagesOrderByWithRelationInput[];
    cursor?: Prisma.promotion_usagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Promotion_usagesScalarFieldEnum | Prisma.Promotion_usagesScalarFieldEnum[];
};
export type orders$refundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where?: Prisma.refundsWhereInput;
    orderBy?: Prisma.refundsOrderByWithRelationInput | Prisma.refundsOrderByWithRelationInput[];
    cursor?: Prisma.refundsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundsScalarFieldEnum | Prisma.RefundsScalarFieldEnum[];
};
export type orders$shipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithRelationInput | Prisma.shipmentsOrderByWithRelationInput[];
    cursor?: Prisma.shipmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentsScalarFieldEnum | Prisma.ShipmentsScalarFieldEnum[];
};
export type orders$wallet_transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
    where?: Prisma.wallet_transactionsWhereInput;
    orderBy?: Prisma.wallet_transactionsOrderByWithRelationInput | Prisma.wallet_transactionsOrderByWithRelationInput[];
    cursor?: Prisma.wallet_transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wallet_transactionsScalarFieldEnum | Prisma.Wallet_transactionsScalarFieldEnum[];
};
export type ordersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
};
export {};
