import { useEffect, useState } from "react"

export const useLoginStatus = () =>{
    const token = localStorage.getItem('token')
    const [showLogin,setShowLogin]=useState(null)
    useEffect(()=>{
        if(token){
            setShowLogin(true)
        }else{
            setShowLogin(false)
        }
    },[])
    return showLogin;
    
}