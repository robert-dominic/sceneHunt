import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from './pages/Home.jsx';
import DetailsPage from './pages/Details.jsx';
import FavoritesPage from './pages/Favorites.jsx';

function App() {
  const [favorites, setFavorites] = useState([]);

  //Load favorites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
        setFavorites(JSON.parse(saved));
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    if(!favorites.find(fav => fav.id === movie.id)) {
        setFavorites([movie, ...favorites]);
        return true;
    }
    return false;
  };

  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter(fav => fav.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId);
  };

  return (
    <Router>
        <Routes>
            <Route path="/" element={
                <HomePage
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                  isFavorite={isFavorite}
                />
              }
            />
            <Route path="/movie/:id" element={
                <DetailsPage
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                  isFavorite={isFavorite}
                />
              }
            />
            <Route path="/favorites" element={
                <FavoritesPage
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />  
        </Routes>
    </Router>
  );
}

export default App;