import { IsBoolean, IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreatePredictionDto {
  @IsNumber()
  4046: number;

  @IsNumber()
  4225: number;

  @IsNumber()
  4770: number;

  @IsNotEmpty()
  _id: ObjectId;

  @IsNumber()
  plop: number;

  @IsDate()
  Date: Date;

  @IsNumber()
  AveragePrice: number;

  @IsNumber()
  type: number;

  @IsDate()
  year: Date;

  @IsBoolean()
  region: boolean;

  @IsNumber()
  LargeBags: number;

  @IsNumber()
  SmallBags: number;

  @IsNumber()
  TotalBags: number;

  @IsNumber()
  TotalVolume: number;

  @IsNumber()
  XLargeBags: number;
}
