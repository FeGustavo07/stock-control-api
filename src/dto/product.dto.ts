import { IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class ProductDTO {

    @IsString()
    @MaxLength(200)
    @MinLength(2)
    name: string;

    @IsNumber()
    price: number;

    @IsNumber()
    @Min(1)
    amount: number;

}