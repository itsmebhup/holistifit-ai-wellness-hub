
import React, { useState, useEffect } from 'react';
import WellnessMetrics from '@/components/WellnessMetrics';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DailyStatusCard from '@/components/dashboard/DailyStatusCard';
import DailyScheduleCard from '@/components/dashboard/DailyScheduleCard';
import DailyChallengeCard from '@/components/dashboard/DailyChallengeCard';
import RecommendationCard from '@/components/dashboard/RecommendationCard';
import CategoryGrid from '@/components/dashboard/CategoryGrid';
import TipsSection from '@/components/dashboard/TipsSection';

// Placeholder images
const nutritionImage = "/placeholder.svg";
const mealPlanImage = "/placeholder.svg";

const Dashboard = () => {
  const [userName, setUserName] = useState("User");
  
  useEffect(() => {
    // Get the user's name from localStorage
    const storedUser = localStorage.getItem('holistifit-current-user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData.name) {
          setUserName(userData.name);
        }
      } catch (e) {
        console.error("Error parsing user data", e);
      }
    }
  }, []);

  return (
    <div className="space-y-8">
      <DashboardHeader userName={userName} />

      <div className="grid gap-4 md:grid-cols-3">
        <DailyStatusCard />
        <DailyScheduleCard />
      </div>

      <WellnessMetrics />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DailyChallengeCard />
        
        <RecommendationCard 
          title="Food Recommendations"
          description="Based on your profile and goals, we have some personalized food recommendations for you."
          linkText="View Recommendations"
          linkTo="/food-recommendations"
          imageSrc={nutritionImage}
        />
        
        <RecommendationCard 
          title="Meal Planner"
          description="Check out your customized meal plan for the week to stay on track with your nutrition goals."
          linkText="View Meal Plan"
          linkTo="/meal-planner"
          imageSrc={mealPlanImage}
        />
      </div>

      <CategoryGrid />
      
      <TipsSection />
    </div>
  );
};

export default Dashboard;
