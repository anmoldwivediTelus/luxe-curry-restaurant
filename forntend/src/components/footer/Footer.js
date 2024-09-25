import React from 'react'
 const Footer = () => {
  return (
    <div className='w-full h-[300px] bg-slate-300'>
        <div className='text-center p-8'>
            <p className='text-[50px] uppercase text-yellow-800 font-serif'>Luxe Curry</p>
        </div>
        <div className='pl-20 pr-20 flex justify-between space-x-[50px] font-serif' >
            <div className='text-center h-[100px] w-[250px]'>
                <p className='text-[30px] '>Our Address</p>
                <p>4641/05 Waterview Lane New Mexico, 87120</p>
            </div>
            <div className='text-center h-[100px] w-[250px]'>
                <p className='text-[30px]'>Order Online</p>
                <p>If you want to book a table, You can contact with our staff</p>
                <p className='text-[30px] text-yellow-800'>0123-456-7890</p>
            </div>
            <div className='text-center h-[100px] w-[250px]'>
                <p className='text-[30px]'>Our Hours</p>
                <p><span className='text-yellow-800 font-serif'>Mon - Fr</span> 09:00 AM - 10:00 PM</p>
                <p><span className='text-yellow-800 font-serif'>Sat - Sun</span> 09:00 AM - 11:00 PM</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer;