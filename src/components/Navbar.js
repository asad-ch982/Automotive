import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className=''> 
    <nav
    className=" inset-x-0 top-0 mb-4  w-full px-4 py-4 bg-gray-800   "
>
    <div className="md:flex md:justify-between text-center">
        <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-gray-400">
            MCM
        </div>
        <div className="md:flex md:justify-between sm:mx-4 md:mx-0 items-center mt-2  md:px-16 space-x-4  md:text-md md:font-semibold tracking-tight">
         <Link href='/'>  <div 
                className="text-gray-300 py-2 cursor-pointer border-black border-1 rounded-xl px-4 bg-black "
                >Home </div></Link> 
          <Link href='/bedsystem'>  <div 
                   className="text-gray-300 py-2 cursor-pointer border-black border-1 rounded-xl px-4 bg-black "
                >VBS</div></Link>
        <Link href='/about'>   <div 
                 className="text-gray-300 py-2 cursor-pointer border-black border-1 rounded-xl px-4 bg-black "
                >Retractable Trunk</div></Link> 
         <Link href='/contact'>  <div 
             className="text-gray-300 py-2 cursor-pointer border-black border-1 rounded-xl px-4 bg-black "
                >Contact Us </div></Link> 
           
        </div>
    </div>
</nav>
</div>
  )
}

export default Navbar