import { Request, Response } from "express";
import { IPasswordCrypto } from './../../../../infra/shared/crypto/password.crypto';
import { IUserRepository } from '../../repositories/user.repository';
import { AuthenticateUserUseCase } from "./authenticate-user.usecase";

export class AuthenticateUserController {
   constructor(
      private userRepository: IUserRepository,
      private passwordCrypt: IPasswordCrypto
   ){}

   async handle(request: Request, response: Response) {
     try {
       const data = request.body;

       const authenticateUserUseCase = new AuthenticateUserUseCase(this.userRepository, this.passwordCrypt);

       const result = await authenticateUserUseCase.execute(data)

       return response.json(result)

     } catch (err: any) {
        return response.status(err.statusCode).json({ 
            error: err.message,
        })
     }
   }
}