import React, { useState } from 'react';
import { Activity, BookOpen, Layers, MapPin, Radio, Shield, Users, FileText, Menu, X, BookA } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBrief: () => void;
  onOpenGlossary: (term?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrief, onOpenGlossary }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'The Problem', href: '#problem' },
    { name: 'Aim & Scope', href: '#aim' },
    { name: 'Research', href: '#research' },
    { name: 'Field Survey', href: '#field-survey' },
    { name: 'Wave Simulator', href: '#scientific-principle' },
    { name: 'T/R Ratio', href: '#tr-ratio' },
    { name: 'Physical Model', href: '#model' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Findings', href: '#findings' },
    { name: 'Social Impact', href: '#social-importance' },
    { name: 'Glossary', href: '#glossary' },
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
            <span className="text-emerald-200">IIT Kharagpur Study</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-emerald-200/90 text-[11px]">
            <span className="text-white font-medium">Investigators: Nilesh Patra & Rishi Bharadwaj</span>
            <span>·</span>
            <span className="text-amber-300 font-medium">Preliminary Screening Model</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Component */}
          <a href="#" className="flex items-center">
            <Logo size="md" showSubtitle={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-stone-700">
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
                <button
                  onClick={() => onOpenGlossary()}
                  className="w-full text-left px-4 py-2 text-xs text-emerald-800 font-semibold hover:bg-emerald-50 cursor-pointer flex items-center gap-1.5"
                >
                  <BookA className="w-3.5 h-3.5" />
                  <span>Glossary Modal</span>
                </button>
                <a
                  href="#grounded-research"
                  className="block px-4 py-2 text-xs text-stone-700 hover:bg-stone-50"
                >
                  Search Reference Library
                </a>
              </div>
            </div>
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenGlossary()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-stone-300 bg-stone-50 text-stone-800 hover:bg-stone-100 transition-colors shadow-2xs cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-stone-600" />
              <span>Glossary</span>
            </button>
            <button
              onClick={onOpenBrief}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-stone-300 bg-white text-stone-800 hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-stone-600" />
              <span>Brief Sheet</span>
            </button>
            <a
              href="#scientific-principle"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md bg-[#163828] text-white hover:bg-[#0f281d] transition-colors shadow-2xs"
            >
              <Radio className="w-3.5 h-3.5 text-emerald-300" />
              <span>Simulator</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenGlossary()}
              aria-label="Open Glossary"
              className="p-2 text-stone-700 border border-stone-200 rounded-md"
            >
              <BookA className="w-4 h-4" />
            </button>
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
                onOpenGlossary();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-md"
            >
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <span>Open Scientific Glossary</span>
            </button>
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
              <span>Explore Wave Simulator</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
