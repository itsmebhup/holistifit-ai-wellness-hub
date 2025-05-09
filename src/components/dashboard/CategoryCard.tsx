
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  title: string;
  description: string;
  linkTo: string;
  imageSrc: string;
}

const CategoryCard = ({ title, description, linkTo, imageSrc }: CategoryCardProps) => {
  return (
    <Link to={linkTo} className="group">
      <Card className="hover:shadow-md transition-all duration-300 h-full border-holistifit-primary/20 group-hover:border-holistifit-primary/60">
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <CardContent className="p-6 flex flex-col items-center text-center">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
