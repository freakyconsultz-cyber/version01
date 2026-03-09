
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, IndianRupee } from 'lucide-react';
import { useTravelMode } from '@/contexts/TravelModeContext';

function TravelModeCustomizationPanel() {
  const { 
    currentMode, 
    availableCustomizations, 
    selectedCustomizations, 
    toggleCustomization 
  } = useTravelMode();

  // Safety check: if no customizations available or mode is invalid, return null to prevent crashes
  if (!availableCustomizations || availableCustomizations.length === 0) {
    return null;
  }

  // Safe color extraction with fallback
  const getBackgroundColor = () => {
    if (!currentMode || !currentMode.colors || !currentMode.colors.accent) {
      return 'rgba(248, 113, 113, 0.1)';
    }
    return currentMode.colors.accent;
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-6 bg-opacity-10 border border-gray-100"
        style={{ backgroundColor: getBackgroundColor() }} 
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="text-2xl">{currentMode?.icon || '🎒'}</span>
              {currentMode?.label || 'Travel'} Experience Add-ons
            </h4>
            <p className="text-sm text-gray-600">Recommended enhancements for your trip</p>
          </div>
          <span className="text-xs font-semibold bg-white px-3 py-1 rounded-full shadow-sm text-gray-500">
            {selectedCustomizations.length} selected
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {availableCustomizations.map((option) => {
              const isSelected = selectedCustomizations.includes(option.id);
              return (
                <motion.div
                  key={option.id}
                  layout
                  onClick={() => toggleCustomization(option.id)}
                  className={`
                    cursor-pointer p-4 rounded-xl border transition-all duration-200 relative overflow-hidden group
                    ${isSelected 
                      ? 'bg-white border-orange-500 shadow-md' 
                      : 'bg-white/60 border-transparent hover:bg-white hover:shadow-sm'
                    }
                  `}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-gray-800 text-sm leading-tight pr-6">
                      {option.label}
                    </span>
                    <div className={`
                      w-5 h-5 rounded-full flex items-center justify-center transition-colors
                      ${isSelected ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400 group-hover:bg-gray-300'}
                    `}>
                      {isSelected ? <Check size={12} /> : <Plus size={12} />}
                    </div>
                  </div>
                  
                  <div className="text-xs font-bold text-gray-500 flex items-center">
                    + <IndianRupee size={10} /> {option.price.toLocaleString('en-IN')}
                  </div>

                  {isSelected && (
                    <motion.div
                      layoutId="selectionBorder"
                      className="absolute inset-0 border-2 border-orange-500 rounded-xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default TravelModeCustomizationPanel;
