
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  year: number;
  rating: number;
  features: string[];
}

const CarSlider = () => {
  const cars: Car[] = [
    {
      id: 1,
      name: 'Maruti Suzuki Swift',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      year: 2023,
      rating: 4.8,
      features: ['Automatic', 'Petrol', '5 Seats'],
    },
    {
      id: 2,
      name: 'Honda City',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
      year: 2023,
      rating: 4.7,
      features: ['Manual', 'Diesel', '5 Seats'],
    },
    {
      id: 3,
      name: 'Hyundai Creta',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      year: 2023,
      rating: 4.9,
      features: ['Automatic', 'Petrol', '5 Seats'],
    },
    {
      id: 4,
      name: 'Toyota Fortuner',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      year: 2023,
      rating: 4.9,
      features: ['Automatic', 'Diesel', '7 Seats'],
    },
    {
      id: 5,
      name: 'Mahindra Thar',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      year: 2023,
      rating: 4.7,
      features: ['Manual', 'Diesel', '4 Seats'],
    },
  ];

  const [startIdx, setStartIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsToShow = 3;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStartIdx((prev) => (prev + 1 >= cars.length ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStartIdx((prev) => (prev - 1 < 0 ? cars.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Function to get visible cars based on responsive design
  const getVisibleCars = () => {
    const result = [];
    for (let i = 0; i < cardsToShow; i++) {
      const idx = (startIdx + i) % cars.length;
      result.push(cars[idx]);
    }
    return result;
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-brand-green font-medium mb-3">Featured Cars</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Cars</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium cars that offer the perfect balance of performance, comfort, and style.
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md text-gray-700 p-3 rounded-full hover:bg-gray-50 transition-all hover-lift focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md text-gray-700 p-3 rounded-full hover:bg-gray-50 transition-all hover-lift focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Car cards */}
          <div 
            ref={containerRef}
            className="overflow-hidden"
          >
            <div className={`flex gap-6 transition-transform duration-500 ease-in-out`}>
              {getVisibleCars().map((car) => (
                <div key={car.id} className="w-full md:w-1/3 flex-shrink-0 animate-fade-in">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                          <Heart size={18} className="text-gray-600" />
                        </button>
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                          <Share2 size={18} className="text-gray-600" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-brand-green text-white text-sm font-medium py-1 px-3 rounded-md">
                        {car.year}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">{car.name}</h3>
                        <div className="flex items-center">
                          <Star size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{car.rating}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {car.features.map((feature, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-medium py-1 px-2 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xs text-gray-500">Starting from</span>
                          <p className="text-brand-green font-semibold">${car.price.toLocaleString()}</p>
                        </div>
                        <Link
                          to={`/cars/${car.id}`}
                          className="bg-brand-green text-white py-2 px-4 rounded-md text-sm hover:bg-opacity-90 transition-all"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/cars"
            className="inline-block bg-white border border-brand-green text-brand-green font-medium py-3 px-8 rounded-md hover:bg-brand-lightGreen transition-all hover-lift"
          >
            View All Cars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarSlider;
