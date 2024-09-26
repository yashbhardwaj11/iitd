import Image from 'next/image';

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8">
      {/* First row with 3 profiles */}
      <div className="flex flex-wrap justify-center gap-14 mb-8">
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <div className="relative w-52 h-52 md:w-72 md:h-72 mb-4">
            <Image src="/Pravash.png" alt="Pravash Dey" fill className="" />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-green-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm text-center p-4">
              led formation of the USIndia Blockchain Council and UKIndia Blockchain Council, a consortium of entrepreneurs, innovators, academia researchers, investors, financial institutions and trade & investment organisations. Currently I am also building multimillion dollar worth Blockchain as a Service (BaaS) - Fintech, DefTech & MediaTech Network for Content Distribution.
              </p>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-center">Pravash Dey</h2>
          <p className="text-gray-500 text-center">
            Curator At US India Blockchain Council
          </p>
        </div>

        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <div className="relative w-52 h-52 md:w-72 md:h-72 mb-4">
            <Image src="/navdeep.png" alt="Navdeep Chobhiyal" fill className="" />
            <div className="absolute inset-0 bg-green-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center p-4">
                Building VALUE generating systems & Consulting Firms @HansHills | Co-Founder & CBO @GydeXP
              </p>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-center">Navdeep Chobhiyal</h2>
          <p className="text-gray-500 text-center">
            Co-Founder & CBO @GydeXP
          </p>
        </div>

        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <div className="relative w-52 h-52 md:w-72 md:h-72 mb-4">
            <Image src="/ishita.png" alt="Ishita Garg" fill className="" />
            <div className="absolute inset-0 bg-[#007F40C7] bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm text-center p-4">I am a UI/UX designer with 2 years of experience and a design degree. I&apos;ve had the opportunity to work with notable brands like NEC, Harisons Furnishings, NAC-Numismatics Academy, ABP Network, and various startups.</p>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-center">Ishita Garg</h2>
          <p className="text-gray-500 text-center">UI/UX Designer</p>
        </div>
      </div>

      {/* Second row with 2 profiles */}
      <div className="flex flex-wrap justify-center gap-14">
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <div className="relative w-52 h-52 md:w-72 md:h-72 mb-4">
            <Image src="/Adarsh.png" alt="Adarsh Gautam" fill className="" />
            <div className="absolute inset-0 bg-green-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm text-center p-4">
              I am Adarsh Gautam, a seasoned blockchain entrepreneur and founder of ShardZ. With extensive experience collaborating with startups and industry leaders worldwide, I specialize in developing innovative business and technical solutions in the emerging Web3.0 economy.
              </p>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-center">Adarsh Gautam</h2>
          <p className="text-gray-500 text-center">
            Curator At US India Blockchain Council
          </p>
        </div>

        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <div className="relative w-52 h-52 md:w-72 md:h-72 mb-4">
            <Image src="/kush.png" alt="Kush Kalra" fill className="" />
            <div className="absolute inset-0 bg-green-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm text-center p-4">a graphic designer with a passion for creating clean, functional designs. I&apos;ve gained experience as a graphic designer during internships at Purple Parrot and Broadway Infotech, and I love blending creativity with practicality to bring ideas to life.I&apos;m Kush Kalra, a graphic designer with a passion for creating clean, functional designs</p>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-center">Kush Kalra</h2>
          <p className="text-gray-500 text-center">Graphic Designer</p>
        </div>
      </div>
    </div>
  );
}
