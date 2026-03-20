
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, MapPin, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
//Dynamic Datataker
import { useLocation } from "react-router-dom";

function CustomRequestPage() {
  const { toast } = useToast();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  //Formdata
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destinations: params.get("destination") || '',
    serviceType: 'Full Package',
    duration: params.get("duration") || '3N-4D',
    customDuration: '',
    travelDates: '',
    budget: '',
    requirements: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [leadId, setLeadId] = useState("");

  //Auto Close Popup
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 25000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Backend & API Connection
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://api.freakytourz.com/custom-request.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        source: "custom_request_page",
        page_url: window.location.pathname,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      toast({
        title: "Request Failed",
        description: data.message,
      });
      return;
    }

    setLeadId(data.lead_id);
    setShowSuccess(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      destinations: '',
      serviceType: 'Full Package',
      duration: '3N-4D',
      customDuration: '',
      travelDates: '',
      budget: '',
      requirements: '',
      number_of_people: '',
    });
  };

  return (
    <>
      <Helmet>
        <title>Custom Tour Request - freakytourz</title>
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Design Your Dream Trip</h1>
            <p className="text-gray-600">Tell us what you need, and we'll handle the rest.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-primary"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <Label>Full Name *</Label>
                    <input name="name" value={formData.name} required onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Your Name" />
                 </div>
                 <div>
                    <Label>Phone Number *</Label>
                    <input name="phone" value={formData.phone} required onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="+91..." />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Preferred Destination(s) / Packages *</Label>
                  <div className="relative mt-1">
                      <MapPin className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                      <input name="destinations" value={formData.destinations} required onChange={handleInputChange} className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Manali, Shimla, Char Dham Yatra" />
                  </div>
                </div>
                <div>
                  <Label>Number of People</Label>
                  <input
                    type="number"
                    name="number_of_people"
                    value={formData.number_of_people || ""}
                    min="2"
                    onChange={handleInputChange}
                    className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    placeholder="e.g. 4"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <Label>Service Required</Label>
                    <select name="serviceType" onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white">
                        <option>Full Package</option>
                        <option>Cab Booking Only</option>
                        <option>Hotel Booking Only</option>
                    </select>
                 </div>
                 <div>
                    <Label>Duration</Label>
                    <select name="duration" onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white">
                        <option>3N-4D</option>
                        <option>4N-5D</option>
                        <option>5N-6D</option>
                        <option>6N-7D</option>
                        <option>7N-8D</option>
                        <option>8N-9D</option>
                        <option>9N-10D</option>
                        <option>10N-11D</option>
                        <option value="custom">Custom (Specify below)</option>
                    </select>
                 </div>
              </div>

              {formData.duration === 'custom' && (
                  <div>
                    <Label>Specify Custom Duration</Label>
                    <input name="customDuration" onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. 10 Days" />
                  </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <Label>Travel Start Date</Label>
                    <input type="date" value={formData.travelDates} name="travelDates" onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. mid-June" />
                 </div>
                 <div>
                    <Label>Budget (approx)</Label>
                    <input name="budget" value={formData.budget} onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. ₹50,000" />
                 </div>
              </div>

              <div>
                <Label>Special Requirements</Label>
                <textarea name="requirements" rows="4" onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Any specific hotels, activities, or dietary needs?" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-bold rounded-xl shadow-lg">
                  <Send className="w-5 h-5 mr-2" /> Submit Request
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          {/* POPUP CONTAINER */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 w-full max-w-md text-center shadow-2xl relative animate-in fade-in zoom-in duration-300">

            {/* CLOSE CROSS */}
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* SUCCESS ICON */}
            <div className="flex justify-center mb-3">
              <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-500" />
            </div>

            {/* TITLE */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Request Submitted!
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              We will craft your perfect itinerary and contact you shortly.
            </p>

            {/* PREMIUM ID BOX */}
            <div className="mt-5 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-2xl p-4 sm:p-5 text-center shadow-sm">

              <p className="text-[10px] sm:text-xs text-gray-500 mb-2 tracking-wide">
                YOUR REQUEST ID
              </p>

              <div className="flex items-center justify-center gap-3 flex-wrap">

                <span className="font-semibold text-base sm:text-lg tracking-widest text-gray-800 break-all">
                  {leadId}
                </span>

                <button
                  onClick={() => navigator.clipboard.writeText(leadId)}
                  className="p-2 rounded-full bg-white shadow hover:scale-105 transition"
                >
                  {/* COPY ICON */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2h-6l-2 2H6a2 2 0 00-2 2v10a2 2 0 002 2h2z" />
                  </svg>
                </button>

              </div>
            </div>

            {/* NOTE */}
            <p className="mt-3 text-[12px] sm:text-xs text-gray-400">
              Please keep this ID for future reference. Our team may ask for it for authentication.
            </p>

          </div>
        </div>
      )}
    </>
  );
}

export default CustomRequestPage;
