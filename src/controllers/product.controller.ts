import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('/product')
export class ProductController {

    @Post()
    public create() {
        return {data: 'Created'}
    }

    @Get()
    public getAll() {
        return {data: 'Get All'}
    }

    @Get()
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