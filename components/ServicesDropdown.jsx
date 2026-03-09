import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Train, Building2, Car, Plane, Bike, Briefcase } from 'lucide-react';

const services = [
  { name: 'Train Booking', path: '/train-booking', icon: Train, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'Hotel Booking', path: '/hotel-booking', icon: Building2, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'Cab Booking', path: '/cab-booking', icon: Car, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { name: 'Flight Booking', path: '/flight-booking', icon: Plane, color: 'text-sky-600', bg: 'bg-sky-50' },
  { name: 'Bike Rentals', path: '/bike-rentals', icon: Bike, color: 'text-green-600', bg: 'bg-green-50' },
  { name: 'Airport Transfers', path: '/airport-transfers', icon: Plane, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'Corporate Tours', path: '/corporate-tours', icon: Briefcase, color: 'text-slate-600', bg: 'bg-slate-50' },
];

function ServicesDropdown({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className={`flex items-center space-x-1 font-medium transition-colors hover:scale-105 transform duration-200 ${
          isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-200'
        }`}
      >
        <span>Services</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="p-2 space-y-1 max-h-[400px] overflow-y-auto">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                >
                  <div className={`w-8 h-8 rounded-full ${service.bg} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className={`w-4 h-4 ${service.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover/item:text-orange-600 transition-colors">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="bg-orange-50 p-3 text-center">
              <span className="text-xs font-bold text-orange-600">Need immediate assistance? Call us!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ServicesDropdown;