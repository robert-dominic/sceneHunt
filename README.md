# SceneHunt

A modern, responsive movie discovery app built with React that lets you browse popular movies, search for your favorites, and manage a personal watchlist.

## Features

- **Browse Popular Movies**: Discover trending movies with beautiful posters and ratings
- **Advanced Search**: Real-time search with debounced input for smooth experience
- **Movie Details**: Comprehensive movie information including cast, ratings, and backdrops
- **Favorites Management**: Add/remove movies to/from your personal favorites list
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Skeleton screens and spinners for better user experience
- **Local Storage**: Your favorites persist between sessions
- **Toast Notifications**: Color-coded feedback for user actions

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: TMDB (The Movie Database)
- **Routing**: React Router DOM
- **State Management**: React Hooks + Local Storage

## Installation

1. Clone the repository:
```bash
git clone https://github.com/robert-dominic/scenehunt.git
cd scenehunt
```

2. Install dependencies:
```bash
npm install
```

3. Get a TMDB API key:
   - Visit [TMDB](https://www.themoviedb.org/)
   - Create an account and get your API key

4. Create a `.env` file in the root directory:
```env
VITE_TMDB_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:5174](http://localhost:5174) in your browser

## Usage

- **Home Page**: Browse popular movies and featured banner
- **Search**: Use the search bar to find specific movies
- **Movie Details**: Click on any movie card to view detailed information
- **Favorites**: Click the star icon to add/remove movies from favorites
- **Favorites Page**: Access via the header button to view your saved movies

## API Reference

This app uses The Movie Database (TMDB) API:

- Popular Movies: `GET /3/movie/popular`
- Search Movies: `GET /3/search/movie`
- Movie Details: `GET /3/movie/{movie_id}`

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Featured movie banner
│   └── MovieCard.jsx     # Individual movie card
├── layout/
│   ├── Header.jsx        # Navigation header with search
│   └── skeleton.jsx      # Loading skeleton components
├── pages/
│   ├── Home.jsx          # Main browse page
│   ├── Details.jsx       # Movie details page
│   └── Favorites.jsx     # User favorites page
├── utils/
│   └── tmdb.js           # API utility functions
├── App.jsx               # Main app component with routing
└── main.jsx              # App entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons

---

Built with passion using React and Vite
