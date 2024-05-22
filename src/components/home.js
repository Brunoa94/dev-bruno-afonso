import React, {useEffect, useState} from 'react'
import { AiOutlineThunderbolt, AiOutlineDoubleRight, AiOutlineGithub, AiOutlineMeh, AiOutlineAlert, AiOutlineRise } from "react-icons/ai";
import {motion} from "framer-motion";


const Home = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [changeColor, setChangeColor] = useState("");
  const colors = ["#2e1065", "#4a044e", "#4c0519", "#082f49", "#052e16", "#451a03", "#450a0a"]
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2000);
    
    const changeColor = setInterval(() => {

    })

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className='h-screen'>
      <header className='relative w-full flex items-center p-4 justify-center pr-6'>
        <div className='rounded-full bg-violet-950 w-20 h-20 flex items-center justify-center'>
          <span className='text-white text-2xl font-bold'>BA</span>
        </div>
        <div className='flex items-center absolute right-24 gap-2'>
          <img src="/linkedin-icon.svg" className='h-14'/>
          <img src="/github-icon.svg" className='h-14'/>
          <img src="/instagram-icon.svg" className='h-14'/>
        </div>  
      </header>
      <div className='carousel-item flex flex-col h-full shrink-0 lg:flex-row'>
      <div className='w-full h-full bg-gray-100 flex items-center justify-center'>
        <div className="h-full flex flex-col pb-6 w-11/12 lg:w-3/5 lg:pb-32 lg:justify-end">
          <div className='flex flex-col items-start pt-36 relative'>
            {/* <AiOutlineThunderbolt className='absolute top-20' style={{fontSize: "3.25rem", color: "white"}}/>
            <AiOutlineRise className='absolute top-20 right-20' style={{fontSize: "3.25rem", color: "white"}}/> */}
            <div className='flex items-center'>{
              Array.from("Frontend").map((item, index) => (
                <motion.span
                  key={index} // Remember to add a unique key when rendering elements in a loop
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
                  key={index} // Remember to add a unique key when rendering elements in a loop
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
            {/* <AiOutlineDoubleRight style={{fontSize: "3.25rem", color: "white", position: "absolute", right: "18px", top: "-220px", color: "rgba(22, 163, 74)"}}/> */}
            <h4 className='pr-2 mt-auto text-violet-950 md:text-lg font-reddit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante non velit eleifend fermentum.</h4>
            <h4 className='text-violet-950 pl-2 text-base md:text-lg font-reddit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante non velit eleifend fermentum.</h4>
          </motion.div>
        </div>
      </div>
      <div className='relative w-full bg-gray-100 flex items-end justify-center lg:h-5/6 lg:w-4/12'>
        {/* <AiOutlineMeh className='absolute left-4 top-20' style={{fontSize: "3.25rem", color: "white"}}/>
        <AiOutlineAlert className='absolute right-20 bottom-10' style={{fontSize: "3.25rem", color: "white"}}/> */}
        <div className='relative bottom flex w-48 h-48 items-end justify-center z-20 md:w-56 md:h-56 lg:absolute lg:-left-36 lg:w-80 lg:h-80 lg:bottom-0'>
          {/* <img src="/image.png" className='w-60 z-10 lg:w-72'/> */}
        </div>
      </div>
      {/* <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div class="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
      </div> */}
    </div>
    </div>
  
  )
}

export default Home