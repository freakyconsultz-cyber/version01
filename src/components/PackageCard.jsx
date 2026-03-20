import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, IndianRupee, Clock, ImageOff, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function PackageCard({ package: pkg }) {
  const navigate = useNavigate();

  if (!pkg || !pkg.id) {
    return (
      <div className="h-full bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 p-8">
        <div className="text-center text-gray-400">
          <AlertCircle className="w-10 h-10 mx-auto mb-2" />
          <p className="text-sm">Package unavailable</p>
        </div>
      </div>
    );
  }

  const {
    name = "Untitled Package",
    description = "No description available",
    price = 0,
    duration = "N/A",
    destination = "Unknown",
    images = [],
    featured = false
  } = pkg;

  const mainImage = images?.[0] || null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      onClick={() => navigate(`/packages/${pkg.id}`)}
      className="cursor-pointer group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-visible h-full flex flex-col"
    >

      {/* layered background */}
      <div className="absolute top-2 left-2 right-2 bottom-0 bg-pink-100 rounded-xl z-0 translate-y-2 scale-[0.98]" />
      <div className="absolute top-4 left-4 right-4 bottom-0 bg-pink-50 rounded-xl z-0 translate-y-4 scale-[0.96]" />

      <div className="relative z-10 bg-white rounded-xl overflow-hidden h-full flex flex-col border border-pink-100">

        {/* IMAGE */}
        <div className="relative h-64 overflow-hidden bg-gray-200">

          {/* price badge */}
          <div className="absolute top-4 left-4 z-20 bg-white text-[#b8336a] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            ₹{price.toLocaleString('en-IN')}
          </div>

          {/* duration */}
          <div className="absolute top-4 right-4 z-20 text-white text-xs font-bold px-3 py-1.5 rounded-full bg-[#b8336a] flex items-center gap-1 shadow-lg">
            <Clock className="w-3 h-3" />
            {duration}
          </div>

          {featured && (
            <div className="absolute top-14 left-4 z-20 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
              Best Seller
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#b8336a]/90 to-transparent z-10"></div>

          {mainImage ? (
            <img
              src={mainImage}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : null}

          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          {!mainImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
              <ImageOff className="w-10 h-10" />
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">

            <div className="inline-flex items-center text-xs bg-white/20 backdrop-blur px-2 py-1 rounded-md mb-2">
              <MapPin className="w-3 h-3 mr-1" />
              {destination}
            </div>

            <h3 className="text-xl font-bold line-clamp-2 drop-shadow-md">
              {name}
            </h3>

          </div>

        </div>

        {/* CONTENT */}
        <div className="p-5 flex-1 flex flex-col justify-between">

          <p className="text-gray-600 text-sm line-clamp-3 min-h-[60px] mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">

            <div>
              <p className="text-xs text-gray-500 uppercase">Starting from</p>
              <p className="text-xl font-bold flex items-center text-[#b8336a]">
                <IndianRupee className="w-4 h-4" />
                {price.toLocaleString("en-IN")}
              </p>
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/packages/${pkg.id}`);
              }}
              className="bg-[#b8336a] hover:bg-[#a02c5c] text-white rounded-lg shadow-md hover:shadow-lg"
            >
              View Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default PackageCard;
