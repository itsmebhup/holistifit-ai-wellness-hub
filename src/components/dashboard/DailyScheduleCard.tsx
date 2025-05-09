
import React from 'react';
import { Flower, Dumbbell, Apple, Brain } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const scheduleItems = [
  {
    time: "7:00 AM",
    activity: "Morning Yoga",
    duration: "15 min",
    icon: <Flower className="h-4 w-4 text-holistifit-primary" />
  },
  {
    time: "9:30 AM",
    activity: "HIIT Workout",
    duration: "30 min",
    icon: <Dumbbell className="h-4 w-4 text-holistifit-accent" />
  },
  {
    time: "1:00 PM",
    activity: "Lunch - Balanced Meal",
    duration: "",
    icon: <Apple className="h-4 w-4 text-green-500" />
  },
  {
    time: "6:00 PM",
    activity: "Evening Meditation",
    duration: "10 min",
    icon: <Brain className="h-4 w-4 text-purple-500" />
  }
];

const DailyScheduleCard = () => {
  return (
    <Card className="md:col-span-2 hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          Today's Schedule
          <Button variant="ghost" size="sm" className="text-xs">View All</Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b last:border-0 pb-3 last:pb-0">
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-muted rounded-full">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.activity}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
              </div>
              {item.duration && (
                <span className="text-sm bg-muted px-2 py-1 rounded">{item.duration}</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyScheduleCard;
