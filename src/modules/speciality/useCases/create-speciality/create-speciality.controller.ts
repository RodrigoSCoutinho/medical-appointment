import { Request, Response } from "express";
import { ISpecialityRepository } from "../../repositories/speciality.repository";
import { CreateSpecialityUseCase } from "./create-speciality.usecase";


export class CreateSpecialityController {
    constructor(private specialityRepository: ISpecialityRepository){}

    async handle(request: Request, response: Response){
      const useCase = new CreateSpecialityUseCase(this.specialityRepository)
    }
}