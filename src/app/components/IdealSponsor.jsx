"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const IdealSponsorComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="mx-auto px-4 py-8" ref={ref}>
      {/* Title with animation */}
      <motion.h1
        className="text-4xl lg:text-6xl lg:px-32 font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        WHAT MAKES AN IDEAL SPONSOR?
      </motion.h1>

      {/* Card Section */}
      <div className="grid grid-cols-1 bg-[#007F40] md:grid-cols-4 gap-6">
        {/* Card Template */}
        {[
          {
            img: '/plus.png',
            title: 'Interesting API/Software',
            description: 'Many participants will be actively looking for internships, while others will be ready for basic coding interviews, and are looking to gain more experience. Is your company hiring? Do you have internship opportunities?'
          },
          {
            img: '/laptop.png',
            title: 'Internship Opportunities',
            description: 'Many participants will be actively looking for internships, while others will be ready for basic coding interviews, and are looking to gain more experience. Is your company hiring? Do you have internship opportunities?'
          },
          {
            img: '/sign.png',
            title: 'Good Swag/Brand Material',
            description: 'It is always good to have swag. This can be t-shirts with a simple logo or stickers, mugs, jackets, handy stuff, etc. We\'ll have random giveaways throughout the event, so this is a great way to make sure every participant walks away with your brand!'
          },
          {
            img: '/mentor.png',
            title: 'Mentors and Representatives',
            description: 'These people are incredibly important when it comes to developing relationships with programmers. If you feel that your company can send someone who is engaging and helpful, that is a way to be an awesome sponsor.'
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#007F40] py-10 hover:bg-[#5D7BA1] text-white px-6 flex flex-col items-center text-center hover:scale-105 md:hover:scale-110 transition-transform duration-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4">
              <Image src={card.img} alt="icon" width={50} height={50} className="object-contain w-12 h-12" />
            </div>
            <h2 className="text-lg font-semibold mb-4">{card.title}</h2>
            <p className="text-base lg:text-lg">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IdealSponsorComponent;
