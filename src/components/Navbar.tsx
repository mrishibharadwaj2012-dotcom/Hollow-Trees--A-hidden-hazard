import React, { useState } from 'react';
import { Activity, BookOpen, Layers, MapPin, Radio, Shield, Users, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBrief: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrief }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'The Problem', href: '#problem' },
    { name: 'Aim & Scope', href: '#aim' },
    { name: 'Research', href: '#research' },
    { name: 'Field Survey', href: '#field-survey' },
    { name: 'Ultrasonic Principle', href: '#scientific-principle' },
    { name: 'T/R Ratio', href: '#tr-ratio' },
    { name: 'Physical Model', href: '#model' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Findings', href: '#findings' },
    { name: 'Social Impact', href: '#social-importance' },
    { name: 'NCSC Journey', href: '#journey' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9F5]/90 backdrop-blur-md border-b border-stone-200">
      {/* Top Academic Ribbon */}
      <div className="bg-[#163828] text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white tracking-wider uppercase">NCSC Research Exhibit</span>
            <span className="text-emerald-400/80">/</span>
            <span>National Children&apos;s Science Congress</span>
            <span className="text-emerald-400/80">·</span>
            <span className="text-emerald-200">IIT Kharagpur Campus Study</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-emerald-200/90 text-[11px]">
            <span>Non-Destructive Testing (NDT)</span>
            <span>·</span>
            <span>Acoustic Wave Physics</span>
            <span>·</span>
            <span className="text-amber-300 font-medium">Preliminary Screening Model</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Project Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#163828] flex items-center justify-center text-emerald-300 shadow-sm transition-transform group-hover:scale-105">
              {/* Custom Tree + Wave Glyph */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22V13" stroke="currentColor" strokeWidth="2.5" />
                <path d="M12 13C8 13 6 10 6 7a6 6 0 0 1 12 0c0 3-2 6-6 6Z" stroke="currentColor" />
                <path d="M4 14c2-1 4-1 6 0" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M14 14c2-1 4-1 6 0" stroke="#38BDF8" strokeWidth="1.5" />
                <circle cx="12" cy="7" r="2" fill="#38BDF8" stroke="none" />
              </svg>
            </div>
            <div>
              <div className="font-serif text-base font-bold text-stone-900 leading-tight">
                Tree Cavity NDT Assessment
              </div>
              <div className="text-[11px] text-stone-500 font-medium tracking-wide">
                NCSC Student Scientific Project
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-stone-700">
            {navLinks.slice(0, 8).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#163828] transition-colors relative py-1 hover:border-b-2 hover:border-[#163828]"
              >
                {link.name}
              </a>
            ))}
            <div className="relative group">
              <span className="cursor-pointer hover:text-[#163828] flex items-center gap-1">
                More ▾
              </span>
              <div className="absolute right-0 top-full hidden group-hover:block w-48 bg-white border border-stone-200 rounded-md shadow-lg py-2 mt-1 z-50">
                {navLinks.slice(8).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-xs text-stone-700 hover:bg-stone-50 hover:text-[#163828]"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="border-t border-stone-100 my-1"></div>
                <a
                  href="#grounded-research"
                  className="block px-4 py-2 text-xs text-emerald-800 font-semibold hover:bg-emerald-50"
                >
                  Search Reference Library
                </a>
              </div>
            </div>
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBrief}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-stone-300 bg-white text-stone-800 hover:bg-stone-50 transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-stone-600" />
              <span>Project Summary Sheet</span>
            </button>
            <a
              href="#scientific-principle"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md bg-[#163828] text-white hover:bg-[#0f281d] transition-colors shadow-xs"
            >
              <Radio className="w-3.5 h-3.5 text-emerald-300" />
              <span>Interactive Wave Model</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenBrief}
              aria-label="View Project Summary"
              className="p-2 text-stone-700 border border-stone-200 rounded-md"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 rounded-md hover:bg-stone-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded hover:bg-stone-50 hover:text-[#163828]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrief();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold bg-stone-100 text-stone-800 rounded-md"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive Brief</span>
            </button>
            <a
              href="#scientific-principle"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold bg-[#163828] text-white rounded-md"
            >
              <Radio className="w-4 h-4 text-emerald-300" />
              <span>Explore Ultrasonic Wave Principle</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
