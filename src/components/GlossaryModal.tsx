import React, { useState } from 'react';
import { X, Search, BookOpen, Tag, Check, ArrowRight } from 'lucide-react';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/glossaryData';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTerm?: string | null;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose, initialTerm }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(initialTerm || null);

  if (!isOpen) return null;

  const categories = ['All', 'Acoustics', 'Biology', 'Biomechanics', 'Equipment', 'Assessment'];

  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fullDef.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-stone-300 flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-200 bg-stone-50 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#163828] text-emerald-300 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                Scientific Glossary & Terminology Index
              </h2>
              <p className="text-xs text-stone-500 font-mono">
                Concise definitions for students, teachers, judges, and arborists
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            aria-label="Close glossary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 sm:p-6 border-b border-stone-200 bg-white space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search scientific terms (e.g. 'ultrasonic waves', 'NDT', 'cavity', 'T/R ratio', 'arborist')..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#163828]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-stone-500 font-mono text-[11px] mr-1">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#163828] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terms Directory */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 divide-y divide-stone-100">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 text-stone-500 text-sm">
              No scientific terms matched &ldquo;{searchQuery}&rdquo;. Try another term.
            </div>
          ) : (
            filteredTerms.map((term) => {
              const isExpanded = expandedTerm === term.term;
              return (
                <div key={term.term} className="pt-3 first:pt-0">
                  <div
                    onClick={() => setExpandedTerm(isExpanded ? null : term.term)}
                    className="p-3.5 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer border border-transparent hover:border-stone-200"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-base font-bold text-stone-900">
                          {term.term}
                        </h3>
                        <span className="font-mono text-[10px] uppercase font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {term.category}
                        </span>
                      </div>
                      <span className="text-xs text-stone-400 font-mono">
                        {isExpanded ? 'Collapse ▴' : 'Details ▾'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {term.shortDef}
                    </p>

                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-stone-200 space-y-2 text-xs animate-in fade-in">
                        <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-stone-700 leading-relaxed">
                          <strong className="block text-stone-900 font-semibold mb-1 font-mono uppercase text-[10px] text-[#8B5A2B]">
                            Detailed Scientific Context:
                          </strong>
                          {term.fullDef}
                        </div>

                        {term.formulaOrExample && (
                          <div className="bg-stone-900 p-2.5 rounded-lg text-cyan-300 font-mono text-[11px] border border-stone-800">
                            <strong>Formula / Metric: </strong>
                            <span>{term.formulaOrExample}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
          <span>{filteredTerms.length} of {GLOSSARY_TERMS.length} Terms Shown</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#163828] text-white rounded text-xs font-semibold cursor-pointer hover:bg-[#0f281d]"
          >
            Close Glossary
          </button>
        </div>
      </div>
    </div>
  );
};
