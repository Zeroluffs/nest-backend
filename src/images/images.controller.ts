import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
