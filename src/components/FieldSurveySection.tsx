import React, { useState } from 'react';
import { MapPin, Eye, AlertCircle, Compass, Trees, Check, Layers } from 'lucide-react';
import { FIELD_SURVEY_ZONES, PROJECT_METADATA } from '../data/projectData';
import fieldSurveyImg from '../assets/images/field_survey_trees_1791437269752.jpg';

export const FieldSurveySection: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>(FIELD_SURVEY_ZONES[0].id);

  const activeZoneData = FIELD_SURVEY_ZONES.find((z) => z.id === selectedZone) || FIELD_SURVEY_ZONES[0];

  return (
    <section id="field-survey" className="py-16 md:py-24 bg-[#F8F9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-[#8B5A2B] font-semibold mb-2">
            Section 04 · Empirical Field Work
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Field Survey Across the IIT Kharagpur Campus
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed font-light">
            We conducted an extensive walking observational survey across representative avenue sectors, old academic zones, and student corridors around the Indian Institute of Technology (IIT) Kharagpur campus in West Bengal.
          </p>
        </div>

        {/* Essential Key Observation Statement Banner */}
        <div className="mb-12 bg-white rounded-xl p-6 sm:p-8 border border-stone-300 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#163828] font-bold block mb-1">
              Key Empirical Field Observation
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
              “{PROJECT_METADATA.keyObservation}”
            </blockquote>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Trees exhibiting thick, unbroken bark can conceal substantial heartwood rotting chambers, affirming the critical necessity of non-destructive acoustic penetration.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3 bg-[#EAEFE8] px-4 py-3 rounded-lg border border-[#C5D5C2]">
            <MapPin className="w-5 h-5 text-[#163828]" />
            <div className="text-xs">
              <span className="font-bold text-stone-900 block">Survey Location</span>
              <span className="text-stone-600">IIT Kharagpur Campus & Environs</span>
            </div>
          </div>
        </div>

        {/* Visual Survey Layout: Map Schematic & Field Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left: Interactive Stylized Campus Sector Map (No fake GPS) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-stone-300 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    Campus Survey Sectors
                  </h3>
                  <p className="text-xs text-stone-500">
                    Schematic representation of survey walking zones around IIT Kharagpur
                  </p>
                </div>
                <div className="text-xs font-mono text-stone-600 bg-stone-100 px-2 py-1 rounded">
                  4 Representative Sectors
                </div>
              </div>

              {/* Stylized SVG Map of Campus Zones */}
              <div className="relative rounded-lg bg-[#EFEFEA] border border-stone-200 p-4 overflow-hidden mb-6">
                <svg viewBox="0 0 600 340" className="w-full h-auto">
                  {/* Base Campus Greenery Background */}
                  <rect x="0" y="0" width="600" height="340" fill="#E8ECE4" />

                  {/* Campus Roads and Arterials */}
                  <path d="M 0,160 Q 300,180 600,140" stroke="#CBD5E1" strokeWidth="22" fill="none" />
                  <path d="M 0,160 Q 300,180 600,140" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                  
                  <path d="M 280,0 L 320,340" stroke="#CBD5E1" strokeWidth="18" fill="none" />
                  <path d="M 280,0 L 320,340" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                  
                  {/* Campus Central Green Circle */}
                  <circle cx="300" cy="160" r="50" fill="#D3DEC9" stroke="#9CA3AF" strokeWidth="2" />
                  <text x="300" y="163" textAnchor="middle" fill="#374151" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
                    CENTRAL ROTARY
                  </text>

                  {/* Sector Zone A: Old Academic / Hijli */}
                  <g
                    className="cursor-pointer transition-opacity"
                    onClick={() => setSelectedZone('zone-a')}
                  >
                    <rect
                      x="40"
                      y="30"
                      width="190"
                      height="100"
                      rx="8"
                      fill={selectedZone === 'zone-a' ? '#163828' : '#FFFFFF'}
                      stroke={selectedZone === 'zone-a' ? '#0F291E' : '#94A3B8'}
                      strokeWidth="2"
                    />
                    <text
                      x="55"
                      y="60"
                      fill={selectedZone === 'zone-a' ? '#FFFFFF' : '#111827'}
                      fontSize="12"
                      fontFamily="Lora"
                      fontWeight="bold"
                    >
                      Sector A: Old Academic
                    </text>
                    <text
                      x="55"
                      y="80"
                      fill={selectedZone === 'zone-a' ? '#A7F3D0' : '#4B5563'}
                      fontSize="9.5"
                      fontFamily="sans-serif"
                    >
                      Hijli Complex & Main Building
                    </text>
                    <circle cx="195" cy="55" r="7" fill={selectedZone === 'zone-a' ? '#34D399' : '#CBD5E1'} />
                  </g>

                  {/* Sector Zone B: Scholars Avenue & Residential */}
                  <g
                    className="cursor-pointer transition-opacity"
                    onClick={() => setSelectedZone('zone-b')}
                  >
                    <rect
                      x="370"
                      y="30"
                      width="190"
                      height="100"
                      rx="8"
                      fill={selectedZone === 'zone-b' ? '#163828' : '#FFFFFF'}
                      stroke={selectedZone === 'zone-b' ? '#0F291E' : '#94A3B8'}
                      strokeWidth="2"
                    />
                    <text
                      x="385"
                      y="60"
                      fill={selectedZone === 'zone-b' ? '#FFFFFF' : '#111827'}
                      fontSize="12"
                      fontFamily="Lora"
                      fontWeight="bold"
                    >
                      Sector B: Scholars Ave
                    </text>
                    <text
                      x="385"
                      y="80"
                      fill={selectedZone === 'zone-b' ? '#A7F3D0' : '#4B5563'}
                      fontSize="9.5"
                      fontFamily="sans-serif"
                    >
                      Halls Corridor & Heavy Cycle Flow
                    </text>
                    <circle cx="525" cy="55" r="7" fill={selectedZone === 'zone-b' ? '#34D399' : '#CBD5E1'} />
                  </g>

                  {/* Sector Zone C: Technology Market & Perimeter */}
                  <g
                    className="cursor-pointer transition-opacity"
                    onClick={() => setSelectedZone('zone-c')}
                  >
                    <rect
                      x="40"
                      y="200"
                      width="190"
                      height="105"
                      rx="8"
                      fill={selectedZone === 'zone-c' ? '#163828' : '#FFFFFF'}
                      stroke={selectedZone === 'zone-c' ? '#0F291E' : '#94A3B8'}
                      strokeWidth="2"
                    />
                    <text
                      x="55"
                      y="230"
                      fill={selectedZone === 'zone-c' ? '#FFFFFF' : '#111827'}
                      fontSize="12"
                      fontFamily="Lora"
                      fontWeight="bold"
                    >
                      Sector C: Tech Market
                    </text>
                    <text
                      x="55"
                      y="250"
                      fill={selectedZone === 'zone-c' ? '#A7F3D0' : '#4B5563'}
                      fontSize="9.5"
                      fontFamily="sans-serif"
                    >
                      Commercial & Parking Perimeter
                    </text>
                    <circle cx="195" cy="225" r="7" fill={selectedZone === 'zone-c' ? '#34D399' : '#CBD5E1'} />
                  </g>

                  {/* Sector Zone D: Gymkhana & Open Park Grounds */}
                  <g
                    className="cursor-pointer transition-opacity"
                    onClick={() => setSelectedZone('zone-d')}
                  >
                    <rect
                      x="370"
                      y="200"
                      width="190"
                      height="105"
                      rx="8"
                      fill={selectedZone === 'zone-d' ? '#163828' : '#FFFFFF'}
                      stroke={selectedZone === 'zone-d' ? '#0F291E' : '#94A3B8'}
                      strokeWidth="2"
                    />
                    <text
                      x="385"
                      y="230"
                      fill={selectedZone === 'zone-d' ? '#FFFFFF' : '#111827'}
                      fontSize="12"
                      fontFamily="Lora"
                      fontWeight="bold"
                    >
                      Sector D: Gymkhana Park
                    </text>
                    <text
                      x="385"
                      y="250"
                      fill={selectedZone === 'zone-d' ? '#A7F3D0' : '#4B5563'}
                      fontSize="9.5"
                      fontFamily="sans-serif"
                    >
                      Open Windward Boundary
                    </text>
                    <circle cx="525" cy="225" r="7" fill={selectedZone === 'zone-d' ? '#34D399' : '#CBD5E1'} />
                  </g>
                </svg>
              </div>

              {/* Zone Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {FIELD_SURVEY_ZONES.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.id)}
                    className={`px-3 py-2 text-xs font-semibold rounded-md border text-center transition-all ${
                      selectedZone === zone.id
                        ? 'bg-[#163828] text-white border-[#163828]'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {zone.zoneName.split('&')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Zone Detail Card */}
            <div className="mt-6 pt-6 border-t border-stone-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#8B5A2B] uppercase">
                  {activeZoneData.zoneName}
                </span>
                <span className="text-xs font-medium text-stone-600">
                  {activeZoneData.treeCountObserved} mature trees cataloged
                </span>
              </div>
              <p className="text-xs text-stone-600 mb-3">{activeZoneData.locationArea}</p>

              <div className="bg-stone-50 p-3 rounded-md border border-stone-200 text-xs text-stone-700 space-y-1.5">
                <div>
                  <strong className="text-stone-900">Dominant Flora: </strong>
                  <span>{activeZoneData.dominantSpecies.join(', ')}</span>
                </div>
                <div>
                  <strong className="text-stone-900">Observed External Signs: </strong>
                  <span>{activeZoneData.externalSymptoms.join('; ')}</span>
                </div>
                <div>
                  <strong className="text-stone-900">Observation Notes: </strong>
                  <span>{activeZoneData.notes}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Field Observation Photograph Card */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="rounded-xl overflow-hidden border border-stone-300 bg-white shadow-xs">
              <div className="relative aspect-4/3 overflow-hidden bg-stone-900">
                <img
                  src={fieldSurveyImg}
                  alt="Student field survey on university campus grounds observing tree trunks and bark condition"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-emerald-300 border border-white/10">
                  IIT Kharagpur Campus Walk
                </div>
              </div>
              <div className="p-4 bg-white text-xs text-stone-600">
                <div className="font-semibold text-stone-900 mb-1">
                  Field Documentation & Trunk Symptom Cataloging
                </div>
                <p>
                  Visual inspection of mature avenue trees observing root flare cavities, fungal brackets, and longitudinal bark fissures along high-traffic student walkways.
                </p>
              </div>
            </div>

            {/* Cataloged Symptoms Checklist (as explicitly specified in prompt) */}
            <div className="bg-white rounded-xl border border-stone-300 p-5 shadow-xs">
              <h4 className="font-serif text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#163828]" />
                <span>Observed Visual Trunk Criteria</span>
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                <div className="flex items-center gap-1.5 p-2 bg-stone-50 rounded border border-stone-100">
                  <Check className="w-3.5 h-3.5 text-[#163828]" />
                  <span>Visible cavities</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 bg-stone-50 rounded border border-stone-100">
                  <Check className="w-3.5 h-3.5 text-[#163828]" />
                  <span>Cracks & fissures</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 bg-stone-50 rounded border border-stone-100">
                  <Check className="w-3.5 h-3.5 text-[#163828]" />
                  <span>Exposed wood</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 bg-stone-50 rounded border border-stone-100">
                  <Check className="w-3.5 h-3.5 text-[#163828]" />
                  <span>Fungal growth</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 bg-stone-50 rounded border border-stone-100">
                  <Check className="w-3.5 h-3.5 text-[#163828]" />
                  <span>Signs of decay</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 bg-stone-50 rounded border border-stone-100">
                  <Check className="w-3.5 h-3.5 text-[#163828]" />
                  <span>Other trunk defects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
