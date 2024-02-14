import {z} from "zod"

export const userSchema = z.object({
    body: z.object({
        email: z.string({ required_error: "Enter password"}).email('Not a valid email'),
        password: z.string({required_error:"Enter password"}).min(5),
        confirm: z.string({required_error:"Enter password"}).min(5),
    }).refine((data)=> data.password === data.confirm, {
        message: "Password mismatch"
    })
})

export const userLoginSchema = z.object({
    body: z.object({
        email: z.string({ required_error: "Enter email"}).email('Not a valid email'),
        password: z.string({required_error:"Enter password"}).min(5)
       
})
})