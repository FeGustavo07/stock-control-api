import { UserModule } from './modules/user.module';
import { ProductModule } from './modules/product.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ProductModule, UserModule],
})
export class AppModule {}
