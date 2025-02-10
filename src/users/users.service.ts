import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(email: string, name?: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        email,
        name,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async updateUser(id: number, name: string): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: { name },
    });
  }

  async removeUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
