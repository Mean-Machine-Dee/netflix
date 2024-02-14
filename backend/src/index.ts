import express,{ Application } from "express";


import cors, { CorsOptions } from "cors"

import Routes from "./routes";
import errorHandler from  "./middlewares/error.middleware"
export default class Server{
    constructor(app: Application){
        this.config(app)
        
        new Routes(app)
        this.initializeErrorHandling(app)
    }


    private config(app: Application):void{
        const corsOptions: CorsOptions ={
                origin: "*"
        }

        app.use(cors(corsOptions))
        app.use(express.json())
        app.use(express.urlencoded({ extended: true}))
      

    }

    private initializeErrorHandling(app: Application) {
        app.use(errorHandler);
      }
}