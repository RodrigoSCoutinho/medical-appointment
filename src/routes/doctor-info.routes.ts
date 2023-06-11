import { Router } from "express";
import { createDoctorInfoController } from "../modules/doctor/useCases/create-doctor-info";

const doctorInfoRouter = Router();

doctorInfoRouter.post('/doctor-info', async (request, response) => {
   await createDoctorInfoController.handle(request, response);
})

export {doctorInfoRouter}