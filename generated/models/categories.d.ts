import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type categoriesModel = runtime.Types.Result.DefaultSelection<Prisma.$categoriesPayload>;
export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
};
export type CategoriesAvgAggregateOutputType = {
    category_id: number | null;
};
export type CategoriesSumAggregateOutputType = {
    category_id: bigint | null;
};
export type CategoriesMinAggregateOutputType = {
    category_id: bigint | null;
    name: string | null;
    description: string | null;
    thumbnail: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CategoriesMaxAggregateOutputType = {
    category_id: bigint | null;
    name: string | null;
    description: string | null;
    thumbnail: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CategoriesCountAggregateOutputType = {
    category_id: number;
    name: number;
    description: number;
    thumbnail: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CategoriesAvgAggregateInputType = {
    category_id?: true;
};
export type CategoriesSumAggregateInputType = {
    category_id?: true;
};
export type CategoriesMinAggregateInputType = {
    category_id?: true;
    name?: true;
    description?: true;
    thumbnail?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type CategoriesMaxAggregateInputType = {
    category_id?: true;
    name?: true;
    description?: true;
    thumbnail?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type CategoriesCountAggregateInputType = {
    category_id?: true;
    name?: true;
    description?: true;
    thumbnail?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CategoriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriesCountAggregateInputType;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
};
export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategories[P]> : Prisma.GetScalarType<T[P], AggregateCategories[P]>;
};
export type categoriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithAggregationInput | Prisma.categoriesOrderByWithAggregationInput[];
    by: Prisma.CategoriesScalarFieldEnum[] | Prisma.CategoriesScalarFieldEnum;
    having?: Prisma.categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriesCountAggregateInputType | true;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
};
export type CategoriesGroupByOutputType = {
    category_id: bigint;
    name: string | null;
    description: string | null;
    thumbnail: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
};
type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriesGroupByOutputType[P]>;
}>>;
export type categoriesWhereInput = {
    AND?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    OR?: Prisma.categoriesWhereInput[];
    NOT?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    category_id?: Prisma.BigIntFilter<"categories"> | bigint | number;
    name?: Prisma.StringNullableFilter<"categories"> | string | null;
    description?: Prisma.StringNullableFilter<"categories"> | string | null;
    thumbnail?: Prisma.StringNullableFilter<"categories"> | string | null;
    status?: Prisma.StringNullableFilter<"categories"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"categories"> | Date | string | null;
    products?: Prisma.ProductsListRelationFilter;
};
export type categoriesOrderByWithRelationInput = {
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    thumbnail?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    products?: Prisma.productsOrderByRelationAggregateInput;
    _relevance?: Prisma.categoriesOrderByRelevanceInput;
};
export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: bigint | number;
    AND?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    OR?: Prisma.categoriesWhereInput[];
    NOT?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    name?: Prisma.StringNullableFilter<"categories"> | string | null;
    description?: Prisma.StringNullableFilter<"categories"> | string | null;
    thumbnail?: Prisma.StringNullableFilter<"categories"> | string | null;
    status?: Prisma.StringNullableFilter<"categories"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"categories"> | Date | string | null;
    products?: Prisma.ProductsListRelationFilter;
}, "category_id">;
export type categoriesOrderByWithAggregationInput = {
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    thumbnail?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.categoriesCountOrderByAggregateInput;
    _avg?: Prisma.categoriesAvgOrderByAggregateInput;
    _max?: Prisma.categoriesMaxOrderByAggregateInput;
    _min?: Prisma.categoriesMinOrderByAggregateInput;
    _sum?: Prisma.categoriesSumOrderByAggregateInput;
};
export type categoriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.categoriesScalarWhereWithAggregatesInput | Prisma.categoriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.categoriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.categoriesScalarWhereWithAggregatesInput | Prisma.categoriesScalarWhereWithAggregatesInput[];
    category_id?: Prisma.BigIntWithAggregatesFilter<"categories"> | bigint | number;
    name?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    thumbnail?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null;
};
export type categoriesCreateInput = {
    category_id?: bigint | number;
    name?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    products?: Prisma.productsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateInput = {
    category_id?: bigint | number;
    name?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    products?: Prisma.productsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUpdateInput = {
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.productsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateInput = {
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.productsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesCreateManyInput = {
    category_id?: bigint | number;
    name?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type categoriesUpdateManyMutationInput = {
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type categoriesUncheckedUpdateManyInput = {
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type categoriesOrderByRelevanceInput = {
    fields: Prisma.categoriesOrderByRelevanceFieldEnum | Prisma.categoriesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type categoriesCountOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    thumbnail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type categoriesAvgOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
};
export type categoriesMaxOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    thumbnail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type categoriesMinOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    thumbnail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type categoriesSumOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
};
export type CategoriesNullableScalarRelationFilter = {
    is?: Prisma.categoriesWhereInput | null;
    isNot?: Prisma.categoriesWhereInput | null;
};
export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutProductsInput, Prisma.categoriesUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutProductsInput;
    connect?: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateOneWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutProductsInput, Prisma.categoriesUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.categoriesUpsertWithoutProductsInput;
    disconnect?: Prisma.categoriesWhereInput | boolean;
    delete?: Prisma.categoriesWhereInput | boolean;
    connect?: Prisma.categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriesUpdateToOneWithWhereWithoutProductsInput, Prisma.categoriesUpdateWithoutProductsInput>, Prisma.categoriesUncheckedUpdateWithoutProductsInput>;
};
export type categoriesCreateWithoutProductsInput = {
    category_id?: bigint | number;
    name?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type categoriesUncheckedCreateWithoutProductsInput = {
    category_id?: bigint | number;
    name?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type categoriesCreateOrConnectWithoutProductsInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutProductsInput, Prisma.categoriesUncheckedCreateWithoutProductsInput>;
};
export type categoriesUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutProductsInput, Prisma.categoriesUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutProductsInput, Prisma.categoriesUncheckedCreateWithoutProductsInput>;
    where?: Prisma.categoriesWhereInput;
};
export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.categoriesWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutProductsInput, Prisma.categoriesUncheckedUpdateWithoutProductsInput>;
};
export type categoriesUpdateWithoutProductsInput = {
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type categoriesUncheckedUpdateWithoutProductsInput = {
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    thumbnail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CategoriesCountOutputType = {
    products: number;
};
export type CategoriesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs;
};
export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriesCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
};
export type categoriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    category_id?: boolean;
    name?: boolean;
    description?: boolean;
    thumbnail?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    products?: boolean | Prisma.categories$productsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categories"]>;
export type categoriesSelectScalar = {
    category_id?: boolean;
    name?: boolean;
    description?: boolean;
    thumbnail?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type categoriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"category_id" | "name" | "description" | "thumbnail" | "status" | "created_at" | "updated_at", ExtArgs["result"]["categories"]>;
export type categoriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.categories$productsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $categoriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "categories";
    objects: {
        products: Prisma.$productsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        category_id: bigint;
        name: string | null;
        description: string | null;
        thumbnail: string | null;
        status: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["categories"]>;
    composites: {};
};
export type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$categoriesPayload, S>;
export type categoriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriesCountAggregateInputType | true;
};
export interface categoriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['categories'];
        meta: {
            name: 'categories';
        };
    };
    findUnique<T extends categoriesFindUniqueArgs>(args: Prisma.SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends categoriesFindFirstArgs>(args?: Prisma.SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends categoriesFindManyArgs>(args?: Prisma.SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends categoriesCreateArgs>(args: Prisma.SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends categoriesCreateManyArgs>(args?: Prisma.SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends categoriesDeleteArgs>(args: Prisma.SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends categoriesUpdateArgs>(args: Prisma.SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends categoriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends categoriesUpdateManyArgs>(args: Prisma.SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends categoriesUpsertArgs>(args: Prisma.SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends categoriesCountArgs>(args?: Prisma.Subset<T, categoriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriesCountAggregateOutputType> : number>;
    aggregate<T extends CategoriesAggregateArgs>(args: Prisma.Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>;
    groupBy<T extends categoriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: categoriesGroupByArgs['orderBy'];
    } : {
        orderBy?: categoriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: categoriesFieldRefs;
}
export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Prisma.categories$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface categoriesFieldRefs {
    readonly category_id: Prisma.FieldRef<"categories", 'BigInt'>;
    readonly name: Prisma.FieldRef<"categories", 'String'>;
    readonly description: Prisma.FieldRef<"categories", 'String'>;
    readonly thumbnail: Prisma.FieldRef<"categories", 'String'>;
    readonly status: Prisma.FieldRef<"categories", 'String'>;
    readonly created_at: Prisma.FieldRef<"categories", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"categories", 'DateTime'>;
}
export type categoriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.categoriesCreateInput, Prisma.categoriesUncheckedCreateInput>;
};
export type categoriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.categoriesCreateManyInput | Prisma.categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesUpdateInput, Prisma.categoriesUncheckedUpdateInput>;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.categoriesUpdateManyMutationInput, Prisma.categoriesUncheckedUpdateManyInput>;
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categoriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateInput, Prisma.categoriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.categoriesUpdateInput, Prisma.categoriesUncheckedUpdateInput>;
};
export type categoriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categories$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type categoriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
};
export {};
