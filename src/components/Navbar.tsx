import { useState } from 'react';
import { imgLogoWide, imgChevronDown } from '../assets/images';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-if-bg w-full z-50 sticky top-0">
      <div className="flex items-center justify-between h-[72px] px-8 md:px-16 max-w-[1440px] mx-auto">
        {/* Logo + Nav links */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center shrink-0 w-[84px] h-9">
            <img src={imgLogoWide} alt="IRONFORM" className="h-9 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-roboto text-white text-base hover:text-if-muted transition-colors">Training</a>
            <a href="#" className="font-roboto text-white text-base hover:text-if-muted transition-colors">Membership</a>
            <a href="#" className="font-roboto text-white text-base hover:text-if-muted transition-colors">Community</a>
            <div className="flex items-center gap-1">
              <a href="#" className="font-roboto text-white text-base hover:text-if-muted transition-colors">More</a>
              <img src={imgChevronDown} alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-white text-white font-bebas text-base px-5 py-2 rounded-[5px] hover:bg-white hover:text-if-bg transition-colors">
            Login
          </button>
          <button className="bg-if-accent border border-black text-white font-bebas text-base px-5 py-2 rounded-[5px] hover:opacity-90 transition-opacity">
            Join
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-if-card border-t border-white/10 px-8 py-6 flex flex-col gap-4">
          <a href="#" className="font-roboto text-white text-base">Training</a>
          <a href="#" className="font-roboto text-white text-base">Membership</a>
          <a href="#" className="font-roboto text-white text-base">Community</a>
          <a href="#" className="font-roboto text-white text-base">More</a>
          <div className="flex gap-4 pt-2">
            <button className="border border-white text-white font-bebas text-base px-5 py-2 rounded-[5px]">Login</button>
            <button className="bg-if-accent text-white font-bebas text-base px-5 py-2 rounded-[5px]">Join</button>
          </div>
        </div>
      )}
    </nav>
  );
}
