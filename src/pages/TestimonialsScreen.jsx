import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Amish Bangalore',
    image: 'https://ui-avatars.com/api/?name=Amish+B&background=eef2ff&color=6366f1',
    rating: 4.8,
    text: 'Proident auctor purus lacinia ante egestas, ac vestibulum ante pulvinar. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros.',
  },
  {
    id: 2,
    name: 'Amish Bangalore',
    image: 'https://ui-avatars.com/api/?name=Amish+B&background=eef2ff&color=6366f1',
    rating: 4.9,
    text: 'Proident auctor purus lacinia ante egestas, ac vestibulum ante pulvinar. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros.',
  },
  {
    id: 3,
    name: 'Amish Bangalore',
    image: 'https://ui-avatars.com/api/?name=Amish+B&background=eef2ff&color=6366f1',
    rating: 4.7,
    text: 'Proident auctor purus lacinia ante egestas, ac vestibulum ante pulvinar. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros.',
  },
  {
    id: 4,
    name: 'Amish Bangalore',
    image: 'https://ui-avatars.com/api/?name=Amish+B&background=eef2ff&color=6366f1',
    rating: 4.8,
    text: 'Proident auctor purus lacinia ante egestas, ac vestibulum ante pulvinar. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros.',
  }
];

const hosts = [
  {
    id: 1,
    name: 'Dadabhai Vatkari, Mumbai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    description: 'Flexible pricing control',
    quote: 'Proident auctor purus lacinia ante egestas, ac vestibulum ante pulvinar. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros.',
  },
  {
    id: 2,
    name: 'Dadabhai Vatkari, Mumbai',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    description: 'Flexible pricing control',
    quote: 'Proident auctor purus lacinia ante egestas, ac vestibulum ante pulvinar. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros.',
  },
  {
    id: 3,
    name: 'Dadabhai Vatkari, Mumbai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    description: 'Flexible pricing control',
    quote: 'Proident auctor purus lacinia ante egestas, ac vestibulum ante pulvinar. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros.',
  },
  {
    id: 4,
    name: 'Dadabhai Vatkari, Mumbai',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    description: 'Flexible pricing control',
    quote: 'Proident auctor purus lacinia ante egestas, ac vestibulum ante pulvinar. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros.',
  }
];

function TestimonialsScreen() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80" alt="Dream Car" className="h-8" />
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded-full text-sm">Contact Us</button>
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <img src="https://ui-avatars.com/api/?name=User" alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </header>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-green-600">Our Testimonials</h2>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-green-600">{testimonial.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <span>★</span>
                        <span className="text-sm text-gray-600">{testimonial.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 text-sm">{testimonial.text}</p>
                </div>
              ))}
            </div>
            
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <ChevronLeft className="w-6 h-6 text-green-600" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <ChevronRight className="w-6 h-6 text-green-600" />
            </button>
          </div>

          <div className="mt-8 text-center">
            <button className="text-green-600 font-medium">See more</button>
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12 text-green-600">Hear from our Hosts</h2>
          
          <div className="grid grid-cols-4 gap-8">
            {hosts.map((host) => (
              <div key={host.id} className="text-center">
                <img
                  src={host.image}
                  alt={host.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold mb-2 text-green-600">{host.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{host.description}</p>
                <div className="flex justify-center gap-1 mb-3">
                  <span className="text-green-600 text-2xl">"</span>
                  <span className="text-green-600 text-2xl">"</span>
                </div>
                <blockquote className="text-sm text-gray-600">
                  {host.quote}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialsScreen;