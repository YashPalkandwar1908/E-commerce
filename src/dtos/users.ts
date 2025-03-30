export interface createUserDto{
    email:string;
    password: string;
    phone_number: string;
    address?: string;
}

export interface updateUserDto{
    email?:string;
    password?:string;
    phone_number?:string;
    address?:string;
}