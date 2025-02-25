import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    password: string; 
}