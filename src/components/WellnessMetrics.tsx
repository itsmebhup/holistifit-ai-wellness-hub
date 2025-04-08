
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription, 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Droplet, 
  Heart, 
  FlameIcon, 
  Utensils,
  Moon
} from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  progress?: number;
  color: string;
}

const MetricCard = ({ title, value, description, icon, progress, color }: MetricCardProps) => (
  <Card className="hover-scale">
    <CardHeader className="pb-2">
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={`text-${color}`}>{icon}</div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
      {progress !== undefined && (
        <Progress value={progress} className={`h-1 mt-4 bg-gray-100 text-${color}`} />
      )}
    </CardContent>
  </Card>
);

const WellnessMetrics = () => {
  // In a real app, these would come from user data/API
  const metrics = {
    calories: { consumed: 1450, goal: 2200 },
    water: { consumed: 5, goal: 8 },
    steps: { count: 8430, goal: 10000 },
    sleep: { hours: 7.5, goal: 8 },
    heartRate: { current: 68, min: 58, max: 75 },
  };

  const calorieProgress = (metrics.calories.consumed / metrics.calories.goal) * 100;
  const waterProgress = (metrics.water.consumed / metrics.water.goal) * 100;
  const stepsProgress = (metrics.steps.count / metrics.steps.goal) * 100;
  const sleepProgress = (metrics.sleep.hours / metrics.sleep.goal) * 100;

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-3">Today's Wellness Metrics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <MetricCard
          title="Calories"
          value={`${metrics.calories.consumed} / ${metrics.calories.goal}`}
          description="Daily calorie intake"
          icon={<FlameIcon className="h-4 w-4" />}
          progress={calorieProgress}
          color="holistifit-accent"
        />
        
        <MetricCard
          title="Water"
          value={`${metrics.water.consumed} / ${metrics.water.goal} glasses`}
          description="Daily hydration"
          icon={<Droplet className="h-4 w-4" />}
          progress={waterProgress}
          color="blue-500"
        />
        
        <MetricCard
          title="Steps"
          value={metrics.steps.count.toLocaleString()}
          description={`${Math.round(stepsProgress)}% of daily goal`}
          icon={<Activity className="h-4 w-4" />}
          progress={stepsProgress}
          color="holistifit-primary"
        />
        
        <MetricCard
          title="Sleep"
          value={`${metrics.sleep.hours} hrs`}
          description="Last night's sleep"
          icon={<Moon className="h-4 w-4" />}
          progress={sleepProgress}
          color="purple-500"
        />
        
        <MetricCard
          title="Heart Rate"
          value={`${metrics.heartRate.current} bpm`}
          description={`Range: ${metrics.heartRate.min}-${metrics.heartRate.max} bpm`}
          icon={<Heart className="h-4 w-4" />}
          color="red-500"
        />
        
        <MetricCard
          title="Nutrition Score"
          value="B+"
          description="Based on your food intake"
          icon={<Utensils className="h-4 w-4" />}
          color="holistifit-secondary"
        />
      </div>
    </div>
  );
};

export default WellnessMetrics;
