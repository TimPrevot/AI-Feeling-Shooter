import {Controller, Post, Body, Res} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async registerUser(@Body() req, @Res() res) {
    await this.usersService.addOne(req, res);
  }
}
