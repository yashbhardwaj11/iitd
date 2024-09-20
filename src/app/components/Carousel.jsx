"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const [activeIndex, setActiveIndex] = useState(0);

  // React Slick settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (_current, next) => setActiveIndex(next),
    centerMode: true,
    centerPadding: "0", // No padding for centerMode
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
            activeIndex={activeIndex}
          />
        ))}
      </Slider>
    </div>
  );
};

// ImageCard component
const ImageCard = ({ src, index }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center w-full h-80" // Set width and height
      transition={{ duration: 0.5 }}
    >
      <Image
        src={src}
        alt={`Carousel Image ${index}`}
        width={300} // Set width for uniformity
        height={300} // Set height for uniformity
        className="rounded-lg object-cover w-full h-full" // Use object-cover to fill the container
      />
    </motion.div>
  );
};

export default Carousel;
