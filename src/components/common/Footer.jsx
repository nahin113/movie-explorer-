import { Link } from 'react-router-dom';
import { Clapperboard } from 'lucide-react';

const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Facebook = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Twitter = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#101727] text-[#FAFAFA] pt-[60px] pb-[30px]">
      <div className="w-11/12 lg:w-8/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 text-xl">
              <Clapperboard className="text-[#4F39F6] h-8 w-8" />
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-extrabold text-2xl">
                Movie Explorer
              </span>
            </Link>
            <p className="text-[#94A3B8] text-sm mt-2">
              Your ultimate destination for discovering, exploring, and tracking your favorite movies and TV shows from around the world.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-[#94A3B8] hover:text-[#4F39F6] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-[#94A3B8] hover:text-[#4F39F6] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-[#94A3B8] hover:text-[#4F39F6] transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-[#94A3B8]">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/movies" className="hover:text-white transition-colors">Movies</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="flex flex-col gap-3 text-[#94A3B8]">
              <li><Link to="/movies?genre=action" className="hover:text-white transition-colors">Action</Link></li>
              <li><Link to="/movies?genre=comedy" className="hover:text-white transition-colors">Comedy</Link></li>
              <li><Link to="/movies?genre=drama" className="hover:text-white transition-colors">Drama</Link></li>
              <li><Link to="/movies?genre=scifi" className="hover:text-white transition-colors">Sci-Fi</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-[#94A3B8] text-sm mb-4">Subscribe to our newsletter for the latest movie updates.</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="input input-bordered w-full rounded-l-md rounded-r-none bg-base-100/10 border-gray-700 focus:outline-none" />
              <button className="btn bg-[#4F39F6] hover:bg-[#9514FA] border-none text-white rounded-l-none rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-[#94A3B8] text-sm">
          © 2026 Movie Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
