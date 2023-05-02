import { describe, expect, test, beforeAll } from "vitest";
import { UserMemoryRepository } from '../../../../users/repositories/implementations/user.memory.repository';
import { DoctorMemoryRepository } from '../../../repositories/implementations/in-memory/doctor-memory.repository';
import { CreateDoctorRequest, CreateDoctorUseCase } from '../create-doctor.usecase';
import { SpecialityMemoryRepository } from './../../../../speciality/repositories/implementations/speciality.memory.repository';
import { Speciality } from '../../../../speciality/entities/speciality.entity';
import { ISpecialityRepository } from '../../../../speciality/repositories/speciality.repository';

let specialityRepository: ISpecialityRepository;
let speciality: Speciality;

beforeAll(async () => {
  specialityRepository = new SpecialityMemoryRepository();
 
  speciality = Speciality.create({
    description: 'DESC_TEST',
    name:'NAME_TEST'
  });

  await specialityRepository.save(speciality)
})

describe("Create Doctor UseCase", () => {
    test('Should be able to create a new Doctor', async () => {
     
      const userRepository = new UserMemoryRepository();
      const doctorRepository = new DoctorMemoryRepository();
    
      const doctorMock: CreateDoctorRequest = {
        username: 'username_test',
        name: 'name_test',
        password: 'password_test',
        email: 'email@gmail.com',
        crm: '123456',
        specialityId: speciality.id
      }

      console.log({ doctorMock})

      const createDoctorUseCase = new CreateDoctorUseCase(
        userRepository, 
        doctorRepository,
        specialityRepository
        );

      const doctorCreated = await createDoctorUseCase.execute(doctorMock);

      expect(doctorCreated).toHaveProperty("id")
    })

    test('Should not be able to create a new Doctor with exists CRM', async () => {
      const userRepository = new UserMemoryRepository();
      const doctorRepository = new DoctorMemoryRepository();
    
      const doctorMock: CreateDoctorRequest = {
        username: 'username_test',
        name: 'name_test',
        password: 'password_test',
        email: 'email@gmail.com',
        crm: '123456',
        specialityId: speciality.id
      }
      const doctorMockDuplicated: CreateDoctorRequest = {
        username: 'username_duplicated',
        name: 'name_duplicated',
        password: 'password_duplicated',
        email: 'email@duplicatedgmail.com',
        crm: '123456',
        specialityId: speciality.id
      }


      const createDoctorUseCase = new CreateDoctorUseCase(
        userRepository, 
        doctorRepository,
        specialityRepository
        );

     await createDoctorUseCase.execute(doctorMock);

     expect( async ()=> {
         await createDoctorUseCase.execute(doctorMockDuplicated);
      }).rejects.toThrow('CRM already exists')
    })

    
    test('Should not be able to create a new Doctor with exists CRM length invalid', async () => {
      const doctorMock: CreateDoctorRequest = {
        username: 'username_test',
        name: 'name_test',
        password: 'password_test',
        email: 'email@gmail.com',
        crm: '12345',
        specialityId: speciality.id,
      }

      const userRepository = new UserMemoryRepository();
      const doctorRepository = new DoctorMemoryRepository();

      const createDoctorUseCase = new CreateDoctorUseCase(
        userRepository, 
        doctorRepository,
        specialityRepository
        );

      expect(async () => {
        await createDoctorUseCase.execute(doctorMock);
      }).rejects.toThrow('CRM length is incorrect!');
   })
})