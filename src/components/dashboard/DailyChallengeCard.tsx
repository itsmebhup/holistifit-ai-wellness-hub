
import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const challengeImage = "/placeholder.svg";

const DailyChallengeCard = () => {
  const { toast } = useToast();
  
  return (
    <Card className="md:col-span-2 lg:col-span-1 hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Daily Challenge
          <Award className="h-5 w-5 text-holistifit-accent" />
        </CardTitle>
      </CardHeader>
      <div className="aspect-video w-full bg-muted overflow-hidden">
        <img 
          src={challengeImage} 
          alt="Daily Challenge"
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="mt-4">
        <p className="text-lg font-medium">Take 10,000 steps today</p>
        <p className="text-sm text-muted-foreground mt-1">
          Walking is great for your health and helps burn calories throughout the day.
        </p>
        <div className="mt-4 flex items-center gap-4">
          <Button variant="ghost" className="text-xs" onClick={() => toast({ title: "Challenge skipped", description: "We'll find a better challenge for tomorrow!" })}>Skip</Button>
          <Button className="text-xs bg-holistifit-primary hover:bg-holistifit-dark" onClick={() => toast({ title: "Challenge accepted!", description: "We'll track your progress throughout the day." })}>Accept Challenge</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyChallengeCard;
