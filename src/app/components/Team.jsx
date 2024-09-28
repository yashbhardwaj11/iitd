"use client";
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8">
      <p className='text-6xl font-bold mb-10' >PARTNERS - IN - GROWTH</p>
      <div className="flex flex-wrap justify-center gap-14 mb-8">
        {/* Profile 1 */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: '0 30% 0 30%' }}
            whileHover={{ borderRadius: '0%', transition: { duration: 0.5, ease: 'easeInOut' } }}
          >
            <motion.img
              src="/Pravash-hover.png"
              alt="Pravash Dey Hover"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: 'easeInOut' } }}
            />
          

            {/* LinkedIn Logo */}
            <a href="https://www.linkedin.com/in/pravashdey" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Pravash Dey</h2>
          <p className="text-gray-500 text-center">Curator At US India Blockchain Council</p>
        </div>

        {/* Profile 2 */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: '0 30% 0 30%' }}
            whileHover={{ borderRadius: '0%', transition: { duration: 0.5, ease: 'easeInOut' } }}
          >
            <motion.img
              src="/navdeep-hover.png"
              alt="Navdeep Chobhiyal Hover"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: 'easeInOut' } }}
            />
           

            {/* LinkedIn Logo */}
            <a href="https://www.linkedin.com/in/navdeepchobhiyal" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Navdeep Chobhiyal</h2>
          <p className="text-gray-500 text-center">Co-Founder & CBO @GydeXP</p>
        </div>

        {/* Profile 3 */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: '0 30% 0 30%' }}
            whileHover={{ borderRadius: '0%', transition: { duration: 0.5, ease: 'easeInOut' } }}
          >
            <motion.img
              src="/ishita-hover.png"
              alt="Ishita Garg Hover"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: 'easeInOut' } }}
            />
       

            {/* LinkedIn Logo */}
            <a href="https://www.linkedin.com/in/ishitagarg" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Ishita Garg</h2>
          <p className="text-gray-500 text-center">UI/UX Designer</p>
        </div>
      </div>

      {/* Second row with 2 profiles */}
      <div className="flex flex-wrap justify-center gap-14">
        {/* Profile 4 */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: '0 30% 0 30%' }}
            whileHover={{ borderRadius: '0%', transition: { duration: 0.5, ease: 'easeInOut' } }}
          >
            <motion.img
              src="/Adarsh-hover.png"
              alt="Adarsh Gautam Hover"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: 'easeInOut' } }}
            />
        

            {/* LinkedIn Logo */}
            <a href="https://www.linkedin.com/in/adarshgautam" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Adarsh Gautam</h2>
          <p className="text-gray-500 text-center">Curator At US India Blockchain Council</p>
        </div>

        {/* Profile 5 */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: '0 30% 0 30%' }}
            whileHover={{ borderRadius: '0%', transition: { duration: 0.5, ease: 'easeInOut' } }}
          >
            <motion.img
              src="/kush-hover.png"
              alt="Kush Kalra Hover"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: 'easeInOut' } }}
            />
         

            {/* LinkedIn Logo */}
            <a href="https://www.linkedin.com/in/kushkalra" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Kush Kalra</h2>
          <p className="text-gray-500 text-center">Graphic Designer</p>
        </div>
      </div>
    </div>
  );
}
