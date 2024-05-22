import React from 'react'
import { FaUserGraduate, FaMedal } from "react-icons/fa";
import { GiCanoe } from "react-icons/gi";
import { PiGraduationCap } from "react-icons/pi";
import { LiaMedalSolid } from "react-icons/lia";



function OverYears() {
  const experienceCard = (icon, firstLine, secondLine, thirthLine) => {
    return(
      <div className='flex flex-col items-center rounded-xl w-3/4 space-y-1 md:w-full'>
        {icon}
        <span className='text-violet-950 font-bold text-lg'>{firstLine}</span>
        <span className='text-base text-violet-950'>{secondLine}</span>
        <span className='text-base text-violet-950'>{thirthLine}</span>
      </div>
    )
  }


  return (
    <div className='w-full flex flex-col items-center py-14 px-12 md:items-center lg:px-40 bg-gray-100'>
      <span className='text-3xl text-violet-950 font-bold mb-8 font-reddit'>About Me</span>
      <div className='flex flex-col items-start md:px-6'>
        <div className='flex w-full items-center flex-col space-y-2 gap-4 mb-6 lg:mb-0 md:flex-row md:space-y-0 md:items-start md:h-full'>
          {experienceCard(<LiaMedalSolid className='text-violet-950 text-5xl'/>, "Experience", "4+ Years", "Frontend Development")}
          {experienceCard(<PiGraduationCap className='text-violet-950 text-5xl'/>, "Graduation", "University of Coimbra", "Master's Degree")}
          {experienceCard(<GiCanoe className='text-violet-950 text-5xl'/>, "Sports", "16 years Pro Athlete", "20+ International Competitions")}
        </div>
        <div className='w-full flex flex-col items-center'>
            <p className='my-4 text-violet-950 font-reddit'>I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
            <p className='my-4 text-violet-950 font-reddit'>I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
            <img className='w-[300px] mt-3 rounded-full flex lg:hidden' src="/photo-1.png"/>
        </div>
      </div>
    </div>
  )
}

export default OverYears