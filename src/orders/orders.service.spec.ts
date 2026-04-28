import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { PrismaService } from '../prisma/prisma.service';

describe('OrdersService', () => {
  let service: OrdersService;
  let prismaService: PrismaService;

  const mockOrder = {
    order_id: 1,
    customer_id: 1,
    total_amount: 100.0,
    status: 'pending',
    created_at: new Date(),
    order_items: [],
  };

  const mockOrderItem = {
    order_item_id: 1,
    order_id: 1,
    variant_id: 1,
    quantity: 2,
    price: 50.0,
    mockup_renders: null,
  };

  const mockTransaction = {
    orders: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    order_items: {
      create: jest.fn(),
      deleteMany: jest.fn(),
    },
    payments: {
      deleteMany: jest.fn(),
    },
    refunds: {
      deleteMany: jest.fn(),
    },
    shipments: {
      deleteMany: jest.fn(),
    },
    promotion_usages: {
      deleteMany: jest.fn(),
    },
    wallet_transactions: {
      deleteMany: jest.fn(),
    },
    cancel_requests: {
      deleteMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: PrismaService,
          useValue: {
            orders: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
            order_items: {
              deleteMany: jest.fn(),
            },
            payments: {
              deleteMany: jest.fn(),
            },
            refunds: {
              deleteMany: jest.fn(),
            },
            shipments: {
              deleteMany: jest.fn(),
            },
            promotion_usages: {
              deleteMany: jest.fn(),
            },
            wallet_transactions: {
              deleteMany: jest.fn(),
            },
            cancel_requests: {
              deleteMany: jest.fn(),
            },
            $transaction: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new order with items', async () => {
      const createOrderDto = {
        customer_id: 1,
        total_amount: 100.0,
        status: 'pending',
        items: [
          {
            variant_id: 1,
            quantity: 2,
            price: 50.0,
          },
        ],
      };

      const createdOrder = {
        ...mockOrder,
        order_items: [mockOrderItem],
      };

      jest.spyOn(prismaService.orders, 'create').mockResolvedValue(createdOrder);

      const result = await service.create(createOrderDto);

      expect(result).toEqual(createdOrder);
      expect(prismaService.orders.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          customer_id: createOrderDto.customer_id,
          total_amount: createOrderDto.total_amount,
          status: createOrderDto.status,
        }),
        include: expect.any(Object),
      });
    });

    it('should create order without items', async () => {
      const createOrderDto = {
        customer_id: 1,
        total_amount: 100.0,
        status: 'pending',
      };

      jest.spyOn(prismaService.orders, 'create').mockResolvedValue(mockOrder);

      const result = await service.create(createOrderDto);

      expect(result).toEqual(mockOrder);
      expect(prismaService.orders.create).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should return all orders for a user', async () => {
      const orders = [
        { ...mockOrder, order_id: 1 },
        { ...mockOrder, order_id: 2 },
      ];

      jest.spyOn(prismaService.orders, 'findMany').mockResolvedValue(orders);

      const result = await service.findAll(1);

      expect(result).toEqual(orders);
      expect(prismaService.orders.findMany).toHaveBeenCalledWith({
        where: { customer_id: 1 },
        orderBy: { created_at: 'desc' },
        include: expect.any(Object),
      });
    });

    it('should return empty array when user has no orders', async () => {
      jest.spyOn(prismaService.orders, 'findMany').mockResolvedValue([]);

      const result = await service.findAll(999);

      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return order with all related data', async () => {
      const orderWithDetails = {
        ...mockOrder,
        order_items: [
          {
            ...mockOrderItem,
            product_variants: {
              products: { product_id: 1, name: 'Test Product' },
            },
          },
        ],
      };

      jest
        .spyOn(prismaService.orders, 'findUnique')
        .mockResolvedValue(orderWithDetails);

      const result = await service.findOne(1);

      expect(result).toEqual(orderWithDetails);
      expect(prismaService.orders.findUnique).toHaveBeenCalledWith({
        where: { order_id: 1 },
        include: expect.any(Object),
      });
    });

    it('should return null when order does not exist', async () => {
      jest.spyOn(prismaService.orders, 'findUnique').mockResolvedValue(null);

      const result = await service.findOne(999);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update order and replace items', async () => {
      const updateOrderDto = {
        total_amount: 150.0,
        status: 'confirmed',
        items: [
          {
            variant_id: 2,
            quantity: 3,
            price: 50.0,
          },
        ],
      };

      const updatedOrder = {
        ...mockOrder,
        total_amount: 150.0,
        status: 'confirmed',
        order_items: [{ ...mockOrderItem, variant_id: 2 }],
      };

      jest.spyOn(prismaService, '$transaction').mockImplementation((callback) => {
        return callback(mockTransaction);
      });

      mockTransaction.order_items.deleteMany.mockResolvedValue({ count: 1 });
      mockTransaction.orders.update.mockResolvedValue(updatedOrder);

      const result = await service.update(1, updateOrderDto);

      expect(mockTransaction.order_items.deleteMany).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
    });

    it('should update order without changing items', async () => {
      const updateOrderDto = {
        total_amount: 150.0,
        status: 'confirmed',
      };

      const updatedOrder = {
        ...mockOrder,
        total_amount: 150.0,
        status: 'confirmed',
      };

      jest.spyOn(prismaService, '$transaction').mockImplementation((callback) => {
        return callback(mockTransaction);
      });

      mockTransaction.orders.update.mockResolvedValue(updatedOrder);

      const result = await service.update(1, updateOrderDto);

      expect(mockTransaction.order_items.deleteMany).not.toHaveBeenCalled();
    });
  });

  describe('remove', () => {
    it('should delete order and all related data', async () => {
      jest.spyOn(prismaService, '$transaction').mockImplementation((callback) => {
        return callback(mockTransaction);
      });

      mockTransaction.order_items.deleteMany.mockResolvedValue({ count: 2 });
      mockTransaction.payments.deleteMany.mockResolvedValue({ count: 1 });
      mockTransaction.refunds.deleteMany.mockResolvedValue({ count: 0 });
      mockTransaction.shipments.deleteMany.mockResolvedValue({ count: 1 });
      mockTransaction.promotion_usages.deleteMany.mockResolvedValue({
        count: 0,
      });
      mockTransaction.wallet_transactions.deleteMany.mockResolvedValue({
        count: 0,
      });
      mockTransaction.cancel_requests.deleteMany.mockResolvedValue({
        count: 0,
      });
      mockTransaction.orders.delete.mockResolvedValue(mockOrder);

      const result = await service.remove(1);

      expect(mockTransaction.order_items.deleteMany).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
      expect(mockTransaction.payments.deleteMany).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
      expect(mockTransaction.refunds.deleteMany).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
      expect(mockTransaction.shipments.deleteMany).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
      expect(mockTransaction.promotion_usages.deleteMany).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
      expect(
        mockTransaction.wallet_transactions.deleteMany,
      ).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
      expect(mockTransaction.cancel_requests.deleteMany).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
      expect(mockTransaction.orders.delete).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
    });
  });
});
