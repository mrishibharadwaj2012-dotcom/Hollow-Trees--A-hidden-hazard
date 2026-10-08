import React, { useState, useEffect } from 'react';
import { Radio, Activity, Play, Pause, RotateCcw, AlertTriangle, CheckCircle2, Sliders, Info, Zap } from 'lucide-react';
import { ScientificTooltip } from './ScientificTooltip';

export const ScientificPrincipleSection: React.FC = () => {
  // Interactive Simulation State Parameters (as requested by user)
  const [distanceCm, setDistanceCm] = useState<number>(75); // Distance between transmitter & receiver (30 cm - 120 cm)
  const [woodDensity, setWoodDensity] = useState<number>(720); // Wood density in kg/m³ (400 - 950 kg/m³)
  const [cavitySizePercent, setCavitySizePercent] = useState<number>(35); // Cavity size as % of radius (0% to 65%)
  
  // Animation state
  const [isWaveRunning, setIsWaveRunning] = useState<boolean>(true);
  const [wavePhase, setWavePhase] = useState<number>(0);

  // Animation ticker for wave pulses
  useEffect(() => {
    if (!isWaveRunning) return;
    const interval = setInterval(() => {
      setWavePhase((prev) => (prev + 1) % 100);
    }, 35);
    return () => clearInterval(interval);
  }, [isWaveRunning]);

  // PHYSICS CALCULATIONS BASED ON ACOUSTIC EQUATIONS
  // Wave velocity v = sqrt(E / rho)
  // Approximate Young's modulus E scaled to density:
  const youngModulusGpa = 7.5 + (woodDensity - 400) * 0.015; // 7.5 to 15.75 GPa
  const waveVelocityMs = Math.round(Math.sqrt((youngModulusGpa * 1e9) / woodDensity)); // approx 1100 - 1850 m/s

  // Geometric path length (straight vs detour)
  const cavityFraction = cavitySizePercent / 100;
  const isCavityPresent = cavitySizePercent > 0;
  
  // Straight path if clear, or perimeter detour if cavity blocks direct line
  const effectivePathLengthCm = isCavityPresent
    ? Math.round(distanceCm * (1 + (Math.PI / 2 - 1) * cavityFraction))
    : distanceCm;

  // Time of flight (ToF) in milliseconds: ToF = (d / 100) / v * 1000
  const timeOfFlightMs = Number(((effectivePathLengthCm / 100 / waveVelocityMs) * 1000).toFixed(3));

  // Received Signal Strength (% of Transmitted Pulse)
  // Distance attenuation factor:
  const distanceAttenuation = Math.max(0.65, 1 - (distanceCm - 30) * 0.0035);
  // Cavity scattering & diffraction attenuation:
  const cavityAttenuation = isCavityPresent
    ? Math.max(0.08, Math.pow(1 - cavityFraction * 1.25, 1.6))
    : 1.0;
  // Density coupling efficiency:
  const densityFactor = 0.85 + ((woodDensity - 400) / 550) * 0.25;

  const receivedSignalStrength = Math.min(
    95,
    Math.max(6, Math.round(100 * distanceAttenuation * cavityAttenuation * densityFactor))
  );

  // Triage risk classification based on received signal strength & cavity
  const getTriageCategory = () => {
    if (cavitySizePercent === 0 && receivedSignalStrength >= 65) {
      return {
        label: 'Sound Wood Continuum (High Transmission)',
        color: 'text-emerald-400',
        bg: 'bg-emerald-950/80 border-emerald-700',
        advice: 'Normal direct acoustic transmission. No internal air cavity detected.',
      };
    }
    if (cavitySizePercent <= 25 && receivedSignalStrength >= 40) {
      return {
        label: 'Minor Discontinuity / Early Decay Stage',
        color: 'text-amber-400',
        bg: 'bg-amber-950/80 border-amber-700',
        advice: 'Moderate wave scattering detected. Recommend monitoring at subsequent inspection.',
      };
    }
    return {
      label: 'Severe Signal Loss (Significant Cavity / Decay)',
      color: 'text-red-400',
      bg: 'bg-red-950/80 border-red-700',
      advice: 'Marked signal attenuation & transit delay. Prioritize for certified arborist diagnostic audit.',
    };
  };

  const triage = getTriageCategory();

  // Reset to default preset
  const handleReset = () => {
    setDistanceCm(75);
    setWoodDensity(720);
    setCavitySizePercent(35);
  };

  return (
    <section id="scientific-principle" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 05 · The Core Physics & Interactive Simulator
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            How Can Ultrasonic Waves Reveal What We Cannot See?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            An <ScientificTooltip term="Transmitter (T)">ultrasonic transmitter</ScientificTooltip> sends high-frequency mechanical waves through the tree trunk. The waves travel through the wood and are received by a <ScientificTooltip term="Receiver (R)">receiver</ScientificTooltip> placed at another point on the trunk. Internal <ScientificTooltip term="Cavity">cavities</ScientificTooltip>, <ScientificTooltip term="Wood Decay">decay</ScientificTooltip> and changes in wood structure alter the transmission of these waves.
          </p>
        </div>

        {/* INTERACTIVE SIMULATION WORKBENCH */}
        <div className="rounded-2xl border-2 border-stone-300 bg-stone-950 text-white overflow-hidden shadow-2xl mb-12">
          {/* Top Workbench Header */}
          <div className="p-4 sm:p-5 bg-stone-900/90 border-b border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-cyan-400 font-bold">TRANSMITTER (T)</span>
              <span className="text-stone-500">→</span>
              <span className="text-sky-300 font-bold">ULTRASONIC WAVES</span>
              <span className="text-stone-500">→</span>
              <span className="text-amber-300 font-bold">TREE TRUNK</span>
              <span className="text-stone-500">→</span>
              <span className="text-emerald-400 font-bold">RECEIVER (R)</span>
            </div>

            {/* Play/Pause & Reset Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsWaveRunning(!isWaveRunning)}
                className="px-3 py-1.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                {isWaveRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-stone-400" />
                    <span>Pause Wave</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Run Wave</span>
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                title="Reset simulation parameters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* PARAMETER ADJUSTMENT CONTROLS (Distance, Density, Cavity Size) */}
          <div className="p-4 sm:p-6 bg-stone-900 border-b border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* PARAMETER 1: Distance between Transmitter & Receiver */}
            <div className="space-y-2 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800">
              <div className="flex justify-between items-center">
                <label className="font-mono text-stone-300 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Trunk Distance / Spacing
                </label>
                <span className="font-mono font-bold text-cyan-300 text-sm">
                  {distanceCm} cm
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                step="5"
                value={distanceCm}
                onChange={(e) => setDistanceCm(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-stone-500">
                <span>30 cm (Young Tree)</span>
                <span>120 cm (Mature Trunk)</span>
              </div>
            </div>

            {/* PARAMETER 2: Wood Density (Species) */}
            <div className="space-y-2 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800">
              <div className="flex justify-between items-center">
                <label className="font-mono text-stone-300 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Wood Density (ρ)
                </label>
                <span className="font-mono font-bold text-emerald-300 text-sm">
                  {woodDensity} kg/m³
                </span>
              </div>
              <input
                type="range"
                min="420"
                max="920"
                step="20"
                value={woodDensity}
                onChange={(e) => setWoodDensity(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-stone-500">
                <span>Softwood (~450)</span>
                <span>Sal / Teak (~850)</span>
              </div>
            </div>

            {/* PARAMETER 3: Cavity Size (% of radius) */}
            <div className="space-y-2 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800">
              <div className="flex justify-between items-center">
                <label className="font-mono text-stone-300 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${cavitySizePercent === 0 ? 'bg-stone-500' : 'bg-amber-400'}`}></span>
                  Internal Cavity Size
                </label>
                <span className={`font-mono font-bold text-sm ${cavitySizePercent === 0 ? 'text-stone-400' : 'text-amber-400'}`}>
                  {cavitySizePercent === 0 ? 'None (Solid Wood)' : `${cavitySizePercent}% of Radius`}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="5"
                value={cavitySizePercent}
                onChange={(e) => setCavitySizePercent(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-stone-500">
                <span>0% (Sound Trunk)</span>
                <span>60% (Large Hollow)</span>
              </div>
            </div>
          </div>

          {/* DYNAMIC SIMULATION CANVAS (SVG) */}
          <div className="relative p-4 sm:p-8 bg-[#0B100E] overflow-hidden min-h-[460px] flex items-center justify-center select-none">
            <svg className="w-full h-[400px] sm:h-[480px]" viewBox="0 0 900 480">
              <defs>
                {/* Wood Timber Texture Radial Gradient */}
                <radialGradient id="simWoodGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7C4A28" />
                  <stop offset="65%" stopColor="#A46E44" />
                  <stop offset="88%" stopColor="#D4A373" />
                  <stop offset="100%" stopColor="#2E1C12" />
                </radialGradient>

                {/* Ultrasonic Wave Glow Filter */}
                <filter id="simWaveGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Central Tree Trunk Cross-Section */}
              <g transform="translate(450, 240)">
                {/* Outer Bark Rim & Sound Wood */}
                <circle
                  cx="0"
                  cy="0"
                  r="170"
                  fill="url(#simWoodGradient)"
                  stroke="#26170E"
                  strokeWidth="14"
                />

                {/* Concentric Annual Growth Rings */}
                <circle cx="0" cy="0" r="140" fill="none" stroke="#683A1B" strokeWidth="1" opacity="0.4" />
                <circle cx="0" cy="0" r="110" fill="none" stroke="#683A1B" strokeWidth="1" opacity="0.4" />
                <circle cx="0" cy="0" r="80" fill="none" stroke="#683A1B" strokeWidth="1" opacity="0.4" />
                <circle cx="0" cy="0" r="50" fill="none" stroke="#683A1B" strokeWidth="1" opacity="0.4" />

                {/* Clear Label: SOUND WOOD */}
                <text
                  x="0"
                  y="-145"
                  textAnchor="middle"
                  fill="#F1F5F9"
                  fontSize="12"
                  fontFamily="JetBrains Mono"
                  fontWeight="bold"
                >
                  SOUND WOOD
                </text>
                <text
                  x="0"
                  y="-130"
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize="9.5"
                  fontFamily="sans-serif"
                >
                  Intact Sapwood Shell (Residual Wall Thickness t)
                </text>

                {/* INTERNAL CAVITY (Dynamic Size based on slider) */}
                {cavitySizePercent > 0 ? (
                  <g>
                    {/* Decay sponge boundary surrounding the void */}
                    <circle
                      cx="0"
                      cy="0"
                      r={Math.min(150, (170 * cavitySizePercent) / 100 + 15)}
                      fill="#3B2618"
                      stroke="#854D0E"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      opacity="0.85"
                    />

                    {/* Central Air Void (Hollow Cavity) */}
                    <circle
                      cx="0"
                      cy="0"
                      r={(170 * cavitySizePercent) / 100}
                      fill="#070605"
                      stroke="#EF4444"
                      strokeWidth="3"
                    />

                    {/* Clear Label: CAVITY */}
                    <text
                      x="0"
                      y="-4"
                      textAnchor="middle"
                      fill="#EF4444"
                      fontSize="12"
                      fontFamily="JetBrains Mono"
                      fontWeight="bold"
                    >
                      INTERNAL CAVITY
                    </text>
                    <text
                      x="0"
                      y="14"
                      textAnchor="middle"
                      fill="#FCA5A5"
                      fontSize="9.5"
                      fontFamily="sans-serif"
                    >
                      Air Void ({cavitySizePercent}% of Radius)
                    </text>
                    <text
                      x="0"
                      y="28"
                      textAnchor="middle"
                      fill="#F87171"
                      fontSize="8.5"
                      fontFamily="JetBrains Mono"
                    >
                      Boundary Impedance Mismatch
                    </text>
                  </g>
                ) : (
                  /* Solid Wood Core Indicator */
                  <g>
                    <circle cx="0" cy="0" r="45" fill="#6B3818" opacity="0.4" />
                    <text
                      x="0"
                      y="4"
                      textAnchor="middle"
                      fill="#BAE6FD"
                      fontSize="12"
                      fontFamily="JetBrains Mono"
                      fontWeight="bold"
                    >
                      SOLID HEARTWOOD
                    </text>
                    <text
                      x="0"
                      y="20"
                      textAnchor="middle"
                      fill="#7DD3FC"
                      fontSize="9"
                      fontFamily="sans-serif"
                    >
                      Direct Wave Path Continuum
                    </text>
                  </g>
                )}
              </g>

              {/* TRANSMITTER PROBE (T) on Left */}
              <g transform="translate(180, 240)">
                <rect x="-35" y="-30" width="40" height="60" rx="4" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                <rect x="5" y="-14" width="12" height="28" fill="#0369A1" />
                <circle cx="-15" cy="0" r="9" fill="#38BDF8" />
                <text x="-15" y="4" textAnchor="middle" fill="#042F2E" fontSize="11" fontWeight="bold">T</text>
                
                {/* Clear Label: TRANSMITTER */}
                <text x="-15" y="-40" textAnchor="middle" fill="#38BDF8" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                  TRANSMITTER (T)
                </text>
                <text x="-15" y="-55" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="sans-serif">
                  Sends Pulse (100% In)
                </text>

                {/* Arrow Into Wood */}
                <line x1="20" y1="0" x2="80" y2="0" stroke="#38BDF8" strokeWidth="2.5" />
                <polygon points="80,0 70,-4 70,4" fill="#38BDF8" />
              </g>

              {/* RECEIVER PROBE (R) on Right */}
              <g transform="translate(720, 240)">
                <rect x="-5" y="-30" width="40" height="60" rx="4" fill="#059669" stroke="#34D399" strokeWidth="2" />
                <rect x="-17" y="-14" width="12" height="28" fill="#047857" />
                <circle cx="15" cy="0" r="9" fill="#34D399" />
                <text x="15" y="4" textAnchor="middle" fill="#042F2E" fontSize="11" fontWeight="bold">R</text>

                {/* Clear Label: RECEIVER */}
                <text x="15" y="-40" textAnchor="middle" fill="#34D399" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                  RECEIVER (R)
                </text>
                <text x="15" y="-55" textAnchor="middle" fill="#A7F3D0" fontSize="10" fontFamily="sans-serif">
                  Strength: {receivedSignalStrength}%
                </text>

                {/* Arrow Into Receiver */}
                <line x1="-80" y1="0" x2="-20" y2="0" stroke="#34D399" strokeWidth="2.5" />
                <polygon points="-20,0 -30,-4 -30,4" fill="#34D399" />
              </g>

              {/* DYNAMIC WAVE PROPAGATION PATHS & WAVEFRONTS */}
              {cavitySizePercent === 0 ? (
                /* NO CAVITY: Straight-line wave propagation */
                <g>
                  {/* Direct straight center ray */}
                  <line
                    x1="280"
                    y1="240"
                    x2="620"
                    y2="240"
                    stroke="#38BDF8"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                    opacity="0.4"
                  />

                  {/* Dynamic wavefront arcs moving left to right */}
                  {[0, 25, 50, 75].map((offset) => {
                    const currentPos = ((wavePhase + offset) % 100) / 100;
                    const xCoord = 275 + currentPos * 345;
                    const alpha = Math.sin(currentPos * Math.PI);
                    return (
                      <g key={offset} opacity={alpha}>
                        <path
                          d={`M ${xCoord - 18},180 Q ${xCoord + 18},240 ${xCoord - 18},300`}
                          stroke="#38BDF8"
                          strokeWidth="3.5"
                          fill="none"
                          filter="url(#simWaveGlow)"
                        />
                      </g>
                    );
                  })}

                  <g transform="translate(450, 205)">
                    <text x="0" y="0" textAnchor="middle" fill="#38BDF8" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                      Direct Radial Wave Path ({distanceCm} cm)
                    </text>
                  </g>
                </g>
              ) : (
                /* CAVITY PRESENT: Reflected central rays + Detoured diffraction paths */
                <g>
                  {/* Blocked direct central ray (Reflected backwards at cavity border) */}
                  <line
                    x1="280"
                    y1="240"
                    x2={450 - (170 * cavitySizePercent) / 100}
                    y2="240"
                    stroke="#EF4444"
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                  />
                  <line
                    x1={450 + (170 * cavitySizePercent) / 100}
                    y1="240"
                    x2="620"
                    y2="240"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeDasharray="2 4"
                    opacity="0.5"
                  />
                  {/* Reflected pulse arrow returning */}
                  <polygon
                    points={`${370 - (170 * cavitySizePercent) / 200},240 ${380 - (170 * cavitySizePercent) / 200},236 ${380 - (170 * cavitySizePercent) / 200},244`}
                    fill="#EF4444"
                  />

                  {/* Top Detour Curve around sound wood */}
                  {(() => {
                    const cavR = (170 * cavitySizePercent) / 100;
                    const topY = Math.max(90, 240 - cavR - 35);
                    const botY = Math.min(390, 240 + cavR + 35);
                    return (
                      <g>
                        <path
                          d={`M 280,240 Q 450,${topY} 620,240`}
                          stroke="#F59E0B"
                          strokeWidth="3"
                          strokeDasharray="6 4"
                          fill="none"
                        />
                        <path
                          d={`M 280,240 Q 450,${botY} 620,240`}
                          stroke="#F59E0B"
                          strokeWidth="3"
                          strokeDasharray="6 4"
                          fill="none"
                        />

                        {/* Dynamic wave energy particles flowing around the top and bottom detours */}
                        {[0, 33, 66].map((offset) => {
                          const t = ((wavePhase + offset) % 100) / 100;
                          const xTop = (1 - t) * (1 - t) * 280 + 2 * (1 - t) * t * 450 + t * t * 620;
                          const yTop = (1 - t) * (1 - t) * 240 + 2 * (1 - t) * t * topY + t * t * 240;

                          const xBot = (1 - t) * (1 - t) * 280 + 2 * (1 - t) * t * 450 + t * t * 620;
                          const yBot = (1 - t) * (1 - t) * 240 + 2 * (1 - t) * t * botY + t * t * 240;

                          return (
                            <g key={offset}>
                              <circle cx={xTop} cy={yTop} r="5.5" fill="#F59E0B" filter="url(#simWaveGlow)" />
                              <circle cx={xBot} cy={yBot} r="5.5" fill="#F59E0B" filter="url(#simWaveGlow)" />
                            </g>
                          );
                        })}

                        <g transform={`translate(450, ${topY - 16})`}>
                          <text x="0" y="0" textAnchor="middle" fill="#FBBF24" fontSize="10.5" fontFamily="JetBrains Mono" fontWeight="bold">
                            Diffracted Detour Path: ~{effectivePathLengthCm} cm
                          </text>
                        </g>
                      </g>
                    );
                  })()}
                </g>
              )}

              {/* Diameter scale measurement */}
              <line x1="280" y1="445" x2="620" y2="445" stroke="#64748B" strokeWidth="1" />
              <line x1="280" y1="440" x2="280" y2="450" stroke="#64748B" strokeWidth="1" />
              <line x1="620" y1="440" x2="620" y2="450" stroke="#64748B" strokeWidth="1" />
              <text x="450" y="460" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">
                Tested Trunk Spacing: {distanceCm} cm (Effective Path: {effectivePathLengthCm} cm)
              </text>
            </svg>
          </div>

          {/* REAL-TIME OSCILLOSCOPE SIGNAL DISPLAY */}
          <div className="p-4 sm:p-6 bg-stone-900 border-t border-stone-800">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-200">
                    Live Oscilloscope: Transmitted Pulse (T) vs Received Signal (R)
                  </span>
                </div>
                <p className="text-xs text-stone-400 mt-0.5">
                  Visualizing signal amplitude attenuation and time delay (Δt) based on active parameters.
                </p>
              </div>

              {/* Metrics Readout Badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="bg-stone-950 px-2.5 py-1 rounded border border-stone-800 text-cyan-300">
                  Wave Velocity: ~{waveVelocityMs} m/s
                </span>
                <span className="bg-stone-950 px-2.5 py-1 rounded border border-stone-800 text-amber-300">
                  Time of Flight: {timeOfFlightMs} ms
                </span>
                <span className="bg-stone-950 px-2.5 py-1 rounded border border-stone-800 text-emerald-300 font-bold">
                  Signal Strength: {receivedSignalStrength}%
                </span>
              </div>
            </div>

            {/* Oscilloscope Waveform Canvas SVG */}
            <div className="h-28 w-full bg-stone-950 rounded-lg border border-stone-800 p-2 relative overflow-hidden flex items-center">
              <svg className="w-full h-full" viewBox="0 0 800 90">
                {/* Horizontal Baseline & Time Grids */}
                <line x1="0" y1="45" x2="800" y2="45" stroke="#334155" strokeWidth="1" />
                <line x1="160" y1="0" x2="160" y2="90" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="320" y1="0" x2="320" y2="90" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="480" y1="0" x2="480" y2="90" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="640" y1="0" x2="640" y2="90" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />

                {/* Transmitted Reference Pulse (T) fixed at Left */}
                <path
                  d="M 20,45 L 50,45 Q 65,10 75,45 Q 85,80 95,45 Q 105,25 115,45 L 130,45"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  fill="none"
                />
                <text x="75" y="24" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                  T (Pulse In: 100%)
                </text>

                {/* Received Waveform (R): Position X depends on Time of Flight, Amplitude depends on Strength */}
                {(() => {
                  // Map time of flight (0.2ms - 1.2ms) to X coordinate (240px to 680px)
                  const rX = Math.min(680, Math.max(220, 160 + (timeOfFlightMs / 1.0) * 440));
                  // Scale amplitude height (max 34px, min 4px)
                  const ampHeight = Math.max(4, (receivedSignalStrength / 100) * 34);
                  const isStrong = receivedSignalStrength >= 50;

                  return (
                    <g>
                      <path
                        d={`M 130,45 L ${rX - 40},45 Q ${rX - 25},${45 - ampHeight} ${rX - 10},45 Q ${rX + 5},${45 + ampHeight} ${rX + 20},45 Q ${rX + 35},${45 - ampHeight * 0.4} ${rX + 50},45 L 800,45`}
                        stroke={isStrong ? '#34D399' : receivedSignalStrength > 20 ? '#F59E0B' : '#EF4444'}
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <text
                        x={rX + 5}
                        y={Math.max(18, 45 - ampHeight - 8)}
                        textAnchor="middle"
                        fill={isStrong ? '#34D399' : receivedSignalStrength > 20 ? '#F59E0B' : '#EF4444'}
                        fontSize="10"
                        fontFamily="JetBrains Mono"
                        fontWeight="bold"
                      >
                        R ({receivedSignalStrength}%)
                      </text>

                      {/* Transit time delta bracket */}
                      <line x1="75" y1="80" x2={rX} y2="80" stroke="#94A3B8" strokeWidth="1" />
                      <line x1="75" y1="76" x2="75" y2="84" stroke="#94A3B8" strokeWidth="1" />
                      <line x1={rX} y1="76" x2={rX} y2="84" stroke="#94A3B8" strokeWidth="1" />
                      <text x={(75 + rX) / 2} y="74" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">
                        Δt = {timeOfFlightMs} ms
                      </text>
                    </g>
                  );
                })()}
              </svg>
            </div>

            {/* LIVE PRELIMINARY TRIAGE READOUT */}
            <div className={`mt-4 p-3.5 rounded-lg border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${triage.bg}`}>
              <div className="flex items-start gap-2.5">
                {cavitySizePercent === 0 ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className={`w-4 h-4 ${triage.color} shrink-0 mt-0.5`} />
                )}
                <div>
                  <strong className={`block font-serif text-sm ${triage.color}`}>
                    {triage.label}
                  </strong>
                  <p className="text-stone-300 mt-0.5">{triage.advice}</p>
                </div>
              </div>

              <div className="shrink-0 text-right font-mono text-[11px] text-stone-400">
                <span>Effective Path Ratio: {(effectivePathLengthCm / distanceCm).toFixed(2)}×</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Physics Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-800">
          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="font-mono text-xs font-bold text-[#163828] mb-1">Principle 1</div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
              <ScientificTooltip term="Acoustic Impedance">Acoustic Impedance</ScientificTooltip> Mismatch
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Acoustic impedance Z = ρ · v. Solid timber has an impedance ~3600 times greater than air. When an ultrasonic pulse hits an internal air pocket, over 99.9% of the acoustic energy is reflected rather than transmitted across the air void.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="font-mono text-xs font-bold text-[#163828] mb-1">Principle 2</div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
              Wave Diffraction & Longer Path
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Because waves cannot pierce the central air hole, mechanical energy must diffract around the circumference through the remaining sound sapwood. This detoured path is physically longer, generating a noticeable transit time delay (<ScientificTooltip term="Time of Flight (ToF)">Time of Flight</ScientificTooltip>).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="font-mono text-xs font-bold text-[#163828] mb-1">Principle 3</div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
              Scattering in Decayed Wood
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Before an open hole forms, fungal rot softens wood into spongey material. These micro-pores scatter the ultrasonic frequencies, absorbing wave energy and causing sharp amplitude damping at the receiver (low <ScientificTooltip term="T/R ratio">T/R ratio</ScientificTooltip>).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
