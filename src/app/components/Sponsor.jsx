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
        <motion.div variants={itemVariants} initial="hiddenLeft" whileInView="visible">
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
        </motion.div>
      </motion.div> 
  
      
    </motion.div>
  );
}
