import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  iconOnly?: boolean;
}

/**
 * Pure SVG vector logo for the 'Assessment of Internal Trunk Cavities in Trees' project.
 * Uses the project's color palette:
 * - Deep Green (#163828, #0F291E)
 * - Earthy Timber Brown (#8B5A2B, #D4A373)
 * - Acoustic Electric Cyan / Blue (#38BDF8, #0284C7)
 * - Living Cambium Emerald (#34D399)
 */
export const TreeCavitySvgLogo: React.FC<{ sizeClass?: string; className?: string }> = ({
  sizeClass = 'w-10 h-10',
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClass} ${className} shrink-0 select-none transition-transform duration-300 hover:scale-105`}
      aria-label="Tree Cavity NDT Ultrasonic Project Logo"
    >
      <defs>
        {/* Background Radial Gradient */}
        <radialGradient id="treeBarkGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E4D37" />
          <stop offset="70%" stopColor="#163828" />
          <stop offset="100%" stopColor="#0D2419" />
        </radialGradient>

        {/* Cavity Inner Gradient */}
        <radialGradient id="cavityInnerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#050C08" />
          <stop offset="80%" stopColor="#141E18" />
          <stop offset="100%" stopColor="#2A211B" />
        </radialGradient>

        {/* Glow Filter for Acoustic Wave Arcs */}
        <filter id="acousticGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Trunk Cross-Section Disc */}
      <circle
        cx="32"
        cy="32"
        r="29"
        fill="url(#treeBarkGrad)"
        stroke="#163828"
        strokeWidth="2"
      />

      {/* Cambium & Sapwood Outer Boundary */}
      <circle
        cx="32"
        cy="32"
        r="26.5"
        stroke="#D4A373"
        strokeWidth="1.25"
        strokeOpacity="0.45"
      />

      {/* Concentric Annual Growth Rings */}
      <circle
        cx="32"
        cy="32"
        r="21.5"
        stroke="#D4A373"
        strokeWidth="0.8"
        strokeOpacity="0.3"
        strokeDasharray="4 2"
      />
      <circle
        cx="32"
        cy="32"
        r="16.5"
        stroke="#D4A373"
        strokeWidth="0.75"
        strokeOpacity="0.25"
      />

      {/* Internal Heartwood Cavity (Subtle Organic Cutaway) */}
      <path
        d="M 32 22 C 37 22, 40.5 25.5, 39.5 31.5 C 38.5 37.5, 34.5 41, 30.5 40 C 26 39, 24 35, 25 29 C 26 24, 28.5 22, 32 22 Z"
        fill="url(#cavityInnerGrad)"
        stroke="#8B5A2B"
        strokeWidth="1.5"
        strokeDasharray="2.5 1.5"
      />

      {/* Central Air Void Core */}
      <circle
        cx="32"
        cy="31.5"
        r="4.2"
        fill="#040806"
        stroke="#EF4444"
        strokeWidth="1"
        strokeOpacity="0.85"
      />

      {/* ULTRASONIC ACOUSTIC WAVE PROPAGATION ARCS */}
      {/* Wave Arc 1 (Emitted from Left Transmitter T) */}
      <path
        d="M 14 23.5 A 13 13 0 0 1 14 40.5"
        stroke="#38BDF8"
        strokeWidth="1.75"
        strokeLinecap="round"
        filter="url(#acousticGlow)"
      />

      {/* Wave Arc 2 (Propagating through outer sapwood) */}
      <path
        d="M 20 18 A 20 20 0 0 1 20 46"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />

      {/* Wave Arc 3 (Diffracting around cavity towards Right Receiver R) */}
      <path
        d="M 44 18 A 20 20 0 0 1 44 46"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />

      {/* Wave Arc 4 (Arriving at Receiver R) */}
      <path
        d="M 50 23.5 A 13 13 0 0 1 50 40.5"
        stroke="#34D399"
        strokeWidth="1.75"
        strokeLinecap="round"
        filter="url(#acousticGlow)"
      />

      {/* Transmitter Probe Marker (T) at 9 o'clock */}
      <g transform="translate(7.5, 32)">
        <rect x="-3" y="-3.5" width="4" height="7" rx="1" fill="#0284C7" stroke="#38BDF8" strokeWidth="0.8" />
        <circle cx="2" cy="0" r="1.5" fill="#38BDF8" />
      </g>

      {/* Receiver Probe Marker (R) at 3 o'clock */}
      <g transform="translate(56.5, 32)">
        <rect x="-1" y="-3.5" width="4" height="7" rx="1" fill="#047857" stroke="#34D399" strokeWidth="0.8" />
        <circle cx="-2" cy="0" r="1.5" fill="#34D399" />
      </g>

      {/* Living Foliage Sprout Accent at Crown (Symbolizing Living Tree Conservation) */}
      <g transform="translate(32, 4)">
        <path
          d="M 0 0 C 4.5 -1.5, 7.5 2.5, 6 6.5 C 1.5 6.5, -2 3.5, 0 0 Z"
          fill="#34D399"
          stroke="#163828"
          strokeWidth="0.75"
        />
        <path
          d="M 0 0 Q 3 3 6 6.5"
          stroke="#163828"
          strokeWidth="0.6"
          fill="none"
        />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  iconOnly = false,
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Minimalist Vector SVG Emblem */}
      <TreeCavitySvgLogo sizeClass={sizeMap[size]} />

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="font-serif font-bold text-stone-900 leading-tight flex items-center gap-1.5">
            <span className="text-sm sm:text-base tracking-tight">Tree Cavity NDT</span>
            <span className="font-mono text-[9px] uppercase font-bold text-emerald-900 bg-emerald-100/90 px-1.5 py-0.5 rounded border border-emerald-200">
              NCSC
            </span>
          </div>
          {showSubtitle && (
            <div className="text-[11px] text-stone-600 font-medium tracking-normal flex items-center gap-1 mt-0.5">
              <span>Nilesh Patra & Rishi Bharadwaj</span>
              <span className="text-stone-300">·</span>
              <span className="text-[#8B5A2B] font-mono text-[10px]">IIT KGP Study</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
