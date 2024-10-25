import React from 'react'
import Food1 from '../assets/biryani5.png'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
const Banner = () => {
  return (
    <>
    <div className=' min-h-[550px] pt-20 dark:bg-gray-900 dark:text-white'>
    <div className=' container'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
           {/* Image section  */}
           <div>
            <img
             data-aos='zoom-out'
             data-aos-duration='400'
             data-aos-once='true'
             src={Food1} alt="" 
            className=' max-w-[530px] text-center mt-8 hover:rotate-6 w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]'/>
           </div>
           {/* Text section  */}
           <div
            data-aos='fade-up'
            data-aos-duration='300'
           
            className=' flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className=' text-3xl sm:text-4xl font-bold'>Lorem, ipsum dolor.</h1>
          <p className=' text-sm dark:text-white text-gray-500 tracking-wide leading-5'>iquid debitis unde fugit ratione tempora perspiciatis dolore perferendis nostrum, quis doloribus hic. Itaque ratione optio architecto culpa ut suscipit illo assumenda sed, reprehenderit vel nihil velit et quidem eligendi esse quaerat quos corporis. Accusamus deleniti cupiditate asperiores vitae temporibus?<br /><br />
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim qui beatae modi itaque sint voluptate atque vitae rerum aspernatur magnam, nihil nam nostrum esse autem nemo a ea et ipsam provident. At rerum laborum consectetur maxime quam, esse nihil, officiis quibusdam accusantium modi voluptatum iusto asperiores adipisci labore autem assumenda et deserunt minima odit sequi. Dolores labore repellendus pariatur amet dignissimos voluptate aliquid eum soluta deleniti, possimus ab at? Impedit, unde! Earum libero nemo tempore dicta quo pariatur quisquam incidunt minus dolore! Beatae pariatur explicabo aliquam amet odio sit corrupti, dignissimos ipsa officiis excepturi asperiores, quis soluta architecto autem?
          </p>
          <div className=' flex gap-6'>
          <div>
            <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5
             rounded-full bg-violet-100 dark:bg-violet-400'/>
           </div>
          <div>
            <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5
             rounded-full bg-violet-100 dark:bg-orange-400'/>
           </div>
          <div>
            <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5
             rounded-full bg-violet-100 dark:bg-green-400'/>
           </div>
          </div>
          <div className=' mb-8'>
           <button className=' btn'>Order Now</button>
          </div>
           </div>
           
        </div>

    </div>

    </div>
      
    </>
  )
}

export default Banner
