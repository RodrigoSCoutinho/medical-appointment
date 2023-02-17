import { Speciality } from "../../entities/speciality.entity";
import { ISpecialityRepository } from "../speciality.repository";

export class SpecialityRepository implements ISpecialityRepository {
    async save(data: Speciality): Promise<Speciality> {
        throw new Error("Method not implemented.");

        // const speciality = await prismaClient.speciality.create({
        //     data:{
        //         name: data.name,
        //         description: data.description,
        //         id: data.id
        //     }
        // })

        // return speciality;
    }
    
}