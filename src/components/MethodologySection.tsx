import React, { useState } from 'react';
import { ArrowDown, CheckCircle, ShieldCheck, ChevronRight, UserCheck } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/projectData';

export const MethodologySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="methodology" className="py-16 md:py-24 bg-[#F8F9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 08 · Standard Protocol
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Scientific Investigation Methodology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            A 9-stage systematic protocol guiding tree evaluation—from initial non-invasive visual screening, through ultrasonic wave transmission and signal comparison, to preliminary triage and professional arborist referral.
          </p>
        </div>

        {/* Vital Role Clarification Callout */}
        <div className="mb-12 bg-white rounded-xl p-5 sm:p-6 border-l-4 border-[#163828] border-y border-r border-stone-300 shadow-xs flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-[#163828] shrink-0 mt-0.5" />
          <div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Crucial Protocol Boundary: Preliminary Screening Filter
            </h3>
            <p className="text-sm text-stone-700 mt-1 leading-relaxed">
              Ultrasonic testing is applied strictly as a <strong>preliminary screening approach</strong> to flag suspect internal anomalies. It is <strong>never a standalone replacement</strong> for certified professional arborists, multi-sensor tomographic diagnostics, or comprehensive structural tree-risk audits.
            </p>
          </div>
        </div>

        {/* 9-Step Flowchart Layout */}
        <div className="bg-white rounded-2xl border border-stone-300 p-6 sm:p-8 shadow-xs">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-6 font-semibold">
            Sequential Protocol Flowchart (Stages 01 to 09)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {METHODOLOGY_STEPS.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              const isFinal = idx === METHODOLOGY_STEPS.length - 1;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#163828] text-white border-[#163828] shadow-sm'
                      : isFinal
                      ? 'bg-amber-50/70 border-amber-200 text-stone-800 hover:border-amber-300'
                      : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100 hover:border-stone-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-emerald-800 text-emerald-200'
                            : isFinal
                            ? 'bg-amber-200 text-amber-900'
                            : 'bg-stone-200 text-stone-700'
                        }`}
                      >
                        STEP {step.step}
                      </span>
                      {isFinal && (
                        <span className="text-[10px] font-mono text-amber-800 font-bold uppercase">
                          External Referral
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif text-base font-bold mb-2 leading-tight">
                      {step.title}
                    </h4>
                    <p
                      className={`text-xs leading-relaxed ${
                        isSelected ? 'text-emerald-100' : 'text-stone-600'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-current/15 flex items-center justify-between text-[11px] font-mono">
                    <span className="opacity-80">Phase {Math.floor(idx / 3) + 1}</span>
                    {idx < METHODOLOGY_STEPS.length - 1 && (
                      <span className="opacity-60 flex items-center gap-1">
                        Next <ChevronRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flowchart Summary Bar */}
          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#163828]"></span>
              <span>Steps 01–03: Visual & Spatial Selection</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
              <span>Steps 04–07: Ultrasonic Wave Interrogation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
              <span>Steps 08–09: Triage & Professional Arborist Action</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
