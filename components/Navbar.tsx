import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-brand-gold" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-grey">
              Pinnacl
            </span>
            <span className="text-xs text-neutral-300">
              Luxury Properties
            </span>
          </div>
        </div>

        {/* Menu (desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-200">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#blog" className="hover:text-white transition">
            Blog
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        {/* CTA button */}
        <button className="hidden md:inline-flex px-4 py-2 rounded-full border border-brand-gold text-xs font-semibold tracking-wide text-brand-gold hover:bg-brand-gold hover:text-brand-black transition">
          Schedule Visit
        </button>
      </div>
    </header>
  );
};

export default Navbar;