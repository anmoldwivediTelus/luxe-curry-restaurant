const Banner = () =>{
    return(
        <div className='bg-banner w-full h-[700px] bg-cover max-h-svh bg-no-repeat '>
            <div className=' absolute top-[200px] end-0 right-[300px]'>

                <div>
                    <div className='text-[20px] capitalize text-yellow-800 font-serif'>Welcome to our restaurant</div>
                    <div className='text-[70px] capitalize text-white font-serif'>the <span className='text-yellow-800' >best food</span> for</div>
                    <div className='text-[70px] capitalize text-white font-serif' >the best moments</div>
                </div>
                <div>
                <button className='pt-4 pb-4 pr-6 pl-6 border-yellow-800 border-2 font-serif text-xl capitalize text-slate-100 hover:bg-yellow-800 hover:text-slate-100 '>order now</button>
                </div>

            </div>
        </div>
    )
}
export default Banner;