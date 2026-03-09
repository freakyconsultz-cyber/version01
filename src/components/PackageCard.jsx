
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, IndianRupee, Clock, ImageOff, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function PackageCard({ package: pkg }) {
  const navigate = useNavigate();

  // Validate package object
  if (!pkg || !pkg.id) {
    return (
      <div className="h-full bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 p-8">
        <div className="text-center text-gray-400">
          <AlertCircle className="w-10 h-10 mx-auto mb-2" />
          <p className="text-sm">Package information unavailable</p>
        </div>
      </div>
    );
  }

  const {
    name = 'Untitled Package',
    description = 'No description available',
    price = 0,
    duration = 'N/A',
    destination = 'Unknown',
    images = []
  } = pkg;

  const mainImage = Array.isArray(images) && images.length > 0 ? images[0] : null;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-visible h-full flex flex-col"
    >
      {/* Layered Effect Backgrounds */}
      <div className="absolute top-2 left-2 right-2 bottom-0 bg-pink-100 rounded-xl z-0 transform translate-y-2 scale-[0.98] transition-transform group-hover:translate-y-3"></div>
      <div className="absolute top-4 left-4 right-4 bottom-0 bg-pink-50 rounded-xl z-0 transform translate-y-4 scale-[0.96] transition-transform group-hover:translate-y-6"></div>

      {/* Main Card Content */}
      <div className="relative z-10 bg-white rounded-xl overflow-hidden h-full flex flex-col border border-pink-100">
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gray-200">
          {/* Duration Badge */}
          <div 
            className="absolute top-4 right-4 z-20 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-lg backdrop-blur-md flex items-center gap-1 bg-[#b8336a]"
          >
            <Clock className="w-3 h-3" />
            {duration}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#b8336a]/90 to-transparent z-10 pointer-events-none"></div>
          
          {mainImage ? (
            <img 
              src={mainImage} 
              alt={name} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          
          {/* Fallback for missing or error image */}
          <div 
            className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400"
            style={{ display: mainImage ? 'none' : 'flex' }}
          >
            <div className="text-center">
              <ImageOff className="w-10 h-10 mx-auto mb-2 opacity-50" />
              <span className="text-xs">Image unavailable</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-20">
             <div className="text-white">
                <div className="flex items-center text-xs opacity-90 mb-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {destination}
                </div>
                <h3 className="text-xl font-bold leading-tight shadow-black drop-shadow-md line-clamp-2">{name}</h3>
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Starting from</p>
              <p className="text-xl font-bold flex items-center text-[#b8336a]">
                <IndianRupee className="w-4 h-4" /> {price.toLocaleString('en-IN')}
              </p>
            </div>
            <Button 
              onClick={() => navigate(`/package/${pkg.id}`)}
              className="text-white rounded-lg transition-colors bg-[#b8336a] hover:bg-[#a02c5c]"
            >
              View Details <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PackageCard;
