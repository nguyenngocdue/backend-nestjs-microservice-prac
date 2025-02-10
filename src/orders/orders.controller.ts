// src/orders/orders.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { OrdersService } from './orders.service';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo Order mới' })
  create(@Body() body: { userId: number; amount: number }) {
    return this.ordersService.createOrder(body.userId, body.amount);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách tất cả Order' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy chi tiết Order theo id' })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Cập nhật Order' })
  update(@Param('id') id: string, @Body() body: { amount: number }) {
    return this.ordersService.updateOrder(+id, body.amount);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa Order' })
  remove(@Param('id') id: string) {
    return this.ordersService.removeOrder(+id);
  }
}
