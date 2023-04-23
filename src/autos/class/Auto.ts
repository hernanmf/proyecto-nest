export class Auto {
  private patente: string;
  readonly marca: string;
  readonly modelo: string;
  readonly version: string;
  private anio: number;
  readonly tipo: string;
  private precio: number;
  private capacidadCarga?: number;

  constructor(
    patente: string,
    marca: string,
    modelo: string,
    version: string,
    anio: number,
    tipo: string,
    precio: number,
    capacidadCarga?: number
  ) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.version = version;
    this.anio = anio;
    this.tipo = tipo;
    this.precio = precio;
    this.capacidadCarga = capacidadCarga;
  }
}