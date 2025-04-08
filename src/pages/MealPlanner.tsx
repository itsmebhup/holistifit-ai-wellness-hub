
import React from 'react';
import DietChart from '@/components/DietChart';

const MealPlanner = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meal Planner</h1>
        <p className="text-muted-foreground">Your personalized meal plan for maximum nutrition and results.</p>
      </div>
      
      <DietChart />
      
      <div className="bg-muted p-4 rounded-lg mt-6">
        <h2 className="font-medium text-lg mb-2">Nutrition Tips</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          <li>Try to eat at consistent times each day to maintain energy levels</li>
          <li>Aim for at least 5 servings of fruits and vegetables daily</li>
          <li>Stay hydrated by drinking at least 8 glasses of water</li>
          <li>Limit processed foods and added sugars</li>
          <li>Adjust portion sizes based on your activity level for the day</li>
        </ul>
      </div>
    </div>
  );
};

export default MealPlanner;
