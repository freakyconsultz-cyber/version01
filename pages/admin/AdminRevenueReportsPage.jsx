
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AdminRevenueReportsPage() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Revenue Reports</h1>
          <Button className="bg-primary hover:bg-primary/90 text-white">
             <Download className="w-4 h-4 mr-2" /> Export PDF
          </Button>
       </div>
       <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center text-gray-500">
          Revenue Breakdown Graphs & Payment Status tables will appear here.
       </div>
    </div>
  );
}
export default AdminRevenueReportsPage;
