import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaRegCopyright, FaCopyright } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



const Footer = () => {
  return (
    <div className='w-full px-4 py-4 lg:flex lg:px-10'>
      <div className='w-full'>
          <div className='flex items-center space-x-4 mb-3'>
              <a href="https://www.linkedin.com/in/brunoafonso94/">
                <FaLinkedin className='text-4xl text-violet-500'/>
              </a>
              <a href="https://github.com/Brunoa94">
                <FaGithub className='text-4xl text-violet-500'/>
              </a>
              <a href="https://www.instagram.com/brunoa94/">
                <FaInstagram className='text-4xl text-violet-500'/>
              </a>
          </div>
          <div className='flex items-center mb-3 lg:mb-0'>
            <IoIosMail className='text-4xl text-violet-500'/>
            <span className='text-violet-500 ml-2 text-lg font-reddit'>bruno.afonso94@hotmail.com</span>
          </div>
          <div className='flex items-center lg:hidden'> 
            <FaCopyright className='text-base text-violet-500'/>
            <span className='text-violet-500 ml-1 text-lg font-reddit'>2024 Bruno Afonso</span>
          </div>
      </div>
      <div className='hidden lg:flex mt-auto items-center shrink-0'>
          <FaCopyright className='text-base text-violet-500'/>
          <span className='text-violet-500 ml-1 text-lg whitespace-no-wrap font-reddit'>2024 Bruno Afonso</span>
      </div>
    </div>
  
  )
}

export default Footer