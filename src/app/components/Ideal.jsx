import React from 'react';

const SponsorComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-between items-start lg:px-32 py-8 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Side - Text Boxes */}
      <div className="w-full  text-white lg:w-1/2 space-y-6">
      <div className="bg-[#5D7BA1] p-6 rounded-md shadow-md transition-all duration-500 hover:translate-x-4 hover:-translate-y-4 hover:shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.8)]">
  <h2 className="text-lg font-semibold">Interesting API/Software</h2>
  <p className="mt-2 text-sm">
    Is the API easy to use and well documented with some examples? Do you have developers who can help participants who run into trouble using it? Do you have any ideas you may want participants to build? Do you have software that can ultimately aid programmers?
  </p>
</div>

<div className="bg-[#5D7BA1] p-6 rounded-md shadow-md transition-all duration-500 hover:translate-x-4 hover:-translate-y-4 hover:shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.8)]">
<h2 className="text-lg font-semibold">Internship Opportunities</h2>
          <p className="mt-2 text-sm">
            Many participants will be actively looking for internships, while others will be ready for basic coding interviews, and are looking to gain more experience. Is your company hiring? Do you have internship opportunities?
          </p>
        </div>
        <div className="bg-[#5D7BA1] p-6 rounded-md shadow-md transition-all duration-500 hover:translate-x-4 hover:-translate-y-4 hover:shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.8)]">
        <h2 className="text-lg font-semibold">Good Swag/Brand Material</h2>
          <p className="mt-2 text-sm">
            It is always good to have swag. This can be t-shirts with a simple logo or stickers, mugs, jackets, handy stuff, etc. We&apos;ll have random giveaways throughout the event, so this is a great way to make sure every participant walks away with your brand!
          </p>
        </div>
        <div className="bg-[#5D7BA1] p-6 rounded-md shadow-md transition-all duration-500 hover:translate-x-4 hover:-translate-y-4 hover:shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.8)]">
        <h2 className="text-lg font-semibold">Interesting API/Software</h2>
          <p className="mt-2 text-sm">
          Is the API easy to use and well documented with some examples? Do you have developers who can help participants who run into trouble using it? Do you have any ideas you may want participants to build? Do you have software that can ultimately aid programmers?          </p>
        </div>
      </div>

      {/* Right Side - Table */}
      <div className="w-full lg:w-1/2 bg-[#007F40] p-6 rounded-md overflow-scroll shadow-md">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">WHAT MAKES AN IDEAL SPONSOR?</h2>
        <table className="mt-4 w-full text-sm table-auto bg-white border-collapse">
          <thead>
            <tr>
              <th className=" p-2 text-left">Sponsorship Tiers</th>
              <th className=" p-2 text-center">Bronze</th>
              <th className=" p-2 text-center">Silver</th>
              <th className=" p-2 text-center">Gold</th>
              <th className=" p-2 text-center">Platinum</th>
              <th className=" p-2 text-center">Diamond</th>
            </tr>
          </thead>
          <tbody>
            {/* Add rows based on the table in the image */}
            <tr>
              <td className=" p-2">Cost</td>
              <td className=" p-2 text-blue-400 text-center">Rs 15,000</td>
              <td className=" p-2 text-blue-400 text-center">Rs 30,000</td>
              <td className=" p-2 text-blue-400 text-center">Rs 60,000</td>
              <td className=" p-2 text-blue-400 text-center">Rs 1,00,000</td>
              <td className=" p-2 text-blue-400 text-center">Rs 2,00,000</td>
            </tr>
            <tr>
              <td className=" p-2">Thanked at Kickoff & Awards</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2 ">Logo on Website</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr> 
            <tr>
              <td className=" p-2">Distribute Swag</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Distribute Recruiting Material</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Award Custom Prizes</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Send Mentors</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Logo on Banner at Venue</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Sponsor Table</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">API/Product Demo</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">2 Mins</td>
              <td className=" p-2 text-green-400 text-center">10 Mins</td>
              <td className=" p-2 text-green-400 text-center">15 Mins</td>
            </tr>
            <tr>
              <td className=" p-2">Send Recruiters</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Get Participant Resumes</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2  text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Company Blurb in Participant Booklet</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2  text-center">No</td>
              <td className=" p-2  text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Logo on T-Shirt</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2  text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Conduct Workshop</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2  text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Pre-hackathon Social Media Post</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2  text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Location for Interviews</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2  text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Present Prize on Stage</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Mailing List</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Key Note</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Digital India hackathon : Sponsored by [you]</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">Yes</td>
            </tr>
            <tr>
              <td className=" p-2">Limit</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-center">No</td>
              <td className=" p-2 text-green-400 text-center">3</td>
              <td className=" p-2 text-green-400 text-center">2</td>
              <td className=" p-2 text-green-400 text-center">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SponsorComponent;  
