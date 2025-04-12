
import React, { useState } from 'react';
import { Menu, X, User, Settings } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarNav from './SidebarNav';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-background dark:bg-gray-900">
      {/* Mobile sidebar toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
      </Button>

      {/* Sidebar */}
      <div 
        className={`
          fixed md:static w-64 h-full transition-all duration-300 ease-in-out z-40
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          bg-card dark:bg-gray-800 border-r shadow-sm
        `}
      >
        <SidebarNav activePath={location.pathname} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar with theme toggle and user actions */}
        <div className="h-14 border-b bg-card dark:bg-gray-800 flex items-center justify-end px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => navigate('/settings')}>
              <Settings size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <User size={18} />
            </Button>
          </div>
        </div>
        
        {/* Page content */}
        <div className="flex-1 p-4 md:p-6 bg-olive-50/30 dark:bg-olive-900/10 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
