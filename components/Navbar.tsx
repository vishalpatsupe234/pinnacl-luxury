"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      // scroll down + thoda niche ja chuka hai ⇒ hide
      if (current > lastScroll && current > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-500
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        bg-black/60 backdrop-blur-xl border-b border-white/10
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-4 text-white">
        <ul className="flex gap-10 text-sm tracking-wide uppercase">
          <li>
            <a
              href="#home"
              className="hover:text-[var(--color-brand-gold)] transition cursor-pointer"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-[var(--color-brand-gold)] transition cursor-pointer"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-[var(--color-brand-gold)] transition cursor-pointer"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#testimonials"
              className="hover:text-[var(--color-brand-gold)] transition cursor-pointer"
            >
              Blog
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-[var(--color-brand-gold)] transition cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
