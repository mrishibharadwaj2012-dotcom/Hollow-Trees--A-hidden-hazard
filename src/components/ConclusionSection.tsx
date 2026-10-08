import React from 'react';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const ConclusionSection: React.FC = () => {
  return (
    <section id="conclusion" className="py-16 md:py-24 bg-[#163828] text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-radial from-emerald-800/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-300 font-bold mb-4">
          <Quote className="w-4 h-4" />
          <span>Section 14 · Project Synthesis & Final Verdict</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
          The Scientific Conclusion
        </h2>

        {/* Verbatim Conclusion Block */}
        <div className="bg-emerald-950/60 backdrop-blur-md rounded-2xl border border-emerald-700/60 p-8 sm:p-12 shadow-2xl text-left sm:text-center relative">
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-emerald-50 leading-relaxed font-light italic">
            “{PROJECT_METADATA.conclusion}”
          </p>

          <div className="mt-8 pt-6 border-t border-emerald-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200 font-mono">
            <span>Non-Destructive Preliminary Screening</span>
            <span aria-hidden="true">·</span>
            <span>National Children&apos;s Science Congress</span>
            <span aria-hidden="true">·</span>
            <span>Acoustic Triage Protocol</span>
          </div>
        </div>
      </div>
    </section>
  );
};
