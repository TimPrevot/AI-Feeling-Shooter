import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type Finance12_predDocument = Finance12_pred & Document;

@Schema()
export class Finance12_pred {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  DateTime: Date;

  @Prop()
  Open: number;

  @Prop()
  High: number;

  @Prop()
  Low: number;

  @Prop()
  Close: number;

  @Prop()
  Volume: number;

  @Prop()
  Dividends: number;

  @Prop()
  PredictedClose: number;
}

export const Finance12_predSchema =
  SchemaFactory.createForClass(Finance12_pred);
