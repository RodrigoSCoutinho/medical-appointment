import { Speciality } from "../../entities/speciality.entity";
import { ISpecialityRepository } from "../speciality.repository";

export class SpecialityRepository implements ISpecialityRepository {
    save(data: Speciality): Promise<Speciality> {
        throw new Error("Method not implemented.");
    }
    
}