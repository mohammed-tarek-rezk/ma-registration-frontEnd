import React from 'react'
import { Link } from 'react-router-dom'

function SmallCom({slide}) {
  return (
    <div className={`rounded-2xl shadow  md:flex-row-reverse overflow-hidden mx-2 h-[200px]`} >
        <div className={` p-2 flex flex-col justify-center relative `} style={{backgroundImage: `url(${slide.img})` , backgroundSize: "cover"}}>
        <div className='layout'></div>
        <div className=' relative z-10'>
        <div className='h-[100px] md:h-fit relative flex items-center z'>
            <p className='px-5 py-1 bg-white w-fit rounded-full shadow-sm my-5 flex gap-2 justify-center items-center text-base font-bold text-main '>{<slide.icon />}{slide.title}</p>
        </div>
            <h1 className='my-5 text-xl font-bold text-submain line-clamp-1 '>{slide.fullTitle}</h1>
            <p className='text-sm  text-gray-300 h-[80px]  line-clamp-1 md:h-fit'>{slide.role}</p>
        </div>
        </div>

    </div>
  )
}

export default SmallCom