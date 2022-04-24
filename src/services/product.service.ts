import { ProductModel } from './../models/product.model';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(ProductModel) private productRepository: Repository<ProductModel>) {}

    async create(product: ProductModel): Promise<ProductModel> {
        return await this.productRepository.save(product)
    }

    async getAll(): Promise<ProductModel[]> {
        return await this.productRepository.find()
    }

    async getById(id: number): Promise<ProductModel> {
        return await this.productRepository.findOne(id)
    }

    async update(id: number, product: ProductModel) {
        return await this.productRepository.update(id, product)
    }

    delete(id: number): void {
        this.productRepository.delete(id)
    }

}