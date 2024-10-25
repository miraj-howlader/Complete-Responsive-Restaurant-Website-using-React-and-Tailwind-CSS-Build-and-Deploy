import React from 'react'

import AppStoreImg from '../assets/app_store.png'
import PlayStoreImg from '../assets/Play_store.png'
import Gif from '../assets/mobile_bike.gif'
const AppStore = () => {
  return (
    <>
    <div className=' bg-gray-100 dark:bg-gray-700 py-14'>
        <div className=' container'>
            <div className=' grid grid-cols-1 sm:grid-cols-2
             items-center gap-4'>
                <div
                 data-aos='zoom-in'
                 data-aos-duration='400'
                 
                 className=' space-y-6 max-w-xl mx-auto'>
                    <h1 className=' text-2xl text-current sm:text-left
                     sm:text-4xl font-semibold dark:text-gray-400
                      text-gray-700'>Foodly is Available for Android and IOS</h1>
                
                <div className=' flex flex-wrap justify-center sm:justify-start
                 items-center'>
                    <a href="#">
                        <img src={PlayStoreImg} alt="" 
                        className=' max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                    <a href="#">
                        <img src={AppStoreImg} alt="" 
                        className=' max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                </div>
                
                </div>
                <div
                 data-aos='zoom-out'
                 data-aos-duration='400'
                 data-aos-once='true'
                >
                    <img src={Gif} className=' max-w-[300px] mx-auto' alt="" />
                </div>

            </div>

        </div>

    </div>
      
    </>
  )
}

export default AppStore
