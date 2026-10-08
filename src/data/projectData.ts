import { FieldSurveySite, ResearchMilestone, FindingCard, TeamMember } from '../types';

export const PROJECT_METADATA = {
  kicker: 'Hidden Inside the Tree',
  title: 'Assessment of Internal Trunk Cavities in Trees for Predicting Structural Failure and Reducing Risk to Human Life',
  subtitle: 'A non-destructive, ultrasonic-wave-based approach for preliminary assessment of hidden internal defects in trees.',
  primaryStatement: 'Healthy-looking trees can sometimes hide serious internal defects.',
  congressName: 'National Children\'s Science Congress (NCSC)',
  focalTheme: 'Science, Technology and Innovation for Sustainable Development',
  subTheme: 'Natural Resource Management & Disaster Risk Mitigation',
  studyLocation: 'IIT Kharagpur Campus & Peripheral Zones, West Bengal, India',
  aim: 'To investigate whether ultrasonic wave transmission can be used as a non-destructive preliminary method for identifying possible internal cavities and decay in tree trunks.',
  conclusion: 'Trees can hide structural damage beneath a healthy-looking exterior. Our project explores how ultrasonic waves may help reveal these hidden internal conditions without damaging the tree. Although our model is a preliminary scientific demonstration and cannot predict tree failure on its own, it highlights the potential of non-destructive testing as a tool for identifying trees that may require detailed professional inspection.',
  keyObservation: 'Some internal defects may remain hidden even when the outer surface of a tree appears relatively healthy.',
  expectedOutcomeFormula: 'Early identification → Further inspection → Better risk assessment → Protection of people and healthy trees',
};

export const CORE_OBJECTIVES = [
  {
    number: '01',
    title: 'Study Cavity & Decay Formation',
    description: 'Study the biological and mechanical formation of internal cavities, wood delignification, and fungal decay in standing tree trunks and their influence on cross-sectional load-bearing capacity.',
  },
  {
    number: '02',
    title: 'Acoustic Wave Physics in Wood',
    description: 'Understand how ultrasonic mechanical waves propagate through anisotropic wood tissues, how impedance mismatches affect transmission, and how internal defects alter wave paths and amplitude.',
  },
  {
    number: '03',
    title: 'Develop Static Physical Model',
    description: 'Develop a static experimental model demonstrating how ultrasonic testing can support preliminary assessment of tree condition without causing mechanical damage to living bark or sapwood.',
  },
];

export const RESEARCH_PHASES: ResearchMilestone[] = [
  {
    id: 'wood-mechanics',
    phase: 'Phase 1',
    title: 'Wood Mechanics & Decay Biology',
    subtitle: 'Cellular anatomy, lignin loss, and CODIT compartmentalization',
    summary: 'Investigated how trees respond to fungal pathogens and physical damage through internal compartmentalization (CODIT model). Wood strength depends heavily on the thickness of intact outer sound wood.',
    details: [
      'Wood is an orthotropic material with distinct longitudinal, radial, and tangential cellular grain orientations.',
      'Fungal heart rot consumes cellulose and lignin from within, weakening hollow cylinder flexural rigidity while the outer vascular cambium continues producing living bark.',
      'Shigo\'s CODIT model explains how trees wall off decay into internal chambers, creating concealed hollows.',
    ],
    keyInsight: 'A tree may produce lush green foliage despite having 70% of its internal heartwood decayed, because the outer living sapwood transports water and nutrients unimpeded.',
  },
  {
    id: 'tree-cavities',
    phase: 'Phase 2',
    title: 'Preliminary Research on Internal Tree Cavities',
    subtitle: 'Etiology of stem hollows and structural stability margins',
    summary: 'Reviewed literature on stem failure criteria, Mattheck’s t/R residual sound wood ratio hypothesis, and wind-induced shear stresses on urban avenue trees.',
    details: [
      'Examined why visual assessment (VTA - Visual Tree Assessment) often misses early and central internal rot.',
      'Investigated how sudden high wind loads create extreme bending moments at trunk base and branch forks.',
      'Studied how cavity geometry, eccentricity, and opening slots drastically lower torsional resistance compared to closed cylinders.',
    ],
    keyInsight: 'Visual inspection alone cannot determine whether a trunk is solid wood or a hollow shell.',
  },
  {
    id: 'ultrasonic-waves',
    phase: 'Phase 3',
    title: 'Physics of Ultrasonic Stress Waves',
    subtitle: 'Propagation speed, mechanical compressional waves, and acoustic impedance',
    summary: 'Explored the wave equation v = √(E/ρ) where ultrasonic velocity relates directly to dynamic modulus of elasticity (E) and bulk density (ρ).',
    details: [
      'Sound travels significantly faster in intact sound wood (~1200–2200 m/s radially) than in air (~343 m/s) or decayed spongey wood (~400–800 m/s).',
      'At boundaries between solid wood and internal air-filled cavities, extreme acoustic impedance differences reflect most energy back.',
      'Waves diffract around the cavity boundary, forcing the acoustic pulse to travel along a longer perimeter path, causing transit delay and amplitude drop.',
    ],
    keyInsight: 'Defects do not just slow down sound; air cavities physically deflect waves around their perimeter.',
  },
  {
    id: 'ndt-methods',
    phase: 'Phase 4',
    title: 'Non-Destructive Testing (NDT) Review',
    subtitle: 'Comparing acoustic testing with invasive coring and drilling',
    summary: 'Evaluated traditional invasive testing tools (Pressler increment borer, resistograph drilling) versus non-destructive acoustic methods.',
    details: [
      'Invasive core borers breach the tree’s natural chemical barriers, allowing fungal hyphae to enter previously uninfected wood.',
      'Acoustic and ultrasonic wave methods are non-destructive, requiring only surface transducer contact with coupling medium.',
      'Preliminary ultrasonic screening can prioritize suspect trees before deploying expensive multi-sensor tomography systems.',
    ],
    keyInsight: 'NDT prevents unnecessary wounding of trees during routine safety inspections.',
  },
  {
    id: 'field-survey',
    phase: 'Phase 5',
    title: 'Field Survey Around IIT Kharagpur',
    subtitle: 'Observational data collection across academic and avenue groves',
    summary: 'Conducted systematic visual surveys on campus grounds, cataloging trunk cracks, hollow openings, fungal basidiocarps, and apparently sound mature canopies.',
    details: [
      'Surveys focused on mature avenue trees adjacent to high-pedestrian walkways, cycle paths, and departmental buildings.',
      'Observed indigenous and naturalized tropical species: Shorea robusta (Sal), Tectona grandis (Teak), Azadirachta indica (Neem), Samanea saman (Rain Tree), and Ficus benghalensis (Banyan).',
      'Identified multiple specimens with intact foliage yet showing signs of basal oozing, carpenter ant activity, and hollow sounding when tapped.',
    ],
    keyInsight: 'High-traffic pedestrian corridors contain ancient shade trees that warrant systematic screening.',
  },
  {
    id: 'model-development',
    phase: 'Phase 6',
    title: 'Development of the Static Experimental Model',
    subtitle: 'Designing a physical demonstrator of transmitter-receiver wave mechanics',
    summary: 'Constructed an educational physical model simulating a cross-section of a tree trunk with an internal cavity to demonstrate transmitter-to-receiver wave physics.',
    details: [
      'Used solid seasoned timber cylindrical sections with a simulated internal hollow cavity.',
      'Positioned piezoelectric transducer mounts representing Transmitter (T) at 0° and Receiver (R) at 180° opposite.',
      'Integrated illustrative ray diagrams and signal comparison callouts for exhibition demonstration.',
    ],
    keyInsight: 'A clear physical demonstration bridges abstract wave physics and real-world arboriculture for judges and students.',
  },
  {
    id: 'analysis-interpretation',
    phase: 'Phase 7',
    title: 'Analysis & Signal Interpretation',
    subtitle: 'Correlating wave travel delay and signal amplitude attenuation',
    summary: 'Formulated the theoretical basis for signal comparison, understanding that transmitted signals undergo scattering and attenuation when encountering cavities.',
    details: [
      'Modeled signal degradation as an indicator of internal wood discontinuity.',
      'Clarified the role of the T/R ratio as an exploratory supporting metric rather than a standalone failure predictor.',
      'Recognized how boundary reflections and sound wood wall thickness govern remaining signal energy.',
    ],
    keyInsight: 'Signal attenuation provides a qualitative red flag indicating the need for higher-tier diagnostic testing.',
  },
  {
    id: 'review-limitations',
    phase: 'Phase 8',
    title: 'Final Scientific Review & Limitations',
    subtitle: 'Refining claims, establishing boundaries, and preparing NCSC defense',
    summary: 'Critically evaluated project claims, ensuring no exaggerated guarantees of failure prediction and articulating environmental and social ramifications.',
    details: [
      'Replaced definitive prediction language with preliminary screening terminology.',
      'Documented confounding variables: wood moisture content, sap flow, temperature, and bark coupling.',
      'Synthesized the dual social imperative: protecting human pedestrians while preventing unjustified deforestation.',
    ],
    keyInsight: 'Real science distinguishes itself through humility, honesty regarding limitations, and transparent scope.',
  },
];

export const FIELD_SURVEY_ZONES: FieldSurveySite[] = [
  {
    id: 'zone-a',
    zoneName: 'Old Academic Complex & Hijli Avenue',
    locationArea: 'Near Old Building, Central Library Periphery',
    dominantSpecies: ['Shorea robusta (Sal)', 'Tectona grandis (Teak)', 'Swietenia mahagoni'],
    treeCountObserved: 34,
    externalSymptoms: [
      'Basal cavities near root flare',
      'Longitudinal bark fissures',
      'Bracket fungi (Ganoderma lucidum)',
      'Asymmetrical branch lean towards road',
    ],
    internalRiskHypothesis: 'Old pruning wounds and root zone compaction likely allowed fungal ingress into central heartwood.',
    notes: 'Several large trees show lush top canopy despite substantial basal hollows visible on one side.',
  },
  {
    id: 'zone-b',
    zoneName: 'Scholars Avenue & Residential Belt',
    locationArea: 'Connecting Halls of Residence to Academic Zone',
    dominantSpecies: ['Samanea saman (Rain Tree)', 'Delonix regia (Gulmohar)', 'Albizia lebbeck'],
    treeCountObserved: 42,
    externalSymptoms: [
      'Bark inclusions at major branch crotches',
      'Dead secondary limbs',
      'Cavities colonized by nesting birds/insects',
      'Bark peeling with softened underlying wood',
    ],
    internalRiskHypothesis: 'Rapid-growth softwoods susceptible to core rot following storm limb breakage.',
    notes: 'Heavy foot and bicycle traffic beneath large overhanging canopies makes risk screening vital.',
  },
  {
    id: 'zone-c',
    zoneName: 'Technology Market & Perimeter Circle',
    locationArea: 'Commercial hub and bus parking perimeter',
    dominantSpecies: ['Azadirachta indica (Neem)', 'Ficus religiosa (Peepal)', 'Ficus benghalensis (Banyan)'],
    treeCountObserved: 28,
    externalSymptoms: [
      'Mechanical damage from vehicle impacts',
      'Exposed surface roots bruised by paving',
      'Old trunk wounds with sap seepage',
      'Hollow trunk sound upon manual percussive tapping',
    ],
    internalRiskHypothesis: 'Pavement constriction and mechanical damage expose trunk heartwood to opportunistic saprophytes.',
    notes: 'Tapping with wooden mallet produced distinct hollow acoustic pitch on trees with no visible exterior hole.',
  },
  {
    id: 'zone-d',
    zoneName: 'Gymkhana Grounds & Open Green Belt',
    locationArea: 'Sports complex perimeter and nature park pathways',
    dominantSpecies: ['Eucalyptus citriodora', 'Casuarina equisetifolia', 'Peltophorum pterocarpum'],
    treeCountObserved: 31,
    externalSymptoms: [
      'High wind exposure and trunk twist',
      'Crown dieback in older specimens',
      'Termite mud galleries on lower trunk',
      'Lightning scar healing ridges',
    ],
    internalRiskHypothesis: 'Open wind exposure exerts high dynamic bending stresses; internal hollows could precipitate sudden stem snap.',
    notes: 'Trees in open areas endure higher wind gusts, making early detection of heartwood decay critical.',
  },
];

export const SCIENTIFIC_FINDINGS: FindingCard[] = [
  {
    id: 1,
    title: 'Hidden Cavities Beneath Healthy Bark',
    shortDesc: 'Internal decay can progress extensively while outward foliar vitality remains intact.',
    scientificContext: 'Because water and mineral conduction occurs through outer sapwood rings (vascular cambium), inner heartwood delignification can progress quietly for years without causing leaf yellowing or crown decline.',
    implication: 'Visual inspections must not be the sole basis for declaring a tree structurally sound in high-risk public spaces.',
  },
  {
    id: 2,
    title: 'Visible Markers as Clues, Not Proof',
    shortDesc: 'Cracks, exposed wood, and fungal conks indicate deterioration, but external size does not equal internal depth.',
    scientificContext: 'External fungal conks (fruiting bodies like Ganoderma) indicate established internal mycelium, but do not reveal how much residual sound wood wall remains around the trunk circumference.',
    implication: 'Visible signs justify immediate non-destructive screening rather than premature tree felling or blind dismissal.',
  },
  {
    id: 3,
    title: 'Acoustic Transmission Physics is Sound',
    shortDesc: 'Ultrasonic wave propagation responds predictably to changes in wood continuity and density.',
    scientificContext: 'Ultrasonic compression waves cannot traverse air voids directly due to extreme acoustic impedance mismatch between wood (~1.5×10⁶ kg/(m²·s)) and air (~415 kg/(m²·s)). Waves are forced to diffract along longer solid wood paths.',
    implication: 'Acoustic wave delays and amplitude attenuation provide a scientifically grounded basis for detecting internal voids.',
  },
  {
    id: 4,
    title: 'Screening Triages High-Risk Candidates',
    shortDesc: 'A rapid preliminary NDT approach helps prioritize which trees need detailed engineering assessment.',
    scientificContext: 'Municipalities cannot afford comprehensive 16-sensor tomographic scans on every street tree. A simple two-probe ultrasonic screening protocol can quickly categorize trees as low, moderate, or high concern.',
    implication: 'Maximizes public safety budgets by focusing expert arboricultural diagnostic equipment where it is truly needed.',
  },
  {
    id: 5,
    title: 'Professional Evaluation Remains Essential',
    shortDesc: 'Preliminary screening results must be validated by certified arborists before cutting decisions.',
    scientificContext: 'Tree failure depends on root anchoring, canopy wind sail area, wood species toughness, dynamic wind gusts, and local topography in addition to trunk cavity size.',
    implication: 'Our methodology provides a decision-support filter, never an automated mandate to fell living trees.',
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Tree Selection',
    description: 'Select candidate trees along public walkways, school perimeters, and avenue roads based on age, species, and public exposure.',
  },
  {
    step: '02',
    title: 'Visual Observation',
    description: 'Conduct systematic Visual Tree Assessment (VTA) checking for crown dieback, trunk lean, bark fissures, cavities, and fungal conks.',
  },
  {
    step: '03',
    title: 'Defect Zone Identification',
    description: 'Identify suspected height levels on trunk (e.g., 30 cm above root flare, below main fork) where internal rot is most probable.',
  },
  {
    step: '04',
    title: 'Ultrasonic Testing Principle',
    description: 'Establish non-destructive testing plane across suspected trunk diameter using acoustic coupling gel to minimize bark contact loss.',
  },
  {
    step: '05',
    title: 'Signal Transmission (T)',
    description: 'Emit calibrated high-frequency ultrasonic pulse into the trunk via piezoelectric transducer at reference position 0°.',
  },
  {
    step: '06',
    title: 'Signal Reception (R)',
    description: 'Capture transmitted wave package at receiving transducer positioned opposite (180°) or diagonally along designated chord paths.',
  },
  {
    step: '07',
    title: 'Comparison & Analysis',
    description: 'Compare transmitted reference (T) with received signal (R) evaluating propagation transit time and amplitude attenuation.',
  },
  {
    step: '08',
    title: 'Preliminary Assessment',
    description: 'Classify inspected cross-section: Normal Continuum (direct fast wave) vs Suspected Internal Discontinuity (delayed/attenuated wave).',
  },
  {
    step: '09',
    title: 'Professional Inspection if Required',
    description: 'Flag trees exhibiting anomalous attenuation for comprehensive sonic tomography, resistograph drilling, and arborist audit.',
  },
];

export const LIMITATIONS_LIST = [
  {
    title: 'Static Experimental Demonstration',
    detail: 'Our model is a static educational physical demonstration built for the science congress to illustrate wave principles; it does not collect live automated field telemetry.',
  },
  {
    title: 'Complex Wood Anisotropy & Moisture',
    detail: 'Acoustic velocity varies drastically across species, radial vs tangential grain direction, sapwood vs heartwood moisture levels, and ambient seasonal temperatures.',
  },
  {
    title: 'No Standalone Time-of-Failure Prediction',
    detail: 'No non-destructive screening tool can predict the exact day or wind velocity at which a trunk will fail, as dynamic aerodynamic drag and root anchorage play vital roles.',
  },
  {
    title: 'Screening vs. Full 3D Tomography',
    detail: 'A simple two-probe preliminary test reveals whether a signal is delayed or attenuated along a path, but cannot construct a 2D/3D colored tomographic map without multi-sensor arrays.',
  },
  {
    title: 'Requirement for Professional Arborists',
    detail: 'Our method is designed as an accessible preliminary screening filter. It does not replace certified arboricultural risk evaluations or municipal tree management codes.',
  },
];

export const FUTURE_SCOPE_LIST = [
  {
    title: 'Multi-Transducer Ultrasonic Tomography',
    description: 'Integrate 8 to 16 piezoelectric sensor rings around trunk circumference to calculate 2D acoustic velocity distribution maps and pinpoint cavity geometry.',
  },
  {
    title: 'Expanded Indian Tree Species Acoustic Database',
    description: 'Systematically measure baseline radial and longitudinal ultrasonic speeds across native tropical timber species (Sal, Teak, Neem, Peepal, Arjun, Jamun).',
  },
  {
    title: 'Correlation with Destructive Log Validation',
    description: 'Partner with forestry departments to test felled salvage logs acoustically, followed by physical cross-cutting to quantitatively calibrate cavity boundaries.',
  },
  {
    title: 'Digital Signal Processing & Machine Learning',
    description: 'Develop lightweight microcontroller software with FFT (Fast Fourier Transform) frequency analysis to automatically detect hollow echo signatures.',
  },
  {
    title: 'Multi-Modal Hybrid Non-Destructive Testing',
    description: 'Combine ultrasonic stress wave tests with Electrical Resistivity Tomography (ERT) to differentiate air cavities from water-saturated active fungal rot.',
  },
  {
    title: 'Community Citizen-Science Triage Protocol',
    description: 'Formulate an easy-to-use checklist and screening kit for school students and park wardens to report suspected avenue trees before monsoon storms.',
  },
];

export const NCSC_JOURNEY_STAGES = [
  {
    stage: 'Stage 1',
    title: 'Observation & Problem Identification',
    timeframe: 'Weeks 1–2',
    description: 'Noticed recurrent instances of fallen mature trees following pre-monsoon squalls around local campus roads. Observed that many fallen trees looked completely green and leafy from the outside but had gaping hollow centers.',
    status: 'Completed',
  },
  {
    stage: 'Stage 2',
    title: 'Literature Review & Scientific Inquiries',
    timeframe: 'Weeks 3–4',
    description: 'Consulted forestry literature, Alex Shigo\'s CODIT compartmentalization concept, Claus Mattheck\'s body language of trees, and acoustic wave propagation principles. Formulated our research hypothesis.',
    status: 'Completed',
  },
  {
    stage: 'Stage 3',
    title: 'IIT Kharagpur Campus Field Survey',
    timeframe: 'Weeks 5–6',
    description: 'Conducted systematic field walking surveys across 4 distinct zones on the IIT Kharagpur campus. Documented 135+ mature trees, noting outward visual symptoms, species differences, and hollow resonance upon tapping.',
    status: 'Completed',
  },
  {
    stage: 'Stage 4',
    title: 'Ultrasonic Physics & Wave Theory Analysis',
    timeframe: 'Weeks 7–8',
    description: 'Studied mechanical wave transmission in porous biological media. Modeled wave paths around internal voids and established the theoretical significance of transmitted versus received signal attenuation.',
    status: 'Completed',
  },
  {
    stage: 'Stage 5',
    title: 'Physical Static Model Construction',
    timeframe: 'Weeks 9–10',
    description: 'Designed and fabricated the physical demonstration cross-section model with mounted transducer representations, internal cavity chamber, and clear scientific callout labeling for the exhibition booth.',
    status: 'Completed',
  },
  {
    stage: 'Stage 6',
    title: 'Data Synthesis, Limitations & Peer Review',
    timeframe: 'Weeks 11–12',
    description: 'Reviewed project findings with school science faculty and mentors. Critically refined our scientific claims, documented limitations honestly, and drafted the formal NCSC logbook and project report.',
    status: 'Completed',
  },
  {
    stage: 'Stage 7',
    title: 'National Children\'s Science Congress Presentation',
    timeframe: 'Final Stage',
    description: 'Preparing the interactive web showcase, exhibition charts, project logbook, and physical static demonstrator for presentation before NCSC judges, arborists, and students.',
    status: 'Active Showcase',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Nilesh Patra',
    role: 'Student Lead Investigator & Research Design',
    classGrade: 'Senior Division / High School',
    school: 'Kendriya Vidyalaya / High School (IIT Kharagpur Cluster)',
    contribution: 'Project conceptualization, ultrasonic stress wave propagation modeling, wave delay calculations, and methodology development.',
  },
  {
    name: 'Rishi Bharadwaj',
    role: 'Student Lead Investigator & Field Systems',
    classGrade: 'Senior Division / High School',
    school: 'Kendriya Vidyalaya / High School (IIT Kharagpur Cluster)',
    contribution: 'IIT Kharagpur campus field survey documentation, physical static model fabrication, logbook analysis, and exhibition presentation.',
  },
];

export const GUIDE_MENTORS = [
  {
    name: 'Faculty Guide / Teacher Coordinator',
    role: 'Project Guide & Science Teacher',
    department: 'Department of Physics & Environmental Sciences',
    institution: 'Senior Secondary Science Wing',
  },
  {
    name: 'Academic Advisor / Consultant',
    role: 'Scientific Mentor',
    department: 'Civil Engineering / Forestry Research Circle',
    institution: 'IIT Kharagpur Campus Mentorship Program',
  },
];

export const CURATED_RESEARCH_TOPICS = [
  {
    query: 'Acoustic velocity in Shorea robusta Sal tree and Tectona grandis Teak tree ultrasonic testing',
    title: 'Acoustic Velocities in Tropical Woods (Sal & Teak)',
    badge: 'Species Physics',
    summary: 'Radial wave speed in sound Sal (Shorea robusta) typically ranges from 1400–1800 m/s, whereas longitudinal speed reaches 4000+ m/s. Severe fungal decay or heart rot drops effective radial velocities below 800 m/s.',
  },
  {
    query: 'Claus Mattheck t/R ratio rule residual sound wood thickness tree safety',
    title: 'Mattheck\'s t/R Residual Wall Ratio Hypothesis',
    badge: 'Tree Biomechanics',
    summary: 'Biomechanical research suggests that when residual sound wood wall thickness (t) falls below ~30–35% of trunk radius (R), the risk of hollow cylinder buckling under wind loads escalates significantly.',
  },
  {
    query: 'Ultrasonic stress wave propagation in trees internal decay detection CODIT',
    title: 'CODIT & Acoustic Wave Diffraction',
    badge: 'Pathology & Waves',
    summary: 'When wood fibers decay from fungal hyphae, the bulk density and elastic modulus drop. Acoustic compression waves diffract around the internal cavity boundary, resulting in extended transit time and wave dissipation.',
  },
  {
    query: 'Non destructive testing methods for urban tree risk assessment sonic vs ultrasonic',
    title: 'Non-Destructive Testing (NDT) in Modern Arboriculture',
    badge: 'Diagnostic Standards',
    summary: 'NDT tools prioritize saving healthy trees and identifying hidden hazards. Stress wave timers and ultrasonic transducers offer preliminary non-invasive screening before invasive micro-drilling is applied.',
  },
];
