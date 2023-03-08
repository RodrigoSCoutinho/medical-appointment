import { test, expect, describe} from "vitest"
import { Doctor } from "../doctor.entity"


describe("Doctor entity", () => {
    
    test("Should be able to create a new doctor", () => {
        const doctor = Doctor.create({
          crm: '123456',
          email: 'test@example.com',
          specialityId: 'SPEC_ID',
          userId: 'USER_ID',
        })
        console.log({ doctor })
        expect(doctor).toBeInstanceOf(Doctor)
        expect(doctor).toHaveProperty('id')
    })
    
    test("Should be able to create a new doctor with CRM invalid", () => {
        expect(() => {
            Doctor.create({
              crm: '',
              email: 'test@example.com',
              specialityId: 'SPEC_ID',
              userId: 'USER_ID',
            })
        }).toThrow('CRM is required!');
    })
    
    test("Should be able to create a new doctor with CRM invalid", () => {
        expect(() => {
            Doctor.create({
              crm: '12345',
              email: 'test@example.com',
              specialityId: 'SPEC_ID',
              userId: 'USER_ID',
            })
        }).toThrow('CRM length is incorrect!');
    })
    
    
    test("Should be able to create a new doctor with CRM invalid", () => {
        expect(() => {
            Doctor.create({
              crm: '123456',
              email: '',
              specialityId: 'SPEC_ID',
              userId: 'USER_ID',
            })
        }).toThrow('Email is required!');
    })

})
