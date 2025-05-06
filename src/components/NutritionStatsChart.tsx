
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

// Sample data for charts
const weeklyNutritionData = [
  { name: 'Mon', protein: 80, carbs: 200, fat: 60, calories: 1650 },
  { name: 'Tue', protein: 90, carbs: 220, fat: 55, calories: 1730 },
  { name: 'Wed', protein: 75, carbs: 180, fat: 65, calories: 1590 },
  { name: 'Thu', protein: 85, carbs: 190, fat: 60, calories: 1640 },
  { name: 'Fri', protein: 95, carbs: 210, fat: 50, calories: 1670 },
  { name: 'Sat', protein: 100, carbs: 240, fat: 70, calories: 1980 },
  { name: 'Sun', protein: 85, carbs: 200, fat: 65, calories: 1720 },
];

const monthlyNutritionData = [
  { name: 'Week 1', protein: 560, carbs: 1400, fat: 420, calories: 11600 },
  { name: 'Week 2', protein: 600, carbs: 1450, fat: 440, calories: 12100 },
  { name: 'Week 3', protein: 580, carbs: 1380, fat: 410, calories: 11500 },
  { name: 'Week 4', protein: 620, carbs: 1500, fat: 450, calories: 12400 },
];

const macroGoals = {
  protein: 100,
  carbs: 250,
  fat: 70,
  calories: 2000
};

const NutritionStatsChart = () => {
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly'>('weekly');
  const [chartView, setChartView] = useState<'macros' | 'calories'>('macros');
  
  const data = timeRange === 'weekly' ? weeklyNutritionData : monthlyNutritionData;
  
  const getAverageMacros = () => {
    const sum = data.reduce((acc, curr) => {
      return {
        protein: acc.protein + curr.protein,
        carbs: acc.carbs + curr.carbs,
        fat: acc.fat + curr.fat,
        calories: acc.calories + curr.calories
      };
    }, { protein: 0, carbs: 0, fat: 0, calories: 0 });
    
    return {
      protein: Math.round(sum.protein / data.length),
      carbs: Math.round(sum.carbs / data.length),
      fat: Math.round(sum.fat / data.length),
      calories: Math.round(sum.calories / data.length)
    };
  };
  
  const avgMacros = getAverageMacros();
  
  const calculatePercentage = (value: number, goal: number) => {
    return Math.round((value / goal) * 100);
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <div>
            <CardTitle>Nutrition Analytics</CardTitle>
            <CardDescription>Track your macronutrient intake over time</CardDescription>
          </div>
          <div className="flex space-x-2">
            <Select value={timeRange} onValueChange={(value) => setTimeRange(value as 'weekly' | 'monthly')}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="macros" value={chartView} onValueChange={(value) => setChartView(value as 'macros' | 'calories')}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="macros">Macronutrients</TabsTrigger>
            <TabsTrigger value="calories">Calories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="macros">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}g`]} />
                  <Legend />
                  <Bar dataKey="protein" name="Protein" fill="#8884d8" />
                  <Bar dataKey="carbs" name="Carbs" fill="#82ca9d" />
                  <Bar dataKey="fat" name="Fat" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { name: 'Protein', value: avgMacros.protein, goal: macroGoals.protein, color: '#8884d8' },
                { name: 'Carbs', value: avgMacros.carbs, goal: macroGoals.carbs, color: '#82ca9d' },
                { name: 'Fat', value: avgMacros.fat, goal: macroGoals.fat, color: '#ffc658' }
              ].map((item) => (
                <div key={item.name} className="bg-muted p-4 rounded-lg">
                  <div className="mb-2">
                    <span className="text-sm font-medium">{item.name}</span>
                    <div className="text-2xl font-bold">{item.value}g</div>
                    <div className="text-xs text-muted-foreground">of {item.goal}g goal</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${calculatePercentage(item.value, item.goal)}%`,
                        backgroundColor: item.color
                      }}
                    ></div>
                  </div>
                  <div className="text-xs mt-1 text-right">
                    {calculatePercentage(item.value, item.goal)}%
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="calories">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => [`${value} kcal`]} />
                  <Legend />
                  <Line type="monotone" dataKey="calories" name="Calories" stroke="#ff7300" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-muted p-4 rounded-lg mt-6">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-sm font-medium">Daily Average</span>
                  <div className="text-2xl font-bold">{avgMacros.calories} kcal</div>
                  <div className="text-xs text-muted-foreground">of {macroGoals.calories} kcal goal</div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium">Progress</span>
                  <div className="text-2xl font-bold">{calculatePercentage(avgMacros.calories, macroGoals.calories)}%</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-orange-500" 
                  style={{ width: `${calculatePercentage(avgMacros.calories, macroGoals.calories)}%` }}
                ></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default NutritionStatsChart;
