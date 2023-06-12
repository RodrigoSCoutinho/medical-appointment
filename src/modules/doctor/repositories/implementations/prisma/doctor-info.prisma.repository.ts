import { DoctorInfo } from "../../../entities/doctor-info.entity";
import { DoctorInfoMapper } from "../../../mapper/doctor-info.map";
import { IDoctorInfoRepository } from "../../doctor-info.repository";

//! This is a update if does not exist the doctorId

export class DoctorInfoPrismaRepository implements IDoctorInfoRepository{
  
   async saveOrUpdate(data: DoctorInfo): Promise<DoctorInfo> {
        throw new Error("Method not implemented.");

        // const doctor = await prismaClient.doctorInfo.upsert({
        //  where: { doctor_id: data.doctorId},
        //     data: {
        //         duration: data.duration,
        //         end_at: data.endAt,
        //         price: data.price,
        //         start_at: data.startAt,
        //         doctor_id: data.doctorId,
        //         id: data.id
        //     },
        //    update:{
        //        duration: data.duration,
        //         end_at: data.endAt,
        //         price: data.price,
        //         start_at: data.startAt,
        //    }
        // })

        // return DoctorInfoMapper.prismaToEntityDoctorInfo(doctor)
    }
}