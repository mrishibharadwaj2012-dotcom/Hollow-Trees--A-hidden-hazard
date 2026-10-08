import React, { useState, useEffect } from 'react';
import { Radio, Activity, Play, Pause, RotateCcw, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ScientificPrincipleSection: React.FC = () => {
  const [trunkCondition, setTrunkCondition] = useState<'healthy' | 'cavity'>('cavity');
  const [isWaveRunning, setIsWaveRunning] = useState<boolean>(true);
  const [wavePhase, setWavePhase] = useState<number>(0);
  const [probeAngle, setProbeAngle] = useState<'diameter' | 'chord'>('diameter');

  // Animation ticker for wave pulses
  useEffect(() => {
    if (!isWaveRunning) return;
    const interval = setInterval(() => {
      setWavePhase((prev) => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, [isWaveRunning]);

  return (
    <section id="scientific-principle" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 05 · The Core Physics
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            How Can Ultrasonic Waves Reveal What We Cannot See?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            An ultrasonic transmitter sends high-frequency mechanical waves through the tree trunk. The waves travel through the wood and are received by a receiver placed at another point on the trunk. Internal cavities, decay and changes in wood structure alter the transmission of these waves.
          </p>
        </div>

        {/* Large Animated Scientific Diagram Card */}
        <div className="rounded-2xl border-2 border-stone-300 bg-stone-950 text-white overflow-hidden shadow-xl mb-12">
          {/* Top Control Bar */}
          <div className="p-4 sm:p-5 bg-stone-900/90 border-b border-stone-800 flex flex-wrap items-center justify-between gap-4">
            {/* Flow Banner */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-cyan-400 font-bold">TRANSMITTER (T)</span>
              <span className="text-stone-500">→</span>
              <span className="text-sky-300 font-bold">ULTRASONIC WAVES</span>
              <span className="text-stone-500">→</span>
              <span className="text-amber-300 font-bold">TREE TRUNK</span>
              <span className="text-stone-500">→</span>
              <span className="text-emerald-400 font-bold">RECEIVER (R)</span>
            </div>

            {/* Interactive Toggle Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center bg-stone-800 p-1 rounded-lg border border-stone-700 text-xs font-medium">
                <button
                  onClick={() => setTrunkCondition('healthy')}
                  className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                    trunkCondition === 'healthy'
                      ? 'bg-emerald-600 text-white font-bold shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Healthy Sound Wood
                </button>
                <button
                  onClick={() => setTrunkCondition('cavity')}
                  className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                    trunkCondition === 'cavity'
                      ? 'bg-amber-600 text-white font-bold shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Internal Cavity & Decay
                </button>
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsWaveRunning(!isWaveRunning)}
                className="p-1.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 cursor-pointer"
                aria-label={isWaveRunning ? 'Pause wave simulation' : 'Start wave simulation'}
              >
                {isWaveRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
              </button>
            </div>
          </div>

          {/* Animated Interactive SVG Diagram */}
          <div className="relative p-4 sm:p-8 bg-[#0D1311] overflow-hidden min-h-[460px] flex items-center justify-center">
            {/* Background Grid Pattern */}
            <svg className="w-full h-[400px] sm:h-[460px]" viewBox="0 0 900 460">
              <defs>
                {/* Wood Ring Gradient */}
                <radialGradient id="healthyWood" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8A5A36" />
                  <stop offset="60%" stopColor="#A87349" />
                  <stop offset="85%" stopColor="#D4A373" />
                  <stop offset="100%" stopColor="#3E2718" />
                </radialGradient>

                {/* Cavity Wood Gradient */}
                <radialGradient id="decayWood" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0B0907" />
                  <stop offset="28%" stopColor="#1E1610" />
                  <stop offset="55%" stopColor="#5C3B24" />
                  <stop offset="85%" stopColor="#D4A373" />
                  <stop offset="100%" stopColor="#3E2718" />
                </radialGradient>

                {/* Ultrasonic Wave Pulse Glow */}
                <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Central Tree Trunk Cross-Section Circle */}
              <g transform="translate(450, 230)">
                {/* Outer Bark Rim */}
                <circle
                  cx="0"
                  cy="0"
                  r="170"
                  fill={trunkCondition === 'healthy' ? 'url(#healthyWood)' : 'url(#decayWood)'}
                  stroke="#2E1C12"
                  strokeWidth="12"
                />

                {/* Growth Rings */}
                <circle cx="0" cy="0" r="140" fill="none" stroke="#7A4A28" strokeWidth="1" opacity="0.4" />
                <circle cx="0" cy="0" r="110" fill="none" stroke="#7A4A28" strokeWidth="1" opacity="0.4" />
                <circle cx="0" cy="0" r="80" fill="none" stroke="#7A4A28" strokeWidth="1" opacity="0.4" />
                <circle cx="0" cy="0" r="50" fill="none" stroke="#7A4A28" strokeWidth="1" opacity="0.4" />

                {/* IF CAVITY: Show Internal Cavity & Decayed Wood Region */}
                {trunkCondition === 'cavity' && (
                  <g>
                    {/* Decayed/Affected Wood Zone */}
                    <ellipse
                      cx="0"
                      cy="0"
                      rx="82"
                      ry="72"
                      fill="#3D291D"
                      stroke="#854D0E"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      opacity="0.85"
                    />

                    {/* The Hollow Internal Cavity Void */}
                    <path
                      d="M -45,-30 C -20,-55 30,-50 48,-20 C 65,10 50,45 20,55 C -15,65 -50,40 -55,10 C -60,-10 -55,-20 -45,-30 Z"
                      fill="#0A0806"
                      stroke="#EF4444"
                      strokeWidth="2.5"
                    />

                    {/* Cavity Air Void Text Label */}
                    <text
                      x="0"
                      y="-4"
                      textAnchor="middle"
                      fill="#F87171"
                      fontSize="11"
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
                      fontSize="9"
                      fontFamily="sans-serif"
                    >
                      (Air Void · High Impedance Mismatch)
                    </text>

                    {/* Decayed Wood Annotation */}
                    <text
                      x="0"
                      y="92"
                      textAnchor="middle"
                      fill="#FDE047"
                      fontSize="10"
                      fontFamily="sans-serif"
                      fontWeight="bold"
                    >
                      Decayed / Affected Wood Zone
                    </text>
                  </g>
                )}

                {/* IF HEALTHY: Show Sound Wood Text Label */}
                {trunkCondition === 'healthy' && (
                  <g>
                    <circle cx="0" cy="0" r="40" fill="#784524" opacity="0.5" />
                    <text
                      x="0"
                      y="4"
                      textAnchor="middle"
                      fill="#E0E7FF"
                      fontSize="12"
                      fontFamily="JetBrains Mono"
                      fontWeight="bold"
                    >
                      SOUND WOOD
                    </text>
                    <text
                      x="0"
                      y="20"
                      textAnchor="middle"
                      fill="#C7D2FE"
                      fontSize="9"
                      fontFamily="sans-serif"
                    >
                      Intact Continuum (Fast Path)
                    </text>
                  </g>
                )}

                {/* Remaining Sound Wood Outer Label */}
                <text
                  x="0"
                  y="-145"
                  textAnchor="middle"
                  fill="#E5E7EB"
                  fontSize="11"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  Sound Wood Outer Shell (Sapwood)
                </text>
              </g>

              {/* TRANSMITTER (T) on Left */}
              <g transform="translate(180, 230)">
                {/* Mount probe bracket */}
                <rect x="-35" y="-28" width="40" height="56" rx="4" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                <rect x="5" y="-12" width="12" height="24" fill="#0369A1" />
                <circle cx="-15" cy="0" r="8" fill="#38BDF8" />
                <text x="-15" y="4" textAnchor="middle" fill="#042F2E" fontSize="11" fontWeight="bold">T</text>
                
                {/* Label above */}
                <text x="-15" y="-38" textAnchor="middle" fill="#38BDF8" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                  TRANSMITTER
                </text>
                <text x="-15" y="-52" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="sans-serif">
                  T = Transmitted Signal
                </text>

                {/* Wave Direction Arrow From Probe */}
                <line x1="20" y1="0" x2="80" y2="0" stroke="#38BDF8" strokeWidth="2" />
                <polygon points="80,0 72,-4 72,4" fill="#38BDF8" />
              </g>

              {/* RECEIVER (R) on Right */}
              <g transform="translate(720, 230)">
                {/* Mount probe bracket */}
                <rect x="-5" y="-28" width="40" height="56" rx="4" fill="#059669" stroke="#34D399" strokeWidth="2" />
                <rect x="-17" y="-12" width="12" height="24" fill="#047857" />
                <circle cx="15" cy="0" r="8" fill="#34D399" />
                <text x="15" y="4" textAnchor="middle" fill="#042F2E" fontSize="11" fontWeight="bold">R</text>

                {/* Label above */}
                <text x="15" y="-38" textAnchor="middle" fill="#34D399" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                  RECEIVER
                </text>
                <text x="15" y="-52" textAnchor="middle" fill="#A7F3D0" fontSize="10" fontFamily="sans-serif">
                  R = Received Signal
                </text>

                {/* Wave Arrival Arrow Into Probe */}
                <line x1="-80" y1="0" x2="-20" y2="0" stroke="#34D399" strokeWidth="2" />
                <polygon points="-20,0 -28,-4 -28,4" fill="#34D399" />
              </g>

              {/* ANIMATED ULTRASONIC WAVE PULSES & PATHS */}
              {trunkCondition === 'healthy' ? (
                /* HEALTHY PATH: Direct straight wave fronts through solid wood */
                <g>
                  {/* Direct Path Centerline */}
                  <line
                    x1="280"
                    y1="230"
                    x2="620"
                    y2="230"
                    stroke="#38BDF8"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />

                  {/* Multiple Wavefront Arcs Propagating Rightwards */}
                  {[0, 25, 50, 75].map((offset) => {
                    const currentPos = ((wavePhase + offset) % 100) / 100;
                    const xCoord = 275 + currentPos * 345;
                    const alpha = Math.sin(currentPos * Math.PI);
                    return (
                      <g key={offset} opacity={alpha}>
                        <path
                          d={`M ${xCoord - 15},170 Q ${xCoord + 15},230 ${xCoord - 15},290`}
                          stroke="#38BDF8"
                          strokeWidth="3.5"
                          fill="none"
                          filter="url(#waveGlow)"
                        />
                      </g>
                    );
                  })}

                  {/* Straight Wave Vector Arrows */}
                  <g transform="translate(450, 195)">
                    <text x="0" y="-10" textAnchor="middle" fill="#38BDF8" fontSize="11" fontFamily="JetBrains Mono">
                      Direct High-Speed Wave Propagation (~1500 m/s)
                    </text>
                    <line x1="-80" y1="5" x2="80" y2="5" stroke="#38BDF8" strokeWidth="2" />
                    <polygon points="80,5 72,1 72,9" fill="#38BDF8" />
                  </g>
                </g>
              ) : (
                /* CAVITY PATH: Diffracted Wavefronts Bending Around Top and Bottom Shell */
                <g>
                  {/* Blocked Direct Path (Red dashed X) */}
                  <line
                    x1="280"
                    y1="230"
                    x2="620"
                    y2="230"
                    stroke="#EF4444"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    opacity="0.5"
                  />
                  <circle cx="450" cy="230" r="16" fill="#EF4444" opacity="0.2" />
                  <text x="450" y="235" textAnchor="middle" fill="#EF4444" fontSize="14" fontWeight="bold">✕</text>
                  <text x="450" y="260" textAnchor="middle" fill="#FCA5A5" fontSize="9.5" fontFamily="sans-serif">
                    Blocked direct path (Cavity attenuation)
                  </text>

                  {/* Top Detour Curved Wave Path */}
                  <path
                    d="M 280,230 Q 450,90 620,230"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                    fill="none"
                  />

                  {/* Bottom Detour Curved Wave Path */}
                  <path
                    d="M 280,230 Q 450,370 620,230"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                    fill="none"
                  />

                  {/* Dynamic wave particles traveling along the detour paths */}
                  {[0, 33, 66].map((offset) => {
                    const t = ((wavePhase + offset) % 100) / 100;
                    // Top quadratic bezier point
                    const xTop = (1 - t) * (1 - t) * 280 + 2 * (1 - t) * t * 450 + t * t * 620;
                    const yTop = (1 - t) * (1 - t) * 230 + 2 * (1 - t) * t * 90 + t * t * 230;

                    // Bottom quadratic bezier point
                    const xBot = (1 - t) * (1 - t) * 280 + 2 * (1 - t) * t * 450 + t * t * 620;
                    const yBot = (1 - t) * (1 - t) * 230 + 2 * (1 - t) * t * 370 + t * t * 230;

                    return (
                      <g key={offset}>
                        <circle cx={xTop} cy={yTop} r="5" fill="#F59E0B" filter="url(#waveGlow)" />
                        <circle cx={xBot} cy={yBot} r="5" fill="#F59E0B" filter="url(#waveGlow)" />
                      </g>
                    );
                  })}

                  {/* Detour Wave Direction Annotation */}
                  <g transform="translate(450, 75)">
                    <text x="0" y="0" textAnchor="middle" fill="#FBBF24" fontSize="10.5" fontFamily="JetBrains Mono" fontWeight="bold">
                      Diffracted Wave Detour Path (Extended Time Delay)
                    </text>
                  </g>
                </g>
              )}

              {/* Outer Dimension Callout */}
              <line x1="280" y1="425" x2="620" y2="425" stroke="#94A3B8" strokeWidth="1" />
              <line x1="280" y1="420" x2="280" y2="430" stroke="#94A3B8" strokeWidth="1" />
              <line x1="620" y1="420" x2="620" y2="430" stroke="#94A3B8" strokeWidth="1" />
              <text x="450" y="440" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">
                Trunk Diameter (D) Tested Under Acoustic Stress
              </text>
            </svg>
          </div>

          {/* Real-Time Signal Waveform Oscillogram (T vs R) */}
          <div className="p-4 sm:p-6 bg-stone-900 border-t border-stone-800">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-300">
                    Signal Oscillogram Display: Transmitted (T) vs Received (R) Waveform
                  </span>
                </div>
                <div className="text-xs text-stone-400 mt-1">
                  Comparing baseline excitation voltage (T) with acoustic output voltage (R) received at opposite probe.
                </div>
              </div>

              {/* Key Indicators */}
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  T = Transmitted Signal
                </span>
                <span className={`flex items-center gap-1.5 ${trunkCondition === 'healthy' ? 'text-emerald-300' : 'text-amber-400'}`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${trunkCondition === 'healthy' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                  R = Received Signal
                </span>
              </div>
            </div>

            {/* Waveform Canvas SVG */}
            <div className="h-28 w-full bg-stone-950 rounded-lg border border-stone-800 p-2 relative overflow-hidden flex items-center">
              <svg className="w-full h-full" viewBox="0 0 800 90">
                {/* Horizontal Baseline */}
                <line x1="0" y1="45" x2="800" y2="45" stroke="#334155" strokeWidth="1" />
                <line x1="200" y1="0" x2="200" y2="90" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="400" y1="0" x2="400" y2="90" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="600" y1="0" x2="600" y2="90" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />

                {/* Transmitted Pulse (T) at Time 0 (around x = 60 to 140) */}
                <path
                  d="M 30,45 L 60,45 Q 75,10 85,45 Q 95,80 105,45 Q 115,25 125,45 L 140,45"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  fill="none"
                />
                <text x="85" y="25" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                  T (Pulse In)
                </text>

                {/* Received Waveform (R) */}
                {trunkCondition === 'healthy' ? (
                  /* Healthy: Rapid arrival (x = 340), high amplitude */
                  <g>
                    <path
                      d="M 140,45 L 320,45 Q 340,15 355,45 Q 370,75 385,45 Q 400,30 415,45 Q 430,60 445,45 L 800,45"
                      stroke="#34D399"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <text x="370" y="25" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                      R (Fast Arrival, Strong Amplitude)
                    </text>
                    {/* Time delta annotation */}
                    <line x1="85" y1="80" x2="355" y2="80" stroke="#94A3B8" strokeWidth="1" />
                    <text x="220" y="75" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">
                      Δt = Normal Transit Time (~0.25 ms)
                    </text>
                  </g>
                ) : (
                  /* Cavity: Delayed arrival (x = 520), heavily damped amplitude */
                  <g>
                    <path
                      d="M 140,45 L 500,45 Q 520,35 535,45 Q 550,55 565,45 Q 580,38 595,45 L 800,45"
                      stroke="#F59E0B"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <text x="550" y="25" textAnchor="middle" fill="#F59E0B" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                      R (Delayed, Attenuated Amplitude)
                    </text>
                    {/* Time delta annotation */}
                    <line x1="85" y1="80" x2="535" y2="80" stroke="#F59E0B" strokeWidth="1" />
                    <text x="310" y="75" textAnchor="middle" fill="#F59E0B" fontSize="9" fontFamily="JetBrains Mono">
                      Δt = Extended Transit Delay (Diffracted around Void)
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Diagnostic Interpretation Banner */}
            <div className="mt-4 p-3 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {trunkCondition === 'healthy' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                )}
                <span className="text-stone-300">
                  {trunkCondition === 'healthy'
                    ? 'Healthy Continuum: High transmission efficiency. Wave travels straight across radial diameter with minimal attenuation.'
                    : 'Discontinuity Detected: Air cavity cannot support shear/pressure wave transfer directly. Signal is forced around the rim, causing energy loss.'}
                </span>
              </div>
              <span className="font-mono text-stone-400 shrink-0 hidden sm:inline">
                {trunkCondition === 'healthy' ? 'T/R Ratio: High' : 'T/R Ratio: Marked Attenuation'}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Physics Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-800">
          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="font-mono text-xs font-bold text-[#163828] mb-1">Principle 1</div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
              Acoustic Impedance Mismatch
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Acoustic impedance Z = ρ · v. Solid timber has an impedance ~3600 times greater than air. When an ultrasonic pulse hits an internal air pocket, over 99.9% of the acoustic energy is reflected rather than transmitted across the air cavity.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="font-mono text-xs font-bold text-[#163828] mb-1">Principle 2</div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
              Wave Diffraction & Longer Path
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Because waves cannot pierce the central air hole, mechanical energy must diffract around the circumference through the remaining sound sapwood. This detoured path is physically longer, generating a noticeable transit time delay (Δt).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="font-mono text-xs font-bold text-[#163828] mb-1">Principle 3</div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
              Scattering in Decayed Wood
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Before an open hole forms, fungal rot softens wood into spongey cubical or fibrous material. These micro-pores scatter the ultrasonic frequencies, absorbing wave energy and causing sharp amplitude damping at the receiver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
