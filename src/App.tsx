import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { AimSection } from './components/AimSection';
import { ResearchSection } from './components/ResearchSection';
import { FieldSurveySection } from './components/FieldSurveySection';
import { ScientificPrincipleSection } from './components/ScientificPrincipleSection';
import { TRRatioSection } from './components/TRRatioSection';
import { ExperimentalModelSection } from './components/ExperimentalModelSection';
import { MethodologySection } from './components/MethodologySection';
import { ObservationsFindingsSection } from './components/ObservationsFindingsSection';
import { ExpectedOutcomeSection } from './components/ExpectedOutcomeSection';
import { SocialImportanceSection } from './components/SocialImportanceSection';
import { LimitationsSection } from './components/LimitationsSection';
import { FutureScopeSection } from './components/FutureScopeSection';
import { ConclusionSection } from './components/ConclusionSection';
import { NCSCJourneySection } from './components/NCSCJourneySection';
import { TeamSection } from './components/TeamSection';
import { LiteratureExplorer } from './components/LiteratureExplorer';
import { Footer } from './components/Footer';
import { ProjectBriefModal } from './components/ProjectBriefModal';

export default function App() {
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);

  const handleExploreResearch = () => {
    const el = document.getElementById('research');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewMethod = () => {
    const el = document.getElementById('methodology');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9F5] text-stone-900 font-sans selection:bg-[#163828] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBrief={() => setIsBriefModalOpen(true)} />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreResearch={handleExploreResearch}
          onViewMethod={handleViewMethod}
        />

        {/* Section 01: The Problem */}
        <ProblemSection />

        {/* Section 02: Our Aim & Objectives */}
        <AimSection />

        {/* Section 03: Our Research */}
        <ResearchSection />

        {/* Section 04: Field Survey (IIT Kharagpur) */}
        <FieldSurveySection />

        {/* Section 05: Scientific Principle (Centerpiece) */}
        <ScientificPrincipleSection />

        {/* Section 06: T/R Ratio */}
        <TRRatioSection />

        {/* Section 07: Experimental Model */}
        <ExperimentalModelSection />

        {/* Section 08: Methodology */}
        <MethodologySection />

        {/* Section 09: Observations & Findings */}
        <ObservationsFindingsSection />

        {/* Section 10: Expected Outcome */}
        <ExpectedOutcomeSection />

        {/* Section 11: Social Importance */}
        <SocialImportanceSection />

        {/* Section 12: Limitations */}
        <LimitationsSection />

        {/* Section 13: Future Scope */}
        <FutureScopeSection />

        {/* Section 14: Conclusion */}
        <ConclusionSection />

        {/* Section 15: Our NCSC Journey */}
        <NCSCJourneySection />

        {/* Section 16: Team */}
        <TeamSection />

        {/* Section 17: Grounded Arboricultural Reference Explorer */}
        <LiteratureExplorer />
      </main>

      {/* Footer */}
      <Footer />

      {/* Executive Brief Modal */}
      <ProjectBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
      />
    </div>
  );
}
