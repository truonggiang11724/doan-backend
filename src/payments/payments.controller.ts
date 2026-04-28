import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { VNPayService } from './vnpay.service';
import { PrismaService } from '../prisma/prisma.service';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly prisma: PrismaService,
    private readonly vnpayService: VNPayService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new payment record',
    description: 'Initialize a payment transaction for an order. Supports multiple payment methods.',
  })
  @ApiBody({
    type: CreatePaymentDto,
    description: 'Payment details',
    examples: {
      example1: {
        value: {
          order_id: 100,
          amount: 234.97,
          payment_method: 'vnpay',
          currency: 'VND',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Payment record created successfully',
    example: {
      payment_id: 50,
      order_id: 100,
      amount: 234.97,
      payment_method: 'vnpay',
      status: 'pending',
      created_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid payment data',
  })
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all payments',
    description: 'Retrieve all payment records (admin only).',
  })
  @ApiQuery({
    name: 'status',
    type: String,
    required: false,
    description: 'Filter by payment status (pending, completed, failed, cancelled)',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number for pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'List of payments retrieved successfully',
    example: {
      data: [
        {
          payment_id: 50,
          order_id: 100,
          amount: 234.97,
          payment_method: 'vnpay',
          status: 'completed',
          created_at: '2024-01-15T10:30:00Z',
        },
      ],
      total: 150,
      page: 1,
      limit: 10,
    },
  })
  findAll(
    @Query('status') status?: string,
    @Query('page') page?: number,
  ) {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get payment details',
    description: 'Retrieve detailed information about a specific payment transaction.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Payment ID',
    example: 50,
  })
  @ApiResponse({
    status: 200,
    description: 'Payment details retrieved successfully',
    example: {
      payment_id: 50,
      order_id: 100,
      amount: 234.97,
      payment_method: 'vnpay',
      status: 'completed',
      transaction_id: 'VNP123456789',
      error_code: null,
      created_at: '2024-01-15T10:30:00Z',
      updated_at: '2024-01-15T10:35:00Z',
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Payment not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.paymentsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update payment record',
    description: 'Update payment status or details.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Payment ID',
    example: 50,
  })
  @ApiBody({
    type: UpdatePaymentDto,
    description: 'Payment update data',
    examples: {
      example1: {
        value: {
          status: 'completed',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Payment updated successfully',
    example: {
      payment_id: 50,
      status: 'completed',
      updated_at: '2024-01-15T10:35:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid status',
  })
  @ApiResponse({
    status: 404,
    description: 'Payment not found',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ) {
    return this.paymentsService.update(id, updatePaymentDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete payment record',
    description: 'Delete a payment record (for failed or cancelled payments only).',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Payment ID',
    example: 50,
  })
  @ApiResponse({
    status: 200,
    description: 'Payment deleted successfully',
    example: {
      message: 'Payment deleted successfully',
      payment_id: 50,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - cannot delete completed payment',
  })
  @ApiResponse({
    status: 404,
    description: 'Payment not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.paymentsService.remove(id);
  }

  @Post('vnpay-return')
  @ApiOperation({
    summary: 'Handle VNPay payment callback',
    description: 'Webhook endpoint for VNPay payment gateway. Updates payment status based on VNPay response.',
  })
  @ApiQuery({
    name: 'vnp_TxnRef',
    type: String,
    description: 'Transaction reference number (Order ID)',
  })
  @ApiQuery({
    name: 'vnp_ResponseCode',
    type: String,
    description: 'Response code (00 for success)',
  })
  @ApiQuery({
    name: 'vnp_TransactionNo',
    type: String,
    description: 'VNPay transaction number',
  })
  @ApiQuery({
    name: 'vnp_SecureHash',
    type: String,
    description: 'Secure hash for verification',
  })
  @ApiResponse({
    status: 200,
    description: 'Payment callback processed',
    example: {
      success: true,
      message: 'Payment successful',
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Payment failed',
    example: {
      success: false,
      message: 'Payment failed',
    },
  })
  async handleVNPayReturn(@Query() query: any) {
    const isValid = this.vnpayService.verifyReturnUrl(query);
    if (!isValid) {
      return { success: false, message: 'Invalid signature' };
    }

    const orderId = parseInt(query.vnp_TxnRef);
    const responseCode = query.vnp_ResponseCode;

    if (responseCode === '00') {
      // Payment successful
      await this.paymentsService.updatePaymentStatus(orderId, 'COMPLETED', query.vnp_TransactionNo);
      // Update order payment status
      await this.prisma.orders.update({
        where: { order_id: orderId },
        data: { payment_status: 'PAID' },
      });
      return { success: true, message: 'Payment successful' };
    } else {
      // Payment failed
      await this.paymentsService.updatePaymentStatus(orderId, 'FAILED');
      return { success: false, message: 'Payment failed' };
    }
  }
}
