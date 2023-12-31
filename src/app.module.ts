import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibroModule } from './libro/libro.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { LectorModule } from './lector/lector.module';
import { PrestamoModule } from './prestamo/prestamo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LibroModule, DatabaseModule, LectorModule, PrestamoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
