import { Link, NavLink } from 'react-router-dom';
import { Clapperboard, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-gray-100">
      <div className="navbar w-11/12 lg:w-8/12 mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
              <Menu className="h-6 w-6" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to="/" end className={({isActive}) => isActive ? "text-[#4F39F6] font-bold" : ""}>Home</NavLink></li>
              <li><NavLink to="/movies" className={({isActive}) => isActive ? "text-[#4F39F6] font-bold" : ""}>Movies</NavLink></li>
              <li><NavLink to="/about" className={({isActive}) => isActive ? "text-[#4F39F6] font-bold" : ""}>About</NavLink></li>
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2 text-xl">
            <Clapperboard className="text-[#4F39F6] h-8 w-8" />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-extrabold text-xl md:text-3xl">
              Movie Explorer
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li><NavLink to="/" end className={({isActive}) => isActive ? "text-[#4F39F6] font-bold bg-transparent" : ""}>Home</NavLink></li>
            <li><NavLink to="/movies" className={({isActive}) => isActive ? "text-[#4F39F6] font-bold bg-transparent" : ""}>Movies</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? "text-[#4F39F6] font-bold bg-transparent" : ""}>About</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link 
            to="/movies" 
            className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95 border-none px-6"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    </nav>
  );
}
