import { Module } from '@nestjs/common';
import { LectorService } from './lector.service';
import { LectorController } from './lector.controller';
import { lectorProviders } from './lector.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LectorController],
  providers: [
    LectorService,
    ...lectorProviders,
  ],
})
export class LectorModule {}
