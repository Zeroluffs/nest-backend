import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';

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
}
