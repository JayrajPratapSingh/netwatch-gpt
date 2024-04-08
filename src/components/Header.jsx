import React from 'react'
import Logo from "../assets/Logo-transparent.png"

const Header = () => {
  return (
    <div className='absolute w-full bg-gradient-to-b px-8 py-2 from-black z-10'>
      <img className=' w-60 h-20' src={Logo} alt="logo" />
    </div>
  )
}

export default Header