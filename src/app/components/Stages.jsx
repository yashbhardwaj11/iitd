"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the dynamic content array
const mentorshipStages = [
  {
    title: "IDEATION STAGE",
    duration: "48 Hours",
    objective: "Brainstorm and develop innovative ideas.",
    mentorshipFocus:
      "Brainstorming Sessions: Mentors will facilitate group discussions to inspire creativity and refine ideas.",
    feedbackLoops:
      "Participants will receive constructive feedback on their concepts from mentors and peers.",
    expectedOutcomes:
      "Clear, innovative ideas aligned with the problem statements.",
    image: "/image.png",
  },
  {
    title: "PROTOTYPING STAGE",
    duration: "72 Hours",
    objective: "Create a working prototype based on ideas.",
    mentorshipFocus:
      "Hands-on support with technical tools and development.",
    feedbackLoops:
      "Regular check-ins with mentors to ensure smooth progress.",
    expectedOutcomes:
      "A functional prototype aligned with the project goals.",
    image: "/image2.png",
  },
  {
    title: "PRESENTATION STAGE",
    duration: "24 Hours",
    objective: "Prepare final presentations and demos.",
    mentorshipFocus:
      "Guidance on structuring presentations and pitching.",
    feedbackLoops:
      "Final feedback on the overall project presentation.",
    expectedOutcomes:
      "A polished presentation that showcases project impact.",
    image: "/image3.png",
  },
  // Add more stages as needed
];

const transitionVariant = {
  hidden: { opacity: 0, y: 50 },  // Start below the viewport
  visible: { opacity: 1, y: 0 },  // Rise into view
  exit: { opacity: 0, y: -50 },   // Scroll upwards and disappear
};

const MentorshipStage = ({
  title,
  duration,
  objective,
  mentorshipFocus,
  feedbackLoops,
  expectedOutcomes,
}) => {
  return (
    <motion.div
      className="w-full lg:w-1/2"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={transitionVariant}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[80vw] md:w-[50vw]">
        <h2 className="text-lg lg:text-3xl font-bold mb-4">✶ {title}</h2>

        <div className="space-y-2 border-l-2 border-green-400 pl-4">
          <p className="text-lg lg:text-xl">
            <span className="font-bold">Duration:</span> {duration}
          </p>
          <p className="text-lg lg:text-xl">
            <span className="font-bold">Objective:</span> {objective}
          </p>
          <p className="text-lg lg:text-xl">
            <span className="font-bold">Mentorship Focus:</span> {mentorshipFocus}
          </p>
          <p className="text-lg lg:text-xl">
            <span className="font-bold">Feedback Loops:</span> {feedbackLoops}
          </p>
          <p className="text-lg lg:text-xl">
            <span className="font-bold">Expected Outcomes:</span> {expectedOutcomes}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const MentorshipStagesList = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const isScrolling = useRef(false);

  const handleScroll = (e) => {
    if (isScrolling.current) return; // Prevent multiple stage changes during a single scroll
    const deltaY = e.deltaY;

    // Check scroll direction
    if (deltaY > 0) {
      // Scroll down
      setCurrentStageIndex((prevIndex) =>
        prevIndex === mentorshipStages.length - 1 ? 0 : prevIndex + 1
      );
    } else if (deltaY < 0) {
      // Scroll up
      setCurrentStageIndex((prevIndex) =>
        prevIndex === 0 ? mentorshipStages.length - 1 : prevIndex - 1
      );
    }

    isScrolling.current = true; // Set scrolling to true

    setTimeout(() => {
      isScrolling.current = false; // Reset scrolling status after a short delay
    }, 500); // Adjust the delay for smoother transitions
  };

  useEffect(() => {
    // Add event listener for mouse wheel scroll
    const container = document.getElementById("mentorship-container");
    container.addEventListener("wheel", handleScroll);

    return () => {
      // Clean up event listener on component unmount
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const currentStage = mentorshipStages[currentStageIndex];

  return (
    <div
      id="mentorship-container"
      className="container mx-auto p-4 lg:p-8 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 overflow-y-auto" // Make the component scrollable
      style={{ height: '80vh' }} // Set a fixed height for the component
    >
      {/* Left Section: Image */}
      <h1 className="text-4xl flex md:hidden font-bold mb-4 text-center">
        HACKATHON MENTORSHIP AND COHORT STAGES
      </h1>
      <p className="text-lg flex md:hidden lg:text-xl mb-6 text-center">
        The mentorship program is designed to support participants throughout the hackathon, providing guidance and expertise at each stage of development. Participants will progress through five key stages, each structured to foster collaboration and innovation.
      </p>

      {/* Smooth image transition with AnimatePresence */}
      <div className="w-full lg:w-1/3">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentStageIndex}  // Use the stage index as the key to trigger re-render
            src={currentStage.image} // Use current stage image
            alt="Hackathon Stage"
            className="w-full h-[60vw] md:h-[35vw] rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }} // Smooth transition for 0.7 seconds
          />
        </AnimatePresence>
      </div>

      {/* Static Content: Heading and Intro Paragraph (No Animation) */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-xl hidden md:flex lg:text-5xl font-bold mb-4 text-center">
          HACKATHON MENTORSHIP AND COHORT STAGES
        </h1>
        <p className="text-sm hidden md:flex lg:text-xl mb-6 text-center">
          The mentorship program is designed to support participants throughout the hackathon, providing guidance and expertise at each stage of development. Participants will progress through five key stages, each structured to foster collaboration and innovation.
        </p>

        {/* Animated Stage Content */}
        <AnimatePresence mode="wait">
          <MentorshipStage
            key={currentStageIndex}
            title={currentStage.title}
            duration={currentStage.duration}
            objective={currentStage.objective}
            mentorshipFocus={currentStage.mentorshipFocus}
            feedbackLoops={currentStage.feedbackLoops}
            expectedOutcomes={currentStage.expectedOutcomes}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MentorshipStagesList;
