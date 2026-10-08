import React from 'react';
import logoImg from '../assets/images/ncsc_tree_ndt_logo_1791438491138.jpg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtitle = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-fidelity Logo Emblem with Fallback Vector Accent */}
      <div className={`relative ${sizeClasses[size]} rounded-lg overflow-hidden border border-emerald-800/40 shadow-xs bg-[#163828] shrink-0 group`}>
        <img
          src={logoImg}
          alt="NCSC Tree Ultrasonic Cavity NDT Project Logo"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Subtle acoustic pulse ring */}
        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 pointer-events-none" />
      </div>

      <div>
        <div className="font-serif font-bold text-stone-900 leading-tight flex items-center gap-1.5">
          <span className="text-base sm:text-lg">Tree NDT Assessment</span>
          <span className="font-mono text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100/80 px-1.5 py-0.2 rounded">
            NCSC
          </span>
        </div>
        {showSubtitle && (
          <div className="text-[11px] text-stone-600 font-medium tracking-normal flex items-center gap-1">
            <span>By Nilesh Patra & Rishi Bharadwaj</span>
            <span className="text-stone-300">·</span>
            <span className="text-[#8B5A2B] font-mono text-[10px]">IIT KGP Study</span>
          </div>
        )}
      </div>
    </div>
  );
};
