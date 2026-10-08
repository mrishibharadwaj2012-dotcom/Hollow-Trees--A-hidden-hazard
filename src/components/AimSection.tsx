import React from 'react';
import { Target, CheckCircle2, Compass, Layers, ShieldCheck } from 'lucide-react';
import { CORE_OBJECTIVES, PROJECT_METADATA } from '../data/projectData';

export const AimSection: React.FC = () => {
  return (
    <section id="aim" className="py-16 md:py-20 bg-[#F3F5EF] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 02 · Project Mandate
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Our Aim & Research Objectives
          </h2>
        </div>

        {/* Highlighted Aim Statement Banner */}
        <div className="rounded-xl bg-[#163828] text-white p-6 sm:p-8 md:p-10 shadow-md mb-12 relative overflow-hidden">
          {/* Subtle Graphic Accents */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
            <Target className="w-96 h-96 text-emerald-300" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 uppercase tracking-widest mb-3">
              <Compass className="w-4 h-4" />
              <span>Core Scientific Aim of the NCSC Project</span>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-emerald-50 leading-relaxed border-l-4 border-emerald-400 pl-4 sm:pl-6 my-4">
              “{PROJECT_METADATA.aim}”
            </blockquote>

            <div className="flex flex-wrap items-center gap-4 pt-4 mt-6 border-t border-emerald-800/80 text-xs text-emerald-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Non-Destructive Principle</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Preliminary Screening (Not Final Failure Claim)</span>
              <span aria-hidden="true">·</span>
              <span>Informed Decision Support for Arborists</span>
            </div>
          </div>
        </div>

        {/* 3 Specific Objectives */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-4 font-semibold">
            Defined Working Objectives
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_OBJECTIVES.map((obj, idx) => (
              <div
                key={obj.number}
                className="bg-white rounded-lg p-6 border border-stone-200 hover:border-stone-300 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[#163828]">
                      {obj.number}
                    </span>
                    <span className="text-[11px] font-mono text-stone-600 uppercase">
                      Objective {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2.5">
                    {obj.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {obj.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-[#163828] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Key Project Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
