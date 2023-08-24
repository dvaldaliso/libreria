import { Libro } from './libro.entity';

export const usersProviders = [
  {
    provide: 'LIBROS_REPOSITORY',
    useValue: Libro,
  },
];
