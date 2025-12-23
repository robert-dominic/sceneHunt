import { useState } from 'react';
import { Star, Calendar, TrendingUp } from 'lucide-react';

export default function MovieCard() {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="bg-black min-h-screen p-8">
      <h2 className="text-white text-[1.5rem] sm:text-3xl font-bold mb-6">All Movies</h2>
      
      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        
        {/* Single Movie Card */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          
          {/* Poster Image, clickable for navigation */}
          <div className="relative aspect-[8/6] overflow-hidden bg-gray-800 cursor-pointer">
            <img
              src="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
              alt="Movie Poster"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Movie Info Section */}
          <div className="p-4">
            {/* Title and Favorite Icon */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-white font-bold text-lg flex-1 line-clamp-2">
                Fight Club
              </h3>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="flex-shrink-0 mt-1"
              >
                <Star 
                  className={`w-5 h-5 transition-colors duration-200 cursor-pointer ${
                    isFavorite ? 'text-green-700 fill-green-700' : 'text-gray-400 hover:text-green-700'
                  }`}
                  fill={isFavorite ? 'currentColor' : 'none'}
                />
              </button>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              <TrendingUp className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">8.4</span>
              <span className="text-gray-500 text-sm">/10</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm line-clamp-3">
              A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}