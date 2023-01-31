import { UserPrismaRepository } from "../../users/repositories/implementations/user.prisma.repository";
import { CreateUserController } from "./create-user.controller";

const userPrismaRepository = new UserPrismaRepository();
const createUserController = new CreateUserController(userPrismaRepository);

export { createUserController }