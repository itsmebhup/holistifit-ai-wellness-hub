
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the auth page for login/signup
    navigate('/auth');
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-holistifit-primary">HolistiFit</h1>
        <p className="text-xl mt-2">Loading your wellness journey...</p>
      </div>
    </div>
  );
};

export default Index;

