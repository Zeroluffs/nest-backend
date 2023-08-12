import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCatDot {
  @IsString()
  @IsOptional()
  name: string;
  @IsOptional()
  @IsNumber()
  age: number;
  @IsString()
  @IsOptional()
  breed: string;
  @IsString()
  @IsOptional()
  image: string;
}
