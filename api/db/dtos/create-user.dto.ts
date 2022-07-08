import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  userId: number;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsNumber()
  rank: number;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsBoolean()
  isLoggedIn: boolean;
}
