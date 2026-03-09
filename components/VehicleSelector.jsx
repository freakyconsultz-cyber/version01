
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Check } from 'lucide-react';

const vehicles = [
  {
    id: 'sedan',
    name: 'Comfort Sedan',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80',
    capacity: '4 Seater',
    surcharge: 0,
    features: ['AC', 'Music System', 'Comfort Seats']
  },
  {
    id: 'suv',
    name: 'Premium SUV',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80',
    capacity: '6 Seater',
    surcharge: 5000,
    features: ['Spacious', 'High Ground Clearance', 'Extra Luggage']
  },
  {
    id: 'luxury',
    name: 'Tempo Traveller',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=300&q=80',
    capacity: '10 Seater',
    surcharge: 12000,
    features: ['Premium Interiors', 'Chauffeur', 'Complimentary Water']
  }
];

function VehicleSelector({ selectedVehicle, onSelect }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <Car className="w-5 h-5 text-primary" />
        Select Cab Type
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => {
          const isSelected = selectedVehicle?.id === vehicle.id;
          return (
            <motion.div
              key={vehicle.id}
              whileHover={{ y: -2 }}
              onClick={() => onSelect(vehicle)}
              className={`
                relative cursor-pointer rounded-xl border-2 overflow-hidden transition-all
                ${isSelected ? 'border-primary bg-pink-50' : 'border-gray-200 bg-white hover:border-gray-300'}
              `}
            >
              <div className="h-32 bg-gray-100 relative">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-primary text-white p-1 rounded-full shadow-md">
                    <Check size={16} />
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-800">{vehicle.name}</h4>
                  <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded">{vehicle.capacity}</span>
                </div>
                <div className="text-sm text-gray-500 mb-3">
                  {vehicle.features.join(' • ')}
                </div>
                <div className="font-bold text-primary">
                  {vehicle.surcharge === 0 ? 'Base Price' : `+ ₹${vehicle.surcharge.toLocaleString()}`}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default VehicleSelector;
