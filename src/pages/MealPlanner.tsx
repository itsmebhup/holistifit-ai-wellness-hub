
import React, { useState } from 'react';
import DietChart from '@/components/DietChart';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Bell, Save, Trash2, Plus, ChevronDown, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import NutritionStatsChart from '@/components/NutritionStatsChart';

const MealPlanner = () => {
  const { toast } = useToast();
  const [mealNotes, setMealNotes] = useState('');
  const [allergies, setAllergies] = useState(['Nuts', 'Shellfish']);
  const [customizationShown, setCustomizationShown] = useState(false);
  
  const handleSaveNotes = () => {
    toast({
      title: "Notes saved",
      description: "Your meal notes have been saved successfully."
    });
  };

  const handleAddAllergy = () => {
    toast({
      title: "Feature coming soon",
      description: "You'll be able to add allergies in the next update!"
    });
  };

  const handleCustomize = () => {
    setCustomizationShown(!customizationShown);
    if (!customizationShown) {
      toast({
        title: "Customization enabled",
        description: "Now you can customize your meal plan. Changes are automatically saved."
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meal Planner</h1>
          <p className="text-muted-foreground">Your personalized meal plan for maximum nutrition and results.</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handleCustomize}>
            {customizationShown ? 'Hide Options' : 'Customize Plan'}
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${customizationShown ? 'rotate-180' : ''}`} />
          </Button>
          <Button variant="default" size="sm" className="bg-holistifit-primary hover:bg-holistifit-dark">
            <Save className="mr-1 h-4 w-4" />
            Save Plan
          </Button>
        </div>
      </div>

      {customizationShown && (
        <Card className="border-holistifit-primary/20 bg-olive-50 dark:bg-olive-900/20 mb-6">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Diet Preferences</h3>
                <div className="space-y-2">
                  {['Vegetarian', 'High Protein', 'Low Carb', 'Keto'].map((pref) => (
                    <div key={pref} className="flex items-center justify-between">
                      <span>{pref}</span>
                      <Switch />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Allergies & Restrictions</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {allergies.map((allergy) => (
                    <div key={allergy} className="bg-muted px-2 py-1 rounded-full text-xs flex items-center">
                      {allergy}
                      <button className="ml-1 text-muted-foreground hover:text-destructive">
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={handleAddAllergy}
                    className="bg-muted px-2 py-1 rounded-full text-xs flex items-center hover:bg-muted/80"
                  >
                    <Plus size={12} className="mr-1" /> Add
                  </button>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2">Meal Notes</h3>
                  <Textarea 
                    value={mealNotes}
                    onChange={(e) => setMealNotes(e.target.value)}
                    placeholder="Add any notes about your meals or diet..."
                    className="min-h-[80px]"
                  />
                  <Button onClick={handleSaveNotes} size="sm" variant="outline" className="mt-2">
                    Save Notes
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <DietChart />
        </div>
        
        <div className="space-y-6">
          <Card className="border-holistifit-primary/20 overflow-hidden">
            <div className="bg-gradient-to-r from-holistifit-primary to-holistifit-secondary text-white p-4">
              <h2 className="font-semibold text-lg flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                Meal Reminders
              </h2>
            </div>
            <CardContent className="pt-4">
              <div className="space-y-3">
                {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                  <div key={meal} className="flex items-center justify-between">
                    <span>{meal}</span>
                    <div className="flex items-center">
                      <select className="mr-2 text-xs bg-transparent border rounded px-1">
                        {['7:00 AM', '12:00 PM', '7:00 PM'].map(time => (
                          <option key={time}>{time}</option>
                        ))}
                      </select>
                      <Switch />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Water Reminders</span>
                  <Switch />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Reminds you to drink water every 2 hours</p>
              </div>
            </CardContent>
          </Card>
          
          <NutritionStatsChart />
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg mb-2 flex items-center">
                <Info className="mr-2 h-4 w-4 text-holistifit-primary" />
                Nutrition Tips
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Try to eat at consistent times each day to maintain energy levels</li>
                <li>Aim for at least 5 servings of fruits and vegetables daily</li>
                <li>Stay hydrated by drinking at least 8 glasses of water</li>
                <li>Limit processed foods and added sugars</li>
                <li>Adjust portion sizes based on your activity level for the day</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Tabs defaultValue="breakfast" className="mt-10">
        <TabsList className="mb-4">
          <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
          <TabsTrigger value="lunch">Lunch</TabsTrigger>
          <TabsTrigger value="dinner">Dinner</TabsTrigger>
          <TabsTrigger value="snacks">Snacks</TabsTrigger>
        </TabsList>
        
        {['breakfast', 'lunch', 'dinner', 'snacks'].map((mealType) => (
          <TabsContent key={mealType} value={mealType} className="mt-0">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((idx) => (
                    <div key={idx} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 bg-muted relative overflow-hidden">
                        <img 
                          src={`/meal-${mealType}-${idx}.jpg`} 
                          alt={`${mealType} option ${idx}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium">Healthy {mealType.charAt(0).toUpperCase() + mealType.slice(1)} Option {idx}</h4>
                        <p className="text-xs text-muted-foreground mb-2">320 calories • 24g protein • 12g fat</p>
                        <div className="flex justify-between items-center">
                          <Button size="sm" variant="outline" className="text-xs">View Recipe</Button>
                          <Button size="sm" variant="ghost" className="text-xs">
                            <Trash2 className="h-3 w-3 mr-1" /> Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 w-full bg-holistifit-primary hover:bg-holistifit-dark">
                  <Plus className="h-4 w-4 mr-1" /> Add New {mealType.charAt(0).toUpperCase() + mealType.slice(1)} Option
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MealPlanner;
