import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateAutoDto } from './dto/create-auto.dto';
import { Auto } from './interfaces/auto.interface';

@Injectable()
export class AutosService {

  private autos: Auto[] = [
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
    capacidadCarga: 0
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
    capacidadCarga: 0
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
    capacidadCarga: 0
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
    capacidadCarga: 0
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
    capacidadCarga: 0
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

  public postAuto(createAutoDto: CreateAutoDto) {
    //Hago checkeo de si hay auto con esa patente aunq eso a futuro lo hara el motor de bbdd
    let mismaPatente = this.autos.find(e => e.patente === createAutoDto.patente);
    if (mismaPatente) {  throw new NotFoundException(`Ya existe un auto con la patente ${createAutoDto.patente}`);}
    
    //si la patente no existe, no va a la excepcion y hace el push
    const nuevoAuto: Auto = {
        id: uuid(),
        ...createAutoDto//luego del id le asigna todas las props q trae, las esparce
      }
    this.autos.push(nuevoAuto);// puede llevar await para esperar el push en la bbdd
    return nuevoAuto;    
  }

  public putAuto(id: string, createAutoDto: CreateAutoDto) {
    
    let autoGuardado = this.getAutoById(id);
    //como getAutoById tiene la excepcion, si no esta el id, corta.
    
    this.autos = this.autos.map(auto => {
      if (auto.id === id) {
        autoGuardado = { ...autoGuardado, ...createAutoDto }
      }
      return autoGuardado;
    });
    return autoGuardado;
  }

  public deleteAuto(id:string) {
    
    const autoABorrar = this.getAutoById(id);
    //como getAutoById tiene la excepcion, si no esta el id, corta.
    
    this.autos = this.autos.filter(auto => auto.id !== id);
    //al array original, le asigno el mismo array filtrando el del id.
  }

}
