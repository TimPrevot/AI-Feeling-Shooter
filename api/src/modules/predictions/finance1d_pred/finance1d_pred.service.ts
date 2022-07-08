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
}
