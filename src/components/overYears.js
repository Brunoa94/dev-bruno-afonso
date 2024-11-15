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
        <span className='text-gray-200 font-bold text-lg'>{firstLine}</span>
        <span className='text-base text-gray-200'>{secondLine}</span>
        <span className='text-base text-gray-200 text-center'>{thirthLine}</span>
      </div>
    )
  }


  return (
    <div className='w-full flex flex-col items-center py-14 px-12 md:items-center lg:px-40'>
      <span className='text-3xl text-gray-100 font-bold mb-8 font-reddit'>About Me</span>
      <div className='flex flex-col items-start md:px-6'>
        <div className='flex w-full items-center flex-col space-y-2 gap-4 mb-6 lg:mb-0 md:flex-row md:space-y-0 md:items-start md:h-full'>
          {experienceCard(<LiaMedalSolid className='text-[#03A062] text-5xl'/>, "Experience", "4+ Years", "Frontend Development")}
          {experienceCard(<PiGraduationCap className='text-[#03A062] text-5xl'/>, "Graduation", "University of Coimbra", "Master's Degree")}
          {experienceCard(<GiCanoe className='text-[#03A062] text-5xl'/>, "Sports", "16 years Pro Athlete", "20+ International Competitions")}
        </div>
        <div className='w-full flex flex-col items-center'>
            <p className='my-4 text-gray-200 font-reddit text-justify'>My professional career as a Software Engineer started 5 years ago during the last year of my master's degree. However, I like to think that my most valuable skills began developing 16 years ago when I started my career in sports. Over the past 16 years, I have participated in dozens of European and World championships, competed for the Olympic Games, and significantly improved my focus, determination, consistency, and discipline. Being productive for one day is easy; being productive consistently over years it's not.</p>
            <p className='my-4 text-gray-200 font-reddit text-justify'>I began my career as a backend developer, mainly working with Ruby on Rails. Although I realized after some time that backend development was not my preferred area, I am grateful for that period because I worked with people who instilled good practices in me that I will carry forever. Code quality was and is always a top priority!</p>
            <p className='my-4 text-gray-200 font-reddit text-justify'>In 2020, I took a break from my professional career to dedicate myself 100% to my sports career, something I had never done before. I had always studied and trained simultaneously, and later, worked and trained. However, that year was my last chance to qualify for the Tokyo Olympic Games, which I narrowly missed by 0.7 seconds.</p>
            <p className='my-4 text-gray-200 font-reddit text-justify'>In 2021, I decided to shift my professional career and began learning Frontend programming with React on my own. By August, I secured my first job as a Frontend developer at Aptoide, which has been the biggest challenge of my career so far.</p>
            <p className='my-4 text-gray-200 font-reddit text-justify'>Aptoide has millions of page views per day, and as a novice frontend developer, it was daunting to think that my work would be visible to such a large audience. However, this challenge constantly pushed me to improve, and I am incredibly thankful for this experience. It's been an amazing ride.</p>
            <img className='w-[300px] mt-3 rounded-full flex lg:hidden' src="/photo-1.png"/>
        </div>
      </div>
    </div>
  )
}

export default OverYears