import { CustomError } from "../../../../errors/custom.error"
import { DoctorInfo } from "../../entities/doctor-info.entity"
import { IDoctorInfoRepository } from "../../repositories/doctor-info.repository"
import { IDoctorRepository } from "../../repositories/doctor.repository"

export type DoctorInfoRequest = {
    startAt: string
    endAt: string
    price: number
    duration: number
}

export class CreateDoctorInfoUseCase{
  constructor(private doctorRepository: IDoctorRepository,
              private doctorInfoRepository: IDoctorInfoRepository){}

  async execute(data: DoctorInfoRequest, userId: string){

    const doctorByUserId = await this.doctorRepository.findByUserId(userId);

    if(!doctorByUserId){
        throw new CustomError('Doctor does not exists!')
    }


    const doctorInfo = DoctorInfo.create({
      ...data,
      doctorId: doctorByUserId.id
    })

    const doctorCreated = await this.doctorInfoRepository.save(doctorInfo)

    return doctorCreated
  }
}