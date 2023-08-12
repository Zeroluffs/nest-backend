import { Injectable } from '@nestjs/common';
import { Cat } from '../schemas/cat-schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDot } from '../dto/update-cat.dot';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  findAll() {
    return this.catModel.find();
  }

  async create(cat: CreateCatDto) {
    const createdCat = new this.catModel(cat);
    return createdCat.save();
  }

  async findOne(id: string) {
    return this.catModel.findById(id);
  }

  async delete(id: string) {
    return this.catModel.findByIdAndDelete(id);
  }

  async update(id: string, updateCat: UpdateCatDot) {
    return this.catModel.findByIdAndUpdate(id, updateCat, { new: true });
  }
}
