import { Speciality } from "../../entities/speciality.entity";
import { ISpecialityRepository } from "../speciality.repository";

export class SpecialityPrismaRepository implements ISpecialityRepository {
    async save(data: Speciality): Promise<Speciality> {
        throw new Error("Method not implemented.");
        
        // const speciality = await prismaClient.speciality.create({
            //     data:{
                //         name: data.name,
                //         description: data.description,
                //         id: data._id
                //     }
                // })
                
                // return speciality;
            }
            
            async findByName(name: string): Promise<Speciality | null> {
                throw new Error("Method not implemented.");
                
                // return await prismaClient.speciality.findUnique({
                    //     where: {
                        //        name,
                //     },
                // })
            }

            async findById(_id: string): Promise<Speciality | null> {
                throw new Error("Method not implemented.");

                // return await prismaClient.speciality.findUnique({
                    //     where: {
                        //        _id,
                //     },
                // })
            }
        }