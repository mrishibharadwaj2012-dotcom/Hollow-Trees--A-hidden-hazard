export interface FieldSurveySite {
  id: string;
  zoneName: string;
  locationArea: string;
  dominantSpecies: string[];
  treeCountObserved: number;
  externalSymptoms: string[];
  internalRiskHypothesis: string;
  notes: string;
}

export interface ResearchMilestone {
  id: string;
  phase: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  keyInsight: string;
}

export interface FindingCard {
  id: number;
  title: string;
  shortDesc: string;
  scientificContext: string;
  implication: string;
}

export interface TeamMember {
  name: string;
  role: string;
  classGrade: string;
  school: string;
  contribution: string;
}

export interface GroundedResult {
  text: string;
  groundingChunks?: Array<{
    web?: {
      uri: string;
      title: string;
    };
  }>;
  webSearchQueries?: string[];
}
