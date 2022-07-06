import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  PredictionDocument,
  Predictions,
} from '../../../db/schemas/prediction.schema';
import { CreatePredictionDto } from '../../../db/dtos/create-prediction.dto';

@Injectable()
export class PredictionService {
  constructor(
    @InjectModel('Predictions')
    private predictionModel: Model<PredictionDocument>,
  ) {}

  async create(createPredictionDto: CreatePredictionDto): Promise<Predictions> {
    const createdPrediction = new this.predictionModel(createPredictionDto);
    return createdPrediction.save();
  }

  async findAll(): Promise<Predictions[]> {
    return this.predictionModel.find().exec();
  }
}
