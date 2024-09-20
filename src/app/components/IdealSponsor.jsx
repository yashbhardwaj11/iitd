import React from 'react';

const IdealSponsorComponent = () => {
  return (
    <div className=" mx-auto px-4 py-8">
      {/* Title */}
      <h1 className=" text-3xl lg:text-5xl lg:px-32 font-bold mb-12">WHAT MAKES AN IDEAL SPONSOR?</h1>

      {/* Card Section */}
      <div className="grid grid-cols-1 items-center md:grid-cols-4 gap-0">
        
        {/* Card 1 */}
        <div className="bg-[#007F40] py-20  hover:bg-[#5D7BA1] text-white p-6 flex flex-col items-center text-center hover:scale-105 md:hover:scale-110 transition-all duration-700 ">
          <div className="text-4xl mb-4">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m0 6v2m0 4v1m-7-8h14" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Interesting API/Software</h2>
          <p className="mt-4 text-sm">
            Many participants will be actively looking for internships, while others will be ready for basic coding interviews, and are looking to gain more experience. Is your company hiring? Do you have internship opportunities?
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#007F40] py-20  hover:bg-[#5D7BA1] text-white p-6 flex flex-col items-center text-center hover:scale-105 md:hover:scale-110 transition-all duration-700 ">
          <div className="text-4xl mb-4">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 10l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Internship Opportunities</h2>
          <p className="mt-4 text-sm">
            Many participants will be actively looking for internships, while others will be ready for basic coding interviews, and are looking to gain more experience. Is your company hiring? Do you have internship opportunities?
          </p>
        </div>

        {/* Card 3 (Blue Background and Taller) */}
        <div className="bg-[#007F40] py-20  hover:bg-[#5D7BA1] text-white p-6 flex flex-col items-center text-center hover:scale-105 md:hover:scale-110 transition-all duration-700 ">
          <div className="text-4xl mb-4">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Good Swag/Brand Material</h2>
          <p className="mt-4 text-sm">
            It is always good to have swag. This can be t-shirts with a simple logo or stickers, mugs, jackets, handy stuff, etc. We&apos;ll have random giveaways throughout the event, so this is a great way to make sure every participant walks away with your brand!
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#007F40] py-20  hover:bg-[#5D7BA1] text-white p-6 flex flex-col items-center text-center hover:scale-105 md:hover:scale-110 transition-all duration-700 ">
          <div className="text-4xl mb-4">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l3-3m0 0l3 3m-3-3v12" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Mentors and Representatives</h2>
          <p className="mt-4 text-sm">
            These people are incredibly important when it comes to developing relationships with programmers. If you feel that your company can send someone who is engaging and helpful, that is a way to be an awesome sponsor.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default IdealSponsorComponent;
