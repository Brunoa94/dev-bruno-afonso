import React from 'react'
import ProjectCard from './projectCard';
import { CiSquareMore } from "react-icons/ci";


export default function Projects() {
  return (
    <div className='flex flex-col items-center px-4 py-6 lg:py-28'>
      <span className='text-3xl text-gray-100 font-bold mb-8 font-reddit'>Projects</span>
      <div className='w-full lg:w-5/6 flex flex-col gap-8'>
      {ProjectCard("Aptoide",
          "/projects/aptoide-2.png",
          "Aptoide is a web-based independent app store offering a wide range of apps and games. As one of the biggest in the market, it reaches millions of users daily. It provides a flexible alternative for discovering and downloading apps directly. My development in this project was a total refactor in the frontend.",
          "HTML; Styled Components; NextJS; CSS; Redux; Express",
          undefined,
          "https://en.aptoide.com", true, "left")}
          {ProjectCard("Trelol",
          "/projects/trello.png",
          "A Trello clone built with Vite, HTML, and Tailwind CSS for the frontend, providing a responsive and modern UI. The backend uses Node.js with GraphQL for efficient API communication and MongoDB for persistent storage of boards, lists, and tasks. To get a resume of the descriptions of an entire column there is an integration with GPT 4.0.",
          "Vite; HTML; Tailwind CSS; Node.js; GraphQL; MongoDB",
          "https://github.com/Brunoa94/trello_dashboard_front",
          "https://trello-dashboard-front-gb1k.vercel.app/", false, "right")}
          {ProjectCard("CryptoTracker",
          "/projects/cryptotracker.png",
          "A small website where you can find live prices and changes of the main cryptocurrencies.",
          "HTML; Styled Components; NextJS",
          "https://github.com/Brunoa94/crypto_tracker",
          "https://crypto-tracker-nine-sable.vercel.app/", false, "right")}
          {ProjectCard("USA Magazine",
          "/projects/news-magazine.png",
          "A website where you can check live news from the United States on different topics.",
          "HTML; Tailwind CSS; NextJS",
          "https://github.com/Brunoa94/usa-magazine",
          "https://usa-magazine.vercel.app/", false, "left")}
          {ProjectCard("Pro Energy",
          "/projects/gym.png",
          "A website to promote a local gym, developed specifically for desktop versions.",
          "HTML; Styled Components; NextJS",
          "https://github.com/Brunoa94/gym-pro",
          "https://gym-pro-puce.vercel.app/", false, "right")}
          {ProjectCard("E-tool Market",
          "/projects/e-tool.png",
          "In progress",
          "HTML; Tailwind CSS; NextJS; Material Tailwind; GraphQL; MongoDB",
          undefined,
          undefined, false, "right")}
      </div>
      {/* <div className='mt-8 w-full border-rad flex items-center justify-center bg-violet-950 p-4 rounded-xl cursor-pointer lg:w-fit lg:ml-auto'>
        <CiSquareMore className='text-3xl text-white'/>
        <span className='text-white ml-2'>More Projects on Github</span>
      </div> */}
    </div>
  )
}

