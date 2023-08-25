import { Test, TestingModule } from '@nestjs/testing';
import { LibroService } from './libro.service';
import { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';

describe('LibroService', () => {
  let service: LibroService;
  let sequelize: Sequelize;
  let libroMock;

  beforeEach(async () => {
    const sequelize = new Sequelize('test', 'devel', 'devel', {
      host: 'localhost',
      dialect: 'mysql', 
    });
    const Libro = sequelize.define('Libro', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    }, {
      // Other model options go here
    });
    libroMock=Libro
   
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LibroService,
        {
          provide: 'LIBROS_REPOSITORY',
          useValue: Libro,
        },
        {
          provide: Libro, 
          useValue: libroMock, 
        },
        {
          provide: Sequelize, 
          useValue: sequelize, 
        },
      ],
    }).compile();

    service = module.get<LibroService>(LibroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should get a user by id', async () => {
    libroMock.findOne = jest.fn().mockResolvedValue({ id: 1, nombre: 'Test User', createdAt:'2023-08-24 20:39:20',updatedAt:'2023-08-24 20:39:20'  });

    const libro = await service.getLibro(1);

    expect(libro).toEqual({ id: 1, nombre: 'Test User', createdAt:'2023-08-24 20:39:20',updatedAt:'2023-08-24 20:39:20'  });
    expect(libroMock.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
  });
});
