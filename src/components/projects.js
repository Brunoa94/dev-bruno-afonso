import React from 'react'
import ProjectCard from './projectCard';
import { CiSquareMore } from "react-icons/ci";


export default function Projects() {
  return (
    <div className='flex flex-col items-center px-4 py-6 lg:py-28 bg-gray-100'>
      <span className='text-3xl text-violet-950 font-bold mb-8 font-reddit'>Projects</span>
      <div className='lg:w-4/6 gap-4'>
      {ProjectCard("Aptoide",
          "/projects/aptoide-2.png",
          "Aptoide is a web-based independent app store offering a wide range of apps and games. As one of the biggest in the market, it reaches millions of users daily. It provides a flexible alternative for discovering and downloading apps directly. My development in this project was a total refactor in the frontend.",
          "HTML; Styled Components; NextJS; CSS; Redux; Express",
          "githublink",
          "weblink", true, "top")}
      <div className='w-full flex flex-col items-center justify-center gap-8 mt-8 lg:grid lg:grid-cols-2'>
          {ProjectCard("CryptoTracker",
          "/projects/cryptotracker.png",
          undefined,
          "HTML; Styled Components; NextJS",
          "githublink",
          "weblink", false, "left")}
          {ProjectCard("USA Magazine",
          "/projects/news-magazine.png",
          undefined,
          "HTML; Styled Components; NextJS",
          "githublink",
          "weblink", false, "right")}
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-8 mt-8'>
          {ProjectCard("Pro Energy",
          "/projects/gym.png",
          undefined,
          "HTML; Styled Components; NextJS",
          "githublink",
          "weblink", false, "left")}
      </div>
      </div>
      {/* <div className='mt-8 w-full border-rad flex items-center justify-center bg-violet-950 p-4 rounded-xl cursor-pointer lg:w-fit lg:ml-auto'>
        <CiSquareMore className='text-3xl text-white'/>
        <span className='text-white ml-2'>More Projects on Github</span>
      </div> */}
    </div>
  )
}

