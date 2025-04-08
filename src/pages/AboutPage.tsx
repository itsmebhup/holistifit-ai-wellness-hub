
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FlameIcon, CheckCircle, XCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About <span className="text-holistifit-primary">HolistiFit</span></h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your Personalized Wellness Companion - We provide personalized health insights and structured fitness guidance, tailored to your unique needs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border border-holistifit-primary/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <XCircle className="text-destructive" size={24} />
              Problem Statement
            </h2>
            <ul className="space-y-3">
              {[
                "Lack of personalized fitness and diet plans",
                "Difficulty in tracking calorie intake and expenditure",
                "No structured recovery and wellness guidance",
                "Limited access to instant health-related insights",
                "Need for holistic mental and physical well-being"
              ].map((problem, index) => (
                <li key={index} className="flex items-start gap-2">
                  <XCircle className="text-destructive shrink-0 mt-0.5" size={18} />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border border-holistifit-primary/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="text-holistifit-primary" size={24} />
              Solution - HolistiFit
            </h2>
            <ul className="space-y-3">
              {[
                "Personalized health tracking with real-time insights",
                "Diet measurement & calorie tracking for smarter nutrition choices",
                "Yoga & exercise recommendations based on user preferences",
                "Recovery plans for post-workout and mental relaxation",
                "Food suggestions tailored to individual calorie needs",
                "Progress reports with charts & graphs to monitor health trends",
                "AI chatbot support for instant health guidance"
              ].map((solution, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-holistifit-primary shrink-0 mt-0.5" size={18} />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-holistifit-primary/20">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Objectives of HolistiFit</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              "Provide a holistic approach to physical and mental well-being",
              "Offer personalized diet plans and calorie tracking",
              "Recommend yoga and recovery strategies for better health",
              "Generate daily progress reports with charts and graphs",
              "Provide AI-driven food recommendations based on calorie intake",
              "Enable a chatbot for instant health and fitness queries"
            ].map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="bg-holistifit-primary rounded-full h-6 w-6 flex items-center justify-center text-white shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        <h2 className="text-2xl font-semibold">What Sets Us Apart</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Smart Diet Tracking & Personalized Nutrition",
              description: "Our AI analyzes your eating habits and provides tailored nutrition plans that evolve with your progress."
            },
            {
              title: "Adaptive Fitness: Yoga & Recovery Planning",
              description: "Unlike generic fitness apps, we adjust your regimen based on your energy levels, progress, and recovery needs."
            },
            {
              title: "Your 24/7 Wellness Assistant: AI Health Chatbot",
              description: "Get immediate answers to your health questions from our knowledgeable AI assistant, any time of day."
            }
          ].map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-gradient-to-r from-holistifit-light to-background border-none">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FlameIcon className="text-holistifit-accent" size={24} />
            Benefits of HolistiFit
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Personalized health tracking tailored to individual needs",
              "AI-driven fitness and nutrition plans for smarter decision-making",
              "Real-time progress monitoring through visual reports",
              "AI chatbot for 24/7 health assistance",
              "Improved mental well-being through yoga & stress management",
              "User-friendly and interactive interface for seamless experience"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="text-holistifit-primary shrink-0 mt-0.5" size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
