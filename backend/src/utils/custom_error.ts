export class ApiError{
     message?: string
     status?: number
     stack?: any

     constructor(mesage: string, status: number = 500, stack: any ={}){
        this.message = mesage
        this.status = status;
        this.stack = stack
     }
}