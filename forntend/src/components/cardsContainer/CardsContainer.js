import React from 'react'
import Logo from './../../../pubilc/assests/various-vegetables-black-table-with-space-message.jpg'
 const CardsContainer = () => {
  return (
    <div className='w-full h-[800px] bg-slate-800'>
        <div className='text-center p-20'>
            <p className='text-[30px] capitalize text-yellow-800 font-serif'>Our Gallery</p>
            <p className='text-[70px] capitalize text-white font-serif'>Try Our Special Dishes</p>
            <p className=' capitalize text-white font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum</p>
        </div>
        <div className='pl-20 pr-20 flex space-x-[50px]'>
          <div><img className='h-[400px] w-[350px]' src={Logo}/></div>
          <div><img className='h-[400px] w-[350px]' src={Logo}/></div>
          <div><img className='h-[400px] w-[350px]' src={Logo}/></div>
          <div><img className='h-[400px] w-[350px]' src={Logo}/></div>
        </div>
    </div>
  )
}
export default CardsContainer;