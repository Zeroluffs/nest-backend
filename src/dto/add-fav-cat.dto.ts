import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddFavCatDto {
  @IsString()
  @IsNotEmpty()
  image_id: string;

  @IsString()
  @IsOptional()
  sub_id?: string;
}
