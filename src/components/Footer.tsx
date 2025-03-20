
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-brand-green font-bold text-2xl">DREAM</span>
              <span className="ml-1 text-black font-bold text-2xl">CAR</span>
            </div>
            <p className="text-gray-600 mb-6">
              Experience the joy of driving with our premium car dealership. We offer the best cars with exceptional service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Cars', 'Services', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-brand-green transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-brand-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Car Street, Automobile City, AC 12345, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-brand-green mr-3 flex-shrink-0" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-brand-green mr-3 flex-shrink-0" />
                <span className="text-gray-600">info@dreamcar.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Working Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-brand-lightGreen rounded-lg border border-brand-green border-opacity-30">
              <p className="text-brand-green font-medium">
                24/7 Emergency Roadside Assistance Available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Dream Car. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-gray-600 hover:text-brand-green transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-brand-green transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-sm text-gray-600 hover:text-brand-green transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
