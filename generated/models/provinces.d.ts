import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type provincesModel = runtime.Types.Result.DefaultSelection<Prisma.$provincesPayload>;
export type AggregateProvinces = {
    _count: ProvincesCountAggregateOutputType | null;
    _avg: ProvincesAvgAggregateOutputType | null;
    _sum: ProvincesSumAggregateOutputType | null;
    _min: ProvincesMinAggregateOutputType | null;
    _max: ProvincesMaxAggregateOutputType | null;
};
export type ProvincesAvgAggregateOutputType = {
    id: number | null;
};
export type ProvincesSumAggregateOutputType = {
    id: number | null;
};
export type ProvincesMinAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type ProvincesMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type ProvincesCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type ProvincesAvgAggregateInputType = {
    id?: true;
};
export type ProvincesSumAggregateInputType = {
    id?: true;
};
export type ProvincesMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type ProvincesMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type ProvincesCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type ProvincesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.provincesWhereInput;
    orderBy?: Prisma.provincesOrderByWithRelationInput | Prisma.provincesOrderByWithRelationInput[];
    cursor?: Prisma.provincesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProvincesCountAggregateInputType;
    _avg?: ProvincesAvgAggregateInputType;
    _sum?: ProvincesSumAggregateInputType;
    _min?: ProvincesMinAggregateInputType;
    _max?: ProvincesMaxAggregateInputType;
};
export type GetProvincesAggregateType<T extends ProvincesAggregateArgs> = {
    [P in keyof T & keyof AggregateProvinces]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProvinces[P]> : Prisma.GetScalarType<T[P], AggregateProvinces[P]>;
};
export type provincesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.provincesWhereInput;
    orderBy?: Prisma.provincesOrderByWithAggregationInput | Prisma.provincesOrderByWithAggregationInput[];
    by: Prisma.ProvincesScalarFieldEnum[] | Prisma.ProvincesScalarFieldEnum;
    having?: Prisma.provincesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProvincesCountAggregateInputType | true;
    _avg?: ProvincesAvgAggregateInputType;
    _sum?: ProvincesSumAggregateInputType;
    _min?: ProvincesMinAggregateInputType;
    _max?: ProvincesMaxAggregateInputType;
};
export type ProvincesGroupByOutputType = {
    id: number;
    name: string;
    _count: ProvincesCountAggregateOutputType | null;
    _avg: ProvincesAvgAggregateOutputType | null;
    _sum: ProvincesSumAggregateOutputType | null;
    _min: ProvincesMinAggregateOutputType | null;
    _max: ProvincesMaxAggregateOutputType | null;
};
type GetProvincesGroupByPayload<T extends provincesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProvincesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProvincesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProvincesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProvincesGroupByOutputType[P]>;
}>>;
export type provincesWhereInput = {
    AND?: Prisma.provincesWhereInput | Prisma.provincesWhereInput[];
    OR?: Prisma.provincesWhereInput[];
    NOT?: Prisma.provincesWhereInput | Prisma.provincesWhereInput[];
    id?: Prisma.IntFilter<"provinces"> | number;
    name?: Prisma.StringFilter<"provinces"> | string;
    wards?: Prisma.WardsListRelationFilter;
};
export type provincesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    wards?: Prisma.wardsOrderByRelationAggregateInput;
    _relevance?: Prisma.provincesOrderByRelevanceInput;
};
export type provincesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.provincesWhereInput | Prisma.provincesWhereInput[];
    OR?: Prisma.provincesWhereInput[];
    NOT?: Prisma.provincesWhereInput | Prisma.provincesWhereInput[];
    name?: Prisma.StringFilter<"provinces"> | string;
    wards?: Prisma.WardsListRelationFilter;
}, "id">;
export type provincesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.provincesCountOrderByAggregateInput;
    _avg?: Prisma.provincesAvgOrderByAggregateInput;
    _max?: Prisma.provincesMaxOrderByAggregateInput;
    _min?: Prisma.provincesMinOrderByAggregateInput;
    _sum?: Prisma.provincesSumOrderByAggregateInput;
};
export type provincesScalarWhereWithAggregatesInput = {
    AND?: Prisma.provincesScalarWhereWithAggregatesInput | Prisma.provincesScalarWhereWithAggregatesInput[];
    OR?: Prisma.provincesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.provincesScalarWhereWithAggregatesInput | Prisma.provincesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"provinces"> | number;
    name?: Prisma.StringWithAggregatesFilter<"provinces"> | string;
};
export type provincesCreateInput = {
    name: string;
    wards?: Prisma.wardsCreateNestedManyWithoutProvincesInput;
};
export type provincesUncheckedCreateInput = {
    id?: number;
    name: string;
    wards?: Prisma.wardsUncheckedCreateNestedManyWithoutProvincesInput;
};
export type provincesUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wards?: Prisma.wardsUpdateManyWithoutProvincesNestedInput;
};
export type provincesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wards?: Prisma.wardsUncheckedUpdateManyWithoutProvincesNestedInput;
};
export type provincesCreateManyInput = {
    id?: number;
    name: string;
};
export type provincesUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type provincesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type provincesOrderByRelevanceInput = {
    fields: Prisma.provincesOrderByRelevanceFieldEnum | Prisma.provincesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type provincesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type provincesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type provincesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type provincesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type provincesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProvincesScalarRelationFilter = {
    is?: Prisma.provincesWhereInput;
    isNot?: Prisma.provincesWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type provincesCreateNestedOneWithoutWardsInput = {
    create?: Prisma.XOR<Prisma.provincesCreateWithoutWardsInput, Prisma.provincesUncheckedCreateWithoutWardsInput>;
    connectOrCreate?: Prisma.provincesCreateOrConnectWithoutWardsInput;
    connect?: Prisma.provincesWhereUniqueInput;
};
export type provincesUpdateOneRequiredWithoutWardsNestedInput = {
    create?: Prisma.XOR<Prisma.provincesCreateWithoutWardsInput, Prisma.provincesUncheckedCreateWithoutWardsInput>;
    connectOrCreate?: Prisma.provincesCreateOrConnectWithoutWardsInput;
    upsert?: Prisma.provincesUpsertWithoutWardsInput;
    connect?: Prisma.provincesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.provincesUpdateToOneWithWhereWithoutWardsInput, Prisma.provincesUpdateWithoutWardsInput>, Prisma.provincesUncheckedUpdateWithoutWardsInput>;
};
export type provincesCreateWithoutWardsInput = {
    name: string;
};
export type provincesUncheckedCreateWithoutWardsInput = {
    id?: number;
    name: string;
};
export type provincesCreateOrConnectWithoutWardsInput = {
    where: Prisma.provincesWhereUniqueInput;
    create: Prisma.XOR<Prisma.provincesCreateWithoutWardsInput, Prisma.provincesUncheckedCreateWithoutWardsInput>;
};
export type provincesUpsertWithoutWardsInput = {
    update: Prisma.XOR<Prisma.provincesUpdateWithoutWardsInput, Prisma.provincesUncheckedUpdateWithoutWardsInput>;
    create: Prisma.XOR<Prisma.provincesCreateWithoutWardsInput, Prisma.provincesUncheckedCreateWithoutWardsInput>;
    where?: Prisma.provincesWhereInput;
};
export type provincesUpdateToOneWithWhereWithoutWardsInput = {
    where?: Prisma.provincesWhereInput;
    data: Prisma.XOR<Prisma.provincesUpdateWithoutWardsInput, Prisma.provincesUncheckedUpdateWithoutWardsInput>;
};
export type provincesUpdateWithoutWardsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type provincesUncheckedUpdateWithoutWardsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProvincesCountOutputType = {
    wards: number;
};
export type ProvincesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wards?: boolean | ProvincesCountOutputTypeCountWardsArgs;
};
export type ProvincesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvincesCountOutputTypeSelect<ExtArgs> | null;
};
export type ProvincesCountOutputTypeCountWardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wardsWhereInput;
};
export type provincesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    wards?: boolean | Prisma.provinces$wardsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProvincesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["provinces"]>;
export type provincesSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type provincesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["provinces"]>;
export type provincesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wards?: boolean | Prisma.provinces$wardsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProvincesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $provincesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "provinces";
    objects: {
        wards: Prisma.$wardsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
    }, ExtArgs["result"]["provinces"]>;
    composites: {};
};
export type provincesGetPayload<S extends boolean | null | undefined | provincesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$provincesPayload, S>;
export type provincesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<provincesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProvincesCountAggregateInputType | true;
};
export interface provincesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['provinces'];
        meta: {
            name: 'provinces';
        };
    };
    findUnique<T extends provincesFindUniqueArgs>(args: Prisma.SelectSubset<T, provincesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__provincesClient<runtime.Types.Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends provincesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, provincesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__provincesClient<runtime.Types.Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends provincesFindFirstArgs>(args?: Prisma.SelectSubset<T, provincesFindFirstArgs<ExtArgs>>): Prisma.Prisma__provincesClient<runtime.Types.Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends provincesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, provincesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__provincesClient<runtime.Types.Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends provincesFindManyArgs>(args?: Prisma.SelectSubset<T, provincesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends provincesCreateArgs>(args: Prisma.SelectSubset<T, provincesCreateArgs<ExtArgs>>): Prisma.Prisma__provincesClient<runtime.Types.Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends provincesCreateManyArgs>(args?: Prisma.SelectSubset<T, provincesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends provincesDeleteArgs>(args: Prisma.SelectSubset<T, provincesDeleteArgs<ExtArgs>>): Prisma.Prisma__provincesClient<runtime.Types.Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends provincesUpdateArgs>(args: Prisma.SelectSubset<T, provincesUpdateArgs<ExtArgs>>): Prisma.Prisma__provincesClient<runtime.Types.Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends provincesDeleteManyArgs>(args?: Prisma.SelectSubset<T, provincesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends provincesUpdateManyArgs>(args: Prisma.SelectSubset<T, provincesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends provincesUpsertArgs>(args: Prisma.SelectSubset<T, provincesUpsertArgs<ExtArgs>>): Prisma.Prisma__provincesClient<runtime.Types.Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends provincesCountArgs>(args?: Prisma.Subset<T, provincesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProvincesCountAggregateOutputType> : number>;
    aggregate<T extends ProvincesAggregateArgs>(args: Prisma.Subset<T, ProvincesAggregateArgs>): Prisma.PrismaPromise<GetProvincesAggregateType<T>>;
    groupBy<T extends provincesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: provincesGroupByArgs['orderBy'];
    } : {
        orderBy?: provincesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, provincesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvincesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: provincesFieldRefs;
}
export interface Prisma__provincesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wards<T extends Prisma.provinces$wardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.provinces$wardsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface provincesFieldRefs {
    readonly id: Prisma.FieldRef<"provinces", 'Int'>;
    readonly name: Prisma.FieldRef<"provinces", 'String'>;
}
export type provincesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provincesSelect<ExtArgs> | null;
    omit?: Prisma.provincesOmit<ExtArgs> | null;
    include?: Prisma.provincesInclude<ExtArgs> | null;
    where: Prisma.provincesWhereUniqueInput;
};
export type provincesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provincesSelect<ExtArgs> | null;
    omit?: Prisma.provincesOmit<ExtArgs> | null;
    include?: Prisma.provincesInclude<ExtArgs> | null;
    where: Prisma.provincesWhereUniqueInput;
};
export type provincesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provincesSelect<ExtArgs> | null;
    omit?: Prisma.provincesOmit<ExtArgs> | null;
    include?: Prisma.provincesInclude<ExtArgs> | null;
    where?: Prisma.provincesWhereInput;
    orderBy?: Prisma.provincesOrderByWithRelationInput | Prisma.provincesOrderByWithRelationInput[];
    cursor?: Prisma.provincesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvincesScalarFieldEnum | Prisma.ProvincesScalarFieldEnum[];
};
export type provincesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provincesSelect<ExtArgs> | null;
    omit?: Prisma.provincesOmit<ExtArgs> | null;
    include?: Prisma.provincesInclude<ExtArgs> | null;
    where?: Prisma.provincesWhereInput;
    orderBy?: Prisma.provincesOrderByWithRelationInput | Prisma.provincesOrderByWithRelationInput[];
    cursor?: Prisma.provincesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvincesScalarFieldEnum | Prisma.ProvincesScalarFieldEnum[];
};
export type provincesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provincesSelect<ExtArgs> | null;
    omit?: Prisma.provincesOmit<ExtArgs> | null;
    include?: Prisma.provincesInclude<ExtArgs> | null;
    where?: Prisma.provincesWhereInput;
    orderBy?: Prisma.provincesOrderByWithRelationInput | Prisma.provincesOrderByWithRelationInput[];
    cursor?: Prisma.provincesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvincesScalarFieldEnum | Prisma.ProvincesScalarFieldEnum[];
};
export type provincesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provincesSelect<ExtArgs> | null;
    omit?: Prisma.provincesOmit<ExtArgs> | null;
    include?: Prisma.provincesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.provincesCreateInput, Prisma.provincesUncheckedCreateInput>;
};
export type provincesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.provincesCreateManyInput | Prisma.provincesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type provincesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provincesSelect<ExtArgs> | null;
    omit?: Prisma.provincesOmit<ExtArgs> | null;
    include?: Prisma.provincesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.provincesUpdateInput, Prisma.provincesUncheckedUpdateInput>;
    where: Prisma.provincesWhereUniqueInput;
};
export type provincesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.provincesUpdateManyMutationInput, Prisma.provincesUncheckedUpdateManyInput>;
    where?: Prisma.provincesWhereInput;
    limit?: number;
};
export type provincesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provincesSelect<ExtArgs> | null;
    omit?: Prisma.provincesOmit<ExtArgs> | null;
    include?: Prisma.provincesInclude<ExtArgs> | null;
    where: Prisma.provincesWhereUniqueInput;
    create: Prisma.XOR<Prisma.provincesCreateInput, Prisma.provincesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.provincesUpdateInput, Prisma.provincesUncheckedUpdateInput>;
};
export type provincesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provincesSelect<ExtArgs> | null;
    omit?: Prisma.provincesOmit<ExtArgs> | null;
    include?: Prisma.provincesInclude<ExtArgs> | null;
    where: Prisma.provincesWhereUniqueInput;
};
export type provincesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.provincesWhereInput;
    limit?: number;
};
export type provinces$wardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wardsSelect<ExtArgs> | null;
    omit?: Prisma.wardsOmit<ExtArgs> | null;
    include?: Prisma.wardsInclude<ExtArgs> | null;
    where?: Prisma.wardsWhereInput;
    orderBy?: Prisma.wardsOrderByWithRelationInput | Prisma.wardsOrderByWithRelationInput[];
    cursor?: Prisma.wardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WardsScalarFieldEnum | Prisma.WardsScalarFieldEnum[];
};
export type provincesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provincesSelect<ExtArgs> | null;
    omit?: Prisma.provincesOmit<ExtArgs> | null;
    include?: Prisma.provincesInclude<ExtArgs> | null;
};
export {};
