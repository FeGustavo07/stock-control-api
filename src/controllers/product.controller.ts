import { ProductModel } from './../models/product.model';
import { ProductService } from './../services/product.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('/product')
export class ProductController {

    constructor(private service: ProductService) {}

    @Post()
    public create(@Body() product: ProductModel) {
        return this.service.create(product)
    }

    @Get()
    public getAll() {
        return this.service.getAll()
    }

    @Get(':id')
    public getById(@Param('id') id: number) {
        return this.service.getById(id)
    }

    @Put(':id')
    public update(@Param('id') id: number, @Body() product: ProductModel) {
        return this.service.update(id, product)
    }

    @Delete(':id')
    public delete(@Param('id') id: number) {
        return this.service.delete(id)
    }
}