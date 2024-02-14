

export interface IUser{
        email: string
        password: string
        location: string
}

export interface SignUpResponse{
        email: string
        token?: string
        id: number
}

export interface ILoginResponse{
        id: number
        email: string
        token?: string
        views?: []
        comments?:[]
}