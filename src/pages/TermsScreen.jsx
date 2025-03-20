import React from 'react';

function TermsScreen() {
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

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
            alt="Cars"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative px-6 py-24 text-white text-center">
          <h1 className="text-6xl font-bold tracking-wider">TERMS & CONDITIONS</h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-green-600">99</h2>
            <p className="text-gray-600 mt-2">Cities</p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-green-600">10+</h2>
            <p className="text-gray-600 mt-2">Million User</p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-green-600">25+</h2>
            <p className="text-gray-600 mt-2">Cars</p>
          </div>
        </div>
      </section>

      {/* Dream Car Services Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Dream Car Services</h2>
          <p className="text-gray-600 mb-12 max-w-4xl">
            Proident auctor purus lacinia ante egestas, ac vestibulum ante pulvinar. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros. Curabitur et dapibus ex. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros. Curabitur et dapibus ex.
          </p>
          
          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80"
              alt="Dream Car"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-4xl font-bold text-green-600 mb-4">DREAM CAR SERVICES</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proident auctor purus lacinia ante egestas, ac vestibulum ante pulvinar. Donec ut hendrerit ex. Suspendisse ac rhoncus est, ut tempor eros.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsScreen;