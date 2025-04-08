
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Apple, 
  Calendar, 
  Activity, 
  Settings, 
  FlameIcon, 
  Dumbbell, 
  Heart 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => {
  return (
    <Link to={to} className="w-full">
      <Button 
        variant={isActive ? "default" : "ghost"} 
        className={cn(
          "w-full justify-start mb-1",
          isActive ? "bg-holistifit-primary text-white" : "hover:bg-holistifit-light hover:text-holistifit-primary"
        )}
      >
        <span className="mr-2">{icon}</span>
        {label}
      </Button>
    </Link>
  );
};

interface SidebarNavProps {
  activePath: string;
}

const SidebarNav = ({ activePath }: SidebarNavProps) => {
  const navItems = [
    { path: "/", label: "Dashboard", icon: <Home size={18} /> },
    { path: "/meal-planner", label: "Meal Planner", icon: <Apple size={18} /> },
    { path: "/food-recommendations", label: "Food Recommendations", icon: <FlameIcon size={18} /> },
    { path: "/workouts", label: "Workouts", icon: <Dumbbell size={18} /> },
    { path: "/calorie-calculator", label: "Calorie Calculator", icon: <Activity size={18} /> },
    { path: "/progress", label: "Progress", icon: <Heart size={18} /> },
    { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-holistifit-primary">
          <FlameIcon className="text-holistifit-accent" size={24} />
          HolistiFit
        </h2>
      </div>
      <div className="p-2 flex-1 overflow-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            to={item.path}
            icon={item.icon}
            label={item.label}
            isActive={activePath === item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
