"use client";
import React, { useState, useRef } from "react";
import { FaRegClock, FaMapMarkerAlt, FaTrophy } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { motion, useInView } from "framer-motion";

const EventInfo = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { name: "ABOUT US", value: "about" },
    { name: "OUR GOAL", value: "goal" },
    { name: "VISION & MISSION", value: "vision" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="Hero2"
      className="text-white flex flex-col items-stretch lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6"
    >
      {/* Left section: Event Information */}
      <motion.div
        className="w-full relative lg:w-2/5 bg-cover rounded p-4 lg:p-6"
        style={{
          backgroundImage: "url('/bg-venue.png')",
          height: "600px",
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          EVENT INFORMATION
        </h2>

        {[
          {
            icon: <FaMapMarkerAlt className="w-12 h-12" />,
            title: "Location",
            description:
              "IIT Delhi Main Rd, IIT Campus, Hauz Khas, New Delhi, Delhi 110016",
            delay: 0.5,
          },
          {
            icon: <FaRegClock className="w-12 h-12" />,
            title: "Time Duration",
            description: "36 Hours",
            delay: 0.6,
          },
          {
            icon: <RiTeamFill className="w-12 h-12" />,
            title: "Team Size",
            description: "3-5 Members",
            delay: 0.7,
          },
          {
            icon: <FaTrophy className="w-12 h-12" />,
            title: "Prize",
            description: "Cash Prize and Certificates",
            delay: 0.8,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="text-white flex items-center  space-y-8 space-x-5"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            {item.icon}
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-lg lg:text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Right section: Tabs and content */}
      <motion.div
        className="w-full lg:w-2/3 bg-white text-black rounded-lg p-4 lg:p-6 relative"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Tab Buttons */}
        <div className="relative flex justify-between border-b border-gray-300 space-x-2 sm:space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`flex-1 py-2 mb-4 text-base sm:text-lg lg:text-2xl font-semibold transition-colors duration-300 ${
                activeTab === tab.value ? "text-green-500" : "text-gray-400"
              }`}
              onClick={() => handleTabClick(tab.value)}
            >
              {tab.name}
            </button>
          ))}

          {/* Full line under tabs */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300"></div>

          {/* Animated underline */}
          <motion.div
            className={`absolute bottom-0 h-[2px] bg-green-500 transition-all duration-300`}
            style={{
              width: `${100 / tabs.length}%`,
              transform: `translateX(${
                tabs.findIndex((tab) => tab.value === activeTab) * 100
              }%)`,
            }}
          />
        </div>

        {/* Tab Content */}
        <motion.div className="mt-6 text-lg sm:text-lg md:mx-10 md:text-base lg:text-xl">
          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="mb-5">
                Digital India Hack-a-thon is about coding together to solve
                real-world problems. Students, Developers, Entrepreneurs,
                Designers, and Idea generators will come together to build
                amazing applications, in an effort to create a better world.
              </p>
              <p className="mb-5">
                Integrated throughout the day will be examples of disruptive
                ideas Pan India, many of which &rsquo;Silicon Valley comes to
                India&apos; hasn&apos;t witnes sed yet, as well as tips on
                taking the fear out of making the leap to entrepreneurship. Some
                leading mentors, technology experts/ trainers and advisers will
                be on hand throughout the span of the event to answer y our
                questions on challenges you&apos;re facing. The areas we will
                cover: your business model, revenue model, social media and
                digital marketing strategy, selling to who and how, etc and
                there will be plenty of networking with other start-ups.
              </p>
              <p>
                Pre-hackathon workshop will provide relevant support to develop
                business ideas and skills. On the 1st day, the participants will
                receive guidance on the concept of the Ideation Model, MVP
                (minimum viable product) and Technical Guidance. The Hack-a-thon
                will be conducted on day 2 and 3.
              </p>
              {/* More content can be added here */}
            </motion.div>
          )}

          {activeTab === "goal" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="mb-5">
                Our goal is to bring together developers, designers, and
                entrepreneurs from diverse backgrounds, creating an ecosystem
                where meaningful connections can flourish. By uniting these
                creative minds, we aim to channel their skills toward solving
                real-world challenges and building innovative solutions. This
                hackathon provides an opportunity for participants to
                collaborate and apply their talents in a space designed to
                inspire creativity and productivity.
              </p>
              <p className="mb-5">
                By establishing a makerspace, we are creating a dynamic
                environment where creators can engage with one another,
                brainstorm ideas, and work together to develop cutting-edge
                solutions. The event will encourage participants to think beyond
                the scope of traditional problem-solving and tap into their
                entrepreneurial potential. The solutions they create could
                become the foundation for new ventures or even future companies.
              </p>

              <p>
                Set in an intellectually stimulating environment, the hackathon
                will spur innovation, push boundaries, and drive participants to
                explore their full potential. This unique platform will foster
                not only technical innovation but also a sense of community and
                shared learning. Through this event, participants will gain the
                chance to create, collaborate, and build projects that could
                shape the future of technology and entrepreneurship.
              </p>
              {/* More content can be added here */}
            </motion.div>
          )}

          {activeTab === "vision" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="mb-5">
                India, a land rich with cultural variety where many
                civilisations flourished, kingdoms rose and fell - leaving
                behind an array of splendid historic attractions, majestic
                temples and sculptures making India a unique destination. More
                than 50% of Indian population are under 25, filled with high
                aspirations, unique talents waiting to be explored. India is the
                &rsquo;Powerhouse of Technology&apos;.
              </p>
              <p className="mb-5">
                Vision - Our vision is to equip over 1 million Indian students
                with comprehensive knowledge in mobile technology and the
                implementation of cutting-edge concepts such as the Internet of
                Things (IoT), eCommerce, mCommerce, and social media skills. By
                empowering the youth with these essential digital skills, we aim
                to mold them into SMART professionals who are ready to take on
                the challenges of the modern digital economy.
              </p>
              {/* More content can be added here */}

              <p>
                Mission - Our mission is to build the &rsquo;Digital India
                Hack-a-thon&apos;—a multifaceted platform that operates across
                web, mobile, and on-the-ground formats. This platform will serve
                as a space for young Indians to challenge their entrepreneurial
                abilities, put their creativity to the test, and maximize their
                potential in real-world scenarios. Through this initiative, we
                aim to inspire innovation and foster the development of the next
                generation of tech-savvy professionals who will drive
                India&apos;s digital transformation forward.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EventInfo;
