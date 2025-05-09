
import React from 'react';
import CategoryCard from './CategoryCard';

const yogaImage = "/placeholder.svg";
const meditationImage = "/placeholder.svg";
const fitnessImage = "/placeholder.svg";

const CategoryGrid = () => {
  const categories = [
    {
      title: "Yoga Practice",
      description: "Find balance and flexibility with our guided yoga poses.",
      linkTo: "/yoga",
      imageSrc: yogaImage
    },
    {
      title: "Meditation",
      description: "Calm your mind and reduce stress with guided meditation sessions.",
      linkTo: "/meditation",
      imageSrc: meditationImage
    },
    {
      title: "Exercise Library",
      description: "Discover effective workouts tailored to your fitness goals.",
      linkTo: "/exercises",
      imageSrc: fitnessImage
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {categories.map((category, index) => (
        <CategoryCard 
          key={index}
          title={category.title} 
          description={category.description} 
          linkTo={category.linkTo} 
          imageSrc={category.imageSrc} 
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
