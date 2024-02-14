import { Request, Response, NextFunction } from "express"
import userService from "../service/user.service"
import { ApiError } from "../utils/custom_error"
import auth from "../utils/auth"
import { ILoginResponse } from "../interfaces/interfaces"


class UserRepository{

    signIn = async (req: Request, res: Response, next: NextFunction) =>{
        const { email, password } = req.body
       try{
        const user = await userService.findUser(email)
            if(user){
               const isPasswordValid = await auth.validatePassword(password,user.password,user.salt)
               if(isPasswordValid){
                const token = auth.generateToken({ email, id: user.id})
                const response: ILoginResponse = {
                    id: user.id,
                    email,
                    token,
                }
                res.status(200).json(response)
               }
            }
       }catch(err: any){
        next( new ApiError(err.stackTrace,500))
       }
    }

    signUp = async ( req:Request, res: Response, next: NextFunction) =>{

        const { email} = req.body
        try{
            const user = await userService.findUser(email)
            if(user){
               next(new ApiError("User exists",400))
            }
            const newUser = await userService.create(req.body)
            res.status(200).json(newUser)
        }catch(err: any){
            next(new ApiError(err.stackTrace,500))
        }
    }
}

export default UserRepository