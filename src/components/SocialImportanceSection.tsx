import React from 'react';
import { Users, Trees, Shield, HeartHandshake, Check, AlertOctagon, Scale } from 'lucide-react';

export const SocialImportanceSection: React.FC = () => {
  return (
    <section id="social-importance" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 11 · Societal & Ecological Value
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            The Dual Social Mission: Protecting Human Life & Conserving Trees
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Our investigation rests on a dual mandate: safeguarding school students, pedestrians, and public infrastructure while preventing the knee-jerk felling of structurally resilient urban shade trees.
          </p>
        </div>

        {/* Balanced Visual Layout: Side by Side Two Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* LEFT: PROTECT PEOPLE */}
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded">
                  Goal One · Public Safety
                </span>
                <Users className="w-6 h-6 text-amber-800" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                PROTECT PEOPLE
              </h3>
              <p className="text-sm text-stone-700 mb-6 leading-relaxed">
                Help identify potentially hazardous trees that harbor hidden decay before severe weather strikes, reducing risk to pedestrians, cyclists, motorists, and residential buildings.
              </p>

              {/* Graphic / Visual Box for Public Space */}
              <div className="bg-white p-5 rounded-xl border border-amber-200/80 mb-6 space-y-3">
                <div className="font-semibold text-xs text-amber-950 font-mono uppercase tracking-wide">
                  High-Risk Public Intersections:
                </div>
                <div className="space-y-2 text-xs text-stone-700">
                  <div className="flex items-start gap-2">
                    <AlertOctagon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>School & University Corridors: </strong>Prevent canopy collapse over daily student walking and cycling paths.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertOctagon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Monsoon Storm Preparedness: </strong>Pre-screen heavy-limbed trees prior to cyclical gale-force squalls and cyclones.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertOctagon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Utility Infrastructure: </strong>Protect overhead electrical cables and transit routes from sudden branch snaps.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-200 text-xs font-medium text-amber-950 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-800 shrink-0" />
              <span>Prioritizes safety for citizens without destructive invasive drilling.</span>
            </div>
          </div>

          {/* RIGHT: PROTECT TREES */}
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-3 py-1 rounded">
                  Goal Two · Urban Ecology
                </span>
                <Trees className="w-6 h-6 text-emerald-800" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                PROTECT TREES
              </h3>
              <p className="text-sm text-stone-700 mb-6 leading-relaxed">
                Avoid unnecessary removal of ancient trees that may look aged or have superficial scars, but remain structurally sound with adequate residual wall thickness.
              </p>

              {/* Graphic / Visual Box for Forest Conservation */}
              <div className="bg-white p-5 rounded-xl border border-emerald-200/80 mb-6 space-y-3">
                <div className="font-semibold text-xs text-emerald-950 font-mono uppercase tracking-wide">
                  Urban Forestry Conservation:
                </div>
                <div className="space-y-2 text-xs text-stone-700">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Halting Panic Felling: </strong>A superficial cavity does not automatically mean a tree will fall; science prevents hasty cutting.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Preserving Centuries-Old Canopy: </strong>Mature Banyan, Sal, and Teak trees provide essential shade, cooling, and biodiversity.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Targeted Pruning Instead of Cutting: </strong>Directs arborists to trim excessive crown weight rather than chopping entire trunks.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-200 text-xs font-medium text-emerald-950 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>Protects the urban biodiversity canopy from premature felling.</span>
            </div>
          </div>
        </div>

        {/* Center Synthesis: The Equilibrium */}
        <div className="p-6 rounded-xl bg-[#163828] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-800/80 flex items-center justify-center shrink-0">
              <Scale className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white">
                The Scientific Equilibrium
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/90 mt-0.5">
                Balancing human safety with ecological sustainability through objective physical diagnostics.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-emerald-300 bg-emerald-950/60 px-4 py-2 rounded-md border border-emerald-800">
            NCSC Focal Theme: Sustainable Urban Environments
          </div>
        </div>
      </div>
    </section>
  );
};
