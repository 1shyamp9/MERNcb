import express from "express"
import { createUser, loginUser, updateUser, userLogout, userProfile } from "../Controllers/userController.js";
import { isAuth } from "../Middleware/auth.js";
export const userRoute = express.Router()

userRoute.post('/create', createUser);
userRoute.post('/login',loginUser);
userRoute.get('/me',isAuth,userProfile);
userRoute.get('/logout',isAuth,userLogout);
userRoute.put('/update/profile',isAuth,updateUser);