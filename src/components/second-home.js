import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";

const Home = () => {
    const [startAnimation, setStartAnimation] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);
  return (
    <div className='h-screen w-screen max-h-screen bg-gray-100 flex flex-col justify-center lg:items-center'>
        <header className='absolute top-0 w-full flex items-center p-4 lg:justify-center pr-6'>
            <div className='rounded-full bg-violet-950 h-20 w-20 flex items-center justify-center'>
            <span className='text-white text-xl font-bold'>BA</span>
            </div>
            <div className='flex items-center absolute right-2 md:right-4 lg:right-24 gap-2'>
                <img src="/linkedin-icon.svg" className='h-14'/>
                <img src="/github-icon.svg" className='h-14'/>
                <img src="/instagram-icon.svg" className='h-14'/>
            </div>  
        </header>
        <div className='flex flex-col w-full items-center pb-10 md:pb-0 md:flex-col md:gap-6 md:justify-center lg:flex-row lg:w-5/6'>
            <div className="h-full flex flex-col pb-6 w-11/12 lg:w-3/5 lg:pb-32 lg:justify-end">
            <div className='flex flex-col items-start relative'>
                <span className='text-3xl text-gray-300 mb-4 font-reddit'>Bruno Afonso</span>
                <div className='flex items-center'>{
                Array.from("Frontend").map((item, index) => (
                    <motion.span
                    key={index}
                    className='text-7xl text-green-800 font-reddit'
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
                  className='text-7xl text-violet-950 font-reddit'
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
            <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
                }
            }} className='pt-4 md:text-xl text-green-800 font-reddit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante non velit eleifend fermentum.</motion.span>
                <motion.div  
                initial={{ opacity: 0, scale: 0.5 }}
                animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
                transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
                }} className='flex mt-6 lg:mt-6 relative'>
                <h4 className='pr-2 mt-auto text-violet-950 md:text-lg font-reddit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante non velit eleifend fermentum.</h4>
                <h4 className='text-violet-950 pl-2 text-base md:text-lg font-reddit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante non velit eleifend fermentum.</h4>
                </motion.div>
                <div className='flex items-end mt-4 gap-4'>
                  <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }} 
                  className='bg-violet-950 flex items-center justify-center px-10 py-2 w-fit cursor-pointer rounded-xl'>
                    <span className='text-white font-reddit text-base uppercase'>Resume</span>
                  </motion.div>
                  <motion.a
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }} 
                  href="" 
                  className='text-2xl uppercase text-violet-950 underline pb-1'>Contact Me</motion.a>
                </div>
            </div>
            <motion.img
            initial={{ width: 0 }}
            animate={{ width: 400 }}
            transition={{
                duration: 1,
            }} 
            className='w-[400px] rounded-full hidden lg:flex' src="/photo-1.png"/>
        </div>
        <motion.div
         className='h-8 bg-violet-950 w-full border-t-4 border-green-800 shrink-0 md:mt-7'
         initial={{ width: 0 }}
         animate={{ width: "100%" }}
         transition={{
           duration: 2,
         }}/> 
    </div>
  )
}

export default Home