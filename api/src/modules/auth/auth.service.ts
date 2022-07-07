import { Injectable } from '@nestjs/common';
import bcrypt = require('bcrypt');
import { UsersService } from '../users/users.service';
import { Users } from '../../../db/schemas/users.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pwd: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && this.comparePwd(pwd, (await user).password)) {
      return user;
    }
    return null;
  }

  async login(user: Users) {
    const payload = {
      pwd: user.password,
      sub: user.username,
    };
    const loggedUser = this.usersService.findByUsername(user.username);
    return {
      access_token: this.jwtService.sign(payload),
      loggedUser,
    };
  }

  async comparePwd(password: string, hashedPwd: string) {
    const validPwd = await bcrypt.compare(password, hashedPwd);
  }
}
