
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Utensils, Apple, Beef, Fish, Egg } from 'lucide-react';

// Sample food database
const foodDatabase = {
  highProtein: [
    { name: 'Grilled Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6, image: '🍗' },
    { name: 'Salmon Fillet', calories: 206, protein: 22, carbs: 0, fat: 13, image: '🐟' },
    { name: 'Greek Yogurt', calories: 100, protein: 10, carbs: 3.6, fat: 0.4, image: '🥣' },
    { name: 'Eggs', calories: 78, protein: 6, carbs: 0.6, fat: 5, image: '🥚' },
    { name: 'Tofu', calories: 76, protein: 8, carbs: 2, fat: 4, image: '🧊' },
  ],
  lowCarb: [
    { name: 'Avocado', calories: 160, protein: 2, carbs: 8.5, fat: 15, image: '🥑' },
    { name: 'Broccoli', calories: 55, protein: 3.7, carbs: 11, fat: 0.6, image: '🥦' },
    { name: 'Spinach', calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, image: '🍃' },
    { name: 'Almonds', calories: 164, protein: 6, carbs: 6.1, fat: 14, image: '🥜' },
    { name: 'Tuna', calories: 142, protein: 30, carbs: 0, fat: 1, image: '🐟' },
  ],
  plantBased: [
    { name: 'Lentils', calories: 116, protein: 9, carbs: 20, fat: 0.4, image: '🫘' },
    { name: 'Quinoa', calories: 120, protein: 4.4, carbs: 21, fat: 1.9, image: '🌾' },
    { name: 'Chickpeas', calories: 164, protein: 8.9, carbs: 27, fat: 2.6, image: '🫘' },
    { name: 'Chia Seeds', calories: 138, protein: 4.7, carbs: 12, fat: 9, image: '🫘' },
    { name: 'Sweet Potato', calories: 86, protein: 1.6, carbs: 20, fat: 0.1, image: '🍠' },
  ],
  energyBoosting: [
    { name: 'Banana', calories: 96, protein: 1.2, carbs: 23, fat: 0.2, image: '🍌' },
    { name: 'Oatmeal', calories: 154, protein: 6, carbs: 27, fat: 2.5, image: '🥣' },
    { name: 'Blueberries', calories: 57, protein: 0.7, carbs: 14, fat: 0.3, image: '🫐' },
    { name: 'Brown Rice', calories: 111, protein: 2.3, carbs: 23, fat: 0.8, image: '🍚' },
    { name: 'Dark Chocolate', calories: 155, protein: 1.4, carbs: 13, fat: 9, image: '🍫' },
  ]
};

const FoodRecommendation = () => {
  const [selectedDiet, setSelectedDiet] = useState('highProtein');
  const [selectedCategory, setSelectedCategory] = useState('breakfast');
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const getRecommendations = () => {
    // In a real app, this would be filtered based on more criteria and user preferences
    setRecommendations(foodDatabase[selectedDiet as keyof typeof foodDatabase].slice(0, 3));
  };

  return (
    <div className="animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Food Recommendations</CardTitle>
              <CardDescription>Get personalized food suggestions based on your goals</CardDescription>
            </div>
            <Utensils className="h-8 w-8 text-holistifit-accent" />
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="preferences" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="preferences" className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">I'm looking for:</div>
                <Select value={selectedDiet} onValueChange={setSelectedDiet}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select diet type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="highProtein">High Protein Foods</SelectItem>
                    <SelectItem value="lowCarb">Low Carb Foods</SelectItem>
                    <SelectItem value="plantBased">Plant Based Foods</SelectItem>
                    <SelectItem value="energyBoosting">Energy Boosting Foods</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">For:</div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select meal type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                    <SelectItem value="snacks">Snacks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                className="w-full mt-4 bg-holistifit-primary hover:bg-holistifit-dark" 
                onClick={getRecommendations}
              >
                Get Recommendations
              </Button>
            </TabsContent>
            
            <TabsContent value="recommendations">
              {recommendations.length > 0 ? (
                <div className="space-y-4">
                  {recommendations.map((food, index) => (
                    <Card key={index} className="border-holistifit-secondary card-hover">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-3 items-center">
                            <div className="text-4xl">{food.image}</div>
                            <div>
                              <div className="font-medium">{food.name}</div>
                              <div className="text-sm text-muted-foreground">{food.calories} kcal per serving</div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Add
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                          <div className="p-2 bg-holistifit-light rounded">
                            <div className="font-medium text-holistifit-primary">Protein</div>
                            <div>{food.protein}g</div>
                          </div>
                          <div className="p-2 bg-holistifit-light rounded">
                            <div className="font-medium text-holistifit-primary">Carbs</div>
                            <div>{food.carbs}g</div>
                          </div>
                          <div className="p-2 bg-holistifit-light rounded">
                            <div className="font-medium text-holistifit-primary">Fat</div>
                            <div>{food.fat}g</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Apple className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">No recommendations yet</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Select your preferences and generate recommendations
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodRecommendation;
