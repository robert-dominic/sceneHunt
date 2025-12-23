import MovieCard from "./MovieCard";
import { moviesData } from "../data/moviesData";

export default function Movies() {
    return (
        <div className="bg-black min-h-screen p-8">
          <h2 className="text-white text-3xl font-bold mb-6">
            All Movies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {moviesData.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
    );
}