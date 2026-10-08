import React, { useState } from 'react';
import { AlertTriangle, EyeOff, ShieldAlert, Sparkles, Wind, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [revealAmount, setRevealAmount] = useState<number>(50); // percentage of split
  const [viewMode, setViewMode] = useState<'split' | 'exterior' | 'interior'>('split');

  return (
    <section id="problem" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 01 · Scientific Background
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            The Hidden Structural Hazard Inside Healthy-Looking Trees
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Trees can maintain dense foliage and normal leafy growth while extensive fungal decay and hollow chambers quietly hollow out the heartwood inside the trunk.
          </p>
        </div>

        {/* Interactive Split Illustration: Healthy Exterior vs Internal Cavity Cross-Section */}
        <div className="mb-14 rounded-xl border border-stone-300 bg-stone-50 overflow-hidden shadow-xs">
          <div className="p-4 bg-stone-100 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-semibold text-stone-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#163828]"></span>
              <span>Comparative Diagnostic Visualizer: Surface View vs Internal Cross-Section</span>
            </div>
            
            {/* View Mode Selector */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-md border border-stone-200 text-xs font-medium text-stone-600">
              <button
                onClick={() => { setViewMode('exterior'); setRevealAmount(0); }}
                className={`px-3 py-1 rounded transition-colors ${viewMode === 'exterior' ? 'bg-[#163828] text-white' : 'hover:text-stone-900'}`}
              >
                Healthy Exterior
              </button>
              <button
                onClick={() => { setViewMode('split'); setRevealAmount(50); }}
                className={`px-3 py-1 rounded transition-colors ${viewMode === 'split' ? 'bg-[#163828] text-white' : 'hover:text-stone-900'}`}
              >
                Interactive Split (50/50)
              </button>
              <button
                onClick={() => { setViewMode('interior'); setRevealAmount(100); }}
                className={`px-3 py-1 rounded transition-colors ${viewMode === 'interior' ? 'bg-[#163828] text-white' : 'hover:text-stone-900'}`}
              >
                Internal Cavity
              </button>
            </div>
          </div>

          {/* Interactive Visual Canvas */}
          <div className="relative h-[340px] sm:h-[420px] bg-stone-900 select-none overflow-hidden">
            {/* Base Container: Split Rendering via SVG vector cross section */}
            <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
              <defs>
                {/* Wood Grain Texture Pattern */}
                <pattern id="woodRings" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0,20 Q 20,18 40,20" stroke="#78350F" strokeWidth="0.8" fill="none" opacity="0.3" />
                  <path d="M 0,35 Q 20,33 40,35" stroke="#78350F" strokeWidth="0.8" fill="none" opacity="0.3" />
                </pattern>
                {/* Clip Path for the slider reveal */}
                <clipPath id="splitClip">
                  <rect x={(revealAmount / 100) * 1000} y="0" width={1000 - (revealAmount / 100) * 1000} height="500" />
                </clipPath>
              </defs>

              {/* LEFT SIDE: Healthy-Looking Exterior Surface (Bark, Leaves, Sunlight) */}
              <g id="healthyExterior">
                {/* Forest park background */}
                <rect x="0" y="0" width="1000" height="500" fill="#2E4A38" />
                <rect x="0" y="380" width="1000" height="120" fill="#22392A" />

                {/* Sky & sun glow */}
                <circle cx="200" cy="120" r="180" fill="#FDE68A" opacity="0.15" />
                
                {/* Outer Tree Trunk Profile */}
                <path
                  d="M 380,500 C 410,380 430,220 420,0 L 580,0 C 570,220 590,380 620,500 Z"
                  fill="#543D2B"
                />
                {/* Bark Furrows and Textures */}
                <path d="M 460,500 C 470,350 465,150 470,0" stroke="#3D291D" strokeWidth="6" strokeLinecap="round" />
                <path d="M 500,500 C 495,330 505,120 495,0" stroke="#3D291D" strokeWidth="8" strokeLinecap="round" />
                <path d="M 540,500 C 530,360 535,180 530,0" stroke="#3D291D" strokeWidth="7" strokeLinecap="round" />
                
                {/* Green Canopy Foliage Overhang */}
                <path d="M 150,0 Q 300,120 450,40 Q 600,140 850,0 Z" fill="#1B4D3E" opacity="0.85" />
                <path d="M 220,0 Q 380,90 520,30 Q 700,100 800,0 Z" fill="#2D7A58" opacity="0.75" />

                {/* External Annotation */}
                <text x="80" y="80" fill="#F5F5F4" fontSize="22" fontFamily="Lora" fontWeight="bold">
                  External Visual Appearance
                </text>
                <text x="80" y="112" fill="#D6D3D1" fontSize="14" fontFamily="sans-serif">
                  • Intact brown outer bark and vertical fissures
                </text>
                <text x="80" y="136" fill="#D6D3D1" fontSize="14" fontFamily="sans-serif">
                  • Lush green crown canopy overhead
                </text>
                <text x="80" y="160" fill="#D6D3D1" fontSize="14" fontFamily="sans-serif">
                  • No obvious exterior collapse or warning signs
                </text>
              </g>

              {/* RIGHT SIDE: Internal Cross-Section Reveal (Decay, Cavity, Weakened Shell) */}
              <g id="internalCrossSection" clipPath="url(#splitClip)">
                {/* Dark Diagnostic Cutaway Background */}
                <rect x="0" y="0" width="1000" height="500" fill="#1C1917" />

                {/* Cutaway Cross-Section of Tree Stem */}
                {/* Outer Bark Rim */}
                <path
                  d="M 380,500 C 410,380 430,220 420,0 L 580,0 C 570,220 590,380 620,500 Z"
                  fill="#291E16"
                />
                
                {/* Intact Sapwood Layer (Light Timber Tone) */}
                <path
                  d="M 405,500 C 430,380 445,220 440,0 L 560,0 C 555,220 570,380 595,500 Z"
                  fill="#D4A373"
                />

                {/* Inner Heartwood Decay Zone (Softened/Discolored Brown-Grey) */}
                <path
                  d="M 435,460 C 455,360 460,260 455,80 L 545,80 C 540,260 545,360 565,460 Z"
                  fill="#8B5E3C"
                  opacity="0.95"
                />

                {/* Fungal Decay Hyphae Spots & Rot Marbling */}
                <circle cx="480" cy="220" r="45" fill="#4A3525" opacity="0.8" />
                <circle cx="510" cy="280" r="38" fill="#3D291D" opacity="0.8" />

                {/* THE INTERNAL CAVITY (Hollow Central Void) */}
                <path
                  d="M 460,140 C 440,200 450,280 470,350 C 490,400 520,380 535,330 C 550,270 540,190 520,130 C 500,80 475,90 460,140 Z"
                  fill="#0C0A09"
                  stroke="#EA580C"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                />
                
                {/* Fungal bracket / rot text callout */}
                <text x="700" y="80" fill="#F87171" fontSize="22" fontFamily="Lora" fontWeight="bold">
                  Internal Anatomical Reality
                </text>
                <text x="700" y="112" fill="#FCA5A5" fontSize="14" fontFamily="sans-serif">
                  • Concealed hollow cavity in central heartwood
                </text>
                <text x="700" y="136" fill="#FCA5A5" fontSize="14" fontFamily="sans-serif">
                  • Loss of load-bearing wood fiber cross-section
                </text>
                <text x="700" y="160" fill="#FCA5A5" fontSize="14" fontFamily="sans-serif">
                  • High risk of stem snapping under gusting winds
                </text>

                {/* Measurement Callout: Residual Wall Thickness */}
                <line x1="405" y1="260" x2="455" y2="260" stroke="#38BDF8" strokeWidth="3" />
                <circle cx="405" cy="260" r="4" fill="#38BDF8" />
                <circle cx="455" cy="260" r="4" fill="#38BDF8" />
                <text x="350" y="240" fill="#38BDF8" fontSize="13" fontFamily="JetBrains Mono" fontWeight="bold">
                  t = Sound Wall
                </text>
              </g>

              {/* Vertical Divider Line with handle */}
              <line
                x1={(revealAmount / 100) * 1000}
                y1="0"
                x2={(revealAmount / 100) * 1000}
                y2="500"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                strokeDasharray="6 4"
              />
            </svg>

            {/* Slider Control Handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
              style={{ left: `${revealAmount}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-xl border-2 border-[#163828] flex items-center justify-center text-stone-900 font-bold text-xs">
                ⇄
              </div>
            </div>

            {/* Range Input for Dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={revealAmount}
              onChange={(e) => {
                setRevealAmount(Number(e.target.value));
                setViewMode('split');
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Drag to reveal tree cross-section"
            />
          </div>

          {/* Interactive instruction footer */}
          <div className="p-3 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
            <span>Drag the slider horizontally to reveal what lies beneath the outer bark.</span>
            <span className="font-mono text-stone-500">Cross-Section Reveal: {revealAmount}%</span>
          </div>
        </div>

        {/* 5 Core Problem Pillars (as requested in Section 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-lg bg-stone-50 border border-stone-200 hover:border-stone-300 transition-colors">
            <div className="w-9 h-9 rounded-md bg-stone-200/80 flex items-center justify-center text-stone-800 mb-4 font-mono font-bold text-sm">
              01
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Hidden Internal Cavities
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Cavities develop internally when wood-decay fungi enter via root wounds, old pruning cuts, or lightning scars. Because the sapwood boundary walls off infection (CODIT), large voids can expand for decades with zero exterior openings.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-lg bg-stone-50 border border-stone-200 hover:border-stone-300 transition-colors">
            <div className="w-9 h-9 rounded-md bg-stone-200/80 flex items-center justify-center text-stone-800 mb-4 font-mono font-bold text-sm">
              02
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Decay & Weakened Wood
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Basidiomycete fungi break down cellulose and lignin, the primary polymeric structural matrices that give wood its tensile strength and stiffness. Even before a physical void forms, spongey decayed wood cannot bear bending loads.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-lg bg-stone-50 border border-stone-200 hover:border-stone-300 transition-colors">
            <div className="w-9 h-9 rounded-md bg-stone-200/80 flex items-center justify-center text-stone-800 mb-4 font-mono font-bold text-sm">
              03
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Cracks & Structural Defects
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Internal hollows alter stress distribution. When wind gusts blow against the canopy, hollow trunks act like thin-walled cylinders, becoming highly prone to cross-sectional flattening, longitudinal torsional shear cracks, and sudden stem fracture.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-lg bg-stone-50 border border-stone-200 hover:border-stone-300 transition-colors">
            <div className="w-9 h-9 rounded-md bg-stone-200/80 flex items-center justify-center text-stone-800 mb-4 font-mono font-bold text-sm">
              04
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Limits of Visual Inspection
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Standard Visual Tree Assessment (VTA) evaluates external vitality like leaf density and bark color. However, sound outer bark can completely mask internal rot, leaving inspectors unaware of catastrophic instability until failure occurs.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 rounded-lg bg-stone-50 border border-stone-200 hover:border-stone-300 transition-colors md:col-span-2 lg:col-span-2">
            <div className="w-9 h-9 rounded-md bg-red-100 flex items-center justify-center text-red-800 mb-4 font-mono font-bold text-sm">
              05
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Direct Risk to People & Property
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              In urban areas, academic campuses, school grounds, and arterial roads, unexpected trunk failure poses a direct hazard to pedestrians, students, vehicles, and utility infrastructure—especially during heavy monsoon storms and severe pre-monsoon squalls.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-2 text-xs font-semibold text-stone-700">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>A non-destructive preliminary method is needed to screen these unseen hazards early.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
