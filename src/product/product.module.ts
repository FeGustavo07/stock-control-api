import { AuthModule } from './../auth/auth.module';
import { UserModule } from './../user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthService } from './../auth/auth.service';
import { ProductService } from './product.service';
import { ProductModel } from './product.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([ProductModel]), UserModule, AuthModule],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}