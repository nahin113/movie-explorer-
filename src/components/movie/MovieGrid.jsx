import MovieCard from './MovieCard';

export default function MovieGrid({ movies, searchQuery, onSelectMovie }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="py-20 text-center flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-gray-700 mb-2">
          No movies found {searchQuery ? `for "${searchQuery}"` : ''}
        </h3>
        <p className="text-gray-500">Try adjusting your search criteria or check for typos.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </div>
  );
}
