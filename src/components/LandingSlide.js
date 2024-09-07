import React from 'react'
import { Link } from 'react-router-dom'
function LandingSlide({slide}) {
  return (
    <div className={`flex  flex-col mx-2 gap-0 bg-white rounded-2xl shadow  md:flex-row-reverse  md:h-[200px]  overflow-hidden`} style={{ width: 200 }}>
        <div className={`flex-grow bg-[#E7FAFE] p-5 flex flex-col justify-center relative `} style={{backgroundImage: `url(${slide.img})` , backgroundSize: "cover"}}>
        <div className='layout'></div>
        <div className=' relative z-10'>
        <div className=' md:h-fit relative flex items-center z'>
            <p className='px-5 py-1 bg-white w-fit rounded-full shadow-sm my-5 flex gap-2 justify-center items-center text-base font-bold text-main'>{<slide.icon />}{slide.title}</p>
        </div>
            <Link to={slide.link} className='block px-4 border-2 border-white rounded-lg py-1 text-white font-bold hover:bg-main hover:text-white transition-all w-fit my-5'>Read More</Link>
        </div>
        </div>

    </div>
  )
}

export default LandingSlide