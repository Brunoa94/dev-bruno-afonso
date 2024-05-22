import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaRegCopyright, FaCopyright } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



const Footer = () => {
  return (
    <div className='w-full px-4 py-4 lg:flex lg:px-10 bg-gray-100'>
      <div className='w-full'>
          <div className='flex items-center space-x-4 mb-3'>
            <FaLinkedin className='text-4xl text-violet-950'/>
            <FaGithub className='text-4xl text-violet-950'/>
            <FaInstagram className='text-4xl text-violet-950'/>
          </div>
          <div className='flex items-center mb-3 lg:mb-0'>
            <IoIosMail className='text-4xl text-violet-950'/>
            <span className='text-violet-950 ml-2 text-lg font-reddit'>bruno.afonso94@hotmail.com</span>
          </div>
          <div className='flex items-center lg:hidden'> 
            <FaCopyright className='text-base text-violet-950'/>
            <span className='text-violet-950 ml-1 text-lg font-reddit'>2024 Bruno Afonso</span>
          </div>
      </div>
      <div className='hidden lg:flex mt-auto items-center shrink-0'>
          <FaCopyright className='text-base text-violet-950'/>
          <span className='text-violet-950 ml-1 text-lg whitespace-no-wrap font-reddit'>2024 Bruno Afonso</span>
      </div>
    </div>
  
  )
}

export default Footer