import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { AddFavCatDto } from '../dto/add-fav-cat.dto';

@Controller('images')
export class ImagesController {
  constructor(private imageService: ImagesService) {}

  @Get()
  findAll() {
    return this.imageService.getImages();
  }

  @Get('favourites')
  findFavourites() {
    return this.imageService.getFavourites();
  }

  @Post('favourites/add')
  addFavourite(@Body() body: AddFavCatDto) {
    return this.imageService.addFavourite(body);
  }
  @Delete('favourites/:favourite_id')
  @HttpCode(204)
  deleteFavourite(@Param('favourite_id') favourite_id: string) {
    return this.imageService.deleteFavourite(favourite_id);
  }
}
