import { Test, TestingModule } from '@nestjs/testing';
import { LectorController } from './lector.controller';
import { LectorService } from './lector.service';
import { Lector } from './entities/lector.entity';

describe('LectorController', () => {
  let controller: LectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LectorController],
      providers: [
        LectorService,
        {
          provide: 'LECTOR_REPOSITORY',
          useValue: Lector,
        }],
    }).compile();

    controller = module.get<LectorController>(LectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
