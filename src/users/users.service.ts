import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/schemas/User.schema";
 
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/CreateUserDto.dto";


@Injectable()
export class UsersService {

    constructor
       ( @InjectModel(User.name) private UserModule:Model<User>){}


       createUser(createUserDato:CreateUserDto){

        const newUser = new this.UserModule(createUserDato);
        return newUser.save();

       }


       getsUsers(){
        return this.UserModule.find();
       }

       getUserById(id:string){
        return this.UserModule.findById(id);
       }

    
}