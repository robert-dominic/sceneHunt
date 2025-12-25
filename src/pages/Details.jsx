import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Clock, Loader } from 'lucide-react';

export default function DetailsPage({ addToFavorites, removeFromFavorites, isFavorite }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('add');

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      setLoading(false);
    }
  };

  const handleFavoriteClick = () => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
      setToastMessage('Removed from favorites!');
      setToastType('remove');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      addToFavorites(movie);
      setToastMessage('Added to favorites!');
      setToastType('add');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center gap-2 text-white hover:text-green-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
          </div>
        </nav>
        <div className="flex items-center justify-center min-h-screen pt-20">
          <Loader className="w-8 h-8 text-white animate-spin" />
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-black">
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center gap-2 text-white hover:text-green-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
          </div>
        </nav>
        <div className="flex items-center justify-center min-h-screen pt-20">
          <p className="text-white text-xl">Movie not found</p>
        </div>
      </div>
    );
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750/1f2937/9ca3af?text=No+Image';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <div className="min-h-screen bg-black">
      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-20 right-4 z-50 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in ${
          toastType === 'add' ? 'bg-green-800' : 'bg-red-800'
        }`}>
          {toastMessage}
        </div>
      )}

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-white hover:text-green-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      {backdropUrl && (
        <div className="absolute top-0 left-0 w-full h-96 overflow-hidden">
          <img src={backdropUrl} alt={movie.title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <img src={posterUrl} alt={movie.title} className="w-full md:w-80 rounded-lg shadow-2xl" />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{movie.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                <span className="text-white font-semibold">{movie.vote_average?.toFixed(1)}/10</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">
                  {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                </span>
              </div>
              {movie.runtime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{movie.runtime} min</span>
                </div>
              )}
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre) => (
                  <span key={genre.id} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{movie.overview || 'No overview available'}</p>
            </div>

            {movie.tagline && (
              <div className="mb-6">
                <p className="text-gray-400 italic">"{movie.tagline}"</p>
              </div>
            )}

            <button 
              onClick={handleFavoriteClick}
              className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors ${
                isFavorite(movie.id) 
                  ? 'bg-green-800 hover:bg-green-700 text-white' 
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}
            >
              <Star className="w-5 h-5" fill={isFavorite(movie.id) ? 'currentColor' : 'none'} />
              {isFavorite(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}