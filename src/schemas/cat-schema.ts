import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Cat {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  name: string;
  @Prop({
    required: true,
  })
  age: number;
  @Prop({
    required: true,
    trim: true,
  })
  breed: string;
  @Prop({
    required: true,
    trim: true,
  })
  image: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
