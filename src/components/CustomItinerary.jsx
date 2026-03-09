import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, PlusCircle } from 'lucide-react';

function CustomItinerary({ originalItinerary, selectedAttractions = [] }) {
  // Simple check for total duration implication, though true itinerary merge logic is complex
  // This component displays the original plan and appends custom experiences visually
  
  const totalAddedTime = selectedAttractions.reduce((sum, item) => sum + item.estimatedTime, 0);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-between">
        <span>Your Customized Itinerary</span>
        {totalAddedTime > 0 && (
          <span className="text-sm font-normal px-3 py-1 bg-orange-100 text-orange-700 rounded-full">
            + {totalAddedTime} hrs extra activity
          </span>
        )}
      </h3>

      <div className="space-y-6 relative">
        {/* Vertical connector line */}
        <div className="absolute left-[1.15rem] top-4 bottom-4 w-0.5 bg-gray-200" />

        {/* Original Itinerary Steps */}
        {originalItinerary.map((day, index) => (
          <div key={`day-${index}`} className="relative flex gap-4">
            <div className="flex-shrink-0 z-10">
              <div className="w-10 h-10 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-600 font-bold shadow-sm">
                {day.day}
              </div>
            </div>
            <div className="flex-1 pt-1 pb-4">
              <h4 className="text-lg font-semibold text-gray-900">{day.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{day.description}</p>
            </div>
          </div>
        ))}

        {/* Custom Additions Section */}
        {selectedAttractions.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative flex gap-4 mt-8"
          >
            <div className="flex-shrink-0 z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white shadow-md">
                <PlusCircle className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-1 bg-orange-50 rounded-xl p-4 border border-orange-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Custom Additions</h4>
              <div className="space-y-3">
                {selectedAttractions.map((attraction) => (
                  <div key={attraction.id} className="bg-white p-3 rounded-lg shadow-sm border border-orange-100 flex items-start gap-3">
                    <img src={attraction.image} alt="" className="w-12 h-12 rounded-md object-cover" />
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm">{attraction.name}</h5>
                      <div className="flex items-center text-xs text-gray-500 gap-3 mt-1">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1"/> {attraction.location}</span>
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {attraction.estimatedTime}h</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-orange-700 mt-3 italic">
                * These activities will be integrated into your schedule by our travel experts based on optimal timing.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default CustomItinerary;