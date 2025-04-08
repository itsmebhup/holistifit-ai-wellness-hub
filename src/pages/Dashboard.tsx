
import React from 'react';
import { Dumbbell, Zap, Award, ArrowRight } from 'lucide-react';
import WellnessMetrics from '@/components/WellnessMetrics';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Here's what's happening with your wellness journey today.</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-holistifit-primary hover:bg-holistifit-dark">
            Log Workout <Dumbbell className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            Log Meal <Zap className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <WellnessMetrics />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2 lg:col-span-1 card-hover">
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
              <Button variant="ghost" className="text-xs">Skip</Button>
              <Button className="text-xs bg-holistifit-primary">Accept Challenge</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
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

        <Card className="card-hover">
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

      <h2 className="text-xl font-semibold mt-8 mb-4">Today's Tips</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-holistifit-light border-holistifit-primary card-hover">
          <CardContent className="p-6">
            <h3 className="font-semibold text-holistifit-primary">Nutrition Tip</h3>
            <p className="mt-2 text-sm">
              Try to include protein in every meal. It helps with muscle recovery and keeps you feeling full longer.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-holistifit-light border-holistifit-secondary card-hover">
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
