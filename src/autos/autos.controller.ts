import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { AutosService } from "./autos.service.js";
import { CreateAutoDto } from "./dto/create-auto.dto.js";

@Controller( "autos" )
@UsePipes( ValidationPipe )
export class AutosController {

  constructor( private readonly autosService:AutosService ) {
  }//constructor del servicio para poder utilizarlo

  @Get()
  getAutos() {
    console.log(this.autosService);
    return this.autosService.getAutos();
  }

  @Get( ':id' )
  getAutoPorId( @Param( 'id', ParseUUIDPipe ) id: string ) {
    console.log({ id });
    return this.autosService.getAutoById( id );
  }

  @Post()
  postAuto( @Body() createAutoDto:CreateAutoDto ) {

    return this.autosService.postAuto(createAutoDto);

    /*     console.log(`Vino esto : ${createAutoDto}`);
    this.autosService.postAuto(createAutoDto);
    console.log(`Resultado: ${this.autosService}`); */
  }

  @Put( ':id' )
  putAuto(
    @Param( 'id' , ParseUUIDPipe) id: string,
    @Body() body:any
  ) {
    console.log(body);
    return body;
  }

  @Delete( ':id' )
  deleteAuto( @Param( 'id' , ParseUUIDPipe ) id: string ) {
    console.log(`delete ${id}`);
    return {
      method: 'delete',
      id
    };
  }

}
