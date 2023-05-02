import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateAutoDto{
  
  @IsString()
  @IsNotEmpty()
  readonly patente: string;
  
  @IsString()
  @IsNotEmpty()
  readonly marca: string;
  
  @IsString()
  @IsNotEmpty()
  readonly modelo: string;
  
  @IsString()
  @IsNotEmpty()
  readonly version: string;
  
  @IsNotEmpty()
  @IsNumber()
  readonly anio: number;
  
  @IsString()
  @IsNotEmpty()
  readonly tipo: string;
  
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly precio: number;
  
  @IsNumber()
  readonly capacidadCarga?: number;

}