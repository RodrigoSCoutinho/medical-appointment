
import { Doctor } from "../../entities/doctor.entity";
import { IDoctorRepository } from "../doctor.repository";

export class DoctorPrismaRepository implements IDoctorRepository{
    async save(data: Doctor): Promise<Doctor> {
        throw new Error("Method not implemented.");

        // const doctor = await prismaClient.doctor.create({
        //   data: {
        //     crm: data.crm,
        //     email: data.email,
        //     speciality_id: data.specialityId,
        //     user_id: data.userId
        //   },
        // })
        // return doctor 
    }

    findByCRM(crm: string): Promise<Doctor | null> {
        throw new Error("Method not implemented.");
    }

}