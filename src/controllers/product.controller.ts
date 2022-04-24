import { ProductModel } from './../models/product.model';
import { ProductService } from './../services/product.service';
import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('/product')
export class ProductController {

    constructor(private service: ProductService) {}

    @Post()
    public create(@Body() product: ProductModel) {
        return this.service.create(product)
    }

    @Get()
    public getAll() {
        return {data: 'Get All'}
    }

    @Get(':id')
    public getById() {
        return {data: 'getById'}
    }

    @Put()
    public update() {
        return {data: 'Updated'}
    }

    @Delete()
    public delete() {
        return {data: 'Deleted'}
    }
}