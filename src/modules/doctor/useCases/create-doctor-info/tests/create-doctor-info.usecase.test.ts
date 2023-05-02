import { randomUUID } from 'crypto';
import { describe, expect, test } from "vitest";
import dayjs from "dayjs"
import { CreateDoctorInfoUseCase, DoctorInfoRequest } from "../create-doctor-info.usecase";
import { DoctorMemoryRepository } from "../../../repositories/implementations/in-memory/doctor-memory.repository";
import { DoctorInfoMemoryRepository } from '../../../repositories/implementations/in-memory/doctor-info-memory.repository';

describe('Create doctor info',() => {
    test('Should not able to create a doctor info if doctor does not exists!', () => {
      const doctorRepository = new DoctorMemoryRepository()
      const doctorInfoRepository = new DoctorInfoMemoryRepository()
      const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(
        doctorRepository, 
        doctorInfoRepository);
      

      const doctorInfo: DoctorInfoRequest = {
        startAt: dayjs().startOf('day').add(10, 'hour').format('HH:mm'),
        endAt: dayjs().startOf('day').add(18, 'hour').format('HH:mm'),
        price: 150,
        duration: 10
      }
      
      expect(async () => {
        await createDoctorInfoUseCase.execute(doctorInfo, 'INVALID_USER_ID')
       }).rejects.toThrow('Doctor does not exists!')
    });

    test('Should not able to create a doctor info if endAt is before startAt', async () => {
      const doctorRepository = new DoctorMemoryRepository()
      const doctorInfoRepository = new DoctorInfoMemoryRepository()
      const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(
        doctorRepository, 
        doctorInfoRepository);
      
      const userId = randomUUID()

      await doctorRepository.save({
          crm: '123456',
          email: 'doctor@test.com.br',
          id: randomUUID(),
          specialityId: randomUUID(),
          userId
      })

      const doctorInfo: DoctorInfoRequest = {
        startAt: dayjs().startOf('day').add(18, 'hour').format('HH:mm'),
        endAt: dayjs().startOf('day').add(10, 'hour').format('HH:mm'),
        price: 150,
        duration: 10
      }
      
      expect(async () => {
        await createDoctorInfoUseCase.execute(doctorInfo, userId)
       }).rejects.toThrow('End time cannot be earlier than start time!')
    });

    test('Should not able to create a doctor info if endAt is invalid', async () => {
      const doctorRepository = new DoctorMemoryRepository()
      const doctorInfoRepository = new DoctorInfoMemoryRepository()
      const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(
        doctorRepository, 
        doctorInfoRepository);
      
      const userId = randomUUID()

      await doctorRepository.save({
          crm: '123456',
          email: 'doctor@test.com.br',
          id: randomUUID(),
          specialityId: randomUUID(),
          userId
      })

      const doctorInfo: DoctorInfoRequest = {
        endAt: '99:99',
        startAt: dayjs().startOf('day').add(18, 'hour').format('HH:mm'),
        price: 150,
        duration: 10
      }
      
      expect(async () => {
        await createDoctorInfoUseCase.execute(doctorInfo, userId)
       }).rejects.toThrow('Invalid EndAt!')
    });

    test('Should not able to create a doctor info if startAt is invalid', async () => {
      const doctorRepository = new DoctorMemoryRepository()
      const doctorInfoRepository = new DoctorInfoMemoryRepository()
      const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(
        doctorRepository, 
        doctorInfoRepository);
      
      const userId = randomUUID()

      await doctorRepository.save({
          crm: '123456',
          email: 'doctor@test.com.br',
          id: randomUUID(),
          specialityId: randomUUID(),
          userId
      })

      const doctorInfo: DoctorInfoRequest = {
        endAt: '18:00',
        startAt: '99:99',
        price: 150,
        duration: 10
      }
      
      expect(async () => {
        await createDoctorInfoUseCase.execute(doctorInfo, userId)
       }).rejects.toThrow('Invalid StartAt!')
    });

    test('Shoud be able to create a new doctor info request', async () => {
      const doctorRepository = new DoctorMemoryRepository()
      const doctorInfoRepository = new DoctorInfoMemoryRepository()
      const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(
        doctorRepository, 
        doctorInfoRepository);
      
      const userId = randomUUID()

      await doctorRepository.save({
          crm: '123456',
          email: 'doctor@test.com.br',
          id: randomUUID(),
          specialityId: randomUUID(),
          userId
      })

      const doctorInfo: DoctorInfoRequest = {
        endAt: '18:00',
        startAt: '10:00',
        price: 150,
        duration: 10
      }

     const doctorCreated = await createDoctorInfoUseCase.execute(doctorInfo, userId)

      expect(doctorCreated).toHaveProperty('id')
    })
})