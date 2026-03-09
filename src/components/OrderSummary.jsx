
import React from 'react';
import { IndianRupee, CheckCircle2, Car, Hotel, Plane, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function OrderSummary({ 
  basePackage, 
  packageType, 
  totalPrice, 
  onProceed,
  includeTransport,
  selectedVehicle,
  selectedAttractionsInfo = [],
  customizationCost = 0
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden sticky top-24"
    >
      <div className="p-6 text-white bg-[#b8336a]">
        <h2 className="text-2xl font-bold mb-1">Order Summary</h2>
        <p className="opacity-90">Review your customized booking</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Base Package Info */}
        <div className="flex justify-between items-start pb-4 border-b border-gray-100">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{basePackage.name}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
               <Calendar className="w-3 h-3 mr-1" /> {basePackage.duration}
            </div>
          </div>
          <div className="text-right">
             <span className="text-xs text-gray-400 block">Package Type</span>
             <span className="font-semibold text-[#b8336a] uppercase text-sm">
                {packageType.replace('_', ' ')}
             </span>
          </div>
        </div>

        {/* Dynamic Items Breakdown */}
        <div className="space-y-3">
            {/* Cab Section */}
            {(packageType === 'full' || packageType === 'cab_only') && (
                <div className="flex justify-between items-center text-sm text-gray-700">
                    <div className="flex items-center">
                        <Car className="w-4 h-4 mr-2 text-[#b8336a]" />
                        <span>Cab: <span className="font-semibold">{selectedVehicle?.name || 'Standard'}</span></span>
                    </div>
                    {selectedVehicle?.surcharge > 0 ? (
                      <span className="font-medium text-gray-900">+ ₹{selectedVehicle.surcharge}</span>
                    ) : (
                      <span className="text-green-600 font-medium text-xs bg-green-50 px-2 py-0.5 rounded">INCLUDED</span>
                    )}
                </div>
            )}
            
            {/* Hotel Section */}
            {(packageType === 'full' || packageType === 'hotel_only') && (
                <div className="flex justify-between items-center text-sm text-gray-700">
                    <div className="flex items-center">
                        <Hotel className="w-4 h-4 mr-2 text-[#b8336a]" />
                        <span>Hotel Stay</span>
                    </div>
                    <span className="text-green-600 font-medium text-xs bg-green-50 px-2 py-0.5 rounded">INCLUDED</span>
                </div>
            )}

            {/* Customizations */}
            {customizationCost > 0 && (
               <div className="flex justify-between items-center text-sm text-gray-700">
                  <div className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-[#b8336a]" />
                      <span>Solo Add-ons</span>
                  </div>
                  <span className="font-medium text-gray-900">+ ₹{customizationCost}</span>
               </div>
            )}

            {/* Selected Attractions */}
            {selectedAttractionsInfo.length > 0 && (
              <div className="border-t border-dashed border-gray-200 pt-2 mt-2">
                <p className="text-xs font-bold text-gray-500 mb-2">EXTRA ACTIVITIES</p>
                {selectedAttractionsInfo.map((attr) => (
                  <div key={attr.id} className="flex justify-between items-center text-xs text-gray-600 mb-1">
                    <span className="truncate max-w-[180px]">{attr.name}</span>
                    <span>+ ₹{attr.additionalCost}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Flight/Train Warning */}
            {includeTransport && (
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 flex items-start gap-2 mt-2">
                    <Plane className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-xs font-bold text-blue-800">Flight/Train Assistance</p>
                        <p className="text-[10px] text-blue-600 leading-tight mt-1">
                            Booking assistance requested. Costs are NOT included in total price. Our team will soon call you back to finalize your bookings.
                        </p>
                    </div>
                </div>
            )}
        </div>

        {/* Total Price */}
        <div className="p-4 rounded-xl border border-pink-100 bg-pink-50/30">
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-700 font-semibold">Total Estimated Price</span>
            <div className="flex items-center text-2xl font-bold text-[#b8336a]">
              <IndianRupee className="w-5 h-5" />
              {Math.round(totalPrice).toLocaleString('en-IN')}
            </div>
          </div>
          <p className="text-xs text-gray-500 text-right">*GST & Taxes Included</p>
        </div>

        <Button 
            onClick={onProceed}
            className="w-full text-white shadow-md hover:shadow-lg bg-[#b8336a] hover:bg-[#a02c5c] h-12 text-lg font-bold"
        >
            Proceed to Checkout
            <CheckCircle2 className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
}

export default OrderSummary;
