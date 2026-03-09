import React from 'react';
import { Package, PlusCircle, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// Mock data, in a real app this would come from a database via API
import packagesData from '@/data/packages';

function AdminPackagesPage() {
  const { toast } = useToast();

  const handleAction = (action, packageName) => {
    toast({
      title: '🚧 Feature Not Implemented',
      description: `The "${action}" action for "${packageName}" is a placeholder. You can request its implementation.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Manage Packages</h1>
        <Button onClick={() => handleAction('Add New Package', '')}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Package
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Package Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price (INR)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {packagesData.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src={pkg.images[0]} alt={pkg.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{pkg.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{pkg.destination}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{pkg.category.join(', ')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{pkg.price.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{pkg.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end items-center space-x-3">
                      <button onClick={() => handleAction('Edit', pkg.name)} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300" title="Edit">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button onClick={() => handleAction('Delete', pkg.name)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300" title="Delete">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
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

export default AdminPackagesPage;