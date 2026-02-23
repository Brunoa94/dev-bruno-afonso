import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Home = () => {
    const [startAnimation, setStartAnimation] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);
  
  return (
    <div className='h-screen w-screen max-h-screen flex flex-col justify-center lg:items-center'>
        <header className='absolute top-0 w-full flex items-center p-4 lg:justify-center pr-6'>
            <div className='hidden md:flex rounded-full bg-violet-600 h-20 w-20 items-center justify-center'>
              <span className='text-white text-xl font-bold'>BA</span>
            </div>
            <div className='flex items-center absolute top-4 right-4 lg:right-24 gap-2'>
              <a href="https://www.linkedin.com/in/brunoafonso94/">
                <img src="/linkedin-icon.svg" className='h-8 md:h-14'/>
              </a>
              <a href="https://github.com/Brunoa94">
                <FaGithub className='text-3xl lg:text-5xl'/>
              </a>
              <a href="https://www.instagram.com/brunoa94/">
                <img src="/instagram-icon.svg" className='h-8 md:h-14'/>
              </a>
            </div>  
        </header>
        <div className='flex flex-col px-4 w-full items-center pb-10 h-less-700:pb-0 md:px-0 md:pb-0 md:flex-col md:gap-6 md:justify-center lg:flex-row lg:w-5/6'>
            <div className="h-full flex flex-col px-4 pb-6 w-full h-less-700:mt-4 lg:w-3/5 lg:pb-32 lg:justify-end">
            <div className='flex flex-col items-start relative'>
                <span className='text-xl text-gray-100 md:text-3xl mb-4 h-less-700:mb-2 font-reddit'>Bruno Afonso Dev</span>
                <div className='flex items-center'>{
                Array.from("Frontend").map((item, index) => (
                    <motion.span
                    key={index}
                    className='text-5xl md:text-7xl text-violet-500 font-reddit'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: index / 7,
                    }}
                    >
                    {item}
                    </motion.span>
                ))
            }</div>
            <div className='flex items-center'>{
              Array.from("Developer.").map((item, index) => (
                <motion.span
                  key={index} 
                  className='text-5xl md:text-7xl text-gray-200 font-reddit'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: index / 7,
                  }}
                >
                  {item}
                </motion.span>
              ))
            }</div>
          </div>
            
                <div className='flex items-end mt-4 gap-4'>
                  <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }} 
                  className='bg-violet-600 flex items-center justify-center px-10 py-2 w-fit cursor-pointer rounded-xl'>
                    <a href="./curriculum_vitae.pdf" download="Curriculum - Bruno Afonso" className='text-white font-reddit text-base uppercase'>Resume</a>
                  </motion.div>
                  <motion.a
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }} 
                  href="mailto:bruno.afonso94@hotmail.com" 
                  className='text-2xl uppercase text-gray-200 underline pb-1'>Contact Me</motion.a>
                </div>
            </div>
            <motion.img
            initial={{ width: 0 }}
            animate={{ width: 400 }}
            transition={{
                duration: 1,
            }} 
            className='w-[400px] hidden rounded-[25%] lg:flex' src="/photo-111.png"/>
        </div>
        <motion.div
         className='h-6 bg-gray-300 w-full border-t-4 border-violet-600 shrink-0 md:mt-7'
         initial={{ width: 0 }}
         animate={{ width: "100%" }}
         transition={{
           duration: 2,
         }}/> 
    </div>
  )
}

export default Home