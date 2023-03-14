import { Speciality } from '../../entities/speciality.entity';
import { ISpecialityRepository } from './../speciality.repository';
export class SpecialityMemoryRepository implements ISpecialityRepository{
    save(data: Speciality): Promise<Speciality> {
        throw new Error('Method not implemented.');
    }
    findByName(name: string): Promise<Speciality | null> {
        throw new Error('Method not implemented.');
    }
    findById(_id: string): Promise<Speciality | null> {
        throw new Error('Method not implemented.');
    }

}