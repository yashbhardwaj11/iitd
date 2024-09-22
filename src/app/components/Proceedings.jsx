"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Proceedings() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full mx-auto px-4 lg:px-32 py-12" ref={ref}>
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-4xl lg:text-6xl font-bold text-center mb-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariant}
        transition={{ duration: 0.5 }}
      >
        BRIEF PROCEEDINGS OF OUR PREVIOUS HACK-A-THON
      </motion.h1>

      {/* Content */}
      <div className="space-y-6 text-justify leading-relaxed text-lg sm:text-lg lg:text-xl">
        <motion.p
          variants={fadeInVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          In the event&apos;s introduction, Mr. Pravash Dey shared his experiences on the importance of hackathon culture in academia and industry, discussing real-world problem-solving, new business challenges, and the significance of networking. Mr. Kunal Varma followed with insights on wireframing tools and financial guidance. Participants formed 13 teams through a speed-dating session and began working on their ideas.
        </motion.p>

        <motion.p
          variants={fadeInVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Guest speaker Mr. Bhaskar from Infocity, Gandhinagar, provided valuable insights into digital entrepreneurship and industry collaboration. The hackathon then kicked off with intensive ideation, business model discussions, and pitching to mentors. A night coding session (10 PM to 11 AM) saw participants building their prototypes.
        </motion.p>

        <motion.p
          variants={fadeInVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          The next day featured sessions by industry mentors on topics like ethical hacking, startup marketing, legal structures, and pitch creation, culminating in final pitches to the jury. The event concluded with keynotes by Dr. Akshai Aggarwal and Mr. Hiranmay Mahanta, followed by the participants&apos; final presentations.
        </motion.p>
      </div>
    </div>
  );
}
