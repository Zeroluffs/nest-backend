import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDot } from '../dto/update-cat.dot';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get('id')
  async findOne(@Param('id') id: string) {
    const cat = await this.catsService.findOne(id);
    if (!cat) {
      throw new ConflictException('Cat not found');
    }
    return cat;
  }

  @Post('/newCat/add')
  async create(@Body() body: CreateCatDto) {
    try {
      return await this.catsService.create(body);
    } catch (e) {
      if (e.code === 11000) {
        throw new ConflictException('Cat already exists');
      }
      throw e;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const cat = await this.catsService.delete(id);
    if (!cat) {
      throw new ConflictException('Cat not found');
    }
    return cat;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateCatDot) {
    const cat = await this.catsService.update(id, body);
    if (!cat) {
      throw new ConflictException('Cat not found');
    }
    return cat;
  }
}
