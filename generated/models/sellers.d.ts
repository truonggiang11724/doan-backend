import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type sellersModel = runtime.Types.Result.DefaultSelection<Prisma.$sellersPayload>;
export type AggregateSellers = {
    _count: SellersCountAggregateOutputType | null;
    _avg: SellersAvgAggregateOutputType | null;
    _sum: SellersSumAggregateOutputType | null;
    _min: SellersMinAggregateOutputType | null;
    _max: SellersMaxAggregateOutputType | null;
};
export type SellersAvgAggregateOutputType = {
    user_id: number | null;
    rating: runtime.Decimal | null;
};
export type SellersSumAggregateOutputType = {
    user_id: bigint | null;
    rating: runtime.Decimal | null;
};
export type SellersMinAggregateOutputType = {
    user_id: bigint | null;
    shop_name: string | null;
    rating: runtime.Decimal | null;
    theme_description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SellersMaxAggregateOutputType = {
    user_id: bigint | null;
    shop_name: string | null;
    rating: runtime.Decimal | null;
    theme_description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SellersCountAggregateOutputType = {
    user_id: number;
    shop_name: number;
    rating: number;
    theme_description: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type SellersAvgAggregateInputType = {
    user_id?: true;
    rating?: true;
};
export type SellersSumAggregateInputType = {
    user_id?: true;
    rating?: true;
};
export type SellersMinAggregateInputType = {
    user_id?: true;
    shop_name?: true;
    rating?: true;
    theme_description?: true;
    created_at?: true;
    updated_at?: true;
};
export type SellersMaxAggregateInputType = {
    user_id?: true;
    shop_name?: true;
    rating?: true;
    theme_description?: true;
    created_at?: true;
    updated_at?: true;
};
export type SellersCountAggregateInputType = {
    user_id?: true;
    shop_name?: true;
    rating?: true;
    theme_description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type SellersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sellersWhereInput;
    orderBy?: Prisma.sellersOrderByWithRelationInput | Prisma.sellersOrderByWithRelationInput[];
    cursor?: Prisma.sellersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SellersCountAggregateInputType;
    _avg?: SellersAvgAggregateInputType;
    _sum?: SellersSumAggregateInputType;
    _min?: SellersMinAggregateInputType;
    _max?: SellersMaxAggregateInputType;
};
export type GetSellersAggregateType<T extends SellersAggregateArgs> = {
    [P in keyof T & keyof AggregateSellers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSellers[P]> : Prisma.GetScalarType<T[P], AggregateSellers[P]>;
};
export type sellersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sellersWhereInput;
    orderBy?: Prisma.sellersOrderByWithAggregationInput | Prisma.sellersOrderByWithAggregationInput[];
    by: Prisma.SellersScalarFieldEnum[] | Prisma.SellersScalarFieldEnum;
    having?: Prisma.sellersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SellersCountAggregateInputType | true;
    _avg?: SellersAvgAggregateInputType;
    _sum?: SellersSumAggregateInputType;
    _min?: SellersMinAggregateInputType;
    _max?: SellersMaxAggregateInputType;
};
export type SellersGroupByOutputType = {
    user_id: bigint;
    shop_name: string | null;
    rating: runtime.Decimal | null;
    theme_description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: SellersCountAggregateOutputType | null;
    _avg: SellersAvgAggregateOutputType | null;
    _sum: SellersSumAggregateOutputType | null;
    _min: SellersMinAggregateOutputType | null;
    _max: SellersMaxAggregateOutputType | null;
};
type GetSellersGroupByPayload<T extends sellersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SellersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SellersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SellersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SellersGroupByOutputType[P]>;
}>>;
export type sellersWhereInput = {
    AND?: Prisma.sellersWhereInput | Prisma.sellersWhereInput[];
    OR?: Prisma.sellersWhereInput[];
    NOT?: Prisma.sellersWhereInput | Prisma.sellersWhereInput[];
    user_id?: Prisma.BigIntFilter<"sellers"> | bigint | number;
    shop_name?: Prisma.StringNullableFilter<"sellers"> | string | null;
    rating?: Prisma.DecimalNullableFilter<"sellers"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.StringNullableFilter<"sellers"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"sellers"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"sellers"> | Date | string | null;
    orders?: Prisma.OrdersListRelationFilter;
    products?: Prisma.ProductsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    wallets?: Prisma.WalletsListRelationFilter;
};
export type sellersOrderByWithRelationInput = {
    user_id?: Prisma.SortOrder;
    shop_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    theme_description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByRelationAggregateInput;
    products?: Prisma.productsOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
    wallets?: Prisma.walletsOrderByRelationAggregateInput;
    _relevance?: Prisma.sellersOrderByRelevanceInput;
};
export type sellersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: bigint | number;
    AND?: Prisma.sellersWhereInput | Prisma.sellersWhereInput[];
    OR?: Prisma.sellersWhereInput[];
    NOT?: Prisma.sellersWhereInput | Prisma.sellersWhereInput[];
    shop_name?: Prisma.StringNullableFilter<"sellers"> | string | null;
    rating?: Prisma.DecimalNullableFilter<"sellers"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.StringNullableFilter<"sellers"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"sellers"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"sellers"> | Date | string | null;
    orders?: Prisma.OrdersListRelationFilter;
    products?: Prisma.ProductsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    wallets?: Prisma.WalletsListRelationFilter;
}, "user_id">;
export type sellersOrderByWithAggregationInput = {
    user_id?: Prisma.SortOrder;
    shop_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    theme_description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.sellersCountOrderByAggregateInput;
    _avg?: Prisma.sellersAvgOrderByAggregateInput;
    _max?: Prisma.sellersMaxOrderByAggregateInput;
    _min?: Prisma.sellersMinOrderByAggregateInput;
    _sum?: Prisma.sellersSumOrderByAggregateInput;
};
export type sellersScalarWhereWithAggregatesInput = {
    AND?: Prisma.sellersScalarWhereWithAggregatesInput | Prisma.sellersScalarWhereWithAggregatesInput[];
    OR?: Prisma.sellersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.sellersScalarWhereWithAggregatesInput | Prisma.sellersScalarWhereWithAggregatesInput[];
    user_id?: Prisma.BigIntWithAggregatesFilter<"sellers"> | bigint | number;
    shop_name?: Prisma.StringNullableWithAggregatesFilter<"sellers"> | string | null;
    rating?: Prisma.DecimalNullableWithAggregatesFilter<"sellers"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.StringNullableWithAggregatesFilter<"sellers"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"sellers"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"sellers"> | Date | string | null;
};
export type sellersCreateInput = {
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutSellersInput;
    products?: Prisma.productsCreateNestedManyWithoutSellersInput;
    users: Prisma.usersCreateNestedOneWithoutSellersInput;
    wallets?: Prisma.walletsCreateNestedManyWithoutSellersInput;
};
export type sellersUncheckedCreateInput = {
    user_id: bigint | number;
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutSellersInput;
    products?: Prisma.productsUncheckedCreateNestedManyWithoutSellersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedManyWithoutSellersInput;
};
export type sellersUpdateInput = {
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutSellersNestedInput;
    products?: Prisma.productsUpdateManyWithoutSellersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutSellersNestedInput;
    wallets?: Prisma.walletsUpdateManyWithoutSellersNestedInput;
};
export type sellersUncheckedUpdateInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutSellersNestedInput;
    products?: Prisma.productsUncheckedUpdateManyWithoutSellersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateManyWithoutSellersNestedInput;
};
export type sellersCreateManyInput = {
    user_id: bigint | number;
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type sellersUpdateManyMutationInput = {
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type sellersUncheckedUpdateManyInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SellersNullableScalarRelationFilter = {
    is?: Prisma.sellersWhereInput | null;
    isNot?: Prisma.sellersWhereInput | null;
};
export type sellersOrderByRelevanceInput = {
    fields: Prisma.sellersOrderByRelevanceFieldEnum | Prisma.sellersOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type sellersCountOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    shop_name?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    theme_description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type sellersAvgOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type sellersMaxOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    shop_name?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    theme_description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type sellersMinOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    shop_name?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    theme_description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type sellersSumOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type sellersCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.sellersCreateWithoutOrdersInput, Prisma.sellersUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.sellersCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.sellersWhereUniqueInput;
};
export type sellersUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.sellersCreateWithoutOrdersInput, Prisma.sellersUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.sellersCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.sellersUpsertWithoutOrdersInput;
    disconnect?: Prisma.sellersWhereInput | boolean;
    delete?: Prisma.sellersWhereInput | boolean;
    connect?: Prisma.sellersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.sellersUpdateToOneWithWhereWithoutOrdersInput, Prisma.sellersUpdateWithoutOrdersInput>, Prisma.sellersUncheckedUpdateWithoutOrdersInput>;
};
export type sellersCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.sellersCreateWithoutProductsInput, Prisma.sellersUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.sellersCreateOrConnectWithoutProductsInput;
    connect?: Prisma.sellersWhereUniqueInput;
};
export type sellersUpdateOneWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.sellersCreateWithoutProductsInput, Prisma.sellersUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.sellersCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.sellersUpsertWithoutProductsInput;
    disconnect?: Prisma.sellersWhereInput | boolean;
    delete?: Prisma.sellersWhereInput | boolean;
    connect?: Prisma.sellersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.sellersUpdateToOneWithWhereWithoutProductsInput, Prisma.sellersUpdateWithoutProductsInput>, Prisma.sellersUncheckedUpdateWithoutProductsInput>;
};
export type sellersCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.sellersCreateWithoutUsersInput, Prisma.sellersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.sellersCreateOrConnectWithoutUsersInput;
    connect?: Prisma.sellersWhereUniqueInput;
};
export type sellersUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.sellersCreateWithoutUsersInput, Prisma.sellersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.sellersCreateOrConnectWithoutUsersInput;
    connect?: Prisma.sellersWhereUniqueInput;
};
export type sellersUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.sellersCreateWithoutUsersInput, Prisma.sellersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.sellersCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.sellersUpsertWithoutUsersInput;
    disconnect?: Prisma.sellersWhereInput | boolean;
    delete?: Prisma.sellersWhereInput | boolean;
    connect?: Prisma.sellersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.sellersUpdateToOneWithWhereWithoutUsersInput, Prisma.sellersUpdateWithoutUsersInput>, Prisma.sellersUncheckedUpdateWithoutUsersInput>;
};
export type sellersUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.sellersCreateWithoutUsersInput, Prisma.sellersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.sellersCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.sellersUpsertWithoutUsersInput;
    disconnect?: Prisma.sellersWhereInput | boolean;
    delete?: Prisma.sellersWhereInput | boolean;
    connect?: Prisma.sellersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.sellersUpdateToOneWithWhereWithoutUsersInput, Prisma.sellersUpdateWithoutUsersInput>, Prisma.sellersUncheckedUpdateWithoutUsersInput>;
};
export type sellersCreateNestedOneWithoutWalletsInput = {
    create?: Prisma.XOR<Prisma.sellersCreateWithoutWalletsInput, Prisma.sellersUncheckedCreateWithoutWalletsInput>;
    connectOrCreate?: Prisma.sellersCreateOrConnectWithoutWalletsInput;
    connect?: Prisma.sellersWhereUniqueInput;
};
export type sellersUpdateOneWithoutWalletsNestedInput = {
    create?: Prisma.XOR<Prisma.sellersCreateWithoutWalletsInput, Prisma.sellersUncheckedCreateWithoutWalletsInput>;
    connectOrCreate?: Prisma.sellersCreateOrConnectWithoutWalletsInput;
    upsert?: Prisma.sellersUpsertWithoutWalletsInput;
    disconnect?: Prisma.sellersWhereInput | boolean;
    delete?: Prisma.sellersWhereInput | boolean;
    connect?: Prisma.sellersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.sellersUpdateToOneWithWhereWithoutWalletsInput, Prisma.sellersUpdateWithoutWalletsInput>, Prisma.sellersUncheckedUpdateWithoutWalletsInput>;
};
export type sellersCreateWithoutOrdersInput = {
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    products?: Prisma.productsCreateNestedManyWithoutSellersInput;
    users: Prisma.usersCreateNestedOneWithoutSellersInput;
    wallets?: Prisma.walletsCreateNestedManyWithoutSellersInput;
};
export type sellersUncheckedCreateWithoutOrdersInput = {
    user_id: bigint | number;
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    products?: Prisma.productsUncheckedCreateNestedManyWithoutSellersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedManyWithoutSellersInput;
};
export type sellersCreateOrConnectWithoutOrdersInput = {
    where: Prisma.sellersWhereUniqueInput;
    create: Prisma.XOR<Prisma.sellersCreateWithoutOrdersInput, Prisma.sellersUncheckedCreateWithoutOrdersInput>;
};
export type sellersUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.sellersUpdateWithoutOrdersInput, Prisma.sellersUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.sellersCreateWithoutOrdersInput, Prisma.sellersUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.sellersWhereInput;
};
export type sellersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.sellersWhereInput;
    data: Prisma.XOR<Prisma.sellersUpdateWithoutOrdersInput, Prisma.sellersUncheckedUpdateWithoutOrdersInput>;
};
export type sellersUpdateWithoutOrdersInput = {
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.productsUpdateManyWithoutSellersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutSellersNestedInput;
    wallets?: Prisma.walletsUpdateManyWithoutSellersNestedInput;
};
export type sellersUncheckedUpdateWithoutOrdersInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.productsUncheckedUpdateManyWithoutSellersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateManyWithoutSellersNestedInput;
};
export type sellersCreateWithoutProductsInput = {
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutSellersInput;
    users: Prisma.usersCreateNestedOneWithoutSellersInput;
    wallets?: Prisma.walletsCreateNestedManyWithoutSellersInput;
};
export type sellersUncheckedCreateWithoutProductsInput = {
    user_id: bigint | number;
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutSellersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedManyWithoutSellersInput;
};
export type sellersCreateOrConnectWithoutProductsInput = {
    where: Prisma.sellersWhereUniqueInput;
    create: Prisma.XOR<Prisma.sellersCreateWithoutProductsInput, Prisma.sellersUncheckedCreateWithoutProductsInput>;
};
export type sellersUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.sellersUpdateWithoutProductsInput, Prisma.sellersUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.sellersCreateWithoutProductsInput, Prisma.sellersUncheckedCreateWithoutProductsInput>;
    where?: Prisma.sellersWhereInput;
};
export type sellersUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.sellersWhereInput;
    data: Prisma.XOR<Prisma.sellersUpdateWithoutProductsInput, Prisma.sellersUncheckedUpdateWithoutProductsInput>;
};
export type sellersUpdateWithoutProductsInput = {
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutSellersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutSellersNestedInput;
    wallets?: Prisma.walletsUpdateManyWithoutSellersNestedInput;
};
export type sellersUncheckedUpdateWithoutProductsInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutSellersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateManyWithoutSellersNestedInput;
};
export type sellersCreateWithoutUsersInput = {
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutSellersInput;
    products?: Prisma.productsCreateNestedManyWithoutSellersInput;
    wallets?: Prisma.walletsCreateNestedManyWithoutSellersInput;
};
export type sellersUncheckedCreateWithoutUsersInput = {
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutSellersInput;
    products?: Prisma.productsUncheckedCreateNestedManyWithoutSellersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedManyWithoutSellersInput;
};
export type sellersCreateOrConnectWithoutUsersInput = {
    where: Prisma.sellersWhereUniqueInput;
    create: Prisma.XOR<Prisma.sellersCreateWithoutUsersInput, Prisma.sellersUncheckedCreateWithoutUsersInput>;
};
export type sellersUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.sellersUpdateWithoutUsersInput, Prisma.sellersUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.sellersCreateWithoutUsersInput, Prisma.sellersUncheckedCreateWithoutUsersInput>;
    where?: Prisma.sellersWhereInput;
};
export type sellersUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.sellersWhereInput;
    data: Prisma.XOR<Prisma.sellersUpdateWithoutUsersInput, Prisma.sellersUncheckedUpdateWithoutUsersInput>;
};
export type sellersUpdateWithoutUsersInput = {
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutSellersNestedInput;
    products?: Prisma.productsUpdateManyWithoutSellersNestedInput;
    wallets?: Prisma.walletsUpdateManyWithoutSellersNestedInput;
};
export type sellersUncheckedUpdateWithoutUsersInput = {
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutSellersNestedInput;
    products?: Prisma.productsUncheckedUpdateManyWithoutSellersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateManyWithoutSellersNestedInput;
};
export type sellersCreateWithoutWalletsInput = {
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutSellersInput;
    products?: Prisma.productsCreateNestedManyWithoutSellersInput;
    users: Prisma.usersCreateNestedOneWithoutSellersInput;
};
export type sellersUncheckedCreateWithoutWalletsInput = {
    user_id: bigint | number;
    shop_name?: string | null;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutSellersInput;
    products?: Prisma.productsUncheckedCreateNestedManyWithoutSellersInput;
};
export type sellersCreateOrConnectWithoutWalletsInput = {
    where: Prisma.sellersWhereUniqueInput;
    create: Prisma.XOR<Prisma.sellersCreateWithoutWalletsInput, Prisma.sellersUncheckedCreateWithoutWalletsInput>;
};
export type sellersUpsertWithoutWalletsInput = {
    update: Prisma.XOR<Prisma.sellersUpdateWithoutWalletsInput, Prisma.sellersUncheckedUpdateWithoutWalletsInput>;
    create: Prisma.XOR<Prisma.sellersCreateWithoutWalletsInput, Prisma.sellersUncheckedCreateWithoutWalletsInput>;
    where?: Prisma.sellersWhereInput;
};
export type sellersUpdateToOneWithWhereWithoutWalletsInput = {
    where?: Prisma.sellersWhereInput;
    data: Prisma.XOR<Prisma.sellersUpdateWithoutWalletsInput, Prisma.sellersUncheckedUpdateWithoutWalletsInput>;
};
export type sellersUpdateWithoutWalletsInput = {
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutSellersNestedInput;
    products?: Prisma.productsUpdateManyWithoutSellersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutSellersNestedInput;
};
export type sellersUncheckedUpdateWithoutWalletsInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    shop_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    theme_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutSellersNestedInput;
    products?: Prisma.productsUncheckedUpdateManyWithoutSellersNestedInput;
};
export type SellersCountOutputType = {
    orders: number;
    products: number;
    wallets: number;
};
export type SellersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | SellersCountOutputTypeCountOrdersArgs;
    products?: boolean | SellersCountOutputTypeCountProductsArgs;
    wallets?: boolean | SellersCountOutputTypeCountWalletsArgs;
};
export type SellersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellersCountOutputTypeSelect<ExtArgs> | null;
};
export type SellersCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type SellersCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
};
export type SellersCountOutputTypeCountWalletsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.walletsWhereInput;
};
export type sellersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    shop_name?: boolean;
    rating?: boolean;
    theme_description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    orders?: boolean | Prisma.sellers$ordersArgs<ExtArgs>;
    products?: boolean | Prisma.sellers$productsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    wallets?: boolean | Prisma.sellers$walletsArgs<ExtArgs>;
    _count?: boolean | Prisma.SellersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellers"]>;
export type sellersSelectScalar = {
    user_id?: boolean;
    shop_name?: boolean;
    rating?: boolean;
    theme_description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type sellersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"user_id" | "shop_name" | "rating" | "theme_description" | "created_at" | "updated_at", ExtArgs["result"]["sellers"]>;
export type sellersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.sellers$ordersArgs<ExtArgs>;
    products?: boolean | Prisma.sellers$productsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    wallets?: boolean | Prisma.sellers$walletsArgs<ExtArgs>;
    _count?: boolean | Prisma.SellersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $sellersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "sellers";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs>[];
        products: Prisma.$productsPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
        wallets: Prisma.$walletsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        user_id: bigint;
        shop_name: string | null;
        rating: runtime.Decimal | null;
        theme_description: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["sellers"]>;
    composites: {};
};
export type sellersGetPayload<S extends boolean | null | undefined | sellersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$sellersPayload, S>;
export type sellersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<sellersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SellersCountAggregateInputType | true;
};
export interface sellersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['sellers'];
        meta: {
            name: 'sellers';
        };
    };
    findUnique<T extends sellersFindUniqueArgs>(args: Prisma.SelectSubset<T, sellersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends sellersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, sellersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends sellersFindFirstArgs>(args?: Prisma.SelectSubset<T, sellersFindFirstArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends sellersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, sellersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends sellersFindManyArgs>(args?: Prisma.SelectSubset<T, sellersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends sellersCreateArgs>(args: Prisma.SelectSubset<T, sellersCreateArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends sellersCreateManyArgs>(args?: Prisma.SelectSubset<T, sellersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends sellersDeleteArgs>(args: Prisma.SelectSubset<T, sellersDeleteArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends sellersUpdateArgs>(args: Prisma.SelectSubset<T, sellersUpdateArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends sellersDeleteManyArgs>(args?: Prisma.SelectSubset<T, sellersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends sellersUpdateManyArgs>(args: Prisma.SelectSubset<T, sellersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends sellersUpsertArgs>(args: Prisma.SelectSubset<T, sellersUpsertArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends sellersCountArgs>(args?: Prisma.Subset<T, sellersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SellersCountAggregateOutputType> : number>;
    aggregate<T extends SellersAggregateArgs>(args: Prisma.Subset<T, SellersAggregateArgs>): Prisma.PrismaPromise<GetSellersAggregateType<T>>;
    groupBy<T extends sellersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: sellersGroupByArgs['orderBy'];
    } : {
        orderBy?: sellersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, sellersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: sellersFieldRefs;
}
export interface Prisma__sellersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.sellers$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.sellers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    products<T extends Prisma.sellers$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.sellers$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    wallets<T extends Prisma.sellers$walletsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.sellers$walletsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface sellersFieldRefs {
    readonly user_id: Prisma.FieldRef<"sellers", 'BigInt'>;
    readonly shop_name: Prisma.FieldRef<"sellers", 'String'>;
    readonly rating: Prisma.FieldRef<"sellers", 'Decimal'>;
    readonly theme_description: Prisma.FieldRef<"sellers", 'String'>;
    readonly created_at: Prisma.FieldRef<"sellers", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"sellers", 'DateTime'>;
}
export type sellersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where: Prisma.sellersWhereUniqueInput;
};
export type sellersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where: Prisma.sellersWhereUniqueInput;
};
export type sellersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where?: Prisma.sellersWhereInput;
    orderBy?: Prisma.sellersOrderByWithRelationInput | Prisma.sellersOrderByWithRelationInput[];
    cursor?: Prisma.sellersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellersScalarFieldEnum | Prisma.SellersScalarFieldEnum[];
};
export type sellersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where?: Prisma.sellersWhereInput;
    orderBy?: Prisma.sellersOrderByWithRelationInput | Prisma.sellersOrderByWithRelationInput[];
    cursor?: Prisma.sellersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellersScalarFieldEnum | Prisma.SellersScalarFieldEnum[];
};
export type sellersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where?: Prisma.sellersWhereInput;
    orderBy?: Prisma.sellersOrderByWithRelationInput | Prisma.sellersOrderByWithRelationInput[];
    cursor?: Prisma.sellersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellersScalarFieldEnum | Prisma.SellersScalarFieldEnum[];
};
export type sellersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.sellersCreateInput, Prisma.sellersUncheckedCreateInput>;
};
export type sellersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.sellersCreateManyInput | Prisma.sellersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type sellersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.sellersUpdateInput, Prisma.sellersUncheckedUpdateInput>;
    where: Prisma.sellersWhereUniqueInput;
};
export type sellersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.sellersUpdateManyMutationInput, Prisma.sellersUncheckedUpdateManyInput>;
    where?: Prisma.sellersWhereInput;
    limit?: number;
};
export type sellersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where: Prisma.sellersWhereUniqueInput;
    create: Prisma.XOR<Prisma.sellersCreateInput, Prisma.sellersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.sellersUpdateInput, Prisma.sellersUncheckedUpdateInput>;
};
export type sellersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where: Prisma.sellersWhereUniqueInput;
};
export type sellersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sellersWhereInput;
    limit?: number;
};
export type sellers$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type sellers$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type sellers$walletsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithRelationInput | Prisma.walletsOrderByWithRelationInput[];
    cursor?: Prisma.walletsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WalletsScalarFieldEnum | Prisma.WalletsScalarFieldEnum[];
};
export type sellersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
};
export {};
