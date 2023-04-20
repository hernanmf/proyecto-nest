import { Module } from '@nestjs/common';
import { AutosController } from './autos.controller';

@Module({
  controllers: [AutosController]
})
export class AutosModule {}
