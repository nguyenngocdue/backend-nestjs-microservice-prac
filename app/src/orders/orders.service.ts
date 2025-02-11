// src/orders/orders.service.ts
import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(userId: number, amount: number): Promise<Order> {
    return this.prisma.order.create({
      data: {
        userId,
        amount,
      },
    });
  }

  async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany();
  }

  async findOne(id: number): Promise<Order | null> {
    return this.prisma.order.findUnique({
      where: { id },
    });
  }

  async updateOrder(id: number, amount: number): Promise<Order> {
    return this.prisma.order.update({
      where: { id },
      data: { amount },
    });
  }

  async removeOrder(id: number): Promise<Order> {
    return this.prisma.order.delete({
      where: { id },
    });
  }
}
