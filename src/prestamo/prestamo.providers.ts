import { Prestamo } from './entities/prestamo.entity';

export const prestamoProviders = [
  {
    provide: 'PRESTAMO_REPOSITORY',
    useValue: Prestamo,
  },
];
