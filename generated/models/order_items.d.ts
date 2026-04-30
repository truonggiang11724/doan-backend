import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type order_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$order_itemsPayload>;
export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null;
    _avg: Order_itemsAvgAggregateOutputType | null;
    _sum: Order_itemsSumAggregateOutputType | null;
    _min: Order_itemsMinAggregateOutputType | null;
    _max: Order_itemsMaxAggregateOutputType | null;
};
export type Order_itemsAvgAggregateOutputType = {
    order_item_id: number | null;
    order_id: number | null;
    variant_id: number | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
};
export type Order_itemsSumAggregateOutputType = {
    order_item_id: bigint | null;
    order_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
};
export type Order_itemsMinAggregateOutputType = {
    order_item_id: bigint | null;
    order_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
};
export type Order_itemsMaxAggregateOutputType = {
    order_item_id: bigint | null;
    order_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
};
export type Order_itemsCountAggregateOutputType = {
    order_item_id: number;
    order_id: number;
    variant_id: number;
    quantity: number;
    unit_price: number;
    _all: number;
};
export type Order_itemsAvgAggregateInputType = {
    order_item_id?: true;
    order_id?: true;
    variant_id?: true;
    quantity?: true;
    unit_price?: true;
};
export type Order_itemsSumAggregateInputType = {
    order_item_id?: true;
    order_id?: true;
    variant_id?: true;
    quantity?: true;
    unit_price?: true;
};
export type Order_itemsMinAggregateInputType = {
    order_item_id?: true;
    order_id?: true;
    variant_id?: true;
    quantity?: true;
    unit_price?: true;
};
export type Order_itemsMaxAggregateInputType = {
    order_item_id?: true;
    order_id?: true;
    variant_id?: true;
    quantity?: true;
    unit_price?: true;
};
export type Order_itemsCountAggregateInputType = {
    order_item_id?: true;
    order_id?: true;
    variant_id?: true;
    quantity?: true;
    unit_price?: true;
    _all?: true;
};
export type Order_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Order_itemsCountAggregateInputType;
    _avg?: Order_itemsAvgAggregateInputType;
    _sum?: Order_itemsSumAggregateInputType;
    _min?: Order_itemsMinAggregateInputType;
    _max?: Order_itemsMaxAggregateInputType;
};
export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder_items[P]> : Prisma.GetScalarType<T[P], AggregateOrder_items[P]>;
};
export type order_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithAggregationInput | Prisma.order_itemsOrderByWithAggregationInput[];
    by: Prisma.Order_itemsScalarFieldEnum[] | Prisma.Order_itemsScalarFieldEnum;
    having?: Prisma.order_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Order_itemsCountAggregateInputType | true;
    _avg?: Order_itemsAvgAggregateInputType;
    _sum?: Order_itemsSumAggregateInputType;
    _min?: Order_itemsMinAggregateInputType;
    _max?: Order_itemsMaxAggregateInputType;
};
export type Order_itemsGroupByOutputType = {
    order_item_id: bigint;
    order_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
    _count: Order_itemsCountAggregateOutputType | null;
    _avg: Order_itemsAvgAggregateOutputType | null;
    _sum: Order_itemsSumAggregateOutputType | null;
    _min: Order_itemsMinAggregateOutputType | null;
    _max: Order_itemsMaxAggregateOutputType | null;
};
type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Order_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Order_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Order_itemsGroupByOutputType[P]>;
}>>;
export type order_itemsWhereInput = {
    AND?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    OR?: Prisma.order_itemsWhereInput[];
    NOT?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    order_item_id?: Prisma.BigIntFilter<"order_items"> | bigint | number;
    order_id?: Prisma.BigIntNullableFilter<"order_items"> | bigint | number | null;
    variant_id?: Prisma.BigIntNullableFilter<"order_items"> | bigint | number | null;
    quantity?: Prisma.IntNullableFilter<"order_items"> | number | null;
    unit_price?: Prisma.DecimalNullableFilter<"order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
    product_variants?: Prisma.XOR<Prisma.Product_variantsNullableScalarRelationFilter, Prisma.product_variantsWhereInput> | null;
    reviews?: Prisma.ReviewsListRelationFilter;
};
export type order_itemsOrderByWithRelationInput = {
    order_item_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    variant_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    unit_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByWithRelationInput;
    product_variants?: Prisma.product_variantsOrderByWithRelationInput;
    reviews?: Prisma.reviewsOrderByRelationAggregateInput;
};
export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    order_item_id?: bigint | number;
    AND?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    OR?: Prisma.order_itemsWhereInput[];
    NOT?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    order_id?: Prisma.BigIntNullableFilter<"order_items"> | bigint | number | null;
    variant_id?: Prisma.BigIntNullableFilter<"order_items"> | bigint | number | null;
    quantity?: Prisma.IntNullableFilter<"order_items"> | number | null;
    unit_price?: Prisma.DecimalNullableFilter<"order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
    product_variants?: Prisma.XOR<Prisma.Product_variantsNullableScalarRelationFilter, Prisma.product_variantsWhereInput> | null;
    reviews?: Prisma.ReviewsListRelationFilter;
}, "order_item_id">;
export type order_itemsOrderByWithAggregationInput = {
    order_item_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    variant_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    unit_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.order_itemsCountOrderByAggregateInput;
    _avg?: Prisma.order_itemsAvgOrderByAggregateInput;
    _max?: Prisma.order_itemsMaxOrderByAggregateInput;
    _min?: Prisma.order_itemsMinOrderByAggregateInput;
    _sum?: Prisma.order_itemsSumOrderByAggregateInput;
};
export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.order_itemsScalarWhereWithAggregatesInput | Prisma.order_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.order_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.order_itemsScalarWhereWithAggregatesInput | Prisma.order_itemsScalarWhereWithAggregatesInput[];
    order_item_id?: Prisma.BigIntWithAggregatesFilter<"order_items"> | bigint | number;
    order_id?: Prisma.BigIntNullableWithAggregatesFilter<"order_items"> | bigint | number | null;
    variant_id?: Prisma.BigIntNullableWithAggregatesFilter<"order_items"> | bigint | number | null;
    quantity?: Prisma.IntNullableWithAggregatesFilter<"order_items"> | number | null;
    unit_price?: Prisma.DecimalNullableWithAggregatesFilter<"order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type order_itemsCreateInput = {
    order_item_id?: bigint | number;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    orders?: Prisma.ordersCreateNestedOneWithoutOrder_itemsInput;
    product_variants?: Prisma.product_variantsCreateNestedOneWithoutOrder_itemsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutOrder_itemsInput;
};
export type order_itemsUncheckedCreateInput = {
    order_item_id?: bigint | number;
    order_id?: bigint | number | null;
    variant_id?: bigint | number | null;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutOrder_itemsInput;
};
export type order_itemsUpdateInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    orders?: Prisma.ordersUpdateOneWithoutOrder_itemsNestedInput;
    product_variants?: Prisma.product_variantsUpdateOneWithoutOrder_itemsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    variant_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutOrder_itemsNestedInput;
};
export type order_itemsCreateManyInput = {
    order_item_id?: bigint | number;
    order_id?: bigint | number | null;
    variant_id?: bigint | number | null;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type order_itemsUpdateManyMutationInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type order_itemsUncheckedUpdateManyInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    variant_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type order_itemsCountOrderByAggregateInput = {
    order_item_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type order_itemsAvgOrderByAggregateInput = {
    order_item_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type order_itemsMaxOrderByAggregateInput = {
    order_item_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type order_itemsMinOrderByAggregateInput = {
    order_item_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type order_itemsSumOrderByAggregateInput = {
    order_item_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type Order_itemsListRelationFilter = {
    every?: Prisma.order_itemsWhereInput;
    some?: Prisma.order_itemsWhereInput;
    none?: Prisma.order_itemsWhereInput;
};
export type order_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Order_itemsNullableScalarRelationFilter = {
    is?: Prisma.order_itemsWhereInput | null;
    isNot?: Prisma.order_itemsWhereInput | null;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput | Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput | Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsCreateNestedManyWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutProduct_variantsInput, Prisma.order_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.order_itemsCreateWithoutProduct_variantsInput[] | Prisma.order_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.order_itemsCreateOrConnectWithoutProduct_variantsInput[];
    createMany?: Prisma.order_itemsCreateManyProduct_variantsInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutProduct_variantsInput, Prisma.order_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.order_itemsCreateWithoutProduct_variantsInput[] | Prisma.order_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.order_itemsCreateOrConnectWithoutProduct_variantsInput[];
    createMany?: Prisma.order_itemsCreateManyProduct_variantsInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUpdateManyWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutProduct_variantsInput, Prisma.order_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.order_itemsCreateWithoutProduct_variantsInput[] | Prisma.order_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.order_itemsCreateOrConnectWithoutProduct_variantsInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput[];
    createMany?: Prisma.order_itemsCreateManyProduct_variantsInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutProduct_variantsInput | Prisma.order_itemsUpdateManyWithWhereWithoutProduct_variantsInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutProduct_variantsInput, Prisma.order_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.order_itemsCreateWithoutProduct_variantsInput[] | Prisma.order_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.order_itemsCreateOrConnectWithoutProduct_variantsInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput[];
    createMany?: Prisma.order_itemsCreateManyProduct_variantsInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutProduct_variantsInput | Prisma.order_itemsUpdateManyWithWhereWithoutProduct_variantsInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutReviewsInput, Prisma.order_itemsUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsUpdateOneWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutReviewsInput, Prisma.order_itemsUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.order_itemsUpsertWithoutReviewsInput;
    disconnect?: Prisma.order_itemsWhereInput | boolean;
    delete?: Prisma.order_itemsWhereInput | boolean;
    connect?: Prisma.order_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.order_itemsUpdateToOneWithWhereWithoutReviewsInput, Prisma.order_itemsUpdateWithoutReviewsInput>, Prisma.order_itemsUncheckedUpdateWithoutReviewsInput>;
};
export type order_itemsCreateWithoutOrdersInput = {
    order_item_id?: bigint | number;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    product_variants?: Prisma.product_variantsCreateNestedOneWithoutOrder_itemsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutOrder_itemsInput;
};
export type order_itemsUncheckedCreateWithoutOrdersInput = {
    order_item_id?: bigint | number;
    variant_id?: bigint | number | null;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutOrder_itemsInput;
};
export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput>;
};
export type order_itemsCreateManyOrdersInputEnvelope = {
    data: Prisma.order_itemsCreateManyOrdersInput | Prisma.order_itemsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_itemsUpdateWithoutOrdersInput, Prisma.order_itemsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput>;
};
export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateWithoutOrdersInput, Prisma.order_itemsUncheckedUpdateWithoutOrdersInput>;
};
export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.order_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyWithoutOrdersInput>;
};
export type order_itemsScalarWhereInput = {
    AND?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
    OR?: Prisma.order_itemsScalarWhereInput[];
    NOT?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
    order_item_id?: Prisma.BigIntFilter<"order_items"> | bigint | number;
    order_id?: Prisma.BigIntNullableFilter<"order_items"> | bigint | number | null;
    variant_id?: Prisma.BigIntNullableFilter<"order_items"> | bigint | number | null;
    quantity?: Prisma.IntNullableFilter<"order_items"> | number | null;
    unit_price?: Prisma.DecimalNullableFilter<"order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type order_itemsCreateWithoutProduct_variantsInput = {
    order_item_id?: bigint | number;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    orders?: Prisma.ordersCreateNestedOneWithoutOrder_itemsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutOrder_itemsInput;
};
export type order_itemsUncheckedCreateWithoutProduct_variantsInput = {
    order_item_id?: bigint | number;
    order_id?: bigint | number | null;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutOrder_itemsInput;
};
export type order_itemsCreateOrConnectWithoutProduct_variantsInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutProduct_variantsInput, Prisma.order_itemsUncheckedCreateWithoutProduct_variantsInput>;
};
export type order_itemsCreateManyProduct_variantsInputEnvelope = {
    data: Prisma.order_itemsCreateManyProduct_variantsInput | Prisma.order_itemsCreateManyProduct_variantsInput[];
    skipDuplicates?: boolean;
};
export type order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_itemsUpdateWithoutProduct_variantsInput, Prisma.order_itemsUncheckedUpdateWithoutProduct_variantsInput>;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutProduct_variantsInput, Prisma.order_itemsUncheckedCreateWithoutProduct_variantsInput>;
};
export type order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateWithoutProduct_variantsInput, Prisma.order_itemsUncheckedUpdateWithoutProduct_variantsInput>;
};
export type order_itemsUpdateManyWithWhereWithoutProduct_variantsInput = {
    where: Prisma.order_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyWithoutProduct_variantsInput>;
};
export type order_itemsCreateWithoutReviewsInput = {
    order_item_id?: bigint | number;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    orders?: Prisma.ordersCreateNestedOneWithoutOrder_itemsInput;
    product_variants?: Prisma.product_variantsCreateNestedOneWithoutOrder_itemsInput;
};
export type order_itemsUncheckedCreateWithoutReviewsInput = {
    order_item_id?: bigint | number;
    order_id?: bigint | number | null;
    variant_id?: bigint | number | null;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type order_itemsCreateOrConnectWithoutReviewsInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutReviewsInput, Prisma.order_itemsUncheckedCreateWithoutReviewsInput>;
};
export type order_itemsUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.order_itemsUpdateWithoutReviewsInput, Prisma.order_itemsUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutReviewsInput, Prisma.order_itemsUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.order_itemsWhereInput;
};
export type order_itemsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.order_itemsWhereInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateWithoutReviewsInput, Prisma.order_itemsUncheckedUpdateWithoutReviewsInput>;
};
export type order_itemsUpdateWithoutReviewsInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    orders?: Prisma.ordersUpdateOneWithoutOrder_itemsNestedInput;
    product_variants?: Prisma.product_variantsUpdateOneWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateWithoutReviewsInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    variant_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type order_itemsCreateManyOrdersInput = {
    order_item_id?: bigint | number;
    variant_id?: bigint | number | null;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type order_itemsUpdateWithoutOrdersInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    product_variants?: Prisma.product_variantsUpdateOneWithoutOrder_itemsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type order_itemsCreateManyProduct_variantsInput = {
    order_item_id?: bigint | number;
    order_id?: bigint | number | null;
    quantity?: number | null;
    unit_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type order_itemsUpdateWithoutProduct_variantsInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    orders?: Prisma.ordersUpdateOneWithoutOrder_itemsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateWithoutProduct_variantsInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateManyWithoutProduct_variantsInput = {
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unit_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type Order_itemsCountOutputType = {
    reviews: number;
};
export type Order_itemsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reviews?: boolean | Order_itemsCountOutputTypeCountReviewsArgs;
};
export type Order_itemsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Order_itemsCountOutputTypeSelect<ExtArgs> | null;
};
export type Order_itemsCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
};
export type order_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    order_item_id?: boolean;
    order_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    orders?: boolean | Prisma.order_items$ordersArgs<ExtArgs>;
    product_variants?: boolean | Prisma.order_items$product_variantsArgs<ExtArgs>;
    reviews?: boolean | Prisma.order_items$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.Order_itemsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_items"]>;
export type order_itemsSelectScalar = {
    order_item_id?: boolean;
    order_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
};
export type order_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"order_item_id" | "order_id" | "variant_id" | "quantity" | "unit_price", ExtArgs["result"]["order_items"]>;
export type order_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.order_items$ordersArgs<ExtArgs>;
    product_variants?: boolean | Prisma.order_items$product_variantsArgs<ExtArgs>;
    reviews?: boolean | Prisma.order_items$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.Order_itemsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $order_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "order_items";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs> | null;
        product_variants: Prisma.$product_variantsPayload<ExtArgs> | null;
        reviews: Prisma.$reviewsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        order_item_id: bigint;
        order_id: bigint | null;
        variant_id: bigint | null;
        quantity: number | null;
        unit_price: runtime.Decimal | null;
    }, ExtArgs["result"]["order_items"]>;
    composites: {};
};
export type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$order_itemsPayload, S>;
export type order_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Order_itemsCountAggregateInputType | true;
};
export interface order_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['order_items'];
        meta: {
            name: 'order_items';
        };
    };
    findUnique<T extends order_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends order_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends order_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends order_itemsCreateArgs>(args: Prisma.SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends order_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends order_itemsDeleteArgs>(args: Prisma.SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends order_itemsUpdateArgs>(args: Prisma.SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends order_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends order_itemsUpsertArgs>(args: Prisma.SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends order_itemsCountArgs>(args?: Prisma.Subset<T, order_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Order_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Order_itemsAggregateArgs>(args: Prisma.Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>;
    groupBy<T extends order_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: order_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: order_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: order_itemsFieldRefs;
}
export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.order_items$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_items$ordersArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    product_variants<T extends Prisma.order_items$product_variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_items$product_variantsArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reviews<T extends Prisma.order_items$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_items$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface order_itemsFieldRefs {
    readonly order_item_id: Prisma.FieldRef<"order_items", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"order_items", 'BigInt'>;
    readonly variant_id: Prisma.FieldRef<"order_items", 'BigInt'>;
    readonly quantity: Prisma.FieldRef<"order_items", 'Int'>;
    readonly unit_price: Prisma.FieldRef<"order_items", 'Decimal'>;
}
export type order_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type order_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type order_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type order_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.order_itemsCreateInput, Prisma.order_itemsUncheckedCreateInput>;
};
export type order_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.order_itemsCreateManyInput | Prisma.order_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type order_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_itemsUpdateInput, Prisma.order_itemsUncheckedUpdateInput>;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyInput>;
    where?: Prisma.order_itemsWhereInput;
    limit?: number;
};
export type order_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_itemsCreateInput, Prisma.order_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.order_itemsUpdateInput, Prisma.order_itemsUncheckedUpdateInput>;
};
export type order_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
    limit?: number;
};
export type order_items$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
};
export type order_items$product_variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
    where?: Prisma.product_variantsWhereInput;
};
export type order_items$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type order_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
};
export {};
