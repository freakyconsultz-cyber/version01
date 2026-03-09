
import React from 'react';
import { motion } from 'framer-motion';
import { useTravelMode } from '@/contexts/TravelModeContext';

function TravelModeToggle() {
  const { currentMode } = useTravelMode();

  // Only displaying Solo Mode as active
  return (
    <div className="w-full max-w-5xl mx-auto px-4 text-center">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Specialized For Solo Travelers</h3>
        <p className="text-gray-500">Curated experiences designed for your individual journey</p>
      </div>
      
      <div className="inline-flex justify-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`
            relative flex items-center space-x-3 px-8 py-4 rounded-full shadow-lg transition-all duration-300
            bg-primary text-white border-transparent ring-4 ring-pink-100
          `}
        >
          <span className="text-2xl">{currentMode.icon}</span>
          <span className="font-bold text-lg">{currentMode.label} Mode Active</span>
        </motion.div>
      </div>
    </div>
  );
}

export default TravelModeToggle;
