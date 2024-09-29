"use client";
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8">
      <p className='text-6xl font-bold mb-10'>PARTNERS - IN - GROWTH</p>

      {/* Container for profiles */}
      <div className="flex flex-wrap justify-center w-full gap-14 mb-8">
        {/* First row - 3 profiles */}
        <div className="flex flex-wrap justify-center w-full gap-14">
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

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/consultingleaders/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out"
                >
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  Led formation of the USIndia Blockchain Council and UKIndia Blockchain Council, a consortium of entrepreneurs, innovators, academia researchers, investors, financial institutions and trade & investment organisations. Currently I am also building multimillion dollar worth Blockchain as a Service (BaaS) - Fintech, DefTech & MediaTech Network for Content Distribution.
                  </span>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out"
                >
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

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/navdeep54g3/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out"
                >
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  Building VALUE generating systems & Consulting Firms @HansHills | Co-Founder & CBO @GydeXP
                  </span>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out"
                >
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

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/ishita-garg-0b467620a/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out"
                >
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  I am a UI/UX designer with 2 years of experience and a design degree. I&apos;ve had the opportunity to work with notable brands like NEC, Harisons Furnishings, NAC-Numismatics Academy, ABP Network, and various startups.
                  </span>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out"
                >
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Ishita Garg</h2>
            <p className="text-gray-500 text-center">UI/UX Designer</p>
          </div>
        </div>

        {/* Second row - 2 profiles */}
        <div className="flex flex-wrap justify-center w-full gap-14">
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

              {/* LinkedIn Logo and Hover Effects */}
              <a href="" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out"
                >
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  I am Adarsh Gautam, a seasoned blockchain entrepreneur and founder of ShardZ. With extensive experience collaborating with startups and industry leaders worldwide, I specialize in developing innovative business and technical solutions in the emerging Web3.0 economy.
                  </span>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out"
                >
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
                alt="Kush Kalra"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: 'easeInOut' } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/kush-kalra-12731b246/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out"
                >
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  A graphic designer with a passion for creating clean, functional designs. I&apos;ve gained experience as a graphic designer during internships at Purple Parrot and Broadway Infotech, and I love blending creativity with practicality to bring ideas to life.I&apos;m Kush Kalra, a graphic designer with a passion for creating clean, functional designs
                  </span>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out"
                >
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Natasha Chauhan</h2>
            <p className="text-gray-500 text-center">Co-Founder & CTO @GydeXP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
