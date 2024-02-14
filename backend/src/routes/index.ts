import { Application } from "express";
import userRouter from "./user.router";

export default class Routes{

    constructor(app: Application){
        app.use("/api/users", userRouter)
    }
}