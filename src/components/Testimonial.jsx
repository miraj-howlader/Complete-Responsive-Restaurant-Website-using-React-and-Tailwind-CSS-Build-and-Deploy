import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [
    {
        id:1,
        name:"Samuel",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia illum hic laborum minima quaerat repellat facere officia maiores consequatur.text:' ,
        img:'https://picsum.photos/101/101'   
    },
    {
        id:2,
        name:"John Doe",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia illum hic laborum minima quaerat repellat facere officia maiores consequatur.text:' ,
        img:'https://picsum.photos/102/102'   
    },
    {
        id:3,
        name:"Smith",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia illum hic laborum minima quaerat repellat facere officia maiores consequatur.text:' ,
        img:'https://picsum.photos/103/103'   
    },
    {
        id:4,
        name:"Anderson",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia illum hic laborum minima quaerat repellat facere officia maiores consequatur.text:' ,
        img:'https://picsum.photos/104/104'   
    },
    {
        id:5,
        name:"Mick",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia illum hic laborum minima quaerat repellat facere officia maiores consequatur.text:' ,
        img:'https://picsum.photos/105/105'   
    },
    {
        id:6,
        name:"Jack",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia illum hic laborum minima quaerat repellat facere officia maiores consequatur.text:' ,
        img:'https://picsum.photos/106/106'   
    },
]

const Testimonial = () => {
    var setting = {
        dots:true,
        arrow:false,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:'linear',
        pauseOnHover:true,
        pauseOnFocus:true

    }

  return (
    <>
    <div className=' py-10  dark:bg-gray-900 dark:text-white'>
        <div className="container">
            {/* header section  */}
        <div
         data-aos='fade-down'
         data-aos-duration='400'
         data-aos-once='true'
         className=' text-center mb-20 max-w-[400px] mx-auto'>
          <p className=' text-sm bg-clip-text text-transparent
           bg-gradient-to-r from-primary to-secondary'>Testimonial</p>
          <h1 className=' text-3xl font-bold'>Testimonial</h1>
          <p className=' text-sm mt-4 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus, recusandae perferendis similique quae unde neque inventore eaque error dolor.</p>
        </div>
        {/* Testimonial swiper section  */}
        <div className=' grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
           <Slider {...setting}
            
           >
            {
                TestimonialData.map((item)=>{
                    return <div key={item.id} className=' my-6'>
                       <div
                       data-aos='zoom-out'
                       data-aos-duration='400'
                       data-aos-once='true'
                        className=' flex flex-col justify-center
                        items-center gap-4 text-center shadow-lg mx-4
                         rounded-xl dark:bg-gray-800 bg-primary/20 relative'>
                        <img src={item.img} alt="" 
                        className=' rounded-full block mx-auto'
                        />
                        <h1 className=' text-2xl font-semibold'>{item.name}</h1>
                        <p className=' dark:text-white text-gray-600 p-4'>{item.text}</p>
                       <p className=' text-black/20 text-9xl font-serif
                        absolute top-0 right-0 dark:text-white'>,,</p>
                       </div>
                    </div>
                })
            }
           </Slider>
        </div>
        </div>
    </div>
       
    </>
  )
}

export default Testimonial
