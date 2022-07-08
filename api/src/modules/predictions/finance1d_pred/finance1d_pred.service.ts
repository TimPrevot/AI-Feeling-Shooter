import {
  Finance1d_pred,
  Finance1d_predDocument,
} from '../../../../db/schemas/finance1d_pred.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class Finance1d_predService {
  constructor(
    @InjectModel('finance1d_pred')
    private finance1d_predModel: Model<Finance1d_predDocument>,
  ) {}

  async findAll(): Promise<Finance1d_pred[]> {
    return this.finance1d_predModel.find().exec();
  }

  async getCloseValues(): Promise<any> {
    const preds = await this.findAll();
    const close_values = [];
    const predicted_values = [];
    const dates = [];
    for (let i = 0; i < preds.length; i++) {
      if (isNaN(preds[i].Close) || isNaN(preds[i].Predicted_Close)) {
        continue;
      } else {
        close_values.push(preds[i].Close);
        predicted_values.push(preds[i].Predicted_Close);
        dates.push(preds[i].Date.toDateString());
      }
    }
    return {
      close_values,
      predicted_values,
      dates,
    };
  }
}
