import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryDropdownBar from '@/components/CategoryDropdownBar';

function MainLayout() {
  const location = useLocation();
  
  // Define paths where the dropdown bar should NOT appear
  const hideDropdownPaths = ['/login', '/dashboard'];
  
  // Check if current path starts with any of the hidden paths (to cover potential sub-routes)
  // or is exactly one of them
  const shouldShowDropdown = !hideDropdownPaths.some(path => 
    location.pathname === path || location.pathname.startsWith(`${path}/`)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {shouldShowDropdown && <CategoryDropdownBar />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;