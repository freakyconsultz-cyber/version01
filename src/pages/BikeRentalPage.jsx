import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Bike, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

function BikeRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Bike Rentals - freakytourz</title>
        <meta name="description" content="Rent bikes and scooters for your local commute and adventures." />
      </Helmet>

      <div className="max-w-3xl mx-auto text-center">
        <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bike className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Bike Rentals</h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore at your own pace! We are setting up bike rental stations in major tourist destinations. Online reservations coming soon.
          </p>
          
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-orange-800 mb-2">Want to rent a bike?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Check availability for your destination by calling us at +91-7017735435.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BikeRentalPage;