import { Test, TestingModule } from '@nestjs/testing';
import { PrestamoService } from './prestamo.service';
import { Prestamo } from './entities/prestamo.entity';
import { Libro } from '../libro/libro.entity';

describe('PrestamoService', () => {
  let service: PrestamoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrestamoService,
        {
          provide: 'PRESTAMO_REPOSITORY',
          useValue: Prestamo,
        },
        {
          provide: 'LIBROS_REPOSITORY',
          useValue: Libro,
        }
        
      ],
    }).compile();

    service = module.get<PrestamoService>(PrestamoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
