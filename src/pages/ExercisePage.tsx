
import React from 'react';
import { DashboardCard } from '@/components/ui/dashboard-card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Activity, Clock, Dumbbell, FlameIcon, Heart, Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const exerciseCategories = {
  cardio: [
    {
      id: 1,
      name: 'Running',
      image: '/exercise-running.jpg',
      duration: '20-30 min',
      difficulty: 'Moderate',
      calories: '300-400 cal',
      description: 'A high-impact cardio exercise that builds endurance and burns significant calories.',
      benefits: [
        'Improves cardiovascular health',
        'Burns calories efficiently',
        'Builds leg and core strength',
        'Boosts mood through endorphin release'
      ],
      instructions: [
        'Start with a 5-minute warm-up walk',
        'Begin jogging at a comfortable pace',
        'Maintain proper posture: head up, shoulders relaxed',
        'Land midfoot, not on heels or toes',
        'Breathe rhythmically: inhale for 2-3 steps, exhale for 2-3 steps',
        'Cool down with a 5-minute walk at the end'
      ]
    },
    {
      id: 2,
      name: 'Jump Rope',
      image: '/exercise-jumprope.jpg',
      duration: '10-15 min',
      difficulty: 'Moderate',
      calories: '200-300 cal',
      description: 'An effective cardio workout that improves coordination and burns calories in a short time frame.',
      benefits: [
        'Improves coordination and rhythm',
        'Burns calories quickly',
        'Strengthens legs and core',
        'Portable and convenient'
      ],
      instructions: [
        'Hold handles with a relaxed grip',
        'Keep elbows close to sides',
        'Jump just high enough for rope to pass under feet (1-2 inches)',
        'Land softly on balls of feet',
        'Start with short intervals (30-60 seconds) with rest periods',
        'Gradually increase duration as fitness improves'
      ]
    }
  ],
  strength: [
    {
      id: 3,
      name: 'Push-ups',
      image: '/exercise-pushup.jpg',
      duration: '5-10 min',
      difficulty: 'Adjustable',
      muscles: 'Chest, Shoulders, Triceps, Core',
      description: 'A bodyweight exercise that strengthens the upper body and core.',
      benefits: [
        'Builds upper body strength',
        'Engages multiple muscle groups simultaneously',
        'Can be modified for different fitness levels',
        'Requires no equipment'
      ],
      instructions: [
        'Start in a plank position with hands slightly wider than shoulders',
        'Keep your body in a straight line from head to heels',
        'Lower your body until chest nearly touches the floor',
        'Push back up to starting position',
        'For easier version: perform from knees or against wall',
        'For harder version: elevate feet or add clap'
      ],
      variations: ['Standard', 'Wide grip', 'Diamond (tricep)', 'Decline', 'Incline']
    },
    {
      id: 4,
      name: 'Squats',
      image: '/exercise-squat.jpg',
      duration: '5-10 min',
      difficulty: 'Adjustable',
      muscles: 'Quadriceps, Hamstrings, Glutes, Core',
      description: 'A fundamental lower body exercise that builds strength and power.',
      benefits: [
        'Strengthens entire lower body',
        'Improves mobility and balance',
        'Builds core stability',
        'Functional movement for daily activities'
      ],
      instructions: [
        'Stand with feet shoulder-width apart',
        'Keep chest up, shoulders back',
        'Push hips back and bend knees',
        'Lower until thighs are parallel to floor (or as deep as comfortable)',
        'Keep weight in heels and knees tracked over toes',
        'Push through heels to return to starting position'
      ],
      variations: ['Bodyweight', 'Goblet', 'Sumo', 'Split', 'Jump']
    }
  ],
  flexibility: [
    {
      id: 5,
      name: 'Standing Hamstring Stretch',
      image: '/exercise-hamstring.jpg',
      duration: '30-60 sec per side',
      difficulty: 'Beginner',
      targets: 'Hamstrings, Lower back',
      description: 'A gentle stretch that improves flexibility in the back of the legs and relieves lower back tension.',
      benefits: [
        'Increases hamstring flexibility',
        'Relieves lower back tension',
        'Improves posture',
        'Can help prevent injury'
      ],
      instructions: [
        'Stand with feet hip-width apart',
        'Extend right leg forward, heel on ground, toes pointing up',
        'Keeping both legs straight, hinge at hips',
        'Lower torso forward until you feel a stretch',
        'Hold for 30-60 seconds',
        'Switch legs and repeat'
      ]
    },
    {
      id: 6,
      name: 'Shoulder & Chest Stretch',
      image: '/exercise-shoulder.jpg',
      duration: '30-60 sec per side',
      difficulty: 'Beginner',
      targets: 'Chest, Shoulders, Biceps',
      description: 'Opens the chest and stretches the shoulders to improve posture and upper body mobility.',
      benefits: [
        'Reduces shoulder tension',
        'Opens chest and improves posture',
        'Increases shoulder mobility',
        'Counteracts effects of sitting and computer work'
      ],
      instructions: [
        'Stand in doorway or corner',
        'Place forearms on wall/doorframe with elbows at shoulder height',
        'Step forward with one foot',
        'Lean forward gently until you feel stretch across chest and shoulders',
        'Hold for 30-60 seconds',
        'Adjust arm height to target different parts of the chest'
      ]
    }
  ]
};

const ExercisePage = () => {
  const { toast } = useToast();

  const handleStart = (name: string) => {
    toast({
      title: "Starting exercise",
      description: `Beginning ${name}. Remember to maintain proper form.`,
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
        <h1 className="text-3xl font-bold tracking-tight">Exercise Library</h1>
        <p className="text-muted-foreground">Discover effective workouts tailored to your fitness goals.</p>
      </div>

      <Tabs defaultValue="cardio" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="cardio" className="flex items-center gap-2">
            <Activity size={16} /> Cardio
          </TabsTrigger>
          <TabsTrigger value="strength" className="flex items-center gap-2">
            <Dumbbell size={16} /> Strength
          </TabsTrigger>
          <TabsTrigger value="flexibility" className="flex items-center gap-2">
            <Target size={16} /> Flexibility
          </TabsTrigger>
        </TabsList>

        {/* Cardio Exercises */}
        <TabsContent value="cardio" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {exerciseCategories.cardio.map((exercise) => (
              <Card key={exercise.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video w-full bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-semibold">{exercise.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center text-sm">
                          <Clock className="mr-1 h-3 w-3" />
                          {exercise.duration}
                        </div>
                        <div className="flex items-center text-sm">
                          <FlameIcon className="mr-1 h-3 w-3 text-holistifit-accent" />
                          {exercise.calories}
                        </div>
                        <div className="text-sm bg-white/30 px-2 py-0.5 rounded-full">
                          {exercise.difficulty}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold flex items-center gap-1 mb-2">
                      <Heart className="h-3 w-3 text-holistifit-accent" /> Benefits
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1 pl-5 list-disc">
                      {exercise.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <details className="text-sm mb-4">
                    <summary className="font-semibold flex items-center gap-1 cursor-pointer">
                      <Dumbbell className="h-3 w-3 text-holistifit-primary" /> 
                      How to Perform
                    </summary>
                    <ol className="mt-2 text-xs text-muted-foreground pl-5 list-decimal space-y-1">
                      {exercise.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </details>
                  
                  <div className="flex gap-2 mt-4">
                    <Button 
                      className="flex-1 bg-holistifit-primary hover:bg-holistifit-dark" 
                      onClick={() => handleStart(exercise.name)}
                    >
                      Start Workout
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleSave(exercise.name)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Strength Exercises */}
        <TabsContent value="strength" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {exerciseCategories.strength.map((exercise) => (
              <Card key={exercise.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video w-full bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-semibold">{exercise.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center text-sm">
                          <Clock className="mr-1 h-3 w-3" />
                          {exercise.duration}
                        </div>
                        <div className="flex items-center text-sm">
                          <Dumbbell className="mr-1 h-3 w-3" />
                          {exercise.muscles}
                        </div>
                        <div className="text-sm bg-white/30 px-2 py-0.5 rounded-full">
                          {exercise.difficulty}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold flex items-center gap-1 mb-2">
                      <Heart className="h-3 w-3 text-holistifit-accent" /> Benefits
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1 pl-5 list-disc">
                      {exercise.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <details className="text-sm mb-4">
                    <summary className="font-semibold flex items-center gap-1 cursor-pointer">
                      <Dumbbell className="h-3 w-3 text-holistifit-primary" /> 
                      How to Perform
                    </summary>
                    <ol className="mt-2 text-xs text-muted-foreground pl-5 list-decimal space-y-1">
                      {exercise.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </details>
                  
                  <div className="text-xs text-muted-foreground mt-4 mb-4">
                    <span className="font-semibold">Variations: </span>
                    {exercise.variations.join(', ')}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button 
                      className="flex-1 bg-holistifit-primary hover:bg-holistifit-dark" 
                      onClick={() => handleStart(exercise.name)}
                    >
                      Start Workout
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleSave(exercise.name)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Flexibility Exercises */}
        <TabsContent value="flexibility" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {exerciseCategories.flexibility.map((exercise) => (
              <Card key={exercise.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video w-full bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-semibold">{exercise.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center text-sm">
                          <Clock className="mr-1 h-3 w-3" />
                          {exercise.duration}
                        </div>
                        <div className="flex items-center text-sm">
                          <Target className="mr-1 h-3 w-3" />
                          {exercise.targets}
                        </div>
                        <div className="text-sm bg-white/30 px-2 py-0.5 rounded-full">
                          {exercise.difficulty}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold flex items-center gap-1 mb-2">
                      <Heart className="h-3 w-3 text-holistifit-accent" /> Benefits
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1 pl-5 list-disc">
                      {exercise.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <details className="text-sm mb-4">
                    <summary className="font-semibold flex items-center gap-1 cursor-pointer">
                      <Dumbbell className="h-3 w-3 text-holistifit-primary" /> 
                      How to Perform
                    </summary>
                    <ol className="mt-2 text-xs text-muted-foreground pl-5 list-decimal space-y-1">
                      {exercise.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </details>
                  
                  <div className="flex gap-2 mt-4">
                    <Button 
                      className="flex-1 bg-holistifit-primary hover:bg-holistifit-dark" 
                      onClick={() => handleStart(exercise.name)}
                    >
                      Start Stretch
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleSave(exercise.name)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExercisePage;
