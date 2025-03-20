import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-gray-100'
      }`}
    >
      <div className="w-full flex justify-between items-center px-4 py-3" style={{ backgroundColor: "#ECECEC" }}>
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Dream Car Services"
            className="h-30"
          />
        </Link>

        {/* Buttons Section */}
        <div className="flex items-center space-x-4">
          {/* Become a Host Button */}
          <Link
            to="/become-host"
            className="flex items-center bg-green-500 text-white py-2 px-4 rounded-full"
          >
            <span className="text-base font-normal">Become a Host</span>
            <div className="ml-4 bg-white rounded-full flex items-center justify-center w-8 h-8">
              <ArrowRight className="w-4 h-4 text-green-500" />
            </div>
          </Link>
          
          {/* Login Button */}
          <Link
            to="/login"
            className="flex items-center border border-green-500 text-green-500 py-2 px-4 rounded-full bg-transparent"
          >
            <span className="text-base font-normal">Login</span>
            <div className="ml-4 bg-green-500 rounded-full flex items-center justify-center w-8 h-8">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;