import { Test, TestingModule } from '@nestjs/testing';
import { LectorService } from './lector.service';
import { Lector } from './entities/lector.entity';
import { Prestamo } from '../prestamo/entities/prestamo.entity';

describe('LectorService', () => {
  let service: LectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LectorService,
        {
          provide: 'LECTOR_REPOSITORY',
          useValue: Lector,
        }
        
        
      ],
    }).compile();

    service = module.get<LectorService>(LectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
