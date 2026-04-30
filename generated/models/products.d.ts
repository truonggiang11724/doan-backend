import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type productsModel = runtime.Types.Result.DefaultSelection<Prisma.$productsPayload>;
export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
};
export type ProductsAvgAggregateOutputType = {
    product_id: number | null;
    seller_id: number | null;
    category_id: number | null;
};
export type ProductsSumAggregateOutputType = {
    product_id: bigint | null;
    seller_id: bigint | null;
    category_id: bigint | null;
};
export type ProductsMinAggregateOutputType = {
    product_id: bigint | null;
    seller_id: bigint | null;
    category_id: bigint | null;
    product_name: string | null;
    description: string | null;
    status: $Enums.products_status | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ProductsMaxAggregateOutputType = {
    product_id: bigint | null;
    seller_id: bigint | null;
    category_id: bigint | null;
    product_name: string | null;
    description: string | null;
    status: $Enums.products_status | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ProductsCountAggregateOutputType = {
    product_id: number;
    seller_id: number;
    category_id: number;
    product_name: number;
    description: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type ProductsAvgAggregateInputType = {
    product_id?: true;
    seller_id?: true;
    category_id?: true;
};
export type ProductsSumAggregateInputType = {
    product_id?: true;
    seller_id?: true;
    category_id?: true;
};
export type ProductsMinAggregateInputType = {
    product_id?: true;
    seller_id?: true;
    category_id?: true;
    product_name?: true;
    description?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type ProductsMaxAggregateInputType = {
    product_id?: true;
    seller_id?: true;
    category_id?: true;
    product_name?: true;
    description?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type ProductsCountAggregateInputType = {
    product_id?: true;
    seller_id?: true;
    category_id?: true;
    product_name?: true;
    description?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type ProductsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductsCountAggregateInputType;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
};
export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
    [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducts[P]> : Prisma.GetScalarType<T[P], AggregateProducts[P]>;
};
export type productsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithAggregationInput | Prisma.productsOrderByWithAggregationInput[];
    by: Prisma.ProductsScalarFieldEnum[] | Prisma.ProductsScalarFieldEnum;
    having?: Prisma.productsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductsCountAggregateInputType | true;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
};
export type ProductsGroupByOutputType = {
    product_id: bigint;
    seller_id: bigint | null;
    category_id: bigint | null;
    product_name: string | null;
    description: string | null;
    status: $Enums.products_status | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
};
type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductsGroupByOutputType[P]>;
}>>;
export type productsWhereInput = {
    AND?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    OR?: Prisma.productsWhereInput[];
    NOT?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    product_id?: Prisma.BigIntFilter<"products"> | bigint | number;
    seller_id?: Prisma.BigIntNullableFilter<"products"> | bigint | number | null;
    category_id?: Prisma.BigIntNullableFilter<"products"> | bigint | number | null;
    product_name?: Prisma.StringNullableFilter<"products"> | string | null;
    description?: Prisma.StringNullableFilter<"products"> | string | null;
    status?: Prisma.Enumproducts_statusNullableFilter<"products"> | $Enums.products_status | null;
    created_at?: Prisma.DateTimeNullableFilter<"products"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"products"> | Date | string | null;
    product_media?: Prisma.Product_mediaListRelationFilter;
    product_variants?: Prisma.Product_variantsListRelationFilter;
    sellers?: Prisma.XOR<Prisma.SellersNullableScalarRelationFilter, Prisma.sellersWhereInput> | null;
    categories?: Prisma.XOR<Prisma.CategoriesNullableScalarRelationFilter, Prisma.categoriesWhereInput> | null;
    reviews?: Prisma.ReviewsListRelationFilter;
};
export type productsOrderByWithRelationInput = {
    product_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    category_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_media?: Prisma.product_mediaOrderByRelationAggregateInput;
    product_variants?: Prisma.product_variantsOrderByRelationAggregateInput;
    sellers?: Prisma.sellersOrderByWithRelationInput;
    categories?: Prisma.categoriesOrderByWithRelationInput;
    reviews?: Prisma.reviewsOrderByRelationAggregateInput;
    _relevance?: Prisma.productsOrderByRelevanceInput;
};
export type productsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: bigint | number;
    AND?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    OR?: Prisma.productsWhereInput[];
    NOT?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    seller_id?: Prisma.BigIntNullableFilter<"products"> | bigint | number | null;
    category_id?: Prisma.BigIntNullableFilter<"products"> | bigint | number | null;
    product_name?: Prisma.StringNullableFilter<"products"> | string | null;
    description?: Prisma.StringNullableFilter<"products"> | string | null;
    status?: Prisma.Enumproducts_statusNullableFilter<"products"> | $Enums.products_status | null;
    created_at?: Prisma.DateTimeNullableFilter<"products"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"products"> | Date | string | null;
    product_media?: Prisma.Product_mediaListRelationFilter;
    product_variants?: Prisma.Product_variantsListRelationFilter;
    sellers?: Prisma.XOR<Prisma.SellersNullableScalarRelationFilter, Prisma.sellersWhereInput> | null;
    categories?: Prisma.XOR<Prisma.CategoriesNullableScalarRelationFilter, Prisma.categoriesWhereInput> | null;
    reviews?: Prisma.ReviewsListRelationFilter;
}, "product_id">;
export type productsOrderByWithAggregationInput = {
    product_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    category_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.productsCountOrderByAggregateInput;
    _avg?: Prisma.productsAvgOrderByAggregateInput;
    _max?: Prisma.productsMaxOrderByAggregateInput;
    _min?: Prisma.productsMinOrderByAggregateInput;
    _sum?: Prisma.productsSumOrderByAggregateInput;
};
export type productsScalarWhereWithAggregatesInput = {
    AND?: Prisma.productsScalarWhereWithAggregatesInput | Prisma.productsScalarWhereWithAggregatesInput[];
    OR?: Prisma.productsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.productsScalarWhereWithAggregatesInput | Prisma.productsScalarWhereWithAggregatesInput[];
    product_id?: Prisma.BigIntWithAggregatesFilter<"products"> | bigint | number;
    seller_id?: Prisma.BigIntNullableWithAggregatesFilter<"products"> | bigint | number | null;
    category_id?: Prisma.BigIntNullableWithAggregatesFilter<"products"> | bigint | number | null;
    product_name?: Prisma.StringNullableWithAggregatesFilter<"products"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"products"> | string | null;
    status?: Prisma.Enumproducts_statusNullableWithAggregatesFilter<"products"> | $Enums.products_status | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null;
};
export type productsCreateInput = {
    product_id?: bigint | number;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_media?: Prisma.product_mediaCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutProductsInput;
    categories?: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateInput = {
    product_id?: bigint | number;
    seller_id?: bigint | number | null;
    category_id?: bigint | number | null;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_media?: Prisma.product_mediaUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsUpdateInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_media?: Prisma.product_mediaUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    category_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_media?: Prisma.product_mediaUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateManyInput = {
    product_id?: bigint | number;
    seller_id?: bigint | number | null;
    category_id?: bigint | number | null;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type productsUpdateManyMutationInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type productsUncheckedUpdateManyInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    category_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductsListRelationFilter = {
    every?: Prisma.productsWhereInput;
    some?: Prisma.productsWhereInput;
    none?: Prisma.productsWhereInput;
};
export type productsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductsNullableScalarRelationFilter = {
    is?: Prisma.productsWhereInput | null;
    isNot?: Prisma.productsWhereInput | null;
};
export type productsOrderByRelevanceInput = {
    fields: Prisma.productsOrderByRelevanceFieldEnum | Prisma.productsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type productsCountOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type productsAvgOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type productsMaxOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type productsMinOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type productsSumOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
};
export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
};
export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    set?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    disconnect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    delete?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    update?: Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.productsUpdateManyWithWhereWithoutCategoriesInput | Prisma.productsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
};
export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    set?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    disconnect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    delete?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    update?: Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.productsUpdateManyWithWhereWithoutCategoriesInput | Prisma.productsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
};
export type productsCreateNestedOneWithoutProduct_mediaInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_mediaInput, Prisma.productsUncheckedCreateWithoutProduct_mediaInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_mediaInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneWithoutProduct_mediaNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_mediaInput, Prisma.productsUncheckedCreateWithoutProduct_mediaInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_mediaInput;
    upsert?: Prisma.productsUpsertWithoutProduct_mediaInput;
    disconnect?: Prisma.productsWhereInput | boolean;
    delete?: Prisma.productsWhereInput | boolean;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutProduct_mediaInput, Prisma.productsUpdateWithoutProduct_mediaInput>, Prisma.productsUncheckedUpdateWithoutProduct_mediaInput>;
};
export type productsCreateNestedOneWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_variantsInput, Prisma.productsUncheckedCreateWithoutProduct_variantsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_variantsInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_variantsInput, Prisma.productsUncheckedCreateWithoutProduct_variantsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_variantsInput;
    upsert?: Prisma.productsUpsertWithoutProduct_variantsInput;
    disconnect?: Prisma.productsWhereInput | boolean;
    delete?: Prisma.productsWhereInput | boolean;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutProduct_variantsInput, Prisma.productsUpdateWithoutProduct_variantsInput>, Prisma.productsUncheckedUpdateWithoutProduct_variantsInput>;
};
export type NullableEnumproducts_statusFieldUpdateOperationsInput = {
    set?: $Enums.products_status | null;
};
export type productsCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutReviewsInput, Prisma.productsUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutReviewsInput, Prisma.productsUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.productsUpsertWithoutReviewsInput;
    disconnect?: Prisma.productsWhereInput | boolean;
    delete?: Prisma.productsWhereInput | boolean;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutReviewsInput, Prisma.productsUpdateWithoutReviewsInput>, Prisma.productsUncheckedUpdateWithoutReviewsInput>;
};
export type productsCreateNestedManyWithoutSellersInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutSellersInput, Prisma.productsUncheckedCreateWithoutSellersInput> | Prisma.productsCreateWithoutSellersInput[] | Prisma.productsUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutSellersInput | Prisma.productsCreateOrConnectWithoutSellersInput[];
    createMany?: Prisma.productsCreateManySellersInputEnvelope;
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
};
export type productsUncheckedCreateNestedManyWithoutSellersInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutSellersInput, Prisma.productsUncheckedCreateWithoutSellersInput> | Prisma.productsCreateWithoutSellersInput[] | Prisma.productsUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutSellersInput | Prisma.productsCreateOrConnectWithoutSellersInput[];
    createMany?: Prisma.productsCreateManySellersInputEnvelope;
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
};
export type productsUpdateManyWithoutSellersNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutSellersInput, Prisma.productsUncheckedCreateWithoutSellersInput> | Prisma.productsCreateWithoutSellersInput[] | Prisma.productsUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutSellersInput | Prisma.productsCreateOrConnectWithoutSellersInput[];
    upsert?: Prisma.productsUpsertWithWhereUniqueWithoutSellersInput | Prisma.productsUpsertWithWhereUniqueWithoutSellersInput[];
    createMany?: Prisma.productsCreateManySellersInputEnvelope;
    set?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    disconnect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    delete?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    update?: Prisma.productsUpdateWithWhereUniqueWithoutSellersInput | Prisma.productsUpdateWithWhereUniqueWithoutSellersInput[];
    updateMany?: Prisma.productsUpdateManyWithWhereWithoutSellersInput | Prisma.productsUpdateManyWithWhereWithoutSellersInput[];
    deleteMany?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
};
export type productsUncheckedUpdateManyWithoutSellersNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutSellersInput, Prisma.productsUncheckedCreateWithoutSellersInput> | Prisma.productsCreateWithoutSellersInput[] | Prisma.productsUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutSellersInput | Prisma.productsCreateOrConnectWithoutSellersInput[];
    upsert?: Prisma.productsUpsertWithWhereUniqueWithoutSellersInput | Prisma.productsUpsertWithWhereUniqueWithoutSellersInput[];
    createMany?: Prisma.productsCreateManySellersInputEnvelope;
    set?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    disconnect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    delete?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    update?: Prisma.productsUpdateWithWhereUniqueWithoutSellersInput | Prisma.productsUpdateWithWhereUniqueWithoutSellersInput[];
    updateMany?: Prisma.productsUpdateManyWithWhereWithoutSellersInput | Prisma.productsUpdateManyWithWhereWithoutSellersInput[];
    deleteMany?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
};
export type productsCreateWithoutCategoriesInput = {
    product_id?: bigint | number;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_media?: Prisma.product_mediaCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutCategoriesInput = {
    product_id?: bigint | number;
    seller_id?: bigint | number | null;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_media?: Prisma.product_mediaUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutCategoriesInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput>;
};
export type productsCreateManyCategoriesInputEnvelope = {
    data: Prisma.productsCreateManyCategoriesInput | Prisma.productsCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
};
export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.productsWhereUniqueInput;
    update: Prisma.XOR<Prisma.productsUpdateWithoutCategoriesInput, Prisma.productsUncheckedUpdateWithoutCategoriesInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput>;
};
export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.productsWhereUniqueInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutCategoriesInput, Prisma.productsUncheckedUpdateWithoutCategoriesInput>;
};
export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: Prisma.productsScalarWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyWithoutCategoriesInput>;
};
export type productsScalarWhereInput = {
    AND?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
    OR?: Prisma.productsScalarWhereInput[];
    NOT?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
    product_id?: Prisma.BigIntFilter<"products"> | bigint | number;
    seller_id?: Prisma.BigIntNullableFilter<"products"> | bigint | number | null;
    category_id?: Prisma.BigIntNullableFilter<"products"> | bigint | number | null;
    product_name?: Prisma.StringNullableFilter<"products"> | string | null;
    description?: Prisma.StringNullableFilter<"products"> | string | null;
    status?: Prisma.Enumproducts_statusNullableFilter<"products"> | $Enums.products_status | null;
    created_at?: Prisma.DateTimeNullableFilter<"products"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"products"> | Date | string | null;
};
export type productsCreateWithoutProduct_mediaInput = {
    product_id?: bigint | number;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutProductsInput;
    categories?: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutProduct_mediaInput = {
    product_id?: bigint | number;
    seller_id?: bigint | number | null;
    category_id?: bigint | number | null;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutProduct_mediaInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_mediaInput, Prisma.productsUncheckedCreateWithoutProduct_mediaInput>;
};
export type productsUpsertWithoutProduct_mediaInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutProduct_mediaInput, Prisma.productsUncheckedUpdateWithoutProduct_mediaInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_mediaInput, Prisma.productsUncheckedCreateWithoutProduct_mediaInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutProduct_mediaInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutProduct_mediaInput, Prisma.productsUncheckedUpdateWithoutProduct_mediaInput>;
};
export type productsUpdateWithoutProduct_mediaInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutProduct_mediaInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    category_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateWithoutProduct_variantsInput = {
    product_id?: bigint | number;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_media?: Prisma.product_mediaCreateNestedManyWithoutProductsInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutProductsInput;
    categories?: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutProduct_variantsInput = {
    product_id?: bigint | number;
    seller_id?: bigint | number | null;
    category_id?: bigint | number | null;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_media?: Prisma.product_mediaUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutProduct_variantsInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_variantsInput, Prisma.productsUncheckedCreateWithoutProduct_variantsInput>;
};
export type productsUpsertWithoutProduct_variantsInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutProduct_variantsInput, Prisma.productsUncheckedUpdateWithoutProduct_variantsInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_variantsInput, Prisma.productsUncheckedCreateWithoutProduct_variantsInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutProduct_variantsInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutProduct_variantsInput, Prisma.productsUncheckedUpdateWithoutProduct_variantsInput>;
};
export type productsUpdateWithoutProduct_variantsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_media?: Prisma.product_mediaUpdateManyWithoutProductsNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutProduct_variantsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    category_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_media?: Prisma.product_mediaUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateWithoutReviewsInput = {
    product_id?: bigint | number;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_media?: Prisma.product_mediaCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutProductsInput;
    categories?: Prisma.categoriesCreateNestedOneWithoutProductsInput;
};
export type productsUncheckedCreateWithoutReviewsInput = {
    product_id?: bigint | number;
    seller_id?: bigint | number | null;
    category_id?: bigint | number | null;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_media?: Prisma.product_mediaUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutReviewsInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutReviewsInput, Prisma.productsUncheckedCreateWithoutReviewsInput>;
};
export type productsUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutReviewsInput, Prisma.productsUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutReviewsInput, Prisma.productsUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutReviewsInput, Prisma.productsUncheckedUpdateWithoutReviewsInput>;
};
export type productsUpdateWithoutReviewsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_media?: Prisma.product_mediaUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutReviewsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    category_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_media?: Prisma.product_mediaUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateWithoutSellersInput = {
    product_id?: bigint | number;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_media?: Prisma.product_mediaCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    categories?: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutSellersInput = {
    product_id?: bigint | number;
    category_id?: bigint | number | null;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    product_media?: Prisma.product_mediaUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutSellersInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutSellersInput, Prisma.productsUncheckedCreateWithoutSellersInput>;
};
export type productsCreateManySellersInputEnvelope = {
    data: Prisma.productsCreateManySellersInput | Prisma.productsCreateManySellersInput[];
    skipDuplicates?: boolean;
};
export type productsUpsertWithWhereUniqueWithoutSellersInput = {
    where: Prisma.productsWhereUniqueInput;
    update: Prisma.XOR<Prisma.productsUpdateWithoutSellersInput, Prisma.productsUncheckedUpdateWithoutSellersInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutSellersInput, Prisma.productsUncheckedCreateWithoutSellersInput>;
};
export type productsUpdateWithWhereUniqueWithoutSellersInput = {
    where: Prisma.productsWhereUniqueInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutSellersInput, Prisma.productsUncheckedUpdateWithoutSellersInput>;
};
export type productsUpdateManyWithWhereWithoutSellersInput = {
    where: Prisma.productsScalarWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyWithoutSellersInput>;
};
export type productsCreateManyCategoriesInput = {
    product_id?: bigint | number;
    seller_id?: bigint | number | null;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type productsUpdateWithoutCategoriesInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_media?: Prisma.product_mediaUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutCategoriesInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_media?: Prisma.product_mediaUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type productsCreateManySellersInput = {
    product_id?: bigint | number;
    category_id?: bigint | number | null;
    product_name?: string | null;
    description?: string | null;
    status?: $Enums.products_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type productsUpdateWithoutSellersInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_media?: Prisma.product_mediaUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutSellersInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product_media?: Prisma.product_mediaUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateManyWithoutSellersInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumproducts_statusFieldUpdateOperationsInput | $Enums.products_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductsCountOutputType = {
    product_media: number;
    product_variants: number;
    reviews: number;
};
export type ProductsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_media?: boolean | ProductsCountOutputTypeCountProduct_mediaArgs;
    product_variants?: boolean | ProductsCountOutputTypeCountProduct_variantsArgs;
    reviews?: boolean | ProductsCountOutputTypeCountReviewsArgs;
};
export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductsCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductsCountOutputTypeCountProduct_mediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_mediaWhereInput;
};
export type ProductsCountOutputTypeCountProduct_variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_variantsWhereInput;
};
export type ProductsCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
};
export type productsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    seller_id?: boolean;
    category_id?: boolean;
    product_name?: boolean;
    description?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    product_media?: boolean | Prisma.products$product_mediaArgs<ExtArgs>;
    product_variants?: boolean | Prisma.products$product_variantsArgs<ExtArgs>;
    sellers?: boolean | Prisma.products$sellersArgs<ExtArgs>;
    categories?: boolean | Prisma.products$categoriesArgs<ExtArgs>;
    reviews?: boolean | Prisma.products$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["products"]>;
export type productsSelectScalar = {
    product_id?: boolean;
    seller_id?: boolean;
    category_id?: boolean;
    product_name?: boolean;
    description?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type productsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"product_id" | "seller_id" | "category_id" | "product_name" | "description" | "status" | "created_at" | "updated_at", ExtArgs["result"]["products"]>;
export type productsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_media?: boolean | Prisma.products$product_mediaArgs<ExtArgs>;
    product_variants?: boolean | Prisma.products$product_variantsArgs<ExtArgs>;
    sellers?: boolean | Prisma.products$sellersArgs<ExtArgs>;
    categories?: boolean | Prisma.products$categoriesArgs<ExtArgs>;
    reviews?: boolean | Prisma.products$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $productsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "products";
    objects: {
        product_media: Prisma.$product_mediaPayload<ExtArgs>[];
        product_variants: Prisma.$product_variantsPayload<ExtArgs>[];
        sellers: Prisma.$sellersPayload<ExtArgs> | null;
        categories: Prisma.$categoriesPayload<ExtArgs> | null;
        reviews: Prisma.$reviewsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        product_id: bigint;
        seller_id: bigint | null;
        category_id: bigint | null;
        product_name: string | null;
        description: string | null;
        status: $Enums.products_status | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["products"]>;
    composites: {};
};
export type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$productsPayload, S>;
export type productsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductsCountAggregateInputType | true;
};
export interface productsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['products'];
        meta: {
            name: 'products';
        };
    };
    findUnique<T extends productsFindUniqueArgs>(args: Prisma.SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends productsFindFirstArgs>(args?: Prisma.SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends productsFindManyArgs>(args?: Prisma.SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends productsCreateArgs>(args: Prisma.SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends productsCreateManyArgs>(args?: Prisma.SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends productsDeleteArgs>(args: Prisma.SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends productsUpdateArgs>(args: Prisma.SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends productsDeleteManyArgs>(args?: Prisma.SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends productsUpdateManyArgs>(args: Prisma.SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends productsUpsertArgs>(args: Prisma.SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends productsCountArgs>(args?: Prisma.Subset<T, productsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductsCountAggregateOutputType> : number>;
    aggregate<T extends ProductsAggregateArgs>(args: Prisma.Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>;
    groupBy<T extends productsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: productsGroupByArgs['orderBy'];
    } : {
        orderBy?: productsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: productsFieldRefs;
}
export interface Prisma__productsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product_media<T extends Prisma.products$product_mediaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$product_mediaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    product_variants<T extends Prisma.products$product_variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$product_variantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sellers<T extends Prisma.products$sellersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$sellersArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    categories<T extends Prisma.products$categoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$categoriesArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reviews<T extends Prisma.products$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface productsFieldRefs {
    readonly product_id: Prisma.FieldRef<"products", 'BigInt'>;
    readonly seller_id: Prisma.FieldRef<"products", 'BigInt'>;
    readonly category_id: Prisma.FieldRef<"products", 'BigInt'>;
    readonly product_name: Prisma.FieldRef<"products", 'String'>;
    readonly description: Prisma.FieldRef<"products", 'String'>;
    readonly status: Prisma.FieldRef<"products", 'products_status'>;
    readonly created_at: Prisma.FieldRef<"products", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"products", 'DateTime'>;
}
export type productsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type productsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type productsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type productsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.productsCreateInput, Prisma.productsUncheckedCreateInput>;
};
export type productsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.productsCreateManyInput | Prisma.productsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type productsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productsUpdateInput, Prisma.productsUncheckedUpdateInput>;
    where: Prisma.productsWhereUniqueInput;
};
export type productsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyInput>;
    where?: Prisma.productsWhereInput;
    limit?: number;
};
export type productsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateInput, Prisma.productsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.productsUpdateInput, Prisma.productsUncheckedUpdateInput>;
};
export type productsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    limit?: number;
};
export type products$product_mediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_mediaSelect<ExtArgs> | null;
    omit?: Prisma.product_mediaOmit<ExtArgs> | null;
    include?: Prisma.product_mediaInclude<ExtArgs> | null;
    where?: Prisma.product_mediaWhereInput;
    orderBy?: Prisma.product_mediaOrderByWithRelationInput | Prisma.product_mediaOrderByWithRelationInput[];
    cursor?: Prisma.product_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_mediaScalarFieldEnum | Prisma.Product_mediaScalarFieldEnum[];
};
export type products$product_variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
    where?: Prisma.product_variantsWhereInput;
    orderBy?: Prisma.product_variantsOrderByWithRelationInput | Prisma.product_variantsOrderByWithRelationInput[];
    cursor?: Prisma.product_variantsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_variantsScalarFieldEnum | Prisma.Product_variantsScalarFieldEnum[];
};
export type products$sellersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where?: Prisma.sellersWhereInput;
};
export type products$categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
};
export type products$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type productsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
};
export {};
