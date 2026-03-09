import React from 'react';
import { Helmet } from 'react-helmet';
import { Briefcase, Users, Award, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

function CorporateTourBookingPage() {
  return (
    <>
      <Helmet>
        <title>Corporate Tours - freakytourz</title>
        <meta name="description" content="Organize seamless corporate offsites, team outings, and business travel with freakytourz." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div 
          className="relative h-[40vh] bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Solutions!</h1>
              <p className="text-xl opacity-90">Tailored experiences for teams, offsites, and events</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                   We specialize in creating productive yet relaxing environments for corporate teams. From luxury stays to team-building activities, we handle all logistics so you can focus on business and bonding.
                 </p>
                 <div className="space-y-4">
                    {[
                      'Dedicated Account Manager',
                      'GST Invoicing & Corporate Rates',
                      'Customized Itineraries',
                      '24/7 Support Team (+91-7017735435 / 7037519321)'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--theme-accent)' }}>
                           <Award className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
                         </div>
                         <span className="font-medium text-gray-800">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                 <h3 className="text-2xl font-bold mb-6">Request a Proposal</h3>
                 <form className="space-y-4">
                    <input placeholder="Company Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--theme-primary)] outline-none" />
                    <input placeholder="Contact Person Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--theme-primary)] outline-none" />
                    <input placeholder="Official Email" type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--theme-primary)] outline-none" />
                    <div className="grid grid-cols-2 gap-4">
                       <input placeholder="Group Size" type="number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--theme-primary)] outline-none" />
                       <input placeholder="Tentative Date" type="date" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--theme-primary)] outline-none" />
                    </div>
                    <textarea rows="3" placeholder="Requirements (Destination, Activity type...)" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--theme-primary)] outline-none"></textarea>
                    <Button 
                      className="w-full py-6 text-lg font-bold text-white"
                      style={{ backgroundColor: 'var(--theme-primary)' }}
                    >
                      Submit Request
                    </Button>
                 </form>
              </div>
           </div>

           <div className="text-center">
             <h2 className="text-3xl font-bold text-gray-900 mb-10">Popular Corporate Themes</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Adventure Retreats', img: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=500&q=80' },
                  { title: 'Luxury Wellness', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80' },
                  { title: 'Heritage & Culture', img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=500&q=80' }
                ].map((item, i) => (
                  <div key={i} className="group relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer">
                     <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                     <div className="absolute bottom-6 left-6 text-white text-xl font-bold">{item.title}</div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </>
  );
}

export default CorporateTourBookingPage;