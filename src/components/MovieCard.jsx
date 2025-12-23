import { useState } from "react";
import { Star, TrendingUp } from "lucide-react";

export default function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!movie) return null;

  const {
    title,
    overview,
    poster_path,
    vote_average,
    release_date,
  } = movie;

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative aspect-[8/6] overflow-hidden bg-gray-800 cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-bold text-lg flex-1 line-clamp-2">
            {title}
          </h3>

          <button onClick={() => setIsFavorite(!isFavorite)}>
            <Star
              className={`w-5 h-5 cursor-pointer ${
                isFavorite
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
              fill={isFavorite ? "currentColor" : "none"}
            />
          </button>
        </div>
        <section className="flex justify-between mb-4">
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">
              {vote_average}
            </span>
            <span className="text-gray-500 text-sm">/10</span>
          </div>
          <div className="text-gray-400 text-sm line-clamp-3">{release_date}</div>
        </section>

        <p className="text-gray-400 text-sm line-clamp-3">
          {overview}
        </p>
      </div>
    </div>
  );
}
