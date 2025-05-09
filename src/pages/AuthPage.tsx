
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Apple, LogIn, Mail, User, UserPlus } from 'lucide-react';

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('signup-', '')]: value
    }));
  };

  // Demo login functionality - would connect to backend in production
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Get stored user data for demo purposes
    const userData = localStorage.getItem('holistifit-user');
    let userName = "User";
    
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        if (parsedUser.name) {
          userName = parsedUser.name;
        }
      } catch (e) {
        console.error("Error parsing user data", e);
      }
    }
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Store just the name for simplicity in this demo
      localStorage.setItem('holistifit-current-user', JSON.stringify({ name: userName }));
      toast({
        title: "Success!",
        description: "You've successfully logged in.",
      });
      navigate('/');
    }, 1500);
  };

  // Demo signup functionality - would connect to backend in production
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (formData.password !== formData.confirmPassword) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Passwords don't match. Please try again.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      // Store user data in localStorage (for demo purposes only)
      localStorage.setItem('holistifit-user', JSON.stringify({
        name: formData.name,
        email: formData.email
      }));
      
      // Also set as current user
      localStorage.setItem('holistifit-current-user', JSON.stringify({
        name: formData.name
      }));
      
      toast({
        title: "Account created!",
        description: "Your account has been created successfully.",
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-holistifit-light via-background to-background p-4">
      <div className="grid w-full gap-6 sm:w-[400px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="text-4xl font-bold text-holistifit-primary">HolistiFit</h1>
          <p className="text-muted-foreground">
            Sign in to continue your wellness journey
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin}>
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="hello@example.com" 
                      required 
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-xs text-holistifit-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      required 
                      onChange={handleInputChange}
                      value={formData.password}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-holistifit-primary hover:bg-holistifit-dark"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : (
                      <>
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                      </>
                    )}
                  </Button>
                  
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" type="button">
                      <Mail className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                    <Button variant="outline" type="button">
                      <Apple className="mr-2 h-4 w-4" />
                      Apple
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignup}>
              <Card>
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>
                    Enter your information to create an account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required 
                      onChange={handleInputChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input 
                      id="signup-email" 
                      type="email" 
                      placeholder="hello@example.com" 
                      required 
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input 
                      id="signup-password" 
                      type="password" 
                      required 
                      onChange={handleInputChange}
                      value={formData.password}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password" 
                      required 
                      onChange={handleInputChange}
                      value={formData.confirmPassword}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-holistifit-primary hover:bg-holistifit-dark"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating account...' : (
                      <>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Create Account
                      </>
                    )}
                  </Button>
                  
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" type="button">
                      <Mail className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                    <Button variant="outline" type="button">
                      <Apple className="mr-2 h-4 w-4" />
                      Apple
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
