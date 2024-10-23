import {Router} from "express";
import {getUsers, createUser, loginUser} from "./controller.js";
const userRoutes = Router();
userRoutes.get('/list',getUsers)
userRoutes.post('/createUser',createUser)
userRoutes.post('/loginUser',loginUser)
export {userRoutes};