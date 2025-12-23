import { ArrowRight } from 'lucide-react';

function MovieBanner({ featuredMovie }) {

  if (!featuredMovie) return null;

  const {
    title,
    overview,
    poster_path,
  } = featuredMovie;

  return (
    <section className="relative h-[500px] sm:h-[400px] lg:h-[600px] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
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
            {title}
          </h1>

          {/* Overview */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 line-clamp-3">
            {overview}
          </p>

          {/* View Details Button */}
          <div className="flex flex-wrap gap-2">
            <button
              className="flex items-center gap-2 px-5 py-3 bg-green-800 hover:bg-green-900 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              View Details
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieBanner;