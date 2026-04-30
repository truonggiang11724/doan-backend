import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type review_mediaModel = runtime.Types.Result.DefaultSelection<Prisma.$review_mediaPayload>;
export type AggregateReview_media = {
    _count: Review_mediaCountAggregateOutputType | null;
    _avg: Review_mediaAvgAggregateOutputType | null;
    _sum: Review_mediaSumAggregateOutputType | null;
    _min: Review_mediaMinAggregateOutputType | null;
    _max: Review_mediaMaxAggregateOutputType | null;
};
export type Review_mediaAvgAggregateOutputType = {
    id: number | null;
    review_id: number | null;
};
export type Review_mediaSumAggregateOutputType = {
    id: number | null;
    review_id: bigint | null;
};
export type Review_mediaMinAggregateOutputType = {
    id: number | null;
    review_id: bigint | null;
    media_url: string | null;
    media_type: $Enums.review_media_media_type | null;
};
export type Review_mediaMaxAggregateOutputType = {
    id: number | null;
    review_id: bigint | null;
    media_url: string | null;
    media_type: $Enums.review_media_media_type | null;
};
export type Review_mediaCountAggregateOutputType = {
    id: number;
    review_id: number;
    media_url: number;
    media_type: number;
    _all: number;
};
export type Review_mediaAvgAggregateInputType = {
    id?: true;
    review_id?: true;
};
export type Review_mediaSumAggregateInputType = {
    id?: true;
    review_id?: true;
};
export type Review_mediaMinAggregateInputType = {
    id?: true;
    review_id?: true;
    media_url?: true;
    media_type?: true;
};
export type Review_mediaMaxAggregateInputType = {
    id?: true;
    review_id?: true;
    media_url?: true;
    media_type?: true;
};
export type Review_mediaCountAggregateInputType = {
    id?: true;
    review_id?: true;
    media_url?: true;
    media_type?: true;
    _all?: true;
};
export type Review_mediaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.review_mediaWhereInput;
    orderBy?: Prisma.review_mediaOrderByWithRelationInput | Prisma.review_mediaOrderByWithRelationInput[];
    cursor?: Prisma.review_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Review_mediaCountAggregateInputType;
    _avg?: Review_mediaAvgAggregateInputType;
    _sum?: Review_mediaSumAggregateInputType;
    _min?: Review_mediaMinAggregateInputType;
    _max?: Review_mediaMaxAggregateInputType;
};
export type GetReview_mediaAggregateType<T extends Review_mediaAggregateArgs> = {
    [P in keyof T & keyof AggregateReview_media]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReview_media[P]> : Prisma.GetScalarType<T[P], AggregateReview_media[P]>;
};
export type review_mediaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.review_mediaWhereInput;
    orderBy?: Prisma.review_mediaOrderByWithAggregationInput | Prisma.review_mediaOrderByWithAggregationInput[];
    by: Prisma.Review_mediaScalarFieldEnum[] | Prisma.Review_mediaScalarFieldEnum;
    having?: Prisma.review_mediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Review_mediaCountAggregateInputType | true;
    _avg?: Review_mediaAvgAggregateInputType;
    _sum?: Review_mediaSumAggregateInputType;
    _min?: Review_mediaMinAggregateInputType;
    _max?: Review_mediaMaxAggregateInputType;
};
export type Review_mediaGroupByOutputType = {
    id: number;
    review_id: bigint;
    media_url: string | null;
    media_type: $Enums.review_media_media_type | null;
    _count: Review_mediaCountAggregateOutputType | null;
    _avg: Review_mediaAvgAggregateOutputType | null;
    _sum: Review_mediaSumAggregateOutputType | null;
    _min: Review_mediaMinAggregateOutputType | null;
    _max: Review_mediaMaxAggregateOutputType | null;
};
type GetReview_mediaGroupByPayload<T extends review_mediaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Review_mediaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Review_mediaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Review_mediaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Review_mediaGroupByOutputType[P]>;
}>>;
export type review_mediaWhereInput = {
    AND?: Prisma.review_mediaWhereInput | Prisma.review_mediaWhereInput[];
    OR?: Prisma.review_mediaWhereInput[];
    NOT?: Prisma.review_mediaWhereInput | Prisma.review_mediaWhereInput[];
    id?: Prisma.IntFilter<"review_media"> | number;
    review_id?: Prisma.BigIntFilter<"review_media"> | bigint | number;
    media_url?: Prisma.StringNullableFilter<"review_media"> | string | null;
    media_type?: Prisma.Enumreview_media_media_typeNullableFilter<"review_media"> | $Enums.review_media_media_type | null;
    reviews?: Prisma.XOR<Prisma.ReviewsScalarRelationFilter, Prisma.reviewsWhereInput>;
};
export type review_mediaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    review_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviews?: Prisma.reviewsOrderByWithRelationInput;
    _relevance?: Prisma.review_mediaOrderByRelevanceInput;
};
export type review_mediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.review_mediaWhereInput | Prisma.review_mediaWhereInput[];
    OR?: Prisma.review_mediaWhereInput[];
    NOT?: Prisma.review_mediaWhereInput | Prisma.review_mediaWhereInput[];
    review_id?: Prisma.BigIntFilter<"review_media"> | bigint | number;
    media_url?: Prisma.StringNullableFilter<"review_media"> | string | null;
    media_type?: Prisma.Enumreview_media_media_typeNullableFilter<"review_media"> | $Enums.review_media_media_type | null;
    reviews?: Prisma.XOR<Prisma.ReviewsScalarRelationFilter, Prisma.reviewsWhereInput>;
}, "id">;
export type review_mediaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    review_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.review_mediaCountOrderByAggregateInput;
    _avg?: Prisma.review_mediaAvgOrderByAggregateInput;
    _max?: Prisma.review_mediaMaxOrderByAggregateInput;
    _min?: Prisma.review_mediaMinOrderByAggregateInput;
    _sum?: Prisma.review_mediaSumOrderByAggregateInput;
};
export type review_mediaScalarWhereWithAggregatesInput = {
    AND?: Prisma.review_mediaScalarWhereWithAggregatesInput | Prisma.review_mediaScalarWhereWithAggregatesInput[];
    OR?: Prisma.review_mediaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.review_mediaScalarWhereWithAggregatesInput | Prisma.review_mediaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"review_media"> | number;
    review_id?: Prisma.BigIntWithAggregatesFilter<"review_media"> | bigint | number;
    media_url?: Prisma.StringNullableWithAggregatesFilter<"review_media"> | string | null;
    media_type?: Prisma.Enumreview_media_media_typeNullableWithAggregatesFilter<"review_media"> | $Enums.review_media_media_type | null;
};
export type review_mediaCreateInput = {
    media_url?: string | null;
    media_type?: $Enums.review_media_media_type | null;
    reviews: Prisma.reviewsCreateNestedOneWithoutReview_mediaInput;
};
export type review_mediaUncheckedCreateInput = {
    id?: number;
    review_id: bigint | number;
    media_url?: string | null;
    media_type?: $Enums.review_media_media_type | null;
};
export type review_mediaUpdateInput = {
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumreview_media_media_typeFieldUpdateOperationsInput | $Enums.review_media_media_type | null;
    reviews?: Prisma.reviewsUpdateOneRequiredWithoutReview_mediaNestedInput;
};
export type review_mediaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumreview_media_media_typeFieldUpdateOperationsInput | $Enums.review_media_media_type | null;
};
export type review_mediaCreateManyInput = {
    id?: number;
    review_id: bigint | number;
    media_url?: string | null;
    media_type?: $Enums.review_media_media_type | null;
};
export type review_mediaUpdateManyMutationInput = {
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumreview_media_media_typeFieldUpdateOperationsInput | $Enums.review_media_media_type | null;
};
export type review_mediaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    review_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumreview_media_media_typeFieldUpdateOperationsInput | $Enums.review_media_media_type | null;
};
export type review_mediaOrderByRelevanceInput = {
    fields: Prisma.review_mediaOrderByRelevanceFieldEnum | Prisma.review_mediaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type review_mediaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    review_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
};
export type review_mediaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    review_id?: Prisma.SortOrder;
};
export type review_mediaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    review_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
};
export type review_mediaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    review_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
};
export type review_mediaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    review_id?: Prisma.SortOrder;
};
export type Review_mediaListRelationFilter = {
    every?: Prisma.review_mediaWhereInput;
    some?: Prisma.review_mediaWhereInput;
    none?: Prisma.review_mediaWhereInput;
};
export type review_mediaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableEnumreview_media_media_typeFieldUpdateOperationsInput = {
    set?: $Enums.review_media_media_type | null;
};
export type review_mediaCreateNestedManyWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.review_mediaCreateWithoutReviewsInput, Prisma.review_mediaUncheckedCreateWithoutReviewsInput> | Prisma.review_mediaCreateWithoutReviewsInput[] | Prisma.review_mediaUncheckedCreateWithoutReviewsInput[];
    connectOrCreate?: Prisma.review_mediaCreateOrConnectWithoutReviewsInput | Prisma.review_mediaCreateOrConnectWithoutReviewsInput[];
    createMany?: Prisma.review_mediaCreateManyReviewsInputEnvelope;
    connect?: Prisma.review_mediaWhereUniqueInput | Prisma.review_mediaWhereUniqueInput[];
};
export type review_mediaUncheckedCreateNestedManyWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.review_mediaCreateWithoutReviewsInput, Prisma.review_mediaUncheckedCreateWithoutReviewsInput> | Prisma.review_mediaCreateWithoutReviewsInput[] | Prisma.review_mediaUncheckedCreateWithoutReviewsInput[];
    connectOrCreate?: Prisma.review_mediaCreateOrConnectWithoutReviewsInput | Prisma.review_mediaCreateOrConnectWithoutReviewsInput[];
    createMany?: Prisma.review_mediaCreateManyReviewsInputEnvelope;
    connect?: Prisma.review_mediaWhereUniqueInput | Prisma.review_mediaWhereUniqueInput[];
};
export type review_mediaUpdateManyWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.review_mediaCreateWithoutReviewsInput, Prisma.review_mediaUncheckedCreateWithoutReviewsInput> | Prisma.review_mediaCreateWithoutReviewsInput[] | Prisma.review_mediaUncheckedCreateWithoutReviewsInput[];
    connectOrCreate?: Prisma.review_mediaCreateOrConnectWithoutReviewsInput | Prisma.review_mediaCreateOrConnectWithoutReviewsInput[];
    upsert?: Prisma.review_mediaUpsertWithWhereUniqueWithoutReviewsInput | Prisma.review_mediaUpsertWithWhereUniqueWithoutReviewsInput[];
    createMany?: Prisma.review_mediaCreateManyReviewsInputEnvelope;
    set?: Prisma.review_mediaWhereUniqueInput | Prisma.review_mediaWhereUniqueInput[];
    disconnect?: Prisma.review_mediaWhereUniqueInput | Prisma.review_mediaWhereUniqueInput[];
    delete?: Prisma.review_mediaWhereUniqueInput | Prisma.review_mediaWhereUniqueInput[];
    connect?: Prisma.review_mediaWhereUniqueInput | Prisma.review_mediaWhereUniqueInput[];
    update?: Prisma.review_mediaUpdateWithWhereUniqueWithoutReviewsInput | Prisma.review_mediaUpdateWithWhereUniqueWithoutReviewsInput[];
    updateMany?: Prisma.review_mediaUpdateManyWithWhereWithoutReviewsInput | Prisma.review_mediaUpdateManyWithWhereWithoutReviewsInput[];
    deleteMany?: Prisma.review_mediaScalarWhereInput | Prisma.review_mediaScalarWhereInput[];
};
export type review_mediaUncheckedUpdateManyWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.review_mediaCreateWithoutReviewsInput, Prisma.review_mediaUncheckedCreateWithoutReviewsInput> | Prisma.review_mediaCreateWithoutReviewsInput[] | Prisma.review_mediaUncheckedCreateWithoutReviewsInput[];
    connectOrCreate?: Prisma.review_mediaCreateOrConnectWithoutReviewsInput | Prisma.review_mediaCreateOrConnectWithoutReviewsInput[];
    upsert?: Prisma.review_mediaUpsertWithWhereUniqueWithoutReviewsInput | Prisma.review_mediaUpsertWithWhereUniqueWithoutReviewsInput[];
    createMany?: Prisma.review_mediaCreateManyReviewsInputEnvelope;
    set?: Prisma.review_mediaWhereUniqueInput | Prisma.review_mediaWhereUniqueInput[];
    disconnect?: Prisma.review_mediaWhereUniqueInput | Prisma.review_mediaWhereUniqueInput[];
    delete?: Prisma.review_mediaWhereUniqueInput | Prisma.review_mediaWhereUniqueInput[];
    connect?: Prisma.review_mediaWhereUniqueInput | Prisma.review_mediaWhereUniqueInput[];
    update?: Prisma.review_mediaUpdateWithWhereUniqueWithoutReviewsInput | Prisma.review_mediaUpdateWithWhereUniqueWithoutReviewsInput[];
    updateMany?: Prisma.review_mediaUpdateManyWithWhereWithoutReviewsInput | Prisma.review_mediaUpdateManyWithWhereWithoutReviewsInput[];
    deleteMany?: Prisma.review_mediaScalarWhereInput | Prisma.review_mediaScalarWhereInput[];
};
export type review_mediaCreateWithoutReviewsInput = {
    media_url?: string | null;
    media_type?: $Enums.review_media_media_type | null;
};
export type review_mediaUncheckedCreateWithoutReviewsInput = {
    id?: number;
    media_url?: string | null;
    media_type?: $Enums.review_media_media_type | null;
};
export type review_mediaCreateOrConnectWithoutReviewsInput = {
    where: Prisma.review_mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.review_mediaCreateWithoutReviewsInput, Prisma.review_mediaUncheckedCreateWithoutReviewsInput>;
};
export type review_mediaCreateManyReviewsInputEnvelope = {
    data: Prisma.review_mediaCreateManyReviewsInput | Prisma.review_mediaCreateManyReviewsInput[];
    skipDuplicates?: boolean;
};
export type review_mediaUpsertWithWhereUniqueWithoutReviewsInput = {
    where: Prisma.review_mediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.review_mediaUpdateWithoutReviewsInput, Prisma.review_mediaUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.review_mediaCreateWithoutReviewsInput, Prisma.review_mediaUncheckedCreateWithoutReviewsInput>;
};
export type review_mediaUpdateWithWhereUniqueWithoutReviewsInput = {
    where: Prisma.review_mediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.review_mediaUpdateWithoutReviewsInput, Prisma.review_mediaUncheckedUpdateWithoutReviewsInput>;
};
export type review_mediaUpdateManyWithWhereWithoutReviewsInput = {
    where: Prisma.review_mediaScalarWhereInput;
    data: Prisma.XOR<Prisma.review_mediaUpdateManyMutationInput, Prisma.review_mediaUncheckedUpdateManyWithoutReviewsInput>;
};
export type review_mediaScalarWhereInput = {
    AND?: Prisma.review_mediaScalarWhereInput | Prisma.review_mediaScalarWhereInput[];
    OR?: Prisma.review_mediaScalarWhereInput[];
    NOT?: Prisma.review_mediaScalarWhereInput | Prisma.review_mediaScalarWhereInput[];
    id?: Prisma.IntFilter<"review_media"> | number;
    review_id?: Prisma.BigIntFilter<"review_media"> | bigint | number;
    media_url?: Prisma.StringNullableFilter<"review_media"> | string | null;
    media_type?: Prisma.Enumreview_media_media_typeNullableFilter<"review_media"> | $Enums.review_media_media_type | null;
};
export type review_mediaCreateManyReviewsInput = {
    id?: number;
    media_url?: string | null;
    media_type?: $Enums.review_media_media_type | null;
};
export type review_mediaUpdateWithoutReviewsInput = {
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumreview_media_media_typeFieldUpdateOperationsInput | $Enums.review_media_media_type | null;
};
export type review_mediaUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumreview_media_media_typeFieldUpdateOperationsInput | $Enums.review_media_media_type | null;
};
export type review_mediaUncheckedUpdateManyWithoutReviewsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumreview_media_media_typeFieldUpdateOperationsInput | $Enums.review_media_media_type | null;
};
export type review_mediaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    review_id?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    reviews?: boolean | Prisma.reviewsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["review_media"]>;
export type review_mediaSelectScalar = {
    id?: boolean;
    review_id?: boolean;
    media_url?: boolean;
    media_type?: boolean;
};
export type review_mediaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "review_id" | "media_url" | "media_type", ExtArgs["result"]["review_media"]>;
export type review_mediaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reviews?: boolean | Prisma.reviewsDefaultArgs<ExtArgs>;
};
export type $review_mediaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "review_media";
    objects: {
        reviews: Prisma.$reviewsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        review_id: bigint;
        media_url: string | null;
        media_type: $Enums.review_media_media_type | null;
    }, ExtArgs["result"]["review_media"]>;
    composites: {};
};
export type review_mediaGetPayload<S extends boolean | null | undefined | review_mediaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$review_mediaPayload, S>;
export type review_mediaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<review_mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Review_mediaCountAggregateInputType | true;
};
export interface review_mediaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['review_media'];
        meta: {
            name: 'review_media';
        };
    };
    findUnique<T extends review_mediaFindUniqueArgs>(args: Prisma.SelectSubset<T, review_mediaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__review_mediaClient<runtime.Types.Result.GetResult<Prisma.$review_mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends review_mediaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, review_mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__review_mediaClient<runtime.Types.Result.GetResult<Prisma.$review_mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends review_mediaFindFirstArgs>(args?: Prisma.SelectSubset<T, review_mediaFindFirstArgs<ExtArgs>>): Prisma.Prisma__review_mediaClient<runtime.Types.Result.GetResult<Prisma.$review_mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends review_mediaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, review_mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__review_mediaClient<runtime.Types.Result.GetResult<Prisma.$review_mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends review_mediaFindManyArgs>(args?: Prisma.SelectSubset<T, review_mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$review_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends review_mediaCreateArgs>(args: Prisma.SelectSubset<T, review_mediaCreateArgs<ExtArgs>>): Prisma.Prisma__review_mediaClient<runtime.Types.Result.GetResult<Prisma.$review_mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends review_mediaCreateManyArgs>(args?: Prisma.SelectSubset<T, review_mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends review_mediaDeleteArgs>(args: Prisma.SelectSubset<T, review_mediaDeleteArgs<ExtArgs>>): Prisma.Prisma__review_mediaClient<runtime.Types.Result.GetResult<Prisma.$review_mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends review_mediaUpdateArgs>(args: Prisma.SelectSubset<T, review_mediaUpdateArgs<ExtArgs>>): Prisma.Prisma__review_mediaClient<runtime.Types.Result.GetResult<Prisma.$review_mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends review_mediaDeleteManyArgs>(args?: Prisma.SelectSubset<T, review_mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends review_mediaUpdateManyArgs>(args: Prisma.SelectSubset<T, review_mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends review_mediaUpsertArgs>(args: Prisma.SelectSubset<T, review_mediaUpsertArgs<ExtArgs>>): Prisma.Prisma__review_mediaClient<runtime.Types.Result.GetResult<Prisma.$review_mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends review_mediaCountArgs>(args?: Prisma.Subset<T, review_mediaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Review_mediaCountAggregateOutputType> : number>;
    aggregate<T extends Review_mediaAggregateArgs>(args: Prisma.Subset<T, Review_mediaAggregateArgs>): Prisma.PrismaPromise<GetReview_mediaAggregateType<T>>;
    groupBy<T extends review_mediaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: review_mediaGroupByArgs['orderBy'];
    } : {
        orderBy?: review_mediaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, review_mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReview_mediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: review_mediaFieldRefs;
}
export interface Prisma__review_mediaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reviews<T extends Prisma.reviewsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reviewsDefaultArgs<ExtArgs>>): Prisma.Prisma__reviewsClient<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface review_mediaFieldRefs {
    readonly id: Prisma.FieldRef<"review_media", 'Int'>;
    readonly review_id: Prisma.FieldRef<"review_media", 'BigInt'>;
    readonly media_url: Prisma.FieldRef<"review_media", 'String'>;
    readonly media_type: Prisma.FieldRef<"review_media", 'review_media_media_type'>;
}
export type review_mediaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.review_mediaSelect<ExtArgs> | null;
    omit?: Prisma.review_mediaOmit<ExtArgs> | null;
    include?: Prisma.review_mediaInclude<ExtArgs> | null;
    where: Prisma.review_mediaWhereUniqueInput;
};
export type review_mediaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.review_mediaSelect<ExtArgs> | null;
    omit?: Prisma.review_mediaOmit<ExtArgs> | null;
    include?: Prisma.review_mediaInclude<ExtArgs> | null;
    where: Prisma.review_mediaWhereUniqueInput;
};
export type review_mediaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type review_mediaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type review_mediaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type review_mediaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.review_mediaSelect<ExtArgs> | null;
    omit?: Prisma.review_mediaOmit<ExtArgs> | null;
    include?: Prisma.review_mediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.review_mediaCreateInput, Prisma.review_mediaUncheckedCreateInput>;
};
export type review_mediaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.review_mediaCreateManyInput | Prisma.review_mediaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type review_mediaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.review_mediaSelect<ExtArgs> | null;
    omit?: Prisma.review_mediaOmit<ExtArgs> | null;
    include?: Prisma.review_mediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.review_mediaUpdateInput, Prisma.review_mediaUncheckedUpdateInput>;
    where: Prisma.review_mediaWhereUniqueInput;
};
export type review_mediaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.review_mediaUpdateManyMutationInput, Prisma.review_mediaUncheckedUpdateManyInput>;
    where?: Prisma.review_mediaWhereInput;
    limit?: number;
};
export type review_mediaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.review_mediaSelect<ExtArgs> | null;
    omit?: Prisma.review_mediaOmit<ExtArgs> | null;
    include?: Prisma.review_mediaInclude<ExtArgs> | null;
    where: Prisma.review_mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.review_mediaCreateInput, Prisma.review_mediaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.review_mediaUpdateInput, Prisma.review_mediaUncheckedUpdateInput>;
};
export type review_mediaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.review_mediaSelect<ExtArgs> | null;
    omit?: Prisma.review_mediaOmit<ExtArgs> | null;
    include?: Prisma.review_mediaInclude<ExtArgs> | null;
    where: Prisma.review_mediaWhereUniqueInput;
};
export type review_mediaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.review_mediaWhereInput;
    limit?: number;
};
export type review_mediaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.review_mediaSelect<ExtArgs> | null;
    omit?: Prisma.review_mediaOmit<ExtArgs> | null;
    include?: Prisma.review_mediaInclude<ExtArgs> | null;
};
export {};
