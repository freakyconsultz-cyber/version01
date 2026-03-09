import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, KeyRound, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { sendOTP, verifyOTP, otpSent, loading, isAuthenticated } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [otp, setOtp] = useState('');

  const from = location.state?.from?.pathname || '/dashboard';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    
    const fullPhone = `${countryCode}${phoneNumber}`;
    const result = await sendOTP(fullPhone);

    if (result.success) {
      toast({
        title: 'OTP Sent!',
        description: result.message || 'Please check your phone for the verification code.',
      });
    } else {
      toast({
        title: 'Error',
        description: result.error || 'Failed to send OTP. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    const result = await verifyOTP(otp);

    if (result.success) {
      toast({
        title: 'Login Successful!',
        description: 'Welcome to Tour Taxi India',
      });
      navigate(from, { replace: true });
    } else {
      toast({
        title: 'Verification Failed',
        description: result.error || 'Invalid OTP. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Tour Taxi India</title>
        <meta name="description" content="Login to your Tour Taxi India account to manage bookings and view your travel history." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full"
        >
          {/* Back to Home Link */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Logo & Title */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚕</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Login to manage your bookings</p>
            </div>

            {!otpSent ? (
              /* Phone Number Form */
              <form onSubmit={handleSendOTP} className="space-y-6">
                <div>
                  <Label htmlFor="phone" className="text-gray-900 flex items-center mb-2">
                    <Phone className="w-4 h-4 mr-2 text-orange-600" />
                    Phone Number
                  </Label>
                  <div className="flex gap-3">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 bg-white cursor-pointer"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                      placeholder="98765 43210"
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit phone number"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">We'll send you a verification code</p>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send OTP'}
                </Button>
              </form>
            ) : (
              /* OTP Verification Form */
              <form onSubmit={handleVerifyOTP} className="space-y-6">
                <div>
                  <Label htmlFor="otp" className="text-gray-900 flex items-center mb-2">
                    <KeyRound className="w-4 h-4 mr-2 text-orange-600" />
                    Enter OTP
                  </Label>
                  <input
                    id="otp"
                    type="text"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 text-center text-2xl tracking-widest"
                    placeholder="000000"
                    maxLength="6"
                    pattern="[0-9]{6}"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Enter the 6-digit code sent to {countryCode} {phoneNumber}
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {loading ? 'Verifying...' : 'Verify & Login'}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setOtp('');
                    window.location.reload();
                  }}
                  className="w-full border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  Use Different Number
                </Button>
              </form>
            )}

            {/* Info Box */}
            <div className="mt-8 bg-orange-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 text-center">
                <strong>Demo Mode:</strong> Enter any 6-digit code to login
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            By logging in, you agree to our Terms of Service and Privacy Policy
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default LoginPage;