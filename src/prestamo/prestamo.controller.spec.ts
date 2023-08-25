import { Test, TestingModule } from '@nestjs/testing';
import { PrestamoController } from './prestamo.controller';
import { PrestamoService } from './prestamo.service';
import { Prestamo } from './entities/prestamo.entity';
import { Libro } from '../libro/libro.entity';

describe('PrestamoController', () => {
  let controller: PrestamoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestamoController],
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

    controller = module.get<PrestamoController>(PrestamoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
