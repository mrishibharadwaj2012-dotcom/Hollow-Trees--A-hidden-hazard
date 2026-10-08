import React from 'react';
import { AlertCircle, HelpCircle, Gauge, Activity, Check, X } from 'lucide-react';

export const TRRatioSection: React.FC = () => {
  return (
    <section id="tr-ratio" className="py-16 md:py-20 bg-[#F7F8F4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 06 · Supporting Indicator
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            The Transmitted / Received (T/R) Signal Ratio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Comparing the energy sent by the transmitter (T) to the energy detected by the receiver (R) provides qualitative evidence of how strongly ultrasonic vibrations traverse the trunk interior.
          </p>
        </div>

        {/* Essential Scientific Disclaimer Banner */}
        <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-r-lg mb-12 text-amber-900">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-base font-bold text-amber-950">
                Scientific Clarification & Honest Scope
              </h3>
              <p className="text-sm text-amber-900/90 mt-1 leading-relaxed">
                We present the <strong>T/R ratio strictly as an exploratory supporting indicator</strong> of signal attenuation. It is <strong>NOT</strong> a complete tree-stability index, nor is it a standalone predictor of structural failure or tree collapse.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Explanation: Sound Wood vs Cavity Wood Transmission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Scenario A: Sound Wood Transmission */}
          <div className="bg-white rounded-xl border border-stone-300 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Scenario A
                </span>
                <span className="text-xs font-semibold text-stone-500">Solid Continuum</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                Sound, Intact Trunk Wood
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                When ultrasonic waves pass through solid, uncompromised wood fibers, energy travels along a direct line with low dispersion. A significant portion of the transmitted signal reaches the receiver intact.
              </p>

              {/* Simple Visual Signal Bar Diagram */}
              <div className="space-y-4 bg-stone-50 p-4 rounded-lg border border-stone-200">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1 text-stone-700">
                    <span>Transmitted Signal (T)</span>
                    <span>100% (Baseline Pulse)</span>
                  </div>
                  <div className="h-3 w-full bg-stone-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1 text-stone-700">
                    <span>Received Signal (R)</span>
                    <span className="text-emerald-700 font-bold">~75–85% (High Transmission)</span>
                  </div>
                  <div className="h-3 w-full bg-stone-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-emerald-800 font-medium">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Indicates low acoustic resistance and good wood continuity.</span>
            </div>
          </div>

          {/* Scenario B: Internal Cavity / Decayed Wood Transmission */}
          <div className="bg-white rounded-xl border border-stone-300 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  Scenario B
                </span>
                <span className="text-xs font-semibold text-stone-500">Internal Defect</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                Trunk with Internal Cavity or Decay
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                The air inside the cavity reflects almost all wave energy backwards. Waves must bend around the perimeter; internal decay absorbs and scatters energy, leading to a marked decrease in received signal level.
              </p>

              {/* Simple Visual Signal Bar Diagram */}
              <div className="space-y-4 bg-stone-50 p-4 rounded-lg border border-stone-200">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1 text-stone-700">
                    <span>Transmitted Signal (T)</span>
                    <span>100% (Baseline Pulse)</span>
                  </div>
                  <div className="h-3 w-full bg-stone-200 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1 text-stone-700">
                    <span>Received Signal (R)</span>
                    <span className="text-amber-700 font-bold">~15–30% (Severe Attenuation)</span>
                  </div>
                  <div className="h-3 w-full bg-stone-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-amber-800 font-medium">
              <Activity className="w-4 h-4 text-amber-600" />
              <span>Signals marked dissipation; triggers referral for detailed inspection.</span>
            </div>
          </div>
        </div>

        {/* Why Mathematics Alone Cannot Decide Tree Failure */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 text-stone-700">
          <h4 className="font-serif text-base font-bold text-stone-900 mb-3">
            Why T/R Ratio Cannot Be Used as an Absolute Index Alone:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <strong className="block text-stone-900 mb-1">Wood Moisture Content</strong>
              <span>Sapwood conducts acoustic energy differently in monsoon versus dry summer seasons.</span>
            </div>
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <strong className="block text-stone-900 mb-1">Species Grain Structure</strong>
              <span>Hardwoods (Sal, Teak) have distinct ring porosity compared to softer timbers (Rain Tree).</span>
            </div>
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <strong className="block text-stone-900 mb-1">Bark Contact Coupling</strong>
              <span>Rough furrowed bark creates micro-air gaps that reduce probe coupling efficiency.</span>
            </div>
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <strong className="block text-stone-900 mb-1">Biological Compensatory Growth</strong>
              <span>Trees often develop thicker reaction wood around cavities, reinforcing local strength.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
