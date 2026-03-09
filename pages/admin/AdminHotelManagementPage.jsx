
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AdminHotelManagementPage() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Hotel Management</h1>
          <Button className="bg-primary text-white"><Plus className="w-4 h-4 mr-2" /> Add Hotel</Button>
       </div>
       <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <p className="text-gray-500 text-center">Manage hotel partners, availability, and pricing.</p>
       </div>
    </div>
  );
}
export default AdminHotelManagementPage;
