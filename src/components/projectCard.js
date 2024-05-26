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
        <div style={animation} ref={ref} class="w-full relative flex flex-col rounded-xl max-h-[600px] bg-white bg-clip-border text-gray-700 shadow-solid-right-bottom">
            <div class={`hidden w-full relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 lg:flex max-h-[${big ? "320px" : "270px"}]`}>
                <img
                src={img}
                alt="img-blur-shadow"
                layout="fill"
                />
            </div>
            <div class="p-6">
                <h5 class="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased font-roboto">
                {title}
                </h5>
                {
                    description &&
                    <p class="block text-base leading-relaxed text-inherit antialiased font-reddit">
                        {description}
                    </p>
                }
            </div>
            <div className='p-6 pt-0'>
                <p class="block text-base font-light leading-relaxed text-inherit antialiased font-reddit">
                <strong className='font-roboto'>Technologies:</strong> {technologies}
                </p>
            </div>
            <div class="flex flex-col p-6 pt-0 lg:flex-row">
                {
                    githublink &&
                    <a
                    class="flex items-center select-none rounded-lg bg-violet-950 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                    href={githublink}
                    >
                    <FaGithub className='mr-2 text-xl'/> Github code
                    </a>
                }
                {
                    webLink &&
                    <a
                    class="flex items-center select-none mt-2 rounded-lg bg-green-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:ml-2 lg:mt-0"
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