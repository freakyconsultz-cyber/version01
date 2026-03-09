import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Calendar, Package, IndianRupee, Clock, XCircle, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [expandedBookingId, setExpandedBookingId] = useState(null);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('tourTaxiBookings') || '[]');
    setBookings(storedBookings);
  }, []);

  const filteredBookings = useMemo(() => {
    if (filterStatus === 'all') return bookings;
    return bookings.filter((booking) => booking.status === filterStatus);
  }, [bookings, filterStatus]);

  const handleCancelBooking = (bookingId) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === bookingId ? { ...booking, status: 'cancelled' } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('tourTaxiBookings', JSON.stringify(updatedBookings));

    toast({
      title: 'Booking Cancelled',
      description: 'Your booking has been cancelled successfully.',
    });
  };

  const toggleExpand = (id) => {
    setExpandedBookingId(expandedBookingId === id ? null : id);
  };

  const getStatusBadge = (status) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      confirmed: 'bg-green-100 text-green-800 border-green-200',
      completed: 'bg-blue-100 text-blue-800 border-blue-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <>
      <Helmet>
        <title>My Dashboard - freakytourz</title>
        <meta name="description" content="Manage your bookings and view your travel history." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Dashboard</h1>
            <p className="text-gray-600">Manage your customized journeys and profile</p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
                onClick={() => toast({ title: '🚧 Feature Coming Soon', description: 'Profile editing will be available soon.' })}
              >
                Edit Profile
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Name</p>
                  <p className="font-semibold text-gray-900">{user?.user_metadata?.name || 'User'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                   <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                   <p className="font-semibold text-gray-900">{user?.phone || user?.user_metadata?.phone || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                   <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                   <p className="font-semibold text-gray-900">{user?.email || 'N/A'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bookings Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
              <div className="flex flex-wrap gap-2">
                {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filterStatus === status
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {filteredBookings.length > 0 ? (
              <div className="space-y-4">
                {filteredBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                            <Package className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{booking.packageName}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-2">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1 text-orange-500" />
                                {new Date(booking.travelDate).toLocaleDateString('en-IN')}
                              </div>
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-1 text-orange-500" />
                                {booking.passengers} pax
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1 text-orange-500" />
                                Booked: {new Date(booking.submittedAt).toLocaleDateString('en-IN')}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(booking.status)}
                          <div className="flex items-center text-orange-600 font-bold text-xl">
                            <IndianRupee className="w-5 h-5" />
                            {(booking.totalPrice || booking.basePrice || booking.price || 0).toLocaleString('en-IN')}
                          </div>
                        </div>
                      </div>

                      {/* Customization Preview */}
                      {booking.selectedAttractions && booking.selectedAttractions.length > 0 && (
                        <div className="mt-4 bg-orange-50 rounded-lg p-3 flex items-center justify-between text-sm cursor-pointer" onClick={() => toggleExpand(booking.id)}>
                           <span className="text-orange-800 font-medium">
                             Included {booking.selectedAttractions.length} custom experiences
                           </span>
                           {expandedBookingId === booking.id ? <ChevronUp className="w-4 h-4 text-orange-700"/> : <ChevronDown className="w-4 h-4 text-orange-700"/>}
                        </div>
                      )}
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {expandedBookingId === booking.id && booking.selectedAttractions && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="bg-gray-50 border-t border-gray-100"
                        >
                          <div className="p-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Customization Details</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {booking.selectedAttractions.map((attr, i) => (
                                <div key={i} className="flex justify-between items-center bg-white p-3 rounded border border-gray-200 text-sm">
                                  <span className="text-gray-700">{attr.name}</span>
                                  <span className="text-gray-900 font-medium">+ ₹{attr.additionalCost.toLocaleString('en-IN')}</span>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 flex justify-end text-sm text-gray-600">
                               Base Price: ₹{(booking.basePrice || 0).toLocaleString('en-IN')} | 
                               <span className="ml-1 font-semibold text-orange-600"> Add-ons: +₹{(booking.customizationDetails?.additionalCost || 0).toLocaleString('en-IN')}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Action Footer */}
                    <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-100">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/package/${booking.packageId}`)}
                        className="bg-white"
                      >
                        <Eye className="w-4 h-4 mr-2" /> View Package
                      </Button>
                      
                      {booking.status === 'pending' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleCancelBooking(booking.id)}
                          className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 bg-white"
                        >
                          <XCircle className="w-4 h-4 mr-2" /> Cancel Booking
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No bookings found</h3>
                <p className="text-gray-500 mb-6">
                  {filterStatus === 'all'
                    ? "Start your journey by exploring our packages"
                    : `You have no ${filterStatus} bookings`}
                </p>
                <Button
                  onClick={() => navigate('/packages')}
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Explore Packages
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;