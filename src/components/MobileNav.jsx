import React from 'react'

const MobileNav = ({mobileMenu}) => {
  return mobileMenu && (
    <>
    <div className="container py-4 text-center font-semibold bg-primary
     text-white ">
        <div className=' space-y-10 transition-all duration-300'>
            <ul className=' flex flex-col gap-6'>
                <li className=' hover:text-gray-500 duration-200' ><a href="#" >Home</a></li>
                <li className=' hover:text-gray-500 duration-200'><a href="#">About</a></li>
                <li className=' hover:text-gray-500 duration-200'><a href="#">Contact</a></li>
                <li className=' hover:text-gray-500 duration-200'><a href="#">Services</a></li>
                <li className=' hover:text-gray-500 duration-200'><a href="#">Blog</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav
