import React from 'react'

function Groups() {
  return (
    <div className='w-screen flex flex-col items-center space-y-10 py-14 lg:justify-evenly lg:items-start lg:pt-0 lg:px-28 lg:w-full'>
      <div className="w-4/5 p-8 bg-green-600 rounded-xl lg:w-4/6 lg:shrink-0">
        <h1 className='pb-2 text-white text-3xl'>Engineering</h1>
        <span className='text-white font-reddit'>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</span>
      </div>
      <div className='w-4/5 p-8 bg-violet-950 rounded-xl lg:w-4/6 lg:ml-auto lg:-mt-32'>
        <h1 className='pb-2 text-white text-3xl'>Sports</h1>
        <span className='text-white font-reddit'>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</span>
      </div>
    </div>
  )
}

export default Groups