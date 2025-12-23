import { useState } from 'react';
import { Search, Star } from 'lucide-react';

export default function MovieHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className="bg-black shadow-lg pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Scene<span className="text-green-800">Hunt</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search for movies..."
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-800 bg-white rounded-lg focus:outline-none focus:ring-2placeholder-gray-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Favorites Button */}
          <button
            className="flex-shrink-0 relative flex items-center gap-2 px-4 py-2 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
          >
            <Star className="w-4.5 h-4.5" />
            <span className="hidden sm:inline">Favorites</span>
          </button>
        </div>
      </div>
    </header>
  );
}