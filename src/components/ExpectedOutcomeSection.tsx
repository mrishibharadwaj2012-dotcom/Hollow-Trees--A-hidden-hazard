import React from 'react';
import { ShieldCheck, ArrowRight, TreePine, Users, Search, AlertCircle } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const ExpectedOutcomeSection: React.FC = () => {
  const steps = [
    {
      title: 'Early Identification',
      desc: 'Rapid non-destructive screening flags hidden internal cavities and acoustic damping before visible stem cracking or branch shedding.',
      icon: Search,
    },
    {
      title: 'Further Inspection',
      desc: 'Flagged trees are scheduled for targeted diagnostic tomographic scans or resistograph checks by certified municipal arborists.',
      icon: AlertCircle,
    },
    {
      title: 'Better Risk Assessment',
      desc: 'Holistic evaluation of residual sound wood wall, crown wind exposure, tree lean, and pedestrian traffic volume.',
      icon: ShieldCheck,
    },
    {
      title: 'Protection of People & Trees',
      desc: 'High-risk hazardous limbs are pruned safely, while healthy trees are preserved from needless panic felling.',
      icon: TreePine,
    },
  ];

  return (
    <section id="expected-outcome" className="py-16 md:py-20 bg-[#F3F5EF] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 10 · Strategic Objective
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Expected Project Outcome & Impact Pipeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Demonstrating how ultrasonic testing can potentially support early, systematic identification of trees with hidden internal defects to optimize municipal tree care.
          </p>
        </div>

        {/* Emphasized Formula Banner */}
        <div className="bg-[#163828] text-white rounded-xl p-6 sm:p-8 shadow-sm mb-12">
          <div className="text-xs font-mono text-emerald-300 uppercase tracking-widest mb-3">
            Core Project Impact Chain
          </div>
          <div className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-emerald-100 leading-snug">
            “{PROJECT_METADATA.expectedOutcomeFormula}”
          </div>
        </div>

        {/* Pipeline Cards with Connected Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded">
                      0{index + 1}
                    </span>
                    <Icon className="w-5 h-5 text-[#163828]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>Impact Milestone</span>
                  {index < steps.length - 1 && <span>→</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
