import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

describe('OrdersController', () => {
  let controller: OrdersController;
  let ordersService: OrdersService;

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
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        {
          provide: OrdersService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
    ordersService = module.get<OrdersService>(OrdersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new order', async () => {
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

      jest.spyOn(ordersService, 'create').mockResolvedValue(createdOrder);

      const result = await controller.create(createOrderDto);

      expect(result).toEqual(createdOrder);
      expect(ordersService.create).toHaveBeenCalledWith(createOrderDto);
    });
  });

  describe('findAll', () => {
    it('should return all orders for authenticated user', async () => {
      const req = { user: { user_id: 1 } };
      const orders = [
        { ...mockOrder, order_id: 1 },
        { ...mockOrder, order_id: 2 },
      ];

      jest.spyOn(ordersService, 'findAll').mockResolvedValue(orders);

      const result = await controller.findAll(req);

      expect(result).toEqual(orders);
      expect(ordersService.findAll).toHaveBeenCalledWith(req.user.user_id);
    });

    it('should return empty array when user has no orders', async () => {
      const req = { user: { user_id: 999 } };

      jest.spyOn(ordersService, 'findAll').mockResolvedValue([]);

      const result = await controller.findAll(req);

      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return order by ID', async () => {
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

      jest.spyOn(ordersService, 'findOne').mockResolvedValue(orderWithDetails);

      const result = await controller.findOne(1);

      expect(result).toEqual(orderWithDetails);
      expect(ordersService.findOne).toHaveBeenCalledWith(1);
    });

    it('should return null when order not found', async () => {
      jest.spyOn(ordersService, 'findOne').mockResolvedValue(null);

      const result = await controller.findOne(999);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update order by ID', async () => {
      const updateOrderDto = {
        total_amount: 150.0,
        status: 'confirmed',
      };

      const updatedOrder = {
        ...mockOrder,
        total_amount: 150.0,
        status: 'confirmed',
      };

      jest.spyOn(ordersService, 'update').mockResolvedValue(updatedOrder);

      const result = await controller.update(1, updateOrderDto);

      expect(result).toEqual(updatedOrder);
      expect(ordersService.update).toHaveBeenCalledWith(1, updateOrderDto);
    });
  });

  describe('remove', () => {
    it('should delete order by ID', async () => {
      jest.spyOn(ordersService, 'remove').mockResolvedValue(mockOrder);

      const result = await controller.remove(1);

      expect(result).toEqual(mockOrder);
      expect(ordersService.remove).toHaveBeenCalledWith(1);
    });
  });
});
