"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Capabilities", href: "#capabilities" },
    { name: "Track Record", href: "#track-record" },
    { name: "Partnership", href: "#partnership" },
    { name: "About", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-4 bg-aerospace-black/70 backdrop-blur-md border-b border-white/5 shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor" className="text-aerospace-offwhite" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15 L20 85 L35 85 L50 50 L65 85 L80 85 Z" />
          </svg>
          <div className="flex flex-col justify-center">
            <span className="text-xl md:text-2xl font-bold tracking-widest leading-none text-aerospace-offwhite">DELTA AERIAL</span>
            <span className="text-sm md:text-base tracking-[0.2em] text-white/50 leading-none mt-1">SYSTEMS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-mono tracking-widest text-aerospace-offwhite/70 hover:text-white transition-colors relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-aerospace-cyan transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center gap-2 text-xs font-mono tracking-widest text-aerospace-offwhite/80 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          MENU
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className={cn("block h-[1px] w-full bg-current transition-transform duration-300", mobileMenuOpen ? "translate-y-[7px] rotate-45" : "")} />
            <span className={cn("block h-[1px] w-full bg-current transition-opacity duration-300", mobileMenuOpen ? "opacity-0" : "")} />
            <span className={cn("block h-[1px] w-full bg-current transition-transform duration-300", mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : "")} />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 bg-aerospace-black/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out md:hidden overflow-hidden",
          mobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0 border-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono tracking-widest text-aerospace-offwhite/70 hover:text-aerospace-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
