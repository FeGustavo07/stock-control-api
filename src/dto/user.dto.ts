import { IsString, MaxLength, MinLength } from 'class-validator';
import { Positions } from 'src/enums/positions.enum';
export class UserDTO {

    @IsString()
    position: Positions;

    @IsString()
    @MaxLength(120)
    @MinLength(2)
    name: string;

    @IsString()
    @MinLength(6)
    @MaxLength(80)
    password: string
}