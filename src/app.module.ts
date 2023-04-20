import { Module } from "@nestjs/common";
import { AutosModule } from './autos/autos.module';

@Module({
  imports: [AutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
