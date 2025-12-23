import { useState, useEffect } from 'react';
import { Film, Star } from 'lucide-react';
import SearchBar from './SearchBar.jsx';

export default function MovieHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = scrollY > 80 ? 'bg-black/80' : 'bg-transparent';
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${headerBg}`}>
      <div className="max-w-7xl mx-auto py-4 px-1 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex gap-2 items-center"> 
            <Film className="w-8 h-8 text-green-800" />
            <h1 className="hidden sm:inline text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Scene<span className="text-green-800">Hunt</span>
            </h1>
          </div>

          {/* Search Bar */}
          <SearchBar onSubmit={(query) => console.log('Search for:', query)} />

          {/* Favorites Button */}
          <button className="flex-shrink-0 relative flex items-center gap-2 px-4 py-2 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <Star className="w-4.5 h-4.5" />
            <span className="hidden sm:inline">Favorites</span>
          </button>
        </div>
      </div>
    </header>
  );
}
