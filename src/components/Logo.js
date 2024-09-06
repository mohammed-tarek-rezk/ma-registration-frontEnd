import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../images/ma-logo.png"
function Logo() {
  return (
    <Link to={"/"}><img src={logo} alt='MA Logo' className='w-[120px] md:w-[150px]'/></Link>
  )
}

export default Logo