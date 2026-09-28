import { useEffect } from 'react';
import { X, Star, Calendar, Tv, Globe } from 'lucide-react';

export default function MovieModal({ movie, onClose }) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (movie) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const posterUrl = movie.image?.original || movie.image?.medium || 'https://placehold.co/800x450/101727/FFFFFF?text=No+Poster';
  const rating = movie.rating?.average || 'N/A';
  const premiered = movie.premiered || 'N/A';
  const network = movie.network?.name || movie.webChannel?.name || 'N/A';
  const language = movie.language || 'N/A';
  
  // Clean summary by stripping HTML tags
  const cleanSummary = movie.summary 
    ? movie.summary.replace(/<\/?[^>]+(>|$)/g, "")
    : "No summary available.";

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[24px] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-t-[24px] bg-gray-900">
          <img 
            src={posterUrl} 
            alt={movie.name} 
            className="w-full h-full object-cover opacity-90"
          />
          <button 
            onClick={onClose}
            className="btn btn-circle btn-sm bg-black/60 text-white hover:bg-black border-none absolute top-4 right-4 z-10"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 shadow-sm">
              {movie.name}
            </h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {movie.genres?.map(genre => (
                <span key={genre} className="badge bg-[#E1E7FF] text-[#4F39F6] border-none font-medium">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-4 mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="font-bold text-gray-800">{rating}</span>
            </div>
            <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{premiered}</span>
            </div>
            <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <Tv className="w-5 h-5" />
              <span className="font-medium">{network}</span>
            </div>
            <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="w-5 h-5" />
              <span className="font-medium">{language}</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#101727] mb-3">Overview</h3>
            <p className="text-[#627382] leading-relaxed">
              {cleanSummary}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-end border-t border-gray-100 pt-6">
            {movie.officialSite && (
              <a 
                href={movie.officialSite} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline border-gray-300 text-gray-700 rounded-full px-8 py-2 hover:bg-gray-50 hover:border-gray-400 w-full sm:w-auto"
              >
                Official Site
              </a>
            )}
            <button 
              onClick={onClose}
              className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-8 py-2 hover:opacity-90 active:scale-95 border-none w-full sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
