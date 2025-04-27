import React from 'react'
import image from '../../public/image.jpg'
import { BiLogoGithub, BiLogoLinkedin, BiLogoYoutube } from 'react-icons/bi'


const Home = () => {
  return (
    <div id='Home' className="flex min-h-screen w-full items-center justify-center">
      
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img src={image} alt="" className='w-[250px] sm:w-[300px] rounded-full'/>

        <div className='space-y-1 sm:space-y-3'>
          <h1 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>Kavindi Gamage</h1>
          <h3 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>Web Developer</h3>
          <p className='max-w-[500px] text-sm text-gray-500'>Welcome to my portfolio! I’m a creative web developer who loves building clean, responsive, and easy-to-use websites. I use tools like React.js and Tailwind CSS to create smooth, modern web experiences. Take a look at my work, learn about my experience, and feel free to reach out—I’d love to be part of your next project!

</p>

        </div>

        

        <div className="flex gap-4">
          <a
            href="https://github.com/Kavindi16"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <BiLogoGithub
              className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white
                 transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600
                 md:h-12 md:w-12"
            />
          </a>

          <a
            href="https://linkedin.com/in/YourLinkedInID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <BiLogoLinkedin
              className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white
                 transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600
                 md:h-12 md:w-12"
            />
          </a>

          <a
            href="https://youtube.com/@KavindiGamaralalage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
          >
            <BiLogoYoutube
              className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white
                 transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600
                 md:h-12 md:w-12"
            />
          </a>
        </div>


      </div>
    
    </div>
  )
}

export default Home