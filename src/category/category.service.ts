import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './model/category.model';
import { Product } from '../products/models/product.model';

@Injectable()
export class CategoryService {
  constructor( 
    @InjectModel(Category) private model: typeof Category 
  ){} 
  async create (createCategoryDto: CreateCategoryDto) { 
    const category = await this.model.create({ ...createCategoryDto }); 
    return category; 
  } 
  async findAll() {
    return this.model.findAll({ include: { all: true } }); 
  }

  async findById(id: number) {
    const category = await this.model.findByPk(id, {include: {model: Product}});
    if (!category) return 'not found';
    return category
  }

  async update (id: number, updateCategoryDto: UpdateCategoryDto) { 
    const category = await this.model.update (updateCategoryDto, { where: { id}, returning: true }) 
    return category [1][0]; 
  }

  async remove(id: number){ 
    await this.model.destroy({ where: {id} }); 
    return { data: {} };
  }
}

