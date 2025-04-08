
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Activity } from 'lucide-react';

const CalorieCalculator = () => {
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [calories, setCalories] = useState<number | null>(null);
  const [goal, setGoal] = useState('maintain');

  const calculateCalories = () => {
    if (!age || !weight || !height) {
      return;
    }

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    let activityMultiplier;
    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'light':
        activityMultiplier = 1.375;
        break;
      case 'moderate':
        activityMultiplier = 1.55;
        break;
      case 'active':
        activityMultiplier = 1.725;
        break;
      case 'very-active':
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.55;
    }

    let totalCalories = Math.round(bmr * activityMultiplier);

    // Adjust for goal
    switch (goal) {
      case 'lose':
        totalCalories = Math.round(totalCalories * 0.85); // 15% deficit
        break;
      case 'gain':
        totalCalories = Math.round(totalCalories * 1.15); // 15% surplus
        break;
    }

    setCalories(totalCalories);
  };

  return (
    <Card className="w-full max-w-lg mx-auto animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Calorie Calculator</CardTitle>
            <CardDescription>Calculate your daily calorie needs</CardDescription>
          </div>
          <Activity className="h-8 w-8 text-holistifit-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age (years)</Label>
            <Input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 30"
              min={1}
              max={120}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 70"
              min={20}
              max={500}
              step="0.1"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 170"
              min={100}
              max={250}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="activity-level">Activity Level</Label>
          <Select value={activityLevel} onValueChange={setActivityLevel}>
            <SelectTrigger id="activity-level">
              <SelectValue placeholder="Select activity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
              <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
              <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
              <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
              <SelectItem value="very-active">Very Active (hard exercise daily)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="goal">Goal</Label>
          <Select value={goal} onValueChange={setGoal}>
            <SelectTrigger id="goal">
              <SelectValue placeholder="Select goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lose">Lose Weight</SelectItem>
              <SelectItem value="maintain">Maintain Weight</SelectItem>
              <SelectItem value="gain">Gain Weight</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className="w-full bg-holistifit-primary hover:bg-holistifit-dark" 
          onClick={calculateCalories}
        >
          Calculate
        </Button>

        {calories && (
          <div className="mt-4 p-4 text-center border border-holistifit-secondary rounded-lg bg-holistifit-light">
            <p className="text-sm text-muted-foreground">Your daily calorie needs:</p>
            <p className="text-2xl font-bold text-holistifit-primary">{calories} calories</p>
            <p className="text-xs text-muted-foreground mt-2">
              Based on the information you provided, this is an estimate of the calories you need to {goal === 'maintain' ? 'maintain' : goal === 'lose' ? 'lose' : 'gain'} weight.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CalorieCalculator;
