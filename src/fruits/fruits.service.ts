import { Injectable } from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { readData, WriteData } from "./utils/file.control";
import { Fruit } from './entities/fruit.entity';

@Injectable()
export class FruitsService {
  create(createFruitDto: CreateFruitDto) {
    const fruits =  readData()
    const newfruit = { id: !fruits.length ? 1 : fruits.at(-1).id+1, ...createFruitDto};
    // console.log(newfruit);
    
    fruits.push(newfruit)
    WriteData(fruits);
    return{
      statusCode: 201,
      message: 'success',
      data: newfruit
    }
  }
  
  findAll() {
    return{
      statusCode: 201,
      message: 'success',
      data: readData()
    }
  }
  
  findOne(id: number) {
    const fruits = readData()
    const fruit = fruits.find((fruit : any) => fruit?.id == id)
    if (!fruit) {
      return {
        statusCode: 404,
        message: 'not found'
      }
    }
    return{
      statusCode: 201,
      message: 'success',
      data: fruit
    }
  }
  
  update(id: number, updateFruitDto: UpdateFruitDto) {
    const fruits = readData()
    const index = fruits.findIndex((fruit: any) => fruit?.id == id)
    if (index === -1) {
      return {
        statusCode: 404,
        message: `not found ${id}`
      }
    }
    
    fruits[index] = {id: +id, ...updateFruitDto}
    WriteData(fruits)
    
    return{
      statusCode: 200,
      message: 'success',
      data: fruits[index]
    }
  }
  remove(id: number) {
    const fruits = readData()
    const index = fruits.findIndex((fruit: any) => fruit?.id == id)
    if (index === -1) {
      return {
        statusCode: 404,
        message: `not found ${id}`
      }
    }
    fruits.splice(index, 1)
    return{
      statusCode: 200,
      message: 'success',
      data: {}
    }
  }
}