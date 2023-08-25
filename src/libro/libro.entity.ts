
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Prestamo } from '../prestamo/entities/prestamo.entity';

@Table
export class Libro extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  isbn: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  estado: string;

  @HasMany(() => Prestamo)
  prestamos: Prestamo[];


}
