"use client";
import Image from "next/image";
import React from "react";
import image from '../../../public/image.png'
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
  },

  // Add more stages as needed
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
    <div className="container mx-auto p-4 lg:p-8 flex flex-col lg:flex-row  space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Left Section: Image */}
      <div className="w-full lg:w-1/3">
        <Image
          src={image}
          alt="Hackathon Stage"
          className="w-full h-[30vw] rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Content */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-xl lg:text-5xl font-bold mb-4 text-center ">
          HACKATHON MENTORSHIP AND COHORT STAGES
        </h1>
        <p className="text-sm lg:text-xl mb-6 text-center ">
          The mentorship program is designed to support participants throughout the
          hackathon, providing guidance and expertise at each stage of development.
          Participants will progress through five key stages, each structured to foster
          collaboration and innovation.
        </p>

        {/* Stage Section */}
        <div>
          <h2 className="text-lg lg:text-3xl font-bold mb-4">✶ {title}</h2>

          <div className="space-y-2 border-l-2 border-green-400 pl-4">
            <p className="text-sm lg:text-xl">
              <span className="font-bold">Duration:</span> {duration}
            </p>
            <p className="text-sm lg:text-xl">
              <span className="font-bold">Objective:</span> {objective}
            </p>
            <p className="text-sm lg:text-xl">
              <span className="font-bold">Mentorship Focus:</span> {mentorshipFocus}
            </p>
            <p className="text-sm lg:text-xl">
              <span className="font-bold">Feedback Loops:</span> {feedbackLoops}
            </p>
            <p className="text-sm lg:text-xl">
              <span className="font-bold">Expected Outcomes:</span> {expectedOutcomes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MentorshipStagesList = () => {
  return (
    <div>
      {mentorshipStages.map((stage, index) => (
        <MentorshipStage
          key={index}
          title={stage.title}
          duration={stage.duration}
          objective={stage.objective}
          mentorshipFocus={stage.mentorshipFocus}
          feedbackLoops={stage.feedbackLoops}
          expectedOutcomes={stage.expectedOutcomes}
        />
      ))}
    </div>
  );
};

export default MentorshipStagesList;
