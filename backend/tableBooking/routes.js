import {Router} from "express";
import {createTableBookingForNotRegisteredUser} from "./controller.js";
const tableBookingRoutes = Router();
tableBookingRoutes.post('/bookTable',createTableBookingForNotRegisteredUser)
export {tableBookingRoutes};