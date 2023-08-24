import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibroModule } from './libro/libro.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LibroModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
