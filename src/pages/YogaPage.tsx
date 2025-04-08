
import React from 'react';
import { DashboardCard } from '@/components/ui/dashboard-card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Clock, Heart, Dumbbell, Star } from 'lucide-react';

const yogaPoses = [
  {
    id: 1,
    name: 'Vrikshasana (Tree Pose)',
    sanskrit: 'Vrikshasana',
    image: '/yoga-tree.jpg',
    duration: '1-3 min per side',
    difficulty: 'Beginner',
    description: 'A balancing pose that strengthens your legs and core while improving your focus and concentration.',
    benefits: [
      'Improves balance and stability',
      'Strengthens thighs, calves, and ankles',
      'Stretches the groin, inner thighs, and shoulders',
      'Develops concentration and focus'
    ],
    instructions: [
      'Start standing with feet together and arms at your sides',
      'Shift your weight onto your left foot',
      'Place the sole of your right foot on your inner left thigh or calf (avoid the knee)',
      'Once balanced, bring your palms together at your heart',
      'If stable, extend your arms overhead like branches',
      'Hold for 30 seconds to 1 minute, then switch sides'
    ]
  },
  {
    id: 2,
    name: 'Downward-Facing Dog',
    sanskrit: 'Adho Mukha Svanasana',
    image: '/yoga-downward-dog.jpg',
    duration: '1-3 min',
    difficulty: 'Beginner',
    description: 'An essential yoga pose that forms an inverted V-shape, stretching and strengthening the entire body.',
    benefits: [
      'Stretches the hamstrings, calves, and shoulders',
      'Strengthens the arms, shoulders, and legs',
      'Energizes the body',
      'Can relieve back pain and headaches'
    ],
    instructions: [
      'Start on hands and knees with wrists under shoulders and knees under hips',
      'Tuck your toes and lift your hips up and back',
      'Straighten your legs as much as comfortable (slight bend is fine)',
      'Press the floor away with your hands, rotating forearms inward',
      'Relax your head and neck, gazing toward your feet',
      'Hold for several breaths, pedaling your feet if needed'
    ]
  },
  {
    id: 3,
    name: 'Warrior II',
    sanskrit: 'Virabhadrasana II',
    image: '/yoga-warrior2.jpg',
    duration: '30-60 sec per side',
    difficulty: 'Intermediate',
    description: 'A powerful standing pose that builds strength and stamina in the legs, opens the hips, and expands the chest.',
    benefits: [
      'Strengthens the legs, core, and shoulders',
      'Opens the hips and chest',
      'Improves focus and concentration',
      'Builds physical and mental endurance'
    ],
    instructions: [
      'Stand with legs 3-4 feet apart',
      'Turn your right foot out 90 degrees and left foot in slightly',
      'Extend arms parallel to the floor, reaching actively',
      'Bend your right knee to 90 degrees, keeping it above the ankle',
      'Gaze over your right fingertips',
      'Keep your torso centered between your legs',
      'Hold for 30-60 seconds, then switch sides'
    ]
  },
  {
    id: 4,
    name: 'Child\'s Pose',
    sanskrit: 'Balasana',
    image: '/yoga-child.jpg',
    duration: '1-5 min',
    difficulty: 'Beginner',
    description: 'A restful pose that gently stretches the hips, thighs, and back while promoting relaxation and stress relief.',
    benefits: [
      'Gently stretches the lower back and hips',
      'Relaxes the spine, shoulders, and neck',
      'Calms the mind and reduces stress',
      'Helps relieve fatigue and anxiety'
    ],
    instructions: [
      'Kneel on the floor with big toes touching, knees wide apart',
      'Sit back on your heels',
      'Fold forward, extending arms in front or alongside your body',
      'Rest your forehead on the mat',
      'Breathe deeply, feeling the gentle stretch in your back',
      'Hold for 1-5 minutes or as long as comfortable'
    ]
  }
];

const YogaPage = () => {
  const { toast } = useToast();

  const handleStart = (name: string) => {
    toast({
      title: "Starting practice",
      description: `Beginning ${name} practice. Find a comfortable position.`,
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
        <h1 className="text-3xl font-bold tracking-tight">Yoga Practices</h1>
        <p className="text-muted-foreground">Discover the healing and balancing power of yoga with our curated poses.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {yogaPoses.map((pose) => (
          <Card key={pose.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="aspect-video w-full bg-muted relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">{pose.name}</h3>
                  <p className="text-sm opacity-90">{pose.sanskrit}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-1 h-3 w-3" />
                      {pose.duration}
                    </div>
                    <div className="text-sm bg-white/30 px-2 py-0.5 rounded-full">
                      {pose.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-4">{pose.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold flex items-center gap-1 mb-2">
                  <Heart className="h-3 w-3 text-holistifit-accent" /> Benefits
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1 pl-5 list-disc">
                  {pose.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <details className="text-sm mb-4">
                <summary className="font-semibold flex items-center gap-1 cursor-pointer">
                  <BookOpen className="h-3 w-3 text-holistifit-primary" /> 
                  How to Practice
                </summary>
                <ol className="mt-2 text-xs text-muted-foreground pl-5 list-decimal space-y-1">
                  {pose.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </details>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  className="flex-1 bg-holistifit-primary hover:bg-holistifit-dark" 
                  onClick={() => handleStart(pose.name)}
                >
                  Start Practice
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleSave(pose.name)}
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <DashboardCard title="Yoga for Different Needs" className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Morning Energy",
              description: "Revitalizing poses to wake up your body and mind",
              poses: "Sun Salutations, Chair Pose, Warrior I",
              level: "All levels",
              duration: "15-20 min"
            },
            {
              title: "Stress Relief",
              description: "Calming sequence to release tension and anxiety",
              poses: "Child's Pose, Forward Folds, Legs Up The Wall",
              level: "Beginner friendly",
              duration: "20-30 min"
            },
            {
              title: "Back Pain Relief",
              description: "Gentle stretches to ease back discomfort",
              poses: "Cat-Cow, Sphinx Pose, Supine Twist",
              level: "All levels",
              duration: "15-25 min"
            },
          ].map((practice, index) => (
            <Card key={index} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2 text-holistifit-primary">{practice.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{practice.description}</p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-holistifit-accent" />
                    <span>Key poses: {practice.poses}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Dumbbell className="h-3 w-3 text-holistifit-primary" />
                    <span>Level: {practice.level}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>Duration: {practice.duration}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-3 text-xs">
                  View Sequence
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
};

export default YogaPage;
