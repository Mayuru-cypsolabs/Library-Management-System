import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/schemas/User.schema";
import { UserModule } from "./users.module";
import { Model } from "mongoose";


@Injectable()
export class UsersService {

    constructor
       ( @InjectModel(User.name) private UserModule:Model<User>){}
    
}