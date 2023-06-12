import { Router } from "express";
import { doctorRouter } from "./doctor.routes";
import { specialityRouter } from "./speciality.routes";
import { userRouter } from "./user.routes";
import { doctorInfoRouter } from "./doctor-info.routes";

const router = Router();

router.use(userRouter)
router.use(specialityRouter)
router.use(doctorRouter);
router.use(doctorInfoRouter);

export {router}