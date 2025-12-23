// HomePage.jsx
import { useState, useEffect } from 'react';
import MovieBanner from '../components/Hero';
import Movies from '../components/Movies';
import { getPopularMovies } from '../utils/tmdb';

export default function HomePage() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      setLoading(true);
      const data = await getPopularMovies();
      setFeaturedMovie(data[0]); // Target the first movie as featured
      setLoading(false);
    };

    fetchFeaturedMovie();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Banner */}
      <MovieBanner featuredMovie={featuredMovie} />
      
      {/* Movies Grid */}
      <Movies />
    </div>
  );
}