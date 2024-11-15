import React, { useState, useEffect } from 'react'
import { FaUserGraduate, FaMedal } from "react-icons/fa";
import { GiCanoe } from "react-icons/gi";
import { PiGraduationCap } from "react-icons/pi";
import { LiaMedalSolid } from "react-icons/lia";
import {motion} from "framer-motion";



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
  const [isVisible, setIsVisible] = useState(false); // State to trigger the animation

  const [isAnimating, setIsAnimating] = useState(false); // Control the animation

  // The long text you want to animate
  const text = `Since childhood, I have always been passionate about numbers and solving math problems. Without being aware of what programming was, in 2012 I started studying Computer Engineering and finished my Master’s Degree in 2019, immediately getting my first job as a Trainee Backend Engineer.

This first job taught me patterns and practices that I still apply on a daily basis. Code quality is always the top priority; staying updated with the latest technologies in a market that is constantly growing is important, and being passionate about what we do is a huge plus.

A few years later, I began learning Frontend development on my own through online courses, and just 6 months after, I got a job at one of the biggest alternative app stores companies, Aptoide. What a challenge it was in the beginning. Knowing that my daily work was impacting millions of people was challenging and definitely pushed my limits. Focusing on performance details significantly improved my skills as a Frontend developer, and now I feel that I can say I’m ready for anything.

My journey as a software developer always had a parallel journey as a high-performance athlete. Between 2010 and 2024, I was part of the National Canoe Sprint team, participating in dozens of European and World Championships, and in the Olympic Qualifier for Tokyo 2020.

Keeping two hard journeys in parallel was a challenge, but looking back, I don’t regret anything. My discipline, commitment, and hard work are intrinsic soft skills, and I can’t be more thankful for the decisions that young Bruno made. What a journey it’s been!`;

  // Split the text into an array of paragraphs
  const paragraphs = text.split("\n");

  // Create an Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Set isVisible to true when the element comes into view
          setIsAnimating(true); // Start the animation when the component enters the viewport
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    const element = document.getElementById("writing-machine");
    if (element) {
      observer.observe(element); // Start observing the element
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Cleanup observer when component unmounts
      }
    };
  }, []);

  return (
    <div className='w-full flex flex-col items-center py-14 px-12 md:items-center lg:px-40'>
      <span className='text-3xl text-gray-100 font-bold mb-8 font-reddit'>About Me</span>
      <div className='flex flex-col items-start md:px-6'>
        <div className='flex w-full items-center flex-col space-y-2 gap-4 mb-6 lg:mb-0 md:flex-row md:space-y-0 md:items-start md:h-full'>
          {experienceCard(<LiaMedalSolid className='text-[#03A062] text-5xl'/>, "Experience", "4+ Years", "Frontend Development")}
          {experienceCard(<PiGraduationCap className='text-[#03A062] text-5xl'/>, "Graduation", "University of Coimbra", "Master's Degree")}
          {experienceCard(<GiCanoe className='text-[#03A062] text-5xl'/>, "Sports", "16 years Pro Athlete", "20+ International Competitions")}
        </div>
        <div
          id="writing-machine" // Add an id to observe this specific div
          className="my-4 text-gray-200 font-reddit text-justify" // Apply your Tailwind classes
          style={{
            fontFamily: "monospace", // Fallback font-family for the typing effect
            fontSize: "16px",
            whiteSpace: "pre-wrap", // Preserve line breaks
            position: "relative",
            overflow: "hidden",
            lineHeight: "1.2",
          }}
        >
      {paragraphs.map((paragraph, pIndex) => (
        <div key={pIndex} className='mt-4'>
          {paragraph.split("").map((char, index) => (
            <motion.span
            className='text-green-500 font-reddit text-justify'
            key={index}
              initial={{ opacity: 0 }} // Initial state for opacity
              animate={{ opacity: isAnimating ? 1 : 0 }} // Trigger animation based on isAnimating state
              transition={{
                delay: (pIndex * 0.1 + index * 0.01), // Add delay for each letter with some paragraph offset
                duration: 0.01,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}

      {/* Blinking cursor */}
      <motion.div
        style={{
          position: "absolute",
          right: "0",
          top: "100%",
          width: "2px",
          height: "24px",
          backgroundColor: "#fff", // Change to white for better visibility on dark backgrounds
        }}
        animate={{
          opacity: isAnimating ? [1, 0] : 0, // Blink cursor only when the text is animating
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror", // Make the cursor blink
          duration: 0.5,  // Blink speed
        }}
      />
    </div>
      </div>
    </div>
  )
}

export default OverYears