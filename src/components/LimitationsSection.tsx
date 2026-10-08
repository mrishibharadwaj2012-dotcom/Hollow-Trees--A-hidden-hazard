import React from 'react';
import { AlertTriangle, ShieldX, HelpCircle, CheckCircle, Scale } from 'lucide-react';
import { LIMITATIONS_LIST } from '../data/projectData';

export const LimitationsSection: React.FC = () => {
  return (
    <section id="limitations" className="py-16 md:py-20 bg-[#F7F8F4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 12 · Scientific Honesty
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Scientific Limitations of Our Study
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Genuine scientific inquiry recognizes boundaries. We deliberately avoid overstated commercial or diagnostic claims, explicitly delineating what our preliminary student investigation can and cannot conclude.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="mb-10 p-5 rounded-xl bg-amber-50 border-l-4 border-amber-600 border-y border-r border-amber-200 text-amber-950 flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong>Critical Scientific Statement: </strong>
            Our method is designed as a preliminary non-destructive screening model. It does not predict the exact day or wind threshold of stem failure, and must never be treated as an autonomous substitute for certified arboricultural inspection.
          </div>
        </div>

        {/* 5 Core Limitations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {LIMITATIONS_LIST.map((lim, idx) => (
            <div
              key={lim.title}
              className="bg-white rounded-xl p-6 border border-stone-300 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                    Limitation 0{idx + 1}
                  </span>
                  <ShieldX className="w-4 h-4 text-amber-700" />
                </div>
                <h3 className="font-serif text-base font-bold text-stone-900 mb-2">
                  {lim.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {lim.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-400">
                Scientific Scope Constraint
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
