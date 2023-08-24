import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  nombre: string;

  @IsString()
  isbn: string;

  @IsBoolean()
  estado: string;


}