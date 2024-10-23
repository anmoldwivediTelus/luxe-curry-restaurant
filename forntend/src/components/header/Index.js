import { useEffect, useState } from 'react'
import Logo from './../../../pubilc/assests/luxe-curry-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useLoginStatus } from '../../utils/useLoginStatus';
const Header = () =>{
   const loginStatus =useLoginStatus();
   const navigate = useNavigate();
   //const [loginStatusCheck,setLoginStatusCheck]=useState()
   console.log(loginStatus)
   if(!loginStatus){}
   //loginStatus ? setLoginStatusCheck(true) : setLoginStatusCheck(false)
    useEffect(()=>{
        console.log(loginStatus,"useEffect")
    },[])
    const handleLogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
        console.log(loginStatus,localStorage.getItem('token'))
        navigate("/");
    }
    return(
        <div>
            <nav className='flex pl-32 pr-32 h-28 justify-between bg-gray-800 z-10 opacity-75 fixed w-full top-0 left-0'>
                <div className='m-auto'>
                    <img src={Logo} className='w-28'/>
                </div>
                <div className='m-auto'>
                    <ul className='flex'>
                        <li className='pt-4 pb-4 pr-6 pl-6 uppercase cursor-pointer font-serif text-xl hover:text-yellow-800 text-slate-100 '>home</li>
                        <li className='pt-4 pb-4 pr-6 pl-6 uppercase cursor-pointer font-serif text-xl hover:text-yellow-800 text-slate-100 '>About Us</li>
                        <li className='pt-4 pb-4 pr-6 pl-6 uppercase cursor-pointer font-serif text-xl hover:text-yellow-800 text-slate-100 '>Menu</li>
                        <li className='pt-4 pb-4 pr-6 pl-6 uppercase cursor-pointer font-serif text-xl hover:text-yellow-800 text-slate-100 '>Contact Us</li>
                        <li className='pt-4 pb-4 pr-6 pl-6 uppercase cursor-pointer font-serif text-xl hover:text-yellow-800 text-slate-100 '>Cart</li>
                        {localStorage.getItem('token') && <li className='pt-4 pb-4 pr-6 pl-6 uppercase cursor-pointer font-serif text-xl hover:text-yellow-800 text-slate-100 '><Link to='/profile'>Profile</Link></li>}
                        {loginStatus && localStorage.getItem('token') ? <li className='pt-4 pb-4 pr-6 pl-6 uppercase cursor-pointer font-serif text-xl hover:text-yellow-800 text-slate-100 ' onClick={(e)=> handleLogout(e)}>Logout</li> : <li className='pt-4 pb-4 pr-6 pl-6 uppercase cursor-pointer font-serif text-xl hover:text-yellow-800 text-slate-100 '><Link to='/login'>LogIn</Link></li>}
                    </ul>
                </div>
                <div className='m-auto'>
                <button className='pt-4 pb-4 pr-6 pl-6 border-yellow-800 border-2 font-serif text-xl capitalize text-slate-100 hover:bg-yellow-800 hover:text-slate-100'><Link to='/bookTable'>Book a table</Link></button>
                </div>
            </nav>
        </div>
        
    )
}
export default Header;