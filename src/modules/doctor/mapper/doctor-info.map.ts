import { DoctorInfo } from "../entities/doctor-info.entity";
import { DoctorInfo as DoctorInfoPrisma} from "@prisma/client"

export class DoctorInfoMapper {
    static prismaToEntityDoctorAInfo = (data: DoctorInfoPrisma): DoctorInfo => {
      return {
        ...data,
        doctor_id: data.doctorId,
        end_at: data.endAt,
        start_at: data.startAt,
        id: data.id,
        duration: data.duration,
        price: Number(data.price)
      }
    }
}