"use client";
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SupportUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      className="relative w-full text-white py-16 h-[500px]"
      style={{
        backgroundImage: "url('/bg-last.png')", // Adjust to your actual image path
        backgroundSize: "cover",  // Ensures the background image covers the entire section
        backgroundRepeat: "no-repeat",  // Prevents the background image from repeating
        backgroundPosition: "center"  // Centers the background image
      }}
    >
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
          transition={{ duration: 0.5 }}
        >
          SUPPORT US
        </motion.h2>
        <motion.p
          className="max-w-3xl text-lg md:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          If you can't contribute financially, no problem! We'd still love to have your support. Hackers will be at it for 48
          hours, and that takes loads of caffeine and snacks. If you're willing to provide snacks for the event (especially late
          night), we'll present them in a way that emphasizes your sponsorship.
          <br />
          <strong>(e.g., "Midnight Pizza presented by [you]!")</strong>
        </motion.p>
      </div>
    </section>
  );
}
