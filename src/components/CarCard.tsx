
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Share2 } from 'lucide-react';

interface CarCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  year: number;
  rating: number;
  features: string[];
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  name,
  price,
  image,
  year,
  rating,
  features,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
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
          {year}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-medium py-1 px-2 rounded">
              {feature}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-500">Starting from</span>
            <p className="text-brand-green font-semibold">${price.toLocaleString()}</p>
          </div>
          <Link
            to={`/cars/${id}`}
            className="bg-brand-green text-white py-2 px-4 rounded-md text-sm hover:bg-opacity-90 transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
