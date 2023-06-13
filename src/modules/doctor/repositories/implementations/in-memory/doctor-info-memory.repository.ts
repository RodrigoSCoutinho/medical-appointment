import { DoctorInfo } from "../../../entities/doctor-info.entity";
import { IDoctorInfoRepository } from "../../doctor-info.repository";

export class DoctorInfoMemoryRepository implements IDoctorInfoRepository{
    items: DoctorInfo[] = [];;
   
    async saveOrUpdate(data: DoctorInfo): Promise<DoctorInfo> {
        //? verify what's index and go through the doctor
        const index = this.items.findIndex(doctor => doctor.id === data.doctorId);
        if(index >= 0){
            const doctor = this.items[index];
               this.items[index] = {
               ...doctor,
               duration: data.duration,
               price: data.price,
               startAt: data.startAt,
               endAt: data.endAt,
          }
          data = this.items[index];
        } else {
            this.items.push(data)
        }
        this.items.push(data)
        return data
      
    }

}