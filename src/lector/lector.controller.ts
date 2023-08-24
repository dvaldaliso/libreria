import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LectorService } from './lector.service';
import { CreateLectorDto } from './dto/create-lector.dto';
import { UpdateLectorDto } from './dto/update-lector.dto';
import { Lector } from './entities/lector.entity';

@Controller('lector')
export class LectorController {
  constructor(private readonly lectorService: LectorService) {}

  @Post()
  async create(@Body() createLectorDto: CreateLectorDto):Promise<Lector> {
    return await this.lectorService.create(createLectorDto);
  }

  @Get()
  async findAll(): Promise<Lector[]> {
    return await this.lectorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Lector> {
    return await this.lectorService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateLectorDto: UpdateLectorDto
    ):Promise<Lector> {
    return await this.lectorService.update(+id, updateLectorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return await this.lectorService.remove(+id);
  }
}
