import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type product_mediaModel = runtime.Types.Result.DefaultSelection<Prisma.$product_mediaPayload>;
export type AggregateProduct_media = {
    _count: Product_mediaCountAggregateOutputType | null;
    _avg: Product_mediaAvgAggregateOutputType | null;
    _sum: Product_mediaSumAggregateOutputType | null;
    _min: Product_mediaMinAggregateOutputType | null;
    _max: Product_mediaMaxAggregateOutputType | null;
};
export type Product_mediaAvgAggregateOutputType = {
    media_id: number | null;
    product_id: number | null;
};
export type Product_mediaSumAggregateOutputType = {
    media_id: bigint | null;
    product_id: bigint | null;
};
export type Product_mediaMinAggregateOutputType = {
    media_id: bigint | null;
    product_id: bigint | null;
    media_url: string | null;
    media_type: $Enums.product_media_media_type | null;
    is_primary: boolean | null;
};
export type Product_mediaMaxAggregateOutputType = {
    media_id: bigint | null;
    product_id: bigint | null;
    media_url: string | null;
    media_type: $Enums.product_media_media_type | null;
    is_primary: boolean | null;
};
export type Product_mediaCountAggregateOutputType = {
    media_id: number;
    product_id: number;
    media_url: number;
    media_type: number;
    is_primary: number;
    _all: number;
};
export type Product_mediaAvgAggregateInputType = {
    media_id?: true;
    product_id?: true;
};
export type Product_mediaSumAggregateInputType = {
    media_id?: true;
    product_id?: true;
};
export type Product_mediaMinAggregateInputType = {
    media_id?: true;
    product_id?: true;
    media_url?: true;
    media_type?: true;
    is_primary?: true;
};
export type Product_mediaMaxAggregateInputType = {
    media_id?: true;
    product_id?: true;
    media_url?: true;
    media_type?: true;
    is_primary?: true;
};
export type Product_mediaCountAggregateInputType = {
    media_id?: true;
    product_id?: true;
    media_url?: true;
    media_type?: true;
    is_primary?: true;
    _all?: true;
};
export type Product_mediaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_mediaWhereInput;
    orderBy?: Prisma.product_mediaOrderByWithRelationInput | Prisma.product_mediaOrderByWithRelationInput[];
    cursor?: Prisma.product_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Product_mediaCountAggregateInputType;
    _avg?: Product_mediaAvgAggregateInputType;
    _sum?: Product_mediaSumAggregateInputType;
    _min?: Product_mediaMinAggregateInputType;
    _max?: Product_mediaMaxAggregateInputType;
};
export type GetProduct_mediaAggregateType<T extends Product_mediaAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct_media]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct_media[P]> : Prisma.GetScalarType<T[P], AggregateProduct_media[P]>;
};
export type product_mediaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_mediaWhereInput;
    orderBy?: Prisma.product_mediaOrderByWithAggregationInput | Prisma.product_mediaOrderByWithAggregationInput[];
    by: Prisma.Product_mediaScalarFieldEnum[] | Prisma.Product_mediaScalarFieldEnum;
    having?: Prisma.product_mediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Product_mediaCountAggregateInputType | true;
    _avg?: Product_mediaAvgAggregateInputType;
    _sum?: Product_mediaSumAggregateInputType;
    _min?: Product_mediaMinAggregateInputType;
    _max?: Product_mediaMaxAggregateInputType;
};
export type Product_mediaGroupByOutputType = {
    media_id: bigint;
    product_id: bigint | null;
    media_url: string | null;
    media_type: $Enums.product_media_media_type | null;
    is_primary: boolean | null;
    _count: Product_mediaCountAggregateOutputType | null;
    _avg: Product_mediaAvgAggregateOutputType | null;
    _sum: Product_mediaSumAggregateOutputType | null;
    _min: Product_mediaMinAggregateOutputType | null;
    _max: Product_mediaMaxAggregateOutputType | null;
};
type GetProduct_mediaGroupByPayload<T extends product_mediaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Product_mediaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Product_mediaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Product_mediaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Product_mediaGroupByOutputType[P]>;
}>>;
export type product_mediaWhereInput = {
    AND?: Prisma.product_mediaWhereInput | Prisma.product_mediaWhereInput[];
    OR?: Prisma.product_mediaWhereInput[];
    NOT?: Prisma.product_mediaWhereInput | Prisma.product_mediaWhereInput[];
    media_id?: Prisma.BigIntFilter<"product_media"> | bigint | number;
    product_id?: Prisma.BigIntNullableFilter<"product_media"> | bigint | number | null;
    media_url?: Prisma.StringNullableFilter<"product_media"> | string | null;
    media_type?: Prisma.Enumproduct_media_media_typeNullableFilter<"product_media"> | $Enums.product_media_media_type | null;
    is_primary?: Prisma.BoolNullableFilter<"product_media"> | boolean | null;
    products?: Prisma.XOR<Prisma.ProductsNullableScalarRelationFilter, Prisma.productsWhereInput> | null;
};
export type product_mediaOrderByWithRelationInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_primary?: Prisma.SortOrderInput | Prisma.SortOrder;
    products?: Prisma.productsOrderByWithRelationInput;
    _relevance?: Prisma.product_mediaOrderByRelevanceInput;
};
export type product_mediaWhereUniqueInput = Prisma.AtLeast<{
    media_id?: bigint | number;
    AND?: Prisma.product_mediaWhereInput | Prisma.product_mediaWhereInput[];
    OR?: Prisma.product_mediaWhereInput[];
    NOT?: Prisma.product_mediaWhereInput | Prisma.product_mediaWhereInput[];
    product_id?: Prisma.BigIntNullableFilter<"product_media"> | bigint | number | null;
    media_url?: Prisma.StringNullableFilter<"product_media"> | string | null;
    media_type?: Prisma.Enumproduct_media_media_typeNullableFilter<"product_media"> | $Enums.product_media_media_type | null;
    is_primary?: Prisma.BoolNullableFilter<"product_media"> | boolean | null;
    products?: Prisma.XOR<Prisma.ProductsNullableScalarRelationFilter, Prisma.productsWhereInput> | null;
}, "media_id">;
export type product_mediaOrderByWithAggregationInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_primary?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.product_mediaCountOrderByAggregateInput;
    _avg?: Prisma.product_mediaAvgOrderByAggregateInput;
    _max?: Prisma.product_mediaMaxOrderByAggregateInput;
    _min?: Prisma.product_mediaMinOrderByAggregateInput;
    _sum?: Prisma.product_mediaSumOrderByAggregateInput;
};
export type product_mediaScalarWhereWithAggregatesInput = {
    AND?: Prisma.product_mediaScalarWhereWithAggregatesInput | Prisma.product_mediaScalarWhereWithAggregatesInput[];
    OR?: Prisma.product_mediaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.product_mediaScalarWhereWithAggregatesInput | Prisma.product_mediaScalarWhereWithAggregatesInput[];
    media_id?: Prisma.BigIntWithAggregatesFilter<"product_media"> | bigint | number;
    product_id?: Prisma.BigIntNullableWithAggregatesFilter<"product_media"> | bigint | number | null;
    media_url?: Prisma.StringNullableWithAggregatesFilter<"product_media"> | string | null;
    media_type?: Prisma.Enumproduct_media_media_typeNullableWithAggregatesFilter<"product_media"> | $Enums.product_media_media_type | null;
    is_primary?: Prisma.BoolNullableWithAggregatesFilter<"product_media"> | boolean | null;
};
export type product_mediaCreateInput = {
    media_id?: bigint | number;
    media_url?: string | null;
    media_type?: $Enums.product_media_media_type | null;
    is_primary?: boolean | null;
    products?: Prisma.productsCreateNestedOneWithoutProduct_mediaInput;
};
export type product_mediaUncheckedCreateInput = {
    media_id?: bigint | number;
    product_id?: bigint | number | null;
    media_url?: string | null;
    media_type?: $Enums.product_media_media_type | null;
    is_primary?: boolean | null;
};
export type product_mediaUpdateInput = {
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumproduct_media_media_typeFieldUpdateOperationsInput | $Enums.product_media_media_type | null;
    is_primary?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    products?: Prisma.productsUpdateOneWithoutProduct_mediaNestedInput;
};
export type product_mediaUncheckedUpdateInput = {
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumproduct_media_media_typeFieldUpdateOperationsInput | $Enums.product_media_media_type | null;
    is_primary?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type product_mediaCreateManyInput = {
    media_id?: bigint | number;
    product_id?: bigint | number | null;
    media_url?: string | null;
    media_type?: $Enums.product_media_media_type | null;
    is_primary?: boolean | null;
};
export type product_mediaUpdateManyMutationInput = {
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumproduct_media_media_typeFieldUpdateOperationsInput | $Enums.product_media_media_type | null;
    is_primary?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type product_mediaUncheckedUpdateManyInput = {
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumproduct_media_media_typeFieldUpdateOperationsInput | $Enums.product_media_media_type | null;
    is_primary?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type product_mediaOrderByRelevanceInput = {
    fields: Prisma.product_mediaOrderByRelevanceFieldEnum | Prisma.product_mediaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type product_mediaCountOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
};
export type product_mediaAvgOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
};
export type product_mediaMaxOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
};
export type product_mediaMinOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
};
export type product_mediaSumOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
};
export type Product_mediaListRelationFilter = {
    every?: Prisma.product_mediaWhereInput;
    some?: Prisma.product_mediaWhereInput;
    none?: Prisma.product_mediaWhereInput;
};
export type product_mediaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableEnumproduct_media_media_typeFieldUpdateOperationsInput = {
    set?: $Enums.product_media_media_type | null;
};
export type product_mediaCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_mediaCreateWithoutProductsInput, Prisma.product_mediaUncheckedCreateWithoutProductsInput> | Prisma.product_mediaCreateWithoutProductsInput[] | Prisma.product_mediaUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_mediaCreateOrConnectWithoutProductsInput | Prisma.product_mediaCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_mediaCreateManyProductsInputEnvelope;
    connect?: Prisma.product_mediaWhereUniqueInput | Prisma.product_mediaWhereUniqueInput[];
};
export type product_mediaUncheckedCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_mediaCreateWithoutProductsInput, Prisma.product_mediaUncheckedCreateWithoutProductsInput> | Prisma.product_mediaCreateWithoutProductsInput[] | Prisma.product_mediaUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_mediaCreateOrConnectWithoutProductsInput | Prisma.product_mediaCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_mediaCreateManyProductsInputEnvelope;
    connect?: Prisma.product_mediaWhereUniqueInput | Prisma.product_mediaWhereUniqueInput[];
};
export type product_mediaUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_mediaCreateWithoutProductsInput, Prisma.product_mediaUncheckedCreateWithoutProductsInput> | Prisma.product_mediaCreateWithoutProductsInput[] | Prisma.product_mediaUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_mediaCreateOrConnectWithoutProductsInput | Prisma.product_mediaCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_mediaUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_mediaUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_mediaCreateManyProductsInputEnvelope;
    set?: Prisma.product_mediaWhereUniqueInput | Prisma.product_mediaWhereUniqueInput[];
    disconnect?: Prisma.product_mediaWhereUniqueInput | Prisma.product_mediaWhereUniqueInput[];
    delete?: Prisma.product_mediaWhereUniqueInput | Prisma.product_mediaWhereUniqueInput[];
    connect?: Prisma.product_mediaWhereUniqueInput | Prisma.product_mediaWhereUniqueInput[];
    update?: Prisma.product_mediaUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_mediaUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_mediaUpdateManyWithWhereWithoutProductsInput | Prisma.product_mediaUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_mediaScalarWhereInput | Prisma.product_mediaScalarWhereInput[];
};
export type product_mediaUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_mediaCreateWithoutProductsInput, Prisma.product_mediaUncheckedCreateWithoutProductsInput> | Prisma.product_mediaCreateWithoutProductsInput[] | Prisma.product_mediaUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_mediaCreateOrConnectWithoutProductsInput | Prisma.product_mediaCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_mediaUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_mediaUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_mediaCreateManyProductsInputEnvelope;
    set?: Prisma.product_mediaWhereUniqueInput | Prisma.product_mediaWhereUniqueInput[];
    disconnect?: Prisma.product_mediaWhereUniqueInput | Prisma.product_mediaWhereUniqueInput[];
    delete?: Prisma.product_mediaWhereUniqueInput | Prisma.product_mediaWhereUniqueInput[];
    connect?: Prisma.product_mediaWhereUniqueInput | Prisma.product_mediaWhereUniqueInput[];
    update?: Prisma.product_mediaUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_mediaUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_mediaUpdateManyWithWhereWithoutProductsInput | Prisma.product_mediaUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_mediaScalarWhereInput | Prisma.product_mediaScalarWhereInput[];
};
export type product_mediaCreateWithoutProductsInput = {
    media_id?: bigint | number;
    media_url?: string | null;
    media_type?: $Enums.product_media_media_type | null;
    is_primary?: boolean | null;
};
export type product_mediaUncheckedCreateWithoutProductsInput = {
    media_id?: bigint | number;
    media_url?: string | null;
    media_type?: $Enums.product_media_media_type | null;
    is_primary?: boolean | null;
};
export type product_mediaCreateOrConnectWithoutProductsInput = {
    where: Prisma.product_mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_mediaCreateWithoutProductsInput, Prisma.product_mediaUncheckedCreateWithoutProductsInput>;
};
export type product_mediaCreateManyProductsInputEnvelope = {
    data: Prisma.product_mediaCreateManyProductsInput | Prisma.product_mediaCreateManyProductsInput[];
    skipDuplicates?: boolean;
};
export type product_mediaUpsertWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_mediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_mediaUpdateWithoutProductsInput, Prisma.product_mediaUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.product_mediaCreateWithoutProductsInput, Prisma.product_mediaUncheckedCreateWithoutProductsInput>;
};
export type product_mediaUpdateWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_mediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_mediaUpdateWithoutProductsInput, Prisma.product_mediaUncheckedUpdateWithoutProductsInput>;
};
export type product_mediaUpdateManyWithWhereWithoutProductsInput = {
    where: Prisma.product_mediaScalarWhereInput;
    data: Prisma.XOR<Prisma.product_mediaUpdateManyMutationInput, Prisma.product_mediaUncheckedUpdateManyWithoutProductsInput>;
};
export type product_mediaScalarWhereInput = {
    AND?: Prisma.product_mediaScalarWhereInput | Prisma.product_mediaScalarWhereInput[];
    OR?: Prisma.product_mediaScalarWhereInput[];
    NOT?: Prisma.product_mediaScalarWhereInput | Prisma.product_mediaScalarWhereInput[];
    media_id?: Prisma.BigIntFilter<"product_media"> | bigint | number;
    product_id?: Prisma.BigIntNullableFilter<"product_media"> | bigint | number | null;
    media_url?: Prisma.StringNullableFilter<"product_media"> | string | null;
    media_type?: Prisma.Enumproduct_media_media_typeNullableFilter<"product_media"> | $Enums.product_media_media_type | null;
    is_primary?: Prisma.BoolNullableFilter<"product_media"> | boolean | null;
};
export type product_mediaCreateManyProductsInput = {
    media_id?: bigint | number;
    media_url?: string | null;
    media_type?: $Enums.product_media_media_type | null;
    is_primary?: boolean | null;
};
export type product_mediaUpdateWithoutProductsInput = {
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumproduct_media_media_typeFieldUpdateOperationsInput | $Enums.product_media_media_type | null;
    is_primary?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type product_mediaUncheckedUpdateWithoutProductsInput = {
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumproduct_media_media_typeFieldUpdateOperationsInput | $Enums.product_media_media_type | null;
    is_primary?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type product_mediaUncheckedUpdateManyWithoutProductsInput = {
    media_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableEnumproduct_media_media_typeFieldUpdateOperationsInput | $Enums.product_media_media_type | null;
    is_primary?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type product_mediaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    media_id?: boolean;
    product_id?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    is_primary?: boolean;
    products?: boolean | Prisma.product_media$productsArgs<ExtArgs>;
}, ExtArgs["result"]["product_media"]>;
export type product_mediaSelectScalar = {
    media_id?: boolean;
    product_id?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    is_primary?: boolean;
};
export type product_mediaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"media_id" | "product_id" | "media_url" | "media_type" | "is_primary", ExtArgs["result"]["product_media"]>;
export type product_mediaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.product_media$productsArgs<ExtArgs>;
};
export type $product_mediaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "product_media";
    objects: {
        products: Prisma.$productsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        media_id: bigint;
        product_id: bigint | null;
        media_url: string | null;
        media_type: $Enums.product_media_media_type | null;
        is_primary: boolean | null;
    }, ExtArgs["result"]["product_media"]>;
    composites: {};
};
export type product_mediaGetPayload<S extends boolean | null | undefined | product_mediaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$product_mediaPayload, S>;
export type product_mediaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<product_mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Product_mediaCountAggregateInputType | true;
};
export interface product_mediaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['product_media'];
        meta: {
            name: 'product_media';
        };
    };
    findUnique<T extends product_mediaFindUniqueArgs>(args: Prisma.SelectSubset<T, product_mediaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__product_mediaClient<runtime.Types.Result.GetResult<Prisma.$product_mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends product_mediaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, product_mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_mediaClient<runtime.Types.Result.GetResult<Prisma.$product_mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends product_mediaFindFirstArgs>(args?: Prisma.SelectSubset<T, product_mediaFindFirstArgs<ExtArgs>>): Prisma.Prisma__product_mediaClient<runtime.Types.Result.GetResult<Prisma.$product_mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends product_mediaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, product_mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_mediaClient<runtime.Types.Result.GetResult<Prisma.$product_mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends product_mediaFindManyArgs>(args?: Prisma.SelectSubset<T, product_mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends product_mediaCreateArgs>(args: Prisma.SelectSubset<T, product_mediaCreateArgs<ExtArgs>>): Prisma.Prisma__product_mediaClient<runtime.Types.Result.GetResult<Prisma.$product_mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends product_mediaCreateManyArgs>(args?: Prisma.SelectSubset<T, product_mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends product_mediaDeleteArgs>(args: Prisma.SelectSubset<T, product_mediaDeleteArgs<ExtArgs>>): Prisma.Prisma__product_mediaClient<runtime.Types.Result.GetResult<Prisma.$product_mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends product_mediaUpdateArgs>(args: Prisma.SelectSubset<T, product_mediaUpdateArgs<ExtArgs>>): Prisma.Prisma__product_mediaClient<runtime.Types.Result.GetResult<Prisma.$product_mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends product_mediaDeleteManyArgs>(args?: Prisma.SelectSubset<T, product_mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends product_mediaUpdateManyArgs>(args: Prisma.SelectSubset<T, product_mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends product_mediaUpsertArgs>(args: Prisma.SelectSubset<T, product_mediaUpsertArgs<ExtArgs>>): Prisma.Prisma__product_mediaClient<runtime.Types.Result.GetResult<Prisma.$product_mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends product_mediaCountArgs>(args?: Prisma.Subset<T, product_mediaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Product_mediaCountAggregateOutputType> : number>;
    aggregate<T extends Product_mediaAggregateArgs>(args: Prisma.Subset<T, Product_mediaAggregateArgs>): Prisma.PrismaPromise<GetProduct_mediaAggregateType<T>>;
    groupBy<T extends product_mediaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: product_mediaGroupByArgs['orderBy'];
    } : {
        orderBy?: product_mediaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, product_mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_mediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: product_mediaFieldRefs;
}
export interface Prisma__product_mediaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Prisma.product_media$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_media$productsArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface product_mediaFieldRefs {
    readonly media_id: Prisma.FieldRef<"product_media", 'BigInt'>;
    readonly product_id: Prisma.FieldRef<"product_media", 'BigInt'>;
    readonly media_url: Prisma.FieldRef<"product_media", 'String'>;
    readonly media_type: Prisma.FieldRef<"product_media", 'product_media_media_type'>;
    readonly is_primary: Prisma.FieldRef<"product_media", 'Boolean'>;
}
export type product_mediaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_mediaSelect<ExtArgs> | null;
    omit?: Prisma.product_mediaOmit<ExtArgs> | null;
    include?: Prisma.product_mediaInclude<ExtArgs> | null;
    where: Prisma.product_mediaWhereUniqueInput;
};
export type product_mediaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_mediaSelect<ExtArgs> | null;
    omit?: Prisma.product_mediaOmit<ExtArgs> | null;
    include?: Prisma.product_mediaInclude<ExtArgs> | null;
    where: Prisma.product_mediaWhereUniqueInput;
};
export type product_mediaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_mediaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_mediaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_mediaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_mediaSelect<ExtArgs> | null;
    omit?: Prisma.product_mediaOmit<ExtArgs> | null;
    include?: Prisma.product_mediaInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.product_mediaCreateInput, Prisma.product_mediaUncheckedCreateInput>;
};
export type product_mediaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.product_mediaCreateManyInput | Prisma.product_mediaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type product_mediaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_mediaSelect<ExtArgs> | null;
    omit?: Prisma.product_mediaOmit<ExtArgs> | null;
    include?: Prisma.product_mediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_mediaUpdateInput, Prisma.product_mediaUncheckedUpdateInput>;
    where: Prisma.product_mediaWhereUniqueInput;
};
export type product_mediaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.product_mediaUpdateManyMutationInput, Prisma.product_mediaUncheckedUpdateManyInput>;
    where?: Prisma.product_mediaWhereInput;
    limit?: number;
};
export type product_mediaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_mediaSelect<ExtArgs> | null;
    omit?: Prisma.product_mediaOmit<ExtArgs> | null;
    include?: Prisma.product_mediaInclude<ExtArgs> | null;
    where: Prisma.product_mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_mediaCreateInput, Prisma.product_mediaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.product_mediaUpdateInput, Prisma.product_mediaUncheckedUpdateInput>;
};
export type product_mediaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_mediaSelect<ExtArgs> | null;
    omit?: Prisma.product_mediaOmit<ExtArgs> | null;
    include?: Prisma.product_mediaInclude<ExtArgs> | null;
    where: Prisma.product_mediaWhereUniqueInput;
};
export type product_mediaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_mediaWhereInput;
    limit?: number;
};
export type product_media$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
};
export type product_mediaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_mediaSelect<ExtArgs> | null;
    omit?: Prisma.product_mediaOmit<ExtArgs> | null;
    include?: Prisma.product_mediaInclude<ExtArgs> | null;
};
export {};
