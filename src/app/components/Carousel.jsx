"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";

// Dummy image URLs
const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
];

const Carousel = () => {
  // React Slick settings for smooth, infinite scrolling
  const downloadFile = () => {
    const fileUrl = '/HackathonApril-Report.pdf'; // Adjust the file name and extension accordingly
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'HackathonApril-Report.pdf'; // This sets the name of the downloaded file
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", // Ensure linear scrolling
    centerMode: false, // Disable center mode
    pauseOnHover: false, // Avoid pausing on hover for smooth reel effect
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For smaller devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden"> 
      <Slider {...settings}>
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image}
            index={index}
          />
        ))}
      </Slider>
      <div className=" w-[90%]  md:w-[25%] text-center mx-auto  mt-10">
      
      <Link
            href="#" onClick={downloadFile} passHref
            className="shine-effect bg-[#007F40] hover:bg-green-700 group flex items-center justify-center text-center hover:px-14 text-white font-bold py-3 px-8 rounded-sm text-xl transition-all duration-300 relative overflow-hidden"
          >
   PAST HACKATHON REPORT

          </Link>
    </div>


    </div>
  );
};

// ImageCard component with added spacing
const ImageCard = ({ src, index }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center w-full h-80 px-4" // Added px-4 for spacing between slides
      transition={{ duration: 0.5 }}
    >
      <img
        src={src}
        alt={`Carousel Image ${index}`}
      
        className="rounded-lg object-cover w-full h-full" // Use object-cover to fill the container
      />
    </motion.div>
  );
};

export default Carousel;
