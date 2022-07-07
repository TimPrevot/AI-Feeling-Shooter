import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

export type Tweet_predDocument = Tweet_pred & Document;

@Schema()
export class Tweet_pred {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  created_at: Date;

  @Prop()
  text: string;

  @Prop()
  sentiment: string;

  @Prop()
  language: string;
}

export const Tweet_predSchema = SchemaFactory.createForClass(Tweet_pred);
