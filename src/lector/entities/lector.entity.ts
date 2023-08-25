import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Prestamo } from '../../prestamo/entities/prestamo.entity';

@Table
export class Lector extends Model{
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

      @HasMany(() => Prestamo)
      prestamos: Prestamo[];
    
}
