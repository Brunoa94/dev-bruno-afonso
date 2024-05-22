import React from 'react'

function Timeline() {
    const timelineComponent = (date, title, text, link, linkText, linkIcon) => {
        return(
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-black">{title}</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">{text}</p>
                {
                    (link && linkText) &&
                    <a href={link} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  focus:z-10 focus:ring-4 focus:outline-none border-gray-600 ">
                        {linkText}
                        {linkIcon}
                    </a>
                }
            </li>
        )
    }
  return (
    <div className="w-full px-11 py-8">
        <h1 className='mb-8'>what i've been doing this past years...</h1>
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
            {timelineComponent("January 2020 - December 2020", 
            "Application UI code in Tailwind CSS", 
            "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.", 
            "/",
            "linkText",
            <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            )}
            {timelineComponent("", "Hotelcracy Project", "Backend Development where the main focus was the connection between different APIs", "https://www.hotelcracy.com/", <img className='w-20' src="https://www.hotelcracy.com/assets/images/hc_logo.png"/>)}              
            {timelineComponent("January 2018 - January 2019", "Internship in Instituto Pedro Nunes as Backend Developer", "",)}              
        </ol>
    </div>

  )
}

export default Timeline