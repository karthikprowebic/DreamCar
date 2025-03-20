import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logofooter.png"
                alt="Dream Car Services"
                className="h-30"
              />
            </div>
            <p className="text-sm">Your trusted partner in finding the perfect car.</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/cars" className="hover:underline">Cars</Link></li>
              <li><Link to="/TestimonialsScreen" className="hover:underline">Testimonials</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/TermsScreen" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/support-center" className="hover:underline">Support Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Address</h3>
            <p className="text-sm">
              123 Car Street<br />
              Automobile City<br />
              State, Country<br />
              PIN: 123456
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-400 text-center">
          <p>&copy; {new Date().getFullYear()} Dream Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from 'react';
// import { Car } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-green-500 text-white">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <img
//             src="/images/logofooter.png"
//             alt="Dream Car Services"
//             className="h-30"
//           />
//             </div>
//             <p className="text-sm">Your trusted partner in finding the perfect car.</p>
//           </div>
          
//           <div>
//             <h3 className="font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline">Home</a></li>
//               <li><a href="/cars" className="hover:underline">Cars</a></li>
//             <li><a href="/TestimonialScreen" className="hover:underline">Testimonials</a></li>
//               <li><a href="#" className="hover:underline">About</a></li>
//               <li><a href="#" className="hover:underline">Contact</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Customer Support</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline">FAQs</a></li>
//               <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
//               <li><a href="/TermsScreen" className="hover:underline">Terms & Conditions</a></li>
//               <li><a href="#" className="hover:underline">Support Center</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Address</h3>
//             <p className="text-sm">
//               123 Car Street<br />
//               Automobile City<br />
//               State, Country<br />
//               PIN: 123456
//             </p>
//           </div>
//         </div>
        
//         <div className="mt-8 pt-8 border-t border-green-400 text-center">
//           <p>&copy; {new Date().getFullYear()} Dream Cars. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
