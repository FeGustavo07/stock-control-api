import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
export class UserDTO {

    @IsString()
    position: string;

    @IsString()
    @MaxLength(120)
    @MinLength(2)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(30)
    password: string
}