"use client";
import React from 'react';
import { motion } from 'framer-motion';

function WhySponsor() {
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
    hiddenUp: { opacity: 0, y: -100 },
    hiddenDown: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="w-full mx-auto px-4 lg:px-32 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-4xl lg:text-6xl font-bold mb-8"
        variants={itemVariants}
        initial="hiddenUp"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Why Sponsor
      </motion.h2>

      {/* Paragraphs */}
      <motion.div className="space-y-6 text-lg sm:text-lg md:text-xl leading-relaxed text-justify">
        <motion.p
          variants={itemVariants}
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Technology entrepreneurship has taken a whole new meaning in the last 5 years amongst the
          Indian student community. Hackathons and incubators provide these entrepreneurs the much
          needed support to come together and build an application or a company around it.
        </motion.p>

        <motion.p
          variants={itemVariants}
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Digital India Hack-a-thon is one of the prime events in the hustling community, with the motive to
          collaborate different skills and solve a problem for a particular customer set. An event where you can
          find a diverse community of students, developers, designers, entrepreneurs, and idea generators
          coming along to build cool things, solve problems, and have fun.
        </motion.p>

        <motion.p
          variants={itemVariants}
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          The hackathon allows sponsors to exhibit awesome products and ideas that can be used to aid
          programmers in their projects. Becoming a sponsor will help your company&apos;s public relations, brand
          perception, and product popularity.
        </motion.p>

        <motion.p
          variants={itemVariants}
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          By sponsoring, your company is able to form a candid relationship with the programmers of the future
          and receive opportunities to engage those programmers with technologies that they will grow to love
          and use.
        </motion.p>

        <motion.p
          variants={itemVariants}
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Sponsorship will give you access to developers with lots of potential and industry&apos;s upcoming talents.
          Although participants are free to build their own hacks, sponsors can influence them through: Branded
          prizes, API, Demos, Swag, and Tech talks.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default WhySponsor;
