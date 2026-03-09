import React from 'react';
import { IndianRupee, CheckCircle2, ArrowLeft, Car, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function CustomizationSummary({ 
  basePackage, 
  selectedAttractions, 
  totalPrice, 
  onModify, 
  onProceed,
  selectedVehicle,
  includeTransport
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
    >
      <div 
        className="p-6 text-white"
        style={{ background: 'linear-gradient(to right, var(--theme-primary), var(--theme-secondary))' }}
      >
        <h2 className="text-2xl font-bold mb-1">Package Summary</h2>
        <p className="opacity-90">Review your customized experience</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Core Package */}
        <div className="flex justify-between items-start pb-4 border-b border-gray-100">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{basePackage.name}</h3>
            <p className="text-sm text-gray-500">{basePackage.duration}</p>
          </div>
          <div className="text-right">
             <div className="flex items-center justify-end font-medium text-gray-900">
              <IndianRupee className="w-4 h-4" />
              {basePackage.price.toLocaleString('en-IN')}
            </div>
            <span className="text-xs text-gray-400">Base Price</span>
          </div>
        </div>

        {/* Selected Vehicle */}
        {selectedVehicle && (
          <div className="flex justify-between items-start pb-4 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
                <h3 className="font-semibold text-gray-700 text-sm">Vehicle: {selectedVehicle.name}</h3>
              </div>
              <p className="text-xs text-gray-400 pl-6">{selectedVehicle.capacity}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end font-medium text-gray-900">
                {selectedVehicle.additionalCost === 0 ? (
                  <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">INCLUDED</span>
                ) : (
                  <>
                    + <IndianRupee className="w-3 h-3" />
                    {selectedVehicle.additionalCost.toLocaleString('en-IN')}
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Transport Option */}
        {includeTransport && (
          <div className="flex justify-between items-start pb-4 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-blue-600" />
                <h3 className="font-semibold text-gray-700 text-sm">Flight/Train Assistance</h3>
              </div>
              <p className="text-xs text-blue-500 mt-1 max-w-[200px]">
                *Costs added after confirmation call
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">ON REQUEST</span>
            </div>
          </div>
        )}

        {/* Selected Add-ons */}
        {selectedAttractions.length > 0 ? (
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
              Selected Add-ons ({selectedAttractions.length})
            </h4>
            <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
              {selectedAttractions.map(attr => (
                <div key={attr.id} className="flex justify-between text-sm">
                  <span className="text-gray-700">{attr.name}</span>
                  <span className="font-medium text-gray-900 flex items-center">
                    + <IndianRupee className="w-3 h-3" />
                    {attr.additionalCost.toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500 text-sm">No additional experiences selected</p>
          </div>
        )}

        {/* Total */}
        <div 
          className="p-4 rounded-xl border"
          style={{ backgroundColor: 'var(--theme-accent)', borderColor: 'var(--theme-primary)' }}
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-700 font-semibold">Total Estimated Price</span>
            <div className="flex items-center text-2xl font-bold" style={{ color: 'var(--theme-text)' }}>
              <IndianRupee className="w-5 h-5" />
              {totalPrice.toLocaleString('en-IN')}
            </div>
          </div>
          <p className="text-xs text-gray-500 text-right">*Taxes included</p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <Button 
            variant="outline" 
            onClick={onModify}
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Modify
          </Button>
          <Button 
            onClick={onProceed}
            className="text-white shadow-md hover:shadow-lg"
            style={{ backgroundColor: 'var(--theme-primary)' }}
          >
            Proceed
            <CheckCircle2 className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default CustomizationSummary;