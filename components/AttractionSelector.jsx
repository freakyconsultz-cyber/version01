
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plus, Check, IndianRupee } from 'lucide-react';

function AttractionSelector({ attractions, selectedAttractions, onToggle }) {
  if (!attractions || attractions.length === 0) return null;

  return (
    <div className="space-y-4 mt-8">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <MapPin className="w-5 h-5 text-primary" />
        Places Near To Visit & Activities (Add-ons)
      </h3>
      <p className="text-sm text-gray-500 -mt-3 mb-4">Enhance your trip with these curated experiences (Not included in base package)</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {attractions.map((attraction) => {
          const isSelected = selectedAttractions.includes(attraction.id);
          return (
            <motion.div
              key={attraction.id}
              onClick={() => onToggle(attraction.id)}
              className={`
                relative flex gap-4 p-3 rounded-xl border-2 cursor-pointer transition-all
                ${isSelected ? 'border-primary bg-pink-50/50' : 'border-gray-100 bg-white hover:border-gray-200'}
              `}
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h4 className="font-bold text-gray-900 line-clamp-1">{attraction.name}</h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{attraction.category}</span>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="font-bold text-primary flex items-center">
                    + <IndianRupee size={12} /> {attraction.additionalCost}
                  </div>
                  
                  <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center transition-colors
                    ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}
                  `}>
                    {isSelected ? <Check size={14} /> : <Plus size={14} />}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default AttractionSelector;
