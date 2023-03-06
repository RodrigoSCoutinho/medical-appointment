import { User } from "../../entities/user.entity";
import { IUserRepository } from "../user.repository";

export class UserPrismaRepository implements IUserRepository {
    findByUsername(username: string): Promise<User | undefined>{
        throw new Error("Method not implemented.");
        
        // const user = await prismaClient.user.findUnique({ 
            //     where: { 
                //         username,
                //     },
                //  });
            }
        //    return user || undefined;
        save(data: User): Promise<User> {
            throw new Error("Method not implemented.");
            
            //    const user = await prismaClient.user.create({
                //       data: {
                    //         name: data.name,        
                    //         password: data.password
                    //         username: data.username
                    //       },
                    //    })
                    
        //    return user;
    }

    async findById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");

         // return await prismaClient.user.findUnique({ 
            //     where: { 
                //         id,
                //     },
                //  });
    }
    
}