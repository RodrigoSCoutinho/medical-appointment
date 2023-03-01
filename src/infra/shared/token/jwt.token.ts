import { sign } from "jsonwebtoken"
import { createHmac } from "crypto"

import { User } from "../../../modules/users/entities/user.entity";
import { IToken } from "./token";

export class JWTToken implements IToken {

    private TOKEN_SECRET = process.env.SECRET_KEY_TOKEN_SECRET || ''

    private TOKEN_SECRET_CRYPTO = createHmac('sha256', this.TOKEN_SECRET).digest('base64')

    create(user: User): string {
     const token = sign({ user }, this.TOKEN_SECRET_CRYPTO, {
        subject: user._id,
        expiresIn: '1m',
     })

     return token
    }
    
}