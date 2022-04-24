import { UserModule } from './modules/user.module';
import { ProductModule } from './modules/product.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductModule, UserModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
