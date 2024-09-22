"use client";
import Link from "next/link";
import React from "react";
import { SiTicktick } from "react-icons/si";
import { HiDownload } from "react-icons/hi";

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
      focus: ["Innovaton for Defense Excellence (iDEX)"],
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

  return (
    <div id="Fields" className=" mt-10 lg:mt-14 overflow-scroll mx-32">
      <h2  className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 text-center " >HACKATHON PROBLEM STATEMENTS</h2>
      <p className="space-y-6 max-w-6xl mx-auto mb-10 text-sm sm:text-base lg:text-lg leading-relaxed text-center">This document outlines the problem statements for our upcoming hackathon. Participants are encouraged to explore innovative solutions across various domains, addressing specific challenges faced by the Army, technology sectors, and women&apos;s representation in these fields.</p>
      <table className="min-w-full border-2 mx-20 text-left table-auto">
        {/* Table Header */}
        <thead>
          <tr className="text-center text-gray-700 text-xs md:text-sm lg:text-base font-bold">
            <th className="px-4 py-2 border-2 border-black ">S. No.</th>
            <th className="px-4 py-2 border-2 border-black">Problem Statement</th>
            <th className="px-4 py-2 border-2 border-black">Focus Area</th>
            <th className="px-4 py-2 border-2 border-black">Challenge</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-xs  md:text-sm lg:text-base border">
              <td className="px-4 py-2 border-2 border-black">{index + 1}</td>
              <td className="px-4 py-2 border-2 border-black">{item.problem}</td>
              <td className="px-4 py-2 border-2 border-black space-y-2">
                {item.focus.map((area, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-green-500"><SiTicktick />
                    </span>
                    <span>{area}</span>
                  </div>
                ))}
              </td>
              <td className="px-4 max-w-lg py-2 border-2 border-black">{item.challenge}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Section */}
      <div className="mt-6 text-center">
        <p className="text-sm md:text-base lg:text-lg">
          Participants are encouraged to collaborate, think outside the box, and leverage their diverse skill sets to address these challenges. Together, we can create impactful solutions that benefit our communities and industries.
        </p>
        <div className='flex mb-5 items-center justify-center'>
      <Link
        href="#"
        className="bg-[#007F40] hover:bg-green-700 group flex items-center hover:px-14 text-white font-bold py-3 px-8 rounded-sm text-xl transition-all duration-300"
      >
        DOWNLOAD PDF
        {/* Icon */}
        <HiDownload className="ml-5 hidden group-hover:block transition-all duration-1000 group-hover:translate-x-2 transform" />
      </Link>
    </div>
      </div>
    </div>
  );
};

export default ChallengesTable;
