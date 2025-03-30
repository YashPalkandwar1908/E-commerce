import { Request, Response } from "express";
import { createUserDto } from "../dtos/users";
import { promisepool } from "../db";
import bcrypt from "bcryptjs";

//createCustomer
export async function createCustomer(request : Request<{},{},createUserDto>,response : Response) {
    const {email, password , phone_number, address} = request.body;
    try {

        const saltround = 10;
        const hashPassword = await bcrypt.hash(password,saltround);

        await promisepool.query(
            `INSERT INTO users(email,password_hash,phone_number,address,role) VALUES (?, ?, ?, ?, 'customer')`,
            [email,hashPassword,phone_number,address]);
        response.status(201).json({msg:"Customer Added Successfully"});
    } catch (error) {
        response.status(500).json({ error });
    }};

//createAdmin
export async function createAdmin(request : Request<{},{},createUserDto>, response : Response){
    const {email,password,phone_number,address} = request.body;
    try {   
        const saltround = 10;
        const hashPassword = await bcrypt.hash(password,saltround);

        await promisepool.query(
                `INSERT INTO users(email,password_hash,phone_number,address,role)VALUES (?, ?, ?, ?, 'admin')`,
                [email,hashPassword,phone_number,address]);
        response.status(201).json({"msg":"Admin Created"});
        } catch (error) {
            response.status(500).send(error);
                
        }};

//userLogIn

//userLogOut

//userByDetail

//userByID

//allUsers
