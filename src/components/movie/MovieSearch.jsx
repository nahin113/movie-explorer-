import { Search } from 'lucide-react';

export default function MovieSearch({ searchQuery, setSearchQuery, onSearchSubmit }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearchSubmit(searchQuery);
    }
  };

  return (
    <div className="relative max-w-xl mx-auto w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search for movies, TV shows..."
        className="input input-bordered w-full rounded-full pl-12 pr-4 focus:outline-none focus:border-[#4F39F6] shadow-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
