
import React from 'react';
import { Search, Mail, Phone } from 'lucide-react';

function AdminCustomersPage() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
          <div className="relative w-64">
             <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
             <input className="w-full pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Search customers..." />
          </div>
       </div>

       <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
             <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Name</th>
                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Contact</th>
                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Total Bookings</th>
                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-gray-100">
                {[1,2,3,4,5].map(i => (
                   <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                               C{i}
                            </div>
                            <span className="font-medium text-gray-900">Customer Name {i}</span>
                         </div>
                      </td>
                      <td className="px-6 py-4">
                         <div className="space-y-1">
                            <div className="flex items-center text-sm text-gray-500"><Mail className="w-3 h-3 mr-2" /> email{i}@example.com</div>
                            <div className="flex items-center text-sm text-gray-500"><Phone className="w-3 h-3 mr-2" /> +91 98765 4321{i}</div>
                         </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">3 Bookings</td>
                      <td className="px-6 py-4">
                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                           Active
                         </span>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>
  );
}

export default AdminCustomersPage;
