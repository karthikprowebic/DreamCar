import React, { useState } from 'react';
import { FaArrowLeft, FaSearch, FaHeart, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

function Cars() {
  // State management
  const [activeTab, setActiveTab] = useState('cars');
  const [carTypeFilter, setCarTypeFilter] = useState('All');
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState({});
  const [searchParams, setSearchParams] = useState({
    location: 'City Center',
    pickupDate: '03-24-2025',
    returnDate: '03-26-2025'
  });

  // Sample car data with consistent setup matching the image
  const cars = [
    { id: 1, name: 'Toyota Corolla', price: 55.50, favorite: false, image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" },
    { id: 2, name: 'Honda Civic', price: 60.75, favorite: false, image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" },
    { id: 3, name: 'Ford Mustang', price: 120.00, favorite: false, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" },
    { id: 4, name: 'Tesla Model 3', price: 150.25, favorite: false, image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" },
    { id: 5, name: 'BMW X5', price: 130.50, favorite: false, image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" },
    { id: 6, name: 'Audi A4', price: 110.00, favorite: false, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" },
    { id: 7, name: 'Hyundai Tucson', price: 70.00, favorite: false, image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" },
    { id: 8, name: 'Chevrolet Camaro', price: 140.00, favorite: false, image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" },
    { id: 9, name: 'Jeep Wrangler', price: 95.00, favorite: false, image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" },
    { id: 10, name: 'Volkswagen Golf', price: 65.00, favorite: false, image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" },
    { id: 11, name: 'Mercedes-Benz C-Class', price: 125.00, favorite: false, image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" },
    { id: 12, name: 'Nissan Altima', price: 75.00, favorite: false, image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" },
  ];

  // Filter categories from the image
  const carTypes = ['All', 'SUV', 'Sedan', 'Hatchback', 'Mini'];
  const fuelTypes = ['Petrol', 'CNG', 'Diesel'];
  const transmissionTypes = ['Manual', 'Auto'];
  const colors = ['Red', 'White', 'Black', 'Blue', 'Silver'];
  const features = ['AC', 'Music System', 'Power Window', 'ABS'];

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Reset all filters
  const resetFilters = () => {
    setCarTypeFilter('All');
    setPriceRangeFilter([0, 100]);
  };

  // Handle search input changes
  const handleSearchChange = (field, value) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Submit search
  const handleSearch = () => {
    console.log('Searching with params:', searchParams);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 mt-20">
      {/* Top navigation */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-semibold text-sm">Destination</span>
          <FaChevronDown className="ml-1" size={10} />
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-pink-500 px-4 py-1 rounded-full text-xs font-medium">Find Cars</button>
          <button className="bg-white text-pink-500 px-4 py-1 rounded-full text-xs font-medium">Get the App</button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto p-4 flex flex-col md:flex-row gap-4">
        {/* Car grid and main content */}
        <div className="flex-grow">
          {/* Banner with blue car image */}
          <div className="relative mb-4 rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Car promotion" className="w-full h-28 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-transparent"></div>
            <div className="absolute top-0 left-0 p-4 text-white">
              <h3 className="text-lg font-bold">MAXIMUM COMFORT</h3>
              <p className="text-sm">50% off on your first booking</p>
              <button className="mt-2 bg-white text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Book Now</button>
            </div>
          </div>

          {/* Search panel */}
          <div className="mb-4 p-3 bg-white rounded-lg shadow-sm">
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Pickup Location</span>
                <div className="flex items-center border-b border-gray-200 py-1">
                  <input
                    type="text"
                    value={searchParams.location}
                    onChange={(e) => handleSearchChange('location', e.target.value)}
                    className="w-full text-sm focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Pickup Date</span>
                <div className="flex items-center border-b border-gray-200 py-1">
                  <input
                    type="text"
                    value={searchParams.pickupDate}
                    onChange={(e) => handleSearchChange('pickupDate', e.target.value)}
                    className="w-full text-sm focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Return Date</span>
                <div className="flex items-center border-b border-gray-200 py-1">
                  <input
                    type="text"
                    value={searchParams.returnDate}
                    onChange={(e) => handleSearchChange('returnDate', e.target.value)}
                    className="w-full text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="mt-3 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-full text-sm font-medium"
            >
              Search
            </button>
          </div>

          {/* Car grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {cars.map(car => (
              <div key={car.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative">
                  <img src={car.image} alt={car.name} className="w-full h-28 object-cover" />
                  <button
                    className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-sm"
                    onClick={() => toggleFavorite(car.id)}
                  >
                    <FaHeart className={favorites[car.id] ? "text-green-500" : "text-gray-300"} size={14} />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm">{car.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <span className="font-bold text-sm text-emerald-600">${car.price}</span>
                      <span className="text-xs text-gray-500">/day</span>
                    </div>
                    <button className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">Book</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mb-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                    currentPage === page ? 'bg-emerald-500 text-white' : 'bg-white text-gray-600 border border-gray-200'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter sidebar */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-base">Filter</h3>
            <span
              className="text-pink-500 text-xs cursor-pointer"
              onClick={resetFilters}
            >
              Reset All
            </span>
          </div>

          {/* Delivery Location */}
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Delivery Location</h4>
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <input
                type="text"
                placeholder="Enter location"
                className="w-full focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Available Cars */}
          <div className="mb-4">
            <div className="flex justify-between">
              <h4 className="font-medium text-sm mb-2">Available Cars</h4>
              <span className="text-xs text-emerald-500 font-medium">30</span>
            </div>
          </div>

          {/* Car Type filter */}
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Car Type</h4>
            <div className="flex flex-wrap gap-2">
              {carTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setCarTypeFilter(type)}
                  className={`px-3 py-1 rounded-full text-xs ${
                    carTypeFilter === type ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range filter */}
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Price</h4>
            <div className="px-2">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>${priceRangeFilter[0]}</span>
                <span>${priceRangeFilter[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRangeFilter[1]}
                onChange={(e) => setPriceRangeFilter([priceRangeFilter[0], parseInt(e.target.value)])}
                className="w-full accent-emerald-500"
              />
            </div>
          </div>

          {/* Features filter */}
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Features</h4>
            <div className="space-y-2">
              {features.map(feature => (
                <div key={feature} className="flex items-center">
                  <input type="checkbox" id={feature} className="mr-2 accent-emerald-500" />
                  <label htmlFor={feature} className="text-xs">{feature}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Fuel Type filter */}
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Fuel Type</h4>
            <div className="flex flex-wrap gap-2">
              {fuelTypes.map(type => (
                <button
                  key={type}
                  className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Transmission filter */}
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Transmission Type</h4>
            <div className="flex gap-2">
              {transmissionTypes.map(type => (
                <button
                  key={type}
                  className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Colors filter */}
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Car Color</h4>
            <div className="flex flex-wrap gap-2">
              {colors.map(color => (
                <button
                  key={color}
                  className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cars;