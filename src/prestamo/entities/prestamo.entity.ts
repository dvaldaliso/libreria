import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, Unique } from 'sequelize-typescript';
import { Lector } from '../../lector/entities/lector.entity';
import { Libro } from 'src/libro/libro.entity';

@Table
export class Prestamo extends Model {
    @ForeignKey(() => Lector)
    @Column
    lectorId: number;

    @ForeignKey(() => Libro)
    @Column
    libroId: number;

    @BelongsTo(() => Lector, { as: "lector", foreignKey: "lectorId" })
    lector: Lector;

    @BelongsTo(() => Libro, { as: "libro", foreignKey: "libroId" })
    libro: Libro;
}
