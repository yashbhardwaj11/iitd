import Image from "next/image";
import React from "react";
// components/SponsorsAndBenefits.js
export default function SponsorsAndBenefits() {
    return (
      <div id="Sponsor" className=" mx-auto px-6 lg:px-32 py-12">
        {/* Sponsors and Partners Section */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8">
          SPONSORS AND PARTNERS
        </h1>
        
        <div className="flex flex-wrap justify-around items-center space-x-6 mb-12">
          <Image 
            src="/nebula 1.png" 
            alt="Nebula Incubator" 
            className=" h-24 sm:h-32 lg:h-36"
          />
          <Image 
            src="/TBG Logo 1.png" 
            alt="The Brand Global" 
            className=" h-24 sm:h-32 lg:h-36"
          />
          <Image 
            src="/USIBC.png" 
            alt="US India Blockchain Council" 
            className=" h-24 sm:h-32 lg:h-36"
          />
          <Image 
            src="/rdv_logo_red.png" 
            alt="Another Logo" 
            className="  h-24 sm:h-32 lg:h-36"
          />
        </div>
  
        {/* Benefits and API Section */}
        <div className="flex justify-center items-center  bg-white px-4 lg:px-8">
      <div className="max-w-6xl w-full py-12">
        {/* Benefits and API Section */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
          
          {/* Benefits Include Section */}
          <div className="relative md:pr-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center md:text-left text-green-700 mb-6">
              BENEFITS INCLUDE
            </h2>
            <ul className="list-decimal list-inside text-sm sm:text-base lg:text-lg text-gray-700 space-y-6">
              <li>The participant community, which is exceptionally talented.</li>
              <li>The potential of real solutions and companies coming out of the hackathon.</li>
              <li>
                There will be a lot of developers looking for internship or job opportunities, and since your company is hiring, this would be a great opportunity for you to get in touch with potential employees.
              </li>
            </ul>
            {/* Dashed line on the right side for larger screens */}
            <div className="hidden md:block absolute top-0 right-0 h-full border-r-2 border-dashed border-gray-400"></div>
          </div>

          {/* Have an API Section */}
          <div className="md:pl-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center md:text-left text-green-700 mb-6">
              HAVE AN API?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6">
              Awesome! Let the developers work on your API. Benefits are:
            </p>
            <ul className="list-decimal list-inside text-sm sm:text-base lg:text-lg text-gray-700 space-y-6">
              <li>Being associated with open data</li>
              <li>Exposure for your open data efforts</li>
              <li>Having prototype apps created using your API</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  }
  