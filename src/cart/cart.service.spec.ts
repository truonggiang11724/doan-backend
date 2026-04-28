import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { PrismaService } from '../prisma/prisma.service';

describe('CartService', () => {
  let service: CartService;
  let prismaService: PrismaService;

  const mockCart = {
    cart_id: 1,
    customer_id: 1,
    cart_items: [],
  };

  const mockCartItem = {
    cart_item_id: 1,
    cart_id: 1,
    variant_id: 1,
    quantity: 1,
    render_id: null,
    product_variants: {
      product_variant_id: 1,
      products: { product_id: 1, name: 'Test Product' },
    },
    mockup_renders: null,
  };

  const mockTransaction = {
    cart_items: {
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      deleteMany: jest.fn(),
    },
    carts: {
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: PrismaService,
          useValue: {
            carts: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              findFirst: jest.fn(),
              delete: jest.fn(),
            },
            cart_items: {
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
              deleteMany: jest.fn(),
            },
            $transaction: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CartService>(CartService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return all carts with items', async () => {
      const mockCarts = [
        { ...mockCart, cart_items: [mockCartItem] },
        { ...mockCart, cart_id: 2, cart_items: [] },
      ];

      jest.spyOn(prismaService.carts, 'findMany').mockResolvedValue(mockCarts);

      const result = await service.findAll();

      expect(result).toEqual(mockCarts);
      expect(prismaService.carts.findMany).toHaveBeenCalledWith({
        include: { cart_items: true },
      });
    });

    it('should return empty array when no carts exist', async () => {
      jest.spyOn(prismaService.carts, 'findMany').mockResolvedValue([]);

      const result = await service.findAll();

      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return cart with items and related data', async () => {
      const cartWithDetails = {
        ...mockCart,
        cart_items: [
          {
            ...mockCartItem,
            product_variants: { products: { product_id: 1 } },
            mockup_renders: null,
          },
        ],
      };

      jest
        .spyOn(prismaService.carts, 'findUnique')
        .mockResolvedValue(cartWithDetails);

      const result = await service.findOne(1);

      expect(result).toEqual(cartWithDetails);
      expect(prismaService.carts.findUnique).toHaveBeenCalledWith({
        where: { cart_id: 1 },
        include: expect.any(Object),
      });
    });

    it('should return null when cart does not exist', async () => {
      jest.spyOn(prismaService.carts, 'findUnique').mockResolvedValue(null);

      const result = await service.findOne(999);

      expect(result).toBeNull();
    });
  });

  describe('findByCustomerId', () => {
    it('should return cart for customer with items', async () => {
      const cartWithItems = {
        ...mockCart,
        cart_items: [mockCartItem],
      };

      jest
        .spyOn(prismaService.carts, 'findFirst')
        .mockResolvedValue(cartWithItems);

      const result = await service.findByCustomerId(1);

      expect(result).toEqual(cartWithItems);
      expect(prismaService.carts.findFirst).toHaveBeenCalledWith({
        where: { customer_id: 1 },
        include: expect.any(Object),
      });
    });

    it('should return null when customer has no cart', async () => {
      jest.spyOn(prismaService.carts, 'findFirst').mockResolvedValue(null);

      const result = await service.findByCustomerId(999);

      expect(result).toBeNull();
    });
  });

  describe('addToCart', () => {
    it('should add new item to cart', async () => {
      const updateCartDto = {
        customer_id: 1,
        variant_id: 2,
        render_id: null,
      };

      jest
        .spyOn(service, 'findByCustomerId')
        .mockResolvedValue({ ...mockCart, cart_id: 1 });

      jest.spyOn(prismaService, '$transaction').mockImplementation((callback) => {
        return callback(mockTransaction);
      });

      mockTransaction.cart_items.create.mockResolvedValue({
        ...mockCartItem,
        variant_id: 2,
      });

      const result = await service.addToCart(updateCartDto);

      expect(mockTransaction.cart_items.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: {
            cart_id: 1,
            variant_id: 2,
            quantity: 1,
            render_id: null,
          },
        }),
      );
    });

    it('should increase quantity if item already exists in cart', async () => {
      const updateCartDto = {
        customer_id: 1,
        variant_id: 1,
        render_id: null,
      };

      const cartWithItem = {
        ...mockCart,
        cart_items: [mockCartItem],
      };

      jest
        .spyOn(service, 'findByCustomerId')
        .mockResolvedValue(cartWithItem);
      jest.spyOn(service, 'updateQuantity').mockResolvedValue({
        ...mockCartItem,
        quantity: 2,
      });

      const result = await service.addToCart(updateCartDto);

      expect(service.updateQuantity).toHaveBeenCalledWith({
        cart_item_id: mockCartItem.cart_item_id,
        quantity: 2,
      });
    });

    it('should return early if customer_id is not provided', async () => {
      const updateCartDto = {
        customer_id: null,
        variant_id: 1,
        render_id: null,
      };

      const result = await service.addToCart(updateCartDto);

      expect(result).toBeUndefined();
    });
  });

  describe('updateQuantity', () => {
    it('should update cart item quantity', async () => {
      const updateCartItemDto = {
        cart_item_id: 1,
        quantity: 5,
      };

      jest.spyOn(prismaService, '$transaction').mockImplementation((callback) => {
        return callback(mockTransaction);
      });

      mockTransaction.cart_items.update.mockResolvedValue({
        ...mockCartItem,
        quantity: 5,
      });

      const result = await service.updateQuantity(updateCartItemDto);

      expect(mockTransaction.cart_items.update).toHaveBeenCalledWith({
        where: { cart_item_id: 1 },
        data: { quantity: 5 },
      });
    });
  });

  describe('removeItem', () => {
    it('should remove a single cart item', async () => {
      jest.spyOn(prismaService, '$transaction').mockImplementation((callback) => {
        return callback(mockTransaction);
      });

      mockTransaction.cart_items.delete.mockResolvedValue(mockCartItem);

      await service.removeItem(1);

      expect(mockTransaction.cart_items.delete).toHaveBeenCalledWith({
        where: { cart_item_id: 1 },
      });
    });
  });

  describe('removeAllItem', () => {
    it('should remove all items from cart', async () => {
      jest.spyOn(prismaService, '$transaction').mockImplementation((callback) => {
        return callback(mockTransaction);
      });

      mockTransaction.cart_items.deleteMany.mockResolvedValue({ count: 3 });

      await service.removeAllItem(1);

      expect(mockTransaction.cart_items.deleteMany).toHaveBeenCalledWith({
        where: { cart_id: 1 },
      });
    });
  });

  describe('remove', () => {
    it('should remove entire cart and all its items', async () => {
      jest.spyOn(prismaService, '$transaction').mockImplementation((callback) => {
        return callback(mockTransaction);
      });

      mockTransaction.cart_items.deleteMany.mockResolvedValue({ count: 2 });
      mockTransaction.carts.delete.mockResolvedValue(mockCart);

      await service.remove(1);

      expect(mockTransaction.cart_items.deleteMany).toHaveBeenCalledWith({
        where: { cart_id: 1 },
      });
      expect(mockTransaction.carts.delete).toHaveBeenCalledWith({
        where: { cart_id: 1 },
      });
    });
  });
});
