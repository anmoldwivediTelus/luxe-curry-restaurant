import  {pool}  from "../db.js";
import jwt from "jsonwebtoken"
import  bcrypt  from "bcrypt";
const SECRET_KEY = "asdfghjkJHGFDSAwertyuZXCVBNMLKJHGFDSA12345WSDFVGBHNJRTYHJ"
const getUsers = (req,res) =>{
    pool.query("SELECT * FROM users",(error,result)=>{
        res.send(result)
    })
}
const loginUser = async(req,res) =>{
    const { email, password } = req.body;
    try {
        const data = await pool.query(`SELECT * FROM users WHERE email= $1;`, [email]) //Verifying if the user exists in the database
        const user = data.rows;
        console.log(user)
        if (user.length === 0) {
            res.status(400).json({
            error: "User is not registered, Sign Up first",
            });
        }else{
            console.log(user[0].password)
            bcrypt.compare(password, user[0].password, (err, result) => { //Comparing the hashed password
                if (err) {
                    res.status(500).json({
                    error: "Server error",
                    });
                } else if (result === true) { //Checking if credentials match
                    
                    const token = jwt.sign(
                    {
                    email: email,
                    },
                    SECRET_KEY
                    );
                    res.status(200).send({
                    message: "User signed in!",
                    token: token,
                    data:{
                        email:user[0].email,
                        name:user[0].name
                    }
                    });
                }
            });
        }
    } catch (error) {
        
    }
}
const createUser = async (req,res) =>{
    try {
        const getUserData = await pool.query(`SELECT * FROM users WHERE email=$1`,[req.body.email])
        if(getUserData.rows.length === 0){
            bcrypt.hash(req.body.password, 10, async(err, hash) => {
                if (err)
                res.status(err).json({
                error: "Server error",
            });
            req.body.password = hash;
            var flag = 1;
            const newUser = await pool.query("INSERT INTO users(name,fname,lname,email,password) VALUES($1,$2,$3,$4,$5)",
                [req.body.name,req.body.fname,req.body.lname,req.body.email,req.body.password],(err)=>{
                    if (err) {
                        flag  =  0; //If user is not inserted is not inserted to database assigning flag as 0/false.
                        console.error(err);
                        return  res.status(500).json({
                        error: "Database error"
                        })
                    }
                    else {
                        flag  =  1;
                        res.status(200).send({ message: 'User added to database, not verified' });
                        }
                    })
                    if (flag) {
                        const  token  = jwt.sign( //Signing a jwt token
                        {
                        email: req.body.email
                        },
                        SECRET_KEY
                        );
                    };
                });
        }else{
            res.send({
                statusCode:200,
                message:'user already exist'
            });
        }
    } catch (error) {
        throw error;
    }
}
export {getUsers,loginUser,createUser};
