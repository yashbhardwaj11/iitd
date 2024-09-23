"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function SponsorsAndBenefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      id="Sponsor"
      className="mx-auto px-6 lg:px-32 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Sponsors and Partners Section */}
     <motion.h1
        className="text-4xl sm:text-4xl lg:text-6xl font-bold mb-8"
        variants={itemVariants}
        initial="hiddenUp"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        SPONSORS AND PARTNERS
      </motion.h1>
      
      <motion.div
        className="flex flex-wrap justify-around items-center space-x-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* <motion.div variants={itemVariants} initial="hiddenLeft" whileInView="visible">
          <Image src="/nebula 1.png" alt="Nebula Incubator" className="h-24 sm:h-32 lg:h-36" />
        </motion.div>

        <motion.div variants={itemVariants} initial="hiddenRight" whileInView="visible">
          <Image src="/TBG Logo 1.png" alt="The Brand Global" className="h-24 sm:h-32 lg:h-36" />
        </motion.div>

        <motion.div variants={itemVariants} initial="hiddenLeft" whileInView="visible">
          <Image src="/USIBC.png" alt="US India Blockchain Council" className="h-24 sm:h-32 lg:h-36" />
        </motion.div>

        <motion.div variants={itemVariants} initial="hiddenRight" whileInView="visible">
          <Image src="/rdv_logo_red.png" alt="Another Logo" className="h-24 sm:h-32 lg:h-36" />
        </motion.div> */}

      </motion.div> 
  
      {/* Benefits and API Section */}
      <motion.div className="flex justify-center items-center bg-white px-4 lg:px-8" variants={containerVariants}>
        <div className="max-w-6xl w-full py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Benefits Include Section */}
            <motion.div
              className="relative md:pr-6"
              variants={itemVariants}
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center md:text-left text-green-700 mb-6">
                BENEFITS INCLUDE
              </h2>
              <ul className="list-decimal list-inside text-lg sm:text-lg lg:text-xl text-gray-700 space-y-6">
                <li>The participant community, which is exceptionally talented.</li>
                <li>The potential of real solutions and companies coming out of the hackathon.</li>
                <li>
                  There will be a lot of developers looking for internship or job opportunities, and since your company is hiring, this would be a great opportunity for you to get in touch with potential employees.
                </li>
              </ul>
              <div className="hidden md:block absolute top-0 right-0 h-full border-r-2 border-dashed border-gray-400"></div>
            </motion.div>

            {/* Have an API Section */}
            <motion.div
              className="md:pl-6"
              variants={itemVariants}
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center md:text-left text-green-700 mb-6">
                HAVE AN API?
              </h2>
              <p className="text-lg sm:text-lg lg:text-xl text-gray-700 mb-6">
                Awesome! Let the developers work on your API. Benefits are:
              </p>
              <ul className="list-decimal list-inside text-lg sm:text-lg lg:text-xl text-gray-700 space-y-6">
                <li>Being associated with open data</li>
                <li>Exposure for your open data efforts</li>
                <li>Having prototype apps created using your API</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
