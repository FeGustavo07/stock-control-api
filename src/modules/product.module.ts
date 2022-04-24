import { ProductService } from './../services/product.service';
import { ProductModel } from './../models/product.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './../controllers/product.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([ProductModel])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}