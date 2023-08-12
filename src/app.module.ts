import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ImagesModule } from './images/images.module';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ImagesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    CatsModule,
  ],
})
export class AppModule {}
