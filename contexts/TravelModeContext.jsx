
import React, { createContext, useContext, useState } from 'react';

const TravelModeContext = createContext();

export const TRAVEL_MODES = {
  SOLO: { 
    id: 'solo', 
    label: 'Solo Traveler', 
    icon: '🎒', 
    colors: {
      primary: '#b8336a', 
      secondary: '#db2777', 
      accent: '#fce7f3', 
      text: '#831843' 
    },
    multiplier: 1.0 
  }
};

export const CUSTOMIZATION_OPTIONS = {
  solo: [
    { id: 'bike_rental', label: 'Bike Rental (1 Day)', price: 1200 },
    { id: 'go_pro', label: 'GoPro Rental', price: 800 },
    { id: 'hostel_pass', label: 'Backpacker Hostel Pass', price: 2000 },
    { id: 'meetup_event', label: 'Solo Travelers Meetup', price: 500 },
    { id: 'local_sim', label: 'Local SIM Card', price: 300 }
  ]
};

export function TravelModeProvider({ children }) {
  const [currentMode, setCurrentMode] = useState(TRAVEL_MODES.SOLO);
  const [selectedCustomizations, setSelectedCustomizations] = useState([]);

  const setMode = (modeKey) => {
    // Force only solo mode availability if needed, or allow expansion
    if (modeKey === 'solo') {
      setCurrentMode(TRAVEL_MODES.SOLO);
    }
  };

  const toggleCustomization = (optionId) => {
    setSelectedCustomizations(prev => {
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId);
      }
      return [...prev, optionId];
    });
  };

  const value = {
    currentMode,
    setMode,
    selectedCustomizations,
    toggleCustomization,
    availableCustomizations: CUSTOMIZATION_OPTIONS.solo || [],
    travelModes: [TRAVEL_MODES.SOLO]
  };

  return <TravelModeContext.Provider value={value}>{children}</TravelModeContext.Provider>;
}

export function useTravelMode() {
  const context = useContext(TravelModeContext);
  if (context === undefined) {
    throw new Error('useTravelMode must be used within a TravelModeProvider');
  }
  return context;
}
