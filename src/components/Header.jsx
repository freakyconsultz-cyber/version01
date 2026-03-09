
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import ServicesDropdown from '@/components/ServicesDropdown';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  // Main theme color: #b8336a (primary)
  const headerBgClass = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-lg' 
    : 'bg-[#b8336a]';
  
  const textColorClass = isScrolled 
    ? 'text-gray-700 hover:text-[#b8336a]' 
    : 'text-white hover:text-pink-100';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.img
                src="/freakytourz-logo.png"
                alt="FreakyTourz"
                //whileHover={{ rotate: 360 }}
                //transition={{ duration: 0.6 }}
                className="h-12 w-auto"
            />
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors hover:scale-105 transform duration-200 ${textColorClass}`}>
              Home
            </Link>
            
            <Link to="/packages" className={`font-medium transition-colors hover:scale-105 transform duration-200 ${textColorClass}`}>
              Packages
            </Link>

            {/* Services Dropdown */}
            <ServicesDropdown isScrolled={isScrolled} textColorClass={textColorClass} />

            <Link to="/blog" className={`font-medium transition-colors hover:scale-105 transform duration-200 ${textColorClass}`}>
              Blog
            </Link>
            
            <Link to="/custom-request" className={`font-medium transition-colors hover:scale-105 transform duration-200 ${textColorClass}`}>
              Custom Request
            </Link>

            {isAuthenticated && (
              <Link to="/dashboard" className={`font-medium transition-colors hover:scale-105 transform duration-200 ${textColorClass}`}>
                Dashboard
              </Link>
            )}

            {isAuthenticated ? (
              <Button 
                onClick={handleLogout} 
                variant="outline" 
                className={`flex items-center space-x-2 ${isScrolled ? 'border-[#b8336a] text-[#b8336a] hover:bg-pink-50' : 'border-white text-white hover:bg-white/10'}`}
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            ) : (
              <Button 
                onClick={() => navigate('/login')} 
                className={`${isScrolled ? 'bg-[#b8336a] text-white hover:bg-[#a02c5c]' : 'bg-white text-[#b8336a] hover:bg-pink-50'}`}
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3 }} 
            className="md:hidden bg-white border-t shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-[#b8336a] rounded-lg transition-colors font-medium">
                Home
              </Link>
              <Link to="/packages" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-[#b8336a] rounded-lg transition-colors font-medium">
                Packages
              </Link>
              
              {/* Mobile Services Links */}
              <div className="px-4 py-2 space-y-2 border-l-2 border-pink-100 ml-4 my-2">
                <p className="text-xs font-semibold text-gray-500 uppercase">Services</p>
                <Link to="/train-booking" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-gray-600 hover:text-[#b8336a]">Train Booking</Link>
                <Link to="/hotel-booking" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-gray-600 hover:text-[#b8336a]">Hotel Booking</Link>
                <Link to="/cab-booking" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-gray-600 hover:text-[#b8336a]">Cab Booking</Link>
                <Link to="/flight-booking" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-gray-600 hover:text-[#b8336a]">Flight Booking</Link>
                <Link to="/bike-rentals" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-gray-600 hover:text-[#b8336a]">Bike Rentals</Link>
              </div>

              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-[#b8336a] rounded-lg transition-colors font-medium">
                Blog
              </Link>
              <Link to="/custom-request" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-[#b8336a] rounded-lg transition-colors font-medium">
                Custom Request
              </Link>
              
              {isAuthenticated && (
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-[#b8336a] rounded-lg transition-colors font-medium">
                  Dashboard
                </Link>
              )}

              {isAuthenticated ? (
                <button 
                  onClick={handleLogout} 
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors font-medium"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              ) : (
                <button 
                  onClick={() => { navigate('/login'); setIsMenuOpen(false); }} 
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-[#b8336a] text-white hover:bg-[#a02c5c] rounded-lg transition-colors font-medium"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
export default Header;
