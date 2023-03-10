import { User } from "../../../users/entities/user.entity"
import { IUserRepository } from "../../../users/repositories/user.repository"
import { Doctor } from "../../entities/doctor.entity"

export type CreateDoctorRequest = {
    username: string,
    name: string,
    password: string,
    email: string,
    crm: string,
    specialityId: string,

}

export class CreateDoctorUseCase {

    constructor(private uerRepository: IUserRepository, private doctorRepository: IDoctorRepository){}

    async execute(data: CreateDoctorRequest){

        const user = User.create({
           name: data.name,
           password: data.password,
           username: data.username
        })

        const userCreated = await this.uerRepository.save(user)

        const doctor = Doctor.create({
            crm: data.crm,
            email: data.email,
            specialityId: data.specialityId,
            userId: '',
        })
    }
}