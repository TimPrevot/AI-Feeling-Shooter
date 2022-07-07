import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Finance12_pred,
  Finance12_predDocument,
} from '../../../../db/schemas/finance12_pred.schema';
import { Model } from 'mongoose';

@Injectable()
export class Finance12_predService {
  constructor(
    @InjectModel('Finance1/2_pred')
    private finance12_predModel: Model<Finance12_predDocument>,
  ) {}

  async findAll(): Promise<Finance12_pred[]> {
    return this.finance12_predModel.find().exec();
  }
}
