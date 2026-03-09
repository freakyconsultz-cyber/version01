import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Check for existing session in localStorage
    const storedUser = localStorage.getItem('tourTaxiUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);

    // If Supabase is configured, check session
    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          setUser(session.user);
          localStorage.setItem('tourTaxiUser', JSON.stringify(session.user));
        }
        setLoading(false);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session) {
          setUser(session.user);
          localStorage.setItem('tourTaxiUser', JSON.stringify(session.user));
        } else {
          setUser(null);
          localStorage.removeItem('tourTaxiUser');
        }
      });

      return () => subscription.unsubscribe();
    }
  }, []);

  const sendOTP = async (phone) => {
    setError(null);
    setLoading(true);

    try {
      if (supabase) {
        // Use Supabase phone OTP authentication
        const { error } = await supabase.auth.signInWithOtp({
          phone: phone,
        });

        if (error) throw error;

        setPhoneNumber(phone);
        setOtpSent(true);
        setLoading(false);
        return { success: true };
      } else {
        // Fallback: simulate OTP send for development
        console.log('Simulating OTP send to:', phone);
        setPhoneNumber(phone);
        setOtpSent(true);
        setLoading(false);
        return { success: true, message: 'OTP sent successfully (demo mode)' };
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return { success: false, error: err.message };
    }
  };

  const verifyOTP = async (otp) => {
    setError(null);
    setLoading(true);

    try {
      if (supabase) {
        // Use Supabase to verify OTP
        const { data, error } = await supabase.auth.verifyOtp({
          phone: phoneNumber,
          token: otp,
          type: 'sms',
        });

        if (error) throw error;

        setUser(data.user);
        localStorage.setItem('tourTaxiUser', JSON.stringify(data.user));
        setLoading(false);
        setOtpSent(false);
        return { success: true };
      } else {
        // Fallback: simulate OTP verification for development
        // Accept any 6-digit OTP in demo mode
        if (otp.length === 6) {
          const mockUser = {
            id: Date.now().toString(),
            phone: phoneNumber,
            email: `user${Date.now()}@example.com`,
            user_metadata: { phone: phoneNumber }
          };
          setUser(mockUser);
          localStorage.setItem('tourTaxiUser', JSON.stringify(mockUser));
          setLoading(false);
          setOtpSent(false);
          return { success: true };
        } else {
          throw new Error('Invalid OTP. Please enter a 6-digit code.');
        }
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return { success: false, error: err.message };
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      if (supabase) {
        await supabase.auth.signOut();
      }
      setUser(null);
      localStorage.removeItem('tourTaxiUser');
      setOtpSent(false);
      setPhoneNumber('');
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    otpSent,
    phoneNumber,
    sendOTP,
    verifyOTP,
    logout,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}