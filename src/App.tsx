
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import MealPlanner from "./pages/MealPlanner";
import FoodRecommendations from "./pages/FoodRecommendations";
import CalorieCalculatorPage from "./pages/CalorieCalculatorPage";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import YogaPage from "./pages/YogaPage";
import MeditationPage from "./pages/MeditationPage";
import ExercisePage from "./pages/ExercisePage";
import SubscriptionPage from "./pages/SubscriptionPage";
import FeedbackPage from "./pages/FeedbackPage";
import SettingsPage from "./pages/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
          <Route path="/meal-planner" element={<MainLayout><MealPlanner /></MainLayout>} />
          <Route path="/food-recommendations" element={<MainLayout><FoodRecommendations /></MainLayout>} />
          <Route path="/calorie-calculator" element={<MainLayout><CalorieCalculatorPage /></MainLayout>} />
          <Route path="/yoga" element={<MainLayout><YogaPage /></MainLayout>} />
          <Route path="/meditation" element={<MainLayout><MeditationPage /></MainLayout>} />
          <Route path="/exercises" element={<MainLayout><ExercisePage /></MainLayout>} />
          <Route path="/subscription" element={<MainLayout><SubscriptionPage /></MainLayout>} />
          <Route path="/feedback" element={<MainLayout><FeedbackPage /></MainLayout>} />
          <Route path="/settings" element={<MainLayout><SettingsPage /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
