import { Body, Controller, Get, Post } from '@nestjs/common';

import { Roles } from 'src/auth/decorators/role.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Roles(['ADMIN'])
  findAll() {
    return this.userService.findAll();
  }
}
