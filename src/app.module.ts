import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductModule, UserModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
