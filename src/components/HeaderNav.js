import React from 'react'
import { useSelector } from 'react-redux'
import HeaderLinkIcon from './HeaderLinkIcon'
import { Link } from 'react-router-dom'

function HeaderNav() {
    let nav = useSelector((state)=> state.navLink)
    
  return (
    <div className='flex gap-3 flex-col items-center justify-center md:flex-row' >
        <div className='flex gap-3'>
          {nav.map((el)=> <HeaderLinkIcon link={el.link} title={el.title} />)}
        </div>
        <div className='md:flex gap-3 hidden '>
          <Link to={"/register"} className='block px-4 border-2 border-main rounded-lg py-1 text-main font-bold hover:bg-main hover:text-white transition-all'>Register</Link>
          <Link to={"/login"} className='block px-4  bg-submain  text-white rounded-lg py-1 font-bold hover:bg-white hover:text-submain border-2 border-submain transition-all'>Login</Link>
        </div>
    </div>
  )
}

export default HeaderNav