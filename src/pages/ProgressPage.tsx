
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DashboardCard } from '@/components/ui/dashboard-card';
import { Activity, Award, Calendar, ChartBar, Dumbbell, Flame, Heart } from 'lucide-react';

// Sample data
const dailyProgressData = [
  { day: 'Mon', steps: 8500, calories: 1800, water: 2300, workouts: 1, meditation: 15 },
  { day: 'Tue', steps: 10200, calories: 1750, water: 2500, workouts: 1, meditation: 20 },
  { day: 'Wed', steps: 7800, calories: 1900, water: 2100, workouts: 0, meditation: 10 },
  { day: 'Thu', steps: 9300, calories: 1700, water: 2400, workouts: 1, meditation: 15 },
  { day: 'Fri', steps: 11200, calories: 1850, water: 2600, workouts: 1, meditation: 25 },
  { day: 'Sat', steps: 12500, calories: 2100, water: 2800, workouts: 2, meditation: 30 },
  { day: 'Sun', steps: 6800, calories: 2000, water: 2200, workouts: 0, meditation: 5 },
];

const weeklyProgressData = [
  { week: 'Week 1', steps: 62000, calories: 12500, water: 16000, workouts: 5, meditation: 95 },
  { week: 'Week 2', steps: 68000, calories: 13200, water: 17500, workouts: 6, meditation: 120 },
  { week: 'Week 3', steps: 58000, calories: 12800, water: 15500, workouts: 4, meditation: 80 },
  { week: 'Week 4', steps: 71000, calories: 13500, water: 18000, workouts: 7, meditation: 140 },
];

const monthlyProgressData = [
  { month: 'Jan', steps: 240000, calories: 52000, water: 68000, workouts: 22, meditation: 420 },
  { month: 'Feb', steps: 220000, calories: 48000, water: 62000, workouts: 20, meditation: 380 },
  { month: 'Mar', steps: 260000, calories: 54000, water: 70000, workouts: 24, meditation: 450 },
  { month: 'Apr', steps: 270000, calories: 56000, water: 72000, workouts: 26, meditation: 480 },
  { month: 'May', steps: 290000, calories: 58000, water: 75000, workouts: 28, meditation: 520 },
  { month: 'Jun', steps: 280000, calories: 57000, water: 73000, workouts: 27, meditation: 500 },
];

// Goals
const goals = {
  daily: {
    steps: 10000,
    calories: 2000,
    water: 2500, // ml
    workouts: 1,
    meditation: 20, // minutes
  },
  weekly: {
    steps: 70000,
    calories: 14000,
    water: 17500,
    workouts: 7,
    meditation: 140,
  },
  monthly: {
    steps: 300000,
    calories: 60000,
    water: 75000,
    workouts: 30,
    meditation: 600,
  },
};

// Activities
const recentActivities = [
  { date: '2025-05-09', activity: 'Morning Yoga', duration: '30 min', calories: 150 },
  { date: '2025-05-09', activity: 'Running', duration: '45 min', calories: 450 },
  { date: '2025-05-08', activity: 'Strength Training', duration: '60 min', calories: 380 },
  { date: '2025-05-07', activity: 'Swimming', duration: '40 min', calories: 320 },
  { date: '2025-05-06', activity: 'Cycling', duration: '60 min', calories: 500 },
];

// Achievements
const achievements = [
  { name: 'Early Bird', description: 'Complete 5 morning workouts', progress: 80 },
  { name: 'Step Master', description: 'Reach 10,000 steps for 7 consecutive days', progress: 100 },
  { name: 'Hydration Hero', description: 'Meet water intake goals for 14 days', progress: 65 },
  { name: 'Workout Warrior', description: 'Complete 20 workouts in a month', progress: 90 },
  { name: 'Mindfulness Master', description: 'Meditate for 10 days in a row', progress: 50 },
];

const ProgressPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [chartMetric, setChartMetric] = useState<'steps' | 'calories' | 'water' | 'workouts' | 'meditation'>('steps');
  
  // Select data based on timeRange
  const chartData = 
    timeRange === 'daily' ? dailyProgressData :
    timeRange === 'weekly' ? weeklyProgressData :
    monthlyProgressData;
  
  // Determine which label to display based on timeRange
  const labelKey = 
    timeRange === 'daily' ? 'day' :
    timeRange === 'weekly' ? 'week' :
    'month';
  
  // Get current goals based on timeRange
  const currentGoals = goals[timeRange];
  
  // Calculate current metrics (use the latest entry from the dataset)
  const latestEntry = chartData[chartData.length - 1];
  
  // Calculate progress percentages
  const progressPercentages = {
    steps: Math.round((latestEntry[chartMetric] / currentGoals[chartMetric]) * 100),
    calories: Math.round((latestEntry.calories / currentGoals.calories) * 100),
    water: Math.round((latestEntry.water / currentGoals.water) * 100),
    workouts: Math.round((latestEntry.workouts / currentGoals.workouts) * 100),
    meditation: Math.round((latestEntry.meditation / currentGoals.meditation) * 100),
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Progress Tracker</h1>
          <p className="text-muted-foreground">Monitor and visualize your wellness journey over time</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={timeRange} onValueChange={(value) => setTimeRange(value as 'daily' | 'weekly' | 'monthly')}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <DashboardCard
          title="Steps"
          icon={<Activity className="h-4 w-4" />}
          className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{latestEntry.steps.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Goal: {currentGoals.steps.toLocaleString()}</div>
            <div className="mt-3">
              <Progress value={progressPercentages.steps} className="h-2" />
              <div className="mt-1 text-xs text-right">{progressPercentages.steps}%</div>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard
          title="Calories Burned"
          icon={<Flame className="h-4 w-4" />}
          className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900"
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{latestEntry.calories.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Goal: {currentGoals.calories.toLocaleString()}</div>
            <div className="mt-3">
              <Progress value={progressPercentages.calories} className="h-2" />
              <div className="mt-1 text-xs text-right">{progressPercentages.calories}%</div>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard
          title="Water Intake"
          icon={<ChartBar className="h-4 w-4" />}
          className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900"
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{latestEntry.water} ml</div>
            <div className="text-xs text-muted-foreground">Goal: {currentGoals.water} ml</div>
            <div className="mt-3">
              <Progress value={progressPercentages.water} className="h-2" />
              <div className="mt-1 text-xs text-right">{progressPercentages.water}%</div>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard
          title="Workouts"
          icon={<Dumbbell className="h-4 w-4" />}
          className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{latestEntry.workouts}</div>
            <div className="text-xs text-muted-foreground">Goal: {currentGoals.workouts}</div>
            <div className="mt-3">
              <Progress value={progressPercentages.workouts} className="h-2" />
              <div className="mt-1 text-xs text-right">{progressPercentages.workouts}%</div>
            </div>
          </div>
        </DashboardCard>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-3 md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Progress Chart</CardTitle>
              <CardDescription>Track your progress over time</CardDescription>
            </div>
            <Select value={chartMetric} onValueChange={(value) => setChartMetric(value as any)}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="steps">Steps</SelectItem>
                <SelectItem value="calories">Calories</SelectItem>
                <SelectItem value="water">Water</SelectItem>
                <SelectItem value="workouts">Workouts</SelectItem>
                <SelectItem value="meditation">Meditation</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey={labelKey} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey={chartMetric} fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 md:col-span-1">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest workout sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.slice(0, 3).map((activity, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div>
                    <p className="font-medium">{activity.activity}</p>
                    <p className="text-xs text-muted-foreground">{activity.date} • {activity.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{activity.calories} cal</p>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <p className="text-sm text-muted-foreground text-center">View all activities</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
            <CardDescription>Recent workout history</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead className="text-right">Calories</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivities.map((activity, index) => (
                  <TableRow key={index}>
                    <TableCell>{activity.date}</TableCell>
                    <TableCell>{activity.activity}</TableCell>
                    <TableCell>{activity.duration}</TableCell>
                    <TableCell className="text-right">{activity.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Your fitness milestones</CardDescription>
            </div>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{achievement.name}</p>
                    <span className="text-xs text-muted-foreground">{achievement.progress}%</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{achievement.description}</div>
                  <Progress value={achievement.progress} className="h-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressPage;
