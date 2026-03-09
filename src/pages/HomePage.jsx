
import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Shield, Award, PlaneTakeoff, DollarSign, IndianRupee } from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import CategorySection from '@/components/CategorySection';
import HeroCarousel from '@/components/HeroCarousel';
import HeroSearchBar from '@/components/HeroSearchBar';
import ErrorBoundary from '@/components/ErrorBoundary';
import packages from '@/data/packages';

function HomePage() {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: 'Amazing experience! The Char Dham Yatra was perfectly organized. Our driver was professional and the vehicle was very comfortable.',
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'Loved the Kerala tour! Everything was well-planned and the houseboat experience was unforgettable. Highly recommended!',
    },
    {
      name: 'Amit Patel',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Excellent service for Jaipur Heritage tour. The guide was knowledgeable and we got to see all major attractions without any hassle.',
    },
  ];

  // Safe data access
  const featuredPackages = Array.isArray(packages) ? packages.slice(0, 6) : [];

  return (
    <>
      <Helmet>
        <title>freakytourz - Premium Cab Services for India Tours</title>
        <meta
          name="description"
          content="Explore India's sacred and scenic destinations with freakytourz. Book premium cab services for Char Dham, Kerala, Jaipur, Goa, and more."
        />
      </Helmet>

      {/* Hero Section */}
      <ErrorBoundary>
        <section className="relative pb-24 bg-gray-50">
          <HeroCarousel />
          
          {/* Search Bar - Overlaid */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-4">
            <HeroSearchBar />
          </div>
        </section>
      </ErrorBoundary>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: '1000+ Expert Drivers', description: 'Professional and experienced' },
              { icon: Shield, title: 'Safe Travel', description: 'Your safety is our priority' },
              { icon: IndianRupee, title: 'Best Prices', description: 'Competitive and transparent' },
              { icon: Star, title: '5-Star Rated', description: 'Trusted by thousands' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#b8336a] to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <ErrorBoundary>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tour Packages</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Handpicked destinations combining spirituality, culture, and natural beauty
              </p>
            </motion.div>

            {featuredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <PackageCard package={pkg} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
                <p>No featured packages available at the moment.</p>
              </div>
            )}

            <div className="text-center mt-12">
              <Button
                onClick={() => navigate('/packages')}
                variant="outline"
                className="border-[#b8336a] text-[#b8336a] hover:bg-pink-50 px-8 py-3 text-lg font-semibold rounded-lg"
              >
                View All Packages
              </Button>
            </div>
          </div>
        </section>
      </ErrorBoundary>

      {/* Category Section */}
      <ErrorBoundary>
        <CategorySection />
      </ErrorBoundary>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Trusted by thousands of happy travelers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b8336a] to-pink-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Have a Custom Tour in Mind?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              We'll create a personalized itinerary just for you
            </p>
            <Button
              onClick={() => navigate('/custom-request')}
              className="bg-white text-[#b8336a] hover:bg-pink-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Submit Custom Request
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
