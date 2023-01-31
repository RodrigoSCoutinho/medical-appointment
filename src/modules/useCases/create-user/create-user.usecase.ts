import { ParameterRequiredError } from "../../../errors/parameter-required.error";
import { User } from "../../users/entities/user.entity";
import { IUserRepository } from "../../users/repositories/user.repository";


type UserRequest = {
    name: string,
    username: string,
    password: string,
}

export class CreateUserUseCase {
   
    constructor(private userRepository: IUserRepository){

    }
  
    async execute(data: UserRequest){
    
      const user = User.create(data)
    
      if (!data.username || !data.password) {
         throw new ParameterRequiredError('Username/password is required', 422);
      }

      const existUser = await this.userRepository.findByUsername(data.username);

      if (existUser) {
         throw new Error("Username already exists");
      }
      const userCreated = await this.userRepository.save(user)
      
      return userCreated;
    }
}