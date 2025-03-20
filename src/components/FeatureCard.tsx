
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover-lift transition-all duration-300">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-lightGreen mb-5">
        <Icon size={24} className="text-brand-green" />
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
