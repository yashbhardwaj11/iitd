"use client";
import Link from "next/link";
import React from "react";
import { SiTicktick } from "react-icons/si";
import { HiDownload } from "react-icons/hi";
import { motion, useInView } from "framer-motion";
import "./shine.css"

const ChallengesTable = () => {
  const data = [
    {
      problem: "Military Branch Innovations",
      focus: ["Army", "Air Force", "Naval"],
      challenge:
        "Develop technology-driven solutions that enhance operational efficiency, communication, and strategic planning across different military branches.",
    },
    {
      problem: "Empowering Women in Defense",
      focus: ["Women in Army", "Special Forces", "Paramilitary"],
      challenge:
        "Create initiatives or platforms that promote the inclusion and advancement of women in defense roles, particularly in special operations and paramilitary forces.",
    },
    {
      problem: "iDEX Challenges",
      focus: ["Innovation for Defense Excellence (iDEX)"],
      challenge:
        "Identify and address key challenges faced by iDEX initiatives, promoting innovation and collaboration within the defense ecosystem.",
    },
    {
      problem: "Aditi Scheme Exploration",
      focus: ["DeepTech", "Medical", "ConsumerTech", "Fintech", "Supply Chain", "Banking"],
      challenge:
        "Develop solutions that align with the objectives of the Aditi Scheme, fostering advancements in various technological domains including healthcare, finance, and supply chains.",
    },
    {
      problem: "Women in Tech",
      focus: ["Representation", "Inclusivity"],
      challenge:
        "Propose strategies or platforms to increase women's participation in technology sectors, addressing barriers to entry and promoting mentorship.",
    },
    {
      problem: "Emerging Technologies",
      focus: ["IoT", "Cloud Computing", "Cybersecurity", "DeFi", "Blockchain"],
      challenge:
        "Innovate solutions utilizing emerging technologies to solve real-world problems, enhancing security, efficiency, and user experience in various sectors.",
    },
    {
      problem: "Artificial Intelligence",
      focus: ["AI Applications"],
      challenge:
        "Develop AI-based solutions that can be applied to one or more of the above areas, improving decision-making, automation, or user interaction.",
    },
  ];

  // Ref and InView for animation triggering
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="Fields"
      className="mt-10 lg:mt-14 overflow-scroll lg:mx-32"
    >
      <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
        HACKATHON PROBLEM STATEMENTS
      </h2>
      <p className="space-y-6 max-w-6xl mx-auto mb-10 text-lg sm:text-lg lg:text-xl leading-relaxed text-center">
        This document outlines the problem statements for our upcoming hackathon. Participants are encouraged to explore innovative solutions across various domains, addressing specific challenges faced by the Army, technology sectors, and women&apos;s representation in these fields.
      </p>
      <table className="max-w-8xl mx-auto border-2 text-left table-auto">
        {/* Table Header */}
        <thead>
          <tr className="text-center text-gray-700 text-xs md:text-sm lg:text-base font-bold">
            <th className="px-4 py-2 border-2 border-black">S. No.</th>
            <th className="px-4 py-2 border-2 border-black">Problem Statement</th>
            <th className="px-4 py-2 border-2 border-black">Focus Area</th>
            <th className="px-4 py-2 border-2 border-black">Challenge</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((item, index) => (
            <motion.tr
              key={index}
              className="text-sm md:text-lg border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <td className="px-4 py-2 border-2 border-black">{index + 1}</td>
              <td className="px-4 py-2 border-2 border-black">{item.problem}</td>
              <td className="px-4 py-2 border-2 border-black space-y-2">
                {item.focus.map((area, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-green-500"><SiTicktick /></span>
                    <span>{area}</span>
                  </div>
                ))}
              </td>
              <td className="px-4 py-2 border-2 border-black">{item.challenge}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      {/* Footer Section */}
      <div className="mt-6 md:mx-20 text-center">
        <p className="text-lg md:text-lg md:mb-10 lg:text-xl">
          Participants are encouraged to collaborate, think outside the box, and leverage their diverse skill sets to address these challenges. Together, we can create impactful solutions that benefit our communities and industries.
        </p>
        <div className='flex mb-5 items-center justify-center'>
          <Link
            href="#"
            className="shine-effect bg-[#007F40] hover:bg-green-700 group flex items-center hover:px-14 text-white font-bold py-3 px-8 rounded-sm text-xl transition-all duration-300 relative overflow-hidden"
          >
            DOWNLOAD PDF
            {/* Icon */}
            <HiDownload className="ml-5 hidden group-hover:block transition-all duration-1000 group-hover:translate-x-2 transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengesTable;
