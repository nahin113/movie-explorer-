import { Star, Calendar } from 'lucide-react';

export default function MovieCard({ movie, onSelectMovie }) {
  if (!movie) return null;
  
  const posterUrl = movie.image?.medium || 'https://placehold.co/300x420/101727/FFFFFF?text=No+Poster';
  const rating = movie.rating?.average || 'N/A';
  const year = movie.premiered?.split('-')[0] || 'N/A';

  return (
    <div className="rounded-[16px] border border-gray-100 bg-white p-4 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col justify-between h-full">
      <div className="flex-grow flex flex-col">
        <div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-4 relative bg-gray-100">
          <img 
            src={posterUrl} 
            alt={movie.name} 
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        
        <h3 className="font-bold text-[#101727] text-lg line-clamp-1 mb-2" title={movie.name}>
          {movie.name}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-medium text-gray-700">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => onSelectMovie(movie)}
        className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full border-none hover:opacity-90 active:scale-95 mt-auto"
      >
        See Details
      </button>
    </div>
  );
}
