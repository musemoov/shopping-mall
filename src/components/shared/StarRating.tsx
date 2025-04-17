'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md';
}

export default function StarRating({ rating, size = 'md' }: StarRatingProps) {
  const starSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${
            i < Math.floor(rating) 
              ? 'text-[#FFC107] fill-current' 
              : i < rating 
                ? 'text-[#FFC107] fill-[#FFC107]/50' 
                : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
} 