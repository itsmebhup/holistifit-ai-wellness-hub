
import React from 'react';
import FoodRecommendation from '@/components/FoodRecommendation';

const FoodRecommendations = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Food Recommendations</h1>
        <p className="text-muted-foreground">Discover foods that align with your health goals and preferences.</p>
      </div>
      
      <FoodRecommendation />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="font-medium text-lg mb-2">Why These Foods?</h2>
          <p className="text-sm text-muted-foreground">
            Our AI analyzes your nutritional needs, dietary preferences, and fitness goals to suggest 
            the most suitable foods for your wellness journey. These recommendations are personalized 
            to help you achieve optimal nutrition while enjoying your meals.
          </p>
        </div>
        
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="font-medium text-lg mb-2">How to Use Recommendations</h2>
          <p className="text-sm text-muted-foreground">
            Browse through the suggested foods and incorporate them into your meals throughout the week. 
            You can filter recommendations by meal type or nutritional focus to find options that fit 
            your current needs. Save your favorites for quick reference!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodRecommendations;
