import { useState } from 'react';
import { Star } from 'lucide-react';

function MovieBanner() {

  const featuredMovie = {
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image: "https://imgs.search.brave.com/fyDkDi0icGE8daQehudPfftcHjzUjLs-zwC3obeBQcs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNC8w/Ni8yMi8xNi81NS9h/aS1nZW5lcmF0ZWQt/ODg0NjY3Ml82NDAu/anBn"
  };

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={featuredMovie.image}
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          {/* Movie Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            {featuredMovie.title}
          </h1>

          {/* Overview */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 line-clamp-3">
            {featuredMovie.overview}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 px-8 py-3 bg-green-800 hover:bg-green-900 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              View Details
            </button>

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/30 cursor-pointer"
            >
              <Star className={`w-5 h-5 transition-colors duration-200 ${
                isFavorite ? 'text-white fill-white' : 'text-white'
              }`} 
              fill={isFavorite ? 'currentColor' : 'none'}
              />
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieBanner;