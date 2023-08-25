import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LibroService } from './libro.service';
import { CreateLibroDTO } from './dto/crear-libro.dto';
import { Libro } from './libro.entity';

@Controller('libro')
export class LibroController {
    constructor(private libroService: LibroService) {}
    
    @Post('create')
    public async createLibro(@Body() createLibroDto: CreateLibroDTO): Promise<Libro> {
      return await this.libroService.createLibro(createLibroDto);
    }

    @Get('all')
    public async getLibros(): Promise<Libro[]> {
      return await this.libroService.getLibros();
    }

    @Get('/:libroId')
    public async getLibro(@Param('libroId') libroId: number) {
      return await this.libroService.getLibro(libroId);
    }

    @Patch('edit/:libroId')
    public async editLibro(
      @Body() createLibroDto: CreateLibroDTO,
      @Param('libroId') libroId: number,
    ): Promise<Libro> {
      return await this.libroService.editLibro(libroId, createLibroDto);
    }

    @Delete('delete/:libroId')
    public async deleteLibro(@Param('libroId') libroId: number) {
      return await this.libroService.deleteUser(libroId);
    }
  


}
