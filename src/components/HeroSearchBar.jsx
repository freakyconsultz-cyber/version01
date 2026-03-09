
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar as CalendarIcon, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

function HeroSearchBar() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission if wrapped in form
    setIsSearching(true);
    
    try {
      const params = new URLSearchParams();
      if (destination) params.append('destination', destination);
      if (type) params.append('category', type);
      if (date) params.append('date', date);
      
      // We navigate to packages list with filters
      navigate(`/packages?${params.toString()}`);
    } catch (error) {
      console.error("Search navigation failed:", error);
      setIsSearching(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl transform -translate-y-1/2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Location Dropdown */}
        <div className="relative group bg-white rounded-xl px-4 py-3 flex items-center shadow-sm hover:shadow-md transition-all cursor-pointer border-r-4 border-[#b8336a]">
          <MapPin className="w-5 h-5 text-[#b8336a] mr-3 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <label className="block text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Where To?</label>
            <select 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-gray-800 font-semibold text-sm outline-none cursor-pointer appearance-none truncate pr-2"
            >
              <option value="">All Destinations</option>
              <option value="Uttarakhand">Uttarakhand (Chardham)</option>
              <option value="Rajasthan">Rajasthan (Jaipur)</option>
              <option value="Kerala">Kerala</option>
              <option value="Goa">Goa</option>
              <option value="Himachal">Himachal</option>
              <option value="Assam">Assam</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
          </div>
        </div>

        {/* Date Picker */}
        <div className="relative group bg-white rounded-xl px-4 py-3 flex items-center shadow-sm hover:shadow-md transition-all cursor-pointer">
          <CalendarIcon className="w-5 h-5 text-[#b8336a] mr-3 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <label className="block text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Start Date</label>
            <input 
              type="date" 
              value={date}
              min={new Date().toISOString().split('T')[0]} // Disable past dates
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-gray-800 font-semibold text-sm outline-none cursor-pointer appearance-none truncate"
            />
          </div>
        </div>

        {/* Tour Type Dropdown */}
        <div className="relative group bg-white rounded-xl px-4 py-3 flex items-center shadow-sm hover:shadow-md transition-all cursor-pointer">
          <Compass className="w-5 h-5 text-[#b8336a] mr-3 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <label className="block text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Tour Type</label>
            <select 
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-transparent text-gray-800 font-semibold text-sm outline-none cursor-pointer appearance-none truncate pr-2"
            >
              <option value="">All Types</option>
              <option value="Pilgrimage">Pilgrimage</option>
              <option value="Adventure">Adventure</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Heritage">Heritage</option>
              <option value="Wildlife">Wildlife</option>
              <option value="Nature">Nature</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <Button 
          onClick={handleSearch}
          disabled={isSearching}
          className="h-full w-full bg-[#b8336a] hover:bg-[#a02c5c] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
        >
          <Search className="w-5 h-5" />
          {isSearching ? 'Searching...' : 'Search Packages'}
        </Button>
      </div>
    </div>
  );
}

export default HeroSearchBar;
