import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Plane, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

function FlightBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Flight Booking - freakytourz</title>
        <meta name="description" content="Book domestic and international flights at best rates." />
      </Helmet>

      <div className="max-w-3xl mx-auto text-center">
        <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Plane className="w-10 h-10 text-sky-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Flight Tickets</h1>
          <p className="text-lg text-gray-600 mb-8">
             Fly high with the best deals! Our flight booking engine is under development to bring you competitive airfares for domestic and international travel.
          </p>
          
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-orange-800 mb-2">Planning air travel?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get quote for your dates by contacting our travel desk at +91-7017735435.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightBookingPage;