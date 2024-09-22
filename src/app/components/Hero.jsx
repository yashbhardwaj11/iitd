import Link from 'next/link'
import React from 'react'
import { RiCodeBlock } from "react-icons/ri";

function Hero() {
  return (
    <section id='Hero' className='relative bg-cover w-screen  bg-center h-screen md:h-[80vh] flex  ' style={{
      backgroundImage: "url('/herobackground.png')", // Adjust to your actual image path
    }} >
       <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className='z-10 mx-auto mt-5 px-8 ' >
        <object
          data="/logo.svg" // Adjust this to the actual path
          type="image/svg+xml"
          className="w-32 h-32 md:w-40 md:h-40 mb-4 md:mb-5 "
        />
        <h1 className='text-white text-center font-extrabold text-4xl md:text-5xl lg:text-7xl md:mb-5 ' >DIGITAL INDIA HACKATHON &apos;24</h1>
        <p className='text-white mb-5 md:mb-10 text-lg md:text-2xl text-center max-w-5xl mx-auto ' >We are hosting 36hrs (two days-one night) Web- Mobile- Digital Media DAPP #Hackathon at IIT-Delhi designed for Blockchain (Web3)/ AI/ ML, SaaS entrepreneurs and Legal domain professionals focused in Defence, DeepTech and Women-led enterprises.</p>
        <div className='flex mb-5 items-center justify-center'>
      <Link
        href="#"
        className="bg-[#007F40] hover:bg-green-700 group flex items-center hover:px-14 text-white font-bold py-3 px-8 rounded-sm text-xl transition-all duration-300"
      >
        REGISTER NOW
        {/* Icon */}
        <RiCodeBlock className="ml-5 hidden group-hover:block transition-all duration-1000 group-hover:translate-x-2 transform" />
      </Link>
    </div>
        <div className='flex items-center justify-center' >
        <Link href="#" className="text-xl font-semibold underline text-white">
            INTERESTED IN SPONSORING?
          </Link>
        </div>
      </div>

    </section>
  )
}

export default Hero