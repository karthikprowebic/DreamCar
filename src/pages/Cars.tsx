
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Filter, ChevronDown } from 'lucide-react';
import CarCard from '../components/CarCard';

const cars = [
  {
    id: 1,
    name: 'Maruti Suzuki Swift',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    year: 2023,
    rating: 4.8,
    features: ['Automatic', 'Petrol', '5 Seats'],
    brand: 'Maruti Suzuki',
    type: 'Hatchback',
  },
  {
    id: 2,
    name: 'Honda City',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    year: 2023,
    rating: 4.7,
    features: ['Manual', 'Diesel', '5 Seats'],
    brand: 'Honda',
    type: 'Sedan',
  },
  {
    id: 3,
    name: 'Hyundai Creta',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    year: 2023,
    rating: 4.9,
    features: ['Automatic', 'Petrol', '5 Seats'],
    brand: 'Hyundai',
    type: 'SUV',
  },
  {
    id: 4,
    name: 'Toyota Fortuner',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    year: 2023,
    rating: 4.9,
    features: ['Automatic', 'Diesel', '7 Seats'],
    brand: 'Toyota',
    type: 'SUV',
  },
  {
    id: 5,
    name: 'Mahindra Thar',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    year: 2023,
    rating: 4.7,
    features: ['Manual', 'Diesel', '4 Seats'],
    brand: 'Mahindra',
    type: 'SUV',
  },
  {
    id: 6,
    name: 'BMW 3 Series',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    year: 2023,
    rating: 4.9,
    features: ['Automatic', 'Petrol', '5 Seats'],
    brand: 'BMW',
    type: 'Sedan',
  },
  {
    id: 7,
    name: 'Audi Q5',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    year: 2023,
    rating: 4.8,
    features: ['Automatic', 'Petrol', '5 Seats'],
    brand: 'Audi',
    type: 'SUV',
  },
  {
    id: 8,
    name: 'Mercedes-Benz C-Class',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    year: 2023,
    rating: 4.9,
    features: ['Automatic', 'Petrol', '5 Seats'],
    brand: 'Mercedes-Benz',
    type: 'Sedan',
  },
];

const brandFilters = ['All Brands', 'Maruti Suzuki', 'Honda', 'Hyundai', 'Toyota', 'Mahindra', 'BMW', 'Audi', 'Mercedes-Benz'];
const typeFilters = ['All Types', 'Sedan', 'SUV', 'Hatchback'];
const priceRanges = ['All Prices', 'Under $10,000', '$10,000 - $20,000', '$20,000 - $50,000', 'Above $50,000'];

const Cars = () => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let results = cars;

    // Apply search filter
    if (searchTerm) {
      results = results.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply brand filter
    if (selectedBrand !== 'All Brands') {
      results = results.filter((car) => car.brand === selectedBrand);
    }

    // Apply type filter
    if (selectedType !== 'All Types') {
      results = results.filter((car) => car.type === selectedType);
    }

    // Apply price filter
    if (selectedPrice !== 'All Prices') {
      switch (selectedPrice) {
        case 'Under $10,000':
          results = results.filter((car) => car.price < 10000);
          break;
        case '$10,000 - $20,000':
          results = results.filter((car) => car.price >= 10000 && car.price <= 20000);
          break;
        case '$20,000 - $50,000':
          results = results.filter((car) => car.price > 20000 && car.price <= 50000);
          break;
        case 'Above $50,000':
          results = results.filter((car) => car.price > 50000);
          break;
        default:
          break;
      }
    }

    setFilteredCars(results);
  }, [searchTerm, selectedBrand, selectedType, selectedPrice]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <Helmet>
        <title>Cars - Dream Car</title>
        <meta name="description" content="Explore our collection of premium cars at Dream Car. Find your perfect vehicle with our extensive inventory." />
      </Helmet>

      {/* Page Header */}
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">List of Cars</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore our extensive collection of premium vehicles. Use the filters to find your perfect match.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b sticky top-[80px] z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex-1 md:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search cars..."
                  className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden flex items-center justify-center bg-gray-100 rounded-md py-3 px-4"
              onClick={toggleFilters}
            >
              <Filter size={20} className="mr-2" />
              <span>Filters</span>
              <ChevronDown
                size={20}
                className={`ml-2 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex space-x-4">
              {/* Brand Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-gray-100 border border-gray-200 rounded-md py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  {brandFilters.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              {/* Type Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-gray-100 border border-gray-200 rounded-md py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {typeFilters.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              {/* Price Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-gray-100 border border-gray-200 rounded-md py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                >
                  {priceRanges.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Mobile Filters (Collapsible) */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 grid grid-cols-1 gap-4 animate-fade-in">
              {/* Brand Filter */}
              <div className="relative">
                <select
                  className="appearance-none w-full bg-gray-100 border border-gray-200 rounded-md py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  {brandFilters.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              {/* Type Filter */}
              <div className="relative">
                <select
                  className="appearance-none w-full bg-gray-100 border border-gray-200 rounded-md py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {typeFilters.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              {/* Price Filter */}
              <div className="relative">
                <select
                  className="appearance-none w-full bg-gray-100 border border-gray-200 rounded-md py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                >
                  {priceRanges.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Car Listings */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredCars.length > 0 ? (
            <>
              <p className="mb-6 text-gray-600">Showing {filteredCars.length} cars</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCars.map((car) => (
                  <CarCard
                    key={car.id}
                    id={car.id}
                    name={car.name}
                    price={car.price}
                    image={car.image}
                    year={car.year}
                    rating={car.rating}
                    features={car.features}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No cars found</h3>
              <p className="text-gray-600 mb-8">
                We couldn't find any cars matching your search criteria. Please try different filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBrand('All Brands');
                  setSelectedType('All Types');
                  setSelectedPrice('All Prices');
                }}
                className="bg-brand-green text-white py-3 px-8 rounded-md hover:bg-opacity-90 transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cars;
