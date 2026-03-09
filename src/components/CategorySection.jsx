
import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/data/categories';
import packages from '@/data/packages';
import CategoryCard from './CategoryCard';
import CategoryPackagePreview from './CategoryPackagePreview';
import ErrorBoundary from '@/components/ErrorBoundary';

function CategorySection() {
  // Safe check for data availability
  const hasCategories = Array.isArray(categories) && categories.length > 0;
  const hasPackages = Array.isArray(packages) && packages.length > 0;

  if (!hasCategories) {
    return null; // Or return a "No categories found" state
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect journey that matches your interests and travel style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            if (!category) return null;

            // Safe filtering
            const categoryPackages = hasPackages ? packages.filter(p => 
              p.category && Array.isArray(p.category) && p.category.includes(category.name)
            ).slice(0, 3) : [];

            // Extract color from Tailwind class string or use a default hex for the preview component
            // Mapping known classes to hex for the preview component which expects a color string for style
            // ideally we refactor preview to use classes too, but for now let's map or fallback
            const categoryHexColor = category.textColor ? category.textColor.replace('text-', '') : '#000'; 

            return (
              <motion.div
                key={category.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col h-full"
              >
                <ErrorBoundary>
                  <CategoryCard 
                    category={category} 
                    count={hasPackages ? packages.filter(p => p.category && Array.isArray(p.category) && p.category.includes(category.name)).length : 0}
                  />
                  
                  {categoryPackages.length > 0 && (
                    <CategoryPackagePreview 
                      packages={categoryPackages} 
                      categoryColor={categoryHexColor} 
                    />
                  )}
                </ErrorBoundary>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
