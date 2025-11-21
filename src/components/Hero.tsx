import { ArrowRight, Sparkles } from 'lucide-react';
import Features from './Features';
import Testimonials from './Testimonials';
import FeaturedCompany from './FeaturedCompany';
import ProductSpecs from './ProductSpecs';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

function Hero({ setActiveSection }: HeroProps) {
  return (
    // increase min height so hero occupies more vertical space and provides scroll room
    <div className="pt-16 min-h-[120vh] flex items-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 animate-fade-in">
            <Sparkles size={16} className="mr-2" />
            <span className="text-sm font-medium">Creating the Future</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            Innovations That
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Shape Tomorrow
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Exploring the intersection of technology, creativity, and human potential.
            Every creation tells a story of possibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('innovations')}
              className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 flex items-center justify-center"
            >
              Explore Innovations
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className="px-8 py-4 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200"
            >
              Learn More
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-cyan-600 mb-2">15+</div>
              <div className="text-gray-600">Awards Received</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
          </div>

          {/* Elevated featured company section with enhanced styling */}
          <div className="mt-32 mb-16">
            <FeaturedCompany setActiveSection={setActiveSection} />
          </div>
          <ProductSpecs />
          {/* Additional home sections */}
          <Features />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default Hero;
