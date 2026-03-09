
import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminContext';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart,
  Hotel,
  UserCheck,
  ClipboardList,
  Sliders,
  MessageSquare,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Users, label: 'Customers', path: '/admin/customers' },
  { icon: ClipboardList, label: 'Bookings', path: '/admin/bookings' }, // Managing Orders
  { icon: CreditCard, label: 'Revenue Reports', path: '/admin/revenue' },
  { icon: BarChart, label: 'Analytics', path: '/admin/analytics' },
  { icon: Hotel, label: 'Hotels', path: '/admin/hotels' },
  { icon: UserCheck, label: 'Drivers', path: '/admin/drivers' },
  { icon: Sliders, label: 'Customization', path: '/admin/customization' },
  { icon: MessageSquare, label: 'Support', path: '/admin/support' },
];

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout, adminUser } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const Sidebar = () => (
    <aside
      className={`relative flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className={`flex items-center justify-between h-16 px-4 border-b border-gray-100 ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
        {isSidebarOpen && (
          <Link to="/admin" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">freakytourz</span>
            <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium border border-gray-200">ADMIN</span>
          </Link>
        )}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hidden lg:block"
        >
          {isSidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center rounded-lg px-3 py-2.5 transition-colors ${
              location.pathname === item.path
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-pink-50 hover:text-primary'
            } ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}
            title={isSidebarOpen ? '' : item.label}
          >
            <item.icon size={20} />
            {isSidebarOpen && <span className="ml-3 font-medium text-sm">{item.label}</span>}
          </Link>
        ))}
      </nav>
      <div className="px-3 py-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className={`flex items-center w-full rounded-lg px-3 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}
          title={isSidebarOpen ? '' : "Logout"}
        >
          <LogOut size={20} />
          {isSidebarOpen && <span className="ml-3 font-medium text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-full shadow-lg z-10">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center h-16 px-6 bg-white border-b border-gray-100 shadow-sm z-10">
           <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-gray-600">
            <Menu />
          </button>
          <div className="flex-1 lg:pl-4 font-semibold text-lg text-gray-800">
             Dashboard
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right hidden sm:block">
                <div className="font-bold text-sm text-gray-800">{adminUser?.name || 'Administrator'}</div>
                <div className="text-xs text-gray-500">{adminUser?.email}</div>
            </div>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                A
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-2xl">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4 mb-6">
                 <span className="text-2xl font-bold text-primary">freakytourz</span>
              </div>
              <nav className="mt-2 px-2 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 text-base font-medium rounded-lg ${
                      location.pathname === item.path
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-600 hover:bg-pink-50'
                    }`}
                  >
                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex-shrink-0 w-14"></div>
        </div>
      )}
    </div>
  );
}

export default AdminLayout;
