
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const DailyStatusCard = () => {
  return (
    <Card className="bg-gradient-to-r from-holistifit-light to-background hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Today's Status</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Calories</p>
          <p className="text-2xl font-medium">1,240 / 2,000</p>
          <div className="mt-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-holistifit-primary h-full rounded-full" style={{ width: '62%' }}></div>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Water</p>
          <p className="text-2xl font-medium">4 / 8 glasses</p>
          <div className="mt-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Exercise</p>
          <p className="text-2xl font-medium">30 min</p>
          <div className="mt-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-holistifit-accent h-full rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Steps</p>
          <p className="text-2xl font-medium">6,254</p>
          <div className="mt-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full rounded-full" style={{ width: '63%' }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyStatusCard;
