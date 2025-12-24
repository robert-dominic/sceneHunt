import { useState, useEffect } from 'react';
import MovieHeader from '../layout/Header';
import MovieBanner from '../components/Hero';
import MovieCard from '../components/MovieCard';
import { getPopularMovies, searchMovies } from '../utils/tmdb';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Load popular movies on mount
  useEffect(() => {
    loadPopularMovies();
  }, []);

  // Search whenever searchQuery changes
  useEffect(() => {
    if (searchQuery.trim()) {
      // Perform search while typing with debounce
      const delaySearch = setTimeout(() => {
        performSearch(searchQuery);
      }, 500);

      return () => clearTimeout(delaySearch); // Cleanup
    } else {
      if (isSearching) {
        loadPopularMovies();
      }
    }
  }, [searchQuery]);

  const loadPopularMovies = async () => {
    setLoading(true);
    const data = await getPopularMovies();
    setFeaturedMovie(data[0]);
    setMovies(data);
    setIsSearching(false);
    setLoading(false);
  };

  const performSearch = async (query) => {
    setLoading(true);
    setIsSearching(true);
    const results = await searchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  // Run this function when search input changes
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Return to home and clear search
  const handleBackToHome = () => {
    setSearchQuery(''); // Clear search
    loadPopularMovies();
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Header with search functionality */}
      <MovieHeader 
        onSearchChange={handleSearchChange}
        onBackToHome={handleBackToHome}
        isSearching={isSearching}
        searchQuery={searchQuery}
      />

      {/* Show banner only when NOT searching */}
      {!isSearching && <MovieBanner featuredMovie={featuredMovie} />}

      {/* Movies section */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Title based on mode */}
          {isSearching ? (
            <h2 className="text-gray-200 text-xl mb-6 mt-15">
              Search results for {searchQuery}
            </h2>
          ) : (
            <h2 className="text-white text-3xl font-bold mb-6">Popular Movies</h2>
          )}

          {/* Loading state */}
          {loading && (
            <p className="text-white text-center py-20">Loading...</p>
          )}

          {/* Movies grid */}
          {!loading && movies.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}

          {/* No results message */}
          {!loading && movies.length === 0 && isSearching && (
            <div className="text-center py-20">
              <p className="text-gray-200 text-xl mb-4">
                No movies found for {searchQuery}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}