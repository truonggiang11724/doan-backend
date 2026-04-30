import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type cancel_requestsModel = runtime.Types.Result.DefaultSelection<Prisma.$cancel_requestsPayload>;
export type AggregateCancel_requests = {
    _count: Cancel_requestsCountAggregateOutputType | null;
    _avg: Cancel_requestsAvgAggregateOutputType | null;
    _sum: Cancel_requestsSumAggregateOutputType | null;
    _min: Cancel_requestsMinAggregateOutputType | null;
    _max: Cancel_requestsMaxAggregateOutputType | null;
};
export type Cancel_requestsAvgAggregateOutputType = {
    cancel_request_id: number | null;
    order_id: number | null;
};
export type Cancel_requestsSumAggregateOutputType = {
    cancel_request_id: bigint | null;
    order_id: bigint | null;
};
export type Cancel_requestsMinAggregateOutputType = {
    cancel_request_id: bigint | null;
    order_id: bigint | null;
    reason: string | null;
    status: string | null;
    created_at: Date | null;
};
export type Cancel_requestsMaxAggregateOutputType = {
    cancel_request_id: bigint | null;
    order_id: bigint | null;
    reason: string | null;
    status: string | null;
    created_at: Date | null;
};
export type Cancel_requestsCountAggregateOutputType = {
    cancel_request_id: number;
    order_id: number;
    reason: number;
    status: number;
    created_at: number;
    _all: number;
};
export type Cancel_requestsAvgAggregateInputType = {
    cancel_request_id?: true;
    order_id?: true;
};
export type Cancel_requestsSumAggregateInputType = {
    cancel_request_id?: true;
    order_id?: true;
};
export type Cancel_requestsMinAggregateInputType = {
    cancel_request_id?: true;
    order_id?: true;
    reason?: true;
    status?: true;
    created_at?: true;
};
export type Cancel_requestsMaxAggregateInputType = {
    cancel_request_id?: true;
    order_id?: true;
    reason?: true;
    status?: true;
    created_at?: true;
};
export type Cancel_requestsCountAggregateInputType = {
    cancel_request_id?: true;
    order_id?: true;
    reason?: true;
    status?: true;
    created_at?: true;
    _all?: true;
};
export type Cancel_requestsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cancel_requestsWhereInput;
    orderBy?: Prisma.cancel_requestsOrderByWithRelationInput | Prisma.cancel_requestsOrderByWithRelationInput[];
    cursor?: Prisma.cancel_requestsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Cancel_requestsCountAggregateInputType;
    _avg?: Cancel_requestsAvgAggregateInputType;
    _sum?: Cancel_requestsSumAggregateInputType;
    _min?: Cancel_requestsMinAggregateInputType;
    _max?: Cancel_requestsMaxAggregateInputType;
};
export type GetCancel_requestsAggregateType<T extends Cancel_requestsAggregateArgs> = {
    [P in keyof T & keyof AggregateCancel_requests]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCancel_requests[P]> : Prisma.GetScalarType<T[P], AggregateCancel_requests[P]>;
};
export type cancel_requestsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cancel_requestsWhereInput;
    orderBy?: Prisma.cancel_requestsOrderByWithAggregationInput | Prisma.cancel_requestsOrderByWithAggregationInput[];
    by: Prisma.Cancel_requestsScalarFieldEnum[] | Prisma.Cancel_requestsScalarFieldEnum;
    having?: Prisma.cancel_requestsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Cancel_requestsCountAggregateInputType | true;
    _avg?: Cancel_requestsAvgAggregateInputType;
    _sum?: Cancel_requestsSumAggregateInputType;
    _min?: Cancel_requestsMinAggregateInputType;
    _max?: Cancel_requestsMaxAggregateInputType;
};
export type Cancel_requestsGroupByOutputType = {
    cancel_request_id: bigint;
    order_id: bigint | null;
    reason: string | null;
    status: string | null;
    created_at: Date | null;
    _count: Cancel_requestsCountAggregateOutputType | null;
    _avg: Cancel_requestsAvgAggregateOutputType | null;
    _sum: Cancel_requestsSumAggregateOutputType | null;
    _min: Cancel_requestsMinAggregateOutputType | null;
    _max: Cancel_requestsMaxAggregateOutputType | null;
};
type GetCancel_requestsGroupByPayload<T extends cancel_requestsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Cancel_requestsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Cancel_requestsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Cancel_requestsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Cancel_requestsGroupByOutputType[P]>;
}>>;
export type cancel_requestsWhereInput = {
    AND?: Prisma.cancel_requestsWhereInput | Prisma.cancel_requestsWhereInput[];
    OR?: Prisma.cancel_requestsWhereInput[];
    NOT?: Prisma.cancel_requestsWhereInput | Prisma.cancel_requestsWhereInput[];
    cancel_request_id?: Prisma.BigIntFilter<"cancel_requests"> | bigint | number;
    order_id?: Prisma.BigIntNullableFilter<"cancel_requests"> | bigint | number | null;
    reason?: Prisma.StringNullableFilter<"cancel_requests"> | string | null;
    status?: Prisma.StringNullableFilter<"cancel_requests"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"cancel_requests"> | Date | string | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
};
export type cancel_requestsOrderByWithRelationInput = {
    cancel_request_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByWithRelationInput;
    _relevance?: Prisma.cancel_requestsOrderByRelevanceInput;
};
export type cancel_requestsWhereUniqueInput = Prisma.AtLeast<{
    cancel_request_id?: bigint | number;
    AND?: Prisma.cancel_requestsWhereInput | Prisma.cancel_requestsWhereInput[];
    OR?: Prisma.cancel_requestsWhereInput[];
    NOT?: Prisma.cancel_requestsWhereInput | Prisma.cancel_requestsWhereInput[];
    order_id?: Prisma.BigIntNullableFilter<"cancel_requests"> | bigint | number | null;
    reason?: Prisma.StringNullableFilter<"cancel_requests"> | string | null;
    status?: Prisma.StringNullableFilter<"cancel_requests"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"cancel_requests"> | Date | string | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
}, "cancel_request_id">;
export type cancel_requestsOrderByWithAggregationInput = {
    cancel_request_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.cancel_requestsCountOrderByAggregateInput;
    _avg?: Prisma.cancel_requestsAvgOrderByAggregateInput;
    _max?: Prisma.cancel_requestsMaxOrderByAggregateInput;
    _min?: Prisma.cancel_requestsMinOrderByAggregateInput;
    _sum?: Prisma.cancel_requestsSumOrderByAggregateInput;
};
export type cancel_requestsScalarWhereWithAggregatesInput = {
    AND?: Prisma.cancel_requestsScalarWhereWithAggregatesInput | Prisma.cancel_requestsScalarWhereWithAggregatesInput[];
    OR?: Prisma.cancel_requestsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cancel_requestsScalarWhereWithAggregatesInput | Prisma.cancel_requestsScalarWhereWithAggregatesInput[];
    cancel_request_id?: Prisma.BigIntWithAggregatesFilter<"cancel_requests"> | bigint | number;
    order_id?: Prisma.BigIntNullableWithAggregatesFilter<"cancel_requests"> | bigint | number | null;
    reason?: Prisma.StringNullableWithAggregatesFilter<"cancel_requests"> | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"cancel_requests"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"cancel_requests"> | Date | string | null;
};
export type cancel_requestsCreateInput = {
    cancel_request_id?: bigint | number;
    reason?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedOneWithoutCancel_requestsInput;
};
export type cancel_requestsUncheckedCreateInput = {
    cancel_request_id?: bigint | number;
    order_id?: bigint | number | null;
    reason?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
};
export type cancel_requestsUpdateInput = {
    cancel_request_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneWithoutCancel_requestsNestedInput;
};
export type cancel_requestsUncheckedUpdateInput = {
    cancel_request_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cancel_requestsCreateManyInput = {
    cancel_request_id?: bigint | number;
    order_id?: bigint | number | null;
    reason?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
};
export type cancel_requestsUpdateManyMutationInput = {
    cancel_request_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cancel_requestsUncheckedUpdateManyInput = {
    cancel_request_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cancel_requestsOrderByRelevanceInput = {
    fields: Prisma.cancel_requestsOrderByRelevanceFieldEnum | Prisma.cancel_requestsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type cancel_requestsCountOrderByAggregateInput = {
    cancel_request_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type cancel_requestsAvgOrderByAggregateInput = {
    cancel_request_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type cancel_requestsMaxOrderByAggregateInput = {
    cancel_request_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type cancel_requestsMinOrderByAggregateInput = {
    cancel_request_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type cancel_requestsSumOrderByAggregateInput = {
    cancel_request_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type Cancel_requestsListRelationFilter = {
    every?: Prisma.cancel_requestsWhereInput;
    some?: Prisma.cancel_requestsWhereInput;
    none?: Prisma.cancel_requestsWhereInput;
};
export type cancel_requestsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type cancel_requestsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.cancel_requestsCreateWithoutOrdersInput, Prisma.cancel_requestsUncheckedCreateWithoutOrdersInput> | Prisma.cancel_requestsCreateWithoutOrdersInput[] | Prisma.cancel_requestsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.cancel_requestsCreateOrConnectWithoutOrdersInput | Prisma.cancel_requestsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.cancel_requestsCreateManyOrdersInputEnvelope;
    connect?: Prisma.cancel_requestsWhereUniqueInput | Prisma.cancel_requestsWhereUniqueInput[];
};
export type cancel_requestsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.cancel_requestsCreateWithoutOrdersInput, Prisma.cancel_requestsUncheckedCreateWithoutOrdersInput> | Prisma.cancel_requestsCreateWithoutOrdersInput[] | Prisma.cancel_requestsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.cancel_requestsCreateOrConnectWithoutOrdersInput | Prisma.cancel_requestsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.cancel_requestsCreateManyOrdersInputEnvelope;
    connect?: Prisma.cancel_requestsWhereUniqueInput | Prisma.cancel_requestsWhereUniqueInput[];
};
export type cancel_requestsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.cancel_requestsCreateWithoutOrdersInput, Prisma.cancel_requestsUncheckedCreateWithoutOrdersInput> | Prisma.cancel_requestsCreateWithoutOrdersInput[] | Prisma.cancel_requestsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.cancel_requestsCreateOrConnectWithoutOrdersInput | Prisma.cancel_requestsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.cancel_requestsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.cancel_requestsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.cancel_requestsCreateManyOrdersInputEnvelope;
    set?: Prisma.cancel_requestsWhereUniqueInput | Prisma.cancel_requestsWhereUniqueInput[];
    disconnect?: Prisma.cancel_requestsWhereUniqueInput | Prisma.cancel_requestsWhereUniqueInput[];
    delete?: Prisma.cancel_requestsWhereUniqueInput | Prisma.cancel_requestsWhereUniqueInput[];
    connect?: Prisma.cancel_requestsWhereUniqueInput | Prisma.cancel_requestsWhereUniqueInput[];
    update?: Prisma.cancel_requestsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.cancel_requestsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.cancel_requestsUpdateManyWithWhereWithoutOrdersInput | Prisma.cancel_requestsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.cancel_requestsScalarWhereInput | Prisma.cancel_requestsScalarWhereInput[];
};
export type cancel_requestsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.cancel_requestsCreateWithoutOrdersInput, Prisma.cancel_requestsUncheckedCreateWithoutOrdersInput> | Prisma.cancel_requestsCreateWithoutOrdersInput[] | Prisma.cancel_requestsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.cancel_requestsCreateOrConnectWithoutOrdersInput | Prisma.cancel_requestsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.cancel_requestsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.cancel_requestsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.cancel_requestsCreateManyOrdersInputEnvelope;
    set?: Prisma.cancel_requestsWhereUniqueInput | Prisma.cancel_requestsWhereUniqueInput[];
    disconnect?: Prisma.cancel_requestsWhereUniqueInput | Prisma.cancel_requestsWhereUniqueInput[];
    delete?: Prisma.cancel_requestsWhereUniqueInput | Prisma.cancel_requestsWhereUniqueInput[];
    connect?: Prisma.cancel_requestsWhereUniqueInput | Prisma.cancel_requestsWhereUniqueInput[];
    update?: Prisma.cancel_requestsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.cancel_requestsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.cancel_requestsUpdateManyWithWhereWithoutOrdersInput | Prisma.cancel_requestsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.cancel_requestsScalarWhereInput | Prisma.cancel_requestsScalarWhereInput[];
};
export type cancel_requestsCreateWithoutOrdersInput = {
    cancel_request_id?: bigint | number;
    reason?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
};
export type cancel_requestsUncheckedCreateWithoutOrdersInput = {
    cancel_request_id?: bigint | number;
    reason?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
};
export type cancel_requestsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.cancel_requestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cancel_requestsCreateWithoutOrdersInput, Prisma.cancel_requestsUncheckedCreateWithoutOrdersInput>;
};
export type cancel_requestsCreateManyOrdersInputEnvelope = {
    data: Prisma.cancel_requestsCreateManyOrdersInput | Prisma.cancel_requestsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type cancel_requestsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.cancel_requestsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cancel_requestsUpdateWithoutOrdersInput, Prisma.cancel_requestsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.cancel_requestsCreateWithoutOrdersInput, Prisma.cancel_requestsUncheckedCreateWithoutOrdersInput>;
};
export type cancel_requestsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.cancel_requestsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cancel_requestsUpdateWithoutOrdersInput, Prisma.cancel_requestsUncheckedUpdateWithoutOrdersInput>;
};
export type cancel_requestsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.cancel_requestsScalarWhereInput;
    data: Prisma.XOR<Prisma.cancel_requestsUpdateManyMutationInput, Prisma.cancel_requestsUncheckedUpdateManyWithoutOrdersInput>;
};
export type cancel_requestsScalarWhereInput = {
    AND?: Prisma.cancel_requestsScalarWhereInput | Prisma.cancel_requestsScalarWhereInput[];
    OR?: Prisma.cancel_requestsScalarWhereInput[];
    NOT?: Prisma.cancel_requestsScalarWhereInput | Prisma.cancel_requestsScalarWhereInput[];
    cancel_request_id?: Prisma.BigIntFilter<"cancel_requests"> | bigint | number;
    order_id?: Prisma.BigIntNullableFilter<"cancel_requests"> | bigint | number | null;
    reason?: Prisma.StringNullableFilter<"cancel_requests"> | string | null;
    status?: Prisma.StringNullableFilter<"cancel_requests"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"cancel_requests"> | Date | string | null;
};
export type cancel_requestsCreateManyOrdersInput = {
    cancel_request_id?: bigint | number;
    reason?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
};
export type cancel_requestsUpdateWithoutOrdersInput = {
    cancel_request_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cancel_requestsUncheckedUpdateWithoutOrdersInput = {
    cancel_request_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cancel_requestsUncheckedUpdateManyWithoutOrdersInput = {
    cancel_request_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cancel_requestsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cancel_request_id?: boolean;
    order_id?: boolean;
    reason?: boolean;
    status?: boolean;
    created_at?: boolean;
    orders?: boolean | Prisma.cancel_requests$ordersArgs<ExtArgs>;
}, ExtArgs["result"]["cancel_requests"]>;
export type cancel_requestsSelectScalar = {
    cancel_request_id?: boolean;
    order_id?: boolean;
    reason?: boolean;
    status?: boolean;
    created_at?: boolean;
};
export type cancel_requestsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cancel_request_id" | "order_id" | "reason" | "status" | "created_at", ExtArgs["result"]["cancel_requests"]>;
export type cancel_requestsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.cancel_requests$ordersArgs<ExtArgs>;
};
export type $cancel_requestsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cancel_requests";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cancel_request_id: bigint;
        order_id: bigint | null;
        reason: string | null;
        status: string | null;
        created_at: Date | null;
    }, ExtArgs["result"]["cancel_requests"]>;
    composites: {};
};
export type cancel_requestsGetPayload<S extends boolean | null | undefined | cancel_requestsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload, S>;
export type cancel_requestsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cancel_requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Cancel_requestsCountAggregateInputType | true;
};
export interface cancel_requestsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cancel_requests'];
        meta: {
            name: 'cancel_requests';
        };
    };
    findUnique<T extends cancel_requestsFindUniqueArgs>(args: Prisma.SelectSubset<T, cancel_requestsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cancel_requestsClient<runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cancel_requestsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cancel_requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cancel_requestsClient<runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cancel_requestsFindFirstArgs>(args?: Prisma.SelectSubset<T, cancel_requestsFindFirstArgs<ExtArgs>>): Prisma.Prisma__cancel_requestsClient<runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cancel_requestsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cancel_requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cancel_requestsClient<runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cancel_requestsFindManyArgs>(args?: Prisma.SelectSubset<T, cancel_requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cancel_requestsCreateArgs>(args: Prisma.SelectSubset<T, cancel_requestsCreateArgs<ExtArgs>>): Prisma.Prisma__cancel_requestsClient<runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cancel_requestsCreateManyArgs>(args?: Prisma.SelectSubset<T, cancel_requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends cancel_requestsDeleteArgs>(args: Prisma.SelectSubset<T, cancel_requestsDeleteArgs<ExtArgs>>): Prisma.Prisma__cancel_requestsClient<runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cancel_requestsUpdateArgs>(args: Prisma.SelectSubset<T, cancel_requestsUpdateArgs<ExtArgs>>): Prisma.Prisma__cancel_requestsClient<runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cancel_requestsDeleteManyArgs>(args?: Prisma.SelectSubset<T, cancel_requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cancel_requestsUpdateManyArgs>(args: Prisma.SelectSubset<T, cancel_requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends cancel_requestsUpsertArgs>(args: Prisma.SelectSubset<T, cancel_requestsUpsertArgs<ExtArgs>>): Prisma.Prisma__cancel_requestsClient<runtime.Types.Result.GetResult<Prisma.$cancel_requestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cancel_requestsCountArgs>(args?: Prisma.Subset<T, cancel_requestsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Cancel_requestsCountAggregateOutputType> : number>;
    aggregate<T extends Cancel_requestsAggregateArgs>(args: Prisma.Subset<T, Cancel_requestsAggregateArgs>): Prisma.PrismaPromise<GetCancel_requestsAggregateType<T>>;
    groupBy<T extends cancel_requestsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cancel_requestsGroupByArgs['orderBy'];
    } : {
        orderBy?: cancel_requestsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cancel_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCancel_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cancel_requestsFieldRefs;
}
export interface Prisma__cancel_requestsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.cancel_requests$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cancel_requests$ordersArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cancel_requestsFieldRefs {
    readonly cancel_request_id: Prisma.FieldRef<"cancel_requests", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"cancel_requests", 'BigInt'>;
    readonly reason: Prisma.FieldRef<"cancel_requests", 'String'>;
    readonly status: Prisma.FieldRef<"cancel_requests", 'String'>;
    readonly created_at: Prisma.FieldRef<"cancel_requests", 'DateTime'>;
}
export type cancel_requestsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
    where: Prisma.cancel_requestsWhereUniqueInput;
};
export type cancel_requestsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
    where: Prisma.cancel_requestsWhereUniqueInput;
};
export type cancel_requestsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
    where?: Prisma.cancel_requestsWhereInput;
    orderBy?: Prisma.cancel_requestsOrderByWithRelationInput | Prisma.cancel_requestsOrderByWithRelationInput[];
    cursor?: Prisma.cancel_requestsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cancel_requestsScalarFieldEnum | Prisma.Cancel_requestsScalarFieldEnum[];
};
export type cancel_requestsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
    where?: Prisma.cancel_requestsWhereInput;
    orderBy?: Prisma.cancel_requestsOrderByWithRelationInput | Prisma.cancel_requestsOrderByWithRelationInput[];
    cursor?: Prisma.cancel_requestsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cancel_requestsScalarFieldEnum | Prisma.Cancel_requestsScalarFieldEnum[];
};
export type cancel_requestsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
    where?: Prisma.cancel_requestsWhereInput;
    orderBy?: Prisma.cancel_requestsOrderByWithRelationInput | Prisma.cancel_requestsOrderByWithRelationInput[];
    cursor?: Prisma.cancel_requestsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cancel_requestsScalarFieldEnum | Prisma.Cancel_requestsScalarFieldEnum[];
};
export type cancel_requestsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.cancel_requestsCreateInput, Prisma.cancel_requestsUncheckedCreateInput>;
};
export type cancel_requestsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cancel_requestsCreateManyInput | Prisma.cancel_requestsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cancel_requestsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cancel_requestsUpdateInput, Prisma.cancel_requestsUncheckedUpdateInput>;
    where: Prisma.cancel_requestsWhereUniqueInput;
};
export type cancel_requestsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cancel_requestsUpdateManyMutationInput, Prisma.cancel_requestsUncheckedUpdateManyInput>;
    where?: Prisma.cancel_requestsWhereInput;
    limit?: number;
};
export type cancel_requestsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
    where: Prisma.cancel_requestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cancel_requestsCreateInput, Prisma.cancel_requestsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cancel_requestsUpdateInput, Prisma.cancel_requestsUncheckedUpdateInput>;
};
export type cancel_requestsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
    where: Prisma.cancel_requestsWhereUniqueInput;
};
export type cancel_requestsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cancel_requestsWhereInput;
    limit?: number;
};
export type cancel_requests$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
};
export type cancel_requestsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cancel_requestsSelect<ExtArgs> | null;
    omit?: Prisma.cancel_requestsOmit<ExtArgs> | null;
    include?: Prisma.cancel_requestsInclude<ExtArgs> | null;
};
export {};
