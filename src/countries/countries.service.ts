import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from './entities/country.entity';
import { Repository } from 'typeorm';



@Injectable()
export class CountriesService {
  gendersRepository: any;

  constructor(
    @InjectRepository(Countries)
    private CountriesService: Repository<Countries>
  ) { }

  create(CreateCountryDto: CreateCountryDto) {
    return  this.CountriesService.save(CreateCountryDto);
  }

  findAll()  {
    return this.CountriesService.find();
  }

  findOne(id: string) {
    const menu = this.CountriesService.findOne({ where: {id}});
    return menu;
  }
  
  async update(uuid:string,UpdateCountryDto:UpdateCountryDto): Promise<void>{
    await this.CountriesService.update(uuid,UpdateCountryDto) ;
    
  }

  remove(uuid: string) {
    this.CountriesService.delete(uuid);
    return "eliminado";
  }
}
