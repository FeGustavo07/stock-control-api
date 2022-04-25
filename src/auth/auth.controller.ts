import { LocalAuthGuard } from './local-auth.guard';
import { Controller, Post, UseGuards, Request } from '@nestjs/common';

@Controller()
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: any) {
        return req.user
    }
}
