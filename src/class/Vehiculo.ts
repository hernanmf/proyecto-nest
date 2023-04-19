class Auto {
  private patente: string;
  readonly marca: string;
  readonly modelo: string;
  private precio: number;
  private anio: number;
  readonly tipo: string;

  constructor(
    patente: string,
    marca: string,
    modelo: string,
    precio: number,
    anio: number,
    tipo: string,
  ) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;
    this.precio = precio;
    this.anio = anio;
  }
}
