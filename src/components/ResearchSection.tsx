import React, { useState } from 'react';
import { BookOpen, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { RESEARCH_PHASES } from '../data/projectData';

export const ResearchSection: React.FC = () => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>(RESEARCH_PHASES[0].id);

  const activePhase = RESEARCH_PHASES.find((p) => p.id === selectedPhaseId) || RESEARCH_PHASES[0];

  return (
    <section id="research" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 03 · Scientific Investigation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Our Research Investigation Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Organized across 8 sequential scientific investigations—bridging plant biomechanics, acoustic physics, campus observations, and physical demonstration modeling.
          </p>
        </div>

        {/* Desktop / Tablet Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Milestone Directory */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3 font-semibold">
              Select Investigation Phase
            </div>
            {RESEARCH_PHASES.map((phase, index) => {
              const isSelected = phase.id === selectedPhaseId;
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhaseId(phase.id)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#163828] text-white border-[#163828] shadow-xs'
                      : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-emerald-800 text-emerald-200' : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <div className="text-xs font-semibold leading-tight">{phase.title}</div>
                      <div
                        className={`text-[11px] truncate max-w-[220px] sm:max-w-[280px] mt-0.5 ${
                          isSelected ? 'text-emerald-200/80' : 'text-stone-500'
                        }`}
                      >
                        {phase.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-emerald-300 translate-x-0.5' : 'text-stone-400 group-hover:text-stone-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Scientific Phase Card */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-stone-300 bg-[#F9FAF7] p-6 sm:p-8 shadow-xs sticky top-24">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#8B5A2B] uppercase tracking-wider">
                    {activePhase.phase} Investigation
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                    {activePhase.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#163828]/10 text-[#163828] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>

              {/* Subtitle & Summary */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1 font-mono">
                  Focus Area
                </div>
                <div className="text-sm font-medium text-stone-800 mb-3">
                  {activePhase.subtitle}
                </div>
                <p className="text-sm text-stone-700 leading-relaxed bg-white p-4 rounded-md border border-stone-200">
                  {activePhase.summary}
                </p>
              </div>

              {/* Scientific Details */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3 font-mono">
                  Methodological & Physics Details
                </div>
                <ul className="space-y-2.5">
                  {activePhase.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#163828] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Scientific Insight Box */}
              <div className="bg-[#EAEFE8] border-l-4 border-[#163828] p-4 rounded-r-md">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#163828] font-bold mb-1">
                  Core Scientific Takeaway
                </div>
                <p className="font-serif text-sm text-stone-900 italic font-medium">
                  “{activePhase.keyInsight}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
