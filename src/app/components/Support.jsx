"use client";
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SupportUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      className="relative w-full text-white py-16"
      style={{
        backgroundImage: "url('/bg-last.png')", // Adjust to your actual image path
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
          If you can&apos;t contribute financially, no problem! We&apos;d still love to have your support. Hackers will be at it for 48
          hours, and that takes loads of caffeine and snacks. If you&apos;re willing to provide snacks for the event (especially late
          night), we&apos;ll present them in a way that emphasizes your sponsorship.
          <br />
          <strong>(e.g. &quot;Midnight Pizza presented by [you]!&quot;)</strong>
        </motion.p>
      </div>
    </section>
  );
}
