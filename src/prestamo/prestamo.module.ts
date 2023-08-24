import { Module } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';
import { prestamoProviders } from './prestamo.providers';
import { DatabaseModule } from '../database/database.module';
import { LibroModule } from 'src/libro/libro.module';
import { librosProviders } from 'src/libro/libro.providers';
import { Libro } from 'src/libro/libro.entity';

@Module({
  imports: [
    DatabaseModule,
    LibroModule  
    ],
  controllers: [PrestamoController],
  providers: [
    PrestamoService,
    ...prestamoProviders,
    {
      provide: 'LIBROS_REPOSITORY',
      useValue: Libro,
    },
  ],
})
export class PrestamoModule {}
