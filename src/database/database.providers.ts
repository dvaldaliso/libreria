import { Sequelize } from 'sequelize-typescript';
import { Libro } from '../libro/libro.entity';
import { Lector } from 'src/lector/entities/lector.entity';

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
      });
      sequelize.addModels([Libro, Lector]);
      
      await sequelize.sync();
      return sequelize;
    },
  },
];
