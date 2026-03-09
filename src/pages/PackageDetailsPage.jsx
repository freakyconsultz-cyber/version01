
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Clock, ArrowLeft, Plane, AlertCircle, ChevronDown, ChevronUp, CalendarDays } from 'lucide-react';
import packages from '@/data/packages';
import attractions from '@/data/attractions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

import FAQAccordion from '@/components/FAQAccordion';
import OrderSummary from '@/components/OrderSummary';
import TravelModeCustomizationPanel from '@/components/TravelModeCustomizationPanel';
import VehicleSelector from '@/components/VehicleSelector';
import AttractionSelector from '@/components/AttractionSelector';
import { useTravelMode } from '@/contexts/TravelModeContext';

function PackageDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { currentMode, selectedCustomizations, availableCustomizations } = useTravelMode();

  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [packageType, setPackageType] = useState('full'); // full, cab_only, hotel_only
  const [includeTransport, setIncludeTransport] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState({ id: 'sedan', name: 'Comfort Sedan', surcharge: 0 });
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const [openDay, setOpenDay] = useState(null);

  const packageData = packages.find((pkg) => pkg.id === id);
  // Match attractions by destinationId to packageId
  const relatedAttractions = attractions ? attractions.filter(attr => attr.destinationId === id) : [];

  // Mock FAQs
  const faqs = [
    { question: "What is the cancellation policy?", answer: "Free cancellation up to 7 days before the trip." },
    { question: "Is breakfast included?", answer: "Yes, breakfast is included in Hotel and Full packages." },
    { question: "Are entry fees included?", answer: "Entry fees to monuments are generally not included unless specified." },
    { question: "Can I customize this tour?", answer: "Yes, use the 'Custom Request' page for a fully tailored experience." }
  ];

  const toggleAttraction = (id) => {
    setSelectedAttractions(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const getPackageBasePrice = () => {
    if (!packageData) return 0;
    switch(packageType) {
      case 'cab_only': return packageData.price * 0.6;
      case 'hotel_only': return packageData.price * 0.5;
      default: return packageData.price;
    }
  };

  const getCustomizationCost = () => {
     return selectedCustomizations.reduce((total, id) => {
       const option = availableCustomizations.find(opt => opt.id === id);
       return total + (option ? option.price : 0);
     }, 0);
  };

  const getAttractionsCost = () => {
    return selectedAttractions.reduce((total, id) => {
      const attr = relatedAttractions.find(a => a.id === id);
      return total + (attr ? attr.additionalCost : 0);
    }, 0);
  };

  const totalPrice = useMemo(() => {
    if (!packageData) return 0;
    const base = getPackageBasePrice();
    const modeCustomizations = getCustomizationCost();
    const vehicleCost = (packageType === 'full' || packageType === 'cab_only') ? selectedVehicle.surcharge : 0;
    const attractionsCost = getAttractionsCost();

    return (base + modeCustomizations + vehicleCost + attractionsCost) * currentMode.multiplier;
  }, [packageData, packageType, currentMode, selectedCustomizations, selectedVehicle, selectedAttractions]);

  if (!packageData) return <div>Package Not Found</div>;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Order Confirmed!',
      description: `Thank you for booking. We will contact you shortly.`,
    });
    setShowBookingDialog(false);
  };

  const selectedAttractionsInfo = relatedAttractions.filter(a => selectedAttractions.includes(a.id));

  return (
    <>
      <Helmet>
        <title>{packageData.name} - freakytourz</title>
      </Helmet>

      <div className="min-h-screen bg-background pb-20">
        <div className="bg-white border-b sticky top-0 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Button onClick={() => navigate('/packages')} variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Packages
            </Button>
            <div className="font-bold text-[#b8336a] truncate max-w-[200px] md:max-w-md">
                {packageData.name} ({packageData.duration})
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[40vh] overflow-hidden">
          <img src={packageData.images[0]} alt={packageData.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white w-full">
             <div className="max-w-7xl mx-auto">
               <h1 className="text-3xl md:text-5xl font-bold mb-2">{packageData.name}</h1>
               <div className="flex flex-wrap gap-6 text-lg">
                  <span className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-[#b8336a]"/> {packageData.destination}</span>
                  <span className="flex items-center"><Clock className="w-5 h-5 mr-2 text-[#b8336a]"/> {packageData.duration}</span>
               </div>
             </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Package Type Toggles */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <h3 className="text-lg font-bold mb-4">Choose Your Package</h3>
               <div className="flex flex-wrap gap-4">
                  {[
                    { id: 'full', label: 'Full Package (Best Value)' },
                    { id: 'cab_only', label: 'Cab Package Only' },
                    { id: 'hotel_only', label: 'Hotel Package Only' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setPackageType(type.id)}
                      className={`px-6 py-3 rounded-full font-bold transition-all border-2 text-sm md:text-base ${
                        packageType === type.id 
                          ? 'bg-[#b8336a] text-white border-[#b8336a] shadow-lg' 
                          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
               </div>
            </div>

            {/* Vehicle Selector (Only for Full or Cab packages) */}
            {(packageType === 'full' || packageType === 'cab_only') && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <VehicleSelector 
                  selectedVehicle={selectedVehicle} 
                  onSelect={setSelectedVehicle} 
                />
              </div>
            )}

            {/* Itinerary Section */}
            {packageData.itinerary && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-[#b8336a]" />
                  Day-by-Day Itinerary
                </h3>
                <div className="space-y-4">
                  {packageData.itinerary.map((day, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenDay(openDay === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="bg-[#b8336a] text-white text-xs font-bold px-3 py-1 rounded-full">
                            Day {day.day}
                          </span>
                          <span className="font-semibold text-gray-800">{day.title}</span>
                        </div>
                        {openDay === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      {openDay === index && (
                        <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                          {day.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Attractions & Activities Selector */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <AttractionSelector 
                attractions={relatedAttractions}
                selectedAttractions={selectedAttractions}
                onToggle={toggleAttraction}
              />
            </div>

            {/* Solo Traveler Customization */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4">Solo Traveler Add-ons</h3>
              <TravelModeCustomizationPanel />
            </div>

            {/* Transport Toggle */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Plane className="w-5 h-5 text-[#b8336a]" />
                 Flight & Train Booking
               </h3>
               
               <div className="flex items-center space-x-3 mb-4">
                 <input 
                   type="checkbox" 
                   id="transport" 
                   checked={includeTransport}
                   onChange={(e) => setIncludeTransport(e.target.checked)}
                   className="w-5 h-5 rounded border-gray-300 focus:ring-[#b8336a] accent-[#b8336a]"
                 />
                 <label htmlFor="transport" className="font-medium text-gray-700 cursor-pointer select-none">
                   Include Flight / Train Booking Assistance
                 </label>
               </div>
               
               {includeTransport && (
                 <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                   <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                   <div>
                      <h4 className="font-bold text-blue-800 text-sm">Note</h4>
                      <p className="text-xs text-blue-600 mt-1">
                        Train/Flight prices are not included in this package. Additional charges will be added via call after booking confirmation.
                      </p>
                   </div>
                 </div>
               )}
            </div>

            {/* FAQs */}
            <FAQAccordion faqs={faqs} />
          </div>

          <div className="lg:col-span-1">
             <OrderSummary 
                basePackage={packageData}
                packageType={packageType}
                totalPrice={totalPrice}
                onProceed={() => setShowBookingDialog(true)}
                includeTransport={includeTransport}
                selectedVehicle={selectedVehicle}
                selectedAttractionsInfo={selectedAttractionsInfo}
                customizationCost={getCustomizationCost()}
             />
          </div>

        </div>
      </div>

      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent>
           <DialogHeader>
             <DialogTitle>Complete Your Booking</DialogTitle>
             <DialogDescription>
                You are booking the <strong>{packageData.name}</strong>.
             </DialogDescription>
           </DialogHeader>
           
           <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <Label>Full Name</Label>
                <input required className="w-full border p-2 rounded mt-1" placeholder="Enter your name" />
              </div>
              <div>
                <Label>Phone Number</Label>
                <input required className="w-full border p-2 rounded mt-1" placeholder="Enter phone number" />
              </div>
              <Button type="submit" className="w-full bg-[#b8336a] text-white h-12 text-lg">
                 Confirm Booking
              </Button>
           </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PackageDetailsPage;
