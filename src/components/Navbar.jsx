import React, { useState } from 'react'
import Logo from '../assets/food-logo.png'
import { FaCartShopping, FaMinus } from 'react-icons/fa6'
import DarkMode from './DarkMode'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import MobileNav from './MobileNav'
const Navbar = () => {
  const [mobileMenu,setMobileMenu] = useState(false)
  return (
    <>
    <div className=' shadow-md bg-white dark:bg-gray-900
     dark:text-white duration-200 '>
        <div className="container py-3 sm:py-0">
        <div className=' flex justify-between items-center'>
            {/* logo  */}
           <div className=' flex gap-2 items-center font-semibold'>
           <a href="#"
           className=' flex items-center gap-2 text-2xl sm:text-3xl
             font-bold'
           >
                <img src={Logo} alt="Not Fount" 
                className=' w-10'/>
            </a>Foodie
           </div>
            {/* menu  */}
            <div className=' flex items-center justify-center gap-3'>
                {/* DarkMode btn  */}
                <div>
                    <DarkMode/>
                </div>
                <ul className=' hidden sm:flex gap-3'>
                    <li><a href="#" className='
                     inline-block py-4 px-4 hover:text-primary
                      transition-all duration-300'>Home</a></li>
                    <li><a href="#" className='
                     inline-block py-4 px-4 hover:text-primary
                      transition-all duration-300'>About</a></li>
                    <li><a href="#" className='
                     inline-block py-4 px-4 hover:text-primary
                      transition-all duration-300'>Blog</a></li>
                    <li><a href="#" className='
                     inline-block py-4 px-4 hover:text-primary
                      transition-all duration-300'>Contact</a></li>
                </ul>
                
            </div>
            <button className='btn flex gap-2'>Order
                <FaCartShopping className='  text-xl text-white drop-shadow-sm
                 cursor-pointer'/>
            </button>
            {/* Mobile Menu  */}
            <div className=' lg:hidden flex relative'>
              {
                mobileMenu ? (
                  <RxCross1 className=' text-2xl cursor-pointer transition-all
                   duration-300 ' onClick={()=>setMobileMenu(!mobileMenu)}/>
                  
                ):(
                  <FiMenu  className=' text-2xl  cursor-pointer transition-all
                   duration-300' onClick={()=>setMobileMenu(!mobileMenu)}/>
                )
              }
            
            
          </div> 

        </div>

      
        </div>
      
    </div>
      <MobileNav mobileMenu={mobileMenu}/>
    </>
  )
}

export default Navbar
