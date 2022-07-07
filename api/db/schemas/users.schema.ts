import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  userId: number;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  rank: number;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  isLoggedIn: boolean;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
