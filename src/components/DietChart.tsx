
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Camera, Clock, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardCard } from './ui/dashboard-card';
import { useToast } from '@/hooks/use-toast';

// Sample meal plan data
const mealPlanData = {
  monday: {
    breakfast: { name: 'Greek Yogurt with Berries and Granola', calories: 340 },
    lunch: { name: 'Grilled Chicken Salad with Vinaigrette', calories: 420 },
    dinner: { name: 'Baked Salmon with Quinoa and Steamed Vegetables', calories: 580 },
    snacks: [
      { name: 'Apple with Almond Butter', calories: 200 },
      { name: 'Protein Shake', calories: 180 }
    ],
  },
  tuesday: {
    breakfast: { name: 'Veggie Omelette with Whole Grain Toast', calories: 380 },
    lunch: { name: 'Quinoa Bowl with Roasted Vegetables and Chickpeas', calories: 450 },
    dinner: { name: 'Grilled Tofu Stir-Fry with Brown Rice', calories: 520 },
    snacks: [
      { name: 'Trail Mix', calories: 220 },
      { name: 'Greek Yogurt', calories: 120 }
    ],
  },
  wednesday: {
    breakfast: { name: 'Overnight Oats with Chia Seeds and Berries', calories: 320 },
    lunch: { name: 'Tuna Sandwich on Whole Grain Bread with Salad', calories: 410 },
    dinner: { name: 'Turkey Meatballs with Zucchini Noodles', calories: 490 },
    snacks: [
      { name: 'Banana with Peanut Butter', calories: 210 },
      { name: 'Hard-Boiled Egg', calories: 70 }
    ],
  },
  thursday: {
    breakfast: { name: 'Smoothie Bowl with Fruits and Granola', calories: 360 },
    lunch: { name: 'Mediterranean Wrap with Hummus and Vegetables', calories: 430 },
    dinner: { name: 'Grilled Chicken with Sweet Potato and Green Beans', calories: 550 },
    snacks: [
      { name: 'Carrot Sticks with Hummus', calories: 150 },
      { name: 'Protein Bar', calories: 200 }
    ],
  },
  friday: {
    breakfast: { name: 'Avocado Toast with Poached Egg', calories: 350 },
    lunch: { name: 'Lentil Soup with Whole Grain Bread', calories: 400 },
    dinner: { name: 'Baked White Fish with Roasted Vegetables', calories: 480 },
    snacks: [
      { name: 'Mixed Berries', calories: 100 },
      { name: 'Cottage Cheese', calories: 120 }
    ],
  },
  saturday: {
    breakfast: { name: 'Protein Pancakes with Fresh Fruit', calories: 420 },
    lunch: { name: 'Grilled Vegetable and Chicken Pesto Sandwich', calories: 480 },
    dinner: { name: 'Shrimp Stir-Fry with Brown Rice', calories: 510 },
    snacks: [
      { name: 'Rice Cakes with Avocado', calories: 180 },
      { name: 'Fruit Smoothie', calories: 220 }
    ],
  },
  sunday: {
    breakfast: { name: 'Whole Grain Waffles with Fresh Fruit', calories: 390 },
    lunch: { name: 'Quinoa Salad with Mixed Vegetables and Feta', calories: 430 },
    dinner: { name: 'Lean Beef Stir-Fry with Vegetables and Rice Noodles', calories: 560 },
    snacks: [
      { name: 'Dark Chocolate and Almonds', calories: 210 },
      { name: 'Apple with Cheese', calories: 170 }
    ],
  }
};

const DietChart = () => {
  const [currentDay, setCurrentDay] = useState('monday');
  const { toast } = useToast();
  
  const calculateTotalCalories = (day: string) => {
    const dayData = mealPlanData[day as keyof typeof mealPlanData];
    let total = dayData.breakfast.calories + dayData.lunch.calories + dayData.dinner.calories;
    dayData.snacks.forEach(snack => {
      total += snack.calories;
    });
    return total;
  };

  const handleCustomize = () => {
    toast({
      title: "Meal Customization",
      description: "You can now edit and customize your meals. Changes will be saved automatically."
    });
  };

  const handleLogMeal = () => {
    toast({
      title: "Photo Uploaded",
      description: "Your meal photo has been logged and nutrition data extracted."
    });
  };

  const getMealImage = (day: string, mealType: string) => {
    // This would normally be dynamic from your backend
    const imagePath = `/meal-${mealType.toLowerCase()}-${day.charAt(0)}.jpg`;
    return imagePath;
  };

  return (
    <div className="animate-fade-in">
      <Card className="border-holistifit-primary/20 bg-white dark:bg-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Weekly Meal Plan</CardTitle>
              <CardDescription>Your personalized diet chart for the week</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={handleLogMeal} title="Log a meal photo">
                <Camera className="h-4 w-4" />
              </Button>
              <Calendar className="h-8 w-8 text-holistifit-primary" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={currentDay} onValueChange={setCurrentDay}>
            <TabsList className="grid grid-cols-7">
              <TabsTrigger value="monday">Mon</TabsTrigger>
              <TabsTrigger value="tuesday">Tue</TabsTrigger>
              <TabsTrigger value="wednesday">Wed</TabsTrigger>
              <TabsTrigger value="thursday">Thu</TabsTrigger>
              <TabsTrigger value="friday">Fri</TabsTrigger>
              <TabsTrigger value="saturday">Sat</TabsTrigger>
              <TabsTrigger value="sunday">Sun</TabsTrigger>
            </TabsList>
            
            {Object.keys(mealPlanData).map((day) => (
              <TabsContent key={day} value={day}>
                <div className="mt-3 grid gap-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium capitalize">{day}</h3>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-holistifit-primary font-medium">
                        {calculateTotalCalories(day)} calories
                      </span>
                    </div>
                  </div>
                  
                  <DashboardCard title="Breakfast" className="border-l-4 border-l-holistifit-primary">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={getMealImage(day, 'breakfast')} 
                          alt="Breakfast meal" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p>{mealPlanData[day as keyof typeof mealPlanData].breakfast.name}</p>
                          <span className="text-muted-foreground">
                            {mealPlanData[day as keyof typeof mealPlanData].breakfast.calories} kcal
                          </span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="ghost" className="h-7 text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Recipe
                          </Button>
                          <Button size="sm" variant="ghost" className="h-7 text-xs">
                            <Camera className="h-3 w-3 mr-1" />
                            Log
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DashboardCard>
                  
                  <DashboardCard title="Lunch" className="border-l-4 border-l-holistifit-secondary">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={getMealImage(day, 'lunch')} 
                          alt="Lunch meal" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p>{mealPlanData[day as keyof typeof mealPlanData].lunch.name}</p>
                          <span className="text-muted-foreground">
                            {mealPlanData[day as keyof typeof mealPlanData].lunch.calories} kcal
                          </span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="ghost" className="h-7 text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Recipe
                          </Button>
                          <Button size="sm" variant="ghost" className="h-7 text-xs">
                            <Camera className="h-3 w-3 mr-1" />
                            Log
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DashboardCard>
                  
                  <DashboardCard title="Dinner" className="border-l-4 border-l-holistifit-accent">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={getMealImage(day, 'dinner')} 
                          alt="Dinner meal" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p>{mealPlanData[day as keyof typeof mealPlanData].dinner.name}</p>
                          <span className="text-muted-foreground">
                            {mealPlanData[day as keyof typeof mealPlanData].dinner.calories} kcal
                          </span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="ghost" className="h-7 text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Recipe
                          </Button>
                          <Button size="sm" variant="ghost" className="h-7 text-xs">
                            <Camera className="h-3 w-3 mr-1" />
                            Log
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DashboardCard>
                  
                  <DashboardCard title="Snacks" className="border-l-4 border-l-muted-foreground">
                    <div className="space-y-3">
                      {mealPlanData[day as keyof typeof mealPlanData].snacks.map((snack, index) => (
                        <div key={index} className="flex justify-between">
                          <p>{snack.name}</p>
                          <span className="text-muted-foreground">{snack.calories} kcal</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-center">
                      <Button size="sm" variant="outline" className="w-full text-xs">
                        Add a snack
                      </Button>
                    </div>
                  </DashboardCard>
                  
                  <Button className="bg-holistifit-primary hover:bg-holistifit-dark mt-2" onClick={handleCustomize}>
                    Customize This Day
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DietChart;
