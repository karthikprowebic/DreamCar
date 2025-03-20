
import React from 'react';
import { Helmet } from 'react-helmet';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Dream Car</title>
        <meta name="description" content="Read the terms and conditions for Dream Car services. Learn about our policies, agreements, and legal information." />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)' }}
        >
          <div className="absolute inset-0 orange-gradient opacity-80"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">TERMS & CONDITIONS</h1>
            <p className="text-xl max-w-2xl">Important information about our services and your rights.</p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20">
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2 text-brand-green">99</h3>
              <p className="text-gray-700 font-medium">Cars in Stock</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2 text-brand-green">10+</h3>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2 text-brand-green">25+</h3>
              <p className="text-gray-700 font-medium">Brand Partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Welcome to Dream Car. These Terms and Conditions govern your use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold mb-6">Definitions</h2>
            <p className="text-gray-700 mb-6">
              In these Terms and Conditions, "we", "us", "our", and "Dream Car" refer to Dream Car Services. "You" and "your" refer to the user or customer accessing our services. "Services" refers to all services, products, and content offered by Dream Car.
            </p>

            <h2 className="text-2xl font-bold mb-6">Vehicle Information</h2>
            <p className="text-gray-700 mb-6">
              While we strive to provide accurate and up-to-date information about the vehicles listed on our website, we cannot guarantee the absolute accuracy of all details. Vehicle specifications, availability, and pricing are subject to change without notice. We recommend contacting us directly to confirm specific details before making a purchase decision.
            </p>

            <h2 className="text-2xl font-bold mb-6">Purchase and Payment</h2>
            <p className="text-gray-700 mb-6">
              All vehicle purchases must be finalized in person at our dealership. Online reservations require a deposit, which will be applied to the total purchase price of the vehicle. Deposits are refundable under certain conditions, as outlined in our Refund Policy. Full payment must be received before the vehicle can be released to the customer.
            </p>

            <h2 className="text-2xl font-bold mb-6">Warranty and Returns</h2>
            <p className="text-gray-700 mb-6">
              New vehicles come with the manufacturer's warranty. Used vehicles may be covered by a limited warranty, details of which will be provided at the time of purchase. We offer a 7-day return policy for used vehicles, subject to certain conditions, including mileage limitations and vehicle condition upon return.
            </p>

            <h2 className="text-2xl font-bold mb-6">Privacy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mb-6">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              Dream Car shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. This includes, but is not limited to, loss of revenue, profits, or data.
            </p>

            <h2 className="text-2xl font-bold mb-6">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in India.
            </p>

            <h2 className="text-2xl font-bold mb-6">Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. We encourage you to review these Terms and Conditions periodically to stay informed about our policies.
            </p>

            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions or concerns about these Terms and Conditions, please contact us at:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Dream Car Services</strong><br />
                123 Car Street, Automobile City<br />
                AC 12345, India<br />
                Email: info@dreamcar.com<br />
                Phone: +91 98765 43210
              </p>
            </div>

            <div className="mt-10 pt-10 border-t">
              <p className="text-gray-600 text-sm">
                Last updated: June 15, 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Car Services Banner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-10">
                <h2 className="text-3xl font-bold text-brand-green mb-6">DREAM CAR SERVICES</h2>
                <p className="text-gray-700 mb-6">
                  At Dream Car, we're committed to providing exceptional service and support throughout your car buying journey and beyond.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team of experts is here to help you find the perfect car, arrange financing, and provide ongoing maintenance and support.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-brand-lightGreen rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-brand-green" viewBox="0 0 16 16">
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                      </svg>
                    </div>
                    <span>Extended Warranty</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-brand-lightGreen rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-brand-green" viewBox="0 0 16 16">
                        <path d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                      </svg>
                    </div>
                    <span>Insurance Services</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-brand-lightGreen rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-brand-green" viewBox="0 0 16 16">
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                    </div>
                    <span>Service Appointments</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-brand-lightGreen rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-brand-green" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                      </svg>
                    </div>
                    <span>Premium Support</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                  alt="Dream Car"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
