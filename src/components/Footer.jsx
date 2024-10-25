import React from 'react'

import FooterLog from '../assets/food-logo.png'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobile, FaYoutube } from 'react-icons/fa6'
const Footer = () => {
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-950 dark:text-white'>
                <div className=' max-w-[1200px] mx-auto'>
                    <div
                    data-aos='zoom-in'
                    data-aos-duration='400'
                    data-aos-once='true'
                     className=' grid md:grid-cols-3 py-5'>
                        <div className=' py-8 px-4'>

                            <h1 className=' flex items-center gap-3 text-xl
                             sm:text-3xl font-bold text-justify sm:text-left'>
                                <img src={FooterLog} alt="" 
                                className=' max-w-[50px]'/>
                                FOODIE</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eligendi quia est quas unde ipsam provident dolorum ipsum laboriosam ex.</p>
                              <br />
                              <div className=' flex flex-col gap-2'>
                               <div className=' flex gap-2'>
                               <FaLocationArrow  className=' text-2xl'/>
                               <p>Nodia, Uttar Pradesh</p>
                               </div>
                               <div className=' flex gap-2'>
                               <FaMobile className=' text-2xl'/>
                               <p>++0443 24565 3343</p>
                               </div>
                               {/* social icons  */}
                              <div>
                                <div className=' flex items-center gap-3
                                 mt-4'>
                                    <a href="#">
                                        <FaInstagram className=' text-2xl
                                         hover:bg-primary hover:text-white
                                          transition-all duration-300
                                           rounded-full'/>
                                    </a>
                                    <a href="#">
                                        <FaFacebook className=' text-2xl
                                         hover:bg-primary hover:text-white
                                          transition-all duration-300
                                           rounded-full'/>
                                    </a>
                                    <a href="#">
                                        <FaYoutube className=' text-2xl
                                         hover:bg-primary hover:text-white
                                          transition-all duration-300
                                           rounded-full'/>
                                    </a>
                                </div>
                                </div>
                              </div>
                              

                        </div>
                        <div className=' grid grid-cols-2 sm:grid-cols-3
                 col-span-2 md:pl-10'>
                          <div>
                            <div className=' py-8 px-4'>
                                <h1 className=' text-xl sm:text-3xl font-bold
                                 text-justify sm:text-left mb-3'>Important Links</h1>
                                 <ul className=' flex flex-col gap-3'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Login</li>
                                 </ul>
                            </div>
                          </div>
                          <div>
                            <div className=' py-8 px-4'>
                                <h1 className=' text-xl sm:text-3xl font-bold
                                 text-justify sm:text-left mb-3'>Important Links</h1>
                                 <ul className=' flex flex-col gap-3'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Login</li>
                                 </ul>
                            </div>
                          </div>
                          <div>
                            <div className=' py-8 px-4'>
                                <h1 className=' text-xl sm:text-3xl font-bold
                                 text-justify sm:text-left mb-3'>Important Links</h1>
                                 <ul className=' flex flex-col gap-3'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Login</li>
                                 </ul>
                            </div>
                          </div>
                        </div>

                    </div>
                    <div>
                      <div className=' text-center py-10 border-t-2
                       border-gray-300'>
                        @copyright 2024. All rights reserved 

                       || Made with ❤💔 by Miraj Howlader
                      </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Footer
