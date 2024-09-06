import React from 'react'
import { Link } from 'react-router-dom'

function HeaderLinkIcon(props) {
  return (
    <Link to={props.link} className=' text-main text-sm md:text-base opacity-70 hover:opacity-100 transition-all flex items-center md:px-1  ' target='_blank'>{<props.title />}</Link>
  )
}

export default HeaderLinkIcon