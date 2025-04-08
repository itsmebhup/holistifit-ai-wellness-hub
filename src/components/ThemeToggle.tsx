
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { toast } = useToast();
  
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    // Toggle class on document element
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    toast({
      title: `${newMode ? 'Dark' : 'Light'} mode enabled`,
      description: `You've switched to ${newMode ? 'dark' : 'light'} mode.`,
    });
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={className}
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
    </Button>
  );
};

export default ThemeToggle;
