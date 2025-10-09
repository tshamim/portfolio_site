"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/35">
      <div className="container py-3 md:py-5">
        <div className="mx-auto max-w-5xl">
          <div className="nav-shell md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6">
            {/* Brand: avatar + name + discipline */}
            <Link href="/" className="group flex items-center gap-3 min-w-0">
              <span className="logo-wrap shrink-0" aria-hidden="true">
                <img src="/profile.jpg" alt="Shamim Ahammed headshot" className="logo-img" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold tracking-tight text-sm text-neutral-300/80 group-hover:text-neutral-100 transition md:text-xs md:uppercase md:tracking-[0.35em]">
                  Product & Tech
                </span>
                <span className="mt-0.5 block truncate text-lg font-semibold leading-tight sm:text-xl">
                  <span className="name-gradient font-display">Shamim Ahammed</span>
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex justify-center text-sm text-neutral-300">
              <ul className="flex items-center gap-1.5">
                <li><a className="nav-link" href="#services"><span>Services</span></a></li>
                <li><a className="nav-link" href="#experience"><span>Experience</span></a></li>
                <li><a className="nav-link" href="#projects"><span>Projects</span></a></li>
                <li><a className="nav-link" href="#testimonials"><span>Testimonials</span></a></li>
              </ul>
            </nav>

            <div className="flex items-center gap-2 md:justify-end">
              <a className="hidden md:inline-flex btn-aurora" href="#contact">
                <span>Contact</span>
              </a>
              {/* Mobile menu button */}
              <button
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(v => !v)}
                className="menu-toggle md:hidden"
              >
                {open ? (
                  /* Close icon */
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ) : (
                  /* Hamburger icon */
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0b0f]/95 backdrop-blur">
          <nav className="container py-5">
            <ul className="grid gap-3 text-base text-neutral-100">
              <li><a onClick={() => setOpen(false)} className="mobile-nav-link" href="#services">Services</a></li>
              <li><a onClick={() => setOpen(false)} className="mobile-nav-link" href="#experience">Experience</a></li>
              <li><a onClick={() => setOpen(false)} className="mobile-nav-link" href="#projects">Projects</a></li>
              <li><a onClick={() => setOpen(false)} className="mobile-nav-link" href="#testimonials">Testimonials</a></li>
              <li>
                <a onClick={() => setOpen(false)} className="btn-aurora w-full justify-center" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
