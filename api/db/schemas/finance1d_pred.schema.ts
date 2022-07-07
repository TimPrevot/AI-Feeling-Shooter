import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type Finance1d_predDocument = Finance1d_pred & Document;

@Schema()
export class Finance1d_pred {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  Date: Date;

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
  Predicted_Close: number;
}

export const Finance1d_predSchema =
  SchemaFactory.createForClass(Finance1d_pred);
