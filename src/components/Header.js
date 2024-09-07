
import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderNav from './HeaderNav'

function Header() {
  return (
    <header className=' sticky top-0 bg-white z-50 '>
      <Container className="py-3 flex  justify-between items-center" >
        <Logo />
        <HeaderNav />
      </Container>
    </header>
  )
}

export default Header