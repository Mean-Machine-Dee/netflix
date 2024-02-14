import express, {Application } from "express"
import { config } from "dotenv";
const envFileName = `.env.${process.env.NODE_ENV || "prod"}`
config({ path : envFileName})

import { PORT } from "./config";

import Server from "."

const app: Application =express()
 new Server(app)
const APPPORT:number = PORT ? parseInt(PORT) : 8081

app.listen(APPPORT, "localhost", ()=>{
    console.log(`Server Listening on port ${PORT}`)
}).on("error", (err: any) =>{
    console.log("Errpr occured" + err)
})
