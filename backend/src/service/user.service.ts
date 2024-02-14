import { prisma } from "../db/prisma";
import { ILoginResponse, IUser, SignUpResponse } from "../interfaces/interfaces";
import authHandler from "../utils/auth"
import { ApiError } from "../utils/custom_error";
interface IUserRepository {
  create(customer: IUser): Promise<any>;
  login(user: IUser): Promise<ILoginResponse>;
  findUser(email: string) :Promise<boolean>
}

class UserService implements IUserRepository {
  async findUser(email: string): Promise<any> {
      const user =  await prisma.user.findFirst({
        where: {
            email
        }
      })
      return user
  }
  async create(customer: IUser): Promise<SignUpResponse> {
   
    const {email, password, location} = customer
    try{
        const salt = await authHandler.generateSalt()
        const hashedPassword = await authHandler.generatePassword(password,salt)
        const user = await prisma.user.create({
            data: {
              email,
              password: hashedPassword,
              salt:salt,
              location
            },
          });
          const tokenn = authHandler.generateToken({ email: email, id: user.id })
          return ({
            email,
            token: tokenn,
            id: user.id
      })
    }catch(err: any){
        throw new ApiError(err.stackTrace,500)
    }

  }
  login(user: IUser): Promise<ILoginResponse> {
    throw new Error("Method not implemented.");
  }
}


export default new UserService()