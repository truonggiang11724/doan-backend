import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type walletsModel = runtime.Types.Result.DefaultSelection<Prisma.$walletsPayload>;
export type AggregateWallets = {
    _count: WalletsCountAggregateOutputType | null;
    _avg: WalletsAvgAggregateOutputType | null;
    _sum: WalletsSumAggregateOutputType | null;
    _min: WalletsMinAggregateOutputType | null;
    _max: WalletsMaxAggregateOutputType | null;
};
export type WalletsAvgAggregateOutputType = {
    wallet_id: number | null;
    seller_id: number | null;
    available_balance: runtime.Decimal | null;
    pending_balance: runtime.Decimal | null;
    withdrawn_balance: runtime.Decimal | null;
    total_revenue: runtime.Decimal | null;
};
export type WalletsSumAggregateOutputType = {
    wallet_id: bigint | null;
    seller_id: bigint | null;
    available_balance: runtime.Decimal | null;
    pending_balance: runtime.Decimal | null;
    withdrawn_balance: runtime.Decimal | null;
    total_revenue: runtime.Decimal | null;
};
export type WalletsMinAggregateOutputType = {
    wallet_id: bigint | null;
    seller_id: bigint | null;
    available_balance: runtime.Decimal | null;
    pending_balance: runtime.Decimal | null;
    withdrawn_balance: runtime.Decimal | null;
    total_revenue: runtime.Decimal | null;
    updated_at: Date | null;
};
export type WalletsMaxAggregateOutputType = {
    wallet_id: bigint | null;
    seller_id: bigint | null;
    available_balance: runtime.Decimal | null;
    pending_balance: runtime.Decimal | null;
    withdrawn_balance: runtime.Decimal | null;
    total_revenue: runtime.Decimal | null;
    updated_at: Date | null;
};
export type WalletsCountAggregateOutputType = {
    wallet_id: number;
    seller_id: number;
    available_balance: number;
    pending_balance: number;
    withdrawn_balance: number;
    total_revenue: number;
    updated_at: number;
    _all: number;
};
export type WalletsAvgAggregateInputType = {
    wallet_id?: true;
    seller_id?: true;
    available_balance?: true;
    pending_balance?: true;
    withdrawn_balance?: true;
    total_revenue?: true;
};
export type WalletsSumAggregateInputType = {
    wallet_id?: true;
    seller_id?: true;
    available_balance?: true;
    pending_balance?: true;
    withdrawn_balance?: true;
    total_revenue?: true;
};
export type WalletsMinAggregateInputType = {
    wallet_id?: true;
    seller_id?: true;
    available_balance?: true;
    pending_balance?: true;
    withdrawn_balance?: true;
    total_revenue?: true;
    updated_at?: true;
};
export type WalletsMaxAggregateInputType = {
    wallet_id?: true;
    seller_id?: true;
    available_balance?: true;
    pending_balance?: true;
    withdrawn_balance?: true;
    total_revenue?: true;
    updated_at?: true;
};
export type WalletsCountAggregateInputType = {
    wallet_id?: true;
    seller_id?: true;
    available_balance?: true;
    pending_balance?: true;
    withdrawn_balance?: true;
    total_revenue?: true;
    updated_at?: true;
    _all?: true;
};
export type WalletsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithRelationInput | Prisma.walletsOrderByWithRelationInput[];
    cursor?: Prisma.walletsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WalletsCountAggregateInputType;
    _avg?: WalletsAvgAggregateInputType;
    _sum?: WalletsSumAggregateInputType;
    _min?: WalletsMinAggregateInputType;
    _max?: WalletsMaxAggregateInputType;
};
export type GetWalletsAggregateType<T extends WalletsAggregateArgs> = {
    [P in keyof T & keyof AggregateWallets]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWallets[P]> : Prisma.GetScalarType<T[P], AggregateWallets[P]>;
};
export type walletsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithAggregationInput | Prisma.walletsOrderByWithAggregationInput[];
    by: Prisma.WalletsScalarFieldEnum[] | Prisma.WalletsScalarFieldEnum;
    having?: Prisma.walletsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WalletsCountAggregateInputType | true;
    _avg?: WalletsAvgAggregateInputType;
    _sum?: WalletsSumAggregateInputType;
    _min?: WalletsMinAggregateInputType;
    _max?: WalletsMaxAggregateInputType;
};
export type WalletsGroupByOutputType = {
    wallet_id: bigint;
    seller_id: bigint | null;
    available_balance: runtime.Decimal | null;
    pending_balance: runtime.Decimal | null;
    withdrawn_balance: runtime.Decimal | null;
    total_revenue: runtime.Decimal | null;
    updated_at: Date | null;
    _count: WalletsCountAggregateOutputType | null;
    _avg: WalletsAvgAggregateOutputType | null;
    _sum: WalletsSumAggregateOutputType | null;
    _min: WalletsMinAggregateOutputType | null;
    _max: WalletsMaxAggregateOutputType | null;
};
type GetWalletsGroupByPayload<T extends walletsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WalletsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WalletsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WalletsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WalletsGroupByOutputType[P]>;
}>>;
export type walletsWhereInput = {
    AND?: Prisma.walletsWhereInput | Prisma.walletsWhereInput[];
    OR?: Prisma.walletsWhereInput[];
    NOT?: Prisma.walletsWhereInput | Prisma.walletsWhereInput[];
    wallet_id?: Prisma.BigIntFilter<"wallets"> | bigint | number;
    seller_id?: Prisma.BigIntNullableFilter<"wallets"> | bigint | number | null;
    available_balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"wallets"> | Date | string | null;
    wallet_transactions?: Prisma.Wallet_transactionsListRelationFilter;
    sellers?: Prisma.XOR<Prisma.SellersNullableScalarRelationFilter, Prisma.sellersWhereInput> | null;
};
export type walletsOrderByWithRelationInput = {
    wallet_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    available_balance?: Prisma.SortOrderInput | Prisma.SortOrder;
    pending_balance?: Prisma.SortOrderInput | Prisma.SortOrder;
    withdrawn_balance?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_revenue?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    wallet_transactions?: Prisma.wallet_transactionsOrderByRelationAggregateInput;
    sellers?: Prisma.sellersOrderByWithRelationInput;
};
export type walletsWhereUniqueInput = Prisma.AtLeast<{
    wallet_id?: bigint | number;
    AND?: Prisma.walletsWhereInput | Prisma.walletsWhereInput[];
    OR?: Prisma.walletsWhereInput[];
    NOT?: Prisma.walletsWhereInput | Prisma.walletsWhereInput[];
    seller_id?: Prisma.BigIntNullableFilter<"wallets"> | bigint | number | null;
    available_balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"wallets"> | Date | string | null;
    wallet_transactions?: Prisma.Wallet_transactionsListRelationFilter;
    sellers?: Prisma.XOR<Prisma.SellersNullableScalarRelationFilter, Prisma.sellersWhereInput> | null;
}, "wallet_id">;
export type walletsOrderByWithAggregationInput = {
    wallet_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    available_balance?: Prisma.SortOrderInput | Prisma.SortOrder;
    pending_balance?: Prisma.SortOrderInput | Prisma.SortOrder;
    withdrawn_balance?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_revenue?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.walletsCountOrderByAggregateInput;
    _avg?: Prisma.walletsAvgOrderByAggregateInput;
    _max?: Prisma.walletsMaxOrderByAggregateInput;
    _min?: Prisma.walletsMinOrderByAggregateInput;
    _sum?: Prisma.walletsSumOrderByAggregateInput;
};
export type walletsScalarWhereWithAggregatesInput = {
    AND?: Prisma.walletsScalarWhereWithAggregatesInput | Prisma.walletsScalarWhereWithAggregatesInput[];
    OR?: Prisma.walletsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.walletsScalarWhereWithAggregatesInput | Prisma.walletsScalarWhereWithAggregatesInput[];
    wallet_id?: Prisma.BigIntWithAggregatesFilter<"wallets"> | bigint | number;
    seller_id?: Prisma.BigIntNullableWithAggregatesFilter<"wallets"> | bigint | number | null;
    available_balance?: Prisma.DecimalNullableWithAggregatesFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.DecimalNullableWithAggregatesFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.DecimalNullableWithAggregatesFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.DecimalNullableWithAggregatesFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"wallets"> | Date | string | null;
};
export type walletsCreateInput = {
    wallet_id?: bigint | number;
    available_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutWalletsInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutWalletsInput;
};
export type walletsUncheckedCreateInput = {
    wallet_id?: bigint | number;
    seller_id?: bigint | number | null;
    available_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutWalletsInput;
};
export type walletsUpdateInput = {
    wallet_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    available_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutWalletsNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutWalletsNestedInput;
};
export type walletsUncheckedUpdateInput = {
    wallet_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    available_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutWalletsNestedInput;
};
export type walletsCreateManyInput = {
    wallet_id?: bigint | number;
    seller_id?: bigint | number | null;
    available_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
};
export type walletsUpdateManyMutationInput = {
    wallet_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    available_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type walletsUncheckedUpdateManyInput = {
    wallet_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    available_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WalletsListRelationFilter = {
    every?: Prisma.walletsWhereInput;
    some?: Prisma.walletsWhereInput;
    none?: Prisma.walletsWhereInput;
};
export type walletsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WalletsNullableScalarRelationFilter = {
    is?: Prisma.walletsWhereInput | null;
    isNot?: Prisma.walletsWhereInput | null;
};
export type walletsCountOrderByAggregateInput = {
    wallet_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    available_balance?: Prisma.SortOrder;
    pending_balance?: Prisma.SortOrder;
    withdrawn_balance?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type walletsAvgOrderByAggregateInput = {
    wallet_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    available_balance?: Prisma.SortOrder;
    pending_balance?: Prisma.SortOrder;
    withdrawn_balance?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
};
export type walletsMaxOrderByAggregateInput = {
    wallet_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    available_balance?: Prisma.SortOrder;
    pending_balance?: Prisma.SortOrder;
    withdrawn_balance?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type walletsMinOrderByAggregateInput = {
    wallet_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    available_balance?: Prisma.SortOrder;
    pending_balance?: Prisma.SortOrder;
    withdrawn_balance?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type walletsSumOrderByAggregateInput = {
    wallet_id?: Prisma.SortOrder;
    seller_id?: Prisma.SortOrder;
    available_balance?: Prisma.SortOrder;
    pending_balance?: Prisma.SortOrder;
    withdrawn_balance?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
};
export type walletsCreateNestedManyWithoutSellersInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutSellersInput, Prisma.walletsUncheckedCreateWithoutSellersInput> | Prisma.walletsCreateWithoutSellersInput[] | Prisma.walletsUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutSellersInput | Prisma.walletsCreateOrConnectWithoutSellersInput[];
    createMany?: Prisma.walletsCreateManySellersInputEnvelope;
    connect?: Prisma.walletsWhereUniqueInput | Prisma.walletsWhereUniqueInput[];
};
export type walletsUncheckedCreateNestedManyWithoutSellersInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutSellersInput, Prisma.walletsUncheckedCreateWithoutSellersInput> | Prisma.walletsCreateWithoutSellersInput[] | Prisma.walletsUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutSellersInput | Prisma.walletsCreateOrConnectWithoutSellersInput[];
    createMany?: Prisma.walletsCreateManySellersInputEnvelope;
    connect?: Prisma.walletsWhereUniqueInput | Prisma.walletsWhereUniqueInput[];
};
export type walletsUpdateManyWithoutSellersNestedInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutSellersInput, Prisma.walletsUncheckedCreateWithoutSellersInput> | Prisma.walletsCreateWithoutSellersInput[] | Prisma.walletsUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutSellersInput | Prisma.walletsCreateOrConnectWithoutSellersInput[];
    upsert?: Prisma.walletsUpsertWithWhereUniqueWithoutSellersInput | Prisma.walletsUpsertWithWhereUniqueWithoutSellersInput[];
    createMany?: Prisma.walletsCreateManySellersInputEnvelope;
    set?: Prisma.walletsWhereUniqueInput | Prisma.walletsWhereUniqueInput[];
    disconnect?: Prisma.walletsWhereUniqueInput | Prisma.walletsWhereUniqueInput[];
    delete?: Prisma.walletsWhereUniqueInput | Prisma.walletsWhereUniqueInput[];
    connect?: Prisma.walletsWhereUniqueInput | Prisma.walletsWhereUniqueInput[];
    update?: Prisma.walletsUpdateWithWhereUniqueWithoutSellersInput | Prisma.walletsUpdateWithWhereUniqueWithoutSellersInput[];
    updateMany?: Prisma.walletsUpdateManyWithWhereWithoutSellersInput | Prisma.walletsUpdateManyWithWhereWithoutSellersInput[];
    deleteMany?: Prisma.walletsScalarWhereInput | Prisma.walletsScalarWhereInput[];
};
export type walletsUncheckedUpdateManyWithoutSellersNestedInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutSellersInput, Prisma.walletsUncheckedCreateWithoutSellersInput> | Prisma.walletsCreateWithoutSellersInput[] | Prisma.walletsUncheckedCreateWithoutSellersInput[];
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutSellersInput | Prisma.walletsCreateOrConnectWithoutSellersInput[];
    upsert?: Prisma.walletsUpsertWithWhereUniqueWithoutSellersInput | Prisma.walletsUpsertWithWhereUniqueWithoutSellersInput[];
    createMany?: Prisma.walletsCreateManySellersInputEnvelope;
    set?: Prisma.walletsWhereUniqueInput | Prisma.walletsWhereUniqueInput[];
    disconnect?: Prisma.walletsWhereUniqueInput | Prisma.walletsWhereUniqueInput[];
    delete?: Prisma.walletsWhereUniqueInput | Prisma.walletsWhereUniqueInput[];
    connect?: Prisma.walletsWhereUniqueInput | Prisma.walletsWhereUniqueInput[];
    update?: Prisma.walletsUpdateWithWhereUniqueWithoutSellersInput | Prisma.walletsUpdateWithWhereUniqueWithoutSellersInput[];
    updateMany?: Prisma.walletsUpdateManyWithWhereWithoutSellersInput | Prisma.walletsUpdateManyWithWhereWithoutSellersInput[];
    deleteMany?: Prisma.walletsScalarWhereInput | Prisma.walletsScalarWhereInput[];
};
export type walletsCreateNestedOneWithoutWallet_transactionsInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutWallet_transactionsInput, Prisma.walletsUncheckedCreateWithoutWallet_transactionsInput>;
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutWallet_transactionsInput;
    connect?: Prisma.walletsWhereUniqueInput;
};
export type walletsUpdateOneWithoutWallet_transactionsNestedInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutWallet_transactionsInput, Prisma.walletsUncheckedCreateWithoutWallet_transactionsInput>;
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutWallet_transactionsInput;
    upsert?: Prisma.walletsUpsertWithoutWallet_transactionsInput;
    disconnect?: Prisma.walletsWhereInput | boolean;
    delete?: Prisma.walletsWhereInput | boolean;
    connect?: Prisma.walletsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.walletsUpdateToOneWithWhereWithoutWallet_transactionsInput, Prisma.walletsUpdateWithoutWallet_transactionsInput>, Prisma.walletsUncheckedUpdateWithoutWallet_transactionsInput>;
};
export type walletsCreateWithoutSellersInput = {
    wallet_id?: bigint | number;
    available_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
    wallet_transactions?: Prisma.wallet_transactionsCreateNestedManyWithoutWalletsInput;
};
export type walletsUncheckedCreateWithoutSellersInput = {
    wallet_id?: bigint | number;
    available_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedCreateNestedManyWithoutWalletsInput;
};
export type walletsCreateOrConnectWithoutSellersInput = {
    where: Prisma.walletsWhereUniqueInput;
    create: Prisma.XOR<Prisma.walletsCreateWithoutSellersInput, Prisma.walletsUncheckedCreateWithoutSellersInput>;
};
export type walletsCreateManySellersInputEnvelope = {
    data: Prisma.walletsCreateManySellersInput | Prisma.walletsCreateManySellersInput[];
    skipDuplicates?: boolean;
};
export type walletsUpsertWithWhereUniqueWithoutSellersInput = {
    where: Prisma.walletsWhereUniqueInput;
    update: Prisma.XOR<Prisma.walletsUpdateWithoutSellersInput, Prisma.walletsUncheckedUpdateWithoutSellersInput>;
    create: Prisma.XOR<Prisma.walletsCreateWithoutSellersInput, Prisma.walletsUncheckedCreateWithoutSellersInput>;
};
export type walletsUpdateWithWhereUniqueWithoutSellersInput = {
    where: Prisma.walletsWhereUniqueInput;
    data: Prisma.XOR<Prisma.walletsUpdateWithoutSellersInput, Prisma.walletsUncheckedUpdateWithoutSellersInput>;
};
export type walletsUpdateManyWithWhereWithoutSellersInput = {
    where: Prisma.walletsScalarWhereInput;
    data: Prisma.XOR<Prisma.walletsUpdateManyMutationInput, Prisma.walletsUncheckedUpdateManyWithoutSellersInput>;
};
export type walletsScalarWhereInput = {
    AND?: Prisma.walletsScalarWhereInput | Prisma.walletsScalarWhereInput[];
    OR?: Prisma.walletsScalarWhereInput[];
    NOT?: Prisma.walletsScalarWhereInput | Prisma.walletsScalarWhereInput[];
    wallet_id?: Prisma.BigIntFilter<"wallets"> | bigint | number;
    seller_id?: Prisma.BigIntNullableFilter<"wallets"> | bigint | number | null;
    available_balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"wallets"> | Date | string | null;
};
export type walletsCreateWithoutWallet_transactionsInput = {
    wallet_id?: bigint | number;
    available_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
    sellers?: Prisma.sellersCreateNestedOneWithoutWalletsInput;
};
export type walletsUncheckedCreateWithoutWallet_transactionsInput = {
    wallet_id?: bigint | number;
    seller_id?: bigint | number | null;
    available_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
};
export type walletsCreateOrConnectWithoutWallet_transactionsInput = {
    where: Prisma.walletsWhereUniqueInput;
    create: Prisma.XOR<Prisma.walletsCreateWithoutWallet_transactionsInput, Prisma.walletsUncheckedCreateWithoutWallet_transactionsInput>;
};
export type walletsUpsertWithoutWallet_transactionsInput = {
    update: Prisma.XOR<Prisma.walletsUpdateWithoutWallet_transactionsInput, Prisma.walletsUncheckedUpdateWithoutWallet_transactionsInput>;
    create: Prisma.XOR<Prisma.walletsCreateWithoutWallet_transactionsInput, Prisma.walletsUncheckedCreateWithoutWallet_transactionsInput>;
    where?: Prisma.walletsWhereInput;
};
export type walletsUpdateToOneWithWhereWithoutWallet_transactionsInput = {
    where?: Prisma.walletsWhereInput;
    data: Prisma.XOR<Prisma.walletsUpdateWithoutWallet_transactionsInput, Prisma.walletsUncheckedUpdateWithoutWallet_transactionsInput>;
};
export type walletsUpdateWithoutWallet_transactionsInput = {
    wallet_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    available_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellers?: Prisma.sellersUpdateOneWithoutWalletsNestedInput;
};
export type walletsUncheckedUpdateWithoutWallet_transactionsInput = {
    wallet_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seller_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    available_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type walletsCreateManySellersInput = {
    wallet_id?: bigint | number;
    available_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
};
export type walletsUpdateWithoutSellersInput = {
    wallet_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    available_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wallet_transactions?: Prisma.wallet_transactionsUpdateManyWithoutWalletsNestedInput;
};
export type walletsUncheckedUpdateWithoutSellersInput = {
    wallet_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    available_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wallet_transactions?: Prisma.wallet_transactionsUncheckedUpdateManyWithoutWalletsNestedInput;
};
export type walletsUncheckedUpdateManyWithoutSellersInput = {
    wallet_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    available_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    pending_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    withdrawn_balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_revenue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WalletsCountOutputType = {
    wallet_transactions: number;
};
export type WalletsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wallet_transactions?: boolean | WalletsCountOutputTypeCountWallet_transactionsArgs;
};
export type WalletsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WalletsCountOutputTypeSelect<ExtArgs> | null;
};
export type WalletsCountOutputTypeCountWallet_transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wallet_transactionsWhereInput;
};
export type walletsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    wallet_id?: boolean;
    seller_id?: boolean;
    available_balance?: boolean;
    pending_balance?: boolean;
    withdrawn_balance?: boolean;
    total_revenue?: boolean;
    updated_at?: boolean;
    wallet_transactions?: boolean | Prisma.wallets$wallet_transactionsArgs<ExtArgs>;
    sellers?: boolean | Prisma.wallets$sellersArgs<ExtArgs>;
    _count?: boolean | Prisma.WalletsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wallets"]>;
export type walletsSelectScalar = {
    wallet_id?: boolean;
    seller_id?: boolean;
    available_balance?: boolean;
    pending_balance?: boolean;
    withdrawn_balance?: boolean;
    total_revenue?: boolean;
    updated_at?: boolean;
};
export type walletsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"wallet_id" | "seller_id" | "available_balance" | "pending_balance" | "withdrawn_balance" | "total_revenue" | "updated_at", ExtArgs["result"]["wallets"]>;
export type walletsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wallet_transactions?: boolean | Prisma.wallets$wallet_transactionsArgs<ExtArgs>;
    sellers?: boolean | Prisma.wallets$sellersArgs<ExtArgs>;
    _count?: boolean | Prisma.WalletsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $walletsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wallets";
    objects: {
        wallet_transactions: Prisma.$wallet_transactionsPayload<ExtArgs>[];
        sellers: Prisma.$sellersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        wallet_id: bigint;
        seller_id: bigint | null;
        available_balance: runtime.Decimal | null;
        pending_balance: runtime.Decimal | null;
        withdrawn_balance: runtime.Decimal | null;
        total_revenue: runtime.Decimal | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["wallets"]>;
    composites: {};
};
export type walletsGetPayload<S extends boolean | null | undefined | walletsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$walletsPayload, S>;
export type walletsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<walletsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WalletsCountAggregateInputType | true;
};
export interface walletsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wallets'];
        meta: {
            name: 'wallets';
        };
    };
    findUnique<T extends walletsFindUniqueArgs>(args: Prisma.SelectSubset<T, walletsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends walletsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, walletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends walletsFindFirstArgs>(args?: Prisma.SelectSubset<T, walletsFindFirstArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends walletsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, walletsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends walletsFindManyArgs>(args?: Prisma.SelectSubset<T, walletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends walletsCreateArgs>(args: Prisma.SelectSubset<T, walletsCreateArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends walletsCreateManyArgs>(args?: Prisma.SelectSubset<T, walletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends walletsDeleteArgs>(args: Prisma.SelectSubset<T, walletsDeleteArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends walletsUpdateArgs>(args: Prisma.SelectSubset<T, walletsUpdateArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends walletsDeleteManyArgs>(args?: Prisma.SelectSubset<T, walletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends walletsUpdateManyArgs>(args: Prisma.SelectSubset<T, walletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends walletsUpsertArgs>(args: Prisma.SelectSubset<T, walletsUpsertArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends walletsCountArgs>(args?: Prisma.Subset<T, walletsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WalletsCountAggregateOutputType> : number>;
    aggregate<T extends WalletsAggregateArgs>(args: Prisma.Subset<T, WalletsAggregateArgs>): Prisma.PrismaPromise<GetWalletsAggregateType<T>>;
    groupBy<T extends walletsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: walletsGroupByArgs['orderBy'];
    } : {
        orderBy?: walletsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, walletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: walletsFieldRefs;
}
export interface Prisma__walletsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wallet_transactions<T extends Prisma.wallets$wallet_transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wallets$wallet_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wallet_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sellers<T extends Prisma.wallets$sellersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wallets$sellersArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface walletsFieldRefs {
    readonly wallet_id: Prisma.FieldRef<"wallets", 'BigInt'>;
    readonly seller_id: Prisma.FieldRef<"wallets", 'BigInt'>;
    readonly available_balance: Prisma.FieldRef<"wallets", 'Decimal'>;
    readonly pending_balance: Prisma.FieldRef<"wallets", 'Decimal'>;
    readonly withdrawn_balance: Prisma.FieldRef<"wallets", 'Decimal'>;
    readonly total_revenue: Prisma.FieldRef<"wallets", 'Decimal'>;
    readonly updated_at: Prisma.FieldRef<"wallets", 'DateTime'>;
}
export type walletsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where: Prisma.walletsWhereUniqueInput;
};
export type walletsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where: Prisma.walletsWhereUniqueInput;
};
export type walletsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithRelationInput | Prisma.walletsOrderByWithRelationInput[];
    cursor?: Prisma.walletsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WalletsScalarFieldEnum | Prisma.WalletsScalarFieldEnum[];
};
export type walletsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithRelationInput | Prisma.walletsOrderByWithRelationInput[];
    cursor?: Prisma.walletsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WalletsScalarFieldEnum | Prisma.WalletsScalarFieldEnum[];
};
export type walletsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithRelationInput | Prisma.walletsOrderByWithRelationInput[];
    cursor?: Prisma.walletsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WalletsScalarFieldEnum | Prisma.WalletsScalarFieldEnum[];
};
export type walletsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.walletsCreateInput, Prisma.walletsUncheckedCreateInput>;
};
export type walletsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.walletsCreateManyInput | Prisma.walletsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type walletsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.walletsUpdateInput, Prisma.walletsUncheckedUpdateInput>;
    where: Prisma.walletsWhereUniqueInput;
};
export type walletsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.walletsUpdateManyMutationInput, Prisma.walletsUncheckedUpdateManyInput>;
    where?: Prisma.walletsWhereInput;
    limit?: number;
};
export type walletsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where: Prisma.walletsWhereUniqueInput;
    create: Prisma.XOR<Prisma.walletsCreateInput, Prisma.walletsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.walletsUpdateInput, Prisma.walletsUncheckedUpdateInput>;
};
export type walletsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where: Prisma.walletsWhereUniqueInput;
};
export type walletsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.walletsWhereInput;
    limit?: number;
};
export type wallets$wallet_transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type wallets$sellersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where?: Prisma.sellersWhereInput;
};
export type walletsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
};
export {};
