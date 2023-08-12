import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    ImagesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/catdb'),
  ],
})
export class AppModule {}
