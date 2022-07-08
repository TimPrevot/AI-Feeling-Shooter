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
    @InjectModel('tweet_pred')
    private tweet_predModel: Model<Tweet_predDocument>,
  ) {}

  async findAll(): Promise<Tweet_pred[]> {
    return this.tweet_predModel.find().exec();
  }

  async getRepartition(): Promise<any> {
    const preds = await this.findAll();
    let positives = 0;
    let neutrals = 0;
    let negatives = 0;
    for (let i = 0; i < preds.length; i++) {
      if (preds[i].sentiment === 'positive') {
        positives++;
      } else if (preds[i].sentiment === 'negative') {
        negatives++;
      } else {
        neutrals++;
      }
    }
    return {
      positives: positives,
      negatives: negatives,
      neutrals: neutrals,
    };
  }
}
