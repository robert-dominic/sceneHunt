import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-pulse">
      {/* Placeholder for movie poster */}
      <div className="w-full h-64 bg-gray-700"></div>
      
      {/* Placeholder for movie details */}
      <div className="p-4">
        {/* Title placeholder */}
        <div className="h-4 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        
        {/* Rating placeholder */}
        <div className="h-3 bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
