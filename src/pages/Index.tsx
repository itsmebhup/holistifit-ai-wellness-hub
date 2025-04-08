
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('holistifit-theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    
    // Redirect to the auth page for login/signup
    navigate('/auth');
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-holistifit-light via-olive-100 to-white dark:from-gray-900 dark:via-olive-900/30 dark:to-gray-800">
      <div className="text-center animate-fade-in p-8">
        <div className="w-24 h-24 bg-holistifit-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
          <h1 className="text-5xl font-bold text-holistifit-primary">HF</h1>
        </div>
        <h1 className="text-4xl font-bold text-holistifit-primary mb-2">HolistiFit</h1>
        <p className="text-xl mt-2">Loading your wellness journey...</p>
        <div className="mt-4">
          <div className="w-12 h-1 bg-holistifit-primary/30 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
