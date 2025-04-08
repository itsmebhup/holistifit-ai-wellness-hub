
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SubscriptionPage = () => {
  const { toast } = useToast();

  const handleSubscribe = (plan: string) => {
    toast({
      title: "Subscription initiated",
      description: `You've selected the ${plan} plan. Redirecting to payment...`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Subscription Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Choose the perfect plan for your wellness journey and unlock premium features
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Free Plan */}
        <Card className="border-holistifit-primary/30 hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle>Free Plan</CardTitle>
            <CardDescription>Basic features to start your wellness journey</CardDescription>
            <div className="mt-4 text-4xl font-bold">
              $0
              <span className="text-sm text-muted-foreground font-normal">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {[
                "Access to basic yoga routines",
                "Limited meditation guides",
                "Basic exercise tracking",
                "Standard progress metrics",
                "Basic calorie calculator"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="h-5 w-5 text-holistifit-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
              {[
                "Personalized workout plans",
                "Premium content & routines",
                "AI-powered recommendations",
                "Advanced progress analytics",
                "Offline content access"
              ].map((feature, idx) => (
                <li key={idx+5} className="flex items-start text-muted-foreground">
                  <X className="h-5 w-5 text-muted-foreground/70 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleSubscribe('Free')}
            >
              Current Plan
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Monthly */}
        <Card className="border-holistifit-primary relative overflow-hidden hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 bg-holistifit-primary text-white px-3 py-1 text-xs font-medium">
            Popular
          </div>
          <CardHeader>
            <CardTitle>Premium Monthly</CardTitle>
            <CardDescription>Full access with monthly flexibility</CardDescription>
            <div className="mt-4 text-4xl font-bold">
              $9.99
              <span className="text-sm text-muted-foreground font-normal">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {[
                "All Free Plan features",
                "Personalized workout plans",
                "Full meditation library",
                "Premium yoga & exercise content",
                "Detailed nutrition tracking",
                "AI-powered recommendations",
                "Weekly progress reports",
                "Priority customer support",
                "Ad-free experience"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="h-5 w-5 text-holistifit-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
              {[
                "Offline content access",
                "One-on-one coaching sessions"
              ].map((feature, idx) => (
                <li key={idx+10} className="flex items-start text-muted-foreground">
                  <X className="h-5 w-5 text-muted-foreground/70 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-holistifit-primary hover:bg-holistifit-dark"
              onClick={() => handleSubscribe('Premium Monthly')}
            >
              Subscribe Now
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Annual */}
        <Card className="border-holistifit-accent/30 hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle>Premium Annual</CardTitle>
            <CardDescription>Our best value plan with 2 months free</CardDescription>
            <div className="mt-4 text-4xl font-bold">
              $7.99
              <span className="text-sm text-muted-foreground font-normal">/month</span>
            </div>
            <div className="text-sm text-holistifit-accent font-medium mt-1">
              Billed as $95.88/year (save $23.88)
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {[
                "All Premium Monthly features",
                "Offline content access",
                "Quarterly one-on-one coaching session",
                "Priority feature access",
                "Exclusive premium content",
                "Family sharing (up to 2 accounts)",
                "Advanced health analytics",
                "Custom workout program creation",
                "Lifetime access to seasonal content",
                "Early access to new features"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="h-5 w-5 text-holistifit-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-holistifit-accent text-white hover:bg-holistifit-accent/90"
              onClick={() => handleSubscribe('Premium Annual')}
            >
              Subscribe & Save
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-muted p-6 rounded-lg mt-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              question: "Can I cancel my subscription anytime?",
              answer: "Yes, you can cancel your subscription at any time. For monthly plans, you'll retain access until the end of your current billing cycle. For annual plans, you'll keep access until your year is complete."
            },
            {
              question: "How do I change my subscription plan?",
              answer: "You can upgrade or downgrade your subscription from your account settings. Upgrades take effect immediately, while downgrades apply at the end of your current billing period."
            },
            {
              question: "Is there a free trial for premium plans?",
              answer: "Yes, new users can enjoy a 7-day free trial of our Premium Monthly plan. You'll only be charged if you choose to continue after the trial period."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and Apple Pay for subscription payments. All transactions are secure and encrypted."
            }
          ].map((faq, index) => (
            <div key={index} className="space-y-1">
              <h3 className="font-medium">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
