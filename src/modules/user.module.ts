import { UserController } from './../controllers/user.controller';
import { Module } from "@nestjs/common";

@Module({
    controllers: [UserController],
})
export class UserModule {}