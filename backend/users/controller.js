import  {pool}  from "../db.js";
const getUsers = (req,res) =>{
    pool.query("SELECT * FROM users",(error,result)=>{
        console.log("hii")
        res.send(result)
    })
}
export {getUsers};
