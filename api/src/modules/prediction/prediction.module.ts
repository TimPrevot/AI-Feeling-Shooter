import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Predictions,
  PredictionsSchema,
} from '../../../db/schemas/prediction.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Predictions', schema: PredictionsSchema },
    ]),
  ],
})
export class PredictionModule {}
