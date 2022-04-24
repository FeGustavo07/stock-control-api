import { UserModel } from './user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { Module } from "@nestjs/common";
import { UserService } from 'src/user/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserModel])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}