
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import packages from '@/data/packages';
import { categories } from '@/data/categories';

function CategoryDropdownBar() {
  const [activeCategory, setActiveCategory] = useState(null);

  // Helper to get packages for a category
  const getCategoryPackages = (categoryName) => {
    // "Nature's Call" merges Beach and Wildlife logic if needed, 
    // or we assume packages are tagged with "Nature's Call" or we map old tags
    if (categoryName === "Nature's Call") {
       return packages.filter(pkg => 
         pkg.category && (pkg.category.includes('Beach') || pkg.category.includes('Wildlife') || pkg.category.includes("Nature's Call"))
       ).slice(0, 6);
    }

    return packages
      .filter(pkg => pkg.category && pkg.category.includes(categoryName))
      .slice(0, 6); // Limit to 6 items
  };

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 lg:space-x-8 h-14">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="relative group h-full flex items-center"
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <button 
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? `${category.lightBg} ${category.textColor}` 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <category.icon className={`w-4 h-4 ${activeCategory === category.id ? category.textColor : 'text-gray-400'}`} />
                <span>{category.name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeCategory === category.id ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 w-80 lg:w-96 bg-white rounded-xl shadow-xl border-2 ${category.borderColor} overflow-hidden p-2 mt-1`}
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {getCategoryPackages(category.name).map((pkg) => (
                        <Link 
                          key={pkg.id} 
                          to={`/package/${pkg.id}`}
                          onClick={() => setActiveCategory(null)}
                          className={`flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group/item`}
                        >
                          <div className={`w-10 h-10 rounded-lg ${category.lightBg} flex-shrink-0 flex items-center justify-center mr-3`}>
                             <img 
                               src={pkg.images[0]} 
                               alt="" 
                               className="w-full h-full object-cover rounded-lg opacity-90 group-hover/item:opacity-100" 
                             />
                          </div>
                          <div>
                            <h4 className={`text-sm font-semibold text-gray-900 group-hover/item:${category.textColor}`}>
                              {pkg.name}
                            </h4>
                            <p className="text-xs text-gray-500 line-clamp-1">
                              {pkg.duration} • {pkg.destination}
                            </p>
                          </div>
                        </Link>
                      ))}
                      {getCategoryPackages(category.name).length === 0 && (
                        <div className="p-4 text-center text-sm text-gray-500">
                          No packages available in this category
                        </div>
                      )}
                    </div>
                    <div className={`mt-2 p-2 ${category.lightBg} text-center rounded-lg`}>
                       <Link 
                         to={`/packages?category=${encodeURIComponent(category.name)}`}
                         onClick={() => setActiveCategory(null)}
                         className={`text-xs font-bold ${category.textColor} hover:underline`}
                       >
                         View All {category.name} Tours
                       </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryDropdownBar;
