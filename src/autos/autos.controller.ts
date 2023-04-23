import { Controller, Get } from "@nestjs/common";
import { Auto } from "./class/Auto.js";

@Controller("autos")
export class AutosController {
  @Get()
  getAutos() {
    return ["Volkswagen", "Fiat", "Peugeot"];
  }

}
