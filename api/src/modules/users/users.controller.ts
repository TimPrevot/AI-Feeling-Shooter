import {
  Controller,
  Request,
  Put,
  UseGuards,
  ValidationPipe,
  UsePipes, Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('register')
  async registerUser(@Request() req) {
    await this.usersService.addOne(req.body);
  }
}
