import { SpecialityPrismaRepository } from "../../../speciality/repositories/implementations/speciality.prisma.repository";
import { UserPrismaRepository } from "../../../users/repositories/implementations/user.prisma.repository";
import { DoctorPrismaRepository } from "../../repositories/implementations/prisma/doctor-prisma.repository";
import { CreateDoctorController } from "./create-doctor.controller";


const userRepository = new UserPrismaRepository()
const doctorRepository = new DoctorPrismaRepository();
const specilityRepository = new SpecialityPrismaRepository()

const createDoctorController = new CreateDoctorController(userRepository, doctorRepository, specilityRepository);


export {createDoctorController}