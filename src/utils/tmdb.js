const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  try {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error('Error fetching popular movies:', err);
    return [];
  }
};

// Search moviesby query
export const searchMovies = async (query) => {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.error('Error searching movies:', err);
        return [];
    }
}