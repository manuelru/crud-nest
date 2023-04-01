import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brands } from './entities/brand.entity';
import { Repository } from 'typeorm';


@Injectable()
export class BrandsService {
  
  constructor(
    @InjectRepository(Brands)
    private brandsRepository: Repository<Brands>
  ) { }

  create(CreateBrandDto: CreateBrandDto) {
    return  this.brandsRepository.save(CreateBrandDto);
  }

  findAll()  {
    return this.brandsRepository.find();
  }

  findOne(id: string) {
    const menu = this.brandsRepository.findOne({ where: {id}});
    return menu;
  }
  
  async update(uuid:string,UpdateBrandDto:UpdateBrandDto): Promise<void>{
    await this.brandsRepository.update(uuid,UpdateBrandDto) ;
    
  }

  remove(uuid: string) {
    this.brandsRepository.delete(uuid);
    return "eliminado";
  }
}
