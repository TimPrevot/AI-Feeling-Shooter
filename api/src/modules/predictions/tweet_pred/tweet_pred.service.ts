import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Tweet_pred,
  Tweet_predDocument,
} from '../../../../db/schemas/tweet_pred.schema';
import { Model } from 'mongoose';

@Injectable()
export class Tweet_predService {
  constructor(
    @InjectModel('Tweet_pred')
    private tweet_predModel: Model<Tweet_predDocument>,
  ) {}

  async findAll(): Promise<Tweet_pred[]> {
    return this.tweet_predModel.find().exec();
  }
}
