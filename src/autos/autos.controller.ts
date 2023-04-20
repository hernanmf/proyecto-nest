import { Controller, Get } from "@nestjs/common";

@Controller("autos")
export class AutosController {
  @Get()
  getAutos() {
    return ["Volkswagen", "Fiat", "Peugeot"];
  }
}
