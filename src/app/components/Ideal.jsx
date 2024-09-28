import React from "react";
import "./shine.css";
import Link from "next/link";

const SponsorComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:px-32 py-8 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 bg-[#007F40] rounded-md overflow-hidden">
        <img
          src="/idealsponsor.png"
          alt="Ideal Sponsor"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Text and Button */}
      <div className="w-full lg:w-1/2  text-white space-y-[4vw]">
        <h2 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          WHAT MAKES AN IDEAL SPONSOR?
        </h2>

        <div className="flex mb-5 items-center justify-start">
          <Link
            href="/AccountDetails"
            className="shine-effect bg-[#007F40] hover:bg-green-700 hover:px-14 transition-all text-white font-bold py-3 px-8 rounded-sm text-xl"
          >
            PAY NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SponsorComponent;
