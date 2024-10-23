import  {pool}  from "../db.js";
import jwt from "jsonwebtoken"
import  bcrypt  from "bcrypt";
const SECRET_KEY = "asdfghjkJHGFDSAwertyuZXCVBNMLKJHGFDSA12345WSDFVGBHNJRTYHJ"

const createTableBookingForNotRegisteredUser = async (req,res) =>{
    console.log("hello")
    const {mobile,fname, lname, email, bookingDate, bookingTime, guestCount} = req.body
    try {
        var flag = 1;
        const newUser = await pool.query("INSERT INTO bookingtabledetails(fname,lname,email,mobile,date,time,guestcount) VALUES($1,$2,$3,$4,$5,$6,$7)",
        [fname, lname, email, mobile, bookingDate, bookingTime, guestCount],(err)=>{
            if (err) {
                flag  =  0; //If user is not inserted is not inserted to database assigning flag as 0/false.
                console.error(err);
                return  res.status(500).json({
                error: "Database error"
                })
            }
            else {
                flag  =  1;
                res.status(200).send({ message: 'table booking added to database,we will confirm you by call.' });
                }
            })
    } catch (error) {
        throw error;
    }
}
export {createTableBookingForNotRegisteredUser};
