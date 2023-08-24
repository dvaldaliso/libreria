import { Libro } from './libro.entity';

export const librosProviders = [
  {
    provide: 'LIBROS_REPOSITORY',
    useValue: Libro,
  },
];
