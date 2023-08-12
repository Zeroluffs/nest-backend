import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  age: number;
  @IsString()
  @IsNotEmpty()
  breed: string;
  @IsString()
  @IsNotEmpty()
  image: string;
}
