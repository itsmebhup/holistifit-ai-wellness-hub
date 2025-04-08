
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Apple, 
  Activity, 
  Settings, 
  FlameIcon, 
  Dumbbell, 
  Heart,
  Info,
  Flower,
  Brain,
  CreditCard,
  MessageSquare,
  User,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/auth');
  };

  const mainNavItems = [
    { path: "/", label: "Dashboard", icon: <Home size={18} /> },
    { path: "/about", label: "About", icon: <Info size={18} /> },
  ];
  
  const fitnessNavItems = [
    { path: "/exercises", label: "Exercises", icon: <Dumbbell size={18} /> },
    { path: "/yoga", label: "Yoga", icon: <Flower size={18} /> },
    { path: "/meditation", label: "Meditation", icon: <Brain size={18} /> },
  ];

  const nutritionNavItems = [
    { path: "/meal-planner", label: "Meal Planner", icon: <Apple size={18} /> },
    { path: "/food-recommendations", label: "Food Recommendations", icon: <FlameIcon size={18} /> },
    { path: "/calorie-calculator", label: "Calorie Calculator", icon: <Activity size={18} /> },
  ];
  
  const otherNavItems = [
    { path: "/progress", label: "Progress", icon: <Heart size={18} /> },
    { path: "/subscription", label: "Subscription", icon: <CreditCard size={18} /> },
    { path: "/feedback", label: "Feedback", icon: <MessageSquare size={18} /> },
    { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Link to="/" className="block">
          <h2 className="flex items-center gap-2 text-xl font-bold text-holistifit-primary">
            <FlameIcon className="text-holistifit-accent" size={24} />
            HolistiFit
          </h2>
        </Link>
      </div>
      
      <div className="px-2 py-3 flex-1 overflow-auto">
        <div className="mb-6">
          {mainNavItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              icon={item.icon}
              label={item.label}
              isActive={activePath === item.path}
            />
          ))}
        </div>
        
        <div className="mb-6">
          <div className="px-3 mb-1 text-xs font-semibold text-muted-foreground uppercase">Fitness</div>
          {fitnessNavItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              icon={item.icon}
              label={item.label}
              isActive={activePath === item.path}
            />
          ))}
        </div>
        
        <div className="mb-6">
          <div className="px-3 mb-1 text-xs font-semibold text-muted-foreground uppercase">Nutrition</div>
          {nutritionNavItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              icon={item.icon}
              label={item.label}
              isActive={activePath === item.path}
            />
          ))}
        </div>
        
        <div className="mb-6">
          <div className="px-3 mb-1 text-xs font-semibold text-muted-foreground uppercase">More</div>
          {otherNavItems.map((item) => (
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
      
      <div className="mt-auto p-3 border-t">
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-2">
              <User size={14} />
            </div>
            <div>
              <p className="text-sm font-medium">Alex</p>
              <p className="text-xs text-muted-foreground">Premium</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
