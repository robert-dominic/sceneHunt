import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (!query.trim()) return;
    onSubmit?.(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="relative min-w-0 sm:w-100 lg:w-150">
      <div className="flex items-center bg-gray-700/80 backdrop-blur-md rounded-lg px-4 py-2">
        
        {/* Search icon */}
        <Search className="text-gray-300 w-5 h-5 mr-3" />

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search movies..."
          className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none text-sm sm:text-base"
        />

        {/* Search button */}
        <button
          onClick={handleSubmit}
          className="ml-3 text-green-400 font-semibold hover:text-green-300 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
}
