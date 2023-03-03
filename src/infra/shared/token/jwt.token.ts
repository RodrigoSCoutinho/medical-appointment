import { sign, verify } from "jsonwebtoken"
import { createHmac } from "crypto"

import { User } from "../../../modules/users/entities/user.entity";
import { IToken } from "./token";

export class JWTToken implements IToken {
    
    private TOKEN_SECRET = process.env.SECRET_KEY_TOKEN_SECRET || ''
    
    private TOKEN_SECRET_CRYPTO = createHmac('sha256', this.TOKEN_SECRET).digest('base64')
    
    create({ username, _isAdmin, _id}: User): string {
        const token = sign(
            { 
                user: { 
                    username,
                    _isAdmin,
                    _id
                }
            }, this.TOKEN_SECRET_CRYPTO, {
                subject: _id,
                expiresIn: '10s',
            })
            
            return token
        }

        validate(token: string): boolean {
            try {
                verify(token, this.TOKEN_SECRET_CRYPTO)
                return true
            
            } catch (err) {
                return false
            }
        }
        
    }