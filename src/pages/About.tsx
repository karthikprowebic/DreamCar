
import React from 'react';
import { Helmet } from 'react-helmet';
import { Car, Wrench, Clock, Users, Award, Star, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialCard from '@/components/TestimonialCard';

const teamMembers = [
  {
    id: 1,
    name: 'Robert Smith',
    role: 'CEO & Founder',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Robert has over 15 years of experience in the automotive industry and founded Dream Car with a vision to provide exceptional cars and service.',
  },
  {
    id: 2,
    name: 'Emily Johnson',
    role: 'Sales Manager',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Emily leads our sales team with her extensive knowledge of cars and commitment to customer satisfaction. She ensures every client finds their perfect match.',
  },
  {
    id: 3,
    name: 'David Wilson',
    role: 'Service Director',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    bio: 'David oversees our service department, ensuring all vehicles meet our rigorous quality standards. His team provides top-notch maintenance and repairs.',
  },
  {
    id: 4,
    name: 'Sarah Brown',
    role: 'Finance Manager',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'Sarah helps our customers navigate the financial aspects of car ownership. She works to secure the best financing options tailored to individual needs.',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Dream Car</title>
        <meta name="description" content="Learn about Dream Car, our history, mission, and the team behind our premium car dealership." />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}
        >
          <div className="absolute inset-0 orange-gradient opacity-80"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ABOUT US</h1>
            <p className="text-xl max-w-2xl">Learn about our journey, mission, and the team that makes Dream Car exceptional.</p>
          </div>
        </div>
      </div>

      {/* About the Company */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h5 className="text-brand-green font-medium mb-3">About The Company</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Dream Car was founded in 2010 with a simple yet powerful vision: to transform the car buying experience. We believed that purchasing a car should be exciting, transparent, and tailored to each individual's needs and dreams.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, we've grown from a small local dealership to a trusted name in the automotive industry. Our commitment to quality, exceptional service, and customer satisfaction has remained unwavering throughout our journey.
              </p>
              <p className="text-gray-700 mb-6">
                Today, Dream Car continues to innovate and evolve, offering a premium selection of vehicles and a car buying experience that puts you, the customer, at the center of everything we do.
              </p>
              <div className="flex items-center mt-8">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="CEO"
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Robert Smith</h4>
                  <p className="text-sm text-gray-600">CEO & Founder, Dream Car</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581541650505-9242d2a36ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="About Dream Car"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-md shadow-md">
                <p className="text-brand-green font-bold text-lg">Est. 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-brand-green font-medium mb-3">Our Mission & Values</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Driving with Purpose</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Dream Car, we're driven by a clear mission and guided by core values that define who we are and how we serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Our Mission"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-8">
                To provide exceptional automotive experiences by connecting people with their dream cars through transparent, personalized service and a commitment to quality that exceeds expectations.
              </p>

              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-green mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Excellence</h4>
                    <p className="text-gray-600">We pursue excellence in every aspect of our business, from the quality of our vehicles to the service we provide.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-green mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Integrity</h4>
                    <p className="text-gray-600">We operate with honesty and transparency in all our dealings, building trust with our customers and partners.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-green mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Customer Focus</h4>
                    <p className="text-gray-600">We put our customers at the center of everything we do, striving to exceed their expectations at every turn.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-green mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Innovation</h4>
                    <p className="text-gray-600">We continuously seek new ways to improve our services and offerings, embracing change and technological advancements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-brand-green font-medium mb-3">Our Team</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Experts</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Behind Dream Car's success is a team of dedicated professionals committed to providing you with the best car buying experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-brand-green font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div className="flex space-x-3 mt-6">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 green-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey With Us</h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Ready to find your dream car? Our team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cars"
              className="bg-white text-brand-green py-3 px-8 rounded-md hover:bg-opacity-90 transition-all hover-lift"
            >
              Explore Our Cars
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

export default About;
