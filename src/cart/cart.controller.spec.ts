import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

describe('CartController', () => {
  let controller: CartController;
  let cartService: CartService;

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
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [
        {
          provide: CartService,
          useValue: {
            addToCart: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            findByCustomerId: jest.fn(),
            update: jest.fn(),
            updateQuantity: jest.fn(),
            removeItem: jest.fn(),
            removeAllItem: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CartController>(CartController);
    cartService = module.get<CartService>(CartService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create (addToCart)', () => {
    it('should add item to cart', async () => {
      const updateCartDto = {
        customer_id: 1,
        variant_id: 1,
        render_id: null,
      };

      jest.spyOn(cartService, 'addToCart').mockResolvedValue(mockCartItem);

      const result = await controller.create(updateCartDto);

      expect(result).toEqual(mockCartItem);
      expect(cartService.addToCart).toHaveBeenCalledWith(updateCartDto);
    });
  });

  describe('findOne', () => {
    it('should return cart for customer by ID', async () => {
      const cartWithItems = {
        ...mockCart,
        cart_items: [mockCartItem],
      };

      jest
        .spyOn(cartService, 'findByCustomerId')
        .mockResolvedValue(cartWithItems);

      const result = await controller.findOne(1);

      expect(result).toEqual(cartWithItems);
      expect(cartService.findByCustomerId).toHaveBeenCalledWith(1);
    });

    it('should return null when cart not found', async () => {
      jest.spyOn(cartService, 'findByCustomerId').mockResolvedValue(null);

      const result = await controller.findOne(999);

      expect(result).toBeNull();
    });
  });

  describe('updateCartItem', () => {
    it('should update cart item quantity', async () => {
      const updateCartItemDto = {
        cart_item_id: 1,
        quantity: 5,
      };

      const updatedItem = {
        ...mockCartItem,
        quantity: 5,
      };

      jest
        .spyOn(cartService, 'updateQuantity')
        .mockResolvedValue(updatedItem);

      const result = await controller.updateCartItem(updateCartItemDto);

      expect(result).toEqual(updatedItem);
      expect(cartService.updateQuantity).toHaveBeenCalledWith(
        updateCartItemDto,
      );
    });
  });

  describe('removeItem', () => {
    it('should remove a cart item by ID', async () => {
      jest.spyOn(cartService, 'removeItem').mockResolvedValue(mockCartItem);

      await controller.removeItem(1);

      expect(cartService.removeItem).toHaveBeenCalledWith(1);
    });
  });

  describe('remove (removeAllItem)', () => {
    it('should remove all cart items', async () => {
      const cartId = 1;

      jest.spyOn(cartService, 'removeAllItem').mockResolvedValue({ count: 3 });

      const result = await controller.remove(cartId);

      expect(result).toEqual({ count: 3 });
      expect(cartService.removeAllItem).toHaveBeenCalledWith(cartId);
    });
  });
});
