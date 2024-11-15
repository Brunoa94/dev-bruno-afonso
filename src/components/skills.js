import React, { useRef } from 'react';
import {motion, useInView} from 'framer-motion';
import { FaCss3Alt, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiRubyonrails } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {

    const Skill = (name, x, y, color, icon, text) => {
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
            className={`flex items-center justify-center rounded-full font-semibold text-white p-5 shadow-dark cursor-pointer absolute bg-spheres h-24 w-24 shadow-2xl flex-col`}>
                
                {icon}
                <span className='text-xs mt-1'>{text}</span>
            </motion.div>
        )
    }
  return (
    <div className='hidden md:flex w-full items-center justify-center flex-col'>
        <div className='w-full h-[500px] p-8 flex items-center justify-center flex-col re'>
        <span className='text-3xl text-gray-100 font-bold font-reddit'>Technologies</span>
        <div className='w-[900px] h-[500px] relative flex items-center justify-center rounded-full bg-circularEllipse'>
            <motion.div whileHover={{scale: 1.1}} className='flex items-center justify-center h-20 w-20 bg-yellow-500 rounded-full font-semibold text-white p-5 shadow-dark cursor-pointer'>
                Web
            </motion.div>
            {Skill("CSS", -50, 100, "bg-yellow-700", <FaCss3Alt className='text-3xl shrink-0'/>, "CSS")}
            {Skill("Tailwind CSS", 50, -100, "bg-yellow-700", <SiTailwindcss className='text-3xl shrink-0'/>, "Tailwind")}
            {Skill("HTML", -150, -150, "bg-yellow-700", <SiHtml5 className='text-3xl shrink-0'/>, "HTML5")}
            {Skill("NextJS", 240, -140, "bg-yellow-700", <TbBrandNextjs className='text-3xl shrink-0'/>, "NextJS")}
            {Skill("React", -250, 120, "bg-yellow-700", <FaReact className='text-3xl shrink-0'/>, "ReactJS")}
            {Skill("Typescript", -350, 0, "bg-orange-700", <BiLogoTypescript className='text-3xl shrink-0'/>, "Typescript")}
            {Skill("Github", 350, 0, "bg-orange-700", <FaGithub className='text-3xl shrink-0'/>, "Github")}
            {Skill("Ruby on Rails", 260, 180, "bg-red-800", <SiRubyonrails className='text-3xl shrink-0'/>, "Rails")}
            {Skill("NodeJS", -300, -170, "bg-red-800", <FaNodeJs className='text-3xl shrink-0'/>, "NodeJS" )}
        </div>
    </div>
        <div className='flex items-center pt-6 w-full justify-center gap-3 lg:hidden'>
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