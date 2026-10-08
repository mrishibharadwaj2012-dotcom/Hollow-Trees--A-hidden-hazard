import React from 'react';
import { Rocket, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { FUTURE_SCOPE_LIST } from '../data/projectData';

export const FutureScopeSection: React.FC = () => {
  return (
    <section id="future-scope" className="py-16 md:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 13 · Research Trajectory
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Future Scope & Methodological Improvements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Our student project lays a solid foundational hypothesis. The following six investigative avenues represent how this preliminary work could be expanded in collegiate and field forestry programs.
          </p>
        </div>

        {/* 6 Future Improvements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUTURE_SCOPE_LIST.map((item, index) => (
            <div
              key={item.title}
              className="bg-[#F9FAF7] rounded-xl p-6 border border-stone-200 hover:border-stone-400 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#163828] bg-emerald-100/80 px-2 py-0.5 rounded">
                    Future Roadmap 0{index + 1}
                  </span>
                  <Rocket className="w-4 h-4 text-[#163828]" />
                </div>
                <h3 className="font-serif text-base font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200 text-[11px] font-mono text-emerald-800 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Next-Generation NDT Evolution</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
