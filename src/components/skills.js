import React, { useRef } from 'react';
import {motion, useInView} from 'framer-motion';

const Skills = () => {

    const Skill = (name, x, y, color) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return(
            <motion.div
            ref={ref}
            whileHover={{scale: 1.1}}
            initial={{x: 0, y: 0}}
            animate={isInView ? {
                x: x, y: y
            }: {}}
            transition={{duration: 2.5}}
            className={`flex items-center justify-center rounded-full font-semibold text-white p-5 shadow-dark cursor-pointer absolute ${color}`}>
                {name}
            </motion.div>
        )
    }
  return (
    <div className='hidden md:flex w-full items-center justify-center flex-col'>
        <div className='w-full h-[500px] bg-gray-100 p-8 flex items-center justify-center flex-col re'>
        <span className='text-3xl text-violet-950 font-bold font-reddit'>Skills</span>
        <div className='w-[900px] h-[500px] relative flex items-center justify-center rounded-full bg-circularEllipse'>
            <motion.div whileHover={{scale: 1.1}} className='flex items-center justify-center bg-violet-950 rounded-full font-semibold text-white p-5 shadow-dark cursor-pointer'>
                Web
            </motion.div>
            {Skill("CSS", -50, 100, "bg-yellow-700")}
            {Skill("Tailwind CSS", 50, -100, "bg-yellow-700")}
            {Skill("HTML", -150, -150, "bg-yellow-700")}
            {Skill("NextJS", 240, -140, "bg-yellow-700")}
            {Skill("React", -250, 120, "bg-yellow-700")}
            {Skill("Typescript", -350, 0, "bg-orange-700")}
            {Skill("Github", 350, 0, "bg-orange-700")}
            {Skill("Ruby on Rails", 260, 180, "bg-red-800")}
            {Skill("NodeJS", -300, -170, "bg-red-800")}
            {Skill("SEO", -200, 200, "bg-violet-700")}
        </div>
    </div>
    
        <div className='flex items-center pt-6 w-full justify-center gap-3 bg-gray-100'>
            <div className='flex items-center'>
                <div className='h-4 w-4 bg-yellow-700'/>
                <span className='ml-2 text-gray-400 font-reddit'>Advanced</span>
            </div>
            <div className='flex items-center'>
                <div className='h-4 w-4 bg-orange-700'/>
                <span className='ml-2 text-gray-400 font-reddit'>High</span>
            </div>
            <div className='flex items-center'>
                <div className='h-4 w-4 bg-violet-700'/>
                <span className='ml-2 text-gray-400 font-reddit'>Medium</span>
            </div>
            <div className='flex items-center'>
                <div className='h-4 w-4 bg-red-800'/>
                <span className='ml-2 text-gray-400 font-reddit'>Basic</span>
            </div>
        </div>
    </div>
  )
}

export default Skills