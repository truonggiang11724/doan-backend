import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type reviewsModel = runtime.Types.Result.DefaultSelection<Prisma.$reviewsPayload>;
export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null;
    _avg: ReviewsAvgAggregateOutputType | null;
    _sum: ReviewsSumAggregateOutputType | null;
    _min: ReviewsMinAggregateOutputType | null;
    _max: ReviewsMaxAggregateOutputType | null;
};
export type ReviewsAvgAggregateOutputType = {
    review_id: number | null;
    customer_id: number | null;
    product_id: number | null;
    order_item_id: number | null;
    rating: number | null;
};
export type ReviewsSumAggregateOutputType = {
    review_id: bigint | null;
    customer_id: bigint | null;
    product_id: bigint | null;
    order_item_id: bigint | null;
    rating: number | null;
};
export type ReviewsMinAggregateOutputType = {
    review_id: bigint | null;
    customer_id: bigint | null;
    product_id: bigint | null;
    order_item_id: bigint | null;
    rating: number | null;
    content: string | null;
    media_url: string | null;
    created_at: Date | null;
};
export type ReviewsMaxAggregateOutputType = {
    review_id: bigint | null;
    customer_id: bigint | null;
    product_id: bigint | null;
    order_item_id: bigint | null;
    rating: number | null;
    content: string | null;
    media_url: string | null;
    created_at: Date | null;
};
export type ReviewsCountAggregateOutputType = {
    review_id: number;
    customer_id: number;
    product_id: number;
    order_item_id: number;
    rating: number;
    content: number;
    media_url: number;
    created_at: number;
    _all: number;
};
export type ReviewsAvgAggregateInputType = {
    review_id?: true;
    customer_id?: true;
    product_id?: true;
    order_item_id?: true;
    rating?: true;
};
export type ReviewsSumAggregateInputType = {
    review_id?: true;
    customer_id?: true;
    product_id?: true;
    order_item_id?: true;
    rating?: true;
};
export type ReviewsMinAggregateInputType = {
    review_id?: true;
    customer_id?: true;
    product_id?: true;
    order_item_id?: true;
    rating?: true;
    content?: true;
    media_url?: true;
    created_at?: true;
};
export type ReviewsMaxAggregateInputType = {
    review_id?: true;
    customer_id?: true;
    product_id?: true;
    order_item_id?: true;
    rating?: true;
    content?: true;
    media_url?: true;
    created_at?: true;
};
export type ReviewsCountAggregateInputType = {
    review_id?: true;
    customer_id?: true;
    product_id?: true;
    order_item_id?: true;
    rating?: true;
    content?: true;
    media_url?: true;
    created_at?: true;
    _all?: true;
};
export type ReviewsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithRelationInput | Prisma.reviewsOrderByWithRelationInput[];
    cursor?: Prisma.reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReviewsCountAggregateInputType;
    _avg?: ReviewsAvgAggregateInputType;
    _sum?: ReviewsSumAggregateInputType;
    _min?: ReviewsMinAggregateInputType;
    _max?: ReviewsMaxAggregateInputType;
};
export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
    [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReviews[P]> : Prisma.GetScalarType<T[P], AggregateReviews[P]>;
};
export type reviewsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithAggregationInput | Prisma.reviewsOrderByWithAggregationInput[];
    by: Prisma.ReviewsScalarFieldEnum[] | Prisma.ReviewsScalarFieldEnum;
    having?: Prisma.reviewsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewsCountAggregateInputType | true;
    _avg?: ReviewsAvgAggregateInputType;
    _sum?: ReviewsSumAggregateInputType;
    _min?: ReviewsMinAggregateInputType;
    _max?: ReviewsMaxAggregateInputType;
};
export type ReviewsGroupByOutputType = {
    review_id: bigint;
    customer_id: bigint | null;
    product_id: bigint | null;
    order_item_id: bigint | null;
    rating: number | null;
    content: string | null;
    media_url: string | null;
    created_at: Date | null;
    _count: ReviewsCountAggregateOutputType | null;
    _avg: ReviewsAvgAggregateOutputType | null;
    _sum: ReviewsSumAggregateOutputType | null;
    _min: ReviewsMinAggregateOutputType | null;
    _max: ReviewsMaxAggregateOutputType | null;
};
type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReviewsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReviewsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReviewsGroupByOutputType[P]>;
}>>;
export type reviewsWhereInput = {
    AND?: Prisma.reviewsWhereInput | Prisma.reviewsWhereInput[];
    OR?: Prisma.reviewsWhereInput[];
    NOT?: Prisma.reviewsWhereInput | Prisma.reviewsWhereInput[];
    review_id?: Prisma.BigIntFilter<"reviews"> | bigint | number;
    customer_id?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    product_id?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    order_item_id?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    rating?: Prisma.IntNullableFilter<"reviews"> | number | null;
    content?: Prisma.StringNullableFilter<"reviews"> | string | null;
    media_url?: Prisma.StringNullableFilter<"reviews"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    review_media?: Prisma.Review_mediaListRelationFilter;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    products?: Prisma.XOR<Prisma.ProductsNullableScalarRelationFilter, Prisma.productsWhereInput> | null;
    order_items?: Prisma.XOR<Prisma.Order_itemsNullableScalarRelationFilter, Prisma.order_itemsWhereInput> | null;
};
export type reviewsOrderByWithRelationInput = {
    review_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    review_media?: Prisma.review_mediaOrderByRelationAggregateInput;
    customers?: Prisma.customersOrderByWithRelationInput;
    products?: Prisma.productsOrderByWithRelationInput;
    order_items?: Prisma.order_itemsOrderByWithRelationInput;
    _relevance?: Prisma.reviewsOrderByRelevanceInput;
};
export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    review_id?: bigint | number;
    AND?: Prisma.reviewsWhereInput | Prisma.reviewsWhereInput[];
    OR?: Prisma.reviewsWhereInput[];
    NOT?: Prisma.reviewsWhereInput | Prisma.reviewsWhereInput[];
    customer_id?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    product_id?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    order_item_id?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    rating?: Prisma.IntNullableFilter<"reviews"> | number | null;
    content?: Prisma.StringNullableFilter<"reviews"> | string | null;
    media_url?: Prisma.StringNullableFilter<"reviews"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
    review_media?: Prisma.Review_mediaListRelationFilter;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    products?: Prisma.XOR<Prisma.ProductsNullableScalarRelationFilter, Prisma.productsWhereInput> | null;
    order_items?: Prisma.XOR<Prisma.Order_itemsNullableScalarRelationFilter, Prisma.order_itemsWhereInput> | null;
}, "review_id">;
export type reviewsOrderByWithAggregationInput = {
    review_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.reviewsCountOrderByAggregateInput;
    _avg?: Prisma.reviewsAvgOrderByAggregateInput;
    _max?: Prisma.reviewsMaxOrderByAggregateInput;
    _min?: Prisma.reviewsMinOrderByAggregateInput;
    _sum?: Prisma.reviewsSumOrderByAggregateInput;
};
export type reviewsScalarWhereWithAggregatesInput = {
    AND?: Prisma.reviewsScalarWhereWithAggregatesInput | Prisma.reviewsScalarWhereWithAggregatesInput[];
    OR?: Prisma.reviewsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.reviewsScalarWhereWithAggregatesInput | Prisma.reviewsScalarWhereWithAggregatesInput[];
    review_id?: Prisma.BigIntWithAggregatesFilter<"reviews"> | bigint | number;
    customer_id?: Prisma.BigIntNullableWithAggregatesFilter<"reviews"> | bigint | number | null;
    product_id?: Prisma.BigIntNullableWithAggregatesFilter<"reviews"> | bigint | number | null;
    order_item_id?: Prisma.BigIntNullableWithAggregatesFilter<"reviews"> | bigint | number | null;
    rating?: Prisma.IntNullableWithAggregatesFilter<"reviews"> | number | null;
    content?: Prisma.StringNullableWithAggregatesFilter<"reviews"> | string | null;
    media_url?: Prisma.StringNullableWithAggregatesFilter<"reviews"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null;
};
export type reviewsCreateInput = {
    review_id?: bigint | number;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
    review_media?: Prisma.review_mediaCreateNestedManyWithoutReviewsInput;
    customers?: Prisma.customersCreateNestedOneWithoutReviewsInput;
    products?: Prisma.productsCreateNestedOneWithoutReviewsInput;
    order_items?: Prisma.order_itemsCreateNestedOneWithoutReviewsInput;
};
export type reviewsUncheckedCreateInput = {
    review_id?: bigint | number;
    customer_id?: bigint | number | null;
    product_id?: bigint | number | null;
    order_item_id?: bigint | number | null;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
    review_media?: Prisma.review_mediaUncheckedCreateNestedManyWithoutReviewsInput;
};
export type reviewsUpdateInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    review_media?: Prisma.review_mediaUpdateManyWithoutReviewsNestedInput;
    customers?: Prisma.customersUpdateOneWithoutReviewsNestedInput;
    products?: Prisma.productsUpdateOneWithoutReviewsNestedInput;
    order_items?: Prisma.order_itemsUpdateOneWithoutReviewsNestedInput;
};
export type reviewsUncheckedUpdateInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_item_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    review_media?: Prisma.review_mediaUncheckedUpdateManyWithoutReviewsNestedInput;
};
export type reviewsCreateManyInput = {
    review_id?: bigint | number;
    customer_id?: bigint | number | null;
    product_id?: bigint | number | null;
    order_item_id?: bigint | number | null;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
};
export type reviewsUpdateManyMutationInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type reviewsUncheckedUpdateManyInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_item_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReviewsListRelationFilter = {
    every?: Prisma.reviewsWhereInput;
    some?: Prisma.reviewsWhereInput;
    none?: Prisma.reviewsWhereInput;
};
export type reviewsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReviewsScalarRelationFilter = {
    is?: Prisma.reviewsWhereInput;
    isNot?: Prisma.reviewsWhereInput;
};
export type reviewsOrderByRelevanceInput = {
    fields: Prisma.reviewsOrderByRelevanceFieldEnum | Prisma.reviewsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type reviewsCountOrderByAggregateInput = {
    review_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type reviewsAvgOrderByAggregateInput = {
    review_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type reviewsMaxOrderByAggregateInput = {
    review_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type reviewsMinOrderByAggregateInput = {
    review_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type reviewsSumOrderByAggregateInput = {
    review_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type reviewsCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutCustomersInput, Prisma.reviewsUncheckedCreateWithoutCustomersInput> | Prisma.reviewsCreateWithoutCustomersInput[] | Prisma.reviewsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutCustomersInput | Prisma.reviewsCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.reviewsCreateManyCustomersInputEnvelope;
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
};
export type reviewsUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutCustomersInput, Prisma.reviewsUncheckedCreateWithoutCustomersInput> | Prisma.reviewsCreateWithoutCustomersInput[] | Prisma.reviewsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutCustomersInput | Prisma.reviewsCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.reviewsCreateManyCustomersInputEnvelope;
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
};
export type reviewsUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutCustomersInput, Prisma.reviewsUncheckedCreateWithoutCustomersInput> | Prisma.reviewsCreateWithoutCustomersInput[] | Prisma.reviewsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutCustomersInput | Prisma.reviewsCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.reviewsUpsertWithWhereUniqueWithoutCustomersInput | Prisma.reviewsUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.reviewsCreateManyCustomersInputEnvelope;
    set?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    disconnect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    delete?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    update?: Prisma.reviewsUpdateWithWhereUniqueWithoutCustomersInput | Prisma.reviewsUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.reviewsUpdateManyWithWhereWithoutCustomersInput | Prisma.reviewsUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
};
export type reviewsUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutCustomersInput, Prisma.reviewsUncheckedCreateWithoutCustomersInput> | Prisma.reviewsCreateWithoutCustomersInput[] | Prisma.reviewsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutCustomersInput | Prisma.reviewsCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.reviewsUpsertWithWhereUniqueWithoutCustomersInput | Prisma.reviewsUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.reviewsCreateManyCustomersInputEnvelope;
    set?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    disconnect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    delete?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    update?: Prisma.reviewsUpdateWithWhereUniqueWithoutCustomersInput | Prisma.reviewsUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.reviewsUpdateManyWithWhereWithoutCustomersInput | Prisma.reviewsUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
};
export type reviewsCreateNestedManyWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutOrder_itemsInput, Prisma.reviewsUncheckedCreateWithoutOrder_itemsInput> | Prisma.reviewsCreateWithoutOrder_itemsInput[] | Prisma.reviewsUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutOrder_itemsInput | Prisma.reviewsCreateOrConnectWithoutOrder_itemsInput[];
    createMany?: Prisma.reviewsCreateManyOrder_itemsInputEnvelope;
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
};
export type reviewsUncheckedCreateNestedManyWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutOrder_itemsInput, Prisma.reviewsUncheckedCreateWithoutOrder_itemsInput> | Prisma.reviewsCreateWithoutOrder_itemsInput[] | Prisma.reviewsUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutOrder_itemsInput | Prisma.reviewsCreateOrConnectWithoutOrder_itemsInput[];
    createMany?: Prisma.reviewsCreateManyOrder_itemsInputEnvelope;
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
};
export type reviewsUpdateManyWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutOrder_itemsInput, Prisma.reviewsUncheckedCreateWithoutOrder_itemsInput> | Prisma.reviewsCreateWithoutOrder_itemsInput[] | Prisma.reviewsUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutOrder_itemsInput | Prisma.reviewsCreateOrConnectWithoutOrder_itemsInput[];
    upsert?: Prisma.reviewsUpsertWithWhereUniqueWithoutOrder_itemsInput | Prisma.reviewsUpsertWithWhereUniqueWithoutOrder_itemsInput[];
    createMany?: Prisma.reviewsCreateManyOrder_itemsInputEnvelope;
    set?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    disconnect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    delete?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    update?: Prisma.reviewsUpdateWithWhereUniqueWithoutOrder_itemsInput | Prisma.reviewsUpdateWithWhereUniqueWithoutOrder_itemsInput[];
    updateMany?: Prisma.reviewsUpdateManyWithWhereWithoutOrder_itemsInput | Prisma.reviewsUpdateManyWithWhereWithoutOrder_itemsInput[];
    deleteMany?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
};
export type reviewsUncheckedUpdateManyWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutOrder_itemsInput, Prisma.reviewsUncheckedCreateWithoutOrder_itemsInput> | Prisma.reviewsCreateWithoutOrder_itemsInput[] | Prisma.reviewsUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutOrder_itemsInput | Prisma.reviewsCreateOrConnectWithoutOrder_itemsInput[];
    upsert?: Prisma.reviewsUpsertWithWhereUniqueWithoutOrder_itemsInput | Prisma.reviewsUpsertWithWhereUniqueWithoutOrder_itemsInput[];
    createMany?: Prisma.reviewsCreateManyOrder_itemsInputEnvelope;
    set?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    disconnect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    delete?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    update?: Prisma.reviewsUpdateWithWhereUniqueWithoutOrder_itemsInput | Prisma.reviewsUpdateWithWhereUniqueWithoutOrder_itemsInput[];
    updateMany?: Prisma.reviewsUpdateManyWithWhereWithoutOrder_itemsInput | Prisma.reviewsUpdateManyWithWhereWithoutOrder_itemsInput[];
    deleteMany?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
};
export type reviewsCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutProductsInput, Prisma.reviewsUncheckedCreateWithoutProductsInput> | Prisma.reviewsCreateWithoutProductsInput[] | Prisma.reviewsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutProductsInput | Prisma.reviewsCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.reviewsCreateManyProductsInputEnvelope;
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
};
export type reviewsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutProductsInput, Prisma.reviewsUncheckedCreateWithoutProductsInput> | Prisma.reviewsCreateWithoutProductsInput[] | Prisma.reviewsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutProductsInput | Prisma.reviewsCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.reviewsCreateManyProductsInputEnvelope;
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
};
export type reviewsUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutProductsInput, Prisma.reviewsUncheckedCreateWithoutProductsInput> | Prisma.reviewsCreateWithoutProductsInput[] | Prisma.reviewsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutProductsInput | Prisma.reviewsCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.reviewsUpsertWithWhereUniqueWithoutProductsInput | Prisma.reviewsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.reviewsCreateManyProductsInputEnvelope;
    set?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    disconnect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    delete?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    update?: Prisma.reviewsUpdateWithWhereUniqueWithoutProductsInput | Prisma.reviewsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.reviewsUpdateManyWithWhereWithoutProductsInput | Prisma.reviewsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
};
export type reviewsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutProductsInput, Prisma.reviewsUncheckedCreateWithoutProductsInput> | Prisma.reviewsCreateWithoutProductsInput[] | Prisma.reviewsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutProductsInput | Prisma.reviewsCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.reviewsUpsertWithWhereUniqueWithoutProductsInput | Prisma.reviewsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.reviewsCreateManyProductsInputEnvelope;
    set?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    disconnect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    delete?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    connect?: Prisma.reviewsWhereUniqueInput | Prisma.reviewsWhereUniqueInput[];
    update?: Prisma.reviewsUpdateWithWhereUniqueWithoutProductsInput | Prisma.reviewsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.reviewsUpdateManyWithWhereWithoutProductsInput | Prisma.reviewsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
};
export type reviewsCreateNestedOneWithoutReview_mediaInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutReview_mediaInput, Prisma.reviewsUncheckedCreateWithoutReview_mediaInput>;
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutReview_mediaInput;
    connect?: Prisma.reviewsWhereUniqueInput;
};
export type reviewsUpdateOneRequiredWithoutReview_mediaNestedInput = {
    create?: Prisma.XOR<Prisma.reviewsCreateWithoutReview_mediaInput, Prisma.reviewsUncheckedCreateWithoutReview_mediaInput>;
    connectOrCreate?: Prisma.reviewsCreateOrConnectWithoutReview_mediaInput;
    upsert?: Prisma.reviewsUpsertWithoutReview_mediaInput;
    connect?: Prisma.reviewsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.reviewsUpdateToOneWithWhereWithoutReview_mediaInput, Prisma.reviewsUpdateWithoutReview_mediaInput>, Prisma.reviewsUncheckedUpdateWithoutReview_mediaInput>;
};
export type reviewsCreateWithoutCustomersInput = {
    review_id?: bigint | number;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
    review_media?: Prisma.review_mediaCreateNestedManyWithoutReviewsInput;
    products?: Prisma.productsCreateNestedOneWithoutReviewsInput;
    order_items?: Prisma.order_itemsCreateNestedOneWithoutReviewsInput;
};
export type reviewsUncheckedCreateWithoutCustomersInput = {
    review_id?: bigint | number;
    product_id?: bigint | number | null;
    order_item_id?: bigint | number | null;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
    review_media?: Prisma.review_mediaUncheckedCreateNestedManyWithoutReviewsInput;
};
export type reviewsCreateOrConnectWithoutCustomersInput = {
    where: Prisma.reviewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.reviewsCreateWithoutCustomersInput, Prisma.reviewsUncheckedCreateWithoutCustomersInput>;
};
export type reviewsCreateManyCustomersInputEnvelope = {
    data: Prisma.reviewsCreateManyCustomersInput | Prisma.reviewsCreateManyCustomersInput[];
    skipDuplicates?: boolean;
};
export type reviewsUpsertWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.reviewsWhereUniqueInput;
    update: Prisma.XOR<Prisma.reviewsUpdateWithoutCustomersInput, Prisma.reviewsUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.reviewsCreateWithoutCustomersInput, Prisma.reviewsUncheckedCreateWithoutCustomersInput>;
};
export type reviewsUpdateWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.reviewsWhereUniqueInput;
    data: Prisma.XOR<Prisma.reviewsUpdateWithoutCustomersInput, Prisma.reviewsUncheckedUpdateWithoutCustomersInput>;
};
export type reviewsUpdateManyWithWhereWithoutCustomersInput = {
    where: Prisma.reviewsScalarWhereInput;
    data: Prisma.XOR<Prisma.reviewsUpdateManyMutationInput, Prisma.reviewsUncheckedUpdateManyWithoutCustomersInput>;
};
export type reviewsScalarWhereInput = {
    AND?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
    OR?: Prisma.reviewsScalarWhereInput[];
    NOT?: Prisma.reviewsScalarWhereInput | Prisma.reviewsScalarWhereInput[];
    review_id?: Prisma.BigIntFilter<"reviews"> | bigint | number;
    customer_id?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    product_id?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    order_item_id?: Prisma.BigIntNullableFilter<"reviews"> | bigint | number | null;
    rating?: Prisma.IntNullableFilter<"reviews"> | number | null;
    content?: Prisma.StringNullableFilter<"reviews"> | string | null;
    media_url?: Prisma.StringNullableFilter<"reviews"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"reviews"> | Date | string | null;
};
export type reviewsCreateWithoutOrder_itemsInput = {
    review_id?: bigint | number;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
    review_media?: Prisma.review_mediaCreateNestedManyWithoutReviewsInput;
    customers?: Prisma.customersCreateNestedOneWithoutReviewsInput;
    products?: Prisma.productsCreateNestedOneWithoutReviewsInput;
};
export type reviewsUncheckedCreateWithoutOrder_itemsInput = {
    review_id?: bigint | number;
    customer_id?: bigint | number | null;
    product_id?: bigint | number | null;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
    review_media?: Prisma.review_mediaUncheckedCreateNestedManyWithoutReviewsInput;
};
export type reviewsCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.reviewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.reviewsCreateWithoutOrder_itemsInput, Prisma.reviewsUncheckedCreateWithoutOrder_itemsInput>;
};
export type reviewsCreateManyOrder_itemsInputEnvelope = {
    data: Prisma.reviewsCreateManyOrder_itemsInput | Prisma.reviewsCreateManyOrder_itemsInput[];
    skipDuplicates?: boolean;
};
export type reviewsUpsertWithWhereUniqueWithoutOrder_itemsInput = {
    where: Prisma.reviewsWhereUniqueInput;
    update: Prisma.XOR<Prisma.reviewsUpdateWithoutOrder_itemsInput, Prisma.reviewsUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.reviewsCreateWithoutOrder_itemsInput, Prisma.reviewsUncheckedCreateWithoutOrder_itemsInput>;
};
export type reviewsUpdateWithWhereUniqueWithoutOrder_itemsInput = {
    where: Prisma.reviewsWhereUniqueInput;
    data: Prisma.XOR<Prisma.reviewsUpdateWithoutOrder_itemsInput, Prisma.reviewsUncheckedUpdateWithoutOrder_itemsInput>;
};
export type reviewsUpdateManyWithWhereWithoutOrder_itemsInput = {
    where: Prisma.reviewsScalarWhereInput;
    data: Prisma.XOR<Prisma.reviewsUpdateManyMutationInput, Prisma.reviewsUncheckedUpdateManyWithoutOrder_itemsInput>;
};
export type reviewsCreateWithoutProductsInput = {
    review_id?: bigint | number;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
    review_media?: Prisma.review_mediaCreateNestedManyWithoutReviewsInput;
    customers?: Prisma.customersCreateNestedOneWithoutReviewsInput;
    order_items?: Prisma.order_itemsCreateNestedOneWithoutReviewsInput;
};
export type reviewsUncheckedCreateWithoutProductsInput = {
    review_id?: bigint | number;
    customer_id?: bigint | number | null;
    order_item_id?: bigint | number | null;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
    review_media?: Prisma.review_mediaUncheckedCreateNestedManyWithoutReviewsInput;
};
export type reviewsCreateOrConnectWithoutProductsInput = {
    where: Prisma.reviewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.reviewsCreateWithoutProductsInput, Prisma.reviewsUncheckedCreateWithoutProductsInput>;
};
export type reviewsCreateManyProductsInputEnvelope = {
    data: Prisma.reviewsCreateManyProductsInput | Prisma.reviewsCreateManyProductsInput[];
    skipDuplicates?: boolean;
};
export type reviewsUpsertWithWhereUniqueWithoutProductsInput = {
    where: Prisma.reviewsWhereUniqueInput;
    update: Prisma.XOR<Prisma.reviewsUpdateWithoutProductsInput, Prisma.reviewsUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.reviewsCreateWithoutProductsInput, Prisma.reviewsUncheckedCreateWithoutProductsInput>;
};
export type reviewsUpdateWithWhereUniqueWithoutProductsInput = {
    where: Prisma.reviewsWhereUniqueInput;
    data: Prisma.XOR<Prisma.reviewsUpdateWithoutProductsInput, Prisma.reviewsUncheckedUpdateWithoutProductsInput>;
};
export type reviewsUpdateManyWithWhereWithoutProductsInput = {
    where: Prisma.reviewsScalarWhereInput;
    data: Prisma.XOR<Prisma.reviewsUpdateManyMutationInput, Prisma.reviewsUncheckedUpdateManyWithoutProductsInput>;
};
export type reviewsCreateWithoutReview_mediaInput = {
    review_id?: bigint | number;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
    customers?: Prisma.customersCreateNestedOneWithoutReviewsInput;
    products?: Prisma.productsCreateNestedOneWithoutReviewsInput;
    order_items?: Prisma.order_itemsCreateNestedOneWithoutReviewsInput;
};
export type reviewsUncheckedCreateWithoutReview_mediaInput = {
    review_id?: bigint | number;
    customer_id?: bigint | number | null;
    product_id?: bigint | number | null;
    order_item_id?: bigint | number | null;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
};
export type reviewsCreateOrConnectWithoutReview_mediaInput = {
    where: Prisma.reviewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.reviewsCreateWithoutReview_mediaInput, Prisma.reviewsUncheckedCreateWithoutReview_mediaInput>;
};
export type reviewsUpsertWithoutReview_mediaInput = {
    update: Prisma.XOR<Prisma.reviewsUpdateWithoutReview_mediaInput, Prisma.reviewsUncheckedUpdateWithoutReview_mediaInput>;
    create: Prisma.XOR<Prisma.reviewsCreateWithoutReview_mediaInput, Prisma.reviewsUncheckedCreateWithoutReview_mediaInput>;
    where?: Prisma.reviewsWhereInput;
};
export type reviewsUpdateToOneWithWhereWithoutReview_mediaInput = {
    where?: Prisma.reviewsWhereInput;
    data: Prisma.XOR<Prisma.reviewsUpdateWithoutReview_mediaInput, Prisma.reviewsUncheckedUpdateWithoutReview_mediaInput>;
};
export type reviewsUpdateWithoutReview_mediaInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUpdateOneWithoutReviewsNestedInput;
    products?: Prisma.productsUpdateOneWithoutReviewsNestedInput;
    order_items?: Prisma.order_itemsUpdateOneWithoutReviewsNestedInput;
};
export type reviewsUncheckedUpdateWithoutReview_mediaInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_item_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type reviewsCreateManyCustomersInput = {
    review_id?: bigint | number;
    product_id?: bigint | number | null;
    order_item_id?: bigint | number | null;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
};
export type reviewsUpdateWithoutCustomersInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    review_media?: Prisma.review_mediaUpdateManyWithoutReviewsNestedInput;
    products?: Prisma.productsUpdateOneWithoutReviewsNestedInput;
    order_items?: Prisma.order_itemsUpdateOneWithoutReviewsNestedInput;
};
export type reviewsUncheckedUpdateWithoutCustomersInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_item_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    review_media?: Prisma.review_mediaUncheckedUpdateManyWithoutReviewsNestedInput;
};
export type reviewsUncheckedUpdateManyWithoutCustomersInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_item_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type reviewsCreateManyOrder_itemsInput = {
    review_id?: bigint | number;
    customer_id?: bigint | number | null;
    product_id?: bigint | number | null;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
};
export type reviewsUpdateWithoutOrder_itemsInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    review_media?: Prisma.review_mediaUpdateManyWithoutReviewsNestedInput;
    customers?: Prisma.customersUpdateOneWithoutReviewsNestedInput;
    products?: Prisma.productsUpdateOneWithoutReviewsNestedInput;
};
export type reviewsUncheckedUpdateWithoutOrder_itemsInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    review_media?: Prisma.review_mediaUncheckedUpdateManyWithoutReviewsNestedInput;
};
export type reviewsUncheckedUpdateManyWithoutOrder_itemsInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    product_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type reviewsCreateManyProductsInput = {
    review_id?: bigint | number;
    customer_id?: bigint | number | null;
    order_item_id?: bigint | number | null;
    rating?: number | null;
    content?: string | null;
    media_url?: string | null;
    created_at?: Date | string | null;
};
export type reviewsUpdateWithoutProductsInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    review_media?: Prisma.review_mediaUpdateManyWithoutReviewsNestedInput;
    customers?: Prisma.customersUpdateOneWithoutReviewsNestedInput;
    order_items?: Prisma.order_itemsUpdateOneWithoutReviewsNestedInput;
};
export type reviewsUncheckedUpdateWithoutProductsInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_item_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    review_media?: Prisma.review_mediaUncheckedUpdateManyWithoutReviewsNestedInput;
};
export type reviewsUncheckedUpdateManyWithoutProductsInput = {
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_item_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReviewsCountOutputType = {
    review_media: number;
};
export type ReviewsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    review_media?: boolean | ReviewsCountOutputTypeCountReview_mediaArgs;
};
export type ReviewsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewsCountOutputTypeSelect<ExtArgs> | null;
};
export type ReviewsCountOutputTypeCountReview_mediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.review_mediaWhereInput;
};
export type reviewsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    review_id?: boolean;
    customer_id?: boolean;
    product_id?: boolean;
    order_item_id?: boolean;
    rating?: boolean;
    content?: boolean;
    media_url?: boolean;
    created_at?: boolean;
    review_media?: boolean | Prisma.reviews$review_mediaArgs<ExtArgs>;
    customers?: boolean | Prisma.reviews$customersArgs<ExtArgs>;
    products?: boolean | Prisma.reviews$productsArgs<ExtArgs>;
    order_items?: boolean | Prisma.reviews$order_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ReviewsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reviews"]>;
export type reviewsSelectScalar = {
    review_id?: boolean;
    customer_id?: boolean;
    product_id?: boolean;
    order_item_id?: boolean;
    rating?: boolean;
    content?: boolean;
    media_url?: boolean;
    created_at?: boolean;
};
export type reviewsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"review_id" | "customer_id" | "product_id" | "order_item_id" | "rating" | "content" | "media_url" | "created_at", ExtArgs["result"]["reviews"]>;
export type reviewsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    review_media?: boolean | Prisma.reviews$review_mediaArgs<ExtArgs>;
    customers?: boolean | Prisma.reviews$customersArgs<ExtArgs>;
    products?: boolean | Prisma.reviews$productsArgs<ExtArgs>;
    order_items?: boolean | Prisma.reviews$order_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ReviewsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $reviewsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "reviews";
    objects: {
        review_media: Prisma.$review_mediaPayload<ExtArgs>[];
        customers: Prisma.$customersPayload<ExtArgs> | null;
        products: Prisma.$productsPayload<ExtArgs> | null;
        order_items: Prisma.$order_itemsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        review_id: bigint;
        customer_id: bigint | null;
        product_id: bigint | null;
        order_item_id: bigint | null;
        rating: number | null;
        content: string | null;
        media_url: string | null;
        created_at: Date | null;
    }, ExtArgs["result"]["reviews"]>;
    composites: {};
};
export type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$reviewsPayload, S>;
export type reviewsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReviewsCountAggregateInputType | true;
};
export interface reviewsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['reviews'];
        meta: {
            name: 'reviews';
        };
    };
    findUnique<T extends reviewsFindUniqueArgs>(args: Prisma.SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends reviewsFindFirstArgs>(args?: Prisma.SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends reviewsFindManyArgs>(args?: Prisma.SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends reviewsCreateArgs>(args: Prisma.SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends reviewsCreateManyArgs>(args?: Prisma.SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends reviewsDeleteArgs>(args: Prisma.SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends reviewsUpdateArgs>(args: Prisma.SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends reviewsDeleteManyArgs>(args?: Prisma.SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends reviewsUpdateManyArgs>(args: Prisma.SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends reviewsUpsertArgs>(args: Prisma.SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends reviewsCountArgs>(args?: Prisma.Subset<T, reviewsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReviewsCountAggregateOutputType> : number>;
    aggregate<T extends ReviewsAggregateArgs>(args: Prisma.Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>;
    groupBy<T extends reviewsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: reviewsGroupByArgs['orderBy'];
    } : {
        orderBy?: reviewsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: reviewsFieldRefs;
}
export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    review_media<T extends Prisma.reviews$review_mediaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reviews$review_mediaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$review_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customers<T extends Prisma.reviews$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reviews$customersArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    products<T extends Prisma.reviews$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reviews$productsArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    order_items<T extends Prisma.reviews$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reviews$order_itemsArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface reviewsFieldRefs {
    readonly review_id: Prisma.FieldRef<"reviews", 'BigInt'>;
    readonly customer_id: Prisma.FieldRef<"reviews", 'BigInt'>;
    readonly product_id: Prisma.FieldRef<"reviews", 'BigInt'>;
    readonly order_item_id: Prisma.FieldRef<"reviews", 'BigInt'>;
    readonly rating: Prisma.FieldRef<"reviews", 'Int'>;
    readonly content: Prisma.FieldRef<"reviews", 'String'>;
    readonly media_url: Prisma.FieldRef<"reviews", 'String'>;
    readonly created_at: Prisma.FieldRef<"reviews", 'DateTime'>;
}
export type reviewsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where: Prisma.reviewsWhereUniqueInput;
};
export type reviewsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where: Prisma.reviewsWhereUniqueInput;
};
export type reviewsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type reviewsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type reviewsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type reviewsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.reviewsCreateInput, Prisma.reviewsUncheckedCreateInput>;
};
export type reviewsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.reviewsCreateManyInput | Prisma.reviewsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type reviewsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.reviewsUpdateInput, Prisma.reviewsUncheckedUpdateInput>;
    where: Prisma.reviewsWhereUniqueInput;
};
export type reviewsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.reviewsUpdateManyMutationInput, Prisma.reviewsUncheckedUpdateManyInput>;
    where?: Prisma.reviewsWhereInput;
    limit?: number;
};
export type reviewsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where: Prisma.reviewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.reviewsCreateInput, Prisma.reviewsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.reviewsUpdateInput, Prisma.reviewsUncheckedUpdateInput>;
};
export type reviewsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where: Prisma.reviewsWhereUniqueInput;
};
export type reviewsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
    limit?: number;
};
export type reviews$review_mediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.review_mediaSelect<ExtArgs> | null;
    omit?: Prisma.review_mediaOmit<ExtArgs> | null;
    include?: Prisma.review_mediaInclude<ExtArgs> | null;
    where?: Prisma.review_mediaWhereInput;
    orderBy?: Prisma.review_mediaOrderByWithRelationInput | Prisma.review_mediaOrderByWithRelationInput[];
    cursor?: Prisma.review_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Review_mediaScalarFieldEnum | Prisma.Review_mediaScalarFieldEnum[];
};
export type reviews$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
};
export type reviews$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
};
export type reviews$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where?: Prisma.order_itemsWhereInput;
};
export type reviewsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
};
export {};
