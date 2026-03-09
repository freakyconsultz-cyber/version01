
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { AdminProvider, useAdminAuth } from '@/contexts/AdminContext';
import { TravelModeProvider } from '@/contexts/TravelModeContext';
import TravelModeThemeProvider from '@/components/TravelModeThemeProvider';
import ScrollToTop from '@/components/ScrollToTop';
import ProtectedRoute from '@/components/ProtectedRoute';
import MainLayout from '@/layouts/MainLayout';
import AdminLayout from '@/layouts/AdminLayout';
import { Toaster } from '@/components/ui/toaster';

// Public Pages
import HomePage from '@/pages/HomePage';
import PackagesListPage from '@/pages/PackagesListPage';
import PackageDetailsPage from '@/pages/PackageDetailsPage';
import CustomRequestPage from '@/pages/CustomRequestPage';
import LoginPage from '@/pages/LoginPage';
import UserDashboard from '@/pages/UserDashboard';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import TrainBookingPage from '@/pages/TrainBookingPage';
import HotelBookingPage from '@/pages/HotelBookingPage';
import CabBookingPage from '@/pages/CabBookingPage';
import FlightBookingPage from '@/pages/FlightBookingPage';
import BikeRentalPage from '@/pages/BikeRentalPage';
import AirportPickDropPage from '@/pages/AirportPickDropPage';
import CorporateTourBookingPage from '@/pages/CorporateTourBookingPage';

// Admin Pages
import AdminLoginPage from '@/pages/admin/AdminLoginPage';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminPackagesPage from '@/pages/admin/AdminPackagesPage';
// New Admin Pages
import AdminCustomersPage from '@/pages/admin/AdminCustomersPage';
import AdminOrderManagementPage from '@/pages/admin/AdminOrderManagementPage';
import AdminRevenueReportsPage from '@/pages/admin/AdminRevenueReportsPage';
import AdminBookingAnalyticsPage from '@/pages/admin/AdminBookingAnalyticsPage';
import AdminHotelManagementPage from '@/pages/admin/AdminHotelManagementPage';
import AdminDriverManagementPage from '@/pages/admin/AdminDriverManagementPage';
import AdminCustomizationManagementPage from '@/pages/admin/AdminCustomizationManagementPage';
import AdminSupportPage from '@/pages/admin/AdminSupportPage';

//Packages 
import ChardhamPackage from "@/pages/Packages/Chardham/ChardhamPackagesPage";

// Admin Protected Route
function AdminProtectedRoute({ children }) {
  const { isAdminAuthenticated, loading } = useAdminAuth();
  if (loading) {
    return <div>Loading...</div>; 
  }
  return isAdminAuthenticated ? children : <Navigate to="/admin/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminProvider>
          <TravelModeProvider>
            <TravelModeThemeProvider>
              <ScrollToTop />
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="packages" element={<PackagesListPage />} />
                  <Route path="package/:id" element={<PackageDetailsPage />} />
                  <Route path="blog" element={<BlogPage />} />
                  <Route path="blog/:id" element={<BlogPostPage />} />
                  <Route path="custom-request" element={<CustomRequestPage />} />
                  
                  {/* Service Pages */}
                  <Route path="train-booking" element={<TrainBookingPage />} />
                  <Route path="hotel-booking" element={<HotelBookingPage />} />
                  <Route path="cab-booking" element={<CabBookingPage />} />
                  <Route path="flight-booking" element={<FlightBookingPage />} />
                  <Route path="bike-rentals" element={<BikeRentalPage />} />
                  <Route path="airport-transfers" element={<AirportPickDropPage />} />
                  <Route path="corporate-tours" element={<CorporateTourBookingPage />} />

                   {/* PAckages Pages */}
                   <Route path="packages/chardham-yatra/" element={<ChardhamPackage />} />
                  
                  <Route path="login" element={<LoginPage />} />
                  <Route
                    path="dashboard"
                    element={
                      <ProtectedRoute>
                        <UserDashboard />
                      </ProtectedRoute>
                    }
                  />
                </Route>

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route
                  path="/admin"
                  element={
                    <AdminProtectedRoute>
                      <AdminLayout />
                    </AdminProtectedRoute>
                  }
                >
                  <Route index element={<AdminDashboard />} />
                  <Route path="dashboard" element={<AdminDashboard />} /> 
                  <Route path="customers" element={<AdminCustomersPage />} />
                  <Route path="packages" element={<AdminPackagesPage />} />
                  <Route path="bookings" element={<AdminOrderManagementPage />} />
                  <Route path="revenue" element={<AdminRevenueReportsPage />} />
                  <Route path="analytics" element={<AdminBookingAnalyticsPage />} />
                  <Route path="hotels" element={<AdminHotelManagementPage />} />
                  <Route path="drivers" element={<AdminDriverManagementPage />} />
                  <Route path="customization" element={<AdminCustomizationManagementPage />} />
                  <Route path="support" element={<AdminSupportPage />} />
                </Route>
              </Routes>
              <Toaster />
            </TravelModeThemeProvider>
          </TravelModeProvider>
        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
