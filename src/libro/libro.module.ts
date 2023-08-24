import { Module } from '@nestjs/common';
import { LibroController } from './libro.controller';
import { LibroService } from './libro.service';
import { librosProviders } from './libro.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LibroController],
  providers: [
    LibroService,
    ...librosProviders,
  ],
})
export class LibroModule {}
