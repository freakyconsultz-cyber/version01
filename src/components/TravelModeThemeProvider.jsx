import React, { useEffect } from 'react';
import { useTravelMode } from '@/contexts/TravelModeContext';

function TravelModeThemeProvider({ children }) {
  const { currentMode } = useTravelMode();

  useEffect(() => {
    const root = document.documentElement;
    const colors = currentMode.colors;

    // Set CSS variables for the current theme
    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-accent', colors.accent);
    root.style.setProperty('--theme-text', colors.text);

  }, [currentMode]);

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-500">
      {children}
    </div>
  );
}

export default TravelModeThemeProvider;