"use client";
import React, { useState, useEffect } from "react";

// Define the dynamic content array
const mentorshipStages = [
  {
    index: 1,
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
    index: 2,
    title: "Go-to-Market Strategy Stage",
    duration: "48 Hours",
    objective: "Develop a comprehensive go-to-market strategy.",
    mentorshipFocus:
      "Market Analysis: Mentors will assist in identifying target markets and conducting competitive analysis. Strategy Workshops: Sessions will be held to develop customer acquisition, retention strategies, and define the value proposition.",
    feedbackLoops: "",
    expectedOutcomes: "A comprehensive go-to-market strategy ready for implementation.",
    image: "/image2.png",
  },
  {
    index: 3,
    title: "Inculcation of Government Schemes Stage",
    duration: "48 Hours",
    objective: "Integrate relevant government initiatives into the solution.",
    mentorshipFocus:
      "Expert Sessions: Mentors with expertise in government schemes will provide insights on applicable programs. Implementation Guidance: Assistance in aligning the solution with government objectives and maximizing potential benefits.",
    feedbackLoops: "",
    expectedOutcomes: "A well-defined business model incorporating relevant government schemes.",
    image: "/image3.png",
  },
  {
    index: 4,
    title: "TECHNICAL ROUND STAGE",
    duration: "48 Hours",
    objective: "Assess the technical viability of the solution.",
    mentorshipFocus:
      "Technical Reviews: Mentors will evaluate prototypes or MVPs, offering technical insights and suggestions for improvement. Problem-Solving Workshops: Sessions focused on addressing technical challenges and refining the solution's architecture.",
    feedbackLoops: "",
    expectedOutcomes: "A technically sound solution ready for demonstration.",
    image: "/image4.png",
  },
  {
    index: 5,
    title: "PITCH STAGE",
    duration: "48 Hours",
    objective: "Present the solution to judges and stakeholders.",
    mentorshipFocus:
      "Pitch Preparation: Mentors will help participants craft compelling narratives, focusing on clarity and engagement. Mock Presentations: Practice sessions will allow participants to refine their delivery and receive feedback.",
    feedbackLoops: "",
    expectedOutcomes: "A polished pitch that effectively communicates the solution and its market potential.",
    image: "/image5.png",
  },
  {
    index: 6,
    title: "MENTORSHIP FORMAT",
    duration: "Throughout the Hackathon",
    objective: "Provide continuous mentorship and support.",
    mentorshipFocus:
      "One-on-One Sessions: Participants will have scheduled meetings with mentors for personalized guidance. Group Workshops: Collaborative sessions focused on specific topics, encouraging peer learning and support. Continuous Support: Mentors will be available for questions and guidance throughout the hackathon.",
    feedbackLoops: "",
    expectedOutcomes: "Enhanced participant engagement and support.",
    image: "/image6.png",
  },
];

const MentorshipStage = ({
  title,
  duration,
  objective,
  mentorshipFocus,
  feedbackLoops,
  expectedOutcomes,
}) => {
  return (
    <div className="w-full lg:w-1/2">
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
    </div>
  );
};

const MentorshipStagesList = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e) => {
    const deltaY = e.deltaY;

    // If the index is >= 6, allow default scrolling
    if (currentStageIndex >= 5) {
      return; // Don't block default page scrolling
    }

    // Prevent rapid scrolling between stages
    if (isScrolling) return;

    e.preventDefault(); // Prevent page scrolling when in the first 5 stages

    // Smooth scroll between stages
    setIsScrolling(true);
    setTimeout(() => {
      if (deltaY > 0) {
        setCurrentStageIndex((prevIndex) =>
          prevIndex === mentorshipStages.length - 1 ? prevIndex : prevIndex + 1
        );
      } else if (deltaY < 0) {
        setCurrentStageIndex((prevIndex) =>
          prevIndex === 0 ? prevIndex : prevIndex - 1
        );
      }
      setIsScrolling(false); // Reset scroll blocking after delay
    }, 800); // Delay between scrolls
  };

  useEffect(() => {
    const container = document.getElementById("mentorship-container");
    container.addEventListener("wheel", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [currentStageIndex, isScrolling]);

  const currentStage = mentorshipStages[currentStageIndex];

  return (
    <div
      id="mentorship-container"
      className={`container mx-auto p-4 lg:p-8 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 ${currentStage.index < 6 ? 'sticky top-0' : ''} `}
      style={{ minHeight: "80vh" }}
    >
      {/* Left Section: Image */}
      <h1 className="text-4xl flex md:hidden font-bold mb-4 text-center">
        HACKATHON MENTORSHIP AND COHORT STAGES
      </h1>
      <p className="text-lg flex md:hidden lg:text-xl mb-6 text-center">
        The mentorship program is designed to support participants throughout the hackathon, providing guidance and expertise at each stage of development. Participants will progress through five key stages, each structured to foster collaboration and innovation.
      </p>

      {/* Image display without animation */}
      <div className="w-full lg:w-1/3">
        <img
          src={currentStage.image}
          alt="Hackathon Stage"
          className="w-full h-[60vw] md:h-[35vw] lg:h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Static Content: Heading and Intro Paragraph */}
      <div className={`w-full lg:w-1/2 ${currentStage.index < 6 ? 'sticky top-0' : ''}`}>
        <div className="mb-[5vw]">
          <h1 className="text-xl hidden md:flex lg:text-5xl font-bold mb-4 text-center">
            HACKATHON MENTORSHIP AND COHORT STAGES
          </h1>
          <p className="text-sm hidden md:flex lg:text-xl mb-6 text-center">
            The mentorship program is designed to support participants throughout the hackathon, providing guidance and expertise at each stage of development. Participants will progress through five key stages, each structured to foster collaboration and innovation.
          </p>
        </div>

        {/* Display the current stage content */}
        <MentorshipStage
          key={currentStageIndex}
          title={currentStage.title}
          duration={currentStage.duration}
          objective={currentStage.objective}
          mentorshipFocus={currentStage.mentorshipFocus}
          feedbackLoops={currentStage.feedbackLoops}
          expectedOutcomes={currentStage.expectedOutcomes}
        />
      </div>
    </div>
  );
};

export default MentorshipStagesList;
