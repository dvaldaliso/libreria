import { Inject, Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Prestamo } from './entities/prestamo.entity';
import { Libro } from '../libro/libro.entity';
import { Sequelize } from 'sequelize';


@Injectable()

export class PrestamoService {
  constructor(
    @Inject('PRESTAMO_REPOSITORY')
    private prestamoRepository: typeof Prestamo,

    @Inject('LIBROS_REPOSITORY')
    private libroRepository: typeof Libro,
    
    @Inject('SEQUELIZE')
    private sequelize: Sequelize
   
  ) {}
  

  async create(createPrestamoDto: CreatePrestamoDto):Promise<string> {
    const t = await this.sequelize.transaction()
    try {
     
      const libroPrestado = await this.libroRepository.findOne({
        where: {
          id: createPrestamoDto.libroId,
          estado: 1,
        },
        transaction: t,
      });
  
      if (libroPrestado) {
        throw new Error('El libro ya está prestado');
      }
  
      const prestamo = await this.prestamoRepository.create({...createPrestamoDto}, {
         transaction:t,
      });
      //const prestamo = await this.prestamoRepository.create({...createPrestamoDto});
  
      await this.libroRepository.update({
        estado: 1,
      }, {
        where: {
          id: createPrestamoDto.libroId,
        } ,transaction:t   
      });
  
      // Confirma la transacción
      await t.commit();
      return `se ha relizado un prestamo del libro `
    } catch (error) {
      await t.rollback();
      return `no se ha relizado un prestamo del libro ${error}`
    }
   
  }

 
}
