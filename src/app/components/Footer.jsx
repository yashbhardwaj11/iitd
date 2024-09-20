import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-200">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        {/* Left Section - Logo */}
        <div className="flex justify-center lg:justify-start">
        <object
          data="/logo.svg" // Adjust this to the actual path
          type="image/svg+xml"
          className="w-32 h-32 md:w-40 md:h-40 mb-5 md:mb-14 "
        />
        </div>
        <div className='space-y-20' >
        {/* Center Section - Navigation Links */}
        <nav className="flex space-x-6 text-gray-700 text-sm font-medium">
          <Link href="/home">Home</Link>
          <Link href="/registration">Registeration</Link>
          <Link href="/problem-statements">Problem Statements</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/about-nebulla">About Nebulla</Link>
        </nav>

        {/* Right Section - Contact Info & Social Media */}
        <div className="text-center flex justify-between lg:text-right">
        <div className='text-left' >
            <div className="text-sm font-bold text-gray-700">CONTACT US</div>
          <div className="text-sm text-gray-500">+1 891 989-11-91</div>
          <div className="text-sm text-gray-500">info@logoipsum.com</div>
        </div>
          

          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-end space-x-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <button className="border border-gray-300 rounded-full py-1 px-3 text-sm">Instagram</button>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <button className="border border-gray-300 rounded-full py-1 px-3 text-sm">Whatsapp</button>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <button className="border border-gray-300 rounded-full py-1 px-3 text-sm">Facebook</button>
            </a>
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-200 pt-4 flex flex-col lg:flex-row justify-between px-24 items-center text-sm text-gray-500">
        <p className="text-center lg:text-left">Digital India Hackathon. 2024 - All Rights Reserved</p>
        <p className="text-center lg:text-right text-green-600">Designed by Ishita Garg</p>
      </div>
    </footer>
  );
};

export default Footer;
