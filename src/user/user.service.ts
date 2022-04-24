import { UserDTO } from './user.dto';
import { UserModel } from './user.model';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserModel) private userRepository: Repository<UserModel>) {}

    async create(user: UserDTO): Promise<UserModel> {
        return await this.userRepository.save(user)
    }

    async getAll(): Promise<UserModel[]> {
        return await this.userRepository.find()
    }

    async getById(id: number): Promise<UserModel> {
        return await this.userRepository.findOne(id)
    }

    async update(id: number, user: UserDTO): Promise<UserModel> {
        await this.userRepository.update(id, user)
        return this.userRepository.findOne(id)
    }

    delete(id: number): void {
        this.userRepository.delete(id)
    }
}
