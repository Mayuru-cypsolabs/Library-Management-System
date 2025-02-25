import { Body, Controller, Post, UsePipes, ValidationPipe,Get,Param,HttpException } from "@nestjs/common";
import { UsersService  } from "./users.service";
import { CreateUserDto } from "./dto/CreateUserDto.dto";
import { Mongoose } from "mongoose";

@Controller('users')
export class UsersController {

 constructor(private usersService:UsersService){}

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body()createUserDto:CreateUserDto){
       console.log(createUserDto);
       return this.usersService.createUser(createUserDto);
    }

    @Get()  
    getUsers(){
      return this.usersService.getsUsers();  
    }

    //users/:id
    @Get(':id')
   async getUserById(@Param('id')id:string){
      
      const isValid=   Mongoose.prototype.ObjectId.isValid(id)
      if(!isValid) throw new HttpException('Invalid id',400);


        const findUser = await this.usersService.getUserById(id);
        if(!findUser) throw new HttpException('User not found',404);
        return findUser;
        }

}