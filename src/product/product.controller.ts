import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { ProductModel } from '../product/product.model';
import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";

@Controller('/product')
export class ProductController {

    constructor(private service: ProductService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    public create(@Body() product: ProductModel) {
        return this.service.create(product)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    public getAll() {
        return this.service.getAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    public getById(@Param('id') id: number) {
        return this.service.getById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    public update(@Param('id') id: number, @Body() product: ProductModel) {
        return this.service.update(id, product)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public delete(@Param('id') id: number) {
        return this.service.delete(id)
    }
}