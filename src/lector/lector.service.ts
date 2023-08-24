import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateLectorDto } from './dto/create-lector.dto';
import { UpdateLectorDto } from './dto/update-lector.dto';
import { Lector } from './entities/lector.entity';

@Injectable()
export class LectorService {
  constructor(
    @Inject('LECTOR_REPOSITORY')
    private lectorRepository: typeof Lector,
  ) {}

  async create(createLectorDto: CreateLectorDto): Promise<Lector> {
    return await this.lectorRepository.create({...createLectorDto});
  }
  

  async findAll(): Promise<Lector[]>{
    return await this.lectorRepository.findAll();
  }

  async findOne(id: number): Promise<Lector> {
    return await this.lectorRepository.findOne({
      where: { id: id },
  });
  }

  async update(
    id: number,
    updateLectorDto: UpdateLectorDto
    ):Promise<Lector> {     
     
      await this.lectorRepository.update(
          
        updateLectorDto,
       {
         where: {
           id: id, 
         },
       }
       
     );

    return await this.lectorRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: number) : Promise<string>{
    const libro = await this.lectorRepository.findOne({
      where: { id: id },
    });
    await libro.destroy();
    return `This action removes a #${id} lector`;
  }
}
