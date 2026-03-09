import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, IndianRupee, Check } from 'lucide-react';
import { clsx } from 'clsx';

function AttractionCard({ attraction, isSelected, onToggle }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={clsx(
        "relative rounded-xl border-2 overflow-hidden cursor-pointer transition-all duration-300",
        isSelected 
          ? "border-orange-500 bg-orange-50 shadow-md" 
          : "border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-orange-200"
      )}
      onClick={() => onToggle(attraction)}
    >
      <div className="flex flex-col sm:flex-row h-full">
        {/* Image Section */}
        <div className="sm:w-32 h-32 sm:h-auto relative flex-shrink-0">
          <img 
            src={attraction.image} 
            alt={attraction.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
            {attraction.category.split(' ')[0]}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{attraction.name}</h3>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-orange-500 rounded-full p-0.5"
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
              )}
            </div>
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">{attraction.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-orange-400" />
              {attraction.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1 text-orange-400" />
              {attraction.estimatedTime} hrs
            </div>
            <div className="flex items-center font-bold text-orange-600 ml-auto">
              <span className="text-gray-400 font-normal mr-1">Add for</span>
              <IndianRupee className="w-3 h-3" />
              {attraction.additionalCost.toLocaleString('en-IN')}
            </div>
          </div>
        </div>
      </div>
      
      {/* Selection Overlay Effect */}
      {isSelected && (
        <div className="absolute inset-0 border-2 border-orange-500 rounded-xl pointer-events-none" />
      )}
    </motion.div>
  );
}

export default AttractionCard;