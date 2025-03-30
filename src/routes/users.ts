import { Router } from "express";
import { createAdmin, createCustomer } from "../handlers/users";

const router = Router();

//Register User
router.post('/auth/register/customer',createCustomer)

//Register Admin
router.post('/auth/register/admin',createAdmin)

//Login User
router.post('/auth/login',)

//Logout User
router.post('/auth/logout',)

//Get user details
router.get('/auth/user',)

//Get user by id
router.get('/:id',)

//Get all users (Admin Only)
router.get('/all',)

//Update user detail
router.put('/:id',)

//Delete user (Admin Olny)
router.delete('/:id',)

export default router;