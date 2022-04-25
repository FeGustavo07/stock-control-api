import { jwtContants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserModule } from './../user/user.module';
import { AuthService } from './auth.service';
import { Module } from "@nestjs/common";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtContants.secret,
            signOptions: {expiresIn: '3600s'}
        })
    ],
    controllers: [AuthController, ],
    providers: [
        AuthService, 
        LocalStrategy,
        JwtStrategy
    ]
})
export class AuthModule {}