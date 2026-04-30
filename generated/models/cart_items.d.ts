import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type cart_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$cart_itemsPayload>;
export type AggregateCart_items = {
    _count: Cart_itemsCountAggregateOutputType | null;
    _avg: Cart_itemsAvgAggregateOutputType | null;
    _sum: Cart_itemsSumAggregateOutputType | null;
    _min: Cart_itemsMinAggregateOutputType | null;
    _max: Cart_itemsMaxAggregateOutputType | null;
};
export type Cart_itemsAvgAggregateOutputType = {
    cart_item_id: number | null;
    cart_id: number | null;
    variant_id: number | null;
    quantity: number | null;
};
export type Cart_itemsSumAggregateOutputType = {
    cart_item_id: bigint | null;
    cart_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
};
export type Cart_itemsMinAggregateOutputType = {
    cart_item_id: bigint | null;
    cart_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    created_at: Date | null;
};
export type Cart_itemsMaxAggregateOutputType = {
    cart_item_id: bigint | null;
    cart_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    created_at: Date | null;
};
export type Cart_itemsCountAggregateOutputType = {
    cart_item_id: number;
    cart_id: number;
    variant_id: number;
    quantity: number;
    created_at: number;
    _all: number;
};
export type Cart_itemsAvgAggregateInputType = {
    cart_item_id?: true;
    cart_id?: true;
    variant_id?: true;
    quantity?: true;
};
export type Cart_itemsSumAggregateInputType = {
    cart_item_id?: true;
    cart_id?: true;
    variant_id?: true;
    quantity?: true;
};
export type Cart_itemsMinAggregateInputType = {
    cart_item_id?: true;
    cart_id?: true;
    variant_id?: true;
    quantity?: true;
    created_at?: true;
};
export type Cart_itemsMaxAggregateInputType = {
    cart_item_id?: true;
    cart_id?: true;
    variant_id?: true;
    quantity?: true;
    created_at?: true;
};
export type Cart_itemsCountAggregateInputType = {
    cart_item_id?: true;
    cart_id?: true;
    variant_id?: true;
    quantity?: true;
    created_at?: true;
    _all?: true;
};
export type Cart_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Cart_itemsCountAggregateInputType;
    _avg?: Cart_itemsAvgAggregateInputType;
    _sum?: Cart_itemsSumAggregateInputType;
    _min?: Cart_itemsMinAggregateInputType;
    _max?: Cart_itemsMaxAggregateInputType;
};
export type GetCart_itemsAggregateType<T extends Cart_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateCart_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCart_items[P]> : Prisma.GetScalarType<T[P], AggregateCart_items[P]>;
};
export type cart_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithAggregationInput | Prisma.cart_itemsOrderByWithAggregationInput[];
    by: Prisma.Cart_itemsScalarFieldEnum[] | Prisma.Cart_itemsScalarFieldEnum;
    having?: Prisma.cart_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Cart_itemsCountAggregateInputType | true;
    _avg?: Cart_itemsAvgAggregateInputType;
    _sum?: Cart_itemsSumAggregateInputType;
    _min?: Cart_itemsMinAggregateInputType;
    _max?: Cart_itemsMaxAggregateInputType;
};
export type Cart_itemsGroupByOutputType = {
    cart_item_id: bigint;
    cart_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    created_at: Date | null;
    _count: Cart_itemsCountAggregateOutputType | null;
    _avg: Cart_itemsAvgAggregateOutputType | null;
    _sum: Cart_itemsSumAggregateOutputType | null;
    _min: Cart_itemsMinAggregateOutputType | null;
    _max: Cart_itemsMaxAggregateOutputType | null;
};
type GetCart_itemsGroupByPayload<T extends cart_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Cart_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Cart_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Cart_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>;
}>>;
export type cart_itemsWhereInput = {
    AND?: Prisma.cart_itemsWhereInput | Prisma.cart_itemsWhereInput[];
    OR?: Prisma.cart_itemsWhereInput[];
    NOT?: Prisma.cart_itemsWhereInput | Prisma.cart_itemsWhereInput[];
    cart_item_id?: Prisma.BigIntFilter<"cart_items"> | bigint | number;
    cart_id?: Prisma.BigIntNullableFilter<"cart_items"> | bigint | number | null;
    variant_id?: Prisma.BigIntNullableFilter<"cart_items"> | bigint | number | null;
    quantity?: Prisma.IntNullableFilter<"cart_items"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"cart_items"> | Date | string | null;
    carts?: Prisma.XOR<Prisma.CartsNullableScalarRelationFilter, Prisma.cartsWhereInput> | null;
    product_variants?: Prisma.XOR<Prisma.Product_variantsNullableScalarRelationFilter, Prisma.product_variantsWhereInput> | null;
};
export type cart_itemsOrderByWithRelationInput = {
    cart_item_id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    variant_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    carts?: Prisma.cartsOrderByWithRelationInput;
    product_variants?: Prisma.product_variantsOrderByWithRelationInput;
};
export type cart_itemsWhereUniqueInput = Prisma.AtLeast<{
    cart_item_id?: bigint | number;
    AND?: Prisma.cart_itemsWhereInput | Prisma.cart_itemsWhereInput[];
    OR?: Prisma.cart_itemsWhereInput[];
    NOT?: Prisma.cart_itemsWhereInput | Prisma.cart_itemsWhereInput[];
    cart_id?: Prisma.BigIntNullableFilter<"cart_items"> | bigint | number | null;
    variant_id?: Prisma.BigIntNullableFilter<"cart_items"> | bigint | number | null;
    quantity?: Prisma.IntNullableFilter<"cart_items"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"cart_items"> | Date | string | null;
    carts?: Prisma.XOR<Prisma.CartsNullableScalarRelationFilter, Prisma.cartsWhereInput> | null;
    product_variants?: Prisma.XOR<Prisma.Product_variantsNullableScalarRelationFilter, Prisma.product_variantsWhereInput> | null;
}, "cart_item_id">;
export type cart_itemsOrderByWithAggregationInput = {
    cart_item_id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    variant_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.cart_itemsCountOrderByAggregateInput;
    _avg?: Prisma.cart_itemsAvgOrderByAggregateInput;
    _max?: Prisma.cart_itemsMaxOrderByAggregateInput;
    _min?: Prisma.cart_itemsMinOrderByAggregateInput;
    _sum?: Prisma.cart_itemsSumOrderByAggregateInput;
};
export type cart_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.cart_itemsScalarWhereWithAggregatesInput | Prisma.cart_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.cart_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cart_itemsScalarWhereWithAggregatesInput | Prisma.cart_itemsScalarWhereWithAggregatesInput[];
    cart_item_id?: Prisma.BigIntWithAggregatesFilter<"cart_items"> | bigint | number;
    cart_id?: Prisma.BigIntNullableWithAggregatesFilter<"cart_items"> | bigint | number | null;
    variant_id?: Prisma.BigIntNullableWithAggregatesFilter<"cart_items"> | bigint | number | null;
    quantity?: Prisma.IntNullableWithAggregatesFilter<"cart_items"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"cart_items"> | Date | string | null;
};
export type cart_itemsCreateInput = {
    cart_item_id?: bigint | number;
    quantity?: number | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsCreateNestedOneWithoutCart_itemsInput;
    product_variants?: Prisma.product_variantsCreateNestedOneWithoutCart_itemsInput;
};
export type cart_itemsUncheckedCreateInput = {
    cart_item_id?: bigint | number;
    cart_id?: bigint | number | null;
    variant_id?: bigint | number | null;
    quantity?: number | null;
    created_at?: Date | string | null;
};
export type cart_itemsUpdateInput = {
    cart_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUpdateOneWithoutCart_itemsNestedInput;
    product_variants?: Prisma.product_variantsUpdateOneWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateInput = {
    cart_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cart_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    variant_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cart_itemsCreateManyInput = {
    cart_item_id?: bigint | number;
    cart_id?: bigint | number | null;
    variant_id?: bigint | number | null;
    quantity?: number | null;
    created_at?: Date | string | null;
};
export type cart_itemsUpdateManyMutationInput = {
    cart_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cart_itemsUncheckedUpdateManyInput = {
    cart_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cart_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    variant_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cart_itemsCountOrderByAggregateInput = {
    cart_item_id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type cart_itemsAvgOrderByAggregateInput = {
    cart_item_id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type cart_itemsMaxOrderByAggregateInput = {
    cart_item_id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type cart_itemsMinOrderByAggregateInput = {
    cart_item_id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type cart_itemsSumOrderByAggregateInput = {
    cart_item_id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type Cart_itemsListRelationFilter = {
    every?: Prisma.cart_itemsWhereInput;
    some?: Prisma.cart_itemsWhereInput;
    none?: Prisma.cart_itemsWhereInput;
};
export type cart_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type cart_itemsCreateNestedManyWithoutCartsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput> | Prisma.cart_itemsCreateWithoutCartsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCartsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCartsInput | Prisma.cart_itemsCreateOrConnectWithoutCartsInput[];
    createMany?: Prisma.cart_itemsCreateManyCartsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUncheckedCreateNestedManyWithoutCartsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput> | Prisma.cart_itemsCreateWithoutCartsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCartsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCartsInput | Prisma.cart_itemsCreateOrConnectWithoutCartsInput[];
    createMany?: Prisma.cart_itemsCreateManyCartsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUpdateManyWithoutCartsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput> | Prisma.cart_itemsCreateWithoutCartsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCartsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCartsInput | Prisma.cart_itemsCreateOrConnectWithoutCartsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutCartsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutCartsInput[];
    createMany?: Prisma.cart_itemsCreateManyCartsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutCartsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutCartsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutCartsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutCartsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsUncheckedUpdateManyWithoutCartsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput> | Prisma.cart_itemsCreateWithoutCartsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCartsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCartsInput | Prisma.cart_itemsCreateOrConnectWithoutCartsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutCartsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutCartsInput[];
    createMany?: Prisma.cart_itemsCreateManyCartsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutCartsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutCartsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutCartsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutCartsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsCreateNestedManyWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutProduct_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.cart_itemsCreateWithoutProduct_variantsInput[] | Prisma.cart_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.cart_itemsCreateOrConnectWithoutProduct_variantsInput[];
    createMany?: Prisma.cart_itemsCreateManyProduct_variantsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutProduct_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.cart_itemsCreateWithoutProduct_variantsInput[] | Prisma.cart_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.cart_itemsCreateOrConnectWithoutProduct_variantsInput[];
    createMany?: Prisma.cart_itemsCreateManyProduct_variantsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUpdateManyWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutProduct_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.cart_itemsCreateWithoutProduct_variantsInput[] | Prisma.cart_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.cart_itemsCreateOrConnectWithoutProduct_variantsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput[];
    createMany?: Prisma.cart_itemsCreateManyProduct_variantsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutProduct_variantsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutProduct_variantsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutProduct_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.cart_itemsCreateWithoutProduct_variantsInput[] | Prisma.cart_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.cart_itemsCreateOrConnectWithoutProduct_variantsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput[];
    createMany?: Prisma.cart_itemsCreateManyProduct_variantsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutProduct_variantsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutProduct_variantsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsCreateWithoutCartsInput = {
    cart_item_id?: bigint | number;
    quantity?: number | null;
    created_at?: Date | string | null;
    product_variants?: Prisma.product_variantsCreateNestedOneWithoutCart_itemsInput;
};
export type cart_itemsUncheckedCreateWithoutCartsInput = {
    cart_item_id?: bigint | number;
    variant_id?: bigint | number | null;
    quantity?: number | null;
    created_at?: Date | string | null;
};
export type cart_itemsCreateOrConnectWithoutCartsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput>;
};
export type cart_itemsCreateManyCartsInputEnvelope = {
    data: Prisma.cart_itemsCreateManyCartsInput | Prisma.cart_itemsCreateManyCartsInput[];
    skipDuplicates?: boolean;
};
export type cart_itemsUpsertWithWhereUniqueWithoutCartsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cart_itemsUpdateWithoutCartsInput, Prisma.cart_itemsUncheckedUpdateWithoutCartsInput>;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput>;
};
export type cart_itemsUpdateWithWhereUniqueWithoutCartsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateWithoutCartsInput, Prisma.cart_itemsUncheckedUpdateWithoutCartsInput>;
};
export type cart_itemsUpdateManyWithWhereWithoutCartsInput = {
    where: Prisma.cart_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateManyMutationInput, Prisma.cart_itemsUncheckedUpdateManyWithoutCartsInput>;
};
export type cart_itemsScalarWhereInput = {
    AND?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
    OR?: Prisma.cart_itemsScalarWhereInput[];
    NOT?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
    cart_item_id?: Prisma.BigIntFilter<"cart_items"> | bigint | number;
    cart_id?: Prisma.BigIntNullableFilter<"cart_items"> | bigint | number | null;
    variant_id?: Prisma.BigIntNullableFilter<"cart_items"> | bigint | number | null;
    quantity?: Prisma.IntNullableFilter<"cart_items"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"cart_items"> | Date | string | null;
};
export type cart_itemsCreateWithoutProduct_variantsInput = {
    cart_item_id?: bigint | number;
    quantity?: number | null;
    created_at?: Date | string | null;
    carts?: Prisma.cartsCreateNestedOneWithoutCart_itemsInput;
};
export type cart_itemsUncheckedCreateWithoutProduct_variantsInput = {
    cart_item_id?: bigint | number;
    cart_id?: bigint | number | null;
    quantity?: number | null;
    created_at?: Date | string | null;
};
export type cart_itemsCreateOrConnectWithoutProduct_variantsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutProduct_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutProduct_variantsInput>;
};
export type cart_itemsCreateManyProduct_variantsInputEnvelope = {
    data: Prisma.cart_itemsCreateManyProduct_variantsInput | Prisma.cart_itemsCreateManyProduct_variantsInput[];
    skipDuplicates?: boolean;
};
export type cart_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cart_itemsUpdateWithoutProduct_variantsInput, Prisma.cart_itemsUncheckedUpdateWithoutProduct_variantsInput>;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutProduct_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutProduct_variantsInput>;
};
export type cart_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateWithoutProduct_variantsInput, Prisma.cart_itemsUncheckedUpdateWithoutProduct_variantsInput>;
};
export type cart_itemsUpdateManyWithWhereWithoutProduct_variantsInput = {
    where: Prisma.cart_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateManyMutationInput, Prisma.cart_itemsUncheckedUpdateManyWithoutProduct_variantsInput>;
};
export type cart_itemsCreateManyCartsInput = {
    cart_item_id?: bigint | number;
    variant_id?: bigint | number | null;
    quantity?: number | null;
    created_at?: Date | string | null;
};
export type cart_itemsUpdateWithoutCartsInput = {
    cart_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_variants?: Prisma.product_variantsUpdateOneWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateWithoutCartsInput = {
    cart_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cart_itemsUncheckedUpdateManyWithoutCartsInput = {
    cart_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cart_itemsCreateManyProduct_variantsInput = {
    cart_item_id?: bigint | number;
    cart_id?: bigint | number | null;
    quantity?: number | null;
    created_at?: Date | string | null;
};
export type cart_itemsUpdateWithoutProduct_variantsInput = {
    cart_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUpdateOneWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateWithoutProduct_variantsInput = {
    cart_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cart_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cart_itemsUncheckedUpdateManyWithoutProduct_variantsInput = {
    cart_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    cart_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cart_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cart_item_id?: boolean;
    cart_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    created_at?: boolean;
    carts?: boolean | Prisma.cart_items$cartsArgs<ExtArgs>;
    product_variants?: boolean | Prisma.cart_items$product_variantsArgs<ExtArgs>;
}, ExtArgs["result"]["cart_items"]>;
export type cart_itemsSelectScalar = {
    cart_item_id?: boolean;
    cart_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    created_at?: boolean;
};
export type cart_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cart_item_id" | "cart_id" | "variant_id" | "quantity" | "created_at", ExtArgs["result"]["cart_items"]>;
export type cart_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carts?: boolean | Prisma.cart_items$cartsArgs<ExtArgs>;
    product_variants?: boolean | Prisma.cart_items$product_variantsArgs<ExtArgs>;
};
export type $cart_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cart_items";
    objects: {
        carts: Prisma.$cartsPayload<ExtArgs> | null;
        product_variants: Prisma.$product_variantsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cart_item_id: bigint;
        cart_id: bigint | null;
        variant_id: bigint | null;
        quantity: number | null;
        created_at: Date | null;
    }, ExtArgs["result"]["cart_items"]>;
    composites: {};
};
export type cart_itemsGetPayload<S extends boolean | null | undefined | cart_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload, S>;
export type cart_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cart_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Cart_itemsCountAggregateInputType | true;
};
export interface cart_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cart_items'];
        meta: {
            name: 'cart_items';
        };
    };
    findUnique<T extends cart_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, cart_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cart_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cart_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cart_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, cart_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cart_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cart_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cart_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, cart_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cart_itemsCreateArgs>(args: Prisma.SelectSubset<T, cart_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cart_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, cart_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends cart_itemsDeleteArgs>(args: Prisma.SelectSubset<T, cart_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cart_itemsUpdateArgs>(args: Prisma.SelectSubset<T, cart_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cart_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, cart_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cart_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, cart_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends cart_itemsUpsertArgs>(args: Prisma.SelectSubset<T, cart_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cart_itemsCountArgs>(args?: Prisma.Subset<T, cart_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Cart_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Cart_itemsAggregateArgs>(args: Prisma.Subset<T, Cart_itemsAggregateArgs>): Prisma.PrismaPromise<GetCart_itemsAggregateType<T>>;
    groupBy<T extends cart_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cart_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: cart_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cart_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cart_itemsFieldRefs;
}
export interface Prisma__cart_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    carts<T extends Prisma.cart_items$cartsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cart_items$cartsArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    product_variants<T extends Prisma.cart_items$product_variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cart_items$product_variantsArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cart_itemsFieldRefs {
    readonly cart_item_id: Prisma.FieldRef<"cart_items", 'BigInt'>;
    readonly cart_id: Prisma.FieldRef<"cart_items", 'BigInt'>;
    readonly variant_id: Prisma.FieldRef<"cart_items", 'BigInt'>;
    readonly quantity: Prisma.FieldRef<"cart_items", 'Int'>;
    readonly created_at: Prisma.FieldRef<"cart_items", 'DateTime'>;
}
export type cart_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where: Prisma.cart_itemsWhereUniqueInput;
};
export type cart_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where: Prisma.cart_itemsWhereUniqueInput;
};
export type cart_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_itemsScalarFieldEnum | Prisma.Cart_itemsScalarFieldEnum[];
};
export type cart_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_itemsScalarFieldEnum | Prisma.Cart_itemsScalarFieldEnum[];
};
export type cart_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_itemsScalarFieldEnum | Prisma.Cart_itemsScalarFieldEnum[];
};
export type cart_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.cart_itemsCreateInput, Prisma.cart_itemsUncheckedCreateInput>;
};
export type cart_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cart_itemsCreateManyInput | Prisma.cart_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cart_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cart_itemsUpdateInput, Prisma.cart_itemsUncheckedUpdateInput>;
    where: Prisma.cart_itemsWhereUniqueInput;
};
export type cart_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cart_itemsUpdateManyMutationInput, Prisma.cart_itemsUncheckedUpdateManyInput>;
    where?: Prisma.cart_itemsWhereInput;
    limit?: number;
};
export type cart_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where: Prisma.cart_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_itemsCreateInput, Prisma.cart_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cart_itemsUpdateInput, Prisma.cart_itemsUncheckedUpdateInput>;
};
export type cart_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where: Prisma.cart_itemsWhereUniqueInput;
};
export type cart_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
    limit?: number;
};
export type cart_items$cartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where?: Prisma.cartsWhereInput;
};
export type cart_items$product_variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
    where?: Prisma.product_variantsWhereInput;
};
export type cart_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
};
export {};
