import React from 'react'
import ProjectCard from './projectCard';
import { CiSquareMore } from "react-icons/ci";


export default function Projects() {
  return (
    <div className='flex flex-col items-center px-4 py-6 lg:py-28'>
      <span className='text-3xl text-gray-100 font-bold mb-8 font-reddit'>Projects</span>
      <div className='lg:w-4/6 gap-4'>
      {ProjectCard("Aptoide",
          "/projects/aptoide-2.png",
          "Aptoide is a web-based independent app store offering a wide range of apps and games. As one of the biggest in the market, it reaches millions of users daily. It provides a flexible alternative for discovering and downloading apps directly. My development in this project was a total refactor in the frontend.",
          "HTML; Styled Components; NextJS; CSS; Redux; Express",
          undefined,
          "https://en.aptoide.com", true, "top")}
      <div className='w-full flex flex-col items-center justify-center gap-8 mt-8 lg:grid lg:grid-cols-2'>
          {ProjectCard("CryptoTracker",
          "/projects/cryptotracker.png",
          "A small website where you can find live prices and changes of the main cryptocurrencies.",
          "HTML; Styled Components; NextJS",
          "https://github.com/Brunoa94/crypto_tracker",
          "https://crypto-tracker-nine-sable.vercel.app/", false, "left")}
          {ProjectCard("USA Magazine",
          "/projects/news-magazine.png",
          "A website where you can check live news from the United States on different topics.",
          "HTML; Tailwind CSS; NextJS",
          "https://github.com/Brunoa94/usa-magazine",
          "https://usa-magazine.vercel.app/", false, "right")}
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-8 mt-8'>
          {ProjectCard("Pro Energy",
          "/projects/gym.png",
          "A website to promote a local gym, developed specifically for desktop versions.",
          "HTML; Styled Components; NextJS",
          "https://github.com/Brunoa94/gym-pro",
          "https://gym-pro-puce.vercel.app/", false, "left")}
      </div>
      </div>
      {/* <div className='mt-8 w-full border-rad flex items-center justify-center bg-violet-950 p-4 rounded-xl cursor-pointer lg:w-fit lg:ml-auto'>
        <CiSquareMore className='text-3xl text-white'/>
        <span className='text-white ml-2'>More Projects on Github</span>
      </div> */}
    </div>
  )
}

