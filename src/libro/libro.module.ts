import { Module } from '@nestjs/common';
import { LibroController } from './libro.controller';
import { LibroService } from './libro.service';
import { librosProviders } from './libro.providers';
import { DatabaseModule } from '../database/database.module';
import { Libro } from './libro.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [LibroController],
  providers: [
    LibroService,
    ...librosProviders
  ],
  exports:[
    ...librosProviders
  ]
})
export class LibroModule {}
