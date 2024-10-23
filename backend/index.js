import express from "express";
import cors from "cors";
import {userRoutes} from "./users/routes.js";
import { tableBookingRoutes } from "./tableBooking/routes.js";
const app =express();
app.use(cors())
app.use(express.json())
app.use('/api/v1/users',userRoutes)
app.use('/api/v1/table',tableBookingRoutes)
app.use('/',(req,res)=>{
res.send("Server is running fine ||")
})
app.listen(4000,()=>{ 
    console.log("Server is listening on "+4000)
})