import React, { useState } from 'react';
import { Layers, Radio, Tag, Info, CheckCircle2, Sliders } from 'lucide-react';
import modelPhoto from '../assets/images/experimental_model_display_1791437285365.jpg';

export const ExperimentalModelSection: React.FC = () => {
  const [activeCallout, setActiveCallout] = useState<string>('cavity');

  const callouts = [
    {
      id: 'trunk',
      name: 'Tree Trunk Model',
      tag: 'Component 01',
      desc: 'Cylindrical timber cross-section representing the radial geometry and growth rings of a mature tree trunk.',
      physicsNote: 'Simulates the natural sapwood and heartwood acoustic boundary in a bench-scale demonstrator.',
    },
    {
      id: 'cavity',
      name: 'Internal Cavity',
      tag: 'Component 02',
      desc: 'A central hollow cutout representing a decayed, air-filled heart rot chamber.',
      physicsNote: 'Represents the boundary of zero shear transfer and extreme acoustic impedance mismatch.',
    },
    {
      id: 'soundwood',
      name: 'Remaining Sound Wood',
      tag: 'Component 03',
      desc: 'The outer structural ring of intact wood fibers carrying compressive and bending wind stresses.',
      physicsNote: 'Corresponds to the residual wall thickness parameter (t) in tree biomechanics literature.',
    },
    {
      id: 'transmitter',
      name: 'Ultrasonic Transmitter (T)',
      tag: 'Component 04',
      desc: 'Piezoelectric sensor mount fixed at the 0° reference position, symbolizing the emission of mechanical compression pulses.',
      physicsNote: 'Sends high-frequency acoustic waves into the timber perimeter.',
    },
    {
      id: 'receiver',
      name: 'Ultrasonic Receiver (R)',
      tag: 'Component 05',
      desc: 'Receiving transducer mount positioned at the opposite 180° radial coordinate to detect wave arrival.',
      physicsNote: 'Measures signal travel duration and attenuated amplitude after traversing the stem.',
    },
    {
      id: 'wavepath',
      name: 'Direction of Wave Movement',
      tag: 'Component 06',
      desc: 'Visual vector guides illustrating how acoustic wave fronts are forced to detour around the central hollow space.',
      physicsNote: 'Demonstrates wave diffraction along the curved perimeter of the sound wood wall.',
    },
  ];

  const currentCallout = callouts.find((c) => c.id === activeCallout) || callouts[0];

  return (
    <section id="model" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 07 · Demonstration Hardware
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Our Static Experimental Model
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            To demonstrate the underlying physics of ultrasonic wave detour around internal defects, we constructed a static benchtop exhibition model for the National Children&apos;s Science Congress.
          </p>
        </div>

        {/* Clear Mandatory Scientific Disclaimer Banner */}
        <div className="p-5 rounded-xl bg-stone-100 border border-stone-300 text-stone-900 mb-12 flex items-start gap-3.5 max-w-4xl">
          <Info className="w-5 h-5 text-[#163828] shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-mono font-bold text-[#163828] uppercase tracking-wider mb-1">
              Important Exhibition Model Notice
            </div>
            <p className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-snug">
              “Our model is a static demonstration designed to represent the working principle of ultrasonic testing. It does not produce live measurements.”
            </p>
            <p className="text-xs text-stone-600 mt-1">
              It serves as an educational and explanatory apparatus to communicate ultrasonic propagation mechanics to judges, arborists, and students without misrepresenting it as an automated sensor rig.
            </p>
          </div>
        </div>

        {/* Split Hardware Exhibition Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Physical Model Display Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-stone-300 bg-stone-900 shadow-sm sticky top-24">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={modelPhoto}
                  alt="Student science congress physical exhibition model of a tree trunk cross section with acoustic transducer mounts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-emerald-300 border border-white/10">
                  NCSC Exhibition Hardware Model
                </div>
              </div>
              <div className="p-4 bg-white text-xs text-stone-600 border-t border-stone-200">
                <div className="font-semibold text-stone-900 mb-1">
                  Physical Demonstration Assembly
                </div>
                <p>
                  Timber cross-section mounted on exhibition stand showing cutaway cavity, piezoelectric transducer positions (T & R), and clear scientific callout tags.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Schematic Callout Directory */}
          <div className="lg:col-span-6">
            <div className="bg-[#F8F9F5] rounded-xl border border-stone-300 p-6 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8B5A2B] font-bold mb-2">
                Interactive Model Component Callouts
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
                Explore Model Components & Callouts
              </h3>

              {/* Component Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {callouts.map((callout) => (
                  <button
                    key={callout.id}
                    onClick={() => setActiveCallout(callout.id)}
                    className={`p-3 text-left rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      activeCallout === callout.id
                        ? 'bg-[#163828] text-white border-[#163828] shadow-xs'
                        : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-mono text-[10px] opacity-75 uppercase">{callout.tag}</div>
                    <div className="font-semibold mt-0.5">{callout.name}</div>
                  </button>
                ))}
              </div>

              {/* Detailed Callout Inspection Box */}
              <div className="bg-white rounded-lg p-5 border border-stone-200 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#163828]">
                    {currentCallout.tag}
                  </span>
                  <span className="text-xs font-mono text-stone-400">Model Callout</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {currentCallout.name}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                  {currentCallout.desc}
                </p>

                <div className="bg-[#EAEFE8] p-3 rounded border border-[#C5D5C2] text-xs text-stone-800">
                  <strong className="text-[#163828] block mb-0.5 font-mono uppercase text-[10px]">
                    Acoustic Significance:
                  </strong>
                  <span>{currentCallout.physicsNote}</span>
                </div>
              </div>

              {/* Model Construction Notes */}
              <div className="mt-6 pt-5 border-t border-stone-200 text-xs text-stone-600 space-y-1">
                <div className="font-semibold text-stone-900">Exhibition Demonstration Protocol:</div>
                <p>
                  1. The model enables visitors to compare a straight-through diameter path with an obstructed cavity path.
                </p>
                <p>
                  2. Clear color-coded acrylic guides delineate the boundary between outer sapwood and decayed heartwood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
