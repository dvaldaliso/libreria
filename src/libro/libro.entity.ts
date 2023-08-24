
import { Table, Column, Model, DataType } from 'sequelize-typescript';

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


}
