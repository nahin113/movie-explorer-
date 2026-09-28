import { useState, useEffect } from 'react';
import { RefreshCw, AlertCircle } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MovieSearch from '../components/movie/MovieSearch';
import MovieGrid from '../components/movie/MovieGrid';
import MovieModal from '../components/movie/MovieModal';

export default function MovieListing() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setError(null);
    try {
      const url = query.trim() 
        ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}` 
        : 'https://api.tvmaze.com/shows';
        
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      let formattedMovies = [];
      if (query.trim()) {
        formattedMovies = data.map(item => item.show).filter(Boolean);
      } else {
        formattedMovies = data.slice(0, 50);
      }
      
      setMovies(formattedMovies);
    } catch (err) {
      console.error("Error fetching TVMaze API:", err);
      setError(err.message || 'An unexpected error occurred while fetching movies.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearchSubmit = (query) => {
    setSubmittedQuery(query);
    fetchMovies(query);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== submittedQuery) {
        handleSearchSubmit(searchQuery);
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, [searchQuery, submittedQuery]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50/50">
      <Navbar />
      <main className="flex-grow pb-20">
        <div className="bg-white border-b border-gray-100 py-10 shadow-sm">
          <div className="w-11/12 lg:w-8/12 mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#101727] mb-6">
              Browse & Search Movies
            </h1>
            <MovieSearch 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
              onSearchSubmit={handleSearchSubmit} 
            />
          </div>
        </div>

        <div className="w-11/12 lg:w-8/12 mx-auto mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20 min-h-[400px]">
              <span className="loading loading-spinner loading-lg text-[#9514FA]"></span>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-6 flex flex-col items-center justify-center py-12 my-8 text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Oops! Something went wrong</h3>
              <p className="mb-6 max-w-md">{error}</p>
              <button 
                onClick={() => fetchMovies(submittedQuery)} 
                className="btn bg-red-600 hover:bg-red-700 text-white border-none rounded-full"
              >
                <RefreshCw className="w-4 h-4 mr-2" /> Try Again
              </button>
            </div>
          ) : (
            <MovieGrid movies={movies} searchQuery={submittedQuery} onSelectMovie={setSelectedMovie} />
          )}
        </div>
        
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      </main>
      <Footer />
    </div>
  );
}
