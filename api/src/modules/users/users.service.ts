import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../../../db/schemas/users.schema';
import { CreateUserDto } from '../../../db/dtos/create-user.dto';
import { Model } from 'mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private usersModel: Model<UsersDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const createdUser = new this.usersModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  async findByUsername(userName: string): Promise<Users> {
    return this.usersModel.findOne({ username: userName }).exec();
  }

  async addOne(user: any): Promise<any> {
    const nbUsers = (await this.usersModel.find().exec()).length;
    await this.create({
      userId: nbUsers + 1,
      firstName: await user.firstName,
      lastName: await user.lastName,
      rank: 0,
      username: await user.username,
      password: await this.hashIt(user.password),
    });
    const createdUser = { username: user.username, password: user.password };
    return createdUser;
  }

  async hashIt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(6);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  }
}
