import { UserService } from '../user/user.service';
import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthService {

    constructor(private userService: UserService) {}

    async validateUser(userEmail: string, userPassword: string) {
        const user = await this.userService.getByEmail(userEmail)

        if (user && user.password == userPassword) {
            const {id, name, email} = user
            return { result: id, name, email}
        }

        return null;
    }

}