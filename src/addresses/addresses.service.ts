import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto, customerId: number) {
    const address = await this.prisma.customer_addresses.create({
      data: {
        ...createAddressDto,
        customer_id: customerId,
      },
    });
    return address;
  }

  async findAll(customerId: number) {
    return this.prisma.customer_addresses.findMany({
      where: { customer_id: customerId },
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(id: number, customerId: number) {
    const address = await this.prisma.customer_addresses.findFirst({
      where: { address_id: id, customer_id: customerId },
    });
    if (!address) {
      throw new NotFoundException('Address not found');
    }
    return address;
  }

  async update(id: number, updateAddressDto: UpdateAddressDto, customerId: number) {
    const address = await this.findOne(id, customerId);
    return this.prisma.customer_addresses.update({
      where: { address_id: id },
      data: updateAddressDto,
    });
  }

  async remove(id: number, customerId: number) {
    const address = await this.findOne(id, customerId);
    return this.prisma.customer_addresses.delete({
      where: { address_id: id },
    });
  }

  async setDefault(id: number, customerId: number) {
    const address = await this.findOne(id, customerId);
    // First, unset all default addresses for this customer
    await this.prisma.customer_addresses.updateMany({
      where: { customer_id: customerId },
      data: { is_default: false },
    });
    // Then set this one as default
    return this.prisma.customer_addresses.update({
      where: { address_id: id },
      data: { is_default: true },
    });
  }

  async getProvinces() {
    return this.prisma.provinces.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async getWardsByProvince(provinceId: number) {    
    return this.prisma.wards.findMany({
      where: { province_id: provinceId },
      orderBy: { name: 'asc' },
    });
  }

  async getWardDetail(wardId: number) {
    return this.prisma.wards.findUnique({
      where: { ward_id: wardId },
      include: { provinces: true },
    });
  }
}