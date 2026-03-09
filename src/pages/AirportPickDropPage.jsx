import React from 'react';
import { Helmet } from 'react-helmet';
import { Plane, MapPin, Clock, ShieldCheck, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AirportPickDropPage() {
  return (
    <>
      <Helmet>
        <title>Airport Transfers - freakytourz</title>
        <meta name="description" content="Reliable and comfortable airport pickup and drop services across major Indian cities." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div 
          className="relative h-[40vh] bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Airport Transfers</h1>
              <p className="text-xl opacity-90">India's best pickup & drop services for a stress-free journey</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Ride</h2>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--theme-primary)] outline-none">
                    <option>Airport Pickup</option>
                    <option>Airport Drop</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--theme-primary)] outline-none">
                    <option>Delhi (IGI Airport)</option>
                    <option>Mumbai (CSMIA)</option>
                    <option>Bangalore (KIAL)</option>
                    <option>Jaipur (JAI)</option>
                  </select>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                   <input type="date" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--theme-primary)] outline-none" />
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                   <input type="time" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--theme-primary)] outline-none" />
                </div>

                <div className="md:col-span-2">
                   <Button 
                     className="w-full py-6 text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.01]"
                     style={{ backgroundColor: 'var(--theme-primary)' }}
                   >
                     Search Cabs
                   </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             {[
               { icon: Clock, title: 'On-Time Service', desc: 'Punctual pickups guaranteed' },
               { icon: ShieldCheck, title: 'Safe & Secure', desc: 'Verified drivers & sanitized cars' },
               { icon: IndianRupee, title: 'Fixed Pricing', desc: 'No hidden surge pricing' }
             ].map((feat, i) => (
               <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                 <feat.icon className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--theme-primary)' }} />
                 <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
                 <p className="text-gray-600 text-sm">{feat.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AirportPickDropPage;