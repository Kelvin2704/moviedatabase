import React from 'react'
import Navbar from '../../components/Navbar'

const Header = () => {
  return (
    <div className='h-[60px] col-span-10 bg-transparent border-b-[1px] bg-clip-padding border-gray-300 text-white drop-shadow-xl backdrop-blur-sm z-10'>
      <Navbar/>
    </div>
  )
}

export default Header
