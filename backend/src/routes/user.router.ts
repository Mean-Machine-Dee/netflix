import { Router } from "express"
import UserRepository from "../controllers/user.repository"
import { validate } from "../utils/validate"
import { userSchema,userLoginSchema } from "../schemas/user.schemas"

class UserRoutes{
    router = Router()
    controller = new UserRepository()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes(){
        this.router.post("/",validate(userSchema), this.controller.signUp)
        this.router.post("/sign-in", validate(userLoginSchema), this.controller.signIn)
    }
}

export default new UserRoutes().router