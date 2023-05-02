import { DoctorInfo } from "../../../entities/doctor-info.entity";
import { DoctorInfoMapper } from "../../../mapper/doctor-info.map";
import { IDoctorInfoRepository } from "../../doctor-info.repository";



export class DoctorInfoPrismaRepository implements IDoctorInfoRepository{
  
   async save(data: DoctorInfo): Promise<DoctorInfo> {
        throw new Error("Method not implemented.");

        // const doctor = await prismaClient.doctorInfo.create({
        //     data: {
        //         duration: data.duration,
        //         end_at: data.endAt,
        //         price: data.price,
        //         start_at: data.startAt,
        //         doctor_id: data.doctorId,
        //         id: data.id
        //     }
        
        // })

        // return DoctorInfoMapper.prismaToEntityDoctorInfo(doctor)
    }
    
}