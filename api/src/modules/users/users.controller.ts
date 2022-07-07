import {Controller, Request, UseGuards, Post, Query, Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  //@UseGuards(JwtAuthGuard)
  @Post('register')
  async registerUser(@Body() req) {
    console.log(req.body, req.query)
    await this.usersService.addOne(req);
  }
}
