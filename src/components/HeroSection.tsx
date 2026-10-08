import React, { useState } from 'react';
import { ArrowDown, Radio, Shield, TreePine, ChevronRight, Activity, Info, Users } from 'lucide-react';
import heroImage from '../assets/images/tree_cavity_ultrasonic_hero_1791437243264.jpg';
import { ScientificTooltip } from './ScientificTooltip';

interface HeroSectionProps {
  onExploreResearch: () => void;
  onViewMethod: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreResearch, onViewMethod }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 border-b border-stone-200">
      {/* Background Subtle Gradient & Botanical Texture */}
      <div className="absolute inset-0 bg-radial from-emerald-950/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Academic Congress Header Kicker with Nilesh Patra and Rishi Bharadwaj */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 mb-4 tracking-wide font-medium">
          <span className="text-[#163828] font-bold">National Children&apos;s Science Congress</span>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span>Junior / Senior Research Division</span>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span className="text-stone-800 font-semibold bg-emerald-100/70 px-2 py-0.5 rounded">
            Student Investigators: Nilesh Patra & Rishi Bharadwaj
          </span>
        </div>

        {/* Small introductory heading */}
        <div className="mb-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8B5A2B] font-mono">
            Hidden Inside the Tree
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.12] max-w-5xl mb-6">
          Assessment of Internal Trunk Cavities in Trees for Predicting Structural Failure and Reducing Risk to Human Life
        </h1>

        {/* Subtitle with Scientific Tooltips */}
        <div className="text-lg sm:text-xl md:text-2xl text-stone-700 leading-relaxed max-w-3xl font-light mb-8">
          A <ScientificTooltip term="Non-Destructive Testing (NDT)">non-destructive</ScientificTooltip>, <ScientificTooltip term="Ultrasonic Waves">ultrasonic-wave-based</ScientificTooltip> approach for preliminary assessment of hidden internal defects in trees.
        </div>

        {/* Two Prominent Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <button
            onClick={onExploreResearch}
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-md bg-[#163828] text-white hover:bg-[#0f281d] transition-all shadow-xs hover:shadow-sm cursor-pointer group"
          >
            <span>Explore Our Research</span>
            <ChevronRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1 text-emerald-300" />
          </button>

          <button
            onClick={onViewMethod}
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-md border border-stone-300 bg-white text-stone-900 hover:bg-stone-50 hover:border-stone-400 transition-all shadow-2xs cursor-pointer"
          >
            <span>View Our Method</span>
          </button>
        </div>

        {/* Essential Statement Highlight Card */}
        <div className="p-4 sm:p-5 rounded-lg bg-[#EAEFE8] border border-[#C5D5C2] text-stone-900 mb-10 flex items-start gap-3.5 max-w-3xl">
          <Info className="w-5 h-5 text-[#163828] shrink-0 mt-0.5" />
          <div>
            <p className="font-serif text-base sm:text-lg font-bold text-[#163828] leading-snug">
              “Healthy-looking trees can sometimes hide serious internal defects.”
            </p>
            <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-normal">
              A preliminary screening approach by <strong>Nilesh Patra & Rishi Bharadwaj</strong> to investigate internal stem conditions without wounding living cambium or demanding premature tree felling.
            </p>
          </div>
        </div>

        {/* Hero Scientific Visual: Dramatic realistic cross-section with ultrasonic waves */}
        <div className="relative rounded-xl overflow-hidden border border-stone-300 bg-stone-900 shadow-xl">
          {/* Main Realistic Image */}
          <div className="relative aspect-video max-h-[580px] w-full overflow-hidden">
            <img
              src={heroImage}
              alt="Scientific cross-section of tree trunk with internal cavity and ultrasonic wave propagation between transmitter and receiver"
              className="w-full h-full object-cover object-center"
            />
            
            {/* Subtle Gradient Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30 pointer-events-none" />

            {/* Interactive Hotspots & Diagrammatic Legend Overlay */}
            <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white">
              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="font-mono text-cyan-200">Acoustic Stress Wave Transmission Principle</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-stone-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
                <span>Hover hotspots to inspect anatomy</span>
              </div>
            </div>

            {/* Hotspot 1: Transmitter (Left) */}
            <button
              onClick={() => setActiveHotspot(activeHotspot === 'transmitter' ? null : 'transmitter')}
              onMouseEnter={() => setActiveHotspot('transmitter')}
              className="absolute left-[12%] sm:left-[16%] top-[50%] -translate-y-1/2 p-2 group cursor-pointer focus:outline-none"
              aria-label="Ultrasonic Transmitter Hotspot"
            >
              <span className="relative flex h-7 w-7">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-7 w-7 bg-cyan-500 text-stone-950 font-bold text-xs items-center justify-center shadow-lg border border-white">
                  T
                </span>
              </span>
            </button>

            {/* Hotspot 2: Internal Cavity (Center) */}
            <button
              onClick={() => setActiveHotspot(activeHotspot === 'cavity' ? null : 'cavity')}
              onMouseEnter={() => setActiveHotspot('cavity')}
              className="absolute left-[48%] top-[52%] -translate-x-1/2 -translate-y-1/2 p-2 group cursor-pointer focus:outline-none"
              aria-label="Internal Cavity Hotspot"
            >
              <span className="relative flex h-7 w-7">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-7 w-7 bg-amber-500 text-stone-950 font-bold text-xs items-center justify-center shadow-lg border border-white">
                  C
                </span>
              </span>
            </button>

            {/* Hotspot 3: Receiver (Right) */}
            <button
              onClick={() => setActiveHotspot(activeHotspot === 'receiver' ? null : 'receiver')}
              onMouseEnter={() => setActiveHotspot('receiver')}
              className="absolute right-[12%] sm:right-[16%] top-[50%] -translate-y-1/2 p-2 group cursor-pointer focus:outline-none"
              aria-label="Ultrasonic Receiver Hotspot"
            >
              <span className="relative flex h-7 w-7">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-7 w-7 bg-emerald-500 text-stone-950 font-bold text-xs items-center justify-center shadow-lg border border-white">
                  R
                </span>
              </span>
            </button>

            {/* Bottom Caption Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-4 rounded-lg border border-white/10 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-stone-400 font-mono uppercase tracking-wider">
                    Scientific Diagram Preview
                  </div>
                  <div className="text-sm font-semibold text-stone-100">
                    {activeHotspot === 'transmitter' && (
                      <span className="text-cyan-300">T (Transmitter): Emits high-frequency mechanical stress wave through the outer wood.</span>
                    )}
                    {activeHotspot === 'cavity' && (
                      <span className="text-amber-300">C (Hidden Internal Cavity): Air void and decayed fibers deflect sound waves around perimeter.</span>
                    )}
                    {activeHotspot === 'receiver' && (
                      <span className="text-emerald-300">R (Receiver): Measures attenuated amplitude and extended propagation transit delay.</span>
                    )}
                    {!activeHotspot && (
                      <span>Cross-Sectional Stress Wave Propagation across Sound vs Decayed Heartwood</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-stone-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-cyan-400 inline-block"></span>
                    <span>T = Transmitted Wave</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-emerald-400 inline-block"></span>
                    <span>R = Received Signal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fact Strip: Academic Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-stone-200 text-xs text-stone-700">
          <div className="flex items-start gap-3">
            <Radio className="w-4 h-4 text-[#163828] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-medium">Non-Destructive Testing</strong>
              <span>Zero boreholes or bark damage; preserves natural compartmentalization.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Activity className="w-4 h-4 text-[#8B5A2B] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-medium">Acoustic Velocity Contrast</strong>
              <span>Sound wood (~1500 m/s) vs. air cavity diffraction (~343 m/s boundary).</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <TreePine className="w-4 h-4 text-[#163828] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-medium">IIT Kharagpur Field Study</strong>
              <span>Conducted observational surveys on mature avenue canopies.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-medium">Preliminary Screening Model</strong>
              <span>Identifies candidate trees for certified professional arborist audits.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
