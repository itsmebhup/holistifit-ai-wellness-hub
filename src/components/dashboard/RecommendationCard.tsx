
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RecommendationCardProps {
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
  imageSrc: string;
}

const RecommendationCard = ({ title, description, linkText, linkTo, imageSrc }: RecommendationCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <div className="aspect-video w-full bg-muted overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="mt-2">
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
        <Button asChild variant="ghost" className="mt-4 w-full justify-between">
          <Link to={linkTo}>
            {linkText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
