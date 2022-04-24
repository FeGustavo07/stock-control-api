import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProductModule, 
    UserModule, 
    AuthModule,
    TypeOrmModule.forRoot()],
})
export class AppModule {}
