import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type PredictionDocument = Predictions & Document;

@Schema()
export class Predictions {
  @Prop()
  4046: number;

  @Prop()
  4225: number;

  @Prop()
  4770: number;

  @Prop()
  _id: ObjectId;

  @Prop()
  plop: number;

  @Prop()
  Date: Date;

  @Prop()
  AveragePrice: number;

  @Prop()
  type: number;

  @Prop()
  year: Date;

  @Prop()
  region: boolean;

  @Prop()
  LargeBags: number;

  @Prop()
  SmallBags: number;

  @Prop()
  TotalBags: number;

  @Prop()
  TotalVolume: number;

  @Prop()
  XLargeBags: number;
}

export const PredictionsSchema = SchemaFactory.createForClass(Predictions);
