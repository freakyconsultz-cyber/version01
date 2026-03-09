import React from 'react';
import { Settings, Save, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

function AdminSettingsPage() {
  const { toast } = useToast();

  const handleSave = (section) => {
    toast({
      title: '✅ Settings Saved',
      description: `Your changes to the "${section}" have been saved (simulated).`,
    });
  };
  
  const handleCancel = () => {
     toast({
      title: 'Changes Discarded',
      variant: 'destructive'
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Settings</h1>

      {/* Company Information */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Company Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <input id="companyName" defaultValue="freakytourz" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
          </div>
          <div>
            <Label htmlFor="contactEmail">Contact Email</Label>
            <input id="contactEmail" type="email" defaultValue="info@freakytourz.com" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
          </div>
          <div>
            <Label htmlFor="contactPhone">Contact Phone</Label>
            <input id="contactPhone" type="tel" defaultValue="+91 98765 43210" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <textarea id="address" rows="3" defaultValue="123 Tourist Plaza, New Delhi, India 110001" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm"></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-6 space-x-2">
            <Button variant="outline" onClick={handleCancel}><XCircle className="mr-2 h-4 w-4" /> Cancel</Button>
            <Button onClick={() => handleSave('Company Information')}><Save className="mr-2 h-4 w-4" /> Save Changes</Button>
        </div>
      </div>

      {/* Payment Terms */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payment & Cancellation</h2>
        <div className="space-y-4">
            <div>
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <textarea id="paymentTerms" rows="4" defaultValue="50% advance to confirm the booking. Balance 50% to be paid 7 days before travel date. For last-minute bookings, 100% advance is required." className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm"></textarea>
            </div>
            <div>
                <Label htmlFor="cancellationPolicy">Cancellation Policy</Label>
                <textarea id="cancellationPolicy" rows="4" defaultValue="Cancellation > 15 days: 10% deduction. Cancellation between 7-15 days: 25% deduction. Cancellation < 7 days: 50% deduction. No refund for no-shows." className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm"></textarea>
            </div>
        </div>
        <div className="flex justify-end mt-6 space-x-2">
            <Button variant="outline" onClick={handleCancel}><XCircle className="mr-2 h-4 w-4" /> Cancel</Button>
            <Button onClick={() => handleSave('Payment & Cancellation')}><Save className="mr-2 h-4 w-4" /> Save Changes</Button>
        </div>
      </div>
    </div>
  );
}

export default AdminSettingsPage;