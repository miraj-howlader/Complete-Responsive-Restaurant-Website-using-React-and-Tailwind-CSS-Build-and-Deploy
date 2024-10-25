import React from 'react'

import Img2 from '../assets/biryani2.png'

const ServicesData = [
  {
    id:1,
    img:Img2,
    name:'Birayni',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit sit minima autem? At.'
  },
  {
    id:2,
    img:Img2,
    name:'Chicken Kari',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit sit minima autem? At.'
  },
  {
    id:3,
    img:Img2,
    name:'Cold Fofee',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit sit minima autem? At.'
  },
]

const Services = () => {
  return (
    <>
    <div className=' py-10 dark:bg-gray-900 dark:text-white'>
      <div className="container">
        {/* Header section  */}
        <div
         data-aos='fade-down'
         data-aos-duration='400'
         data-aos-once='true'
         className=' text-center mb-20 max-w-[400px] mx-auto'>
          <p className=' text-sm bg-clip-text text-transparent
           bg-gradient-to-r from-primary to-secondary'>Our Services</p>
          <h1 className=' text-3xl font-bold'>Services</h1>
          <p className=' text-sm mt-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus, recusandae perferendis similique quae unde neque inventore eaque error dolor.</p>
        </div>
        {/* Card section  */}
        <div>
          <div
           data-aos='fade-right'
           data-aos-duration='400'
           data-aos-once='true'
           className=' grid grid-cols-1 sm:grid-cols-3
           gap-14 md:gap-5 place-items-center'>
            {ServicesData.map((item)=> {
              return <div key={item.id}
              className=' max-w-[300px] group rounded-2xl bg-white
               dark:bg-gray-800 dark:hover:bg-primary hover:text-white
                duration-300 p-4 shadow-xl'
              >
                <div className=' h-[100px]'>
                  <img src={item.img} alt="" 
                  className=' max-w-[200px] mx-auto block transform
                   -translate-y-14 group-hover:scale-105
                    group-hover:rotate-6 duration-300'
                  />
                </div>
                <div className=' p-4 text-center'>
                  <h1 className=' text-xl font-bold'>{item.name}</h1>
                  <h1 className=' text-gray-500 text-sm
                   line-clamp-2 group-hover:text-white'>{item.desc}</h1>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default Services
