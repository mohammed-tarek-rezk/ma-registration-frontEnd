import React from 'react'
import { Link } from 'react-router-dom'
import img from "./../images/landing/it.jpg"
function LandingSlide({slide}) {
  return (
    <div className={`flex flex-col gap-0 bg-white rounded-2xl shadow  md:flex-row-reverse overflow-hidden md:h-[460px]  overflow-hidden`} >

        <div className={`flex-grow bg-[#E7FAFE] p-5 flex flex-col justify-center relative `} style={{backgroundImage: `url(${slide.img})` , backgroundSize: "cover"}}>
        <div className='layout'></div>
        <div className=' relative z-10'>
        <div className='h-[100px] md:h-fit relative flex items-center z'>
            <p className='px-5 py-1 bg-white w-fit rounded-full shadow-sm my-5 flex gap-2 justify-center items-center text-base font-bold text-main'>{<slide.icon />}{slide.title}</p>
        </div>
            
            <h1 className='my-5 text-xl font-bold text-submain '>{slide.fullTitle}</h1>
            <p className='text-sm  text-gray-300 h-[80px]  line-clamp-4 md:line-clamp-none md:h-fit'>{slide.role}</p>
            <Link to={slide.link} className='block px-4 border-2 border-white rounded-lg py-1 text-white font-bold hover:bg-main hover:text-white transition-all w-fit my-5'>Read More</Link>
        </div>
        </div>

    </div>
  )
}

export default LandingSlide