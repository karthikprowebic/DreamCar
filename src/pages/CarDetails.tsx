import React, { useState } from 'react';

const CarDetails = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    { question: "How do I book a car?", answer: "You can book a car through our website or mobile app. Select your desired car, dates, and complete the payment process." },
    { question: "What does Fastag enabled means?", answer: "Fastag is an electronic toll collection system. Cars with Fastag can pass through toll plazas without stopping for cash payment." },
    { question: "What happens if I return the car with extra fuel?", answer: "If you return the car with extra fuel, we do not provide refunds for the unused fuel." },
    { question: "Who will recharge the FASTtag?", answer: "The FASTtag is recharged by us. Any toll charges during your rental period will be billed to you separately." },
    { question: "What happens if I forget my personal belongings in the car?", answer: "If you forget personal belongings, contact our customer support immediately. We'll check the car and return your items if found." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-4">
        <button className="text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div className="flex-1 truncate text-sm text-gray-600">S. Donkur | Stage, 1st Stage, Domlur, Bengaluru, K</div>
        
        <div className="bg-green-500 rounded-full py-2 px-4 text-white text-xs flex gap-4">
          <div>
            <div className="text-center font-semibold">Check In</div>
            <div className="text-center">13 Feb'25, 4 PM</div>
          </div>
          <div>
            <div className="text-center font-semibold">Check Out</div>
            <div className="text-center">13 Feb'25, 4 PM</div>
          </div>
        </div>
      </div>

      {/* Car Images and Info */}
      <div className="flex border-b">
        <div className="w-1/2 relative">
          <img src="/api/placeholder/400/320" alt="Maruti Suzuki Swift 2022" className="w-full h-48 object-cover" />
          <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white p-1 text-xs">
            <span>9</span>
          </div>
          <div className="absolute bottom-2 left-2 flex space-x-2">
            <img src="/api/placeholder/40/40" alt="Thumbnail 1" className="w-10 h-10 object-cover border-2 border-white rounded" />
            <img src="/api/placeholder/40/40" alt="Thumbnail 2" className="w-10 h-10 object-cover border-2 border-white rounded" />
            <img src="/api/placeholder/40/40" alt="Thumbnail 3" className="w-10 h-10 object-cover border-2 border-white rounded" />
          </div>
          
          <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 text-sm font-medium rounded">
            Exclusive Offers
          </div>
        </div>
        
        <div className="w-1/2 p-4 bg-gray-50">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-bold text-lg">Maruti Suzuki Swift 2022</h2>
              <p className="text-sm text-gray-600">Hosted by OM (BM K.)</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Active Posting</span>
              <div className="w-8 h-4 bg-green-300 rounded-full relative">
                <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex">
            <div className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 mr-1">
                <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                <path d="M7 12h10"></path>
              </svg>
              <span className="text-sm">Automatic</span>
            </div>
            <div className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 mr-1">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
              </svg>
              <span className="text-sm">3 Baggage</span>
            </div>
          </div>
          
          <div className="mt-2 flex">
            <div className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 mr-1">
                <path d="M4 17h2"></path><path d="M14 17h4"></path>
                <circle cx="6.5" cy="17" r="2.5"></circle>
                <circle cx="15.5" cy="17" r="2.5"></circle>
                <path d="M3 9h14v10"></path>
                <path d="M5 5l2 4h8l2-4"></path>
              </svg>
              <span className="text-sm">Petrol</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 mr-1">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span className="text-sm">7 Seater</span>
            </div>
          </div>
          
          <div className="mt-4 text-right">
            <div className="text-xs text-gray-500">Starts from</div>
            <div className="text-xl font-bold text-green-500">₹900<span className="text-xs">/day</span></div>
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div className="p-4 border-b">
        <h3 className="font-medium text-sm mb-2">Ratings & Reviews</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold">
              4.8
            </div>
            <div className="ml-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="orange" stroke="orange" strokeWidth="1" className="mr-1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <div className="text-sm text-green-500 underline">Ratings</div>
            </div>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg shadow p-2 w-28">
                <div className="flex items-center gap-1">
                  <img src="/api/placeholder/20/20" alt="User" className="w-5 h-5 rounded-full" />
                  <span className="text-xs font-medium">Real Traveler</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adiping elit...</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="p-4 border-b">
        <h3 className="font-medium text-sm mb-2">Car Location</h3>
        <p className="text-xs text-gray-600 mb-2">10 Ridpath Hotels Street, Vannarpet, vivekangar Bangalore 560047</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-green-500 font-medium">
            <span className="bg-green-100 rounded-full px-2 py-1">0.4 kms Away</span>
          </div>
          <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-full">Get Directions</button>
        </div>
      </div>
      
      {/* Features */}
      <div className="p-4 border-b">
        <h3 className="font-medium text-sm mb-3">Features</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-green-100 rounded-lg p-3 flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <span className="text-sm">Spare Tyre</span>
          </div>
          
          <div className="bg-green-100 rounded-lg p-3 flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <span className="text-sm">Child Seat</span>
          </div>
          
          <div className="bg-green-100 rounded-lg p-3 flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <span className="text-sm">Anti-Lock Braking System</span>
          </div>
          
          <div className="bg-green-100 rounded-lg p-3 flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </div>
            <span className="text-sm">Toolkit</span>
          </div>
        </div>
      </div>
      
      {/* Policies and Offers */}
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <h3 className="font-medium text-sm">Policies and Agreements</h3>
          <button className="text-green-500 text-sm font-medium flex items-center">
            View More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
        
        <div className="bg-green-50 p-3 rounded-lg mb-4">
          <div className="flex items-start">
            <input type="checkbox" className="mt-1 mr-2" checked readOnly />
            <div>
              <p className="text-xs text-gray-700 mb-1">I hereby agree to the terms and conditions of the Lease Agreement with Host</p>
              <button className="text-green-500 text-xs font-medium flex items-center">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="border rounded-lg p-3 mb-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-green-800">EXCLUSIVE OFFERS</span>
                  <span className="block text-xs text-gray-600">Check Availability Here</span>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          
          <div className="border rounded-lg p-3 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="block text-xs font-medium">Trip Protection Fee</span>
                <button className="text-xs text-green-500">Change</button>
              </div>
              <span className="font-medium">₹189</span>
            </div>
          </div>
          
          <div className="border rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="block font-medium">Total Price</span>
                <span className="block text-xs text-gray-500">Additional charges may apply</span>
              </div>
              <span className="font-bold text-lg">₹992</span>
            </div>
          </div>
        </div>
        
        <button className="w-full bg-green-500 text-white font-medium py-3 rounded-lg">Rent Now</button>
      </div>
      
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-end p-2 space-x-2">
        <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </button>
        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </button>
        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
      
      {/* Similar Listings */}
      <div className="p-4 border-t">
        <h3 className="font-medium text-sm">Similar Listings</h3>
        <div className="flex gap-2 overflow-x-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-shrink-0 w-56 border border-gray-200 rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Maruti Suzuki Ignis" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-1 py-0.5 rounded">
                4.7
              </div>
              <div className="p-2">
                <h4 className="font-medium">Ignis 2020</h4>
                <p className="text-sm text-gray-700">₹ 590 excluding fees</p>
                <div className="flex items-center text-xs text-gray-500 mt-1 gap-2">
                  <span>Manual</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span>Petrol</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span>5 Seats</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}h away
                  </div>
                  <button className="bg-green-500 text-white text-xs px-3 py-1 rounded flex items-center">
                    Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQs */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">FAQs</h3>
          <button className="text-green-500 text-sm flex items-center">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <div>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-2 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button 
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform ${expandedFAQ === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedFAQ === index && (
                <div className="p-4 pt-0">
                  <p className="text-sm text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Brand Logo */}
      <div className="mt-auto p-4 flex justify-end">
        <div className="text-right">
          <img 
            src="/api/placeholder/150/60" 
            alt="Dream Car Services" 
            className="ml-auto"
          />
          <p className="text-xs text-gray-500 mt-1">Satisfaction made for you</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;