
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AdminDriverManagementPage() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Driver Management</h1>
          <Button className="bg-primary text-white"><Plus className="w-4 h-4 mr-2" /> Add Driver</Button>
       </div>
       <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <p className="text-gray-500 text-center">Manage drivers, verify documents, and track status.</p>
       </div>
    </div>
  );
}
export default AdminDriverManagementPage;
