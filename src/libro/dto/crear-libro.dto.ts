import { IsBoolean, IsString } from 'class-validator';

export class CreateLibroDTO {
  @IsString()
  nombre: string;

  @IsString()
  isbn: string;

  @IsBoolean()
  estado: string;


}