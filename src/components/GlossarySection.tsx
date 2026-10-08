import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, CheckCircle2, Tag } from 'lucide-react';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/glossaryData';

interface GlossarySectionProps {
  onOpenModal: (term?: string) => void;
}

export const GlossarySection: React.FC<GlossarySectionProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const categories = ['All', 'Acoustics', 'Biology', 'Biomechanics', 'Equipment', 'Assessment'];

  const displayedTerms = GLOSSARY_TERMS.filter((t) => {
    const matchesCat = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch =
      t.term.toLowerCase().includes(searchFilter.toLowerCase()) ||
      t.shortDef.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="glossary" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 18 · Scientific Lexicon
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Glossary of Scientific Terms
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            Clear, accessible scientific definitions of foundational acoustic and botanical concepts—tailored for students, teachers, judges, and citizens.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-[#F8F9F5] rounded-xl border border-stone-300 p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Quick Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search terms (e.g. 'ultrasonic waves', 'NDT', 'arborist')..."
              className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#163828]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#163828] text-white shadow-2xs'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedTerms.map((item) => (
            <div
              key={item.term}
              className="bg-[#F9FAF7] rounded-xl border border-stone-200 p-5 hover:border-stone-400 transition-all shadow-2xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">NCSC Lexicon</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-[#163828] transition-colors">
                  {item.term}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {item.shortDef}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                <button
                  onClick={() => onOpenModal(item.term)}
                  className="text-emerald-800 hover:text-emerald-950 font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Full Scientific Context</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="p-4 rounded-lg bg-stone-100 border border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
          <span>Explore all 14 official glossary definitions in our dedicated research index.</span>
          <button
            onClick={() => onOpenModal()}
            className="px-4 py-2 bg-[#163828] text-white rounded-md font-semibold hover:bg-[#0f281d] transition-colors cursor-pointer"
          >
            Open Full Glossary Directory
          </button>
        </div>
      </div>
    </section>
  );
};
