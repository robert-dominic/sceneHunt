import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MovieCard from '../components/MovieCard';

export default function FavoritesPage({ favorites = [], removeFromFavorites }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-white hover:text-green-500 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-3xl font-bold mb-2">My Favorites</h1>
          <p className="text-gray-400 text-lg mb-8">{favorites.length} movies</p>

          {favorites.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl mb-4">No favorite movies yet</p>
              <button 
                onClick={() => navigate('/')}
                className="text-green-500 hover:text-green-400 font-semibold"
              >
                Browse movies
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {favorites.map((movie) => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie}
                  isFavorite={true}
                  onToggleFavorite={() => removeFromFavorites(movie.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}