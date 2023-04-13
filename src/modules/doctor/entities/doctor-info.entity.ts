import { randomUUID } from 'crypto';
import { CustomError } from '../../../errors/custom.error';

export type DoctorInfoProps = {
    duration: number;
    price: number;
    startAt: string
    endAt: string;
    doctorId: string;
}


export class DoctorInfo {
    id: string;
    duration: number;
    price: number;
    startAt: string
    endAt: string;
    doctorId: string;
   

    private constructor(props: DoctorInfoProps) {

        if(!props.doctorId){
            throw new CustomError('Doctor does not exists!');
        }

        if(props.duration <= 0){
            throw new CustomError('Invalid duration!');
        }

        this.id = randomUUID();
        this.duration = props.duration;
        this.price = props.price;
        this.startAt = props.startAt;
        this.endAt = props.endAt;
        this.doctorId = props.doctorId;
    }

    static create(props: DoctorInfoProps){
        const doctorInfo = new DoctorInfo(props);
        return doctorInfo;
    }
}