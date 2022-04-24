import { ProductModule } from './models/product.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProductModule],
})
export class AppModule {}
