import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedAdmin = localStorage.getItem('freakytourzAdmin');
      if (storedAdmin) {
        setAdminUser(JSON.parse(storedAdmin));
      }
    } catch (error) {
      console.error("Failed to parse admin user from localStorage", error);
      localStorage.removeItem('freakytourzAdmin');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (email, password) => {
    // Hardcoded credentials as requested
    if (email === 'admin@freakytourz.com' && password === 'admin123') {
      const adminData = { email, name: 'Admin User' };
      localStorage.setItem('freakytourzAdmin', JSON.stringify(adminData));
      setAdminUser(adminData);
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials. Please try again.' };
  };

  const logout = () => {
    localStorage.removeItem('freakytourzAdmin');
    setAdminUser(null);
  };

  const value = {
    adminUser,
    isAdminAuthenticated: !!adminUser,
    loading,
    login,
    logout,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminProvider');
  }
  return context;
}