import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type cartsModel = runtime.Types.Result.DefaultSelection<Prisma.$cartsPayload>;
export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null;
    _avg: CartsAvgAggregateOutputType | null;
    _sum: CartsSumAggregateOutputType | null;
    _min: CartsMinAggregateOutputType | null;
    _max: CartsMaxAggregateOutputType | null;
};
export type CartsAvgAggregateOutputType = {
    cart_id: number | null;
    customer_id: number | null;
};
export type CartsSumAggregateOutputType = {
    cart_id: bigint | null;
    customer_id: bigint | null;
};
export type CartsMinAggregateOutputType = {
    cart_id: bigint | null;
    customer_id: bigint | null;
    updated_at: Date | null;
};
export type CartsMaxAggregateOutputType = {
    cart_id: bigint | null;
    customer_id: bigint | null;
    updated_at: Date | null;
};
export type CartsCountAggregateOutputType = {
    cart_id: number;
    customer_id: number;
    updated_at: number;
    _all: number;
};
export type CartsAvgAggregateInputType = {
    cart_id?: true;
    customer_id?: true;
};
export type CartsSumAggregateInputType = {
    cart_id?: true;
    customer_id?: true;
};
export type CartsMinAggregateInputType = {
    cart_id?: true;
    customer_id?: true;
    updated_at?: true;
};
export type CartsMaxAggregateInputType = {
    cart_id?: true;
    customer_id?: true;
    updated_at?: true;
};
export type CartsCountAggregateInputType = {
    cart_id?: true;
    customer_id?: true;
    updated_at?: true;
    _all?: true;
};
export type CartsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CartsCountAggregateInputType;
    _avg?: CartsAvgAggregateInputType;
    _sum?: CartsSumAggregateInputType;
    _min?: CartsMinAggregateInputType;
    _max?: CartsMaxAggregateInputType;
};
export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
    [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCarts[P]> : Prisma.GetScalarType<T[P], AggregateCarts[P]>;
};
export type cartsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithAggregationInput | Prisma.cartsOrderByWithAggregationInput[];
    by: Prisma.CartsScalarFieldEnum[] | Prisma.CartsScalarFieldEnum;
    having?: Prisma.cartsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartsCountAggregateInputType | true;
    _avg?: CartsAvgAggregateInputType;
    _sum?: CartsSumAggregateInputType;
    _min?: CartsMinAggregateInputType;
    _max?: CartsMaxAggregateInputType;
};
export type CartsGroupByOutputType = {
    cart_id: bigint;
    customer_id: bigint | null;
    updated_at: Date | null;
    _count: CartsCountAggregateOutputType | null;
    _avg: CartsAvgAggregateOutputType | null;
    _sum: CartsSumAggregateOutputType | null;
    _min: CartsMinAggregateOutputType | null;
    _max: CartsMaxAggregateOutputType | null;
};
type GetCartsGroupByPayload<T extends cartsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CartsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CartsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CartsGroupByOutputType[P]>;
}>>;
export type cartsWhereInput = {
    AND?: Prisma.cartsWhereInput | Prisma.cartsWhereInput[];
    OR?: Prisma.cartsWhereInput[];
    NOT?: Prisma.cartsWhereInput | Prisma.cartsWhereInput[];
    cart_id?: Prisma.BigIntFilter<"carts"> | bigint | number;
    customer_id?: Prisma.BigIntNullableFilter<"carts"> | bigint | number | null;
    updated_at?: Prisma.DateTimeNullableFilter<"carts"> | Date | string | null;
    cart_items?: Prisma.Cart_itemsListRelationFilter;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
};
export type cartsOrderByWithRelationInput = {
    cart_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    cart_items?: Prisma.cart_itemsOrderByRelationAggregateInput;
    customers?: Prisma.customersOrderByWithRelationInput;
};
export type cartsWhereUniqueInput = Prisma.AtLeast<{
    cart_id?: bigint | number;
    AND?: Prisma.cartsWhereInput | Prisma.cartsWhereInput[];
    OR?: Prisma.cartsWhereInput[];
    NOT?: Prisma.cartsWhereInput | Prisma.cartsWhereInput[];
    customer_id?: Prisma.BigIntNullableFilter<"carts"> | bigint | number | null;
    updated_at?: Prisma.DateTimeNullableFilter<"carts"> | Date | string | null;
    cart_items?: Prisma.Cart_itemsListRelationFilter;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
}, "cart_id">;
export type cartsOrderByWithAggregationInput = {
    cart_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.cartsCountOrderByAggregateInput;
    _avg?: Prisma.cartsAvgOrderByAggregateInput;
    _max?: Prisma.cartsMaxOrderByAggregateInput;
    _min?: Prisma.cartsMinOrderByAggregateInput;
    _sum?: Prisma.cartsSumOrderByAggregateInput;
};
export type cartsScalarWhereWithAggregatesInput = {
    AND?: Prisma.cartsScalarWhereWithAggregatesInput | Prisma.cartsScalarWhereWithAggregatesInput[];
    OR?: Prisma.cartsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cartsScalarWhereWithAggregatesInput | Prisma.cartsScalarWhereWithAggregatesInput[];
    cart_id?: Prisma.BigIntWithAggregatesFilter<"carts"> | bigint | number;
    customer_id?: Prisma.BigIntNullableWithAggregatesFilter<"carts"> | bigint | number | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"carts"> | Date | string | null;
};
export type cartsCreateInput = {
    cart_id?: bigint | number;
    updated_at?: Date | string | null;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutCartsInput;
    customers?: Prisma.customersCreateNestedOneWithoutCartsInput;
};
export type cartsUncheckedCreateInput = {
    cart_id?: bigint | number;
    customer_id?: bigint | number | null;
    updated_at?: Date | string | null;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutCartsInput;
};
export type cartsUpdateInput = {
    cart_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutCartsNestedInput;
    customers?: Prisma.customersUpdateOneWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateInput = {
    cart_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutCartsNestedInput;
};
export type cartsCreateManyInput = {
    cart_id?: bigint | number;
    customer_id?: bigint | number | null;
    updated_at?: Date | string | null;
};
export type cartsUpdateManyMutationInput = {
    cart_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cartsUncheckedUpdateManyInput = {
    cart_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CartsNullableScalarRelationFilter = {
    is?: Prisma.cartsWhereInput | null;
    isNot?: Prisma.cartsWhereInput | null;
};
export type cartsCountOrderByAggregateInput = {
    cart_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type cartsAvgOrderByAggregateInput = {
    cart_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
};
export type cartsMaxOrderByAggregateInput = {
    cart_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type cartsMinOrderByAggregateInput = {
    cart_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type cartsSumOrderByAggregateInput = {
    cart_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
};
export type CartsListRelationFilter = {
    every?: Prisma.cartsWhereInput;
    some?: Prisma.cartsWhereInput;
    none?: Prisma.cartsWhereInput;
};
export type cartsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cartsCreateNestedOneWithoutCart_itemsInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutCart_itemsInput, Prisma.cartsUncheckedCreateWithoutCart_itemsInput>;
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutCart_itemsInput;
    connect?: Prisma.cartsWhereUniqueInput;
};
export type cartsUpdateOneWithoutCart_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutCart_itemsInput, Prisma.cartsUncheckedCreateWithoutCart_itemsInput>;
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutCart_itemsInput;
    upsert?: Prisma.cartsUpsertWithoutCart_itemsInput;
    disconnect?: Prisma.cartsWhereInput | boolean;
    delete?: Prisma.cartsWhereInput | boolean;
    connect?: Prisma.cartsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cartsUpdateToOneWithWhereWithoutCart_itemsInput, Prisma.cartsUpdateWithoutCart_itemsInput>, Prisma.cartsUncheckedUpdateWithoutCart_itemsInput>;
};
export type cartsCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutCustomersInput, Prisma.cartsUncheckedCreateWithoutCustomersInput> | Prisma.cartsCreateWithoutCustomersInput[] | Prisma.cartsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutCustomersInput | Prisma.cartsCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.cartsCreateManyCustomersInputEnvelope;
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
};
export type cartsUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutCustomersInput, Prisma.cartsUncheckedCreateWithoutCustomersInput> | Prisma.cartsCreateWithoutCustomersInput[] | Prisma.cartsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutCustomersInput | Prisma.cartsCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.cartsCreateManyCustomersInputEnvelope;
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
};
export type cartsUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutCustomersInput, Prisma.cartsUncheckedCreateWithoutCustomersInput> | Prisma.cartsCreateWithoutCustomersInput[] | Prisma.cartsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutCustomersInput | Prisma.cartsCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.cartsUpsertWithWhereUniqueWithoutCustomersInput | Prisma.cartsUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.cartsCreateManyCustomersInputEnvelope;
    set?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    disconnect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    delete?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    update?: Prisma.cartsUpdateWithWhereUniqueWithoutCustomersInput | Prisma.cartsUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.cartsUpdateManyWithWhereWithoutCustomersInput | Prisma.cartsUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
};
export type cartsUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutCustomersInput, Prisma.cartsUncheckedCreateWithoutCustomersInput> | Prisma.cartsCreateWithoutCustomersInput[] | Prisma.cartsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutCustomersInput | Prisma.cartsCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.cartsUpsertWithWhereUniqueWithoutCustomersInput | Prisma.cartsUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.cartsCreateManyCustomersInputEnvelope;
    set?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    disconnect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    delete?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    update?: Prisma.cartsUpdateWithWhereUniqueWithoutCustomersInput | Prisma.cartsUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.cartsUpdateManyWithWhereWithoutCustomersInput | Prisma.cartsUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
};
export type cartsCreateWithoutCart_itemsInput = {
    cart_id?: bigint | number;
    updated_at?: Date | string | null;
    customers?: Prisma.customersCreateNestedOneWithoutCartsInput;
};
export type cartsUncheckedCreateWithoutCart_itemsInput = {
    cart_id?: bigint | number;
    customer_id?: bigint | number | null;
    updated_at?: Date | string | null;
};
export type cartsCreateOrConnectWithoutCart_itemsInput = {
    where: Prisma.cartsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cartsCreateWithoutCart_itemsInput, Prisma.cartsUncheckedCreateWithoutCart_itemsInput>;
};
export type cartsUpsertWithoutCart_itemsInput = {
    update: Prisma.XOR<Prisma.cartsUpdateWithoutCart_itemsInput, Prisma.cartsUncheckedUpdateWithoutCart_itemsInput>;
    create: Prisma.XOR<Prisma.cartsCreateWithoutCart_itemsInput, Prisma.cartsUncheckedCreateWithoutCart_itemsInput>;
    where?: Prisma.cartsWhereInput;
};
export type cartsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: Prisma.cartsWhereInput;
    data: Prisma.XOR<Prisma.cartsUpdateWithoutCart_itemsInput, Prisma.cartsUncheckedUpdateWithoutCart_itemsInput>;
};
export type cartsUpdateWithoutCart_itemsInput = {
    cart_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUpdateOneWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateWithoutCart_itemsInput = {
    cart_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cartsCreateWithoutCustomersInput = {
    cart_id?: bigint | number;
    updated_at?: Date | string | null;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutCartsInput;
};
export type cartsUncheckedCreateWithoutCustomersInput = {
    cart_id?: bigint | number;
    updated_at?: Date | string | null;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutCartsInput;
};
export type cartsCreateOrConnectWithoutCustomersInput = {
    where: Prisma.cartsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cartsCreateWithoutCustomersInput, Prisma.cartsUncheckedCreateWithoutCustomersInput>;
};
export type cartsCreateManyCustomersInputEnvelope = {
    data: Prisma.cartsCreateManyCustomersInput | Prisma.cartsCreateManyCustomersInput[];
    skipDuplicates?: boolean;
};
export type cartsUpsertWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.cartsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cartsUpdateWithoutCustomersInput, Prisma.cartsUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.cartsCreateWithoutCustomersInput, Prisma.cartsUncheckedCreateWithoutCustomersInput>;
};
export type cartsUpdateWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.cartsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cartsUpdateWithoutCustomersInput, Prisma.cartsUncheckedUpdateWithoutCustomersInput>;
};
export type cartsUpdateManyWithWhereWithoutCustomersInput = {
    where: Prisma.cartsScalarWhereInput;
    data: Prisma.XOR<Prisma.cartsUpdateManyMutationInput, Prisma.cartsUncheckedUpdateManyWithoutCustomersInput>;
};
export type cartsScalarWhereInput = {
    AND?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
    OR?: Prisma.cartsScalarWhereInput[];
    NOT?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
    cart_id?: Prisma.BigIntFilter<"carts"> | bigint | number;
    customer_id?: Prisma.BigIntNullableFilter<"carts"> | bigint | number | null;
    updated_at?: Prisma.DateTimeNullableFilter<"carts"> | Date | string | null;
};
export type cartsCreateManyCustomersInput = {
    cart_id?: bigint | number;
    updated_at?: Date | string | null;
};
export type cartsUpdateWithoutCustomersInput = {
    cart_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateWithoutCustomersInput = {
    cart_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateManyWithoutCustomersInput = {
    cart_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CartsCountOutputType = {
    cart_items: number;
};
export type CartsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_items?: boolean | CartsCountOutputTypeCountCart_itemsArgs;
};
export type CartsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartsCountOutputTypeSelect<ExtArgs> | null;
};
export type CartsCountOutputTypeCountCart_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
};
export type cartsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cart_id?: boolean;
    customer_id?: boolean;
    updated_at?: boolean;
    cart_items?: boolean | Prisma.carts$cart_itemsArgs<ExtArgs>;
    customers?: boolean | Prisma.carts$customersArgs<ExtArgs>;
    _count?: boolean | Prisma.CartsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carts"]>;
export type cartsSelectScalar = {
    cart_id?: boolean;
    customer_id?: boolean;
    updated_at?: boolean;
};
export type cartsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cart_id" | "customer_id" | "updated_at", ExtArgs["result"]["carts"]>;
export type cartsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_items?: boolean | Prisma.carts$cart_itemsArgs<ExtArgs>;
    customers?: boolean | Prisma.carts$customersArgs<ExtArgs>;
    _count?: boolean | Prisma.CartsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $cartsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "carts";
    objects: {
        cart_items: Prisma.$cart_itemsPayload<ExtArgs>[];
        customers: Prisma.$customersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cart_id: bigint;
        customer_id: bigint | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["carts"]>;
    composites: {};
};
export type cartsGetPayload<S extends boolean | null | undefined | cartsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cartsPayload, S>;
export type cartsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CartsCountAggregateInputType | true;
};
export interface cartsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['carts'];
        meta: {
            name: 'carts';
        };
    };
    findUnique<T extends cartsFindUniqueArgs>(args: Prisma.SelectSubset<T, cartsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cartsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cartsFindFirstArgs>(args?: Prisma.SelectSubset<T, cartsFindFirstArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cartsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cartsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cartsFindManyArgs>(args?: Prisma.SelectSubset<T, cartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cartsCreateArgs>(args: Prisma.SelectSubset<T, cartsCreateArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cartsCreateManyArgs>(args?: Prisma.SelectSubset<T, cartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends cartsDeleteArgs>(args: Prisma.SelectSubset<T, cartsDeleteArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cartsUpdateArgs>(args: Prisma.SelectSubset<T, cartsUpdateArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cartsDeleteManyArgs>(args?: Prisma.SelectSubset<T, cartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cartsUpdateManyArgs>(args: Prisma.SelectSubset<T, cartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends cartsUpsertArgs>(args: Prisma.SelectSubset<T, cartsUpsertArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cartsCountArgs>(args?: Prisma.Subset<T, cartsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CartsCountAggregateOutputType> : number>;
    aggregate<T extends CartsAggregateArgs>(args: Prisma.Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>;
    groupBy<T extends cartsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cartsGroupByArgs['orderBy'];
    } : {
        orderBy?: cartsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cartsFieldRefs;
}
export interface Prisma__cartsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cart_items<T extends Prisma.carts$cart_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carts$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customers<T extends Prisma.carts$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carts$customersArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cartsFieldRefs {
    readonly cart_id: Prisma.FieldRef<"carts", 'BigInt'>;
    readonly customer_id: Prisma.FieldRef<"carts", 'BigInt'>;
    readonly updated_at: Prisma.FieldRef<"carts", 'DateTime'>;
}
export type cartsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where: Prisma.cartsWhereUniqueInput;
};
export type cartsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where: Prisma.cartsWhereUniqueInput;
};
export type cartsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
export type cartsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
export type cartsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
export type cartsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.cartsCreateInput, Prisma.cartsUncheckedCreateInput>;
};
export type cartsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cartsCreateManyInput | Prisma.cartsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cartsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cartsUpdateInput, Prisma.cartsUncheckedUpdateInput>;
    where: Prisma.cartsWhereUniqueInput;
};
export type cartsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cartsUpdateManyMutationInput, Prisma.cartsUncheckedUpdateManyInput>;
    where?: Prisma.cartsWhereInput;
    limit?: number;
};
export type cartsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where: Prisma.cartsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cartsCreateInput, Prisma.cartsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cartsUpdateInput, Prisma.cartsUncheckedUpdateInput>;
};
export type cartsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where: Prisma.cartsWhereUniqueInput;
};
export type cartsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cartsWhereInput;
    limit?: number;
};
export type carts$cart_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_itemsScalarFieldEnum | Prisma.Cart_itemsScalarFieldEnum[];
};
export type carts$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
};
export type cartsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
};
export {};
