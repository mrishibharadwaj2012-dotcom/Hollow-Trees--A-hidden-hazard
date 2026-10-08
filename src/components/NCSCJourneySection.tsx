import React, { useState } from 'react';
import { Calendar, CheckCircle2, FileText, Camera, BookOpen, Layers, Award } from 'lucide-react';
import { NCSC_JOURNEY_STAGES } from '../data/projectData';
import fieldSurveyImg from '../assets/images/field_survey_trees_1791437269752.jpg';
import modelPhoto from '../assets/images/experimental_model_display_1791437285365.jpg';

export const NCSCJourneySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'logbook'>('timeline');

  return (
    <section id="journey" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 15 · Science Congress Process
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Our NCSC Project Journey & Scientific Logbook
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            A chronological timeline detailing how two students transformed an everyday campus hazard observation into a structured National Children&apos;s Science Congress investigation.
          </p>
        </div>

        {/* View Switcher: Interactive Tabs */}
        <div className="flex items-center gap-2 mb-10 border-b border-stone-200 pb-3">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-[#163828] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 bg-stone-100'
            }`}
          >
            Chronological Timeline
          </button>
          <button
            onClick={() => setActiveTab('logbook')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeTab === 'logbook'
                ? 'bg-[#163828] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 bg-stone-100'
            }`}
          >
            Exhibition Documentation & Evidence
          </button>
        </div>

        {/* Content Mode 1: Timeline */}
        {activeTab === 'timeline' && (
          <div className="relative border-l-2 border-stone-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
            {NCSC_JOURNEY_STAGES.map((stage, idx) => (
              <div key={stage.stage} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#163828] flex items-center justify-center text-[#163828] text-xs font-mono font-bold shadow-2xs">
                  {idx + 1}
                </div>

                <div className="bg-[#F8F9F5] rounded-xl p-6 border border-stone-200 hover:border-stone-300 transition-colors shadow-2xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-[#8B5A2B] uppercase">
                      {stage.stage} · {stage.timeframe}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                      {stage.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content Mode 2: Exhibition Documentation & Photo Placeholders */}
        {activeTab === 'logbook' && (
          <div className="space-y-10">
            <div className="text-xs text-stone-500 font-mono">
              * Note on Academic Integrity: Photographs and documented exhibition artifacts represent genuine project steps. Missing team photos are displayed as labeled placeholders.
            </div>

            {/* Grid of Exhibition Artifacts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Photo 1: Field Survey */}
              <div className="bg-stone-50 rounded-xl overflow-hidden border border-stone-300">
                <div className="aspect-4/3 overflow-hidden bg-stone-900 relative">
                  <img src={fieldSurveyImg} alt="Field Survey" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-emerald-300 font-mono text-[10px] px-2 py-1 rounded">
                    Field Survey Documentation
                  </div>
                </div>
                <div className="p-4 text-xs">
                  <h4 className="font-serif font-bold text-stone-900 mb-1">01. Field Survey Log</h4>
                  <p className="text-stone-600">Visual inspections of mature avenue canopies at IIT Kharagpur.</p>
                </div>
              </div>

              {/* Photo 2: Static Model Display */}
              <div className="bg-stone-50 rounded-xl overflow-hidden border border-stone-300">
                <div className="aspect-4/3 overflow-hidden bg-stone-900 relative">
                  <img src={modelPhoto} alt="Experimental Model" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-emerald-300 font-mono text-[10px] px-2 py-1 rounded">
                    Static Demonstration Model
                  </div>
                </div>
                <div className="p-4 text-xs">
                  <h4 className="font-serif font-bold text-stone-900 mb-1">02. Physical Demonstration Model</h4>
                  <p className="text-stone-600">Cross-section demonstrator with transducer brackets and cavity chamber.</p>
                </div>
              </div>

              {/* Placeholder 3: Research Work */}
              <div className="bg-stone-50 rounded-xl overflow-hidden border border-dashed border-stone-300 flex flex-col justify-between">
                <div className="aspect-4/3 bg-stone-100 flex flex-col items-center justify-center p-6 text-center text-stone-400">
                  <BookOpen className="w-10 h-10 mb-2 text-stone-400" />
                  <span className="text-xs font-mono font-semibold text-stone-600">
                    [Research Work Archive]
                  </span>
                  <span className="text-[11px] text-stone-500 mt-1">
                    Literature synthesis on wood mechanics & CODIT model
                  </span>
                </div>
                <div className="p-4 text-xs border-t border-stone-200">
                  <h4 className="font-serif font-bold text-stone-900 mb-1">03. Research Documentation</h4>
                  <p className="text-stone-600">Theoretical papers and textbook references cataloged in project binder.</p>
                </div>
              </div>

              {/* Placeholder 4: Model Construction */}
              <div className="bg-stone-50 rounded-xl overflow-hidden border border-dashed border-stone-300 flex flex-col justify-between">
                <div className="aspect-4/3 bg-stone-100 flex flex-col items-center justify-center p-6 text-center text-stone-400">
                  <Layers className="w-10 h-10 mb-2 text-stone-400" />
                  <span className="text-xs font-mono font-semibold text-stone-600">
                    [Model Fabrication Stage]
                  </span>
                  <span className="text-[11px] text-stone-500 mt-1">
                    School workshop timber cutting and probe mounting
                  </span>
                </div>
                <div className="p-4 text-xs border-t border-stone-200">
                  <h4 className="font-serif font-bold text-stone-900 mb-1">04. Model Assembly Bench</h4>
                  <p className="text-stone-600">Timber fabrication bench logs and transducer bracket mounting.</p>
                </div>
              </div>

              {/* Placeholder 5: Project Chart & Logbook */}
              <div className="bg-stone-50 rounded-xl overflow-hidden border border-dashed border-stone-300 flex flex-col justify-between">
                <div className="aspect-4/3 bg-stone-100 flex flex-col items-center justify-center p-6 text-center text-stone-400">
                  <FileText className="w-10 h-10 mb-2 text-stone-400" />
                  <span className="text-xs font-mono font-semibold text-stone-600">
                    [NCSC Project Logbook & Charts]
                  </span>
                  <span className="text-[11px] text-stone-500 mt-1">
                    Handwritten student daily logbook & display posters
                  </span>
                </div>
                <div className="p-4 text-xs border-t border-stone-200">
                  <h4 className="font-serif font-bold text-stone-900 mb-1">05. Official Logbook Excerpt</h4>
                  <p className="text-stone-600">Signed teacher reviews and daily observations log sheets.</p>
                </div>
              </div>

              {/* Placeholder 6: Team Presentation */}
              <div className="bg-stone-50 rounded-xl overflow-hidden border border-dashed border-stone-300 flex flex-col justify-between">
                <div className="aspect-4/3 bg-stone-100 flex flex-col items-center justify-center p-6 text-center text-stone-400">
                  <Award className="w-10 h-10 mb-2 text-stone-400" />
                  <span className="text-xs font-mono font-semibold text-stone-600">
                    [NCSC Congress Presentation Booth]
                  </span>
                  <span className="text-[11px] text-stone-500 mt-1">
                    Exhibition presentation before district/state evaluators
                  </span>
                </div>
                <div className="p-4 text-xs border-t border-stone-200">
                  <h4 className="font-serif font-bold text-stone-900 mb-1">06. Congress Presentation</h4>
                  <p className="text-stone-600">Exhibition hall demonstration and judge defense interaction.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
