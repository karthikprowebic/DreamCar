import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Calendar, ChevronLeft, ChevronRight, Filter, Heart, Search, Sliders } from 'lucide-react';

const CarsListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersExpanded, setFiltersExpanded] = useState(true);
  
  // Sample car data
  const cars = [
    { id: 1, name: 'Suzuki Swift Dzire', price: '₹ 1,500', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire/7664/1675859019140/front-left-side-47.jpg' },
    { id: 2, name: 'Suzuki Swift Dzire', price: '₹ 1,500', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire/7664/1675859019140/front-left-side-47.jpg' },
    { id: 3, name: 'Suzuki Swift Dzire', price: '₹ 1,500', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire/7664/1675859019140/front-left-side-47.jpg' },
    { id: 4, name: 'Suzuki Swift Dzire', price: '₹ 1,500', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire/7664/1675859019140/front-left-side-47.jpg' },
    { id: 5, name: 'Suzuki Swift Dzire', price: '₹ 1,500', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire/7664/1675859019140/front-left-side-47.jpg' },
    { id: 6, name: 'Suzuki Swift Dzire', price: '₹ 1,500', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire/7664/1675859019140/front-left-side-47.jpg' },
    { id: 7, name: 'Suzuki Swift Dzire', price: '₹ 1,500', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire/7664/1675859019140/front-left-side-47.jpg' },
    { id: 8, name: 'Suzuki Swift Dzire', price: '₹ 1,500', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire/7664/1675859019140/front-left-side-47.jpg' },
  ];

  const toggleFilters = () => {
    setFiltersExpanded(!filtersExpanded);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header with Back Button and Search Filters */}
            <div className="mb-4">
              <div className="flex items-center mb-4">
                <Link to="/" className="mr-4">
                  <ChevronLeft className="h-5 w-5 text-gray-500" />
                </Link>
                <div className="flex-1">
                  <div className="flex items-center">
                    <button className="bg-red-100 text-red-500 text-xs font-medium py-1 px-4 rounded-full">Popular</button>
                    <div className="mx-2 text-gray-400">|</div>
                    <button className="text-xs text-gray-500 font-medium">SUV</button>
                    <div className="mx-2 text-gray-400">|</div>
                    <button className="text-xs text-gray-500 font-medium">Sedan</button>
                  </div>
                </div>
                <button className="bg-primary text-white text-xs rounded-full px-4 py-1.5">Search</button>
              </div>
              
              {/* Banner Ad */}
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/7720/1685498559258/front-left-side-47.jpg" 
                  alt="Car Promo" 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center p-6">
                  <div className="text-white max-w-xs">
                    <h3 className="text-lg font-bold">Lowest Prices on Luxury Cars</h3>
                    <p className="text-sm mb-2">Get the best deals on premium car rentals</p>
                    <button className="bg-white text-blue-900 text-xs font-medium px-3 py-1 rounded">View Offers</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Car Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
              {cars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-40 object-cover"
                    />
                    <button className="absolute top-2 right-2 h-8 w-8 bg-white/80 rounded-full flex items-center justify-center">
                      <Heart size={18} className="text-gray-500" />
                    </button>
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-sm">{car.name}</h3>
                      <div className="bg-primary text-white text-xs font-bold rounded px-2 py-0.5">{car.price}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link 
                        to={`/car-details/${car.id}`} 
                        className="text-xs underline text-primary font-medium"
                      >
                        View Details
                      </Link>
                      <button className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                        <ChevronRight size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-1 mt-6 mb-4">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300"
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} className="text-gray-500" />
              </button>
              
              {[1, 2, 3, 4, 5, 6].map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    currentPage === page 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-gray-500 border border-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(currentPage + 1)}
                className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300"
              >
                <ChevronRight size={16} className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Filters Sidebar */}
          <div className={`${filtersExpanded ? 'w-full md:w-72' : 'w-full md:w-12'} bg-secondary p-4 rounded-lg transition-all duration-300 ease-in-out`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`font-semibold ${filtersExpanded ? 'block' : 'hidden'}`}>Filter</h2>
              <button 
                onClick={toggleFilters}
                className="h-6 w-6 bg-accent rounded flex items-center justify-center"
              >
                {filtersExpanded ? <Sliders size={14} className="text-primary" /> : <Filter size={14} className="text-primary" />}
              </button>
            </div>
            
            {filtersExpanded && (
              <div className="space-y-4">
                {/* Pick Up Location */}
                <div>
                  <label className="block text-xs font-medium mb-1">Pickup Location</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search for location"
                      className="bg-white text-sm py-2 pl-8 pr-3 w-full rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
                  </div>
                </div>
                
                {/* Dates */}
                <div>
                  <label className="block text-xs font-medium mb-1">Select Date</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input 
                        type="text" 
                        placeholder="From Date"
                        className="bg-white text-sm py-2 pl-8 pr-3 w-full rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <Calendar size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
                    </div>
                    <div className="relative flex-1">
                      <input 
                        type="text" 
                        placeholder="To Date"
                        className="bg-white text-sm py-2 pl-8 pr-3 w-full rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <Calendar size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                {/* Vehicle Type */}
                <div>
                  <label className="block text-xs font-medium mb-1">Vehicle Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-white text-xs py-1.5 px-3 rounded border border-gray-200 hover:bg-accent hover:text-primary transition-colors">SUV</button>
                    <button className="bg-accent text-primary text-xs py-1.5 px-3 rounded border border-primary/20 font-medium">Sedan</button>
                    <button className="bg-white text-xs py-1.5 px-3 rounded border border-gray-200 hover:bg-accent hover:text-primary transition-colors">Hatchback</button>
                    <button className="bg-white text-xs py-1.5 px-3 rounded border border-gray-200 hover:bg-accent hover:text-primary transition-colors">Commercial</button>
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-medium">Price Range</label>
                    <span className="text-xs text-gray-500">₹1000 - ₹5000</span>
                  </div>
                  <input 
                    type="range" 
                    min={1000} 
                    max={5000} 
                    step={100} 
                    defaultValue={3000}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
                
                {/* Transmission */}
                <div>
                  <label className="block text-xs font-medium mb-1">Transmission</label>
                  <div className="flex gap-2">
                    <button className="bg-accent text-primary text-xs py-1.5 px-3 rounded border border-primary/20 font-medium flex-1">Automatic</button>
                    <button className="bg-white text-xs py-1.5 px-3 rounded border border-gray-200 hover:bg-accent hover:text-primary transition-colors flex-1">Manual</button>
                  </div>
                </div>
                
                {/* Seating */}
                <div>
                  <label className="block text-xs font-medium mb-1">Seating</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="bg-white text-xs py-1.5 rounded border border-gray-200 hover:bg-accent hover:text-primary transition-colors">4</button>
                    <button className="bg-accent text-primary text-xs py-1.5 rounded border border-primary/20 font-medium">5</button>
                    <button className="bg-white text-xs py-1.5 rounded border border-gray-200 hover:bg-accent hover:text-primary transition-colors">7</button>
                  </div>
                </div>
                
                {/* Fuel Type */}
                <div>
                  <label className="block text-xs font-medium mb-1">Fuel Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-accent text-primary text-xs py-1.5 px-3 rounded border border-primary/20 font-medium">Petrol</button>
                    <button className="bg-white text-xs py-1.5 px-3 rounded border border-gray-200 hover:bg-accent hover:text-primary transition-colors">Diesel</button>
                    <button className="bg-white text-xs py-1.5 px-3 rounded border border-gray-200 hover:bg-accent hover:text-primary transition-colors">Electric</button>
                    <button className="bg-white text-xs py-1.5 px-3 rounded border border-gray-200 hover:bg-accent hover:text-primary transition-colors">Hybrid</button>
                  </div>
                </div>
                
                {/* Rating */}
                <div>
                  <label className="block text-xs font-medium mb-1">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1,2,3,4,5].map(star => (
                      <button 
                        key={star}
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          star <= 4 ? 'bg-primary text-white' : 'bg-white text-gray-400 border border-gray-200'
                        }`}
                      >
                        {star}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <button className="w-full bg-primary text-white py-2 rounded-full font-medium text-sm hover:bg-primary-hover transition-colors">Apply Filter</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CarsListing;