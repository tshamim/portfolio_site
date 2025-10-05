"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/10 sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container py-3 md:py-4 flex items-center justify-between">
        {/* Brand: avatar + name */}
        <a href="/" className="flex items-center gap-3 min-w-0">
          <span className="logo-wrap shrink-0" aria-hidden="true">
            <img src="/profile.jpg" alt="" className="logo-img" />
          </span>
          <span className="font-semibold tracking-tight truncate">
            <span className="name-gradient">Shamim Ahammed</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block text-sm text-neutral-300">
          <ul className="flex items-center gap-6">
            <li><a className="hover:text-white" href="#services">Services</a></li>
            <li><a className="hover:text-white" href="#projects">Projects</a></li>
            <li><a className="hover:text-white" href="#testimonials">Testimonials</a></li>
            <li><a className="btn-primary rounded-lg" href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/5"
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

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <nav className="container py-4">
            <ul className="grid gap-3 text-neutral-200 text-base">
              <li><a onClick={() => setOpen(false)} className="block py-2" href="#services">Services</a></li>
              <li><a onClick={() => setOpen(false)} className="block py-2" href="#projects">Projects</a></li>
              <li><a onClick={() => setOpen(false)} className="block py-2" href="#testimonials">Testimonials</a></li>
              <li>
                <a onClick={() => setOpen(false)} className="btn-primary rounded-xl w-full justify-center" href="#contact">
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
