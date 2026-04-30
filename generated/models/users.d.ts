import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersAvgAggregateOutputType = {
    user_id: number | null;
};
export type UsersSumAggregateOutputType = {
    user_id: bigint | null;
};
export type UsersMinAggregateOutputType = {
    user_id: bigint | null;
    tiktok_user_id: string | null;
    username: string | null;
    password_hash: string | null;
    email: string | null;
    phone: string | null;
    full_name: string | null;
    avatar_url: string | null;
    role: $Enums.users_role | null;
    status: $Enums.users_status | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UsersMaxAggregateOutputType = {
    user_id: bigint | null;
    tiktok_user_id: string | null;
    username: string | null;
    password_hash: string | null;
    email: string | null;
    phone: string | null;
    full_name: string | null;
    avatar_url: string | null;
    role: $Enums.users_role | null;
    status: $Enums.users_status | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UsersCountAggregateOutputType = {
    user_id: number;
    tiktok_user_id: number;
    username: number;
    password_hash: number;
    email: number;
    phone: number;
    full_name: number;
    avatar_url: number;
    role: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UsersAvgAggregateInputType = {
    user_id?: true;
};
export type UsersSumAggregateInputType = {
    user_id?: true;
};
export type UsersMinAggregateInputType = {
    user_id?: true;
    tiktok_user_id?: true;
    username?: true;
    password_hash?: true;
    email?: true;
    phone?: true;
    full_name?: true;
    avatar_url?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type UsersMaxAggregateInputType = {
    user_id?: true;
    tiktok_user_id?: true;
    username?: true;
    password_hash?: true;
    email?: true;
    phone?: true;
    full_name?: true;
    avatar_url?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type UsersCountAggregateInputType = {
    user_id?: true;
    tiktok_user_id?: true;
    username?: true;
    password_hash?: true;
    email?: true;
    phone?: true;
    full_name?: true;
    avatar_url?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    user_id: bigint;
    tiktok_user_id: string | null;
    username: string | null;
    password_hash: string | null;
    email: string | null;
    phone: string | null;
    full_name: string | null;
    avatar_url: string | null;
    role: $Enums.users_role | null;
    status: $Enums.users_status | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    user_id?: Prisma.BigIntFilter<"users"> | bigint | number;
    tiktok_user_id?: Prisma.StringNullableFilter<"users"> | string | null;
    username?: Prisma.StringNullableFilter<"users"> | string | null;
    password_hash?: Prisma.StringNullableFilter<"users"> | string | null;
    email?: Prisma.StringNullableFilter<"users"> | string | null;
    phone?: Prisma.StringNullableFilter<"users"> | string | null;
    full_name?: Prisma.StringNullableFilter<"users"> | string | null;
    avatar_url?: Prisma.StringNullableFilter<"users"> | string | null;
    role?: Prisma.Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null;
    status?: Prisma.Enumusers_statusNullableFilter<"users"> | $Enums.users_status | null;
    created_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    sellers?: Prisma.XOR<Prisma.SellersNullableScalarRelationFilter, Prisma.sellersWhereInput> | null;
};
export type usersOrderByWithRelationInput = {
    user_id?: Prisma.SortOrder;
    tiktok_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    password_hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    full_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    customers?: Prisma.customersOrderByWithRelationInput;
    sellers?: Prisma.sellersOrderByWithRelationInput;
    _relevance?: Prisma.usersOrderByRelevanceInput;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: bigint | number;
    tiktok_user_id?: string;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    username?: Prisma.StringNullableFilter<"users"> | string | null;
    password_hash?: Prisma.StringNullableFilter<"users"> | string | null;
    email?: Prisma.StringNullableFilter<"users"> | string | null;
    phone?: Prisma.StringNullableFilter<"users"> | string | null;
    full_name?: Prisma.StringNullableFilter<"users"> | string | null;
    avatar_url?: Prisma.StringNullableFilter<"users"> | string | null;
    role?: Prisma.Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null;
    status?: Prisma.Enumusers_statusNullableFilter<"users"> | $Enums.users_status | null;
    created_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    sellers?: Prisma.XOR<Prisma.SellersNullableScalarRelationFilter, Prisma.sellersWhereInput> | null;
}, "user_id" | "tiktok_user_id">;
export type usersOrderByWithAggregationInput = {
    user_id?: Prisma.SortOrder;
    tiktok_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    password_hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    full_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _avg?: Prisma.usersAvgOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
    _sum?: Prisma.usersSumOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    user_id?: Prisma.BigIntWithAggregatesFilter<"users"> | bigint | number;
    tiktok_user_id?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    username?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    password_hash?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    full_name?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    avatar_url?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    role?: Prisma.Enumusers_roleNullableWithAggregatesFilter<"users"> | $Enums.users_role | null;
    status?: Prisma.Enumusers_statusNullableWithAggregatesFilter<"users"> | $Enums.users_status | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
};
export type usersCreateInput = {
    user_id?: bigint | number;
    tiktok_user_id?: string | null;
    username?: string | null;
    password_hash?: string | null;
    email?: string | null;
    phone?: string | null;
    full_name?: string | null;
    avatar_url?: string | null;
    role?: $Enums.users_role | null;
    status?: $Enums.users_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    sellers?: Prisma.sellersCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateInput = {
    user_id?: bigint | number;
    tiktok_user_id?: string | null;
    username?: string | null;
    password_hash?: string | null;
    email?: string | null;
    phone?: string | null;
    full_name?: string | null;
    avatar_url?: string | null;
    role?: $Enums.users_role | null;
    status?: $Enums.users_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    sellers?: Prisma.sellersUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersUpdateInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tiktok_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null;
    status?: Prisma.NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    sellers?: Prisma.sellersUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tiktok_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null;
    status?: Prisma.NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    sellers?: Prisma.sellersUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersCreateManyInput = {
    user_id?: bigint | number;
    tiktok_user_id?: string | null;
    username?: string | null;
    password_hash?: string | null;
    email?: string | null;
    phone?: string | null;
    full_name?: string | null;
    avatar_url?: string | null;
    role?: $Enums.users_role | null;
    status?: $Enums.users_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type usersUpdateManyMutationInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tiktok_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null;
    status?: Prisma.NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type usersUncheckedUpdateManyInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tiktok_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null;
    status?: Prisma.NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.usersWhereInput;
    isNot?: Prisma.usersWhereInput;
};
export type usersOrderByRelevanceInput = {
    fields: Prisma.usersOrderByRelevanceFieldEnum | Prisma.usersOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type usersCountOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    tiktok_user_id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersAvgOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    tiktok_user_id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    tiktok_user_id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersSumOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
};
export type usersCreateNestedOneWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutCustomersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutCustomersInput;
    upsert?: Prisma.usersUpsertWithoutCustomersInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutCustomersInput, Prisma.usersUpdateWithoutCustomersInput>, Prisma.usersUncheckedUpdateWithoutCustomersInput>;
};
export type usersCreateNestedOneWithoutSellersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutSellersInput, Prisma.usersUncheckedCreateWithoutSellersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutSellersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutSellersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutSellersInput, Prisma.usersUncheckedCreateWithoutSellersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutSellersInput;
    upsert?: Prisma.usersUpsertWithoutSellersInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutSellersInput, Prisma.usersUpdateWithoutSellersInput>, Prisma.usersUncheckedUpdateWithoutSellersInput>;
};
export type NullableEnumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role | null;
};
export type NullableEnumusers_statusFieldUpdateOperationsInput = {
    set?: $Enums.users_status | null;
};
export type usersCreateWithoutCustomersInput = {
    user_id?: bigint | number;
    tiktok_user_id?: string | null;
    username?: string | null;
    password_hash?: string | null;
    email?: string | null;
    phone?: string | null;
    full_name?: string | null;
    avatar_url?: string | null;
    role?: $Enums.users_role | null;
    status?: $Enums.users_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    sellers?: Prisma.sellersCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutCustomersInput = {
    user_id?: bigint | number;
    tiktok_user_id?: string | null;
    username?: string | null;
    password_hash?: string | null;
    email?: string | null;
    phone?: string | null;
    full_name?: string | null;
    avatar_url?: string | null;
    role?: $Enums.users_role | null;
    status?: $Enums.users_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    sellers?: Prisma.sellersUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersCreateOrConnectWithoutCustomersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
};
export type usersUpsertWithoutCustomersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutCustomersInput, Prisma.usersUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutCustomersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutCustomersInput, Prisma.usersUncheckedUpdateWithoutCustomersInput>;
};
export type usersUpdateWithoutCustomersInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tiktok_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null;
    status?: Prisma.NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellers?: Prisma.sellersUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutCustomersInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tiktok_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null;
    status?: Prisma.NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellers?: Prisma.sellersUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersCreateWithoutSellersInput = {
    user_id?: bigint | number;
    tiktok_user_id?: string | null;
    username?: string | null;
    password_hash?: string | null;
    email?: string | null;
    phone?: string | null;
    full_name?: string | null;
    avatar_url?: string | null;
    role?: $Enums.users_role | null;
    status?: $Enums.users_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutSellersInput = {
    user_id?: bigint | number;
    tiktok_user_id?: string | null;
    username?: string | null;
    password_hash?: string | null;
    email?: string | null;
    phone?: string | null;
    full_name?: string | null;
    avatar_url?: string | null;
    role?: $Enums.users_role | null;
    status?: $Enums.users_status | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersCreateOrConnectWithoutSellersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutSellersInput, Prisma.usersUncheckedCreateWithoutSellersInput>;
};
export type usersUpsertWithoutSellersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutSellersInput, Prisma.usersUncheckedUpdateWithoutSellersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutSellersInput, Prisma.usersUncheckedCreateWithoutSellersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutSellersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutSellersInput, Prisma.usersUncheckedUpdateWithoutSellersInput>;
};
export type usersUpdateWithoutSellersInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tiktok_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null;
    status?: Prisma.NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutSellersInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tiktok_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null;
    status?: Prisma.NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    tiktok_user_id?: boolean;
    username?: boolean;
    password_hash?: boolean;
    email?: boolean;
    phone?: boolean;
    full_name?: boolean;
    avatar_url?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    customers?: boolean | Prisma.users$customersArgs<ExtArgs>;
    sellers?: boolean | Prisma.users$sellersArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    user_id?: boolean;
    tiktok_user_id?: boolean;
    username?: boolean;
    password_hash?: boolean;
    email?: boolean;
    phone?: boolean;
    full_name?: boolean;
    avatar_url?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"user_id" | "tiktok_user_id" | "username" | "password_hash" | "email" | "phone" | "full_name" | "avatar_url" | "role" | "status" | "created_at" | "updated_at", ExtArgs["result"]["users"]>;
export type usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.users$customersArgs<ExtArgs>;
    sellers?: boolean | Prisma.users$sellersArgs<ExtArgs>;
};
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {
        customers: Prisma.$customersPayload<ExtArgs> | null;
        sellers: Prisma.$sellersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        user_id: bigint;
        tiktok_user_id: string | null;
        username: string | null;
        password_hash: string | null;
        email: string | null;
        phone: string | null;
        full_name: string | null;
        avatar_url: string | null;
        role: $Enums.users_role | null;
        status: $Enums.users_status | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usersFieldRefs;
}
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customers<T extends Prisma.users$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$customersArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sellers<T extends Prisma.users$sellersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$sellersArgs<ExtArgs>>): Prisma.Prisma__sellersClient<runtime.Types.Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usersFieldRefs {
    readonly user_id: Prisma.FieldRef<"users", 'BigInt'>;
    readonly tiktok_user_id: Prisma.FieldRef<"users", 'String'>;
    readonly username: Prisma.FieldRef<"users", 'String'>;
    readonly password_hash: Prisma.FieldRef<"users", 'String'>;
    readonly email: Prisma.FieldRef<"users", 'String'>;
    readonly phone: Prisma.FieldRef<"users", 'String'>;
    readonly full_name: Prisma.FieldRef<"users", 'String'>;
    readonly avatar_url: Prisma.FieldRef<"users", 'String'>;
    readonly role: Prisma.FieldRef<"users", 'users_role'>;
    readonly status: Prisma.FieldRef<"users", 'users_status'>;
    readonly created_at: Prisma.FieldRef<"users", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"users", 'DateTime'>;
}
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    where: Prisma.usersWhereUniqueInput;
};
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type users$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
};
export type users$sellersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sellersSelect<ExtArgs> | null;
    omit?: Prisma.sellersOmit<ExtArgs> | null;
    include?: Prisma.sellersInclude<ExtArgs> | null;
    where?: Prisma.sellersWhereInput;
};
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
};
export {};
