
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent, ChartTooltip } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// Weekly nutrition stats data
const weeklyData = [
  { day: 'Mon', calories: 1800, protein: 90, carbs: 220, fat: 50 },
  { day: 'Tue', calories: 2100, protein: 110, carbs: 240, fat: 60 },
  { day: 'Wed', calories: 1950, protein: 95, carbs: 210, fat: 55 },
  { day: 'Thu', calories: 2200, protein: 120, carbs: 250, fat: 65 },
  { day: 'Fri', calories: 2000, protein: 100, carbs: 230, fat: 58 },
  { day: 'Sat', calories: 2300, protein: 115, carbs: 260, fat: 70 },
  { day: 'Sun', calories: 1850, protein: 92, carbs: 200, fat: 52 },
];

const config = {
  calories: {
    label: 'Calories',
    color: '#4CAF50', // holistifit-primary
  },
  protein: {
    label: 'Protein',
    color: '#81C784', // holistifit-secondary
  },
  carbs: {
    label: 'Carbs',
    color: '#FF5722', // holistifit-accent
  },
  fat: {
    label: 'Fat',
    color: '#9C27B0', // purple
  },
};

const NutritionStatsChart = () => {
  const [activeTab, setActiveTab] = React.useState('calories');
  
  return (
    <Card className="border-holistifit-primary/20">
      <CardContent className="pt-6">
        <h3 className="font-medium text-lg mb-4">Weekly Nutrition Stats</h3>
        
        <div className="flex space-x-2 mb-4">
          {Object.entries(config).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-2 py-1 text-xs rounded ${
                activeTab === key 
                  ? 'bg-holistifit-primary text-white' 
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="h-64">
          <ChartContainer
            config={config}
          >
            <BarChart
              data={weeklyData}
              margin={{ top: 5, right: 5, left: 0, bottom: 20 }}
            >
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis 
                hide={true}
                domain={['auto', 'auto']}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
              />
              <Bar
                dataKey={activeTab}
                fill={config[activeTab as keyof typeof config].color}
                radius={[4, 4, 0, 0]}
                barSize={20}
              />
            </BarChart>
          </ChartContainer>
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>Daily Average: {Math.round(weeklyData.reduce((acc, day) => acc + day[activeTab as keyof typeof day] as number, 0) / 7)}</span>
          <span>Weekly Target: {activeTab === 'calories' ? '14,000' : activeTab === 'protein' ? '700g' : activeTab === 'carbs' ? '1,600g' : '400g'}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionStatsChart;
