import { describe, expect, test } from "vitest";
import dayjs from "dayjs"
import { CreateDoctorInfoUseCase, DoctorInfoRequest } from "../create-doctor-info.usecase";
import { DoctorMemoryRepository } from "../../../repositories/implementations/doctor-memory.repository";

describe('Create doctor info',() => {
    test('Should not able to create a doctor info if doctor does not exists!', () => {
      const doctorRepository = new DoctorMemoryRepository()
      
      const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(doctorRepository);
      

      const doctorInfo: DoctorInfoRequest = {
        startAt: dayjs().startOf('day').add(10, 'hour').format('HH:mm'),
        endAt: dayjs().startOf('day').add(10, 'hour').format('HH:mm'),
        price: 150,
        duration: 10
      }
      
      expect(async () => {
        await createDoctorInfoUseCase.execute(doctorInfo, 'INVALID_USER_ID')
       }).rejects.toThrow('Doctor does not exists!')
    });
})