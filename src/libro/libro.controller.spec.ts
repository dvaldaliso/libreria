import { Test, TestingModule } from '@nestjs/testing';
import { LibroController } from './libro.controller';
import { LibroService } from './libro.service';

describe('LibroController', () => {
  let controller: LibroController;
  let service : LibroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:[
        LibroController,
        {
          provide: LibroService,
          useValue:{
            createLibro: jest.fn()
          }
        }
      ]
    }).compile();

    controller = module.get<LibroController>(LibroController);
    service = module.get<LibroService>(LibroService);
  });

  it('Debe ser definido', () => {
    expect(controller).toBeDefined();
  });

  it('retornar datos del servicio', async () => {
  
    const mockLibro = {nombre: 'potter', isbn: '0546', estado:'0' };
    service.createLibro = jest.fn().mockResolvedValue(mockLibro);

    const result = await controller.createLibro(mockLibro);

    expect(result).toEqual(mockLibro);
    expect(service.createLibro).toHaveBeenCalledWith({nombre: 'potter', isbn: '0546', estado:'0' });
  });

});
