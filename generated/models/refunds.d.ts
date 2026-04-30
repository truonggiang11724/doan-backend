import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type refundsModel = runtime.Types.Result.DefaultSelection<Prisma.$refundsPayload>;
export type AggregateRefunds = {
    _count: RefundsCountAggregateOutputType | null;
    _avg: RefundsAvgAggregateOutputType | null;
    _sum: RefundsSumAggregateOutputType | null;
    _min: RefundsMinAggregateOutputType | null;
    _max: RefundsMaxAggregateOutputType | null;
};
export type RefundsAvgAggregateOutputType = {
    id: number | null;
    order_id: number | null;
};
export type RefundsSumAggregateOutputType = {
    id: number | null;
    order_id: bigint | null;
};
export type RefundsMinAggregateOutputType = {
    id: number | null;
    order_id: bigint | null;
    reason: string | null;
    status: $Enums.refunds_status | null;
    created_at: Date | null;
};
export type RefundsMaxAggregateOutputType = {
    id: number | null;
    order_id: bigint | null;
    reason: string | null;
    status: $Enums.refunds_status | null;
    created_at: Date | null;
};
export type RefundsCountAggregateOutputType = {
    id: number;
    order_id: number;
    reason: number;
    status: number;
    created_at: number;
    _all: number;
};
export type RefundsAvgAggregateInputType = {
    id?: true;
    order_id?: true;
};
export type RefundsSumAggregateInputType = {
    id?: true;
    order_id?: true;
};
export type RefundsMinAggregateInputType = {
    id?: true;
    order_id?: true;
    reason?: true;
    status?: true;
    created_at?: true;
};
export type RefundsMaxAggregateInputType = {
    id?: true;
    order_id?: true;
    reason?: true;
    status?: true;
    created_at?: true;
};
export type RefundsCountAggregateInputType = {
    id?: true;
    order_id?: true;
    reason?: true;
    status?: true;
    created_at?: true;
    _all?: true;
};
export type RefundsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refundsWhereInput;
    orderBy?: Prisma.refundsOrderByWithRelationInput | Prisma.refundsOrderByWithRelationInput[];
    cursor?: Prisma.refundsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RefundsCountAggregateInputType;
    _avg?: RefundsAvgAggregateInputType;
    _sum?: RefundsSumAggregateInputType;
    _min?: RefundsMinAggregateInputType;
    _max?: RefundsMaxAggregateInputType;
};
export type GetRefundsAggregateType<T extends RefundsAggregateArgs> = {
    [P in keyof T & keyof AggregateRefunds]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRefunds[P]> : Prisma.GetScalarType<T[P], AggregateRefunds[P]>;
};
export type refundsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refundsWhereInput;
    orderBy?: Prisma.refundsOrderByWithAggregationInput | Prisma.refundsOrderByWithAggregationInput[];
    by: Prisma.RefundsScalarFieldEnum[] | Prisma.RefundsScalarFieldEnum;
    having?: Prisma.refundsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefundsCountAggregateInputType | true;
    _avg?: RefundsAvgAggregateInputType;
    _sum?: RefundsSumAggregateInputType;
    _min?: RefundsMinAggregateInputType;
    _max?: RefundsMaxAggregateInputType;
};
export type RefundsGroupByOutputType = {
    id: number;
    order_id: bigint;
    reason: string | null;
    status: $Enums.refunds_status | null;
    created_at: Date | null;
    _count: RefundsCountAggregateOutputType | null;
    _avg: RefundsAvgAggregateOutputType | null;
    _sum: RefundsSumAggregateOutputType | null;
    _min: RefundsMinAggregateOutputType | null;
    _max: RefundsMaxAggregateOutputType | null;
};
type GetRefundsGroupByPayload<T extends refundsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RefundsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RefundsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RefundsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RefundsGroupByOutputType[P]>;
}>>;
export type refundsWhereInput = {
    AND?: Prisma.refundsWhereInput | Prisma.refundsWhereInput[];
    OR?: Prisma.refundsWhereInput[];
    NOT?: Prisma.refundsWhereInput | Prisma.refundsWhereInput[];
    id?: Prisma.IntFilter<"refunds"> | number;
    order_id?: Prisma.BigIntFilter<"refunds"> | bigint | number;
    reason?: Prisma.StringNullableFilter<"refunds"> | string | null;
    status?: Prisma.Enumrefunds_statusNullableFilter<"refunds"> | $Enums.refunds_status | null;
    created_at?: Prisma.DateTimeNullableFilter<"refunds"> | Date | string | null;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
};
export type refundsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByWithRelationInput;
    _relevance?: Prisma.refundsOrderByRelevanceInput;
};
export type refundsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.refundsWhereInput | Prisma.refundsWhereInput[];
    OR?: Prisma.refundsWhereInput[];
    NOT?: Prisma.refundsWhereInput | Prisma.refundsWhereInput[];
    order_id?: Prisma.BigIntFilter<"refunds"> | bigint | number;
    reason?: Prisma.StringNullableFilter<"refunds"> | string | null;
    status?: Prisma.Enumrefunds_statusNullableFilter<"refunds"> | $Enums.refunds_status | null;
    created_at?: Prisma.DateTimeNullableFilter<"refunds"> | Date | string | null;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
}, "id">;
export type refundsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.refundsCountOrderByAggregateInput;
    _avg?: Prisma.refundsAvgOrderByAggregateInput;
    _max?: Prisma.refundsMaxOrderByAggregateInput;
    _min?: Prisma.refundsMinOrderByAggregateInput;
    _sum?: Prisma.refundsSumOrderByAggregateInput;
};
export type refundsScalarWhereWithAggregatesInput = {
    AND?: Prisma.refundsScalarWhereWithAggregatesInput | Prisma.refundsScalarWhereWithAggregatesInput[];
    OR?: Prisma.refundsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.refundsScalarWhereWithAggregatesInput | Prisma.refundsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"refunds"> | number;
    order_id?: Prisma.BigIntWithAggregatesFilter<"refunds"> | bigint | number;
    reason?: Prisma.StringNullableWithAggregatesFilter<"refunds"> | string | null;
    status?: Prisma.Enumrefunds_statusNullableWithAggregatesFilter<"refunds"> | $Enums.refunds_status | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"refunds"> | Date | string | null;
};
export type refundsCreateInput = {
    reason?: string | null;
    status?: $Enums.refunds_status | null;
    created_at?: Date | string | null;
    orders: Prisma.ordersCreateNestedOneWithoutRefundsInput;
};
export type refundsUncheckedCreateInput = {
    id?: number;
    order_id: bigint | number;
    reason?: string | null;
    status?: $Enums.refunds_status | null;
    created_at?: Date | string | null;
};
export type refundsUpdateInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumrefunds_statusFieldUpdateOperationsInput | $Enums.refunds_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneRequiredWithoutRefundsNestedInput;
};
export type refundsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumrefunds_statusFieldUpdateOperationsInput | $Enums.refunds_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type refundsCreateManyInput = {
    id?: number;
    order_id: bigint | number;
    reason?: string | null;
    status?: $Enums.refunds_status | null;
    created_at?: Date | string | null;
};
export type refundsUpdateManyMutationInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumrefunds_statusFieldUpdateOperationsInput | $Enums.refunds_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type refundsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumrefunds_statusFieldUpdateOperationsInput | $Enums.refunds_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RefundsListRelationFilter = {
    every?: Prisma.refundsWhereInput;
    some?: Prisma.refundsWhereInput;
    none?: Prisma.refundsWhereInput;
};
export type refundsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type refundsOrderByRelevanceInput = {
    fields: Prisma.refundsOrderByRelevanceFieldEnum | Prisma.refundsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type refundsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type refundsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type refundsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type refundsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type refundsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type refundsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.refundsCreateWithoutOrdersInput, Prisma.refundsUncheckedCreateWithoutOrdersInput> | Prisma.refundsCreateWithoutOrdersInput[] | Prisma.refundsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.refundsCreateOrConnectWithoutOrdersInput | Prisma.refundsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.refundsCreateManyOrdersInputEnvelope;
    connect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
};
export type refundsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.refundsCreateWithoutOrdersInput, Prisma.refundsUncheckedCreateWithoutOrdersInput> | Prisma.refundsCreateWithoutOrdersInput[] | Prisma.refundsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.refundsCreateOrConnectWithoutOrdersInput | Prisma.refundsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.refundsCreateManyOrdersInputEnvelope;
    connect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
};
export type refundsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.refundsCreateWithoutOrdersInput, Prisma.refundsUncheckedCreateWithoutOrdersInput> | Prisma.refundsCreateWithoutOrdersInput[] | Prisma.refundsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.refundsCreateOrConnectWithoutOrdersInput | Prisma.refundsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.refundsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.refundsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.refundsCreateManyOrdersInputEnvelope;
    set?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    disconnect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    delete?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    connect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    update?: Prisma.refundsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.refundsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.refundsUpdateManyWithWhereWithoutOrdersInput | Prisma.refundsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.refundsScalarWhereInput | Prisma.refundsScalarWhereInput[];
};
export type refundsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.refundsCreateWithoutOrdersInput, Prisma.refundsUncheckedCreateWithoutOrdersInput> | Prisma.refundsCreateWithoutOrdersInput[] | Prisma.refundsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.refundsCreateOrConnectWithoutOrdersInput | Prisma.refundsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.refundsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.refundsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.refundsCreateManyOrdersInputEnvelope;
    set?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    disconnect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    delete?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    connect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    update?: Prisma.refundsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.refundsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.refundsUpdateManyWithWhereWithoutOrdersInput | Prisma.refundsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.refundsScalarWhereInput | Prisma.refundsScalarWhereInput[];
};
export type NullableEnumrefunds_statusFieldUpdateOperationsInput = {
    set?: $Enums.refunds_status | null;
};
export type refundsCreateWithoutOrdersInput = {
    reason?: string | null;
    status?: $Enums.refunds_status | null;
    created_at?: Date | string | null;
};
export type refundsUncheckedCreateWithoutOrdersInput = {
    id?: number;
    reason?: string | null;
    status?: $Enums.refunds_status | null;
    created_at?: Date | string | null;
};
export type refundsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.refundsWhereUniqueInput;
    create: Prisma.XOR<Prisma.refundsCreateWithoutOrdersInput, Prisma.refundsUncheckedCreateWithoutOrdersInput>;
};
export type refundsCreateManyOrdersInputEnvelope = {
    data: Prisma.refundsCreateManyOrdersInput | Prisma.refundsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type refundsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.refundsWhereUniqueInput;
    update: Prisma.XOR<Prisma.refundsUpdateWithoutOrdersInput, Prisma.refundsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.refundsCreateWithoutOrdersInput, Prisma.refundsUncheckedCreateWithoutOrdersInput>;
};
export type refundsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.refundsWhereUniqueInput;
    data: Prisma.XOR<Prisma.refundsUpdateWithoutOrdersInput, Prisma.refundsUncheckedUpdateWithoutOrdersInput>;
};
export type refundsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.refundsScalarWhereInput;
    data: Prisma.XOR<Prisma.refundsUpdateManyMutationInput, Prisma.refundsUncheckedUpdateManyWithoutOrdersInput>;
};
export type refundsScalarWhereInput = {
    AND?: Prisma.refundsScalarWhereInput | Prisma.refundsScalarWhereInput[];
    OR?: Prisma.refundsScalarWhereInput[];
    NOT?: Prisma.refundsScalarWhereInput | Prisma.refundsScalarWhereInput[];
    id?: Prisma.IntFilter<"refunds"> | number;
    order_id?: Prisma.BigIntFilter<"refunds"> | bigint | number;
    reason?: Prisma.StringNullableFilter<"refunds"> | string | null;
    status?: Prisma.Enumrefunds_statusNullableFilter<"refunds"> | $Enums.refunds_status | null;
    created_at?: Prisma.DateTimeNullableFilter<"refunds"> | Date | string | null;
};
export type refundsCreateManyOrdersInput = {
    id?: number;
    reason?: string | null;
    status?: $Enums.refunds_status | null;
    created_at?: Date | string | null;
};
export type refundsUpdateWithoutOrdersInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumrefunds_statusFieldUpdateOperationsInput | $Enums.refunds_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type refundsUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumrefunds_statusFieldUpdateOperationsInput | $Enums.refunds_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type refundsUncheckedUpdateManyWithoutOrdersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableEnumrefunds_statusFieldUpdateOperationsInput | $Enums.refunds_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type refundsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    reason?: boolean;
    status?: boolean;
    created_at?: boolean;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refunds"]>;
export type refundsSelectScalar = {
    id?: boolean;
    order_id?: boolean;
    reason?: boolean;
    status?: boolean;
    created_at?: boolean;
};
export type refundsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "order_id" | "reason" | "status" | "created_at", ExtArgs["result"]["refunds"]>;
export type refundsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type $refundsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "refunds";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        order_id: bigint;
        reason: string | null;
        status: $Enums.refunds_status | null;
        created_at: Date | null;
    }, ExtArgs["result"]["refunds"]>;
    composites: {};
};
export type refundsGetPayload<S extends boolean | null | undefined | refundsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$refundsPayload, S>;
export type refundsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<refundsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RefundsCountAggregateInputType | true;
};
export interface refundsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['refunds'];
        meta: {
            name: 'refunds';
        };
    };
    findUnique<T extends refundsFindUniqueArgs>(args: Prisma.SelectSubset<T, refundsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends refundsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, refundsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends refundsFindFirstArgs>(args?: Prisma.SelectSubset<T, refundsFindFirstArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends refundsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, refundsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends refundsFindManyArgs>(args?: Prisma.SelectSubset<T, refundsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends refundsCreateArgs>(args: Prisma.SelectSubset<T, refundsCreateArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends refundsCreateManyArgs>(args?: Prisma.SelectSubset<T, refundsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends refundsDeleteArgs>(args: Prisma.SelectSubset<T, refundsDeleteArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends refundsUpdateArgs>(args: Prisma.SelectSubset<T, refundsUpdateArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends refundsDeleteManyArgs>(args?: Prisma.SelectSubset<T, refundsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends refundsUpdateManyArgs>(args: Prisma.SelectSubset<T, refundsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends refundsUpsertArgs>(args: Prisma.SelectSubset<T, refundsUpsertArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends refundsCountArgs>(args?: Prisma.Subset<T, refundsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RefundsCountAggregateOutputType> : number>;
    aggregate<T extends RefundsAggregateArgs>(args: Prisma.Subset<T, RefundsAggregateArgs>): Prisma.PrismaPromise<GetRefundsAggregateType<T>>;
    groupBy<T extends refundsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: refundsGroupByArgs['orderBy'];
    } : {
        orderBy?: refundsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, refundsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: refundsFieldRefs;
}
export interface Prisma__refundsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface refundsFieldRefs {
    readonly id: Prisma.FieldRef<"refunds", 'Int'>;
    readonly order_id: Prisma.FieldRef<"refunds", 'BigInt'>;
    readonly reason: Prisma.FieldRef<"refunds", 'String'>;
    readonly status: Prisma.FieldRef<"refunds", 'refunds_status'>;
    readonly created_at: Prisma.FieldRef<"refunds", 'DateTime'>;
}
export type refundsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where: Prisma.refundsWhereUniqueInput;
};
export type refundsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where: Prisma.refundsWhereUniqueInput;
};
export type refundsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where?: Prisma.refundsWhereInput;
    orderBy?: Prisma.refundsOrderByWithRelationInput | Prisma.refundsOrderByWithRelationInput[];
    cursor?: Prisma.refundsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundsScalarFieldEnum | Prisma.RefundsScalarFieldEnum[];
};
export type refundsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where?: Prisma.refundsWhereInput;
    orderBy?: Prisma.refundsOrderByWithRelationInput | Prisma.refundsOrderByWithRelationInput[];
    cursor?: Prisma.refundsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundsScalarFieldEnum | Prisma.RefundsScalarFieldEnum[];
};
export type refundsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where?: Prisma.refundsWhereInput;
    orderBy?: Prisma.refundsOrderByWithRelationInput | Prisma.refundsOrderByWithRelationInput[];
    cursor?: Prisma.refundsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundsScalarFieldEnum | Prisma.RefundsScalarFieldEnum[];
};
export type refundsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.refundsCreateInput, Prisma.refundsUncheckedCreateInput>;
};
export type refundsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.refundsCreateManyInput | Prisma.refundsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type refundsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.refundsUpdateInput, Prisma.refundsUncheckedUpdateInput>;
    where: Prisma.refundsWhereUniqueInput;
};
export type refundsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.refundsUpdateManyMutationInput, Prisma.refundsUncheckedUpdateManyInput>;
    where?: Prisma.refundsWhereInput;
    limit?: number;
};
export type refundsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where: Prisma.refundsWhereUniqueInput;
    create: Prisma.XOR<Prisma.refundsCreateInput, Prisma.refundsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.refundsUpdateInput, Prisma.refundsUncheckedUpdateInput>;
};
export type refundsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where: Prisma.refundsWhereUniqueInput;
};
export type refundsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refundsWhereInput;
    limit?: number;
};
export type refundsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
};
export {};
