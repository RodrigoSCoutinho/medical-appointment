import { Speciality } from "../entities/speciality.entity";

export interface ISpecialityRepository {
    save(data: Speciality): Promise<Speciality>
    findByName(name: string): Promise<Speciality | null>
    findById(_id: string): Promise<Speciality | null>;
}