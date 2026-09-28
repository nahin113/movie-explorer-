import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="bg-[#101727] py-[100px] lg:py-[140px] flex items-center justify-center relative overflow-hidden">
      {/* Optional subtle gradient overlay for cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#101727]/90 z-0"></div>
      
      <div className="w-11/12 lg:w-8/12 mx-auto relative z-10 text-center flex flex-col items-center">
        <div className="bg-[#E1E7FF] text-[#4F39F6] rounded-full px-4 py-2 font-semibold text-sm mb-6 inline-block">
          🎬 Unlimited Entertainment
        </div>
        
        <h1 className="text-5xl lg:text-[72px] font-extrabold text-white leading-tight mb-6">
          Discover & Explore Your <br className="hidden lg:block" /> Favorite Movies
        </h1>
        
        <p className="text-[#94A3B8] text-lg lg:text-xl max-w-2xl mx-auto mb-10">
          Immerse yourself in a world of endless stories. Browse thousands of movies, discover hidden gems, and curate your ultimate watchlist.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link 
            to="/movies" 
            className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-8 py-3 h-auto min-h-0 text-lg border-none hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Now
          </Link>
          
          <button className="btn btn-outline border-white text-white rounded-full px-8 py-3 h-auto min-h-0 text-lg hover:bg-white hover:text-[#101727] transition-all duration-300">
            <Play className="w-5 h-5 mr-2" />
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  );
}
