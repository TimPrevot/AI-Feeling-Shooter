import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type Finance2m_predDocument = Finance2m_pred & Document;

@Schema()
export class Finance2m_pred {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  Datetime: Date;

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

export const Finance2m_predSchema =
  SchemaFactory.createForClass(Finance2m_pred);
