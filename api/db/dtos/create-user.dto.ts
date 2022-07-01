import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  userId: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  rank: number;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
