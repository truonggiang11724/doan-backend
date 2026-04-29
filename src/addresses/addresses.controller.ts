import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Addresses')
@Controller('addresses')
@UseGuards(JwtAuthGuard)
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) { }

  @Post()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Create new address',
    description: 'Create a new shipping address for the authenticated user.',
  })
  @ApiBody({
    type: CreateAddressDto,
    description: 'Address details',
    examples: {
      example1: {
        value: {
          receiver_name: 'John Doe',
          phone: '0123456789',
          ward_id: 1,
          address_detail: '123 Main St, District 1',
          is_default: false,
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Address created successfully',
    example: {
      address_id: 1,
      customer_id: 1,
      receiver_name: 'John Doe',
      phone: '0123456789',
      ward_id: 1,
      address_detail: '123 Main St, District 1',
      is_default: false,
      created_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid address data',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  create(@Body() createAddressDto: CreateAddressDto, @Request() req: any) {
    return this.addressesService.create(createAddressDto, req.user.user_id);
  }

  @Get()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get all addresses',
    description: 'Retrieve all saved addresses for the authenticated user.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of addresses retrieved successfully',
    example: {
      data: [
        {
          address_id: 1,
          customer_id: 1,
          receiver_name: 'John Doe',
          phone: '0123456789',
          ward_id: 1,
          address_detail: '123 Main St, District 1',
          is_default: true,
          created_at: '2024-01-15T10:30:00Z',
        },
      ],
      total: 3,
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  findAll(@Request() req) {
    return this.addressesService.findAll(req.user.user_id);
  }

  @Get('provinces')
  @ApiOperation({
    summary: 'Get all provinces',
    description: 'Retrieve list of all Vietnamese provinces for address selection.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of provinces retrieved successfully',
    example: {
      data: [
        {
          province_id: 1,
          province_name: 'Ho Chi Minh',
        },
      ],
      total: 63,
    },
  })
  findProvinces() {
    return this.addressesService.getProvinces();
  }

  @Get('provinces/:id/wards')
  @ApiOperation({
    summary: 'Get wards by province',
    description: 'Retrieve all wards/districts in a specific province.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Province ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'List of wards retrieved successfully',
    example: {
      data: [
        {
          ward_id: 1,
          ward_name: 'Ward 1',
          province_id: 1,
        },
      ],
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Province not found',
  })
  findWards(@Param('id') id: string) {
    return this.addressesService.getWardsByProvince(+id);
  }

  @Get('wards/:id')
  @ApiOperation({
    summary: 'Get ward details',
    description: 'Retrieve detailed information about a specific ward.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Ward ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Ward details retrieved successfully',
    example: {
      ward_id: 1,
      ward_name: 'Ward 1',
      province_id: 1,
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Ward not found',
  })
  getWardDetail(@Param('id') id: string) {
    return this.addressesService.getWardDetail(+id);
  }

  @Get(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get address details',
    description: 'Retrieve detailed information about a specific address.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Address ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Address details retrieved successfully',
    example: {
      address_id: 1,
      user_id: 1,
      full_name: 'John Doe',
      phone_number: '0123456789',
      street: '123 Main St',
      ward_name: 'Ward 1',
      province_name: 'Ho Chi Minh',
      is_default: true,
      created_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  @ApiResponse({
    status: 404,
    description: 'Address not found',
  })
  findOne(@Param('id') id: string, @Request() req) {
    return this.addressesService.findOne(+id, req.user.user_id);
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update address',
    description: 'Update an existing saved address.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Address ID',
    example: 1,
  })
  @ApiBody({
    type: UpdateAddressDto,
    description: 'Address update data',
  })
  @ApiResponse({
    status: 200,
    description: 'Address updated successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid address data',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  @ApiResponse({
    status: 404,
    description: 'Address not found',
  })
  update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
    @Request() req,
  ) {
    return this.addressesService.update(+id, updateAddressDto, req.user.user_id);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Delete address',
    description: 'Delete a saved address.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Address ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Address deleted successfully',
    example: {
      message: 'Address deleted successfully',
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  @ApiResponse({
    status: 404,
    description: 'Address not found',
  })
  remove(@Param('id') id: string, @Request() req) {
    return this.addressesService.remove(+id, req.user.user_id);
  }

  @Patch(':id/default')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Set as default address',
    description: 'Mark an address as the default shipping address.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Address ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Default address set successfully',
    example: {
      message: 'Address set as default',
      address_id: 1,
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  @ApiResponse({
    status: 404,
    description: 'Address not found',
  })
  setDefault(@Param('id') id: string, @Request() req) {
    return this.addressesService.setDefault(+id, req.user.user_id);
  }
}