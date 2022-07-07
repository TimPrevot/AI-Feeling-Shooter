import {
  Controller,
  Request,
  Put,
  UseGuards,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Put('register')
  async registerUser(@Request() req) {
    await this.usersService.addOne(req.body);
  }
}