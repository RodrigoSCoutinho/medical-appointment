import { describe, expect, test } from "vitest";
import dayjs from "dayjs"

describe('Create doctor info',() => {
    test('Should not able to create a doctor info if doctor does not exists!', () => {
      const createDoctorInfoUseCase = new CreateDoctorInfoUseCase();
      
      expect(async () => {
        await createDoctorInfoUseCase.execute({
            startAt: dayjs().startOf('day').add(10, 'hour').format('HH:mm'),
            endAt: '',
            price: 150,
            duration: 10
          })
       }).rejects.toThrow('Doctor does not exists!')
    });
})