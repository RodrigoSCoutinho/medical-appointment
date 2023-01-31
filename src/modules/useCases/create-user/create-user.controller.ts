import { Request, Response} from 'express'
import { IUserRepository } from '../../users/repositories/user.repository';
import { CreateUserUseCase } from './create-user.usecase'

export class CreateUserController {
    constructor(private userRepository: IUserRepository){};

    async handle(request: Request, response: Response){
      try {
        const data = request.body

        const userCase = new CreateUserUseCase(this.userRepository);
        const result = await userCase.execute(data);

        return response.json(result)
        
      } catch (err: any) {
        return response.status(err.statusCode).json(err.message)
      }
    }
}