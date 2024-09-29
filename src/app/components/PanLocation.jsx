import Image from 'next/image';

const PanIndiaMap = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full  pr-4 md:pr-20 lg:pr-32 relative z-10">
      {/* Left Section (Text + Image) */}
      <div className="flex flex-col lg:w-1/2 h-full">
        {/* Top Text */}
        <div className="bg-[#007F40] text-white flex justify-center items-center py-6 md:pt-12">
          <h1 className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
            BUILDING FOR - <br /> BHARAT 2.0
          </h1>
        </div>

        {/* Bottom Image */}
        <div className="w-full h-auto mt-4 md:mt-8 px-2 sm:px-4 md:px-10">
          <img
            src="/india.png" 
            alt="Map showing states"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right Section (Image as tall as text + image) */}
      <div className="flex bg-[#007F40] justify-center items-center lg:w-1/2  mt-6 md:mt-0">
        <img
          src="/indiabg.png" // Replace with actual image path
          alt="Pan India locations map"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default PanIndiaMap;
