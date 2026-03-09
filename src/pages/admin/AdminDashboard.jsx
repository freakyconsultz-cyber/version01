
import React from 'react';
import { IndianRupee, Users, ShoppingBag, Clock, TrendingUp } from 'lucide-react';

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '₹12.5L', icon: IndianRupee, color: 'bg-primary' },
          { label: 'Pending Payments', value: '₹2.3L', icon: Clock, color: 'bg-orange-500' },
          { label: 'Active Bookings', value: '18', icon: ShoppingBag, color: 'bg-blue-500' },
          { label: 'New Customers', value: '45', icon: Users, color: 'bg-green-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center text-white shadow-md`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Charts Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
               <TrendingUp className="w-5 h-5 text-primary" /> Monthly Revenue Trend
            </h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
               [Graph: Revenue vs Time]
            </div>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Bookings</h3>
            <div className="space-y-4">
               {[1,2,3].map(i => (
                  <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
                     <div>
                        <p className="font-bold text-gray-800">Booking #102{i}</p>
                        <p className="text-xs text-gray-500">Char Dham Yatra • 2 days ago</p>
                     </div>
                     <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Paid</span>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
