import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>
  ) { }

  create(CreateCategoryDto: CreateCategoryDto) {
    return  this.categoriesRepository.save(CreateCategoryDto);
  }

  findAll()  {
    return this.categoriesRepository.find();
  }

  findOne(id: string) {
    const menu = this.categoriesRepository.findOne({ where: {id}});
    return menu;
  }
  
  async update(uuid:string,UpdateCategoryDto:UpdateCategoryDto): Promise<void>{
    await this.categoriesRepository.update(uuid,UpdateCategoryDto) ;
    
  }

  remove(uuid: string) {
    this.categoriesRepository.delete(uuid);
    return "eliminado";
  }
}
