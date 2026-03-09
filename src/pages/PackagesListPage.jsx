
// Updating to match PackageCard component usage and color scheme
import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import packages from '@/data/packages';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/button';

function PackagesListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialDestination = searchParams.get('destination') || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterDestination, setFilterDestination] = useState(initialDestination);
  const [filterCategory, setFilterCategory] = useState(initialCategory);

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setFilterCategory(categoryFromUrl);
    }
    const destFromUrl = searchParams.get('destination');
    if (destFromUrl) {
        setFilterDestination(destFromUrl);
    }
  }, [searchParams]);

  const updateCategoryFilter = (category) => {
    setFilterCategory(category);
    if (category === 'All') {
        searchParams.delete('category');
    } else {
        searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const destinations = useMemo(() => {
    const uniqueDestinations = [...new Set(packages.map((pkg) => pkg.destination))];
    return ['all', ...uniqueDestinations];
  }, []);

  const filteredAndSortedPackages = useMemo(() => {
    let result = [...packages];

    if (searchTerm) {
      result = result.filter(
        (pkg) =>
          pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterDestination !== 'all') {
      result = result.filter((pkg) => pkg.destination.toLowerCase().includes(filterDestination.toLowerCase()) || pkg.destination === filterDestination);
    }

    if (filterCategory !== 'All') {
       if (filterCategory === "Nature's Call") {
          result = result.filter(pkg => 
             pkg.category && (pkg.category.includes('Beach') || pkg.category.includes('Wildlife') || pkg.category.includes("Nature's Call"))
          );
       } else {
          result = result.filter((pkg) => pkg.category && pkg.category.includes(filterCategory));
       }
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'duration': return parseInt(a.duration) - parseInt(b.duration);
        case 'name': default: return a.name.localeCompare(b.name);
      }
    });

    return result;
  }, [searchTerm, sortBy, filterDestination, filterCategory]);

  return (
    <>
      <Helmet>
        <title>Tour Packages - freakytourz</title>
        <meta name="description" content="Browse all our tour packages tailored for solo travelers." />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Explore Our Tour Packages</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Coz Every Journey Is A Dream
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <button
              onClick={() => updateCategoryFilter('All')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                filterCategory === 'All'
                  ? 'bg-primary text-white border-transparent shadow-lg scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              All Packages
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => updateCategoryFilter(cat.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filterCategory === cat.name
                    ? 'bg-primary text-white shadow-lg scale-105 border-primary'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8 border-t-4 border-primary"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="relative">
                <SlidersHorizontal className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={filterDestination}
                  onChange={(e) => setFilterDestination(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white cursor-pointer"
                >
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest === 'all' ? 'All Destinations' : dest}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white cursor-pointer"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>
            
            {(searchTerm || filterDestination !== 'all' || sortBy !== 'name' || filterCategory !== 'All') && (
              <div className="mt-4 flex justify-end">
                 <Button
                  onClick={() => {
                    setSearchTerm('');
                    setFilterDestination('all');
                    updateCategoryFilter('All');
                    setSortBy('name');
                    setSearchParams({});
                  }}
                  variant="outline"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PackageCard package={pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PackagesListPage;
