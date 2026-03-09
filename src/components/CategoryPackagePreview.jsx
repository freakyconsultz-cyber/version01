
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, IndianRupee, ImageOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CategoryPackagePreview({ packages, categoryColor = '#000000' }) {
  const navigate = useNavigate();

  // Defensive check for packages array
  if (!packages || !Array.isArray(packages) || packages.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 overflow-x-auto pb-4 hide-scrollbar flex gap-4 px-1">
      {packages.map((pkg) => {
        // Skip invalid package objects
        if (!pkg || !pkg.id) return null;

        // Safe access for properties
        const imageUrl = Array.isArray(pkg.images) && pkg.images.length > 0 ? pkg.images[0] : null;
        const price = typeof pkg.price === 'number' ? pkg.price.toLocaleString('en-IN') : 'N/A';
        const name = pkg.name || 'Untitled Package';
        const destination = pkg.destination || 'Unknown Location';

        return (
          <motion.div
            key={pkg.id}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 w-48 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
            onClick={() => navigate(`/package/${pkg.id}`)}
          >
            <div className="h-24 relative bg-gray-200">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              {/* Fallback for missing or broken image */}
              <div 
                className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400"
                style={{ display: imageUrl ? 'none' : 'flex' }}
              >
                <ImageOff className="w-8 h-8" />
              </div>
            </div>
            
            <div className="p-3">
              <h4 className="text-xs font-bold text-gray-900 line-clamp-1 mb-1" title={name}>{name}</h4>
              <div className="flex items-center text-[10px] text-gray-500 mb-1">
                <MapPin className="w-3 h-3 mr-0.5 flex-shrink-0" />
                <span className="truncate">{destination}</span>
              </div>
              <div className="flex items-center text-xs font-bold" style={{ color: categoryColor }}>
                <IndianRupee className="w-3 h-3 flex-shrink-0" />
                {price}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default CategoryPackagePreview;
