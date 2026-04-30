import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type customersModel = runtime.Types.Result.DefaultSelection<Prisma.$customersPayload>;
export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null;
    _avg: CustomersAvgAggregateOutputType | null;
    _sum: CustomersSumAggregateOutputType | null;
    _min: CustomersMinAggregateOutputType | null;
    _max: CustomersMaxAggregateOutputType | null;
};
export type CustomersAvgAggregateOutputType = {
    customer_id: number | null;
    loyalty_point: number | null;
    level: number | null;
};
export type CustomersSumAggregateOutputType = {
    customer_id: bigint | null;
    loyalty_point: number | null;
    level: number | null;
};
export type CustomersMinAggregateOutputType = {
    customer_id: bigint | null;
    loyalty_point: number | null;
    level: number | null;
    status: $Enums.customers_status | null;
    created_at: Date | null;
};
export type CustomersMaxAggregateOutputType = {
    customer_id: bigint | null;
    loyalty_point: number | null;
    level: number | null;
    status: $Enums.customers_status | null;
    created_at: Date | null;
};
export type CustomersCountAggregateOutputType = {
    customer_id: number;
    loyalty_point: number;
    level: number;
    status: number;
    created_at: number;
    _all: number;
};
export type CustomersAvgAggregateInputType = {
    customer_id?: true;
    loyalty_point?: true;
    level?: true;
};
export type CustomersSumAggregateInputType = {
    customer_id?: true;
    loyalty_point?: true;
    level?: true;
};
export type CustomersMinAggregateInputType = {
    customer_id?: true;
    loyalty_point?: true;
    level?: true;
    status?: true;
    created_at?: true;
};
export type CustomersMaxAggregateInputType = {
    customer_id?: true;
    loyalty_point?: true;
    level?: true;
    status?: true;
    created_at?: true;
};
export type CustomersCountAggregateInputType = {
    customer_id?: true;
    loyalty_point?: true;
    level?: true;
    status?: true;
    created_at?: true;
    _all?: true;
};
export type CustomersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomersCountAggregateInputType;
    _avg?: CustomersAvgAggregateInputType;
    _sum?: CustomersSumAggregateInputType;
    _min?: CustomersMinAggregateInputType;
    _max?: CustomersMaxAggregateInputType;
};
export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomers[P]> : Prisma.GetScalarType<T[P], AggregateCustomers[P]>;
};
export type customersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithAggregationInput | Prisma.customersOrderByWithAggregationInput[];
    by: Prisma.CustomersScalarFieldEnum[] | Prisma.CustomersScalarFieldEnum;
    having?: Prisma.customersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomersCountAggregateInputType | true;
    _avg?: CustomersAvgAggregateInputType;
    _sum?: CustomersSumAggregateInputType;
    _min?: CustomersMinAggregateInputType;
    _max?: CustomersMaxAggregateInputType;
};
export type CustomersGroupByOutputType = {
    customer_id: bigint;
    loyalty_point: number | null;
    level: number | null;
    status: $Enums.customers_status | null;
    created_at: Date | null;
    _count: CustomersCountAggregateOutputType | null;
    _avg: CustomersAvgAggregateOutputType | null;
    _sum: CustomersSumAggregateOutputType | null;
    _min: CustomersMinAggregateOutputType | null;
    _max: CustomersMaxAggregateOutputType | null;
};
type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomersGroupByOutputType[P]>;
}>>;
export type customersWhereInput = {
    AND?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    OR?: Prisma.customersWhereInput[];
    NOT?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    customer_id?: Prisma.BigIntFilter<"customers"> | bigint | number;
    loyalty_point?: Prisma.IntNullableFilter<"customers"> | number | null;
    level?: Prisma.IntNullableFilter<"customers"> | number | null;
    status?: Prisma.Enumcustomers_statusNullableFilter<"customers"> | $Enums.customers_status | null;
    created_at?: Prisma.DateTimeNullableFilter<"customers"> | Date | string | null;
    carts?: Prisma.CartsListRelationFilter;
    customer_addresses?: Prisma.Customer_addressesListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    orders?: Prisma.OrdersListRelationFilter;
    promotion_usages?: Prisma.Promotion_usagesListRelationFilter;
    reviews?: Prisma.ReviewsListRelationFilter;
};
export type customersOrderByWithRelationInput = {
    customer_id?: Prisma.SortOrder;
    loyalty_point?: Prisma.SortOrderInput | Prisma.SortOrder;
    level?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    carts?: Prisma.cartsOrderByRelationAggregateInput;
    customer_addresses?: Prisma.customer_addressesOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByRelationAggregateInput;
    promotion_usages?: Prisma.promotion_usagesOrderByRelationAggregateInput;
    reviews?: Prisma.reviewsOrderByRelationAggregateInput;
};
export type customersWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: bigint | number;
    AND?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    OR?: Prisma.customersWhereInput[];
    NOT?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    loyalty_point?: Prisma.IntNullableFilter<"customers"> | number | null;
    level?: Prisma.IntNullableFilter<"customers"> | number | null;
    status?: Prisma.Enumcustomers_statusNullableFilter<"customers"> | $Enums.customers_status | null;
    created_at?: Prisma.DateTimeNullableFilter<"customers"> | Date | string | null;
    carts?: Prisma.CartsListRelationFilter;
    customer_addresses?: Prisma.Customer_addressesListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    orders?: Prisma.OrdersListRelationFilter;
    promotion_usages?: Prisma.Promotion_usagesListRelationFilter;
    reviews?: Prisma.ReviewsListRelationFilter;
}, "customer_id">;
export type customersOrderByWithAggregationInput = {
    customer_id?: Prisma.SortOrder;
    loyalty_point?: Prisma.SortOrderInput | Prisma.SortOrder;
    level?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.customersCountOrderByAggregateInput;
    _avg?: Prisma.customersAvgOrderByAggregateInput;
    _max?: Prisma.customersMaxOrderByAggregateInput;
    _min?: Prisma.customersMinOrderByAggregateInput;
    _sum?: Prisma.customersSumOrderByAggregateInput;
};
export type customersScalarWhereWithAggregatesInput = {
    AND?: Prisma.customersScalarWhereWithAggregatesInput | Prisma.customersScalarWhereWithAggregatesInput[];
    OR?: Prisma.customersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.customersScalarWhereWithAggregatesInput | Prisma.customersScalarWhereWithAggregatesInput[];
    customer_id?: Prisma.BigIntWithAggregatesFilter<"customers"> | bigint | number;
    loyalty_point?: Prisma.IntNullableWithAggregatesFilter<"customers"> | number | null;
    level?: Prisma.IntNullableWithAggregatesFilter<"customers"> | number | null;
    status?: Prisma.Enumcustomers_statusNullableWithAggregatesFilter<"customers"> | $Enums.customers_status | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"customers"> | Date | string | null;
};
export type customersCreateInput = {
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    customer_addresses?: Prisma.customer_addressesCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateInput = {
    customer_id: bigint | number;
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    customer_addresses?: Prisma.customer_addressesUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersUpdateInput = {
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    customer_addresses?: Prisma.customer_addressesUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    customer_addresses?: Prisma.customer_addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateManyInput = {
    customer_id: bigint | number;
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
};
export type customersUpdateManyMutationInput = {
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type customersUncheckedUpdateManyInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CustomersNullableScalarRelationFilter = {
    is?: Prisma.customersWhereInput | null;
    isNot?: Prisma.customersWhereInput | null;
};
export type customersCountOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    loyalty_point?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type customersAvgOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    loyalty_point?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
};
export type customersMaxOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    loyalty_point?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type customersMinOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    loyalty_point?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type customersSumOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    loyalty_point?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
};
export type customersCreateNestedOneWithoutCartsInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutCartsInput, Prisma.customersUncheckedCreateWithoutCartsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutCartsInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneWithoutCartsNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutCartsInput, Prisma.customersUncheckedCreateWithoutCartsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutCartsInput;
    upsert?: Prisma.customersUpsertWithoutCartsInput;
    disconnect?: Prisma.customersWhereInput | boolean;
    delete?: Prisma.customersWhereInput | boolean;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutCartsInput, Prisma.customersUpdateWithoutCartsInput>, Prisma.customersUncheckedUpdateWithoutCartsInput>;
};
export type customersCreateNestedOneWithoutCustomer_addressesInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutCustomer_addressesInput, Prisma.customersUncheckedCreateWithoutCustomer_addressesInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutCustomer_addressesInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneWithoutCustomer_addressesNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutCustomer_addressesInput, Prisma.customersUncheckedCreateWithoutCustomer_addressesInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutCustomer_addressesInput;
    upsert?: Prisma.customersUpsertWithoutCustomer_addressesInput;
    disconnect?: Prisma.customersWhereInput | boolean;
    delete?: Prisma.customersWhereInput | boolean;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutCustomer_addressesInput, Prisma.customersUpdateWithoutCustomer_addressesInput>, Prisma.customersUncheckedUpdateWithoutCustomer_addressesInput>;
};
export type NullableEnumcustomers_statusFieldUpdateOperationsInput = {
    set?: $Enums.customers_status | null;
};
export type customersCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutOrdersInput, Prisma.customersUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutOrdersInput, Prisma.customersUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.customersUpsertWithoutOrdersInput;
    disconnect?: Prisma.customersWhereInput | boolean;
    delete?: Prisma.customersWhereInput | boolean;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutOrdersInput, Prisma.customersUpdateWithoutOrdersInput>, Prisma.customersUncheckedUpdateWithoutOrdersInput>;
};
export type customersCreateNestedOneWithoutPromotion_usagesInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutPromotion_usagesInput, Prisma.customersUncheckedCreateWithoutPromotion_usagesInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutPromotion_usagesInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneWithoutPromotion_usagesNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutPromotion_usagesInput, Prisma.customersUncheckedCreateWithoutPromotion_usagesInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutPromotion_usagesInput;
    upsert?: Prisma.customersUpsertWithoutPromotion_usagesInput;
    disconnect?: Prisma.customersWhereInput | boolean;
    delete?: Prisma.customersWhereInput | boolean;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutPromotion_usagesInput, Prisma.customersUpdateWithoutPromotion_usagesInput>, Prisma.customersUncheckedUpdateWithoutPromotion_usagesInput>;
};
export type customersCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutReviewsInput, Prisma.customersUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutReviewsInput, Prisma.customersUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.customersUpsertWithoutReviewsInput;
    disconnect?: Prisma.customersWhereInput | boolean;
    delete?: Prisma.customersWhereInput | boolean;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutReviewsInput, Prisma.customersUpdateWithoutReviewsInput>, Prisma.customersUncheckedUpdateWithoutReviewsInput>;
};
export type customersCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutUsersInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutUsersInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.customersUpsertWithoutUsersInput;
    disconnect?: Prisma.customersWhereInput | boolean;
    delete?: Prisma.customersWhereInput | boolean;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutUsersInput, Prisma.customersUpdateWithoutUsersInput>, Prisma.customersUncheckedUpdateWithoutUsersInput>;
};
export type customersUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.customersUpsertWithoutUsersInput;
    disconnect?: Prisma.customersWhereInput | boolean;
    delete?: Prisma.customersWhereInput | boolean;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutUsersInput, Prisma.customersUpdateWithoutUsersInput>, Prisma.customersUncheckedUpdateWithoutUsersInput>;
};
export type customersCreateWithoutCartsInput = {
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    customer_addresses?: Prisma.customer_addressesCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutCartsInput = {
    customer_id: bigint | number;
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    customer_addresses?: Prisma.customer_addressesUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutCartsInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutCartsInput, Prisma.customersUncheckedCreateWithoutCartsInput>;
};
export type customersUpsertWithoutCartsInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutCartsInput, Prisma.customersUncheckedUpdateWithoutCartsInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutCartsInput, Prisma.customersUncheckedCreateWithoutCartsInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutCartsInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutCartsInput, Prisma.customersUncheckedUpdateWithoutCartsInput>;
};
export type customersUpdateWithoutCartsInput = {
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_addresses?: Prisma.customer_addressesUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutCartsInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_addresses?: Prisma.customer_addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutCustomer_addressesInput = {
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutCustomer_addressesInput = {
    customer_id: bigint | number;
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutCustomer_addressesInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutCustomer_addressesInput, Prisma.customersUncheckedCreateWithoutCustomer_addressesInput>;
};
export type customersUpsertWithoutCustomer_addressesInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutCustomer_addressesInput, Prisma.customersUncheckedUpdateWithoutCustomer_addressesInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutCustomer_addressesInput, Prisma.customersUncheckedCreateWithoutCustomer_addressesInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutCustomer_addressesInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutCustomer_addressesInput, Prisma.customersUncheckedUpdateWithoutCustomer_addressesInput>;
};
export type customersUpdateWithoutCustomer_addressesInput = {
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutCustomer_addressesInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutOrdersInput = {
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    customer_addresses?: Prisma.customer_addressesCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutOrdersInput = {
    customer_id: bigint | number;
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    customer_addresses?: Prisma.customer_addressesUncheckedCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutOrdersInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutOrdersInput, Prisma.customersUncheckedCreateWithoutOrdersInput>;
};
export type customersUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutOrdersInput, Prisma.customersUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutOrdersInput, Prisma.customersUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutOrdersInput, Prisma.customersUncheckedUpdateWithoutOrdersInput>;
};
export type customersUpdateWithoutOrdersInput = {
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    customer_addresses?: Prisma.customer_addressesUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutOrdersInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    customer_addresses?: Prisma.customer_addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutPromotion_usagesInput = {
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    customer_addresses?: Prisma.customer_addressesCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutPromotion_usagesInput = {
    customer_id: bigint | number;
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    customer_addresses?: Prisma.customer_addressesUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutPromotion_usagesInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutPromotion_usagesInput, Prisma.customersUncheckedCreateWithoutPromotion_usagesInput>;
};
export type customersUpsertWithoutPromotion_usagesInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutPromotion_usagesInput, Prisma.customersUncheckedUpdateWithoutPromotion_usagesInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutPromotion_usagesInput, Prisma.customersUncheckedCreateWithoutPromotion_usagesInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutPromotion_usagesInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutPromotion_usagesInput, Prisma.customersUncheckedUpdateWithoutPromotion_usagesInput>;
};
export type customersUpdateWithoutPromotion_usagesInput = {
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    customer_addresses?: Prisma.customer_addressesUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutPromotion_usagesInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    customer_addresses?: Prisma.customer_addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutReviewsInput = {
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    customer_addresses?: Prisma.customer_addressesCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutReviewsInput = {
    customer_id: bigint | number;
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    customer_addresses?: Prisma.customer_addressesUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutReviewsInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutReviewsInput, Prisma.customersUncheckedCreateWithoutReviewsInput>;
};
export type customersUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutReviewsInput, Prisma.customersUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutReviewsInput, Prisma.customersUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutReviewsInput, Prisma.customersUncheckedUpdateWithoutReviewsInput>;
};
export type customersUpdateWithoutReviewsInput = {
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    customer_addresses?: Prisma.customer_addressesUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutReviewsInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    customer_addresses?: Prisma.customer_addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutUsersInput = {
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    customer_addresses?: Prisma.customer_addressesCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutUsersInput = {
    loyalty_point?: number | null;
    level?: number | null;
    status?: $Enums.customers_status | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    customer_addresses?: Prisma.customer_addressesUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutUsersInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
};
export type customersUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutUsersInput, Prisma.customersUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutUsersInput, Prisma.customersUncheckedUpdateWithoutUsersInput>;
};
export type customersUpdateWithoutUsersInput = {
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    customer_addresses?: Prisma.customer_addressesUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutUsersInput = {
    loyalty_point?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableEnumcustomers_statusFieldUpdateOperationsInput | $Enums.customers_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    customer_addresses?: Prisma.customer_addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    promotion_usages?: Prisma.promotion_usagesUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type CustomersCountOutputType = {
    carts: number;
    customer_addresses: number;
    orders: number;
    promotion_usages: number;
    reviews: number;
};
export type CustomersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carts?: boolean | CustomersCountOutputTypeCountCartsArgs;
    customer_addresses?: boolean | CustomersCountOutputTypeCountCustomer_addressesArgs;
    orders?: boolean | CustomersCountOutputTypeCountOrdersArgs;
    promotion_usages?: boolean | CustomersCountOutputTypeCountPromotion_usagesArgs;
    reviews?: boolean | CustomersCountOutputTypeCountReviewsArgs;
};
export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomersCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomersCountOutputTypeCountCartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cartsWhereInput;
};
export type CustomersCountOutputTypeCountCustomer_addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_addressesWhereInput;
};
export type CustomersCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type CustomersCountOutputTypeCountPromotion_usagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotion_usagesWhereInput;
};
export type CustomersCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
};
export type customersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customer_id?: boolean;
    loyalty_point?: boolean;
    level?: boolean;
    status?: boolean;
    created_at?: boolean;
    carts?: boolean | Prisma.customers$cartsArgs<ExtArgs>;
    customer_addresses?: boolean | Prisma.customers$customer_addressesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.customers$ordersArgs<ExtArgs>;
    promotion_usages?: boolean | Prisma.customers$promotion_usagesArgs<ExtArgs>;
    reviews?: boolean | Prisma.customers$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customers"]>;
export type customersSelectScalar = {
    customer_id?: boolean;
    loyalty_point?: boolean;
    level?: boolean;
    status?: boolean;
    created_at?: boolean;
};
export type customersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"customer_id" | "loyalty_point" | "level" | "status" | "created_at", ExtArgs["result"]["customers"]>;
export type customersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carts?: boolean | Prisma.customers$cartsArgs<ExtArgs>;
    customer_addresses?: boolean | Prisma.customers$customer_addressesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.customers$ordersArgs<ExtArgs>;
    promotion_usages?: boolean | Prisma.customers$promotion_usagesArgs<ExtArgs>;
    reviews?: boolean | Prisma.customers$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $customersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "customers";
    objects: {
        carts: Prisma.$cartsPayload<ExtArgs>[];
        customer_addresses: Prisma.$customer_addressesPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
        orders: Prisma.$ordersPayload<ExtArgs>[];
        promotion_usages: Prisma.$promotion_usagesPayload<ExtArgs>[];
        reviews: Prisma.$reviewsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        customer_id: bigint;
        loyalty_point: number | null;
        level: number | null;
        status: $Enums.customers_status | null;
        created_at: Date | null;
    }, ExtArgs["result"]["customers"]>;
    composites: {};
};
export type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$customersPayload, S>;
export type customersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomersCountAggregateInputType | true;
};
export interface customersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['customers'];
        meta: {
            name: 'customers';
        };
    };
    findUnique<T extends customersFindUniqueArgs>(args: Prisma.SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends customersFindFirstArgs>(args?: Prisma.SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends customersFindManyArgs>(args?: Prisma.SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends customersCreateArgs>(args: Prisma.SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends customersCreateManyArgs>(args?: Prisma.SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends customersDeleteArgs>(args: Prisma.SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends customersUpdateArgs>(args: Prisma.SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends customersDeleteManyArgs>(args?: Prisma.SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends customersUpdateManyArgs>(args: Prisma.SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends customersUpsertArgs>(args: Prisma.SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends customersCountArgs>(args?: Prisma.Subset<T, customersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomersCountAggregateOutputType> : number>;
    aggregate<T extends CustomersAggregateArgs>(args: Prisma.Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>;
    groupBy<T extends customersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: customersGroupByArgs['orderBy'];
    } : {
        orderBy?: customersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: customersFieldRefs;
}
export interface Prisma__customersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    carts<T extends Prisma.customers$cartsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customer_addresses<T extends Prisma.customers$customer_addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$customer_addressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.customers$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    promotion_usages<T extends Prisma.customers$promotion_usagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$promotion_usagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.customers$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface customersFieldRefs {
    readonly customer_id: Prisma.FieldRef<"customers", 'BigInt'>;
    readonly loyalty_point: Prisma.FieldRef<"customers", 'Int'>;
    readonly level: Prisma.FieldRef<"customers", 'Int'>;
    readonly status: Prisma.FieldRef<"customers", 'customers_status'>;
    readonly created_at: Prisma.FieldRef<"customers", 'DateTime'>;
}
export type customersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
};
export type customersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
};
export type customersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomersScalarFieldEnum | Prisma.CustomersScalarFieldEnum[];
};
export type customersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomersScalarFieldEnum | Prisma.CustomersScalarFieldEnum[];
};
export type customersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomersScalarFieldEnum | Prisma.CustomersScalarFieldEnum[];
};
export type customersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customersCreateInput, Prisma.customersUncheckedCreateInput>;
};
export type customersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.customersCreateManyInput | Prisma.customersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type customersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customersUpdateInput, Prisma.customersUncheckedUpdateInput>;
    where: Prisma.customersWhereUniqueInput;
};
export type customersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.customersUpdateManyMutationInput, Prisma.customersUncheckedUpdateManyInput>;
    where?: Prisma.customersWhereInput;
    limit?: number;
};
export type customersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateInput, Prisma.customersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.customersUpdateInput, Prisma.customersUncheckedUpdateInput>;
};
export type customersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
};
export type customersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customersWhereInput;
    limit?: number;
};
export type customers$cartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
export type customers$customer_addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_addressesSelect<ExtArgs> | null;
    omit?: Prisma.customer_addressesOmit<ExtArgs> | null;
    include?: Prisma.customer_addressesInclude<ExtArgs> | null;
    where?: Prisma.customer_addressesWhereInput;
    orderBy?: Prisma.customer_addressesOrderByWithRelationInput | Prisma.customer_addressesOrderByWithRelationInput[];
    cursor?: Prisma.customer_addressesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Customer_addressesScalarFieldEnum | Prisma.Customer_addressesScalarFieldEnum[];
};
export type customers$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customers$promotion_usagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customers$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithRelationInput | Prisma.reviewsOrderByWithRelationInput[];
    cursor?: Prisma.reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewsScalarFieldEnum | Prisma.ReviewsScalarFieldEnum[];
};
export type customersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
};
export {};
