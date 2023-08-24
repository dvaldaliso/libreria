import { Sequelize } from 'sequelize-typescript';
import { Libro } from '../libro/libro.entity';
import { Lector } from '../lector/entities/lector.entity';
import { Prestamo } from '../prestamo/entities/prestamo.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      });
      sequelize.addModels(
        [
          Libro,
          Lector,
          Prestamo
        ]
      );
      
      await sequelize.sync();
      return sequelize;
    },
  },
];
