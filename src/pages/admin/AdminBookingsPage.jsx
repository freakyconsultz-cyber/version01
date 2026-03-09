import React from 'react';
import { BookMarked, Filter, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const mockBookings = [
  { id: 'BK1024', customer: 'Rohan Sharma', package: 'Char Dham Yatra', date: '2026-02-10', price: 45000, vehicle: 'SUV / Innova', status: 'Confirmed' },
  { id: 'BK1023', customer: 'Priya Mehta', package: 'Jaipur Heritage Tour', date: '2026-02-09', price: 12000, vehicle: 'Sedan', status: 'Completed' },
  { id: 'BK1022', customer: 'Anil Kumar', package: 'Andaman Island Escape', date: '2026-02-08', price: 42000, vehicle: 'SUV / Innova', status: 'Pending' },
  { id: 'BK1021', customer: 'Sunita Devi', package: 'Taj Mahal & Agra Fort', date: '2026-02-07', price: 5000, vehicle: 'Sedan', status: 'Confirmed' },
  { id: 'BK1020', customer: 'Vikram Singh', package: 'Goa Beach Paradise', date: '2026-02-05', price: 18000, vehicle: 'Sedan', status: 'Cancelled' },
];

function AdminBookingsPage() {
  const { toast } = useToast();

  const handleAction = (action) => {
    toast({
      title: '🚧 Feature Not Implemented',
      description: `The "${action}" feature is a placeholder. You can request its implementation.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Manage Bookings</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={() => handleAction('Filter')}>
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button onClick={() => handleAction('Export to CSV')}>
            <FileDown className="mr-2 h-4 w-4" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Booking ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Package</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {mockBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{booking.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{booking.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{booking.package}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">₹{booking.price.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      booking.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleAction('View Details')} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminBookingsPage;