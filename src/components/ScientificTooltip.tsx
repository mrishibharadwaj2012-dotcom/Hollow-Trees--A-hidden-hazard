import React, { useState } from 'react';
import { HelpCircle, Info } from 'lucide-react';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/glossaryData';

interface ScientificTooltipProps {
  term: string;
  children?: React.ReactNode;
  onOpenGlossary?: (termKey: string) => void;
}

export const ScientificTooltip: React.FC<ScientificTooltipProps> = ({ term, children, onOpenGlossary }) => {
  const [isVisible, setIsVisible] = useState(false);

  const matchedTerm = GLOSSARY_TERMS.find(
    (item) => item.term.toLowerCase() === term.toLowerCase()
  );

  if (!matchedTerm) {
    return <span>{children || term}</span>;
  }

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <button
        type="button"
        onClick={() => {
          if (onOpenGlossary) onOpenGlossary(matchedTerm.term);
          else setIsVisible(!isVisible);
        }}
        className="inline-flex items-center gap-0.5 text-inherit border-b border-dotted border-emerald-700 font-medium hover:text-emerald-800 transition-colors cursor-help"
        aria-label={`View definition for ${matchedTerm.term}`}
      >
        <span>{children || matchedTerm.term}</span>
        <span className="text-[10px] text-emerald-700/80 font-mono font-bold">ⓘ</span>
      </button>

      {/* Popover Card */}
      {isVisible && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 sm:w-80 p-3.5 bg-stone-900 text-stone-100 rounded-lg shadow-xl text-left z-50 text-xs border border-stone-700 animate-in fade-in zoom-in-95 pointer-events-auto">
          <div className="flex items-center justify-between border-b border-stone-700 pb-1.5 mb-2">
            <span className="font-serif font-bold text-emerald-300 text-xs">
              {matchedTerm.term}
            </span>
            <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-stone-800 text-stone-400">
              {matchedTerm.category}
            </span>
          </div>

          <p className="text-[11px] leading-relaxed text-stone-300 mb-2">
            {matchedTerm.shortDef}
          </p>

          {matchedTerm.formulaOrExample && (
            <div className="bg-stone-950 p-1.5 rounded font-mono text-[10px] text-cyan-300 border border-stone-800 mb-2">
              {matchedTerm.formulaOrExample}
            </div>
          )}

          {onOpenGlossary && (
            <div className="pt-1 text-right">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenGlossary(matchedTerm.term);
                  setIsVisible(false);
                }}
                className="text-[10px] text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer underline"
              >
                Open Full Glossary Entry →
              </button>
            </div>
          )}

          {/* Tooltip downward triangle pointer */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-stone-900" />
        </div>
      )}
    </span>
  );
};
