import React from 'react'

const Experience = () => {
  return (
    <div id="Experience" className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Experience</h1>

      <div className='flex flex-wrap gap-0 md:flex-nowrap md:gap-10'>
        <div className='flex-1'>
          <div className='relative space-y-1 border-1-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Experience 1</h3>
            <p className='font-light text-lg text-gray-600'>Front-End Developer</p>
            <p className='font-light text-lg text-gray-600'>Freelance | Jan 2024 – Present

</p>
            <p className='text-sm text-gray-600'>Built responsive websites using React.js and Tailwind CSS for local businesses. Collaborated with clients to understand needs and deliver custom features like contact forms, galleries, and interactive menus. Optimized performance and accessibility across mobile and desktop devices.</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>

          <div className='relative space-y-1 border-1-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Experience 2</h3>
            <p className='font-light text-lg text-gray-600'>Web Development Intern</p>
            <p className='font-light text-lg text-gray-600'>TechLabs Solutions | Jun 2023 – Dec 2023</p>
            <p className='text-sm text-gray-600'>Assisted in developing components for a company dashboard using React and REST APIs. Wrote clean, reusable code and fixed UI bugs to improve user experience. Gained hands-on experience with Git, version control, and Agile workflow.</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>

          <div className='relative space-y-1 border-1-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Experience 3</h3>
            <p className='font-light text-lg text-gray-600'>IT Assistant (Part-Time)</p>
            <p className='font-light text-lg text-gray-600'>Dialog Axiata PLC | 2022 – 2023

</p>
            <p className='text-sm text-gray-600'>Provided technical support and managed updates to internal web tools. Helped with customer service reports using data analysis tools. Contributed to small-scale ERP system improvements and internal documentation.</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>

        </div>
        
      </div>
    
    </div>
  )
}

export default Experience