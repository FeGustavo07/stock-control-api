import { AuthService } from './../auth/auth.service';
import { LocalStrategy } from './../auth/local.strategy';
import { ProductDTO } from '../product/product.dto';
import { ProductModel } from '../product/product.model';
import { HttpCode, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductModel) private productRepository: Repository<ProductModel>,
    ) {}

    async create(product: ProductDTO): Promise<ProductModel> {
        return await this.productRepository.save(product)
    }

    async getAll(): Promise<ProductModel[]> {
        return await this.productRepository.find()
    }

    async getById(id: number): Promise<ProductModel> {
        const product = await this.productRepository.findOne(id)
        
        if(!product) {
            throw new NotFoundException(`Id ${id} doesn't exists`)
        }

        return product
    }

    async update(id: number, product: ProductDTO): Promise<ProductModel> {
        const productFound = await this.productRepository.findOne(id)
        
        if(!productFound) {
            throw new NotFoundException(`Id ${id} doesn't exists`)
        }

        await this.productRepository.update(id, product)
        return await this.productRepository.findOne(id)
    }

    async delete(id: number): Promise<void> {
        const product = await this.productRepository.findOne(id)

        if(!product) {
            throw new NotFoundException(`Id ${id} doesn't exists`)
        }

        this.productRepository.delete(id)
    }

}