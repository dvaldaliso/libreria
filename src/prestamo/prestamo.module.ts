import { Module } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';
import { prestamoProviders } from './prestamo.providers';
import { DatabaseModule } from '../database/database.module';
import { LibroModule } from 'src/libro/libro.module';
import { librosProviders } from 'src/libro/libro.providers';

@Module({
  imports: [
    DatabaseModule,
    
    ],
  controllers: [PrestamoController],
  providers: [
    PrestamoService,
    ...prestamoProviders
    
  ],
})
export class PrestamoModule {}
