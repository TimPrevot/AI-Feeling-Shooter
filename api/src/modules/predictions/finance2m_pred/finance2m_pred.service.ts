import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Finance2m_pred } from '../../../../db/schemas/Finance2m_pred.schema';
import { Model } from 'mongoose';

@Injectable()
export class Finance2m_predService {
  constructor(
    @InjectModel('Finance2m_pred')
    private finance2m_predModel: Model<Finance2m_pred>,
  ) {}

  async findAll(): Promise<Finance2m_pred[]> {
    return this.finance2m_predModel.find().exec();
  }
}
