import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

function AttractionFilter({ selectedCategory, onSelectCategory }) {
  const categories = [
    'All',
    'Religious Sites',
    'Natural Attractions',
    'Historical Monuments',
    'Adventure Activities',
    'Cultural Experiences'
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={clsx(
            "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
            selectedCategory === category
              ? "text-white"
              : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
          )}
        >
          {selectedCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-orange-600 rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}

export default AttractionFilter;