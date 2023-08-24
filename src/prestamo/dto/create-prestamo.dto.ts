import { IsNumber, IsString } from "class-validator";

export class CreatePrestamoDto {
    @IsNumber()
    lectorId: number;
  
    @IsNumber()
    libroId: number;
  
}
