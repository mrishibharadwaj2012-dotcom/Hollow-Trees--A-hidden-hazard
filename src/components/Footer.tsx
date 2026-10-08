import React from 'react';
import { ArrowUp, Radio, TreePine, Award, Shield } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';
import { TreeCavitySvgLogo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F291E] text-stone-300 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Col 1: Project Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <TreeCavitySvgLogo sizeClass="w-11 h-11" />
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold block">
                  Student Research Project | NCSC
                </span>
                <span className="font-serif text-base font-bold text-white">
                  National Children&apos;s Science Congress
                </span>
              </div>
            </div>

            <p className="font-serif text-sm text-emerald-100/90 leading-relaxed max-w-xl">
              “{PROJECT_METADATA.title}”
            </p>

            <div className="text-xs text-stone-400 font-sans">
              Preliminary ultrasonic wave transmission screening for hidden internal trunk defects. Designed and presented for the National Children&apos;s Science Congress exhibition.
            </div>
          </div>

          {/* Col 2: Navigation Quicklinks */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="font-mono uppercase text-emerald-400 font-bold tracking-wider mb-2">
              Research Sections
            </div>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#problem" className="hover:text-white transition-colors">The Problem</a></li>
              <li><a href="#aim" className="hover:text-white transition-colors">Aim & Objectives</a></li>
              <li><a href="#field-survey" className="hover:text-white transition-colors">IIT Kharagpur Survey</a></li>
              <li><a href="#scientific-principle" className="hover:text-white transition-colors">Ultrasonic Wave Principle</a></li>
              <li><a href="#tr-ratio" className="hover:text-white transition-colors">T/R Ratio Explanation</a></li>
              <li><a href="#model" className="hover:text-white transition-colors">Static Physical Model</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">Flowchart Methodology</a></li>
            </ul>
          </div>

          {/* Col 3: Principles & Integrity */}
          <div className="md:col-span-3 space-y-3 text-xs text-stone-400">
            <div className="font-mono uppercase text-emerald-400 font-bold tracking-wider mb-2">
              Academic Standards
            </div>
            <p>
              • Non-destructive preliminary triage approach.
            </p>
            <p>
              • Zero fabricated numeric data or synthetic sensor telemetry.
            </p>
            <p>
              • Transparent statement of scientific limitations.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-800 transition-colors text-xs font-semibold cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <div>
            Student Research Project | NCSC Congress Exhibition
          </div>
          <div>
            Focal Theme: Science, Technology & Innovation for a Sustainable Future
          </div>
        </div>
      </div>
    </footer>
  );
};
