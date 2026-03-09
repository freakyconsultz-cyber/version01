import React from 'react';
import { IndianRupee, FileDown, TrendingUp, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const revenueByPackageData = [
  { name: 'Char Dham', revenue: 450000 },
  { name: 'Andaman', revenue: 380000 },
  { name: 'Jaipur', revenue: 210000 },
  { name: 'Goa', revenue: 180000 },
  { name: 'Ranthambore', revenue: 150000 },
];

const revenueByMonthData = [
  { name: 'Nov', revenue: 250000 },
  { name: 'Dec', revenue: 320000 },
  { name: 'Jan', revenue: 410000 },
  { name: 'Feb', revenue: 270000 },
];

function AdminFinancePage() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: '🚧 Feature Not Implemented',
      description: 'The report download feature is a placeholder. You can request its implementation.',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Finance Dashboard</h1>
        <Button onClick={handleDownload}>
          <FileDown className="mr-2 h-4 w-4" /> Download Reports
        </Button>
      </div>

      {/* Finance Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">₹12,50,000</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Booking Value</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">₹8,223</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Payments Received</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">₹9,80,000</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Outstanding</p>
          <p className="text-3xl font-bold text-orange-500">₹2,70,000</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Revenue by Package</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={revenueByPackageData}>
              <XAxis dataKey="name" tick={{ fill: 'var(--color-text-secondary)' }} />
              <YAxis tick={{ fill: 'var(--color-text-secondary)' }} />
              <Tooltip cursor={{fill: 'rgba(238, 126, 44, 0.1)'}} contentStyle={{backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)'}}/>
              <Legend />
              <Bar dataKey="revenue" fill="#ea580c" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Revenue by Month</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={revenueByMonthData}>
              <XAxis dataKey="name" tick={{ fill: 'var(--color-text-secondary)' }} />
              <YAxis tick={{ fill: 'var(--color-text-secondary)' }} />
              <Tooltip cursor={{fill: 'rgba(238, 126, 44, 0.1)'}} contentStyle={{backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)'}}/>
              <Legend />
              <Bar dataKey="revenue" fill="#fb923c" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AdminFinancePage;