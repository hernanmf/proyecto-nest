import { Module } from "@nestjs/common";
import { AutosModule } from "./autos/autos.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';

@Module({
  imports: [AutosModule,ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') })],
  controllers: [],
  providers: [],
})
export class AppModule {}
