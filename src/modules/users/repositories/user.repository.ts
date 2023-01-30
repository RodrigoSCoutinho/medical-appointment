import { User } from "../entities/user.entity"

export interface IUserRepository {
    findByUsername(username: string): Promise<User>
    save(data: User): Promise<void>
}