import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AutosService {

  private autos = [
  {
    id: uuid(),
    patente: "ABC123",
    marca: "Ford",
    modelo: "Fiesta",
    version: "SE",
    anio: 2022,
    tipo: "Sedan",
    precio: 25000,
    capacidadCarga: 500
  },
  { 
    id: uuid(),
    patente: "DEF456",
    marca: "Chevrolet",
    modelo: "Cruze",
    version: "LT",
    anio: 2023,
    tipo: "Sedan",
    precio: 28000,
    capacidadCarga: undefined
  },
  {
    id: uuid(),
    patente: "GHI789",
    marca: "Toyota",
    modelo: "Corolla",
    version: "XE",
    anio: 2022,
    tipo: "Sedan",
    precio: 30000,
    capacidadCarga: 450
  },
  {
    id: uuid(),
    patente: "JKL012",
    marca: "Nissan",
    modelo: "Versa",
    version: "SR",
    anio: 2022,
    tipo: "Sedan",
    precio: 24000,
    capacidadCarga: undefined
  },
  {
    id: uuid(),
    patente: "MNO345",
    marca: "Honda",
    modelo: "Civic",
    version: "EX",
    anio: 2023,
    tipo: "Sedan",
    precio: 32000,
    capacidadCarga: 600
  },
  {
    id: uuid(),
    patente: "PQR678",
    marca: "Ford",
    modelo: "Mustang",
    version: "GT",
    anio: 2022,
    tipo: "Deportivo",
    precio: 45000,
    capacidadCarga: undefined
  },
  {
    id: uuid(),
    patente: "STU901",
    marca: "Chevrolet",
    modelo: "Camaro",
    version: "SS",
    anio: 2023,
    tipo: "Deportivo",
    precio: 48000,
    capacidadCarga: undefined
  },
  {
    id: uuid(),
    patente: "VWX234",
    marca: "Dodge",
    modelo: "Challenger",
    version: "R/T",
    anio: 2022,
    tipo: "Deportivo",
    precio: 42000,
    capacidadCarga: undefined
  },
  {
    id: uuid(),
    patente: "YZA567",
    marca: "Jeep",
    modelo: "Wrangler",
    version: "Sport",
    anio: 2022,
    tipo: "Todo terreno",
    precio: 36000,
    capacidadCarga: 800
  },
  {
    id: uuid(),
    patente: "BCD890",
    marca: "Ram",
    modelo: "1500",
    version: "Laramie",
    anio: 2023,
    tipo: "Pickup",
    precio: 45000,
    capacidadCarga: 1000
  }
  ];
  
  public getAutos() {
    return this.autos;
  }
  
  public getAutoById(id: string) {
    let auto = this.autos.find(e => e.id === id);//Fernando recomienda hacerlo asi para validaciones y pipes
    if (!auto) { throw new NotFoundException(`No se encontro el auto con el id ${id}`)}
    return auto;
  }

}
