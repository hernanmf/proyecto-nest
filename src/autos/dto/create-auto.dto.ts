import { IsNotEmpty } from "class-validator";

export class Auto{
  @IsNotEmpty()
  private patente: string;
  readonly marca: string;
  readonly modelo: string;
  readonly version: string;
  private anio: number;
  readonly tipo: string;
  private precio: number;
  private capacidadCarga?: number;
}