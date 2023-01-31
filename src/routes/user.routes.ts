import { Router } from 'express'
import { createUserController } from '../modules/useCases/create-user';

const userRouter = Router();

userRouter.post("/users", createUserController.handle)

export { userRouter }