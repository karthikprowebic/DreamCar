
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import CarSlider from '../components/CarSlider';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import { Car, Search, Shield, Clock, Users, Star, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Business Owner',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Dream Car provided exceptional service. The process was smooth and the car exceeded my expectations. Highly recommend!',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Doctor',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    text: 'I found my dream car at Dream Car Services. The staff was knowledgeable and helped me find the perfect match for my needs.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 5,
    text: 'Outstanding dealership with a great selection of cars. The buying process was transparent and quick. I\'ll definitely be returning!',
  },
  {
    id: 4,
    name: 'Emily Wilson',
    role: 'Teacher',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    rating: 5,
    text: 'The team at Dream Car went above and beyond to help me find the right car. The after-sales service has been excellent too!',
  },
];

const statsData = [
  { value: '99', label: 'Cars in Stock' },
  { value: '10+', label: 'Years Experience' },
  { value: '25+', label: 'Brand Partners' },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dream Car - Find Your Perfect Car</title>
        <meta name="description" content="Find your dream car with our premium car dealership. We offer the best cars with exceptional service." />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h5 className="text-brand-green font-medium mb-3">Why Choose Us</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on offering the best car buying experience with exceptional service and a wide selection of premium vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Car}
              title="Wide Selection"
              description="Choose from our vast inventory of high-quality vehicles to find your perfect match."
            />
            <FeatureCard
              icon={Shield}
              title="Quality Assurance"
              description="All our vehicles undergo rigorous inspection to ensure the highest quality standards."
            />
            <FeatureCard
              icon={Clock}
              title="Fast & Easy Process"
              description="Our streamlined process makes buying a car quick and hassle-free."
            />
            <FeatureCard
              icon={Users}
              title="Expert Support"
              description="Our team of experts is always ready to assist you with any questions or concerns."
            />
          </div>
        </div>
      </section>

      {/* Car Slider Section */}
      <CarSlider />

      {/* Stats Section - Modified to match the Figma design */}
      <section className="py-16 orange-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-white text-opacity-90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dream Car Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h5 className="text-brand-green font-medium mb-3">Our Services</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">DREAM CAR SERVICES</h2>
              <p className="text-gray-600 mb-8">
                At Dream Car Services, we provide a comprehensive range of services designed to make your car buying and ownership experience exceptional. From finding the perfect car to maintaining it in top condition, we've got you covered every step of the way.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-lightGreen rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Car size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">New Car Sales</h3>
                    <p className="text-gray-600 text-sm">Explore our selection of brand new vehicles from top manufacturers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-lightGreen rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Search size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Used Car Sales</h3>
                    <p className="text-gray-600 text-sm">Find certified pre-owned cars that meet our strict quality standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-lightGreen rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Financing Options</h3>
                    <p className="text-gray-600 text-sm">Flexible financing solutions tailored to your budget and needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-brand-lightGreen rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Warranty Service</h3>
                    <p className="text-gray-600 text-sm">Comprehensive warranty packages for peace of mind.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center bg-brand-green text-white py-3 px-8 rounded-md hover:bg-opacity-90 transition-all hover-lift"
              >
                View All Services
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
                alt="Dream Car Services"
                className="rounded-xl shadow-lg w-full object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="flex items-center mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4616/4616717.png"
                    alt="Dream Car Logo"
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Dream Car App</h3>
                    <p className="text-gray-600 text-sm">Download now</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                    alt="Google Play"
                    className="h-8"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                    alt="App Store"
                    className="h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h5 className="text-brand-green font-medium mb-3">Testimonials</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Dream Car.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-block border border-brand-green text-brand-green font-medium py-3 px-8 rounded-md hover:bg-brand-lightGreen transition-all hover-lift"
            >
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-20 green-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Car?</h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Explore our inventory or get in touch with our team to start your journey towards your dream car today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cars"
              className="bg-white text-brand-green py-3 px-8 rounded-md hover:bg-opacity-90 transition-all hover-lift"
            >
              Explore Inventory
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md hover:bg-white hover:bg-opacity-10 transition-all hover-lift"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Index;
