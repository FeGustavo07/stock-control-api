import { UserModule } from './../user/user.module';
import { AuthService } from './auth.service';
import { Module } from "@nestjs/common";

@Module({
    imports: [UserModule],
    controllers: [],
    providers: [AuthService]
})
export class AuthModule {}