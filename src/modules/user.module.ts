import { UserModel } from './../models/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './../controllers/user.controller';
import { Module } from "@nestjs/common";
import { UserService } from 'src/services/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserModel])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}