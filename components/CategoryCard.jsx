
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CategoryCard({ category, count }) {
  const navigate = useNavigate();

  // Defensive check for category prop
  if (!category) {
    return (
      <div className="bg-white rounded-xl shadow p-6 border border-red-100 flex items-center justify-center h-full">
         <span className="text-red-400 flex items-center gap-2">
           <HelpCircle className="w-5 h-5" /> Invalid Category Data
         </span>
      </div>
    );
  }

  const {
    name = 'Unknown Category',
    icon: Icon = HelpCircle, // Default icon if missing
    color = '#gray-500',
    description = 'No description available.',
    textColor = 'text-gray-600'
  } = category;

  // Ensure count is a number
  const safeCount = typeof count === 'number' ? count : 0;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full relative group"
      style={{ borderTop: `4px solid ${color.includes('bg-') ? 'currentColor' : color}` }} // Handle Tailwind class vs hex if needed, but here we assume logic or simplify
    >
      {/* Apply border color via inline style or class if available in data. 
          The data provided in categories.js uses Tailwind classes for color (e.g., bg-green-600).
          We need to extract the color value or use the class. 
          However, the previous code used `style={{ backgroundColor: category.color }}` which implies it expected a hex code, 
          BUT the data has `bg-green-600`. This is a bug in the previous implementation. 
          Let's fix it by using the Tailwind class for the pill background.
      */}
      
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className={`text-4xl ${textColor}`}>
            {/* Render icon component if it's a React component, or fallback */}
            {typeof Icon === 'function' || typeof Icon === 'object' ? <Icon /> : <HelpCircle />}
          </div>
          <span 
            className={`text-xs font-bold px-2 py-1 rounded-full text-white ${category.color}`}
          >
            {safeCount} Tours
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <button
          onClick={() => navigate(`/packages?category=${encodeURIComponent(name)}`)}
          className={`inline-flex items-center text-sm font-semibold transition-colors group-hover:underline ${textColor}`}
        >
          View All
          <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      {/* Decorative gradient overlay on hover - using the lightBg class from data if available */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none ${category.color}`}
      />
    </motion.div>
  );
}

export default CategoryCard;
