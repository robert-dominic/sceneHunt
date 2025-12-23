import { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import { getPopularMovies } from "../utils/tmdb";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); 
      const data = await getPopularMovies();
      setMovies(data);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-black p-8">
      <h2 className="text-white text-3xl font-bold mb-6">
        Popular Movies
      </h2>

      {loading ? (
        <p className='text-white text-center py-20'>Loading movies...</p> 
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}