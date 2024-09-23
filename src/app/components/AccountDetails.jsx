"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AccountDetail = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="mx-auto px-4 py-8" ref={ref}>
      {/* Title with animation */}
      <motion.h2
        className="text-2xl lg:text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 0.5 }}
      >
        Account Details
      </motion.h2>

      {/* Account Information */}
      <div className="text-center">
        <motion.p
          className="text-lg lg:text-xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Account Name: Nebulex Def-Tech Foundation
        </motion.p>
        <motion.p
          className="text-lg lg:text-xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Account Number: 022505007253
        </motion.p>
        <motion.p
          className="text-lg lg:text-xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          IFSC Code: ICIC0000225
        </motion.p>
        <motion.p
          className="text-lg lg:text-xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Swift Code: ICICINBBCTS
        </motion.p>
        <motion.p
          className="text-lg lg:text-xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          UPI ID: nebulex@icici
        </motion.p>
      </div>

      {/* QR Code Section */}
      <div className="flex justify-center mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/QRcode.png" // Replace with the actual QR code path
            alt="QR Code"
            width={200}
            height={200}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AccountDetail;
