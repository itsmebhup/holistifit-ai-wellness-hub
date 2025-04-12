
import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  BellOff, 
  UserCog, 
  Palette, 
  Globe, 
  Lock, 
  EyeOff, 
  Trash2, 
  Clock, 
  ArrowRightLeft, 
  Fingerprint,
  Mail,
  Save
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SettingsPage = () => {
  const { toast } = useToast();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeOnStartup, setDarkModeOnStartup] = useState(false);
  const [fontScale, setFontScale] = useState([1.0]);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [languagePreference, setLanguagePreference] = useState("english");
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [activityTracking, setActivityTracking] = useState(true);
  const [compactView, setCompactView] = useState(false);
  const [highContrastMode, setHighContrastMode] = useState(false);
  const [emailFrequency, setEmailFrequency] = useState("weekly");
  
  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('holistifit-settings');
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        setNotificationsEnabled(settings.notificationsEnabled ?? true);
        setDarkModeOnStartup(settings.darkModeOnStartup ?? false);
        setFontScale(settings.fontScale ? [settings.fontScale] : [1.0]);
        setAnimationsEnabled(settings.animationsEnabled ?? true);
        setPrivacyMode(settings.privacyMode ?? false);
        setLanguagePreference(settings.languagePreference ?? "english");
        setMfaEnabled(settings.mfaEnabled ?? false);
        setAutoSave(settings.autoSave ?? true);
        setActivityTracking(settings.activityTracking ?? true);
        setCompactView(settings.compactView ?? false);
        setHighContrastMode(settings.highContrastMode ?? false);
        setEmailFrequency(settings.emailFrequency ?? "weekly");
        
        // Apply settings to UI
        applySettings(settings);
      } catch (error) {
        console.error("Error loading settings:", error);
      }
    }
  }, []);
  
  // Save settings to localStorage and apply them
  const saveSettings = () => {
    const settings = {
      notificationsEnabled,
      darkModeOnStartup,
      fontScale: fontScale[0],
      animationsEnabled,
      privacyMode,
      languagePreference,
      mfaEnabled,
      autoSave,
      activityTracking,
      compactView,
      highContrastMode,
      emailFrequency
    };
    
    localStorage.setItem('holistifit-settings', JSON.stringify(settings));
    applySettings(settings);
    
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated.",
    });
  };
  
  // Apply settings to the UI
  const applySettings = (settings: any) => {
    // Apply font scaling
    document.documentElement.style.fontSize = `${settings.fontScale * 100}%`;
    
    // Apply animations toggle
    if (!settings.animationsEnabled) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
    
    // Apply compact view
    if (settings.compactView) {
      document.documentElement.classList.add('compact-view');
    } else {
      document.documentElement.classList.remove('compact-view');
    }
    
    // Apply high contrast mode
    if (settings.highContrastMode) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };
  
  const deleteAccount = () => {
    toast({
      title: "Account deletion initiated",
      description: "We've sent a confirmation email to delete your account.",
    });
  };
  
  const clearHistory = () => {
    toast({
      title: "History cleared",
      description: "Your activity history has been deleted.",
    });
  };
  
  const setupMFA = () => {
    setMfaEnabled(true);
    toast({
      title: "Two-factor authentication enabled",
      description: "Your account is now more secure.",
    });
  };
  
  const exportData = () => {
    const dummyData = {
      user: { name: "Alex", email: "alex@example.com" },
      activities: [
        { date: "2025-04-10", type: "Yoga", duration: 30 },
        { date: "2025-04-11", type: "Meditation", duration: 15 },
      ]
    };
    
    const blob = new Blob([JSON.stringify(dummyData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "holistifit-data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Data exported",
      description: "Your data has been downloaded as a JSON file.",
    });
  };
  
  return (
    <div className="container max-w-4xl py-6 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Customize your HolistiFit experience</p>
      </div>
      
      <Tabs defaultValue="appearance">
        <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-2 md:grid-cols-none gap-1 md:gap-0">
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <div className="mt-6">
          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  <span>Interface Preferences</span>
                </CardTitle>
                <CardDescription>
                  Customize how HolistiFit looks and feels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Dark mode on startup</Label>
                      <p className="text-sm text-muted-foreground">
                        Start the application in dark mode
                      </p>
                    </div>
                    <Switch 
                      checked={darkModeOnStartup} 
                      onCheckedChange={setDarkModeOnStartup}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div>
                      <Label>Font size</Label>
                      <p className="text-sm text-muted-foreground">
                        Adjust the application font size (currently {(fontScale[0] * 100).toFixed(0)}%)
                      </p>
                    </div>
                    <Slider 
                      value={fontScale} 
                      min={0.8} 
                      max={1.4} 
                      step={0.05} 
                      onValueChange={setFontScale} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable animations</Label>
                      <p className="text-sm text-muted-foreground">
                        Display interface animations and transitions
                      </p>
                    </div>
                    <Switch 
                      checked={animationsEnabled} 
                      onCheckedChange={setAnimationsEnabled}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Compact view</Label>
                      <p className="text-sm text-muted-foreground">
                        Display more content with less spacing
                      </p>
                    </div>
                    <Switch 
                      checked={compactView} 
                      onCheckedChange={setCompactView}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>High contrast mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Increase contrast for better visibility
                      </p>
                    </div>
                    <Switch 
                      checked={highContrastMode} 
                      onCheckedChange={setHighContrastMode}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCog className="h-5 w-5" />
                  <span>Account Management</span>
                </CardTitle>
                <CardDescription>
                  Manage your account settings and security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-factor authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  {mfaEnabled ? (
                    <Badge className="bg-green-500">Enabled</Badge>
                  ) : (
                    <Button variant="outline" size="sm" onClick={setupMFA}>
                      <Fingerprint className="mr-2 h-4 w-4" />
                      Setup
                    </Button>
                  )}
                </div>
                
                <Separator />
                
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center justify-between cursor-pointer">
                      <div className="space-y-0.5">
                        <Label className="text-destructive">Danger zone</Label>
                        <p className="text-sm text-muted-foreground">
                          Actions that can't be undone
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Show options
                      </Button>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive" className="w-full">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete account
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Delete account</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button variant="destructive" onClick={deleteAccount}>Confirm</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive" className="w-full">
                          <Clock className="mr-2 h-4 w-4" />
                          Clear history
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Clear activity history</DialogTitle>
                          <DialogDescription>
                            This will remove all your activity data, including workout history, progress, and achievements.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button variant="destructive" onClick={clearHistory}>Confirm</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <Button variant="outline" className="w-full" onClick={exportData}>
                      <ArrowRightLeft className="mr-2 h-4 w-4" />
                      Export all data
                    </Button>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  <span>Privacy Settings</span>
                </CardTitle>
                <CardDescription>
                  Control how your data is used and displayed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Privacy mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Hide sensitive information on shared screens
                    </p>
                  </div>
                  <Switch 
                    checked={privacyMode} 
                    onCheckedChange={setPrivacyMode}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Activity tracking</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow the app to record your usage patterns
                    </p>
                  </div>
                  <Switch 
                    checked={activityTracking} 
                    onCheckedChange={setActivityTracking}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  <span>Notification Preferences</span>
                </CardTitle>
                <CardDescription>
                  Control what alerts and messages you receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive alerts and reminders
                    </p>
                  </div>
                  <Switch 
                    checked={notificationsEnabled} 
                    onCheckedChange={setNotificationsEnabled}
                  />
                </div>
                
                <div className="space-y-3">
                  <Label>Email notification frequency</Label>
                  <RadioGroup value={emailFrequency} onValueChange={setEmailFrequency}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label htmlFor="daily">Daily digest</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly">Weekly summary</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never" id="never" />
                      <Label htmlFor="never">Never</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
      
      <div className="flex justify-end pt-4">
        <Button onClick={saveSettings}>
          <Save className="mr-2 h-4 w-4" />
          Save changes
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
