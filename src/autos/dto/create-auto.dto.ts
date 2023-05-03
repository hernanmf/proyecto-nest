import { IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, isNumberString } from "class-validator";

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
  @IsNumberString()
  readonly anio: number;
  
  @IsString()
  @IsNotEmpty()
  readonly tipo: string;
  
  @IsNotEmpty()
  @IsNumberString()
  readonly precio: number;
  
  @IsOptional()
  @IsNumberString()
  readonly capacidadCarga?: number;

}