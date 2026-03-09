
import React from 'react';

function AdminBookingAnalyticsPage() {
  return (
    <div className="space-y-6">
       <h1 className="text-3xl font-bold text-gray-800">Booking Analytics</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex items-center justify-center bg-gray-50">
             [Chart: Bookings by Month]
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex items-center justify-center bg-gray-50">
             [Chart: Most Popular Packages]
          </div>
       </div>
    </div>
  );
}
export default AdminBookingAnalyticsPage;
