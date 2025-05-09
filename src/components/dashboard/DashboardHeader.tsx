
import React from 'react';
import { Dumbbell, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader = ({ userName }: DashboardHeaderProps) => {
  const { toast } = useToast();
  
  const handleLogWorkout = () => {
    toast({
      title: "Workout Logged",
      description: "Your workout has been successfully recorded.",
    });
  };
  
  const handleLogMeal = () => {
    toast({
      title: "Meal Logged",
      description: "Your meal has been successfully recorded.",
    });
  };
  
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Welcome back, {userName}!</h1>
        <p className="text-muted-foreground">Here's what's happening with your wellness journey today.</p>
      </div>
      <div className="flex gap-2">
        <Button className="bg-holistifit-primary hover:bg-holistifit-dark" onClick={handleLogWorkout}>
          Log Workout <Dumbbell className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" onClick={handleLogMeal}>
          Log Meal <Zap className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
