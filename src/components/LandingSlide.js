import React from 'react'
import { Link } from 'react-router-dom'

function LandingSlide({slide}) {
  return (
    <div className='flex flex-col gap-0 bg-white rounded-2xl shadow  md:flex-row-reverse overflow-hidden md:h-[460px]'>
        <div className='md:flex justify-center items-center md:basis-1/2 slider-image py-4 hidden' >
            <img src={slide.img} alt={slide.title} className='w-[300px] h-[300px] rounded-full object-cover shadow-md' />
        </div>
        <div className='basis-1/2 bg-[#E7FAFE] p-5 flex flex-col justify-center relative'>
        <div className='h-[150px] md:h-fit relative flex items-center'>
            <p className='px-5 py-1 bg-white w-fit rounded-full shadow-sm my-5 flex gap-2 justify-center items-center text-base font-bold text-main'>{<slide.icon />}{slide.title}</p>
            <img src={slide.img} alt={slide.title} className='float-right sm-img  object-cover absolute w-[150px] h-[150px] rounded-full shadow-md   top-0 right-10 ' />
        </div>
            
            <h1 className='my-5 text-xl font-bold text-submain '>{slide.fullTitle}</h1>
            <p className='text-sm  text-gray-600 h-[80px]  line-clamp-4 md:line-clamp-none md:h-fit'>{slide.role}</p>
            <Link to={slide.link} className='block px-4 border-2 border-main rounded-lg py-1 text-main font-bold hover:bg-main hover:text-white transition-all w-fit my-5'>Read More</Link>
        </div>
    </div>
  )
}

export default LandingSlide