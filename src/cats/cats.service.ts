import { Injectable } from '@nestjs/common';
import { Cat } from '../schemas/cat-schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  findAll() {
    return this.catModel.find();
  }
}
