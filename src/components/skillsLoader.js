import React, {useEffect, useRef, useState} from 'react'
import {useInView, motion} from 'framer-motion'

const SkillsLoader = () => {
    const Skill = (title, level, color) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
        const [expand, setExpand] = useState(false);

        useEffect(() => {
            setTimeout(() => {
                setExpand(true)
            }, 2000)
        }, [isInView]);

        const colorToUse = color === "orange" ? "bg-orange-700" : 
        color === "red" ? "bg-red-800" : 
        color === "violet" ? "bg-violet-700" : "bg-yellow-700";

        return(
            <div ref={ref} className='flex flex-col w-full'>
                <span className='text-xl font-bold font-reddit'>{title}</span>
                <motion.div initial={{ width: 0, height: 16 }}
                animate={{ width: `${isInView ? `${level}%` : 0}`, height: `${isInView ? "16px" : "32px"}` }}
                transition={{
                    duration: 2,
                }} 
                className={`rounded-sm ${colorToUse}`}/>
            </div>
        )
    }

  return (
    <div className='flex flex-col items-center w-full px-4 bg-gray-100'>
        <span className='mb-4 text-3xl text-violet-950 font-bold font-reddit'>Skills</span>
        <div className='flex w-full flex-col gap-4'>
            {Skill("CSS / Tailwind CSS", 80)}
            {Skill("HTML", 80)}
            {Skill("React / NextJS", 80)}
            {Skill("Ruby on Rails", 40, "red")}
            {Skill("SEO", 50, "violet")}
            {Skill("Typescript", 60, "orange")}
            {Skill("NodeJS", 40, "red")}
            {Skill("Github", 60, "orange")}
        </div>
        <div className='flex items-center mt-6 w-full justify-start gap-3'>
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

export default SkillsLoader