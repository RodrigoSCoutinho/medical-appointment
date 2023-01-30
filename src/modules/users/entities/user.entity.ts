import { randomUUID } from 'crypto'


type IUser = {
    name: string,
    password: string,
    username: string,
}

export class User {
    name: string
    password: string
    username: string
    _id: string
    _isAdmin: boolean

   private constructor(props: IUser){
      this.name = props.name;
      this.username = props.username;
      this.password = props.password;
      this._id = randomUUID();
      this._isAdmin = false;
    }

    static create(props: IUser){
        const user = new User(props)
        return user;
    }
}