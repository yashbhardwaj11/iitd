"use client";
import Link from 'next/link';
import React from 'react';
import { RiCodeBlock } from "react-icons/ri";
import { motion } from 'framer-motion';
import './shine.css'; // Importing the shine.css

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="Hero"
      className="relative bg-cover w-screen bg-center height: 250vh; md:h-[100vh] flex"
      style={{
        backgroundImage: "url('/herobackground.png')", // Adjust to your actual image path
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="absolute inset-0 bg-black bg-opacity-70"></motion.div>

      <motion.div className="z-10 mx-auto mt-12 px-8 ">
        <motion.object
          data="/logo.svg" // Adjust this to the actual path
          type="image/svg+xml"
          className="w-32 h-32 md:w-40 md:h-40 mb-4 md:mb-16"
          variants={fadeInUpVariants}
        />
        <motion.h1
          className="text-white text-center font-extrabold text-4xl md:text-5xl lg:text-7xl md:mb-10"
          variants={fadeInUpVariants}
        >
          DIGITAL INDIA HACKATHON &apos;24
        </motion.h1>
        <motion.p
          className="text-white mb-5 md:mb-14 text-lg md:text-2xl text-center max-w-5xl mx-auto"
          variants={fadeInUpVariants}
        >
          We are hosting 36hrs (two days-one night) Web- Mobile- Digital Media DAPP #Hackathon at IIT-Delhi designed for Blockchain (Web3)/ AI/ ML, SaaS entrepreneurs and Legal domain professionals focused in Defence, DeepTech and Women-led enterprises.
        </motion.p>
        <motion.div
          className="flex mb-5 items-center justify-center"
          variants={buttonVariants}
        >
          <Link
            href="#"
            className="shine-effect bg-[#007F40] hover:bg-green-700 group flex items-center hover:px-14 text-white font-bold py-3 px-8 rounded-sm text-xl transition-all duration-300 relative overflow-hidden"
          >
            REGISTER NOW
            <RiCodeBlock className="ml-5 hidden group-hover:block transition-all duration-1000 group-hover:translate-x-2 transform" />
          </Link>
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          variants={fadeInUpVariants}
        >
          <Link href="#" className="text-xl font-semibold underline text-white">
            INTERESTED IN SPONSORING?
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
