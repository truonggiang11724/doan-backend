import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type wallet_transactionsModel = runtime.Types.Result.DefaultSelection<Prisma.$wallet_transactionsPayload>;
export type AggregateWallet_transactions = {
    _count: Wallet_transactionsCountAggregateOutputType | null;
    _avg: Wallet_transactionsAvgAggregateOutputType | null;
    _sum: Wallet_transactionsSumAggregateOutputType | null;
    _min: Wallet_transactionsMinAggregateOutputType | null;
    _max: Wallet_transactionsMaxAggregateOutputType | null;
};
export type Wallet_transactionsAvgAggregateOutputType = {
    transaction_id: number | null;
    wallet_id: number | null;
    order_id: number | null;
    amount: runtime.Decimal | null;
};
export type Wallet_transactionsSumAggregateOutputType = {
    transaction_id: bigint | null;
    wallet_id: bigint | null;
    order_id: bigint | null;
    amount: runtime.Decimal | null;
};
export type Wallet_transactionsMinAggregateOutputType = {
    transaction_id: bigint | null;
    wallet_id: bigint | null;
    order_id: bigint | null;
    transaction_type: $Enums.wallet_transactions_transaction_type | null;
    amount: runtime.Decimal | null;
    created_at: Date | null;
};
export type Wallet_transactionsMaxAggregateOutputType = {
    transaction_id: bigint | null;
    wallet_id: bigint | null;
    order_id: bigint | null;
    transaction_type: $Enums.wallet_transactions_transaction_type | null;
    amount: runtime.Decimal | null;
    created_at: Date | null;
};
export type Wallet_transactionsCountAggregateOutputType = {
    transaction_id: number;
    wallet_id: number;
    order_id: number;
    transaction_type: number;
    amount: number;
    created_at: number;
    _all: number;
};
export type Wallet_transactionsAvgAggregateInputType = {
    transaction_id?: true;
    wallet_id?: true;
    order_id?: true;
    amount?: true;
};
export type Wallet_transactionsSumAggregateInputType = {
    transaction_id?: true;
    wallet_id?: true;
    order_id?: true;
    amount?: true;
};
export type Wallet_transactionsMinAggregateInputType = {
    transaction_id?: true;
    wallet_id?: true;
    order_id?: true;
    transaction_type?: true;
    amount?: true;
    created_at?: true;
};
export type Wallet_transactionsMaxAggregateInputType = {
    transaction_id?: true;
    wallet_id?: true;
    order_id?: true;
    transaction_type?: true;
    amount?: true;
    created_at?: true;
};
export type Wallet_transactionsCountAggregateInputType = {
    transaction_id?: true;
    wallet_id?: true;
    order_id?: true;
    transaction_type?: true;
    amount?: true;
    created_at?: true;
    _all?: true;
};
export type Wallet_transactionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wallet_transactionsWhereInput;
    orderBy?: Prisma.wallet_transactionsOrderByWithRelationInput | Prisma.wallet_transactionsOrderByWithRelationInput[];
    cursor?: Prisma.wallet_transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Wallet_transactionsCountAggregateInputType;
    _avg?: Wallet_transactionsAvgAggregateInputType;
    _sum?: Wallet_transactionsSumAggregateInputType;
    _min?: Wallet_transactionsMinAggregateInputType;
    _max?: Wallet_transactionsMaxAggregateInputType;
};
export type GetWallet_transactionsAggregateType<T extends Wallet_transactionsAggregateArgs> = {
    [P in keyof T & keyof AggregateWallet_transactions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWallet_transactions[P]> : Prisma.GetScalarType<T[P], AggregateWallet_transactions[P]>;
};
export type wallet_transactionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wallet_transactionsWhereInput;
    orderBy?: Prisma.wallet_transactionsOrderByWithAggregationInput | Prisma.wallet_transactionsOrderByWithAggregationInput[];
    by: Prisma.Wallet_transactionsScalarFieldEnum[] | Prisma.Wallet_transactionsScalarFieldEnum;
    having?: Prisma.wallet_transactionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Wallet_transactionsCountAggregateInputType | true;
    _avg?: Wallet_transactionsAvgAggregateInputType;
    _sum?: Wallet_transactionsSumAggregateInputType;
    _min?: Wallet_transactionsMinAggregateInputType;
    _max?: Wallet_transactionsMaxAggregateInputType;
};
export type Wallet_transactionsGroupByOutputType = {
    transaction_id: bigint;
    wallet_id: bigint | null;
    order_id: bigint | null;
    transaction_type: $Enums.wallet_transactions_transaction_type | null;
    amount: runtime.Decimal | null;
    created_at: Date | null;
    _count: Wallet_transactionsCountAggregateOutputType | null;
    _avg: Wallet_transactionsAvgAggregateOutputType | null;
    _sum: Wallet_transactionsSumAggregateOutputType | null;
    _min: Wallet_transactionsMinAggregateOutputType | null;
    _max: Wallet_transactionsMaxAggregateOutputType | null;
};
type GetWallet_transactionsGroupByPayload<T extends wallet_transactionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Wallet_transactionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Wallet_transactionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Wallet_transactionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Wallet_transactionsGroupByOutputType[P]>;
}>>;
export type wallet_transactionsWhereInput = {
    AND?: Prisma.wallet_transactionsWhereInput | Prisma.wallet_transactionsWhereInput[];
    OR?: Prisma.wallet_transactionsWhereInput[];
    NOT?: Prisma.wallet_transactionsWhereInput | Prisma.wallet_transactionsWhereInput[];
    transaction_id?: Prisma.BigIntFilter<"wallet_transactions"> | bigint | number;
    wallet_id?: Prisma.BigIntNullableFilter<"wallet_transactions"> | bigint | number | null;
    order_id?: Prisma.BigIntNullableFilter<"wallet_transactions"> | bigint | number | null;
    transaction_type?: Prisma.Enumwallet_transactions_transaction_typeNullableFilter<"wallet_transactions"> | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.DecimalNullableFilter<"wallet_transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"wallet_transactions"> | Date | string | null;
    wallets?: Prisma.XOR<Prisma.WalletsNullableScalarRelationFilter, Prisma.walletsWhereInput> | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
};
export type wallet_transactionsOrderByWithRelationInput = {
    transaction_id?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    transaction_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    wallets?: Prisma.walletsOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
};
export type wallet_transactionsWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: bigint | number;
    AND?: Prisma.wallet_transactionsWhereInput | Prisma.wallet_transactionsWhereInput[];
    OR?: Prisma.wallet_transactionsWhereInput[];
    NOT?: Prisma.wallet_transactionsWhereInput | Prisma.wallet_transactionsWhereInput[];
    wallet_id?: Prisma.BigIntNullableFilter<"wallet_transactions"> | bigint | number | null;
    order_id?: Prisma.BigIntNullableFilter<"wallet_transactions"> | bigint | number | null;
    transaction_type?: Prisma.Enumwallet_transactions_transaction_typeNullableFilter<"wallet_transactions"> | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.DecimalNullableFilter<"wallet_transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"wallet_transactions"> | Date | string | null;
    wallets?: Prisma.XOR<Prisma.WalletsNullableScalarRelationFilter, Prisma.walletsWhereInput> | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
}, "transaction_id">;
export type wallet_transactionsOrderByWithAggregationInput = {
    transaction_id?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    transaction_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.wallet_transactionsCountOrderByAggregateInput;
    _avg?: Prisma.wallet_transactionsAvgOrderByAggregateInput;
    _max?: Prisma.wallet_transactionsMaxOrderByAggregateInput;
    _min?: Prisma.wallet_transactionsMinOrderByAggregateInput;
    _sum?: Prisma.wallet_transactionsSumOrderByAggregateInput;
};
export type wallet_transactionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.wallet_transactionsScalarWhereWithAggregatesInput | Prisma.wallet_transactionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.wallet_transactionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.wallet_transactionsScalarWhereWithAggregatesInput | Prisma.wallet_transactionsScalarWhereWithAggregatesInput[];
    transaction_id?: Prisma.BigIntWithAggregatesFilter<"wallet_transactions"> | bigint | number;
    wallet_id?: Prisma.BigIntNullableWithAggregatesFilter<"wallet_transactions"> | bigint | number | null;
    order_id?: Prisma.BigIntNullableWithAggregatesFilter<"wallet_transactions"> | bigint | number | null;
    transaction_type?: Prisma.Enumwallet_transactions_transaction_typeNullableWithAggregatesFilter<"wallet_transactions"> | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.DecimalNullableWithAggregatesFilter<"wallet_transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"wallet_transactions"> | Date | string | null;
};
export type wallet_transactionsCreateInput = {
    transaction_id?: bigint | number;
    transaction_type?: $Enums.wallet_transactions_transaction_type | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    wallets?: Prisma.walletsCreateNestedOneWithoutWallet_transactionsInput;
    orders?: Prisma.ordersCreateNestedOneWithoutWallet_transactionsInput;
};
export type wallet_transactionsUncheckedCreateInput = {
    transaction_id?: bigint | number;
    wallet_id?: bigint | number | null;
    order_id?: bigint | number | null;
    transaction_type?: $Enums.wallet_transactions_transaction_type | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type wallet_transactionsUpdateInput = {
    transaction_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transaction_type?: Prisma.NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wallets?: Prisma.walletsUpdateOneWithoutWallet_transactionsNestedInput;
    orders?: Prisma.ordersUpdateOneWithoutWallet_transactionsNestedInput;
};
export type wallet_transactionsUncheckedUpdateInput = {
    transaction_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wallet_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    transaction_type?: Prisma.NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type wallet_transactionsCreateManyInput = {
    transaction_id?: bigint | number;
    wallet_id?: bigint | number | null;
    order_id?: bigint | number | null;
    transaction_type?: $Enums.wallet_transactions_transaction_type | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type wallet_transactionsUpdateManyMutationInput = {
    transaction_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transaction_type?: Prisma.NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type wallet_transactionsUncheckedUpdateManyInput = {
    transaction_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wallet_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    transaction_type?: Prisma.NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Wallet_transactionsListRelationFilter = {
    every?: Prisma.wallet_transactionsWhereInput;
    some?: Prisma.wallet_transactionsWhereInput;
    none?: Prisma.wallet_transactionsWhereInput;
};
export type wallet_transactionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type wallet_transactionsCountOrderByAggregateInput = {
    transaction_id?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type wallet_transactionsAvgOrderByAggregateInput = {
    transaction_id?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type wallet_transactionsMaxOrderByAggregateInput = {
    transaction_id?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type wallet_transactionsMinOrderByAggregateInput = {
    transaction_id?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type wallet_transactionsSumOrderByAggregateInput = {
    transaction_id?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type wallet_transactionsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutOrdersInput, Prisma.wallet_transactionsUncheckedCreateWithoutOrdersInput> | Prisma.wallet_transactionsCreateWithoutOrdersInput[] | Prisma.wallet_transactionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.wallet_transactionsCreateOrConnectWithoutOrdersInput | Prisma.wallet_transactionsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.wallet_transactionsCreateManyOrdersInputEnvelope;
    connect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
};
export type wallet_transactionsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutOrdersInput, Prisma.wallet_transactionsUncheckedCreateWithoutOrdersInput> | Prisma.wallet_transactionsCreateWithoutOrdersInput[] | Prisma.wallet_transactionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.wallet_transactionsCreateOrConnectWithoutOrdersInput | Prisma.wallet_transactionsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.wallet_transactionsCreateManyOrdersInputEnvelope;
    connect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
};
export type wallet_transactionsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutOrdersInput, Prisma.wallet_transactionsUncheckedCreateWithoutOrdersInput> | Prisma.wallet_transactionsCreateWithoutOrdersInput[] | Prisma.wallet_transactionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.wallet_transactionsCreateOrConnectWithoutOrdersInput | Prisma.wallet_transactionsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.wallet_transactionsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.wallet_transactionsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.wallet_transactionsCreateManyOrdersInputEnvelope;
    set?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    disconnect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    delete?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    connect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    update?: Prisma.wallet_transactionsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.wallet_transactionsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.wallet_transactionsUpdateManyWithWhereWithoutOrdersInput | Prisma.wallet_transactionsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.wallet_transactionsScalarWhereInput | Prisma.wallet_transactionsScalarWhereInput[];
};
export type wallet_transactionsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutOrdersInput, Prisma.wallet_transactionsUncheckedCreateWithoutOrdersInput> | Prisma.wallet_transactionsCreateWithoutOrdersInput[] | Prisma.wallet_transactionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.wallet_transactionsCreateOrConnectWithoutOrdersInput | Prisma.wallet_transactionsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.wallet_transactionsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.wallet_transactionsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.wallet_transactionsCreateManyOrdersInputEnvelope;
    set?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    disconnect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    delete?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    connect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    update?: Prisma.wallet_transactionsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.wallet_transactionsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.wallet_transactionsUpdateManyWithWhereWithoutOrdersInput | Prisma.wallet_transactionsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.wallet_transactionsScalarWhereInput | Prisma.wallet_transactionsScalarWhereInput[];
};
export type NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput = {
    set?: $Enums.wallet_transactions_transaction_type | null;
};
export type wallet_transactionsCreateNestedManyWithoutWalletsInput = {
    create?: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutWalletsInput, Prisma.wallet_transactionsUncheckedCreateWithoutWalletsInput> | Prisma.wallet_transactionsCreateWithoutWalletsInput[] | Prisma.wallet_transactionsUncheckedCreateWithoutWalletsInput[];
    connectOrCreate?: Prisma.wallet_transactionsCreateOrConnectWithoutWalletsInput | Prisma.wallet_transactionsCreateOrConnectWithoutWalletsInput[];
    createMany?: Prisma.wallet_transactionsCreateManyWalletsInputEnvelope;
    connect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
};
export type wallet_transactionsUncheckedCreateNestedManyWithoutWalletsInput = {
    create?: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutWalletsInput, Prisma.wallet_transactionsUncheckedCreateWithoutWalletsInput> | Prisma.wallet_transactionsCreateWithoutWalletsInput[] | Prisma.wallet_transactionsUncheckedCreateWithoutWalletsInput[];
    connectOrCreate?: Prisma.wallet_transactionsCreateOrConnectWithoutWalletsInput | Prisma.wallet_transactionsCreateOrConnectWithoutWalletsInput[];
    createMany?: Prisma.wallet_transactionsCreateManyWalletsInputEnvelope;
    connect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
};
export type wallet_transactionsUpdateManyWithoutWalletsNestedInput = {
    create?: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutWalletsInput, Prisma.wallet_transactionsUncheckedCreateWithoutWalletsInput> | Prisma.wallet_transactionsCreateWithoutWalletsInput[] | Prisma.wallet_transactionsUncheckedCreateWithoutWalletsInput[];
    connectOrCreate?: Prisma.wallet_transactionsCreateOrConnectWithoutWalletsInput | Prisma.wallet_transactionsCreateOrConnectWithoutWalletsInput[];
    upsert?: Prisma.wallet_transactionsUpsertWithWhereUniqueWithoutWalletsInput | Prisma.wallet_transactionsUpsertWithWhereUniqueWithoutWalletsInput[];
    createMany?: Prisma.wallet_transactionsCreateManyWalletsInputEnvelope;
    set?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    disconnect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    delete?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    connect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    update?: Prisma.wallet_transactionsUpdateWithWhereUniqueWithoutWalletsInput | Prisma.wallet_transactionsUpdateWithWhereUniqueWithoutWalletsInput[];
    updateMany?: Prisma.wallet_transactionsUpdateManyWithWhereWithoutWalletsInput | Prisma.wallet_transactionsUpdateManyWithWhereWithoutWalletsInput[];
    deleteMany?: Prisma.wallet_transactionsScalarWhereInput | Prisma.wallet_transactionsScalarWhereInput[];
};
export type wallet_transactionsUncheckedUpdateManyWithoutWalletsNestedInput = {
    create?: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutWalletsInput, Prisma.wallet_transactionsUncheckedCreateWithoutWalletsInput> | Prisma.wallet_transactionsCreateWithoutWalletsInput[] | Prisma.wallet_transactionsUncheckedCreateWithoutWalletsInput[];
    connectOrCreate?: Prisma.wallet_transactionsCreateOrConnectWithoutWalletsInput | Prisma.wallet_transactionsCreateOrConnectWithoutWalletsInput[];
    upsert?: Prisma.wallet_transactionsUpsertWithWhereUniqueWithoutWalletsInput | Prisma.wallet_transactionsUpsertWithWhereUniqueWithoutWalletsInput[];
    createMany?: Prisma.wallet_transactionsCreateManyWalletsInputEnvelope;
    set?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    disconnect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    delete?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    connect?: Prisma.wallet_transactionsWhereUniqueInput | Prisma.wallet_transactionsWhereUniqueInput[];
    update?: Prisma.wallet_transactionsUpdateWithWhereUniqueWithoutWalletsInput | Prisma.wallet_transactionsUpdateWithWhereUniqueWithoutWalletsInput[];
    updateMany?: Prisma.wallet_transactionsUpdateManyWithWhereWithoutWalletsInput | Prisma.wallet_transactionsUpdateManyWithWhereWithoutWalletsInput[];
    deleteMany?: Prisma.wallet_transactionsScalarWhereInput | Prisma.wallet_transactionsScalarWhereInput[];
};
export type wallet_transactionsCreateWithoutOrdersInput = {
    transaction_id?: bigint | number;
    transaction_type?: $Enums.wallet_transactions_transaction_type | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    wallets?: Prisma.walletsCreateNestedOneWithoutWallet_transactionsInput;
};
export type wallet_transactionsUncheckedCreateWithoutOrdersInput = {
    transaction_id?: bigint | number;
    wallet_id?: bigint | number | null;
    transaction_type?: $Enums.wallet_transactions_transaction_type | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type wallet_transactionsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.wallet_transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutOrdersInput, Prisma.wallet_transactionsUncheckedCreateWithoutOrdersInput>;
};
export type wallet_transactionsCreateManyOrdersInputEnvelope = {
    data: Prisma.wallet_transactionsCreateManyOrdersInput | Prisma.wallet_transactionsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type wallet_transactionsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.wallet_transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wallet_transactionsUpdateWithoutOrdersInput, Prisma.wallet_transactionsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutOrdersInput, Prisma.wallet_transactionsUncheckedCreateWithoutOrdersInput>;
};
export type wallet_transactionsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.wallet_transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wallet_transactionsUpdateWithoutOrdersInput, Prisma.wallet_transactionsUncheckedUpdateWithoutOrdersInput>;
};
export type wallet_transactionsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.wallet_transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.wallet_transactionsUpdateManyMutationInput, Prisma.wallet_transactionsUncheckedUpdateManyWithoutOrdersInput>;
};
export type wallet_transactionsScalarWhereInput = {
    AND?: Prisma.wallet_transactionsScalarWhereInput | Prisma.wallet_transactionsScalarWhereInput[];
    OR?: Prisma.wallet_transactionsScalarWhereInput[];
    NOT?: Prisma.wallet_transactionsScalarWhereInput | Prisma.wallet_transactionsScalarWhereInput[];
    transaction_id?: Prisma.BigIntFilter<"wallet_transactions"> | bigint | number;
    wallet_id?: Prisma.BigIntNullableFilter<"wallet_transactions"> | bigint | number | null;
    order_id?: Prisma.BigIntNullableFilter<"wallet_transactions"> | bigint | number | null;
    transaction_type?: Prisma.Enumwallet_transactions_transaction_typeNullableFilter<"wallet_transactions"> | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.DecimalNullableFilter<"wallet_transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"wallet_transactions"> | Date | string | null;
};
export type wallet_transactionsCreateWithoutWalletsInput = {
    transaction_id?: bigint | number;
    transaction_type?: $Enums.wallet_transactions_transaction_type | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedOneWithoutWallet_transactionsInput;
};
export type wallet_transactionsUncheckedCreateWithoutWalletsInput = {
    transaction_id?: bigint | number;
    order_id?: bigint | number | null;
    transaction_type?: $Enums.wallet_transactions_transaction_type | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type wallet_transactionsCreateOrConnectWithoutWalletsInput = {
    where: Prisma.wallet_transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutWalletsInput, Prisma.wallet_transactionsUncheckedCreateWithoutWalletsInput>;
};
export type wallet_transactionsCreateManyWalletsInputEnvelope = {
    data: Prisma.wallet_transactionsCreateManyWalletsInput | Prisma.wallet_transactionsCreateManyWalletsInput[];
    skipDuplicates?: boolean;
};
export type wallet_transactionsUpsertWithWhereUniqueWithoutWalletsInput = {
    where: Prisma.wallet_transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wallet_transactionsUpdateWithoutWalletsInput, Prisma.wallet_transactionsUncheckedUpdateWithoutWalletsInput>;
    create: Prisma.XOR<Prisma.wallet_transactionsCreateWithoutWalletsInput, Prisma.wallet_transactionsUncheckedCreateWithoutWalletsInput>;
};
export type wallet_transactionsUpdateWithWhereUniqueWithoutWalletsInput = {
    where: Prisma.wallet_transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wallet_transactionsUpdateWithoutWalletsInput, Prisma.wallet_transactionsUncheckedUpdateWithoutWalletsInput>;
};
export type wallet_transactionsUpdateManyWithWhereWithoutWalletsInput = {
    where: Prisma.wallet_transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.wallet_transactionsUpdateManyMutationInput, Prisma.wallet_transactionsUncheckedUpdateManyWithoutWalletsInput>;
};
export type wallet_transactionsCreateManyOrdersInput = {
    transaction_id?: bigint | number;
    wallet_id?: bigint | number | null;
    transaction_type?: $Enums.wallet_transactions_transaction_type | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type wallet_transactionsUpdateWithoutOrdersInput = {
    transaction_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transaction_type?: Prisma.NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wallets?: Prisma.walletsUpdateOneWithoutWallet_transactionsNestedInput;
};
export type wallet_transactionsUncheckedUpdateWithoutOrdersInput = {
    transaction_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wallet_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    transaction_type?: Prisma.NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type wallet_transactionsUncheckedUpdateManyWithoutOrdersInput = {
    transaction_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wallet_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    transaction_type?: Prisma.NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type wallet_transactionsCreateManyWalletsInput = {
    transaction_id?: bigint | number;
    order_id?: bigint | number | null;
    transaction_type?: $Enums.wallet_transactions_transaction_type | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type wallet_transactionsUpdateWithoutWalletsInput = {
    transaction_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transaction_type?: Prisma.NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneWithoutWallet_transactionsNestedInput;
};
export type wallet_transactionsUncheckedUpdateWithoutWalletsInput = {
    transaction_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    transaction_type?: Prisma.NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type wallet_transactionsUncheckedUpdateManyWithoutWalletsInput = {
    transaction_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    transaction_type?: Prisma.NullableEnumwallet_transactions_transaction_typeFieldUpdateOperationsInput | $Enums.wallet_transactions_transaction_type | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type wallet_transactionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    transaction_id?: boolean;
    wallet_id?: boolean;
    order_id?: boolean;
    transaction_type?: boolean;
    amount?: boolean;
    created_at?: boolean;
    wallets?: boolean | Prisma.wallet_transactions$walletsArgs<ExtArgs>;
    orders?: boolean | Prisma.wallet_transactions$ordersArgs<ExtArgs>;
}, ExtArgs["result"]["wallet_transactions"]>;
export type wallet_transactionsSelectScalar = {
    transaction_id?: boolean;
    wallet_id?: boolean;
    order_id?: boolean;
    transaction_type?: boolean;
    amount?: boolean;
    created_at?: boolean;
};
export type wallet_transactionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"transaction_id" | "wallet_id" | "order_id" | "transaction_type" | "amount" | "created_at", ExtArgs["result"]["wallet_transactions"]>;
export type wallet_transactionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wallets?: boolean | Prisma.wallet_transactions$walletsArgs<ExtArgs>;
    orders?: boolean | Prisma.wallet_transactions$ordersArgs<ExtArgs>;
};
export type $wallet_transactionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wallet_transactions";
    objects: {
        wallets: Prisma.$walletsPayload<ExtArgs> | null;
        orders: Prisma.$ordersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        transaction_id: bigint;
        wallet_id: bigint | null;
        order_id: bigint | null;
        transaction_type: $Enums.wallet_transactions_transaction_type | null;
        amount: runtime.Decimal | null;
        created_at: Date | null;
    }, ExtArgs["result"]["wallet_transactions"]>;
    composites: {};
};
export type wallet_transactionsGetPayload<S extends boolean | null | undefined | wallet_transactionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload, S>;
export type wallet_transactionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<wallet_transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Wallet_transactionsCountAggregateInputType | true;
};
export interface wallet_transactionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wallet_transactions'];
        meta: {
            name: 'wallet_transactions';
        };
    };
    findUnique<T extends wallet_transactionsFindUniqueArgs>(args: Prisma.SelectSubset<T, wallet_transactionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__wallet_transactionsClient<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends wallet_transactionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, wallet_transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__wallet_transactionsClient<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends wallet_transactionsFindFirstArgs>(args?: Prisma.SelectSubset<T, wallet_transactionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__wallet_transactionsClient<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends wallet_transactionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, wallet_transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__wallet_transactionsClient<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends wallet_transactionsFindManyArgs>(args?: Prisma.SelectSubset<T, wallet_transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends wallet_transactionsCreateArgs>(args: Prisma.SelectSubset<T, wallet_transactionsCreateArgs<ExtArgs>>): Prisma.Prisma__wallet_transactionsClient<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends wallet_transactionsCreateManyArgs>(args?: Prisma.SelectSubset<T, wallet_transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends wallet_transactionsDeleteArgs>(args: Prisma.SelectSubset<T, wallet_transactionsDeleteArgs<ExtArgs>>): Prisma.Prisma__wallet_transactionsClient<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends wallet_transactionsUpdateArgs>(args: Prisma.SelectSubset<T, wallet_transactionsUpdateArgs<ExtArgs>>): Prisma.Prisma__wallet_transactionsClient<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends wallet_transactionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, wallet_transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends wallet_transactionsUpdateManyArgs>(args: Prisma.SelectSubset<T, wallet_transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends wallet_transactionsUpsertArgs>(args: Prisma.SelectSubset<T, wallet_transactionsUpsertArgs<ExtArgs>>): Prisma.Prisma__wallet_transactionsClient<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends wallet_transactionsCountArgs>(args?: Prisma.Subset<T, wallet_transactionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Wallet_transactionsCountAggregateOutputType> : number>;
    aggregate<T extends Wallet_transactionsAggregateArgs>(args: Prisma.Subset<T, Wallet_transactionsAggregateArgs>): Prisma.PrismaPromise<GetWallet_transactionsAggregateType<T>>;
    groupBy<T extends wallet_transactionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: wallet_transactionsGroupByArgs['orderBy'];
    } : {
        orderBy?: wallet_transactionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, wallet_transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWallet_transactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: wallet_transactionsFieldRefs;
}
export interface Prisma__wallet_transactionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wallets<T extends Prisma.wallet_transactions$walletsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wallet_transactions$walletsArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.wallet_transactions$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wallet_transactions$ordersArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface wallet_transactionsFieldRefs {
    readonly transaction_id: Prisma.FieldRef<"wallet_transactions", 'BigInt'>;
    readonly wallet_id: Prisma.FieldRef<"wallet_transactions", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"wallet_transactions", 'BigInt'>;
    readonly transaction_type: Prisma.FieldRef<"wallet_transactions", 'wallet_transactions_transaction_type'>;
    readonly amount: Prisma.FieldRef<"wallet_transactions", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"wallet_transactions", 'DateTime'>;
}
export type wallet_transactionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
    where: Prisma.wallet_transactionsWhereUniqueInput;
};
export type wallet_transactionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
    where: Prisma.wallet_transactionsWhereUniqueInput;
};
export type wallet_transactionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
    where?: Prisma.wallet_transactionsWhereInput;
    orderBy?: Prisma.wallet_transactionsOrderByWithRelationInput | Prisma.wallet_transactionsOrderByWithRelationInput[];
    cursor?: Prisma.wallet_transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wallet_transactionsScalarFieldEnum | Prisma.Wallet_transactionsScalarFieldEnum[];
};
export type wallet_transactionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
    where?: Prisma.wallet_transactionsWhereInput;
    orderBy?: Prisma.wallet_transactionsOrderByWithRelationInput | Prisma.wallet_transactionsOrderByWithRelationInput[];
    cursor?: Prisma.wallet_transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wallet_transactionsScalarFieldEnum | Prisma.Wallet_transactionsScalarFieldEnum[];
};
export type wallet_transactionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
    where?: Prisma.wallet_transactionsWhereInput;
    orderBy?: Prisma.wallet_transactionsOrderByWithRelationInput | Prisma.wallet_transactionsOrderByWithRelationInput[];
    cursor?: Prisma.wallet_transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wallet_transactionsScalarFieldEnum | Prisma.Wallet_transactionsScalarFieldEnum[];
};
export type wallet_transactionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.wallet_transactionsCreateInput, Prisma.wallet_transactionsUncheckedCreateInput>;
};
export type wallet_transactionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.wallet_transactionsCreateManyInput | Prisma.wallet_transactionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type wallet_transactionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.wallet_transactionsUpdateInput, Prisma.wallet_transactionsUncheckedUpdateInput>;
    where: Prisma.wallet_transactionsWhereUniqueInput;
};
export type wallet_transactionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.wallet_transactionsUpdateManyMutationInput, Prisma.wallet_transactionsUncheckedUpdateManyInput>;
    where?: Prisma.wallet_transactionsWhereInput;
    limit?: number;
};
export type wallet_transactionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
    where: Prisma.wallet_transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wallet_transactionsCreateInput, Prisma.wallet_transactionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.wallet_transactionsUpdateInput, Prisma.wallet_transactionsUncheckedUpdateInput>;
};
export type wallet_transactionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
    where: Prisma.wallet_transactionsWhereUniqueInput;
};
export type wallet_transactionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wallet_transactionsWhereInput;
    limit?: number;
};
export type wallet_transactions$walletsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where?: Prisma.walletsWhereInput;
};
export type wallet_transactions$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
};
export type wallet_transactionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wallet_transactionsSelect<ExtArgs> | null;
    omit?: Prisma.wallet_transactionsOmit<ExtArgs> | null;
    include?: Prisma.wallet_transactionsInclude<ExtArgs> | null;
};
export {};
