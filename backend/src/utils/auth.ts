import bcrypt from "bcrypt"
import jwt, { JwtPayload } from "jsonwebtoken"
import { Request } from "express"

import { SECRET_KEY,EXPIRES_IN, SALT_ROUNDS } from "../config"


export interface CustomRequest extends Request{
    token: string | JwtPayload
}
class AuthHandler{


    generateSalt = async () =>{
        return await bcrypt.genSalt(SALT_ROUNDS ? parseInt(SALT_ROUNDS) : 10)
    }

    generatePassword = async (password: string, salt: string) =>{
        return await bcrypt.hash(password, salt)
    }

    validatePassword = async (requestPassword: string, savedPassword: string, salt: string ) =>{
        return (await this.generatePassword(requestPassword,salt) === savedPassword)
    }

    generateToken = (payload: {}) =>{
            try{
                return jwt.sign(payload, SECRET_KEY ? SECRET_KEY : "secret", { "expiresIn": EXPIRES_IN })
            }catch(err){
                console.log("TOKIZER ERROR " + err)
            }
    }

    validateToken = async(req: Request)=>{
        try{
            const token = req.header("Authorization") ?.replace('Bearer', '')
        if(!token){
            throw new Error()
        }
         const decoded = jwt.verify(token,SECRET_KEY ? SECRET_KEY : "secret")
         return (req as CustomRequest).token = decoded;
        }catch(err){
            console.log("error decoding token "+ err)
        }
         
    }
}

export default new AuthHandler()