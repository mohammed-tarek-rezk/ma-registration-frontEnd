
import React from 'react'

function Benfit({benfit}) {

  return (
    <div className=' flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-2xl hover:scale-105 shadow-sm  transition-all'>
        <div className='text-3xl md:text-5xl text-main'>{<benfit.icon/>}</div>
        <h3 className='font-bold md:text-xl'>{benfit.title}</h3>
        <p className='text-sm text-gray-500'>{benfit.des}</p>
    </div>
  )
}

export default Benfit