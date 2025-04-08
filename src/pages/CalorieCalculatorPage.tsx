
import React from 'react';
import CalorieCalculator from '@/components/CalorieCalculator';

const CalorieCalculatorPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calorie Calculator</h1>
        <p className="text-muted-foreground">Calculate your daily calorie needs based on your body and goals.</p>
      </div>
      
      <div className="flex justify-center">
        <CalorieCalculator />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="font-medium text-lg mb-2">Understanding Your Calorie Needs</h2>
          <p className="text-sm text-muted-foreground">
            Your daily calorie needs depend on your basal metabolic rate (BMR) and activity level. 
            BMR is the number of calories your body needs at rest to maintain basic functions like 
            breathing and circulation. Activity level multipliers account for additional calories 
            burned through daily movement and exercise.
          </p>
        </div>
        
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="font-medium text-lg mb-2">Using This Information</h2>
          <p className="text-sm text-muted-foreground">
            For weight loss, create a moderate caloric deficit by consuming fewer calories than you burn.
            For weight maintenance, aim to match your intake with your calculated needs.
            For muscle gain, consume slightly more calories while following a resistance training program.
            Remember that these are estimates and may need adjustment based on your individual response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculatorPage;
