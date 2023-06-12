// import { prisma } from '@prisma/client';
// import { prismaClient } from '../../../../../infra/databases/prisma.config'
// import { Doctor } from "../../../../entities/doctor.entity";
import { Doctor } from "../../../entities/doctor.entity";
import { DoctorMapper } from "../../../mapper/create-doctor.map";
import { IDoctorRepository } from "../../doctor.repository";
// import { Doctor } from '../../../entities/doctor.entity';

export class DoctorPrismaRepository implements IDoctorRepository{
    findById(id: string): Promise<Doctor | null> {
        throw new Error('Method not implemented.');

         // const doctor = await primaClient.doctor.findUnique({
        //     where: {
        //         id,
        //     },
        // })
        // if(doctor) return doctorMapper.prismaToEntityDoctor(doctor);
        // return null
    }
    findByUserId(userId: string): Promise<Doctor | null> {
        throw new Error('Method not implemented.');

         // const doctor = await primaClient.doctor.findUnique({
        //     where: {
        //         user_id: userID
        //     },
        // })
        // if(doctor) return doctorMapper.prismaToEntityDoctor(doctor);
        // return null
    }
    async save(data: Doctor): Promise<Doctor> {
        throw new Error("Method not implemented.");

        // const doctor = await prismaClient.doctor.findUnique({
        //   data: {
        //     crm: data.crm,
        //     email: data.email,
        //     speciality_id: data.specialityId,
        //     user_id: data.userId
        //   },
        // })
        // if(doctor) return prismaToEntityDoctor.createDoctorMapper(doctor);
        // return null
    }

    async findByCRM(crm: string): Promise<Doctor | null> {
        throw new Error("Method not implemented.");

        // const doctor = await primaClient.doctor.findUnique({
        //     where: {
        //         crm,
        //     },
        // })
        // if(doctor) return doctorMapper.prismaToEntityDoctor(doctor);
        // return null
    }

}