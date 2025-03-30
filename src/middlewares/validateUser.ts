import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const userSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email" : "Invalid email format",
        "any.requried" : "Email is requrired",
    }),
    password: Joi.string()
    .min(8).max(32)
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .required()
    .messages({
        "string.min" : "Password must be at least 8 characters long",
        "string.max" : "Password cannot be more than 32 characters long",
        "string.pattern.base" : "Password must contain at least one letter, one number, and one special character",
        "any.required" : "Password is required"
    }),
    phone_number: Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
        "string.pattern.base": "Phone number must be a 10-digit number",
        "any.required": "Phone number is required",
    }),
    address: Joi.string().min(5).required()
    .messages({
        "string.min": "Address must be at least 5 characters long",
        "any.required": "Address is required",
    }),
});



export function validateUser(request : Request, response : Response, next : NextFunction){
    const {error} = userSchema.validate(request.body, { abortEarly : false});

    if (error){
        return response.status(400).json({
            msg: "Validation Failed",
            errors: error.details.map((err) => err.message),
        });
    }
    next();
}
