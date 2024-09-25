import express from "express";
import {userRoutes} from "./users/routes.js"
import  {pool}  from "./db.js";
const app =express();
app.use(express.json())
app.use('/api/v1/users',userRoutes)
app.use('/',(req,res)=>{
res.send("Server is running fine ||")
})
app.listen(4000,()=>{
    
    console.log("Server is listening on "+4000)
})