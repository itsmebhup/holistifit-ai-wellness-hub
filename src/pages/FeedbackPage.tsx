
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Star, ThumbsUp, User } from 'lucide-react';

const FeedbackPage = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [likedFeedback, setLikedFeedback] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate submission process
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Feedback submitted!",
        description: "Thank you for your valuable feedback.",
      });
      // Reset the form
      (e.target as HTMLFormElement).reset();
      setRating(0);
    }, 1500);
  };

  const handleLike = (id: number) => {
    if (likedFeedback.includes(id)) {
      setLikedFeedback(likedFeedback.filter(feedbackId => feedbackId !== id));
    } else {
      setLikedFeedback([...likedFeedback, id]);
    }
  };

  // Mock user feedback data
  const userFeedback = [
    {
      id: 1,
      name: "Sarah J.",
      avatar: "/avatar-1.jpg",
      rating: 5,
      date: "March 15, 2025",
      comment: "HolistiFit has completely transformed my approach to health. The personalized workout plans and nutrition tracking have helped me lose 15 pounds and feel more energetic than ever!",
      likes: 24
    },
    {
      id: 2,
      name: "Michael R.",
      avatar: "/avatar-2.jpg",
      rating: 4,
      date: "February 28, 2025",
      comment: "I love the meditation guides and yoga routines. Very well structured and easy to follow even for beginners. The only improvement I'd suggest is adding more advanced poses for experienced users.",
      likes: 18
    },
    {
      id: 3,
      name: "Aisha T.",
      avatar: "/avatar-3.jpg",
      rating: 5,
      date: "April 2, 2025",
      comment: "The calorie calculator and food recommendations have been spot on! I've finally found a sustainable way to maintain my nutrition goals without feeling restricted. The AI suggestions are surprisingly accurate.",
      likes: 32
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Feedback</h1>
        <p className="text-muted-foreground">Share your experience or browse feedback from other users</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Submit Your Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label>Rating</Label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="focus:outline-none"
                        onClick={() => setRating(star)}
                      >
                        <Star
                          className={`h-6 w-6 ${
                            star <= rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Tell us about your experience with HolistiFit"
                    className="resize-none"
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-holistifit-primary hover:bg-holistifit-dark"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Recent Feedback</h2>
          <div className="space-y-4">
            {userFeedback.map((feedback) => (
              <Card key={feedback.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{feedback.name}</h3>
                        <p className="text-xs text-muted-foreground">{feedback.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star 
                          key={index} 
                          className={`h-4 w-4 ${
                            index < feedback.rating 
                              ? "text-yellow-500 fill-yellow-500" 
                              : "text-gray-200"
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm my-4">{feedback.comment}</p>
                  
                  <div className="flex items-center justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs flex items-center gap-1"
                      onClick={() => handleLike(feedback.id)}
                    >
                      <ThumbsUp className={`h-3 w-3 ${
                        likedFeedback.includes(feedback.id) 
                          ? "text-holistifit-primary fill-holistifit-primary" 
                          : ""
                      }`} />
                      Helpful
                      <span className="ml-1">
                        {feedback.likes + (likedFeedback.includes(feedback.id) ? 1 : 0)}
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-muted">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <p className="text-sm text-muted-foreground">Share your own experience and help us improve!</p>
                <Button variant="link" className="text-holistifit-primary mt-2" onClick={() => document.getElementById('name')?.focus()}>
                  Add your feedback
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
