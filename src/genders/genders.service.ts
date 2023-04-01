import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Genders } from './entities/gender.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GendersService {

  constructor(
    @InjectRepository(Genders)
    private gendersRepository: Repository<Genders>
  ) { }

  create(createMenuDto: CreateGenderDto) {
    return  this.gendersRepository.save(createMenuDto);
  }

  findAll()  {
    return this.gendersRepository.find();
  }

  findOne(id: string) {
    const menu = this.gendersRepository.findOne({ where: {id}});
    return menu;
  }
  
  async update(uuid:string,UpdateGenderDto:UpdateGenderDto): Promise<void>{
    await this.gendersRepository.update(uuid,UpdateGenderDto) ;
    
  }

  remove(uuid: string) {
    this.gendersRepository.delete(uuid);
    return "eliminado";
  }
}
