import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white px-4 sm:px-16 lg:px-44 py-7">
      <div className="flex flex-col justify-center items-center min-h-[40vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Service Section */}
          <ul className="text-sm sm:text-xl">
            <li className="flex gap-2 text-lg sm:text-2xl pb-3">
              <span className="bg-orange-400 w-2"></span>Service
            </li>
            <li className="text-slate-400">Search Engine Marketing</li>
            <li className="text-slate-400">Mobile Marketing</li>
            <li className="text-slate-400">Content Marketing</li>
            <li className="text-slate-400">Engagement Marketing</li>
            <li className="text-slate-400">Social Media Marketing</li>
          </ul>

          {/* Contact Section */}
          <ul className="text-sm sm:text-xl">
            <li className="flex gap-2 text-lg sm:text-2xl pb-3">
              <span className="bg-orange-400 w-2"></span>Contact
            </li>
            <li className="flex items-center text-slate-400">
              <FaLocationDot className="mr-2 text-orange-600" />
              Denver, CO.
            </li>
            <li className="text-slate-400">+1(512)837627</li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright */}
      <p className="flex justify-center items-center p-4 text-xs sm:text-sm text-gray-600">
        &copy;{new Date().getFullYear()} Copyright
      </p>
    </footer>
  );
};

export default Footer;
