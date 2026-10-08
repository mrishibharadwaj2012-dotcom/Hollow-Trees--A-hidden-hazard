export interface GlossaryTerm {
  term: string;
  category: 'Acoustics' | 'Biology' | 'Biomechanics' | 'Equipment' | 'Assessment';
  shortDef: string;
  fullDef: string;
  formulaOrExample?: string;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Ultrasonic Waves',
    category: 'Acoustics',
    shortDef: 'High-frequency mechanical sound waves above human hearing (greater than 20 kHz) that travel through solid matter by compression.',
    fullDef: 'Mechanical stress waves with frequencies exceeding the human auditory threshold (typically 20 kHz to several hundred kHz). In arboricultural testing, ultrasonic compression waves are pulsed into wood to detect internal structural discontinuities, because their wavelength is well-suited to identifying hidden cracks and cavities.',
    formulaOrExample: 'Frequency f > 20,000 Hz; Wave Speed in wood v = √(E/ρ)',
  },
  {
    term: 'Non-Destructive Testing (NDT)',
    category: 'Assessment',
    shortDef: 'Scientific evaluation methods that inspect internal material condition without drilling, cutting, or causing structural harm.',
    fullDef: 'Inspection methodologies that assess the interior physical integrity of living organisms or engineered structures without causing mechanical damage or breaching protective biological boundaries. Unlike invasive increment borers or drill bits, ultrasonic NDT preserves the tree’s natural defensive barriers.',
    formulaOrExample: 'Techniques include: Ultrasonic testing, sonic tomography, electrical resistivity.',
  },
  {
    term: 'Structural Failure',
    category: 'Biomechanics',
    shortDef: 'The physical snapping, buckling, or collapse of a tree trunk or branch when mechanical loads exceed remaining wood strength.',
    fullDef: 'The mechanical breakdown of a tree stem or major branch when applied physical loads (such as aerodynamic drag from high winds or self-weight) exceed the critical bending, shear, or compressive strength of the remaining wood cylinder, resulting in stem fracture or uprooting.',
    formulaOrExample: 'Critical failure often occurs when hollow cylinder bending stress σ = M·y / I exceeds wood yield limit.',
  },
  {
    term: 'Wood Decay',
    category: 'Biology',
    shortDef: 'The biological breakdown and softening of wood cellular matrices caused by fungal enzymes decomposing cellulose and lignin.',
    fullDef: 'The progressive enzymatic decomposition of wood cellular wall polymers (cellulose, hemicellulose, and lignin) by specialized wood-decay basidiomycete fungi. Wood decay drastically diminishes the modulus of elasticity (stiffness) and density before an open hollow is even visible.',
    formulaOrExample: 'Types: White rot (lignin loss), Brown rot (cellulose loss), Soft rot.',
  },
  {
    term: 'Cavity',
    category: 'Biology',
    shortDef: 'An internal hollow or air-filled chamber formed inside a tree stem after decayed heartwood completely decomposes.',
    fullDef: 'An empty anatomical void or pocket within the central heartwood or sapwood of a tree trunk, created when fungal degradation consumes the internal wood tissue. An air-filled cavity acts as a barrier to ultrasonic waves because air cannot support mechanical shear wave transmission.',
    formulaOrExample: 'Air pocket impedance (~415 kg/(m²·s)) vs Solid wood (~1.5×10⁶ kg/(m²·s)).',
  },
  {
    term: 'Transmitter (T)',
    category: 'Equipment',
    shortDef: 'The electronic sensor probe mounted on the trunk that sends ultrasonic mechanical pulses into the wood.',
    fullDef: 'A piezoelectric transducer device applied to the outer bark or xylem surface that converts electrical voltage pulses into high-frequency mechanical vibrations (compression stress waves) and transmits them into the tree trunk at a reference excitation angle.',
    formulaOrExample: 'Emits calibrated pulse: T = Transmitted Reference Signal.',
  },
  {
    term: 'Receiver (R)',
    category: 'Equipment',
    shortDef: 'The sensor probe on the opposite trunk wall that detects and records the arriving ultrasonic wave.',
    fullDef: 'A piezoelectric sensor placed at a predetermined spatial coordinate on the trunk that captures incoming acoustic stress waves, converting physical vibrations back into electronic voltage waveforms for transit time and amplitude analysis.',
    formulaOrExample: 'Detects arriving pulse: R = Received Signal (measures amplitude & delay).',
  },
  {
    term: 'T/R Ratio',
    category: 'Acoustics',
    shortDef: 'A comparative indicator evaluating received signal amplitude relative to transmitted pulse energy to assess acoustic continuity.',
    fullDef: 'A qualitative supporting metric calculated by comparing the amplitude or energy of the received signal (R) against the transmitted baseline pulse (T). Lower ratios indicate significant energy dissipation, wave scattering, or detour paths caused by internal decay or hollow voids.',
    formulaOrExample: 'T/R Ratio = Energy(R) / Energy(T); Low ratio flags internal disruption.',
  },
  {
    term: 'Arborist',
    category: 'Assessment',
    shortDef: 'A certified professional trained in tree biology, health diagnosis, structural hazard assessment, and safe tree management.',
    fullDef: 'A trained and certified specialist in arboriculture who evaluates tree health, physiology, and mechanical safety. Arborists conduct comprehensive Tree Risk Assessments (TRAQ) to determine whether a tree requires pruning, support cabling, or ongoing monitoring.',
    formulaOrExample: 'Professional bodies: International Society of Arboriculture (ISA).',
  },
  {
    term: 'Acoustic Impedance',
    category: 'Acoustics',
    shortDef: 'A material’s acoustic resistance (density × wave speed); large differences at boundaries cause sound waves to bounce back.',
    fullDef: 'A physical constant of a medium calculated as the product of its volumetric density (ρ) and acoustic wave velocity (v). When an ultrasonic wave encounters a boundary between high impedance (wood) and low impedance (an air-filled cavity), nearly 100% of the acoustic energy reflects.',
    formulaOrExample: 'Z = ρ · v; Impedance mismatch creates boundary reflection.',
  },
  {
    term: 'CODIT Model',
    category: 'Biology',
    shortDef: 'Compartmentalization Of Decay In Trees: the biological defense walls a tree builds to contain internal fungal rot.',
    fullDef: 'Formulated by Dr. Alex Shigo, the CODIT model explains how trees wall off injured and infected wood using four distinct anatomical and chemical boundaries (Walls 1, 2, 3, and 4), sealing decay into central chambers while new sound wood continues growing outward.',
    formulaOrExample: 'Wall 1 (vessel plug), Wall 2 (ring boundary), Wall 3 (rays), Wall 4 (new barrier zone).',
  },
  {
    term: 'Residual Wall Thickness (t/R)',
    category: 'Biomechanics',
    shortDef: 'The ratio between remaining sound wood wall thickness (t) and the outer trunk radius (R).',
    fullDef: 'A biomechanical safety threshold developed by Claus Mattheck describing the proportion of intact outer sound wood wall (t) compared to total stem radius (R). When t/R drops below ~0.30–0.35, the hollow stem faces heightened risk of cross-sectional buckling under wind gusts.',
    formulaOrExample: 'Mattheck Criterion: t/R < 0.33 indicates elevated structural risk.',
  },
  {
    term: 'Time of Flight (ToF)',
    category: 'Acoustics',
    shortDef: 'The time taken (in microseconds or milliseconds) for a sound pulse to travel from transmitter to receiver.',
    fullDef: 'The measured transit duration required for an ultrasonic stress wave to travel across a tree trunk from probe T to probe R. When an internal cavity obstructs the direct radial path, waves must detour around the perimeter, noticeably extending the Time of Flight.',
    formulaOrExample: 'ToF = Path Length (d) / Propagation Speed (v).',
  },
  {
    term: 'Wood Anisotropy',
    category: 'Biomechanics',
    shortDef: 'Having different physical properties along different directions (longitudinal, radial, and tangential).',
    fullDef: 'The directional dependence of physical properties in timber. Because wood fibers are aligned vertically, ultrasonic waves travel fastest along the grain (longitudinally, 3500–5000 m/s), slower across growth rings (radially, 1000–1800 m/s), and slowest tangentially (800–1300 m/s).',
    formulaOrExample: 'v_longitudinal >> v_radial > v_tangential.',
  },
];
