import React, { useMemo } from 'react';
import { IndianRupee, Calculator, Plus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function PriceCalculator({ basePrice, selectedAttractions = [] }) {
  const addOnsTotal = useMemo(() => {
    return selectedAttractions.reduce((sum, item) => sum + item.additionalCost, 0);
  }, [selectedAttractions]);

  const finalPrice = basePrice + addOnsTotal;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-orange-100 rounded-lg">
          <Calculator className="w-5 h-5 text-orange-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Price Breakdown</h3>
      </div>

      <div className="space-y-4">
        {/* Base Price */}
        <div className="flex justify-between items-center text-gray-600">
          <span>Base Package Price</span>
          <div className="flex items-center font-medium">
            <IndianRupee className="w-3.5 h-3.5" />
            {basePrice.toLocaleString('en-IN')}
          </div>
        </div>

        {/* Add-ons List */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm font-medium text-gray-500">
            <span>Selected Add-ons ({selectedAttractions.length})</span>
            {addOnsTotal > 0 && (
              <span className="text-orange-600">
                + <IndianRupee className="inline w-3 h-3" />
                {addOnsTotal.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          
          <AnimatePresence>
            {selectedAttractions.map((attraction) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex justify-between items-center text-sm text-gray-500 pl-3 border-l-2 border-orange-200"
              >
                <span className="truncate pr-4">{attraction.name}</span>
                <div className="flex items-center flex-shrink-0">
                  <IndianRupee className="w-3 h-3" />
                  {attraction.additionalCost.toLocaleString('en-IN')}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-4" />

        {/* Total Price */}
        <div className="flex justify-between items-end">
          <span className="text-gray-900 font-bold text-lg">Total Price</span>
          <motion.div 
            key={finalPrice}
            initial={{ scale: 1.1, color: '#ea580c' }}
            animate={{ scale: 1, color: '#111827' }}
            className="flex items-center font-bold text-2xl"
          >
            <IndianRupee className="w-5 h-5" />
            {finalPrice.toLocaleString('en-IN')}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PriceCalculator;