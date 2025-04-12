import React from 'react';
import { Dumbbell, Zap, Award, ArrowRight, Apple, Brain, Flower } from 'lucide-react';
import WellnessMetrics from '@/components/WellnessMetrics';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import yogaImage from '@/assets/images/yoga-dashboard.jpg';
import meditationImage from '@/assets/images/meditation-dashboard.jpg';
import fitnessImage from '@/assets/images/fitness-dashboard.jpg';

const Dashboard = () => {
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
    <div className="space-y-8">
      {/* Remove "Home" text and keep welcome message */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Welcome back, Alex!</h1>
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

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-r from-holistifit-light to-background hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Today's Status</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Calories</p>
              <p className="text-2xl font-medium">1,240 / 2,000</p>
              <div className="mt-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-holistifit-primary h-full rounded-full" style={{ width: '62%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Water</p>
              <p className="text-2xl font-medium">4 / 8 glasses</p>
              <div className="mt-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Exercise</p>
              <p className="text-2xl font-medium">30 min</p>
              <div className="mt-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-holistifit-accent h-full rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Steps</p>
              <p className="text-2xl font-medium">6,254</p>
              <div className="mt-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full rounded-full" style={{ width: '63%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2 hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              Today's Schedule
              <Button variant="ghost" size="sm" className="text-xs">View All</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  time: "7:00 AM",
                  activity: "Morning Yoga",
                  duration: "15 min",
                  icon: <Flower className="h-4 w-4 text-holistifit-primary" />
                },
                {
                  time: "9:30 AM",
                  activity: "HIIT Workout",
                  duration: "30 min",
                  icon: <Dumbbell className="h-4 w-4 text-holistifit-accent" />
                },
                {
                  time: "1:00 PM",
                  activity: "Lunch - Balanced Meal",
                  duration: "",
                  icon: <Apple className="h-4 w-4 text-green-500" />
                },
                {
                  time: "6:00 PM",
                  activity: "Evening Meditation",
                  duration: "10 min",
                  icon: <Brain className="h-4 w-4 text-purple-500" />
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b last:border-0 pb-3 last:pb-0">
                  <div className="flex items-center">
                    <div className="mr-3 p-2 bg-muted rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.activity}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                  {item.duration && (
                    <span className="text-sm bg-muted px-2 py-1 rounded">{item.duration}</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <WellnessMetrics />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2 lg:col-span-1 hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Daily Challenge
              <Award className="h-5 w-5 text-holistifit-accent" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">Take 10,000 steps today</p>
            <p className="text-sm text-muted-foreground mt-1">
              Walking is great for your health and helps burn calories throughout the day.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Button variant="ghost" className="text-xs" onClick={() => toast({ title: "Challenge skipped", description: "We'll find a better challenge for tomorrow!" })}>Skip</Button>
              <Button className="text-xs bg-holistifit-primary hover:bg-holistifit-dark" onClick={() => toast({ title: "Challenge accepted!", description: "We'll track your progress throughout the day." })}>Accept Challenge</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Food Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Based on your profile and goals, we have some personalized food recommendations for you.
            </p>
            <Button asChild variant="ghost" className="mt-4 w-full justify-between">
              <Link to="/food-recommendations">
                View Recommendations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Meal Planner</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Check out your customized meal plan for the week to stay on track with your nutrition goals.
            </p>
            <Button asChild variant="ghost" className="mt-4 w-full justify-between">
              <Link to="/meal-planner">
                View Meal Plan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link to="/yoga" className="group">
          <Card className="hover:shadow-md transition-all duration-300 h-full border-holistifit-primary/20 group-hover:border-holistifit-primary/60">
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img 
                src={yogaImage} 
                alt="Yoga Practice" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <h3 className="font-semibold text-lg mb-2">Yoga Practice</h3>
              <p className="text-sm text-muted-foreground">
                Find balance and flexibility with our guided yoga poses.
              </p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/meditation" className="group">
          <Card className="hover:shadow-md transition-all duration-300 h-full border-holistifit-primary/20 group-hover:border-holistifit-primary/60">
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img 
                src={meditationImage} 
                alt="Meditation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <h3 className="font-semibold text-lg mb-2">Meditation</h3>
              <p className="text-sm text-muted-foreground">
                Calm your mind and reduce stress with guided meditation sessions.
              </p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/exercises" className="group">
          <Card className="hover:shadow-md transition-all duration-300 h-full border-holistifit-primary/20 group-hover:border-holistifit-primary/60">
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img 
                src={fitnessImage} 
                alt="Exercise Library" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <h3 className="font-semibold text-lg mb-2">Exercise Library</h3>
              <p className="text-sm text-muted-foreground">
                Discover effective workouts tailored to your fitness goals.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Today's Tips</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-holistifit-light border-holistifit-primary/20 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="font-semibold text-holistifit-primary">Nutrition Tip</h3>
            <p className="mt-2 text-sm">
              Try to include protein in every meal. It helps with muscle recovery and keeps you feeling full longer.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-holistifit-light border-holistifit-primary/20 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="font-semibold text-holistifit-primary">Fitness Tip</h3>
            <p className="mt-2 text-sm">
              Even a short 10-minute workout is beneficial. Don't skip exercise just because you don't have a full hour.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
