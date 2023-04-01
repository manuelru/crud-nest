import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from './entities/country.entity';
import { Repository } from 'typeorm';



@Injectable()
export class CountriesService {


  constructor(
    @InjectRepository(Countries)
    private CountriesRepository: Repository<Countries>
  ) { }

  create(CreateCountryDto: CreateCountryDto) {
    return  this.CountriesRepository.save(CreateCountryDto);
  }

  findAll()  {
    return this.CountriesRepository.find();
  }

  findOne(id: string) {
    const menu = this.CountriesRepository.findOne({ where: {id}});
    return menu;
  }
  
  async update(uuid:string,UpdateCountryDto:UpdateCountryDto){
     await this.CountriesRepository.update(uuid,UpdateCountryDto) ;
    
  }

  remove(uuid: string) {
    this.CountriesRepository.delete(uuid);
    return "eliminado";
  }
}
