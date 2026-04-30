import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type promotion_usagesModel = runtime.Types.Result.DefaultSelection<Prisma.$promotion_usagesPayload>;
export type AggregatePromotion_usages = {
    _count: Promotion_usagesCountAggregateOutputType | null;
    _avg: Promotion_usagesAvgAggregateOutputType | null;
    _sum: Promotion_usagesSumAggregateOutputType | null;
    _min: Promotion_usagesMinAggregateOutputType | null;
    _max: Promotion_usagesMaxAggregateOutputType | null;
};
export type Promotion_usagesAvgAggregateOutputType = {
    promotion_usage_id: number | null;
    promotion_id: number | null;
    customer_id: number | null;
    order_id: number | null;
};
export type Promotion_usagesSumAggregateOutputType = {
    promotion_usage_id: bigint | null;
    promotion_id: bigint | null;
    customer_id: bigint | null;
    order_id: bigint | null;
};
export type Promotion_usagesMinAggregateOutputType = {
    promotion_usage_id: bigint | null;
    promotion_id: bigint | null;
    customer_id: bigint | null;
    order_id: bigint | null;
    used_at: Date | null;
};
export type Promotion_usagesMaxAggregateOutputType = {
    promotion_usage_id: bigint | null;
    promotion_id: bigint | null;
    customer_id: bigint | null;
    order_id: bigint | null;
    used_at: Date | null;
};
export type Promotion_usagesCountAggregateOutputType = {
    promotion_usage_id: number;
    promotion_id: number;
    customer_id: number;
    order_id: number;
    used_at: number;
    _all: number;
};
export type Promotion_usagesAvgAggregateInputType = {
    promotion_usage_id?: true;
    promotion_id?: true;
    customer_id?: true;
    order_id?: true;
};
export type Promotion_usagesSumAggregateInputType = {
    promotion_usage_id?: true;
    promotion_id?: true;
    customer_id?: true;
    order_id?: true;
};
export type Promotion_usagesMinAggregateInputType = {
    promotion_usage_id?: true;
    promotion_id?: true;
    customer_id?: true;
    order_id?: true;
    used_at?: true;
};
export type Promotion_usagesMaxAggregateInputType = {
    promotion_usage_id?: true;
    promotion_id?: true;
    customer_id?: true;
    order_id?: true;
    used_at?: true;
};
export type Promotion_usagesCountAggregateInputType = {
    promotion_usage_id?: true;
    promotion_id?: true;
    customer_id?: true;
    order_id?: true;
    used_at?: true;
    _all?: true;
};
export type Promotion_usagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotion_usagesWhereInput;
    orderBy?: Prisma.promotion_usagesOrderByWithRelationInput | Prisma.promotion_usagesOrderByWithRelationInput[];
    cursor?: Prisma.promotion_usagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Promotion_usagesCountAggregateInputType;
    _avg?: Promotion_usagesAvgAggregateInputType;
    _sum?: Promotion_usagesSumAggregateInputType;
    _min?: Promotion_usagesMinAggregateInputType;
    _max?: Promotion_usagesMaxAggregateInputType;
};
export type GetPromotion_usagesAggregateType<T extends Promotion_usagesAggregateArgs> = {
    [P in keyof T & keyof AggregatePromotion_usages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePromotion_usages[P]> : Prisma.GetScalarType<T[P], AggregatePromotion_usages[P]>;
};
export type promotion_usagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotion_usagesWhereInput;
    orderBy?: Prisma.promotion_usagesOrderByWithAggregationInput | Prisma.promotion_usagesOrderByWithAggregationInput[];
    by: Prisma.Promotion_usagesScalarFieldEnum[] | Prisma.Promotion_usagesScalarFieldEnum;
    having?: Prisma.promotion_usagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Promotion_usagesCountAggregateInputType | true;
    _avg?: Promotion_usagesAvgAggregateInputType;
    _sum?: Promotion_usagesSumAggregateInputType;
    _min?: Promotion_usagesMinAggregateInputType;
    _max?: Promotion_usagesMaxAggregateInputType;
};
export type Promotion_usagesGroupByOutputType = {
    promotion_usage_id: bigint;
    promotion_id: bigint | null;
    customer_id: bigint | null;
    order_id: bigint | null;
    used_at: Date | null;
    _count: Promotion_usagesCountAggregateOutputType | null;
    _avg: Promotion_usagesAvgAggregateOutputType | null;
    _sum: Promotion_usagesSumAggregateOutputType | null;
    _min: Promotion_usagesMinAggregateOutputType | null;
    _max: Promotion_usagesMaxAggregateOutputType | null;
};
type GetPromotion_usagesGroupByPayload<T extends promotion_usagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Promotion_usagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Promotion_usagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Promotion_usagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Promotion_usagesGroupByOutputType[P]>;
}>>;
export type promotion_usagesWhereInput = {
    AND?: Prisma.promotion_usagesWhereInput | Prisma.promotion_usagesWhereInput[];
    OR?: Prisma.promotion_usagesWhereInput[];
    NOT?: Prisma.promotion_usagesWhereInput | Prisma.promotion_usagesWhereInput[];
    promotion_usage_id?: Prisma.BigIntFilter<"promotion_usages"> | bigint | number;
    promotion_id?: Prisma.BigIntNullableFilter<"promotion_usages"> | bigint | number | null;
    customer_id?: Prisma.BigIntNullableFilter<"promotion_usages"> | bigint | number | null;
    order_id?: Prisma.BigIntNullableFilter<"promotion_usages"> | bigint | number | null;
    used_at?: Prisma.DateTimeNullableFilter<"promotion_usages"> | Date | string | null;
    promotions?: Prisma.XOR<Prisma.PromotionsNullableScalarRelationFilter, Prisma.promotionsWhereInput> | null;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
};
export type promotion_usagesOrderByWithRelationInput = {
    promotion_usage_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    used_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotions?: Prisma.promotionsOrderByWithRelationInput;
    customers?: Prisma.customersOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
};
export type promotion_usagesWhereUniqueInput = Prisma.AtLeast<{
    promotion_usage_id?: bigint | number;
    AND?: Prisma.promotion_usagesWhereInput | Prisma.promotion_usagesWhereInput[];
    OR?: Prisma.promotion_usagesWhereInput[];
    NOT?: Prisma.promotion_usagesWhereInput | Prisma.promotion_usagesWhereInput[];
    promotion_id?: Prisma.BigIntNullableFilter<"promotion_usages"> | bigint | number | null;
    customer_id?: Prisma.BigIntNullableFilter<"promotion_usages"> | bigint | number | null;
    order_id?: Prisma.BigIntNullableFilter<"promotion_usages"> | bigint | number | null;
    used_at?: Prisma.DateTimeNullableFilter<"promotion_usages"> | Date | string | null;
    promotions?: Prisma.XOR<Prisma.PromotionsNullableScalarRelationFilter, Prisma.promotionsWhereInput> | null;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
}, "promotion_usage_id">;
export type promotion_usagesOrderByWithAggregationInput = {
    promotion_usage_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    used_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.promotion_usagesCountOrderByAggregateInput;
    _avg?: Prisma.promotion_usagesAvgOrderByAggregateInput;
    _max?: Prisma.promotion_usagesMaxOrderByAggregateInput;
    _min?: Prisma.promotion_usagesMinOrderByAggregateInput;
    _sum?: Prisma.promotion_usagesSumOrderByAggregateInput;
};
export type promotion_usagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.promotion_usagesScalarWhereWithAggregatesInput | Prisma.promotion_usagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.promotion_usagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.promotion_usagesScalarWhereWithAggregatesInput | Prisma.promotion_usagesScalarWhereWithAggregatesInput[];
    promotion_usage_id?: Prisma.BigIntWithAggregatesFilter<"promotion_usages"> | bigint | number;
    promotion_id?: Prisma.BigIntNullableWithAggregatesFilter<"promotion_usages"> | bigint | number | null;
    customer_id?: Prisma.BigIntNullableWithAggregatesFilter<"promotion_usages"> | bigint | number | null;
    order_id?: Prisma.BigIntNullableWithAggregatesFilter<"promotion_usages"> | bigint | number | null;
    used_at?: Prisma.DateTimeNullableWithAggregatesFilter<"promotion_usages"> | Date | string | null;
};
export type promotion_usagesCreateInput = {
    promotion_usage_id?: bigint | number;
    used_at?: Date | string | null;
    promotions?: Prisma.promotionsCreateNestedOneWithoutPromotion_usagesInput;
    customers?: Prisma.customersCreateNestedOneWithoutPromotion_usagesInput;
    orders?: Prisma.ordersCreateNestedOneWithoutPromotion_usagesInput;
};
export type promotion_usagesUncheckedCreateInput = {
    promotion_usage_id?: bigint | number;
    promotion_id?: bigint | number | null;
    customer_id?: bigint | number | null;
    order_id?: bigint | number | null;
    used_at?: Date | string | null;
};
export type promotion_usagesUpdateInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotions?: Prisma.promotionsUpdateOneWithoutPromotion_usagesNestedInput;
    customers?: Prisma.customersUpdateOneWithoutPromotion_usagesNestedInput;
    orders?: Prisma.ordersUpdateOneWithoutPromotion_usagesNestedInput;
};
export type promotion_usagesUncheckedUpdateInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    promotion_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_usagesCreateManyInput = {
    promotion_usage_id?: bigint | number;
    promotion_id?: bigint | number | null;
    customer_id?: bigint | number | null;
    order_id?: bigint | number | null;
    used_at?: Date | string | null;
};
export type promotion_usagesUpdateManyMutationInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_usagesUncheckedUpdateManyInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    promotion_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Promotion_usagesListRelationFilter = {
    every?: Prisma.promotion_usagesWhereInput;
    some?: Prisma.promotion_usagesWhereInput;
    none?: Prisma.promotion_usagesWhereInput;
};
export type promotion_usagesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type promotion_usagesCountOrderByAggregateInput = {
    promotion_usage_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
};
export type promotion_usagesAvgOrderByAggregateInput = {
    promotion_usage_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type promotion_usagesMaxOrderByAggregateInput = {
    promotion_usage_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
};
export type promotion_usagesMinOrderByAggregateInput = {
    promotion_usage_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
};
export type promotion_usagesSumOrderByAggregateInput = {
    promotion_usage_id?: Prisma.SortOrder;
    promotion_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type promotion_usagesCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutCustomersInput, Prisma.promotion_usagesUncheckedCreateWithoutCustomersInput> | Prisma.promotion_usagesCreateWithoutCustomersInput[] | Prisma.promotion_usagesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutCustomersInput | Prisma.promotion_usagesCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.promotion_usagesCreateManyCustomersInputEnvelope;
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
};
export type promotion_usagesUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutCustomersInput, Prisma.promotion_usagesUncheckedCreateWithoutCustomersInput> | Prisma.promotion_usagesCreateWithoutCustomersInput[] | Prisma.promotion_usagesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutCustomersInput | Prisma.promotion_usagesCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.promotion_usagesCreateManyCustomersInputEnvelope;
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
};
export type promotion_usagesUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutCustomersInput, Prisma.promotion_usagesUncheckedCreateWithoutCustomersInput> | Prisma.promotion_usagesCreateWithoutCustomersInput[] | Prisma.promotion_usagesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutCustomersInput | Prisma.promotion_usagesCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.promotion_usagesUpsertWithWhereUniqueWithoutCustomersInput | Prisma.promotion_usagesUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.promotion_usagesCreateManyCustomersInputEnvelope;
    set?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    disconnect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    delete?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    update?: Prisma.promotion_usagesUpdateWithWhereUniqueWithoutCustomersInput | Prisma.promotion_usagesUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.promotion_usagesUpdateManyWithWhereWithoutCustomersInput | Prisma.promotion_usagesUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.promotion_usagesScalarWhereInput | Prisma.promotion_usagesScalarWhereInput[];
};
export type promotion_usagesUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutCustomersInput, Prisma.promotion_usagesUncheckedCreateWithoutCustomersInput> | Prisma.promotion_usagesCreateWithoutCustomersInput[] | Prisma.promotion_usagesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutCustomersInput | Prisma.promotion_usagesCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.promotion_usagesUpsertWithWhereUniqueWithoutCustomersInput | Prisma.promotion_usagesUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.promotion_usagesCreateManyCustomersInputEnvelope;
    set?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    disconnect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    delete?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    update?: Prisma.promotion_usagesUpdateWithWhereUniqueWithoutCustomersInput | Prisma.promotion_usagesUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.promotion_usagesUpdateManyWithWhereWithoutCustomersInput | Prisma.promotion_usagesUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.promotion_usagesScalarWhereInput | Prisma.promotion_usagesScalarWhereInput[];
};
export type promotion_usagesCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutOrdersInput, Prisma.promotion_usagesUncheckedCreateWithoutOrdersInput> | Prisma.promotion_usagesCreateWithoutOrdersInput[] | Prisma.promotion_usagesUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutOrdersInput | Prisma.promotion_usagesCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.promotion_usagesCreateManyOrdersInputEnvelope;
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
};
export type promotion_usagesUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutOrdersInput, Prisma.promotion_usagesUncheckedCreateWithoutOrdersInput> | Prisma.promotion_usagesCreateWithoutOrdersInput[] | Prisma.promotion_usagesUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutOrdersInput | Prisma.promotion_usagesCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.promotion_usagesCreateManyOrdersInputEnvelope;
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
};
export type promotion_usagesUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutOrdersInput, Prisma.promotion_usagesUncheckedCreateWithoutOrdersInput> | Prisma.promotion_usagesCreateWithoutOrdersInput[] | Prisma.promotion_usagesUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutOrdersInput | Prisma.promotion_usagesCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.promotion_usagesUpsertWithWhereUniqueWithoutOrdersInput | Prisma.promotion_usagesUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.promotion_usagesCreateManyOrdersInputEnvelope;
    set?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    disconnect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    delete?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    update?: Prisma.promotion_usagesUpdateWithWhereUniqueWithoutOrdersInput | Prisma.promotion_usagesUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.promotion_usagesUpdateManyWithWhereWithoutOrdersInput | Prisma.promotion_usagesUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.promotion_usagesScalarWhereInput | Prisma.promotion_usagesScalarWhereInput[];
};
export type promotion_usagesUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutOrdersInput, Prisma.promotion_usagesUncheckedCreateWithoutOrdersInput> | Prisma.promotion_usagesCreateWithoutOrdersInput[] | Prisma.promotion_usagesUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutOrdersInput | Prisma.promotion_usagesCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.promotion_usagesUpsertWithWhereUniqueWithoutOrdersInput | Prisma.promotion_usagesUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.promotion_usagesCreateManyOrdersInputEnvelope;
    set?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    disconnect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    delete?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    update?: Prisma.promotion_usagesUpdateWithWhereUniqueWithoutOrdersInput | Prisma.promotion_usagesUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.promotion_usagesUpdateManyWithWhereWithoutOrdersInput | Prisma.promotion_usagesUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.promotion_usagesScalarWhereInput | Prisma.promotion_usagesScalarWhereInput[];
};
export type promotion_usagesCreateNestedManyWithoutPromotionsInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutPromotionsInput, Prisma.promotion_usagesUncheckedCreateWithoutPromotionsInput> | Prisma.promotion_usagesCreateWithoutPromotionsInput[] | Prisma.promotion_usagesUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutPromotionsInput | Prisma.promotion_usagesCreateOrConnectWithoutPromotionsInput[];
    createMany?: Prisma.promotion_usagesCreateManyPromotionsInputEnvelope;
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
};
export type promotion_usagesUncheckedCreateNestedManyWithoutPromotionsInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutPromotionsInput, Prisma.promotion_usagesUncheckedCreateWithoutPromotionsInput> | Prisma.promotion_usagesCreateWithoutPromotionsInput[] | Prisma.promotion_usagesUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutPromotionsInput | Prisma.promotion_usagesCreateOrConnectWithoutPromotionsInput[];
    createMany?: Prisma.promotion_usagesCreateManyPromotionsInputEnvelope;
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
};
export type promotion_usagesUpdateManyWithoutPromotionsNestedInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutPromotionsInput, Prisma.promotion_usagesUncheckedCreateWithoutPromotionsInput> | Prisma.promotion_usagesCreateWithoutPromotionsInput[] | Prisma.promotion_usagesUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutPromotionsInput | Prisma.promotion_usagesCreateOrConnectWithoutPromotionsInput[];
    upsert?: Prisma.promotion_usagesUpsertWithWhereUniqueWithoutPromotionsInput | Prisma.promotion_usagesUpsertWithWhereUniqueWithoutPromotionsInput[];
    createMany?: Prisma.promotion_usagesCreateManyPromotionsInputEnvelope;
    set?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    disconnect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    delete?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    update?: Prisma.promotion_usagesUpdateWithWhereUniqueWithoutPromotionsInput | Prisma.promotion_usagesUpdateWithWhereUniqueWithoutPromotionsInput[];
    updateMany?: Prisma.promotion_usagesUpdateManyWithWhereWithoutPromotionsInput | Prisma.promotion_usagesUpdateManyWithWhereWithoutPromotionsInput[];
    deleteMany?: Prisma.promotion_usagesScalarWhereInput | Prisma.promotion_usagesScalarWhereInput[];
};
export type promotion_usagesUncheckedUpdateManyWithoutPromotionsNestedInput = {
    create?: Prisma.XOR<Prisma.promotion_usagesCreateWithoutPromotionsInput, Prisma.promotion_usagesUncheckedCreateWithoutPromotionsInput> | Prisma.promotion_usagesCreateWithoutPromotionsInput[] | Prisma.promotion_usagesUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.promotion_usagesCreateOrConnectWithoutPromotionsInput | Prisma.promotion_usagesCreateOrConnectWithoutPromotionsInput[];
    upsert?: Prisma.promotion_usagesUpsertWithWhereUniqueWithoutPromotionsInput | Prisma.promotion_usagesUpsertWithWhereUniqueWithoutPromotionsInput[];
    createMany?: Prisma.promotion_usagesCreateManyPromotionsInputEnvelope;
    set?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    disconnect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    delete?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    connect?: Prisma.promotion_usagesWhereUniqueInput | Prisma.promotion_usagesWhereUniqueInput[];
    update?: Prisma.promotion_usagesUpdateWithWhereUniqueWithoutPromotionsInput | Prisma.promotion_usagesUpdateWithWhereUniqueWithoutPromotionsInput[];
    updateMany?: Prisma.promotion_usagesUpdateManyWithWhereWithoutPromotionsInput | Prisma.promotion_usagesUpdateManyWithWhereWithoutPromotionsInput[];
    deleteMany?: Prisma.promotion_usagesScalarWhereInput | Prisma.promotion_usagesScalarWhereInput[];
};
export type promotion_usagesCreateWithoutCustomersInput = {
    promotion_usage_id?: bigint | number;
    used_at?: Date | string | null;
    promotions?: Prisma.promotionsCreateNestedOneWithoutPromotion_usagesInput;
    orders?: Prisma.ordersCreateNestedOneWithoutPromotion_usagesInput;
};
export type promotion_usagesUncheckedCreateWithoutCustomersInput = {
    promotion_usage_id?: bigint | number;
    promotion_id?: bigint | number | null;
    order_id?: bigint | number | null;
    used_at?: Date | string | null;
};
export type promotion_usagesCreateOrConnectWithoutCustomersInput = {
    where: Prisma.promotion_usagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.promotion_usagesCreateWithoutCustomersInput, Prisma.promotion_usagesUncheckedCreateWithoutCustomersInput>;
};
export type promotion_usagesCreateManyCustomersInputEnvelope = {
    data: Prisma.promotion_usagesCreateManyCustomersInput | Prisma.promotion_usagesCreateManyCustomersInput[];
    skipDuplicates?: boolean;
};
export type promotion_usagesUpsertWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.promotion_usagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.promotion_usagesUpdateWithoutCustomersInput, Prisma.promotion_usagesUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.promotion_usagesCreateWithoutCustomersInput, Prisma.promotion_usagesUncheckedCreateWithoutCustomersInput>;
};
export type promotion_usagesUpdateWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.promotion_usagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.promotion_usagesUpdateWithoutCustomersInput, Prisma.promotion_usagesUncheckedUpdateWithoutCustomersInput>;
};
export type promotion_usagesUpdateManyWithWhereWithoutCustomersInput = {
    where: Prisma.promotion_usagesScalarWhereInput;
    data: Prisma.XOR<Prisma.promotion_usagesUpdateManyMutationInput, Prisma.promotion_usagesUncheckedUpdateManyWithoutCustomersInput>;
};
export type promotion_usagesScalarWhereInput = {
    AND?: Prisma.promotion_usagesScalarWhereInput | Prisma.promotion_usagesScalarWhereInput[];
    OR?: Prisma.promotion_usagesScalarWhereInput[];
    NOT?: Prisma.promotion_usagesScalarWhereInput | Prisma.promotion_usagesScalarWhereInput[];
    promotion_usage_id?: Prisma.BigIntFilter<"promotion_usages"> | bigint | number;
    promotion_id?: Prisma.BigIntNullableFilter<"promotion_usages"> | bigint | number | null;
    customer_id?: Prisma.BigIntNullableFilter<"promotion_usages"> | bigint | number | null;
    order_id?: Prisma.BigIntNullableFilter<"promotion_usages"> | bigint | number | null;
    used_at?: Prisma.DateTimeNullableFilter<"promotion_usages"> | Date | string | null;
};
export type promotion_usagesCreateWithoutOrdersInput = {
    promotion_usage_id?: bigint | number;
    used_at?: Date | string | null;
    promotions?: Prisma.promotionsCreateNestedOneWithoutPromotion_usagesInput;
    customers?: Prisma.customersCreateNestedOneWithoutPromotion_usagesInput;
};
export type promotion_usagesUncheckedCreateWithoutOrdersInput = {
    promotion_usage_id?: bigint | number;
    promotion_id?: bigint | number | null;
    customer_id?: bigint | number | null;
    used_at?: Date | string | null;
};
export type promotion_usagesCreateOrConnectWithoutOrdersInput = {
    where: Prisma.promotion_usagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.promotion_usagesCreateWithoutOrdersInput, Prisma.promotion_usagesUncheckedCreateWithoutOrdersInput>;
};
export type promotion_usagesCreateManyOrdersInputEnvelope = {
    data: Prisma.promotion_usagesCreateManyOrdersInput | Prisma.promotion_usagesCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type promotion_usagesUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.promotion_usagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.promotion_usagesUpdateWithoutOrdersInput, Prisma.promotion_usagesUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.promotion_usagesCreateWithoutOrdersInput, Prisma.promotion_usagesUncheckedCreateWithoutOrdersInput>;
};
export type promotion_usagesUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.promotion_usagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.promotion_usagesUpdateWithoutOrdersInput, Prisma.promotion_usagesUncheckedUpdateWithoutOrdersInput>;
};
export type promotion_usagesUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.promotion_usagesScalarWhereInput;
    data: Prisma.XOR<Prisma.promotion_usagesUpdateManyMutationInput, Prisma.promotion_usagesUncheckedUpdateManyWithoutOrdersInput>;
};
export type promotion_usagesCreateWithoutPromotionsInput = {
    promotion_usage_id?: bigint | number;
    used_at?: Date | string | null;
    customers?: Prisma.customersCreateNestedOneWithoutPromotion_usagesInput;
    orders?: Prisma.ordersCreateNestedOneWithoutPromotion_usagesInput;
};
export type promotion_usagesUncheckedCreateWithoutPromotionsInput = {
    promotion_usage_id?: bigint | number;
    customer_id?: bigint | number | null;
    order_id?: bigint | number | null;
    used_at?: Date | string | null;
};
export type promotion_usagesCreateOrConnectWithoutPromotionsInput = {
    where: Prisma.promotion_usagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.promotion_usagesCreateWithoutPromotionsInput, Prisma.promotion_usagesUncheckedCreateWithoutPromotionsInput>;
};
export type promotion_usagesCreateManyPromotionsInputEnvelope = {
    data: Prisma.promotion_usagesCreateManyPromotionsInput | Prisma.promotion_usagesCreateManyPromotionsInput[];
    skipDuplicates?: boolean;
};
export type promotion_usagesUpsertWithWhereUniqueWithoutPromotionsInput = {
    where: Prisma.promotion_usagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.promotion_usagesUpdateWithoutPromotionsInput, Prisma.promotion_usagesUncheckedUpdateWithoutPromotionsInput>;
    create: Prisma.XOR<Prisma.promotion_usagesCreateWithoutPromotionsInput, Prisma.promotion_usagesUncheckedCreateWithoutPromotionsInput>;
};
export type promotion_usagesUpdateWithWhereUniqueWithoutPromotionsInput = {
    where: Prisma.promotion_usagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.promotion_usagesUpdateWithoutPromotionsInput, Prisma.promotion_usagesUncheckedUpdateWithoutPromotionsInput>;
};
export type promotion_usagesUpdateManyWithWhereWithoutPromotionsInput = {
    where: Prisma.promotion_usagesScalarWhereInput;
    data: Prisma.XOR<Prisma.promotion_usagesUpdateManyMutationInput, Prisma.promotion_usagesUncheckedUpdateManyWithoutPromotionsInput>;
};
export type promotion_usagesCreateManyCustomersInput = {
    promotion_usage_id?: bigint | number;
    promotion_id?: bigint | number | null;
    order_id?: bigint | number | null;
    used_at?: Date | string | null;
};
export type promotion_usagesUpdateWithoutCustomersInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotions?: Prisma.promotionsUpdateOneWithoutPromotion_usagesNestedInput;
    orders?: Prisma.ordersUpdateOneWithoutPromotion_usagesNestedInput;
};
export type promotion_usagesUncheckedUpdateWithoutCustomersInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    promotion_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_usagesUncheckedUpdateManyWithoutCustomersInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    promotion_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_usagesCreateManyOrdersInput = {
    promotion_usage_id?: bigint | number;
    promotion_id?: bigint | number | null;
    customer_id?: bigint | number | null;
    used_at?: Date | string | null;
};
export type promotion_usagesUpdateWithoutOrdersInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotions?: Prisma.promotionsUpdateOneWithoutPromotion_usagesNestedInput;
    customers?: Prisma.customersUpdateOneWithoutPromotion_usagesNestedInput;
};
export type promotion_usagesUncheckedUpdateWithoutOrdersInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    promotion_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_usagesUncheckedUpdateManyWithoutOrdersInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    promotion_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_usagesCreateManyPromotionsInput = {
    promotion_usage_id?: bigint | number;
    customer_id?: bigint | number | null;
    order_id?: bigint | number | null;
    used_at?: Date | string | null;
};
export type promotion_usagesUpdateWithoutPromotionsInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUpdateOneWithoutPromotion_usagesNestedInput;
    orders?: Prisma.ordersUpdateOneWithoutPromotion_usagesNestedInput;
};
export type promotion_usagesUncheckedUpdateWithoutPromotionsInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_usagesUncheckedUpdateManyWithoutPromotionsInput = {
    promotion_usage_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type promotion_usagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    promotion_usage_id?: boolean;
    promotion_id?: boolean;
    customer_id?: boolean;
    order_id?: boolean;
    used_at?: boolean;
    promotions?: boolean | Prisma.promotion_usages$promotionsArgs<ExtArgs>;
    customers?: boolean | Prisma.promotion_usages$customersArgs<ExtArgs>;
    orders?: boolean | Prisma.promotion_usages$ordersArgs<ExtArgs>;
}, ExtArgs["result"]["promotion_usages"]>;
export type promotion_usagesSelectScalar = {
    promotion_usage_id?: boolean;
    promotion_id?: boolean;
    customer_id?: boolean;
    order_id?: boolean;
    used_at?: boolean;
};
export type promotion_usagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"promotion_usage_id" | "promotion_id" | "customer_id" | "order_id" | "used_at", ExtArgs["result"]["promotion_usages"]>;
export type promotion_usagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promotions?: boolean | Prisma.promotion_usages$promotionsArgs<ExtArgs>;
    customers?: boolean | Prisma.promotion_usages$customersArgs<ExtArgs>;
    orders?: boolean | Prisma.promotion_usages$ordersArgs<ExtArgs>;
};
export type $promotion_usagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "promotion_usages";
    objects: {
        promotions: Prisma.$promotionsPayload<ExtArgs> | null;
        customers: Prisma.$customersPayload<ExtArgs> | null;
        orders: Prisma.$ordersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        promotion_usage_id: bigint;
        promotion_id: bigint | null;
        customer_id: bigint | null;
        order_id: bigint | null;
        used_at: Date | null;
    }, ExtArgs["result"]["promotion_usages"]>;
    composites: {};
};
export type promotion_usagesGetPayload<S extends boolean | null | undefined | promotion_usagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload, S>;
export type promotion_usagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<promotion_usagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Promotion_usagesCountAggregateInputType | true;
};
export interface promotion_usagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['promotion_usages'];
        meta: {
            name: 'promotion_usages';
        };
    };
    findUnique<T extends promotion_usagesFindUniqueArgs>(args: Prisma.SelectSubset<T, promotion_usagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__promotion_usagesClient<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends promotion_usagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, promotion_usagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__promotion_usagesClient<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends promotion_usagesFindFirstArgs>(args?: Prisma.SelectSubset<T, promotion_usagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__promotion_usagesClient<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends promotion_usagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, promotion_usagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__promotion_usagesClient<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends promotion_usagesFindManyArgs>(args?: Prisma.SelectSubset<T, promotion_usagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends promotion_usagesCreateArgs>(args: Prisma.SelectSubset<T, promotion_usagesCreateArgs<ExtArgs>>): Prisma.Prisma__promotion_usagesClient<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends promotion_usagesCreateManyArgs>(args?: Prisma.SelectSubset<T, promotion_usagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends promotion_usagesDeleteArgs>(args: Prisma.SelectSubset<T, promotion_usagesDeleteArgs<ExtArgs>>): Prisma.Prisma__promotion_usagesClient<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends promotion_usagesUpdateArgs>(args: Prisma.SelectSubset<T, promotion_usagesUpdateArgs<ExtArgs>>): Prisma.Prisma__promotion_usagesClient<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends promotion_usagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, promotion_usagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends promotion_usagesUpdateManyArgs>(args: Prisma.SelectSubset<T, promotion_usagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends promotion_usagesUpsertArgs>(args: Prisma.SelectSubset<T, promotion_usagesUpsertArgs<ExtArgs>>): Prisma.Prisma__promotion_usagesClient<runtime.Types.Result.GetResult<Prisma.$promotion_usagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends promotion_usagesCountArgs>(args?: Prisma.Subset<T, promotion_usagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Promotion_usagesCountAggregateOutputType> : number>;
    aggregate<T extends Promotion_usagesAggregateArgs>(args: Prisma.Subset<T, Promotion_usagesAggregateArgs>): Prisma.PrismaPromise<GetPromotion_usagesAggregateType<T>>;
    groupBy<T extends promotion_usagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: promotion_usagesGroupByArgs['orderBy'];
    } : {
        orderBy?: promotion_usagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, promotion_usagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotion_usagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: promotion_usagesFieldRefs;
}
export interface Prisma__promotion_usagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    promotions<T extends Prisma.promotion_usages$promotionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.promotion_usages$promotionsArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    customers<T extends Prisma.promotion_usages$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.promotion_usages$customersArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.promotion_usages$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.promotion_usages$ordersArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface promotion_usagesFieldRefs {
    readonly promotion_usage_id: Prisma.FieldRef<"promotion_usages", 'BigInt'>;
    readonly promotion_id: Prisma.FieldRef<"promotion_usages", 'BigInt'>;
    readonly customer_id: Prisma.FieldRef<"promotion_usages", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"promotion_usages", 'BigInt'>;
    readonly used_at: Prisma.FieldRef<"promotion_usages", 'DateTime'>;
}
export type promotion_usagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_usagesSelect<ExtArgs> | null;
    omit?: Prisma.promotion_usagesOmit<ExtArgs> | null;
    include?: Prisma.promotion_usagesInclude<ExtArgs> | null;
    where: Prisma.promotion_usagesWhereUniqueInput;
};
export type promotion_usagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_usagesSelect<ExtArgs> | null;
    omit?: Prisma.promotion_usagesOmit<ExtArgs> | null;
    include?: Prisma.promotion_usagesInclude<ExtArgs> | null;
    where: Prisma.promotion_usagesWhereUniqueInput;
};
export type promotion_usagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type promotion_usagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type promotion_usagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type promotion_usagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_usagesSelect<ExtArgs> | null;
    omit?: Prisma.promotion_usagesOmit<ExtArgs> | null;
    include?: Prisma.promotion_usagesInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.promotion_usagesCreateInput, Prisma.promotion_usagesUncheckedCreateInput>;
};
export type promotion_usagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.promotion_usagesCreateManyInput | Prisma.promotion_usagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type promotion_usagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_usagesSelect<ExtArgs> | null;
    omit?: Prisma.promotion_usagesOmit<ExtArgs> | null;
    include?: Prisma.promotion_usagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.promotion_usagesUpdateInput, Prisma.promotion_usagesUncheckedUpdateInput>;
    where: Prisma.promotion_usagesWhereUniqueInput;
};
export type promotion_usagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.promotion_usagesUpdateManyMutationInput, Prisma.promotion_usagesUncheckedUpdateManyInput>;
    where?: Prisma.promotion_usagesWhereInput;
    limit?: number;
};
export type promotion_usagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_usagesSelect<ExtArgs> | null;
    omit?: Prisma.promotion_usagesOmit<ExtArgs> | null;
    include?: Prisma.promotion_usagesInclude<ExtArgs> | null;
    where: Prisma.promotion_usagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.promotion_usagesCreateInput, Prisma.promotion_usagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.promotion_usagesUpdateInput, Prisma.promotion_usagesUncheckedUpdateInput>;
};
export type promotion_usagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_usagesSelect<ExtArgs> | null;
    omit?: Prisma.promotion_usagesOmit<ExtArgs> | null;
    include?: Prisma.promotion_usagesInclude<ExtArgs> | null;
    where: Prisma.promotion_usagesWhereUniqueInput;
};
export type promotion_usagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotion_usagesWhereInput;
    limit?: number;
};
export type promotion_usages$promotionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    include?: Prisma.promotionsInclude<ExtArgs> | null;
    where?: Prisma.promotionsWhereInput;
};
export type promotion_usages$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
};
export type promotion_usages$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
};
export type promotion_usagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotion_usagesSelect<ExtArgs> | null;
    omit?: Prisma.promotion_usagesOmit<ExtArgs> | null;
    include?: Prisma.promotion_usagesInclude<ExtArgs> | null;
};
export {};
