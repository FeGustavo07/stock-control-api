import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserModule } from './../user/user.module';
import { AuthService } from './auth.service';
import { Module } from "@nestjs/common";

@Module({
    imports: [UserModule],
    controllers: [AuthController, ],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule {}