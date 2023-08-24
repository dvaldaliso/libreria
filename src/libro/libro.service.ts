import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Libro } from './libro.entity';
import { CreateLibroDTO } from './dto/crear-libro.dto';

@Injectable()
export class LibroService {
    constructor(
        @Inject('LIBROS_REPOSITORY')
        private librosRepository: typeof Libro,
      ) {}

      public async createLibro(createLibroDto: CreateLibroDTO): Promise<Libro> {
        return await this.librosRepository.create({...createLibroDto});
      }  

      public async getLibros(): Promise<Libro[]> {
        return await this.librosRepository.findAll();
      }

      public async getLibro(libroId: number): Promise<Libro> {
        return await this.librosRepository.findOne({
            where: { id: libroId },
        });
      }

      public async editLibro(
        libroId: number,
        createLibroDto: CreateLibroDTO,
      ): Promise<Libro> {
        const editedLibro = await this.librosRepository.findOne({
          where: { id: libroId },
        });
    
        if (!editedLibro) {
          throw new NotFoundException('Libro not found');
        }
        const result = await this.librosRepository.update(
          
           createLibroDto,
          {
            where: {
              id: libroId, 
            },
          }
          
        );
    
        return editedLibro;
      }
      public async deleteUser(userId: number): Promise<void> {
        const libro = await this.librosRepository.findOne({
          where: { id: userId },
        });
        await libro.destroy();
      }  
}
