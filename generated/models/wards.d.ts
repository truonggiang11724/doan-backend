import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type wardsModel = runtime.Types.Result.DefaultSelection<Prisma.$wardsPayload>;
export type AggregateWards = {
    _count: WardsCountAggregateOutputType | null;
    _avg: WardsAvgAggregateOutputType | null;
    _sum: WardsSumAggregateOutputType | null;
    _min: WardsMinAggregateOutputType | null;
    _max: WardsMaxAggregateOutputType | null;
};
export type WardsAvgAggregateOutputType = {
    id: number | null;
    province_id: number | null;
};
export type WardsSumAggregateOutputType = {
    id: number | null;
    province_id: number | null;
};
export type WardsMinAggregateOutputType = {
    id: number | null;
    province_id: number | null;
    name: string | null;
};
export type WardsMaxAggregateOutputType = {
    id: number | null;
    province_id: number | null;
    name: string | null;
};
export type WardsCountAggregateOutputType = {
    id: number;
    province_id: number;
    name: number;
    _all: number;
};
export type WardsAvgAggregateInputType = {
    id?: true;
    province_id?: true;
};
export type WardsSumAggregateInputType = {
    id?: true;
    province_id?: true;
};
export type WardsMinAggregateInputType = {
    id?: true;
    province_id?: true;
    name?: true;
};
export type WardsMaxAggregateInputType = {
    id?: true;
    province_id?: true;
    name?: true;
};
export type WardsCountAggregateInputType = {
    id?: true;
    province_id?: true;
    name?: true;
    _all?: true;
};
export type WardsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wardsWhereInput;
    orderBy?: Prisma.wardsOrderByWithRelationInput | Prisma.wardsOrderByWithRelationInput[];
    cursor?: Prisma.wardsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WardsCountAggregateInputType;
    _avg?: WardsAvgAggregateInputType;
    _sum?: WardsSumAggregateInputType;
    _min?: WardsMinAggregateInputType;
    _max?: WardsMaxAggregateInputType;
};
export type GetWardsAggregateType<T extends WardsAggregateArgs> = {
    [P in keyof T & keyof AggregateWards]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWards[P]> : Prisma.GetScalarType<T[P], AggregateWards[P]>;
};
export type wardsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wardsWhereInput;
    orderBy?: Prisma.wardsOrderByWithAggregationInput | Prisma.wardsOrderByWithAggregationInput[];
    by: Prisma.WardsScalarFieldEnum[] | Prisma.WardsScalarFieldEnum;
    having?: Prisma.wardsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WardsCountAggregateInputType | true;
    _avg?: WardsAvgAggregateInputType;
    _sum?: WardsSumAggregateInputType;
    _min?: WardsMinAggregateInputType;
    _max?: WardsMaxAggregateInputType;
};
export type WardsGroupByOutputType = {
    id: number;
    province_id: number;
    name: string;
    _count: WardsCountAggregateOutputType | null;
    _avg: WardsAvgAggregateOutputType | null;
    _sum: WardsSumAggregateOutputType | null;
    _min: WardsMinAggregateOutputType | null;
    _max: WardsMaxAggregateOutputType | null;
};
type GetWardsGroupByPayload<T extends wardsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WardsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WardsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WardsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WardsGroupByOutputType[P]>;
}>>;
export type wardsWhereInput = {
    AND?: Prisma.wardsWhereInput | Prisma.wardsWhereInput[];
    OR?: Prisma.wardsWhereInput[];
    NOT?: Prisma.wardsWhereInput | Prisma.wardsWhereInput[];
    id?: Prisma.IntFilter<"wards"> | number;
    province_id?: Prisma.IntFilter<"wards"> | number;
    name?: Prisma.StringFilter<"wards"> | string;
    orders?: Prisma.OrdersListRelationFilter;
    provinces?: Prisma.XOR<Prisma.ProvincesScalarRelationFilter, Prisma.provincesWhereInput>;
};
export type wardsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    province_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orders?: Prisma.ordersOrderByRelationAggregateInput;
    provinces?: Prisma.provincesOrderByWithRelationInput;
    _relevance?: Prisma.wardsOrderByRelevanceInput;
};
export type wardsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.wardsWhereInput | Prisma.wardsWhereInput[];
    OR?: Prisma.wardsWhereInput[];
    NOT?: Prisma.wardsWhereInput | Prisma.wardsWhereInput[];
    province_id?: Prisma.IntFilter<"wards"> | number;
    name?: Prisma.StringFilter<"wards"> | string;
    orders?: Prisma.OrdersListRelationFilter;
    provinces?: Prisma.XOR<Prisma.ProvincesScalarRelationFilter, Prisma.provincesWhereInput>;
}, "id">;
export type wardsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    province_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.wardsCountOrderByAggregateInput;
    _avg?: Prisma.wardsAvgOrderByAggregateInput;
    _max?: Prisma.wardsMaxOrderByAggregateInput;
    _min?: Prisma.wardsMinOrderByAggregateInput;
    _sum?: Prisma.wardsSumOrderByAggregateInput;
};
export type wardsScalarWhereWithAggregatesInput = {
    AND?: Prisma.wardsScalarWhereWithAggregatesInput | Prisma.wardsScalarWhereWithAggregatesInput[];
    OR?: Prisma.wardsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.wardsScalarWhereWithAggregatesInput | Prisma.wardsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"wards"> | number;
    province_id?: Prisma.IntWithAggregatesFilter<"wards"> | number;
    name?: Prisma.StringWithAggregatesFilter<"wards"> | string;
};
export type wardsCreateInput = {
    name: string;
    orders?: Prisma.ordersCreateNestedManyWithoutWardsInput;
    provinces: Prisma.provincesCreateNestedOneWithoutWardsInput;
};
export type wardsUncheckedCreateInput = {
    id?: number;
    province_id: number;
    name: string;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutWardsInput;
};
export type wardsUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orders?: Prisma.ordersUpdateManyWithoutWardsNestedInput;
    provinces?: Prisma.provincesUpdateOneRequiredWithoutWardsNestedInput;
};
export type wardsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    province_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutWardsNestedInput;
};
export type wardsCreateManyInput = {
    id?: number;
    province_id: number;
    name: string;
};
export type wardsUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wardsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    province_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type WardsNullableScalarRelationFilter = {
    is?: Prisma.wardsWhereInput | null;
    isNot?: Prisma.wardsWhereInput | null;
};
export type WardsListRelationFilter = {
    every?: Prisma.wardsWhereInput;
    some?: Prisma.wardsWhereInput;
    none?: Prisma.wardsWhereInput;
};
export type wardsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type wardsOrderByRelevanceInput = {
    fields: Prisma.wardsOrderByRelevanceFieldEnum | Prisma.wardsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type wardsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    province_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type wardsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    province_id?: Prisma.SortOrder;
};
export type wardsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    province_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type wardsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    province_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type wardsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    province_id?: Prisma.SortOrder;
};
export type wardsCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.wardsCreateWithoutOrdersInput, Prisma.wardsUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.wardsCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.wardsWhereUniqueInput;
};
export type wardsUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.wardsCreateWithoutOrdersInput, Prisma.wardsUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.wardsCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.wardsUpsertWithoutOrdersInput;
    disconnect?: Prisma.wardsWhereInput | boolean;
    delete?: Prisma.wardsWhereInput | boolean;
    connect?: Prisma.wardsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wardsUpdateToOneWithWhereWithoutOrdersInput, Prisma.wardsUpdateWithoutOrdersInput>, Prisma.wardsUncheckedUpdateWithoutOrdersInput>;
};
export type wardsCreateNestedManyWithoutProvincesInput = {
    create?: Prisma.XOR<Prisma.wardsCreateWithoutProvincesInput, Prisma.wardsUncheckedCreateWithoutProvincesInput> | Prisma.wardsCreateWithoutProvincesInput[] | Prisma.wardsUncheckedCreateWithoutProvincesInput[];
    connectOrCreate?: Prisma.wardsCreateOrConnectWithoutProvincesInput | Prisma.wardsCreateOrConnectWithoutProvincesInput[];
    createMany?: Prisma.wardsCreateManyProvincesInputEnvelope;
    connect?: Prisma.wardsWhereUniqueInput | Prisma.wardsWhereUniqueInput[];
};
export type wardsUncheckedCreateNestedManyWithoutProvincesInput = {
    create?: Prisma.XOR<Prisma.wardsCreateWithoutProvincesInput, Prisma.wardsUncheckedCreateWithoutProvincesInput> | Prisma.wardsCreateWithoutProvincesInput[] | Prisma.wardsUncheckedCreateWithoutProvincesInput[];
    connectOrCreate?: Prisma.wardsCreateOrConnectWithoutProvincesInput | Prisma.wardsCreateOrConnectWithoutProvincesInput[];
    createMany?: Prisma.wardsCreateManyProvincesInputEnvelope;
    connect?: Prisma.wardsWhereUniqueInput | Prisma.wardsWhereUniqueInput[];
};
export type wardsUpdateManyWithoutProvincesNestedInput = {
    create?: Prisma.XOR<Prisma.wardsCreateWithoutProvincesInput, Prisma.wardsUncheckedCreateWithoutProvincesInput> | Prisma.wardsCreateWithoutProvincesInput[] | Prisma.wardsUncheckedCreateWithoutProvincesInput[];
    connectOrCreate?: Prisma.wardsCreateOrConnectWithoutProvincesInput | Prisma.wardsCreateOrConnectWithoutProvincesInput[];
    upsert?: Prisma.wardsUpsertWithWhereUniqueWithoutProvincesInput | Prisma.wardsUpsertWithWhereUniqueWithoutProvincesInput[];
    createMany?: Prisma.wardsCreateManyProvincesInputEnvelope;
    set?: Prisma.wardsWhereUniqueInput | Prisma.wardsWhereUniqueInput[];
    disconnect?: Prisma.wardsWhereUniqueInput | Prisma.wardsWhereUniqueInput[];
    delete?: Prisma.wardsWhereUniqueInput | Prisma.wardsWhereUniqueInput[];
    connect?: Prisma.wardsWhereUniqueInput | Prisma.wardsWhereUniqueInput[];
    update?: Prisma.wardsUpdateWithWhereUniqueWithoutProvincesInput | Prisma.wardsUpdateWithWhereUniqueWithoutProvincesInput[];
    updateMany?: Prisma.wardsUpdateManyWithWhereWithoutProvincesInput | Prisma.wardsUpdateManyWithWhereWithoutProvincesInput[];
    deleteMany?: Prisma.wardsScalarWhereInput | Prisma.wardsScalarWhereInput[];
};
export type wardsUncheckedUpdateManyWithoutProvincesNestedInput = {
    create?: Prisma.XOR<Prisma.wardsCreateWithoutProvincesInput, Prisma.wardsUncheckedCreateWithoutProvincesInput> | Prisma.wardsCreateWithoutProvincesInput[] | Prisma.wardsUncheckedCreateWithoutProvincesInput[];
    connectOrCreate?: Prisma.wardsCreateOrConnectWithoutProvincesInput | Prisma.wardsCreateOrConnectWithoutProvincesInput[];
    upsert?: Prisma.wardsUpsertWithWhereUniqueWithoutProvincesInput | Prisma.wardsUpsertWithWhereUniqueWithoutProvincesInput[];
    createMany?: Prisma.wardsCreateManyProvincesInputEnvelope;
    set?: Prisma.wardsWhereUniqueInput | Prisma.wardsWhereUniqueInput[];
    disconnect?: Prisma.wardsWhereUniqueInput | Prisma.wardsWhereUniqueInput[];
    delete?: Prisma.wardsWhereUniqueInput | Prisma.wardsWhereUniqueInput[];
    connect?: Prisma.wardsWhereUniqueInput | Prisma.wardsWhereUniqueInput[];
    update?: Prisma.wardsUpdateWithWhereUniqueWithoutProvincesInput | Prisma.wardsUpdateWithWhereUniqueWithoutProvincesInput[];
    updateMany?: Prisma.wardsUpdateManyWithWhereWithoutProvincesInput | Prisma.wardsUpdateManyWithWhereWithoutProvincesInput[];
    deleteMany?: Prisma.wardsScalarWhereInput | Prisma.wardsScalarWhereInput[];
};
export type wardsCreateWithoutOrdersInput = {
    name: string;
    provinces: Prisma.provincesCreateNestedOneWithoutWardsInput;
};
export type wardsUncheckedCreateWithoutOrdersInput = {
    id?: number;
    province_id: number;
    name: string;
};
export type wardsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.wardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wardsCreateWithoutOrdersInput, Prisma.wardsUncheckedCreateWithoutOrdersInput>;
};
export type wardsUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.wardsUpdateWithoutOrdersInput, Prisma.wardsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.wardsCreateWithoutOrdersInput, Prisma.wardsUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.wardsWhereInput;
};
export type wardsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.wardsWhereInput;
    data: Prisma.XOR<Prisma.wardsUpdateWithoutOrdersInput, Prisma.wardsUncheckedUpdateWithoutOrdersInput>;
};
export type wardsUpdateWithoutOrdersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinces?: Prisma.provincesUpdateOneRequiredWithoutWardsNestedInput;
};
export type wardsUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    province_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wardsCreateWithoutProvincesInput = {
    name: string;
    orders?: Prisma.ordersCreateNestedManyWithoutWardsInput;
};
export type wardsUncheckedCreateWithoutProvincesInput = {
    id?: number;
    name: string;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutWardsInput;
};
export type wardsCreateOrConnectWithoutProvincesInput = {
    where: Prisma.wardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wardsCreateWithoutProvincesInput, Prisma.wardsUncheckedCreateWithoutProvincesInput>;
};
export type wardsCreateManyProvincesInputEnvelope = {
    data: Prisma.wardsCreateManyProvincesInput | Prisma.wardsCreateManyProvincesInput[];
    skipDuplicates?: boolean;
};
export type wardsUpsertWithWhereUniqueWithoutProvincesInput = {
    where: Prisma.wardsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wardsUpdateWithoutProvincesInput, Prisma.wardsUncheckedUpdateWithoutProvincesInput>;
    create: Prisma.XOR<Prisma.wardsCreateWithoutProvincesInput, Prisma.wardsUncheckedCreateWithoutProvincesInput>;
};
export type wardsUpdateWithWhereUniqueWithoutProvincesInput = {
    where: Prisma.wardsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wardsUpdateWithoutProvincesInput, Prisma.wardsUncheckedUpdateWithoutProvincesInput>;
};
export type wardsUpdateManyWithWhereWithoutProvincesInput = {
    where: Prisma.wardsScalarWhereInput;
    data: Prisma.XOR<Prisma.wardsUpdateManyMutationInput, Prisma.wardsUncheckedUpdateManyWithoutProvincesInput>;
};
export type wardsScalarWhereInput = {
    AND?: Prisma.wardsScalarWhereInput | Prisma.wardsScalarWhereInput[];
    OR?: Prisma.wardsScalarWhereInput[];
    NOT?: Prisma.wardsScalarWhereInput | Prisma.wardsScalarWhereInput[];
    id?: Prisma.IntFilter<"wards"> | number;
    province_id?: Prisma.IntFilter<"wards"> | number;
    name?: Prisma.StringFilter<"wards"> | string;
};
export type wardsCreateManyProvincesInput = {
    id?: number;
    name: string;
};
export type wardsUpdateWithoutProvincesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orders?: Prisma.ordersUpdateManyWithoutWardsNestedInput;
};
export type wardsUncheckedUpdateWithoutProvincesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutWardsNestedInput;
};
export type wardsUncheckedUpdateManyWithoutProvincesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type WardsCountOutputType = {
    orders: number;
};
export type WardsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | WardsCountOutputTypeCountOrdersArgs;
};
export type WardsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardsCountOutputTypeSelect<ExtArgs> | null;
};
export type WardsCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type wardsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    province_id?: boolean;
    name?: boolean;
    orders?: boolean | Prisma.wards$ordersArgs<ExtArgs>;
    provinces?: boolean | Prisma.provincesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.WardsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wards"]>;
export type wardsSelectScalar = {
    id?: boolean;
    province_id?: boolean;
    name?: boolean;
};
export type wardsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "province_id" | "name", ExtArgs["result"]["wards"]>;
export type wardsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.wards$ordersArgs<ExtArgs>;
    provinces?: boolean | Prisma.provincesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.WardsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $wardsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wards";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs>[];
        provinces: Prisma.$provincesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        province_id: number;
        name: string;
    }, ExtArgs["result"]["wards"]>;
    composites: {};
};
export type wardsGetPayload<S extends boolean | null | undefined | wardsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$wardsPayload, S>;
export type wardsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<wardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WardsCountAggregateInputType | true;
};
export interface wardsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wards'];
        meta: {
            name: 'wards';
        };
    };
    findUnique<T extends wardsFindUniqueArgs>(args: Prisma.SelectSubset<T, wardsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__wardsClient<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends wardsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, wardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__wardsClient<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends wardsFindFirstArgs>(args?: Prisma.SelectSubset<T, wardsFindFirstArgs<ExtArgs>>): Prisma.Prisma__wardsClient<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends wardsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, wardsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__wardsClient<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends wardsFindManyArgs>(args?: Prisma.SelectSubset<T, wardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends wardsCreateArgs>(args: Prisma.SelectSubset<T, wardsCreateArgs<ExtArgs>>): Prisma.Prisma__wardsClient<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends wardsCreateManyArgs>(args?: Prisma.SelectSubset<T, wardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends wardsDeleteArgs>(args: Prisma.SelectSubset<T, wardsDeleteArgs<ExtArgs>>): Prisma.Prisma__wardsClient<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends wardsUpdateArgs>(args: Prisma.SelectSubset<T, wardsUpdateArgs<ExtArgs>>): Prisma.Prisma__wardsClient<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends wardsDeleteManyArgs>(args?: Prisma.SelectSubset<T, wardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends wardsUpdateManyArgs>(args: Prisma.SelectSubset<T, wardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends wardsUpsertArgs>(args: Prisma.SelectSubset<T, wardsUpsertArgs<ExtArgs>>): Prisma.Prisma__wardsClient<runtime.Types.Result.GetResult<Prisma.$wardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends wardsCountArgs>(args?: Prisma.Subset<T, wardsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WardsCountAggregateOutputType> : number>;
    aggregate<T extends WardsAggregateArgs>(args: Prisma.Subset<T, WardsAggregateArgs>): Prisma.PrismaPromise<GetWardsAggregateType<T>>;
    groupBy<T extends wardsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: wardsGroupByArgs['orderBy'];
    } : {
        orderBy?: wardsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, wardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: wardsFieldRefs;
}
export interface Prisma__wardsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.wards$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wards$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    provinces<T extends Prisma.provincesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.provincesDefaultArgs<ExtArgs>>): Prisma.Prisma__provincesClient<runtime.Types.Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface wardsFieldRefs {
    readonly id: Prisma.FieldRef<"wards", 'Int'>;
    readonly province_id: Prisma.FieldRef<"wards", 'Int'>;
    readonly name: Prisma.FieldRef<"wards", 'String'>;
}
export type wardsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wardsSelect<ExtArgs> | null;
    omit?: Prisma.wardsOmit<ExtArgs> | null;
    include?: Prisma.wardsInclude<ExtArgs> | null;
    where: Prisma.wardsWhereUniqueInput;
};
export type wardsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wardsSelect<ExtArgs> | null;
    omit?: Prisma.wardsOmit<ExtArgs> | null;
    include?: Prisma.wardsInclude<ExtArgs> | null;
    where: Prisma.wardsWhereUniqueInput;
};
export type wardsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type wardsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type wardsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type wardsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wardsSelect<ExtArgs> | null;
    omit?: Prisma.wardsOmit<ExtArgs> | null;
    include?: Prisma.wardsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.wardsCreateInput, Prisma.wardsUncheckedCreateInput>;
};
export type wardsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.wardsCreateManyInput | Prisma.wardsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type wardsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wardsSelect<ExtArgs> | null;
    omit?: Prisma.wardsOmit<ExtArgs> | null;
    include?: Prisma.wardsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.wardsUpdateInput, Prisma.wardsUncheckedUpdateInput>;
    where: Prisma.wardsWhereUniqueInput;
};
export type wardsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.wardsUpdateManyMutationInput, Prisma.wardsUncheckedUpdateManyInput>;
    where?: Prisma.wardsWhereInput;
    limit?: number;
};
export type wardsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wardsSelect<ExtArgs> | null;
    omit?: Prisma.wardsOmit<ExtArgs> | null;
    include?: Prisma.wardsInclude<ExtArgs> | null;
    where: Prisma.wardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wardsCreateInput, Prisma.wardsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.wardsUpdateInput, Prisma.wardsUncheckedUpdateInput>;
};
export type wardsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wardsSelect<ExtArgs> | null;
    omit?: Prisma.wardsOmit<ExtArgs> | null;
    include?: Prisma.wardsInclude<ExtArgs> | null;
    where: Prisma.wardsWhereUniqueInput;
};
export type wardsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wardsWhereInput;
    limit?: number;
};
export type wards$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type wardsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wardsSelect<ExtArgs> | null;
    omit?: Prisma.wardsOmit<ExtArgs> | null;
    include?: Prisma.wardsInclude<ExtArgs> | null;
};
export {};
