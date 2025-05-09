
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TipCardProps {
  type: string;
  content: string;
}

const TipCard = ({ type, content }: TipCardProps) => {
  return (
    <Card className="bg-holistifit-light border-holistifit-primary/20 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h3 className="font-semibold text-holistifit-primary">{type} Tip</h3>
        <p className="mt-2 text-sm">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};

export default TipCard;
