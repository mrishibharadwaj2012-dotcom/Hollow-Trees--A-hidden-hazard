import React from 'react';
import { X, Printer, FileText, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import { PROJECT_METADATA, CORE_OBJECTIVES, METHODOLOGY_STEPS, LIMITATIONS_LIST } from '../data/projectData';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-300 relative flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#163828] text-white flex items-center justify-center font-bold font-mono text-xs">
              NCSC
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-900 leading-tight">
                Official NCSC Project Executive Summary
              </h3>
              <p className="text-xs text-stone-500 font-mono">
                National Children&apos;s Science Congress · Research Dossier
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Brief</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-stone-200 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Project Document Content */}
        <div className="p-6 sm:p-8 space-y-8 text-stone-800 text-xs sm:text-sm">
          {/* Header Block */}
          <div className="border-b border-stone-200 pb-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#8B5A2B] font-bold mb-1">
              Project Title
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
              {PROJECT_METADATA.title}
            </h1>
            <p className="text-stone-600 mt-2 font-serif italic">
              {PROJECT_METADATA.subtitle}
            </p>
          </div>

          {/* Core Aim */}
          <div className="bg-[#EAEFE8] p-4 rounded-lg border border-[#C5D5C2]">
            <strong className="block font-mono text-xs text-[#163828] uppercase mb-1">
              Scientific Aim
            </strong>
            <p className="font-serif text-sm font-semibold text-stone-900">
              “{PROJECT_METADATA.aim}”
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-3 border-b border-stone-100 pb-1">
              Research Objectives
            </h4>
            <div className="space-y-2">
              {CORE_OBJECTIVES.map((obj) => (
                <div key={obj.number} className="flex items-start gap-2">
                  <span className="font-mono font-bold text-[#163828] shrink-0">{obj.number}.</span>
                  <div>
                    <strong>{obj.title}: </strong>
                    <span className="text-stone-600">{obj.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Field Survey & Acoustic Principle Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
              <h5 className="font-serif font-bold text-stone-900 mb-2">Field Observation Summary</h5>
              <p className="text-stone-600 leading-relaxed text-xs">
                Observed mature avenue trees across IIT Kharagpur campus. Key observation:
                <em className="block my-1 text-stone-800 font-medium">“{PROJECT_METADATA.keyObservation}”</em>
                Highlighted the need for non-invasive depth testing rather than solely visual exterior checks.
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
              <h5 className="font-serif font-bold text-stone-900 mb-2">Ultrasonic Working Principle</h5>
              <p className="text-stone-600 leading-relaxed text-xs">
                High-frequency mechanical waves travel across wood fibers. Cavities reflect acoustic waves due to impedance mismatch, forcing waves to diffract around the void. Received signals exhibit measurable amplitude attenuation and time delay.
              </p>
            </div>
          </div>

          {/* Protocol Flowchart */}
          <div>
            <h4 className="font-serif text-base font-bold text-stone-900 mb-3 border-b border-stone-100 pb-1">
              Methodology Flowchart
            </h4>
            <div className="p-3 bg-stone-50 rounded border border-stone-200 font-mono text-xs text-stone-700 flex flex-wrap gap-2 items-center">
              {METHODOLOGY_STEPS.map((s, idx) => (
                <span key={s.step} className="inline-flex items-center gap-1.5">
                  <span className="font-bold text-stone-900">{s.title}</span>
                  {idx < METHODOLOGY_STEPS.length - 1 && <span className="text-stone-400">→</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Limitations and Conclusion */}
          <div className="border-t border-stone-200 pt-6">
            <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
              Conclusion & Limitations
            </h4>
            <p className="font-serif text-sm text-stone-800 italic leading-relaxed mb-4">
              “{PROJECT_METADATA.conclusion}”
            </p>
            <div className="text-xs text-stone-500 font-mono">
              Static benchtop model created for demonstration purposes; requires certified arborist validation before any urban tree felling.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
          <span>NCSC Project Dossier</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-stone-800 text-white font-semibold cursor-pointer hover:bg-stone-700"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
