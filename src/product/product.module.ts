import { ProductService } from './product.service';
import { ProductModel } from './product.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([ProductModel])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}