import React from 'react';
import { CheckCircle2, ShieldAlert, Award, FileSearch, ArrowRight } from 'lucide-react';
import { SCIENTIFIC_FINDINGS } from '../data/projectData';

export const ObservationsFindingsSection: React.FC = () => {
  return (
    <section id="findings" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 09 · Empirical Evidence
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Major Project Observations & Scientific Findings
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Through synthesis of botanical literature, IIT Kharagpur campus observations, and acoustic wave theory modeling, we formulated five primary findings—anchored strictly in verified physics without fabricating numerical test data.
          </p>
        </div>

        {/* 5 Core Findings Cards (Verbatim to prompt requirements) */}
        <div className="space-y-6">
          {SCIENTIFIC_FINDINGS.map((finding) => (
            <div
              key={finding.id}
              className="bg-[#F9FAF7] rounded-xl border border-stone-300 p-6 sm:p-8 hover:border-stone-400 transition-all shadow-xs"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Header & Title */}
                <div className="lg:max-w-md">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-white bg-[#163828] px-2.5 py-1 rounded">
                      Finding 0{finding.id}
                    </span>
                    <span className="text-xs font-mono text-stone-500 uppercase tracking-wide">
                      Core Conclusion
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                    {finding.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-900 leading-relaxed">
                    {finding.shortDesc}
                  </p>
                </div>

                {/* Scientific Context & Implication */}
                <div className="lg:max-w-2xl flex-1 space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <strong className="block text-stone-900 font-semibold mb-1 font-mono text-xs uppercase text-[#8B5A2B]">
                      Scientific & Biological Context:
                    </strong>
                    {finding.scientificContext}
                  </div>

                  <div className="bg-[#EAEFE8] p-3.5 rounded-lg border border-[#C5D5C2] text-xs sm:text-sm text-stone-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#163828] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-[#163828]">Practical Implication: </strong>
                      {finding.implication}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Integrity Footnote */}
        <div className="mt-8 text-center text-xs text-stone-500 font-mono">
          * Preserving Scientific Integrity: No numerical acoustic velocities or synthetic sensor datasets were fabricated. Findings represent verifiable qualitative wave mechanics.
        </div>
      </div>
    </section>
  );
};
