import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type shipmentsModel = runtime.Types.Result.DefaultSelection<Prisma.$shipmentsPayload>;
export type AggregateShipments = {
    _count: ShipmentsCountAggregateOutputType | null;
    _avg: ShipmentsAvgAggregateOutputType | null;
    _sum: ShipmentsSumAggregateOutputType | null;
    _min: ShipmentsMinAggregateOutputType | null;
    _max: ShipmentsMaxAggregateOutputType | null;
};
export type ShipmentsAvgAggregateOutputType = {
    shipment_id: number | null;
    order_id: number | null;
    shipping_fee: runtime.Decimal | null;
};
export type ShipmentsSumAggregateOutputType = {
    shipment_id: bigint | null;
    order_id: bigint | null;
    shipping_fee: runtime.Decimal | null;
};
export type ShipmentsMinAggregateOutputType = {
    shipment_id: bigint | null;
    order_id: bigint | null;
    tracking_number: string | null;
    carrier: string | null;
    shipping_fee: runtime.Decimal | null;
    status: string | null;
    expected_delivery_date: Date | null;
};
export type ShipmentsMaxAggregateOutputType = {
    shipment_id: bigint | null;
    order_id: bigint | null;
    tracking_number: string | null;
    carrier: string | null;
    shipping_fee: runtime.Decimal | null;
    status: string | null;
    expected_delivery_date: Date | null;
};
export type ShipmentsCountAggregateOutputType = {
    shipment_id: number;
    order_id: number;
    tracking_number: number;
    carrier: number;
    shipping_fee: number;
    status: number;
    expected_delivery_date: number;
    _all: number;
};
export type ShipmentsAvgAggregateInputType = {
    shipment_id?: true;
    order_id?: true;
    shipping_fee?: true;
};
export type ShipmentsSumAggregateInputType = {
    shipment_id?: true;
    order_id?: true;
    shipping_fee?: true;
};
export type ShipmentsMinAggregateInputType = {
    shipment_id?: true;
    order_id?: true;
    tracking_number?: true;
    carrier?: true;
    shipping_fee?: true;
    status?: true;
    expected_delivery_date?: true;
};
export type ShipmentsMaxAggregateInputType = {
    shipment_id?: true;
    order_id?: true;
    tracking_number?: true;
    carrier?: true;
    shipping_fee?: true;
    status?: true;
    expected_delivery_date?: true;
};
export type ShipmentsCountAggregateInputType = {
    shipment_id?: true;
    order_id?: true;
    tracking_number?: true;
    carrier?: true;
    shipping_fee?: true;
    status?: true;
    expected_delivery_date?: true;
    _all?: true;
};
export type ShipmentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithRelationInput | Prisma.shipmentsOrderByWithRelationInput[];
    cursor?: Prisma.shipmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShipmentsCountAggregateInputType;
    _avg?: ShipmentsAvgAggregateInputType;
    _sum?: ShipmentsSumAggregateInputType;
    _min?: ShipmentsMinAggregateInputType;
    _max?: ShipmentsMaxAggregateInputType;
};
export type GetShipmentsAggregateType<T extends ShipmentsAggregateArgs> = {
    [P in keyof T & keyof AggregateShipments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShipments[P]> : Prisma.GetScalarType<T[P], AggregateShipments[P]>;
};
export type shipmentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithAggregationInput | Prisma.shipmentsOrderByWithAggregationInput[];
    by: Prisma.ShipmentsScalarFieldEnum[] | Prisma.ShipmentsScalarFieldEnum;
    having?: Prisma.shipmentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShipmentsCountAggregateInputType | true;
    _avg?: ShipmentsAvgAggregateInputType;
    _sum?: ShipmentsSumAggregateInputType;
    _min?: ShipmentsMinAggregateInputType;
    _max?: ShipmentsMaxAggregateInputType;
};
export type ShipmentsGroupByOutputType = {
    shipment_id: bigint;
    order_id: bigint | null;
    tracking_number: string | null;
    carrier: string | null;
    shipping_fee: runtime.Decimal | null;
    status: string | null;
    expected_delivery_date: Date | null;
    _count: ShipmentsCountAggregateOutputType | null;
    _avg: ShipmentsAvgAggregateOutputType | null;
    _sum: ShipmentsSumAggregateOutputType | null;
    _min: ShipmentsMinAggregateOutputType | null;
    _max: ShipmentsMaxAggregateOutputType | null;
};
type GetShipmentsGroupByPayload<T extends shipmentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShipmentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShipmentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShipmentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShipmentsGroupByOutputType[P]>;
}>>;
export type shipmentsWhereInput = {
    AND?: Prisma.shipmentsWhereInput | Prisma.shipmentsWhereInput[];
    OR?: Prisma.shipmentsWhereInput[];
    NOT?: Prisma.shipmentsWhereInput | Prisma.shipmentsWhereInput[];
    shipment_id?: Prisma.BigIntFilter<"shipments"> | bigint | number;
    order_id?: Prisma.BigIntNullableFilter<"shipments"> | bigint | number | null;
    tracking_number?: Prisma.StringNullableFilter<"shipments"> | string | null;
    carrier?: Prisma.StringNullableFilter<"shipments"> | string | null;
    shipping_fee?: Prisma.DecimalNullableFilter<"shipments"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableFilter<"shipments"> | string | null;
    expected_delivery_date?: Prisma.DateTimeNullableFilter<"shipments"> | Date | string | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
};
export type shipmentsOrderByWithRelationInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tracking_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    carrier?: Prisma.SortOrderInput | Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    expected_delivery_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByWithRelationInput;
    _relevance?: Prisma.shipmentsOrderByRelevanceInput;
};
export type shipmentsWhereUniqueInput = Prisma.AtLeast<{
    shipment_id?: bigint | number;
    AND?: Prisma.shipmentsWhereInput | Prisma.shipmentsWhereInput[];
    OR?: Prisma.shipmentsWhereInput[];
    NOT?: Prisma.shipmentsWhereInput | Prisma.shipmentsWhereInput[];
    order_id?: Prisma.BigIntNullableFilter<"shipments"> | bigint | number | null;
    tracking_number?: Prisma.StringNullableFilter<"shipments"> | string | null;
    carrier?: Prisma.StringNullableFilter<"shipments"> | string | null;
    shipping_fee?: Prisma.DecimalNullableFilter<"shipments"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableFilter<"shipments"> | string | null;
    expected_delivery_date?: Prisma.DateTimeNullableFilter<"shipments"> | Date | string | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
}, "shipment_id">;
export type shipmentsOrderByWithAggregationInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tracking_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    carrier?: Prisma.SortOrderInput | Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    expected_delivery_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.shipmentsCountOrderByAggregateInput;
    _avg?: Prisma.shipmentsAvgOrderByAggregateInput;
    _max?: Prisma.shipmentsMaxOrderByAggregateInput;
    _min?: Prisma.shipmentsMinOrderByAggregateInput;
    _sum?: Prisma.shipmentsSumOrderByAggregateInput;
};
export type shipmentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.shipmentsScalarWhereWithAggregatesInput | Prisma.shipmentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.shipmentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.shipmentsScalarWhereWithAggregatesInput | Prisma.shipmentsScalarWhereWithAggregatesInput[];
    shipment_id?: Prisma.BigIntWithAggregatesFilter<"shipments"> | bigint | number;
    order_id?: Prisma.BigIntNullableWithAggregatesFilter<"shipments"> | bigint | number | null;
    tracking_number?: Prisma.StringNullableWithAggregatesFilter<"shipments"> | string | null;
    carrier?: Prisma.StringNullableWithAggregatesFilter<"shipments"> | string | null;
    shipping_fee?: Prisma.DecimalNullableWithAggregatesFilter<"shipments"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"shipments"> | string | null;
    expected_delivery_date?: Prisma.DateTimeNullableWithAggregatesFilter<"shipments"> | Date | string | null;
};
export type shipmentsCreateInput = {
    shipment_id?: bigint | number;
    tracking_number?: string | null;
    carrier?: string | null;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    expected_delivery_date?: Date | string | null;
    orders?: Prisma.ordersCreateNestedOneWithoutShipmentsInput;
};
export type shipmentsUncheckedCreateInput = {
    shipment_id?: bigint | number;
    order_id?: bigint | number | null;
    tracking_number?: string | null;
    carrier?: string | null;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    expected_delivery_date?: Date | string | null;
};
export type shipmentsUpdateInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shipping_fee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expected_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneWithoutShipmentsNestedInput;
};
export type shipmentsUncheckedUpdateInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shipping_fee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expected_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type shipmentsCreateManyInput = {
    shipment_id?: bigint | number;
    order_id?: bigint | number | null;
    tracking_number?: string | null;
    carrier?: string | null;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    expected_delivery_date?: Date | string | null;
};
export type shipmentsUpdateManyMutationInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shipping_fee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expected_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type shipmentsUncheckedUpdateManyInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shipping_fee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expected_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShipmentsListRelationFilter = {
    every?: Prisma.shipmentsWhereInput;
    some?: Prisma.shipmentsWhereInput;
    none?: Prisma.shipmentsWhereInput;
};
export type shipmentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type shipmentsOrderByRelevanceInput = {
    fields: Prisma.shipmentsOrderByRelevanceFieldEnum | Prisma.shipmentsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type shipmentsCountOrderByAggregateInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    tracking_number?: Prisma.SortOrder;
    carrier?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expected_delivery_date?: Prisma.SortOrder;
};
export type shipmentsAvgOrderByAggregateInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
};
export type shipmentsMaxOrderByAggregateInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    tracking_number?: Prisma.SortOrder;
    carrier?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expected_delivery_date?: Prisma.SortOrder;
};
export type shipmentsMinOrderByAggregateInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    tracking_number?: Prisma.SortOrder;
    carrier?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expected_delivery_date?: Prisma.SortOrder;
};
export type shipmentsSumOrderByAggregateInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
};
export type shipmentsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput> | Prisma.shipmentsCreateWithoutOrdersInput[] | Prisma.shipmentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutOrdersInput | Prisma.shipmentsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.shipmentsCreateManyOrdersInputEnvelope;
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
};
export type shipmentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput> | Prisma.shipmentsCreateWithoutOrdersInput[] | Prisma.shipmentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutOrdersInput | Prisma.shipmentsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.shipmentsCreateManyOrdersInputEnvelope;
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
};
export type shipmentsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput> | Prisma.shipmentsCreateWithoutOrdersInput[] | Prisma.shipmentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutOrdersInput | Prisma.shipmentsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.shipmentsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.shipmentsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.shipmentsCreateManyOrdersInputEnvelope;
    set?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    disconnect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    delete?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    update?: Prisma.shipmentsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.shipmentsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.shipmentsUpdateManyWithWhereWithoutOrdersInput | Prisma.shipmentsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.shipmentsScalarWhereInput | Prisma.shipmentsScalarWhereInput[];
};
export type shipmentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput> | Prisma.shipmentsCreateWithoutOrdersInput[] | Prisma.shipmentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutOrdersInput | Prisma.shipmentsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.shipmentsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.shipmentsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.shipmentsCreateManyOrdersInputEnvelope;
    set?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    disconnect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    delete?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    update?: Prisma.shipmentsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.shipmentsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.shipmentsUpdateManyWithWhereWithoutOrdersInput | Prisma.shipmentsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.shipmentsScalarWhereInput | Prisma.shipmentsScalarWhereInput[];
};
export type shipmentsCreateWithoutOrdersInput = {
    shipment_id?: bigint | number;
    tracking_number?: string | null;
    carrier?: string | null;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    expected_delivery_date?: Date | string | null;
};
export type shipmentsUncheckedCreateWithoutOrdersInput = {
    shipment_id?: bigint | number;
    tracking_number?: string | null;
    carrier?: string | null;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    expected_delivery_date?: Date | string | null;
};
export type shipmentsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.shipmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput>;
};
export type shipmentsCreateManyOrdersInputEnvelope = {
    data: Prisma.shipmentsCreateManyOrdersInput | Prisma.shipmentsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type shipmentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.shipmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.shipmentsUpdateWithoutOrdersInput, Prisma.shipmentsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput>;
};
export type shipmentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.shipmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.shipmentsUpdateWithoutOrdersInput, Prisma.shipmentsUncheckedUpdateWithoutOrdersInput>;
};
export type shipmentsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.shipmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.shipmentsUpdateManyMutationInput, Prisma.shipmentsUncheckedUpdateManyWithoutOrdersInput>;
};
export type shipmentsScalarWhereInput = {
    AND?: Prisma.shipmentsScalarWhereInput | Prisma.shipmentsScalarWhereInput[];
    OR?: Prisma.shipmentsScalarWhereInput[];
    NOT?: Prisma.shipmentsScalarWhereInput | Prisma.shipmentsScalarWhereInput[];
    shipment_id?: Prisma.BigIntFilter<"shipments"> | bigint | number;
    order_id?: Prisma.BigIntNullableFilter<"shipments"> | bigint | number | null;
    tracking_number?: Prisma.StringNullableFilter<"shipments"> | string | null;
    carrier?: Prisma.StringNullableFilter<"shipments"> | string | null;
    shipping_fee?: Prisma.DecimalNullableFilter<"shipments"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableFilter<"shipments"> | string | null;
    expected_delivery_date?: Prisma.DateTimeNullableFilter<"shipments"> | Date | string | null;
};
export type shipmentsCreateManyOrdersInput = {
    shipment_id?: bigint | number;
    tracking_number?: string | null;
    carrier?: string | null;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    expected_delivery_date?: Date | string | null;
};
export type shipmentsUpdateWithoutOrdersInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shipping_fee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expected_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type shipmentsUncheckedUpdateWithoutOrdersInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shipping_fee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expected_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type shipmentsUncheckedUpdateManyWithoutOrdersInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shipping_fee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expected_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type shipmentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    shipment_id?: boolean;
    order_id?: boolean;
    tracking_number?: boolean;
    carrier?: boolean;
    shipping_fee?: boolean;
    status?: boolean;
    expected_delivery_date?: boolean;
    orders?: boolean | Prisma.shipments$ordersArgs<ExtArgs>;
}, ExtArgs["result"]["shipments"]>;
export type shipmentsSelectScalar = {
    shipment_id?: boolean;
    order_id?: boolean;
    tracking_number?: boolean;
    carrier?: boolean;
    shipping_fee?: boolean;
    status?: boolean;
    expected_delivery_date?: boolean;
};
export type shipmentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"shipment_id" | "order_id" | "tracking_number" | "carrier" | "shipping_fee" | "status" | "expected_delivery_date", ExtArgs["result"]["shipments"]>;
export type shipmentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.shipments$ordersArgs<ExtArgs>;
};
export type $shipmentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "shipments";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        shipment_id: bigint;
        order_id: bigint | null;
        tracking_number: string | null;
        carrier: string | null;
        shipping_fee: runtime.Decimal | null;
        status: string | null;
        expected_delivery_date: Date | null;
    }, ExtArgs["result"]["shipments"]>;
    composites: {};
};
export type shipmentsGetPayload<S extends boolean | null | undefined | shipmentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$shipmentsPayload, S>;
export type shipmentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<shipmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShipmentsCountAggregateInputType | true;
};
export interface shipmentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['shipments'];
        meta: {
            name: 'shipments';
        };
    };
    findUnique<T extends shipmentsFindUniqueArgs>(args: Prisma.SelectSubset<T, shipmentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends shipmentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, shipmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends shipmentsFindFirstArgs>(args?: Prisma.SelectSubset<T, shipmentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends shipmentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, shipmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends shipmentsFindManyArgs>(args?: Prisma.SelectSubset<T, shipmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends shipmentsCreateArgs>(args: Prisma.SelectSubset<T, shipmentsCreateArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends shipmentsCreateManyArgs>(args?: Prisma.SelectSubset<T, shipmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends shipmentsDeleteArgs>(args: Prisma.SelectSubset<T, shipmentsDeleteArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends shipmentsUpdateArgs>(args: Prisma.SelectSubset<T, shipmentsUpdateArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends shipmentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, shipmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends shipmentsUpdateManyArgs>(args: Prisma.SelectSubset<T, shipmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends shipmentsUpsertArgs>(args: Prisma.SelectSubset<T, shipmentsUpsertArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends shipmentsCountArgs>(args?: Prisma.Subset<T, shipmentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShipmentsCountAggregateOutputType> : number>;
    aggregate<T extends ShipmentsAggregateArgs>(args: Prisma.Subset<T, ShipmentsAggregateArgs>): Prisma.PrismaPromise<GetShipmentsAggregateType<T>>;
    groupBy<T extends shipmentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: shipmentsGroupByArgs['orderBy'];
    } : {
        orderBy?: shipmentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, shipmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: shipmentsFieldRefs;
}
export interface Prisma__shipmentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.shipments$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.shipments$ordersArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface shipmentsFieldRefs {
    readonly shipment_id: Prisma.FieldRef<"shipments", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"shipments", 'BigInt'>;
    readonly tracking_number: Prisma.FieldRef<"shipments", 'String'>;
    readonly carrier: Prisma.FieldRef<"shipments", 'String'>;
    readonly shipping_fee: Prisma.FieldRef<"shipments", 'Decimal'>;
    readonly status: Prisma.FieldRef<"shipments", 'String'>;
    readonly expected_delivery_date: Prisma.FieldRef<"shipments", 'DateTime'>;
}
export type shipmentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where: Prisma.shipmentsWhereUniqueInput;
};
export type shipmentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where: Prisma.shipmentsWhereUniqueInput;
};
export type shipmentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithRelationInput | Prisma.shipmentsOrderByWithRelationInput[];
    cursor?: Prisma.shipmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentsScalarFieldEnum | Prisma.ShipmentsScalarFieldEnum[];
};
export type shipmentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithRelationInput | Prisma.shipmentsOrderByWithRelationInput[];
    cursor?: Prisma.shipmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentsScalarFieldEnum | Prisma.ShipmentsScalarFieldEnum[];
};
export type shipmentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithRelationInput | Prisma.shipmentsOrderByWithRelationInput[];
    cursor?: Prisma.shipmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentsScalarFieldEnum | Prisma.ShipmentsScalarFieldEnum[];
};
export type shipmentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.shipmentsCreateInput, Prisma.shipmentsUncheckedCreateInput>;
};
export type shipmentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.shipmentsCreateManyInput | Prisma.shipmentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type shipmentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.shipmentsUpdateInput, Prisma.shipmentsUncheckedUpdateInput>;
    where: Prisma.shipmentsWhereUniqueInput;
};
export type shipmentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.shipmentsUpdateManyMutationInput, Prisma.shipmentsUncheckedUpdateManyInput>;
    where?: Prisma.shipmentsWhereInput;
    limit?: number;
};
export type shipmentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where: Prisma.shipmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipmentsCreateInput, Prisma.shipmentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.shipmentsUpdateInput, Prisma.shipmentsUncheckedUpdateInput>;
};
export type shipmentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where: Prisma.shipmentsWhereUniqueInput;
};
export type shipmentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipmentsWhereInput;
    limit?: number;
};
export type shipments$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
};
export type shipmentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
};
export {};
