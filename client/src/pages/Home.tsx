/* ============================================================
   BioCode Terminal — Home Page
   Dark tech-academic aesthetic. Space Grotesk + DM Sans.
   Sections: Nav, Hero, Stats, About, Roles, Skills, Publications,
             Achievements, Education, Contact, Footer
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Dna,
  FlaskConical,
  Leaf,
  PawPrint,
  Building2,
  GraduationCap,
  BookOpen,
  Award,
  Mail,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Microscope,
  Database,
  Cloud,
  Code2,
  BarChart3,
  Globe,
} from "lucide-react";

// ── Animated counter ─────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

// ── Fade-in section wrapper ───────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Navigation ────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Roles", href: "#roles" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <Dna className="w-6 h-6 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-display font-700 text-white text-sm tracking-wide">M. Ibrahim</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:mohanadahmedibrahim@gmail.com"
            className="ml-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium hover:bg-sky-500/20 transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden nav-blur border-t border-white/5 px-6 py-4 flex flex-col gap-3"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-sky-400 text-sm font-medium py-1"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D1117 0%, #0a1628 50%, #0D1117 100%)",
      }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663143815567/SuFJZnskbHiwuF9TmMAWz2/hero-bg-iXG9PBgJtDPeveBUiteA7F.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="section-label">Available for Collaboration</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4"
          >
            <span className="text-white">Mohanad</span>
            <br />
            <span className="gradient-text">A. Ibrahim</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl text-slate-300 font-medium mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Biological Data Analyst · Bioinformatician · Genomics Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-slate-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          >
            Transforming genomic data into biological insights. Over 8 years advancing precision medicine,
            food security, and conservation genomics across Saudi Arabia and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#roles"
              className="px-6 py-3 rounded-full bg-sky-500 text-white font-semibold text-sm hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/20"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-sky-400/50 hover:text-sky-400 transition-all duration-200"
            >
              Get in Touch
            </a>
            <a
              href="https://orcid.org/0000-0002-8282-6169"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-400 font-semibold text-sm hover:bg-emerald-500/10 transition-all duration-200 flex items-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              ORCID
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}

// ── Stats ─────────────────────────────────────────────────────
const STATS = [
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 22, suffix: "", label: "Publications" },
  { value: 10, suffix: "+", label: "Roles & Positions" },
  { value: 1000, suffix: "+", label: "WGS Datasets Managed" },
];

function Stats() {
  return (
    <section className="py-16 border-y border-white/5" style={{ background: "oklch(0.10 0.01 264)" }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663143815567/SuFJZnskbHiwuF9TmMAWz2/about-bg-dES5hSvK7s2gPvXpaQfhJs.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-transparent to-[#0D1117]" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="section-label mb-3">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
              Decoding Life's <span className="gradient-text">Blueprint</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I am a passionate <strong className="text-sky-400">Biological Data Analyst</strong> and{" "}
              <strong className="text-sky-400">Bioinformatician</strong> specializing in omics data analysis,
              human genetics, and precision medicine. With over eight years of experience designing robust
              analytical pipelines, databases, and computational models, I focus on translating complex
              genomic data into actionable biological and clinical insights.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              My work spans variant calling, multi-omics integration, metagenomics, and population genomics,
              contributing to national-scale projects in Saudi Arabia and beyond. I bridge the gap between
              computational biology and real-world applications, driving innovation across healthcare,
              veterinary sciences, and sustainable agriculture.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Microscope className="w-5 h-5" />, label: "Precision Medicine" },
                { icon: <Leaf className="w-5 h-5" />, label: "Food Security" },
                { icon: <PawPrint className="w-5 h-5" />, label: "Veterinary Genomics" },
                { icon: <Globe className="w-5 h-5" />, label: "Conservation" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/3 text-center"
                >
                  <div className="text-sky-400">{item.icon}</div>
                  <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── Roles ─────────────────────────────────────────────────────
const ROLES = [
  {
    icon: <Dna className="w-5 h-5" />,
    company: "Embryo. Co. Genetics",
    website: "https://embryo.sa",
    role: "General Manager & Co-Founder",
    period: "Sep 2024 – Present",
    color: "sky",
    bullets: [
      "Lead genomic interpretation and clinical consultation for embryo and fertility genetics programs.",
      "Analyze 2,000+ genomic samples under the Spain Fund initiative, identifying novel SNPs and population-specific variants.",
      "Conduct metagenomic shotgun analyses of neonatal samples to investigate rotavirus-related dysbiosis.",
      "Integrate diabetes-related genomic and metagenomic datasets to discover metabolic disorder biomarkers.",
    ],
  },
  {
    icon: <PawPrint className="w-5 h-5" />,
    company: "Al-Wissam Veterinary Services",
    website: "https://alwissam.sa",
    role: "Co-Founder & Data Analyst",
    period: "2024 – Present",
    color: "emerald",
    bullets: [
      "Direct genomic sequencing initiatives to detect breeding purity and hybridization for animal reserve conservation.",
      "Develop data-driven analytical pipelines for veterinary genomics, providing insights for breeding strategies.",
      "Lead the technological and analytical strategy bridging advanced bioinformatics with veterinary applications.",
    ],
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    company: "Ministry of Environment, Water and Agriculture (MEWA)",
    website: "https://mewa.gov.sa",
    role: "Bioinformatician",
    period: "Nov 2024 – Present",
    color: "sky",
    bullets: [
      "Spearhead national genomics initiatives for food security, managing Saudi Arabia's largest plant genomics repository.",
      "Direct WGS analyses for strategic crops (wheat, sorghum, apple, coffee) identifying drought tolerance markers.",
      "Design SNP and SSR marker panels for high-throughput genotyping pipelines.",
    ],
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    company: "Genalive Lab (Alfaisalyah Group)",
    website: undefined,
    role: "Scientific Business Development",
    period: "Sep 2024 – Present",
    color: "sky",
    bullets: [
      "Lead design and automation of bioinformatics pipelines for WES, WGS, and transcriptomics.",
      "Develop scalable workflows for variant discovery across human, animal, and environmental genomics.",
      "Establish biobanking and genomic surveillance platforms for multi-omics integration.",
    ],
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    company: "King Abdullah International Medical Research Center (KAIMRC)",
    website: "https://kaimrc.ksau-hs.edu.sa",
    role: "Bioinformatician (Grand)",
    period: "Jun 2022 – Jun 2023",
    color: "sky",
    bullets: [
      "Engineered cloud-native genomic pipelines (Terra, Docker, WDL) for large-scale cancer variant detection.",
      "Implemented DeepVariant workflows surpassing GATK performance for low-frequency indels.",
      "Discovered transposable element insertions linked to oncogenesis; performed CNV analysis with CNVkit.",
      "Achieved 99% reduction in manual workload via automated Terra cloud infrastructure.",
    ],
  },
  {
    icon: <Database className="w-5 h-5" />,
    company: "National Livestock & Fisheries Development Program (MEWA)",
    website: undefined,
    role: "Bioinformatics Specialist",
    period: "May 2023 – Sep 2024",
    color: "emerald",
    bullets: [
      "Led advanced shrimp breeding programs with low-density SNP panels for genomic selection.",
      "Sequenced and analyzed bacterial outbreaks in aquaculture, managing extensive pathogen genome datasets.",
      "Profiled microbiomes across farm systems to define optimal health signatures for Tilapia culture.",
    ],
  },
  {
    icon: <Globe className="w-5 h-5" />,
    company: "King Abdulaziz City for Science and Technology (KACST)",
    website: undefined,
    role: "Bioinformatician",
    period: "Feb 2018 – Jan 2021",
    color: "sky",
    bullets: [
      "Contributed to the Saudi Genome Project for large-scale human variant discovery.",
      "First author on landmark camel and date palm genome projects.",
      "Deployed automated NGS pipelines during COVID-19 pandemic for WGS, WES, and 16S workflows.",
    ],
  },
];

function RoleCard({ role, index }: { role: typeof ROLES[0]; index: number }) {
  const colorMap = {
    sky: { icon: "text-sky-400", border: "border-sky-500/20", bg: "bg-sky-500/5", badge: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
    emerald: { icon: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/5", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  };
  const c = colorMap[role.color as keyof typeof colorMap];

  return (
    <FadeIn delay={index * 0.07}>
      <div className={`relative p-6 rounded-2xl border ${c.border} ${c.bg} card-glow`}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3">
            <div className={`mt-0.5 p-2 rounded-lg bg-white/5 ${c.icon}`}>{role.icon}</div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-display font-bold text-white text-base">{role.company}</h3>
                {role.website && (
                  <a href={role.website} target="_blank" rel="noopener noreferrer" className={`${c.icon} opacity-60 hover:opacity-100`}>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <p className={`text-sm font-semibold mt-0.5 ${c.icon}`}>{role.role}</p>
            </div>
          </div>
          <span className={`shrink-0 text-xs px-3 py-1 rounded-full border font-medium ${c.badge}`}>{role.period}</span>
        </div>
        <ul className="space-y-1.5">
          {role.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
              <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${c.icon} opacity-60`} style={{ background: "currentColor" }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

function Roles() {
  return (
    <section id="roles" className="py-24 bg-[#0a0e17]">
      <div className="container">
        <FadeIn>
          <p className="section-label mb-3">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Current <span className="gradient-text">Leadership & Roles</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mb-12">
            Driving innovation across genomics, precision medicine, and sustainable agriculture through
            leadership positions at the forefront of Saudi Arabia's biotechnology landscape.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-5">
          {ROLES.map((role, i) => (
            <RoleCard key={role.company + role.role} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────
const SKILL_GROUPS = [
  {
    icon: <Dna className="w-5 h-5" />,
    title: "Genomics & Sequencing",
    skills: ["WGS", "WES", "GWAS", "Metagenomics", "Metatranscriptomics", "16S rRNA", "SNP Arrays", "NGS"],
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Bioinformatics Tools",
    skills: ["GATK", "DeepVariant", "BWA", "Bowtie2", "CNVkit", "GISTIC", "QIIME2", "Kraken2", "MetaPhlAn", "RepeatMasker"],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Pipeline Development",
    skills: ["Snakemake", "Nextflow", "WDL", "Docker", "Bash Scripting"],
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud & HPC",
    skills: ["Terra", "Google Cloud", "HPC Cluster Management"],
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Programming & Data Analysis",
    skills: ["Python", "R", "Unix/Linux", "Statistical Modeling", "Machine Learning"],
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    title: "Research Interests",
    skills: ["Transposable Elements", "RNA Expression", "Population Genetics", "Conservation Genomics"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <FadeIn>
          <p className="section-label mb-3">Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">
            Core <span className="gradient-text">Technical Skills</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.08}>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/2 card-glow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">{group.icon}</div>
                  <h3 className="font-display font-semibold text-white text-sm">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Publications ──────────────────────────────────────────────
const PUBLICATIONS = [
  { title: "Molecular Detection of Exosomal miRNAs of Blood Serum for Prognosis of Colorectal Cancer", status: "Published" },
  { title: "Moderately Low Effectiveness of the Influenza Quadrivalent Vaccine: Potential Mismatch Between Circulating Strains and Vaccine Strains", status: "Published" },
  { title: "Genome-Wide Mining of Selaginella moellendorffii for Hevein-Like Lectins and Their Potential Molecular Mimicry with SARS-CoV-2 Spike Glycoprotein", status: "Published" },
  { title: "Decision Tree for Classifying Betacoronavirus Species Using Amino Acid Frequencies", status: "Published" },
  { title: "Comparative Genome-Wide Analysis of Ovis aries of Saudi Arabia Highlighting Inbreeding and Genetic Isolation of the Najdi Sheep Breed", status: "Published" },
  { title: "Geographical Distribution, Genetic Diversity, and Environmental Adaptations of Dromedary Camel Breeds in Saudi Arabia", status: "Published" },
  { title: "Genome-Wide Association Study for High Milk Yield in Saudi Arabian Dromedary Using Whole-Genome Sequencing", status: "Published" },
  { title: "Comparative Analysis of Transposable Elements Provides Insights Into Genome Evolution in the Genus Camelus", status: "Published" },
  { title: "Parentage Verification and Genetic Characterization of Dromedary Camels Using Molecular Markers", status: "Published" },
  { title: "Identification and Characterization of Testis-Specific Gene Expressions in Mouse Tissues", status: "Published" },
  { title: "In Silico Analysis of L- and G-Type Lectin Receptor Kinases in Tomato: Evolution, Diversity, and Abiotic Responses", status: "Published" },
  { title: "Lectin Gene Families in Three Phaseolus Species: Genome-Wide Identification, Evolutionary Analysis, and Regulation Under Multiple Stress Conditions", status: "Published" },
  { title: "Genome-Wide Comparative Analysis of Transposable Elements in Palmae Genomes", status: "Published" },
  { title: "DeepLNCrnaPredictor: Prediction of Long Non-Coding RNA Using Deep Learning Techniques", status: "Published" },
  { title: "Robust Biodiversity Assessment and DNA Fingerprinting of Saudi and Exotic Sesame Germplasm Using Whole Genome Resequencing. Genet Resour Crop Evol 73, 91 (2026)", status: "Published" },
  { title: "Whole-Genome Sequencing Reveals Genomic Diversity and Population Structure of Saudi Arabia Mango Germplasm", status: "Review Finalised" },
  { title: "Genomic Structure and DNA Fingerprinting of Saudi Sorghum bicolor Germplasm Using Whole-Genome Resequencing (BMC Plant Biology, 2026)", status: "Submitted" },
  { title: "Tracing the Evolutionary Dynamics and the Transcriptional Partitioning of Terpene Synthase Gene Family in Coffea arabica (AoB PLANTS)", status: "Submitted" },
  { title: "Shotgun Metagenomic Profiling of Non-cpe Clostridium perfringens Reveals Mucinolytic and Cytolytic Genes in Pediatric Adenovirus Gastroenteritis", status: "Published" },
  { title: "Metagenomic Shotgun Analysis of Infant Gut Microbiome to Identify Antimicrobial Resistance Genes Associated with Rotavirus Infection in Saudi Infants", status: "Under Review" },
  { title: "5-methylcytosine Writer NSUN2 Controls Cell Migration in a Paracrine Fashion by Sorting Migration Genes into Exosomes Using Degenerate Sequences", status: "Under Review" },
  { title: "predictLNCrna: Prediction of Long Non-Coding RNA Using Machine Learning and k-mer Features", status: "Under Review" },
];

const STATUS_COLORS: Record<string, string> = {
  "Published": "emerald-badge",
  "Under Review": "bg-amber-500/10 border border-amber-500/30 text-amber-400",
  "Submitted": "bg-sky-500/10 border border-sky-500/30 text-sky-400",
  "Review Finalised": "bg-violet-500/10 border border-violet-500/30 text-violet-400",
};

function Publications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PUBLICATIONS : PUBLICATIONS.slice(0, 6);

  return (
    <section id="publications" className="py-24 bg-[#0a0e17]">
      <div className="container">
        <FadeIn>
          <p className="section-label mb-3">Research</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">22 Publications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mb-12">
            Spanning genomics, bioinformatics, computational biology, and population genetics.
          </p>
        </FadeIn>
        <div className="space-y-3">
          {visible.map((pub, i) => (
            <FadeIn key={i} delay={(i % 6) * 0.06}>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/2 hover:border-sky-500/20 hover:bg-sky-500/3 transition-all duration-200 group">
                <span className="shrink-0 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-sky-400 transition-colors">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-300 text-sm leading-relaxed">{pub.title}</p>
                </div>
                <span className={`shrink-0 text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_COLORS[pub.status] || "emerald-badge"}`}>
                  {pub.status}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
        {!showAll && (
          <FadeIn delay={0.3}>
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2.5 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium hover:bg-sky-500/10 transition-all duration-200"
              >
                Show all 22 publications
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

// ── Achievements ──────────────────────────────────────────────
const ACHIEVEMENTS = [
  {
    icon: "🐪",
    title: "International Year of Camelids",
    desc: "Participated in the official establishment at FAO Headquarters, Rome (2023).",
  },
  {
    icon: "🏅",
    title: "Deputy Prime Minister Recognition",
    desc: "Received official recognition from H.E. Deputy Prime Minister Mansour Al-Mushaiti for leading contributions to the national Genomics Department.",
  },
  {
    icon: "🧬",
    title: "First Camel SNP Chip",
    desc: "Pioneered the first camel-specific microarray SNP chip through a complete WGS workflow.",
  },
  {
    icon: "🌱",
    title: "Saudi Plant Genomics Repository",
    desc: "Established Saudi Arabia's largest plant genomics repository with 1,000+ WGS datasets, supporting Vision 2030.",
  },
];

function Achievements() {
  return (
    <section className="py-24">
      <div className="container">
        <FadeIn>
          <p className="section-label mb-3">Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.1}>
              <div className="flex gap-4 p-6 rounded-2xl border border-emerald-500/15 bg-emerald-500/3 card-glow">
                <span className="text-3xl shrink-0">{a.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-white mb-1">{a.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Education ─────────────────────────────────────────────────
const EDUCATION = [
  {
    degree: "PhD Candidate",
    institution: "Universiti Malaysia Terengganu (UMT)",
    period: "In Progress",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    degree: "MSc in Bioinformatics",
    institution: "Online (Postgraduate)",
    period: "Completed",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    degree: "BSc in Bioinformatics",
    institution: "University of Malaya (UM), Kuala Lumpur",
    period: "Completed",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

const CERTS = [
  { name: "System Administration & IT Infrastructure", org: "Google", year: "2020" },
  { name: "Create and Manage Cloud Resources", org: "Google Cloud Skills Boost", year: "2022" },
  { name: "Bioinformatic Methods I", org: "University of Toronto", year: "2020" },
  { name: "Python for Genomic Data Science", org: "Johns Hopkins University", year: "2022" },
  { name: "Command Line Tools for Genomic Data Science", org: "Johns Hopkins University", year: "2022" },
  { name: "Linux Server Management and Security", org: "University of Colorado System", year: "2021" },
  { name: "Write and Publish a Scientific Paper", org: "Ecole Polytechnique", year: "2022" },
  { name: "Bioinformatics Databases with Biopython", org: "Coursera", year: "2021" },
  { name: "Introduction to Cybersecurity", org: "Cisco", year: "2020" },
  { name: "Bash Scripting on Linux", org: "Coursera", year: "2021" },
];

function Education() {
  return (
    <section id="education" className="py-24 bg-[#0a0e17]">
      <div className="container">
        <FadeIn>
          <p className="section-label mb-3">Education & Certifications</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </FadeIn>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Degrees */}
          <div>
            <FadeIn>
              <h3 className="font-display font-semibold text-sky-400 text-sm uppercase tracking-widest mb-5">Degrees</h3>
            </FadeIn>
            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <FadeIn key={edu.degree} delay={i * 0.1}>
                  <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-white/2 card-glow">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 h-fit">{edu.icon}</div>
                    <div>
                      <h4 className="font-display font-bold text-white">{edu.degree}</h4>
                      <p className="text-slate-400 text-sm">{edu.institution}</p>
                      <span className="text-xs text-sky-400 mt-1 inline-block">{edu.period}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <FadeIn>
              <h3 className="font-display font-semibold text-emerald-400 text-sm uppercase tracking-widest mb-5">Certifications</h3>
            </FadeIn>
            <div className="space-y-2">
              {CERTS.map((cert, i) => (
                <FadeIn key={cert.name} delay={i * 0.05}>
                  <div className="flex items-center justify-between gap-3 p-3.5 rounded-lg border border-white/5 bg-white/2 hover:border-emerald-500/20 transition-all duration-200 group">
                    <div className="flex items-center gap-3 min-w-0">
                      <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-slate-300 text-sm font-medium truncate">{cert.name}</p>
                        <p className="text-slate-500 text-xs">{cert.org}</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs text-slate-500">{cert.year}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="section-label mb-3">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="gradient-text">Collaborate</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              I'm always interested in collaborating on innovative genomics projects, discussing bioinformatics
              challenges, or exploring opportunities in precision medicine and computational biology.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="mailto:mohanadahmedibrahim@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/20"
              >
                <Mail className="w-4 h-4" />
                mohanadahmedibrahim@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/mohanad-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-sky-500/30 text-sky-400 font-semibold hover:bg-sky-500/10 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://orcid.org/0000-0002-8282-6169"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                ORCID Profile
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-500">
              <span>📍 Riyadh, Saudi Arabia</span>
              <span>·</span>
              <span>📞 +966 57 756 5987</span>
              <span>·</span>
              <a href="https://embryo.sa" className="hover:text-sky-400 transition-colors">embryo.sa</a>
              <span>·</span>
              <a href="https://alwissam.sa" className="hover:text-sky-400 transition-colors">alwissam.sa</a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-[#0a0e17]">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <div className="flex items-center gap-2">
          <Dna className="w-4 h-4 text-sky-400" />
          <span className="font-display font-semibold text-white">Mohanad A. Ibrahim</span>
        </div>
        <p className="text-center">"Transforming genomic data into biological insights"</p>
        <p>© 2026 All rights reserved.</p>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Roles />
      <Skills />
      <Publications />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
