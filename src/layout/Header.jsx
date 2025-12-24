import { useState, useEffect } from 'react';
import { Film, Star, Search, ArrowLeft } from 'lucide-react';


export default function MovieHeader(
    { 
        onSearch, 
        onBackToHome, 
        isSearching,
        onSearchChange, 
        searchQuery: query
    }
) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = () => {
    if (!query.trim()) return;
    onSearch?.(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const headerBg = scrollY > 80 ? 'bg-black/70' : 'bg-transparent';
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${headerBg} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex gap-1 sm:gap-3 items-center"> 
            {isSearching ? (
                <button
                  onClick={onBackToHome}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 text-green-800" />
                  <h1 className="hidden sm:block text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    Scene<span className="text-green-800">Hunt</span>
                  </h1>
                </button>
            ) : (
            <>
              <Film className="w-6 h-6 sm:w-8 sm:h-8 text-green-800" />
              <h1 className="hidden sm:block text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Scene<span className="text-green-800">Hunt</span>
              </h1>
            </>
            )}              
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl min-w-0 mx-2 sm:mx-4">
            <div className="relative flex items-center bg-gray-700/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
              
              {/* Search icon */}
              <div className="pl-3 sm:pl-4 pr-2 flex items-center flex-shrink-0">
                <Search className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Input */}
              <input
                type="text"
                value={query}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search movies..."
                className="flex-1 min-w-0 bg-transparent text-white placeholder-gray-300 outline-none py-2 sm:py-2.5 text-sm sm:text-base pr-1"
              />
            </div>
          </div>

          {/* Favorites Button */}
          <button className="flex-shrink-0 flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-green-800 hover:bg-green-900 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
            <span className="hidden md:inline text-sm sm:text-base">Favorites</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
          </button>
        </div>
      </div>
    </header>
  );
}