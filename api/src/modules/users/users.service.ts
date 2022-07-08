import { Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../../../db/schemas/users.schema';
import { CreateUserDto } from '../../../db/dtos/create-user.dto';
import { Model } from 'mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');
import { Response } from 'express';

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

  async findByUsername(username: string): Promise<Users> {
    return this.usersModel.findOne({ username: username }).exec();
  }

  async addOne(user: any, @Res() res: Response): Promise<any> {
    const nbUsers = (await this.usersModel.find().exec()).length;
    await this.create({
      userId: nbUsers + 1,
      firstname: await user.firstname,
      lastname: await user.lastname,
      rank: 0,
      username: await user.username,
      password: await this.hashIt(user.password),
      isLoggedIn: false,
    });
    const createdUser = { username: user.username, password: user.password };
    res.send(createdUser);
  }

  async hashIt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(6);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  }

  async changeRank(req: any) {
    await this.usersModel.updateOne(
      { username: req.username },
      {
        rank: req.newRank,
      },
    );
  }
}
