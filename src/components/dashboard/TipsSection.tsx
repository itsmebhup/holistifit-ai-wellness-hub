
import React from 'react';
import TipCard from './TipCard';

const TipsSection = () => {
  const tips = [
    {
      type: "Nutrition",
      content: "Try to include protein in every meal. It helps with muscle recovery and keeps you feeling full longer."
    },
    {
      type: "Fitness",
      content: "Even a short 10-minute workout is beneficial. Don't skip exercise just because you don't have a full hour."
    }
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mt-8 mb-4">Today's Tips</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {tips.map((tip, index) => (
          <TipCard key={index} type={tip.type} content={tip.content} />
        ))}
      </div>
    </>
  );
};

export default TipsSection;
