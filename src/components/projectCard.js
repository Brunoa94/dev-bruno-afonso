import React, { useRef } from 'react';
import {motion, transform, useInView} from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const ProjectCard = (title, img, description, technologies, githublink, webLink, big, position) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animation = position === "top" ? {
        transform: isInView ? "none": "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    } : position === "left" ? {
        transform: isInView ? "none": "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    } : {
        transform: isInView ? "none": "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }

    return (
        <div style={animation} ref={ref} class="flex-col md:flex-row w-full h-fit py-4 rounded-lg bg-transparent px-4 flex items-center relative z-20 shadow-[-1px_51px_69px_-54px_rgba(22,163,74,0.5)]">
            <div class={`flex flex-col align-items justify-center`}>
                <img
                src={img}
                alt="img-blur-shadow"
                className='rounded-lg shrink-0 h-full min-w-[250px] w-[250px]'
                />
            </div>
            <div className='flex flex-col gap-2 px-4'>
                <div class="">
                    <h5 class="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased font-roboto">
                    {title}
                    </h5>
                    {
                        description &&
                        <p class="block text-base leading-relaxed text-inherit antialiased font-reddit line-clamp-3">
                            {description}
                        </p>
                    }
                </div>
                <div className='flex items-center'>
                    <div className='pt-0'>
                        <p class="block text-base font-light leading-relaxed text-inherit antialiased font-reddit">
                        <strong className='font-roboto font-bold'>Technologies:</strong> {technologies}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex gap-2 md:flex-col pt-0 mt-4 md:mt-0 md:ml-auto">
                {
                    githublink &&
                    <a
                    class="h-[44px] flex items-center justify-center select-none rounded-lg bg-violet-950 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none whitespace-nowrap"
                    data-ripple-light="true"
                    href={githublink}
                    >
                    <FaGithub className='mr-2 text-xl'/> Github code
                    </a>
                }
                {
                    webLink &&
                    <a
                    class="w-[162px] flex items-center justify-center select-none rounded-lg bg-green-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:mt-0"
                    data-ripple-light="true"
                    href={webLink}
                    >
                    <BiWorld className='mr-2 text-xl'/> Website
                    </a>
                }
                
            </div>
        </div>
    )
}

export default ProjectCard