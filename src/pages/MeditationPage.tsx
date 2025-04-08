
import React from 'react';
import { DashboardCard } from '@/components/ui/dashboard-card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Clock, Heart, Play } from 'lucide-react';

const meditationItems = [
  {
    id: 1,
    name: 'Mindful Breathing',
    image: '/meditation-breathing.jpg',
    duration: '10 min',
    level: 'Beginner',
    description: 'Focus on your breath to quiet the mind and bring awareness to the present moment.',
    benefits: ['Reduces stress and anxiety', 'Improves focus and concentration', 'Promotes emotional well-being'],
    instructions: 'Sit comfortably with your back straight. Close your eyes and breathe naturally. Focus your attention on your breath. Notice the sensation of air moving in and out. When your mind wanders, gently bring your focus back to your breath.'
  },
  {
    id: 2,
    name: 'Body Scan Meditation',
    image: '/meditation-bodyscan.jpg',
    duration: '15 min',
    level: 'Intermediate',
    description: 'Scan your body from head to toe, releasing tension and promoting awareness of physical sensations.',
    benefits: ['Releases physical tension', 'Improves body awareness', 'Helps with insomnia'],
    instructions: 'Lie down comfortably. Starting from the top of your head, bring awareness to each part of your body, moving downward. Notice any sensations without judgment. If you find tension, breathe into that area and imagine releasing it.'
  },
  {
    id: 3,
    name: 'Loving-Kindness Meditation',
    image: '/meditation-loving-kindness.jpg',
    duration: '12 min',
    level: 'All Levels',
    description: 'Cultivate feelings of love, kindness, and compassion towards yourself and others.',
    benefits: ['Increases positive emotions', 'Builds compassion', 'Improves relationships'],
    instructions: 'Sit comfortably and take a few deep breaths. Think of yourself and repeat: "May I be happy. May I be healthy. May I be safe." Then extend these wishes to loved ones, neutral people, and eventually all beings.'
  },
  {
    id: 4,
    name: 'Zen Meditation',
    image: '/meditation-zen.jpg',
    duration: '20 min',
    level: 'Advanced',
    description: 'Traditional Zen practice that focuses on posture and breath to achieve insights into the nature of existence.',
    benefits: ['Deepens spiritual awareness', 'Cultivates discipline', 'Promotes clear thinking'],
    instructions: 'Sit in lotus position or as close as comfortable with a straight back. Half-close your eyes and focus on a point. Keep your mind clear of thoughts. If thoughts arise, acknowledge them and let them pass without attachment.'
  },
];

const MeditationPage = () => {
  const { toast } = useToast();

  const handleStart = (name: string) => {
    toast({
      title: "Starting meditation",
      description: `Beginning ${name} session. Find a quiet place and get comfortable.`,
    });
  };

  const handleSave = (name: string) => {
    toast({
      title: "Saved to favorites",
      description: `${name} has been added to your favorites.`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meditation</h1>
        <p className="text-muted-foreground">Discover peace and mindfulness with our guided meditation practices.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {meditationItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="aspect-video w-full bg-muted relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-1 h-3 w-3" />
                      {item.duration}
                    </div>
                    <div className="text-sm bg-white/30 px-2 py-0.5 rounded-full">
                      {item.level}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold flex items-center gap-1 mb-2">
                  <Heart className="h-3 w-3 text-holistifit-accent" /> Benefits
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1 pl-5 list-disc">
                  {item.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <details className="text-sm mb-4">
                <summary className="font-semibold flex items-center gap-1 cursor-pointer">
                  <BookOpen className="h-3 w-3 text-holistifit-primary" /> 
                  How to Practice
                </summary>
                <p className="mt-2 text-xs text-muted-foreground pl-4">
                  {item.instructions}
                </p>
              </details>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  className="flex-1 bg-holistifit-primary hover:bg-holistifit-dark" 
                  onClick={() => handleStart(item.name)}
                >
                  <Play className="mr-1 h-4 w-4" />
                  Start
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleSave(item.name)}
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <DashboardCard title="Meditation Tips" className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Consistency is Key",
              content: "Even just 5 minutes of daily meditation can have profound benefits for your mental well-being."
            },
            {
              title: "Create a Dedicated Space",
              content: "Designate a quiet, comfortable area in your home specifically for meditation practice."
            },
            {
              title: "Start Simple",
              content: "Begin with guided meditations that help you focus on your breath or body sensations."
            }
          ].map((tip, index) => (
            <div key={index} className="bg-muted rounded-lg p-4">
              <h3 className="font-medium mb-2 text-holistifit-primary">{tip.title}</h3>
              <p className="text-sm text-muted-foreground">{tip.content}</p>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
};

export default MeditationPage;
