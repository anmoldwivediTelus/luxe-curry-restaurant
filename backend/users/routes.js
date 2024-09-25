import {Router} from "express";
import {getUsers} from "./controller.js";
const userRoutes = Router();
userRoutes.get('/list',getUsers)
export {userRoutes};