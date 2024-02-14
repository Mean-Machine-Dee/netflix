import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/custom_error";
import { errorConstants } from "../config/app_constants";

function handleError(
  err: TypeError | ApiError,
  _: Request,
  res: Response,
  next: NextFunction
) {
    let customErr = err
    if(!(err instanceof ApiError)){
        customErr = new ApiError(
            "oooh snap",
            500
        )
    }
    const statusCode = (customErr as ApiError).status
    switch(statusCode){
        case errorConstants.CUSTOMER_ERROR:
            res.json({title:"Validation failed",message:err.message,
            stackTrace: err.message})
            next()
            break
            case errorConstants.VALIDATION_ERROR:
              res.status(statusCode).json({title:"Validation failed",message:err.message,
                 stackTrace: err.message})
                break
            case errorConstants.NOT_FOUND:
              res.status(statusCode).json({title:"Not found",message:err.message, stackTrace: renderStack(err)})
                break
            case errorConstants.UNAUTHORIZED:
              res.status(statusCode).json({title:"UnAuthorized access",message:err.message, stackTrace: renderStack(err)})
                break
            case errorConstants.FORBIDDEN:
              res.status(statusCode).json({title:"Forbidden Access",message:err.message, stackTrace: renderStack(err)})
                break
            case errorConstants.SERVER_ERROR:
              res.status(statusCode).json({title:"Server Error",message:err.message, stackTrace: renderStack(err)})
                break;
            default:
               console.log("No error")
            }
        }

        const renderStack = (err: any) =>{
            console.log(err)
              return err.additionalInfo
              // return process.env.ENV === "dev"? 
              // err.stackTrace: null
             }



export default handleError;
