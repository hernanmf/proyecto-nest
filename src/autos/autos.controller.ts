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
  }

  @Put( ':id' )
  putAuto(
    @Param( 'id' , ParseUUIDPipe) id: string,
    @Body() createAutoDto: CreateAutoDto
  ) {
    return this.autosService.putAuto(id, createAutoDto);
  }

  @Delete( ':id' )
  deleteAuto( @Param( 'id' , ParseUUIDPipe ) id: string ) {
    
    this.autosService.deleteAuto(id);
    console.log(`delete ${id}`);
    return {
      method: 'delete',
      id
    };
  }

}
