// src/users/users.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('users') // Tag hiển thị trong Swagger
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo mới user' })
  @ApiResponse({ status: 201, description: 'User được tạo thành công.' })
  create(@Body() body: { email: string; name?: string }) {
    return this.usersService.createUser(body.email, body.name);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách tất cả user' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy chi tiết user theo id' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Cập nhật user' })
  update(@Param('id') id: string, @Body() body: { name: string }) {
    return this.usersService.updateUser(+id, body.name);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa user' })
  remove(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
