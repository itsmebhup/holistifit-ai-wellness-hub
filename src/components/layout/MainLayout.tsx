
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SidebarNav from './SidebarNav';
import { Button } from '@/components/ui/button';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
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
          bg-card border-r shadow-sm
        `}
      >
        <SidebarNav activePath={location.pathname} />
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
