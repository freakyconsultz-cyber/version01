
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';

function CustomRequestPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
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
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Request Submitted!',
      description: 'We will craft your perfect itinerary and contact you shortly.',
    });
    setFormData({ ...formData, requirements: '' }); // Reset some fields
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
                    <input name="name" required onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Your Name" />
                 </div>
                 <div>
                    <Label>Phone Number *</Label>
                    <input name="phone" required onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="+91..." />
                 </div>
              </div>

              <div>
                 <Label>Preferred Destination(s) / Packages *</Label>
                 <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <input name="destinations" required onChange={handleInputChange} className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Manali, Shimla, Char Dham Yatra" />
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
                    <Label>Travel Dates</Label>
                    <input name="travelDates" onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. mid-June" />
                 </div>
                 <div>
                    <Label>Budget (approx)</Label>
                    <input name="budget" onChange={handleInputChange} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. ₹50,000" />
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
    </>
  );
}

export default CustomRequestPage;
