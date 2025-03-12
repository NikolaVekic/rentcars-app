import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#16243b] w-[100vw] text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo + Contact Info + Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Left Column: Logo & Contact Info */}
          <div>
            {/* Logo / Brand */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-white text-xl font-bold">RENTCARS</span>
            </div>
            {/* Contact Info */}
            <div className="text-sm leading-6">
              <p>26556 16th St, Glendale, Alaska, 99508, USA</p>
              <p>+630 4526 273 12</p>
              <p>rentcars@gmail.com</p>
            </div>
          </div>

          {/* Right Column: Nav Links */}
          <nav className="flex flex-col md:flex-row md:space-x-6 text-sm">
            <Link
              className="hover:text-white transition-colors mb-2 md:mb-0"
              to="/about"
            >
              About Us
            </Link>

            <a
              href="#"
              className="hover:text-white transition-colors mb-2 md:mb-0"
            >
              How It Works
            </a>
            <Link
              className="hover:text-white transition-colors mb-2 md:mb-0"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="hover:text-white transition-colors mb-2 md:mb-0"
              to="/browse"
            >
              Search Cars
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              Terms and Service
            </a>
          </nav>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © 2025 - Rentcars. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
