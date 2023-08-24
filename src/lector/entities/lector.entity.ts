import { Table, Column, Model, DataType } from 'sequelize-typescript';

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
    
}
