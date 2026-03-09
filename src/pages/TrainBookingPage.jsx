import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Train, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

function TrainBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Train Booking - freakytourz</title>
        <meta name="description" content="Book train tickets for your journey across India." />
      </Helmet>

      <div className="max-w-3xl mx-auto text-center">
        <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Train className="w-10 h-10 text-blue-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Train Ticket Booking</h1>
          <p className="text-lg text-gray-600 mb-8">
            Our seamless train booking service is coming soon! Soon you'll be able to book railway tickets for destinations across India directly from our platform.
          </p>
          
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-orange-800 mb-2">Need to book tickets now?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please contact our support team for offline assistance with train reservations.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainBookingPage;