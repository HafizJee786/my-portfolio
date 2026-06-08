import { useState } from "react";
import { Github, ExternalLink, Play, RotateCcw, Monitor, RefreshCw, Search, Sparkles, Cpu, FileText, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_PROJECTS } from "../data";

export default function ProjectsShowcase() {
  // Console state simulators
  const [payrollActive, setPayrollActive] = useState(false);
  const [thinkSearch, setThinkSearch] = useState("");
  const [gradeActive, setGradeActive] = useState(false);
  const [activeJobIdx, setActiveJobIdx] = useState(0);
  const [isScreening, setIsScreening] = useState(false);

  // PayRoll Pro Terminal script simulator
  const basePayrollOutput = `✓ PayRoll Pro Management System Loaded
✓ Employee Database Stream Parsed
✓ Active Records: 150 Employees
✓ FBR Income Tax Slab Rules Loaded

[SYSTEM STATUS: READY FOR CALCULATIONS]`;

  const activePayrollOutput = `${basePayrollOutput}

-> [STARTING MONTHLY PAYROLL CYCLE]...
-> Running automated salary multipliers...
✓ Employee Base Adjusted (AHMED KHAN)
✓ Calculation Complete: FBR Tax Formula Applied
✓ PDF Payslip Compiled in Buffer

Employee Metadata:
------------------------------------------
Name: Ahmed Khan  // ID: ENG-104
Basic Salary: PKR 120,000
Tax Deduction: PKR 8,500
Net Salary: PKR 111,500

✓ Net totals transferred to bank vault EFT.
✓ Ledger balance updated successfully.
✓ Total Monthly Payroll: PKR 12,450,000 🎉`;

  // ThinkPulse artificial intelligence structured results
  const thinkPulseReports = [
    {
      title: "Generative Agent Workflows",
      framework: "LangChain + FastAPI",
      score: "0.98 Similarity",
      bg: "from-indigo-950 to-neutral-950",
      accent: "text-indigo-400",
      description: "Generates multi-depth recursive reports validating information from Tavily API web crawls.",
    },
    {
      title: "Consensus Protocols Log",
      framework: "Python + LlamaIndex",
      score: "0.95 Similarity",
      bg: "from-purple-950 to-neutral-950",
      accent: "text-purple-400",
      description: "Autonomous agents analyzing distributed ledger topologies and grading security parameters.",
    },
    {
      title: "TF-IDF Vector Tuning",
      framework: "sklearn + spaCy",
      score: "0.91 Similarity",
      bg: "from-rose-950 to-neutral-950",
      accent: "text-rose-400",
      description: "Mathematical modeling of context clusters within high-dimensional corpus distributions.",
    },
    {
      title: "Scaling Docker Clusters",
      framework: "Nginx + Docker Cloud",
      score: "0.88 Similarity",
      bg: "from-amber-950 to-neutral-950",
      accent: "text-amber-400",
      description: "Continuous deployment parameters for high-throughput REST APIs and reverse proxy routes.",
    },
  ];

  const filteredReports = thinkPulseReports.filter(
    (r) =>
      r.title.toLowerCase().includes(thinkSearch.toLowerCase()) ||
      r.framework.toLowerCase().includes(thinkSearch.toLowerCase()) ||
      r.description.toLowerCase().includes(thinkSearch.toLowerCase())
  );

  // PUCIT Grade Calculator simulation
  const baseGradeScript = `✓ PUCIT Grade Calculator Module Initiated
✓ System expecting numeric values (Credit Hours & Letters Grade)

Waiting for batch calculation query...`;

  const activeGradeScript = `${baseGradeScript}

-> Course: Data Structures (3 Cr. Hrs) -> Grade: A [GP: 4.0]
-> Course: Database Systems (3 Cr. Hrs) -> Grade: B+ [GP: 3.3]
-> Course: Operating Systems (4 Cr. Hrs) -> Grade: A- [GP: 3.7]

---------------------------------------------------------
Calculated Semester GPA: 3.67
Total Academic Credit Hours parsed: 10 Cr. Hrs
✓ Semester Grade Points Synchronized

🎓 GPA & CGPA computed flawlessly!`;

  // Resume Screener AI targets
  const screeningJobs = [
    {
      role: "Lead React Developer",
      bestMatch: "John Doe.pdf",
      score: 94,
      nlpFocus: "State management / TypeScript",
      status: "Highly Relevant",
    },
    {
      role: "Python ML Engineer",
      bestMatch: "Sarah Smith.pdf",
      score: 88,
      nlpFocus: "TF-IDF Matrix / Cosine Similarity",
      status: "Strong Match",
    },
    {
      role: "SaaS Devops Ops",
      bestMatch: "Emily Watson.pdf",
      score: 72,
      nlpFocus: "Docker / CI-CD Pipelines",
      status: "Moderate",
    },
  ];

  const triggerScreenerParsing = () => {
    setIsScreening(true);
    setTimeout(() => {
      setIsScreening(false);
      setActiveJobIdx((prev) => (prev + 1) % screeningJobs.length);
    }, 1200);
  };

  // Get project objects from data.ts
  const payrollProject = PORTFOLIO_PROJECTS.find((p) => p.id === "PayRoll Pro") || PORTFOLIO_PROJECTS[0];
  const thinkpulseProject = PORTFOLIO_PROJECTS.find((p) => p.id === "ThinkPulse") || PORTFOLIO_PROJECTS[1];
  const gpaProject = PORTFOLIO_PROJECTS.find((p) => p.id === "pucit-grade-calculator") || PORTFOLIO_PROJECTS[2];
  const screenerProject = PORTFOLIO_PROJECTS.find((p) => p.id === "resume-screener-ai") || PORTFOLIO_PROJECTS[3];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background soft ambient glowing circles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-peach/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-sage/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20 animate-fade-in">
          <span className="font-mono text-xs text-sage tracking-widest uppercase">
            Curated Creation Showcase
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-[1px] bg-peach/60 mt-2" />
        </div>

        {/* Alternate Stack of Projects */}
        <div id="projects-list-container" className="space-y-32">
          
          {/* PROJECT ONE: PayRoll Pro (Asymmetrical Left details, Right mockup) */}
          <div id="project-card-payroll" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-cream">
                {payrollProject.name}
              </h3>
              
              {/* Tech Stack Tags */}
              <div id="payroll-tags" className="flex flex-wrap gap-2">
                {payrollProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-sage hover:text-peach bg-clay/55 border border-cream/5 px-3 py-1 rounded-sm transition duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-sans text-base text-cream/70 leading-relaxed font-light">
                {payrollProject.description}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 items-center pt-2">
                <a
                  id="btn-payroll-source"
                  href={payrollProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-peach text-terracotta border border-peach font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-transparent hover:text-peach transition-all duration-300 flex items-center gap-2 group pointer-events-auto cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
                <a
                  id="btn-payroll-live"
                  href={payrollProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group py-2 px-3 text-cream hover:text-peach font-mono text-xs tracking-wider transition duration-300 flex items-center gap-1.5"
                >
                  Live Code
                  <span className="text-sm font-sans transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Right Interactive Custom Executive terminal simulation */}
            <div className="lg:col-span-7">
              <div className="rounded-sm border border-cream/15 bg-neutral-950 overflow-hidden shadow-2xl relative group">
                {/* Console header */}
                <div className="bg-clay/40 px-4 py-3 flex justify-between items-center border-b border-cream/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                  </div>
                  <span className="font-mono text-[10px] text-cream/35 tracking-widest uppercase">
                    payroll-server.py // terminal
                  </span>
                  <button
                    id="sim-payroll-btn"
                    onClick={() => setPayrollActive((p) => !p)}
                    className="p-1 rounded-sm hover:bg-cream/5 text-peach/70 hover:text-peach transition duration-200"
                    title={payrollActive ? "Reset calculations" : "Calculate payroll cycle"}
                  >
                    {payrollActive ? (
                      <RotateCcw className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {/* Console text area */}
                <pre className="p-6 font-mono text-xs text-cream/75 leading-relaxed overflow-x-auto whitespace-pre h-72">
                  <code>{payrollActive ? activePayrollOutput : basePayrollOutput}</code>
                </pre>
                {/* Interactivity Hint Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 to-transparent py-4 flex justify-center pointer-events-none opacity-80">
                  <span className="bg-clay border border-cream/10 px-3 py-1 rounded-sm text-[10px] font-mono text-sage">
                    {payrollActive ? "Computational snapshot active" : "Click run icon to execute batch dry run"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT TWO: ThinkPulse (Asymmetrical Right details, Left mockup) */}
          <div id="project-card-thinkpulse" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Mockup (ThinkPulse Assistant Search Interface representation) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="p-6 bg-clay/50 rounded-sm border border-cream/15 shadow-2xl backdrop-blur-sm space-y-6">
                
                {/* Simulated interactive search input */}
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-sm bg-peach/10 text-peach">
                      <Cpu className="w-4 h-4" />
                    </span>
                    <span className="font-serif text-sm font-semibold text-cream">ThinkPulse Research Engine</span>
                  </div>
                  <div className="relative w-full sm:w-auto">
                    <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-cream/35" />
                    <input
                      id="thinkpulse-search-input"
                      type="text"
                      placeholder="Query topic or agents..."
                      value={thinkSearch}
                      onChange={(e) => setThinkSearch(e.target.value)}
                      className="bg-neutral-950 border border-cream/15 focus:border-peach outline-none py-1.5 pl-8 pr-3 rounded-sm font-mono text-[11px] text-cream w-full sm:w-44 placeholder:text-cream/30"
                    />
                  </div>
                </div>

                {/* Simulated database list result items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <AnimatePresence mode="popLayout">
                    {filteredReports.slice(0, 2).map((item, idx) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`p-4 rounded-sm bg-neutral-950 border border-cream/5 flex flex-col justify-between h-44 hover:border-peach/30 transition-colors duration-300 group`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-start">
                            <h4 className="font-serif text-sm font-bold text-cream tracking-tight group-hover:text-peach transition duration-200">
                              {item.title}
                            </h4>
                            <span className="font-mono text-[8px] text-sage px-1.5 py-0.5 rounded-sm bg-cream/5">
                              {item.score}
                            </span>
                          </div>
                          <p className="font-mono text-[9px] text-sage/75">{item.framework}</p>
                        </div>
                        <p className="font-sans text-[11px] text-cream/60 leading-normal mb-1">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center text-[8px] font-mono text-peach/50 uppercase tracking-wider">
                          <span>Report Valid</span>
                          <span>[ Ready ]</span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {filteredReports.length === 0 && (
                    <div className="col-span-2 py-10 flex flex-col items-center justify-center text-center text-sage">
                      <p className="font-mono text-xs">No matching reports generated.</p>
                      <button 
                        onClick={() => setThinkSearch("")}
                        className="mt-2 text-[10px] text-peach underline cursor-pointer"
                      >
                        Reset Filter
                      </button>
                    </div>
                  )}
                </div>

                <div className="font-mono text-[10.5px] text-sage/75 flex justify-between items-center pt-2 px-1">
                  <span>Displaying {filteredReports.length} of {thinkPulseReports.length} autonomous outputs</span>
                  <span className="text-[9px] text-peach">[ hf-spaces // API CONNECTED ]</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <h3 className="font-serif text-3xl font-semibold text-cream">
                {thinkpulseProject.name}
              </h3>
              
              {/* Tech tags */}
              <div id="thinkpulse-tags" className="flex flex-wrap gap-2">
                {thinkpulseProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-sage hover:text-peach bg-clay/55 border border-cream/5 px-3 py-1 rounded-sm transition duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-sans text-base text-cream/70 leading-relaxed font-light">
                {thinkpulseProject.description}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 items-center pt-2">
                <a
                  id="btn-thinkpulse-source"
                  href={thinkpulseProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-peach text-terracotta border border-peach font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-transparent hover:text-peach transition-all duration-300 flex items-center gap-2 pointer-events-auto cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
                <a
                  id="btn-thinkpulse-live"
                  href={thinkpulseProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group py-2 px-3 text-cream hover:text-peach font-mono text-xs tracking-wider transition duration-300 flex items-center gap-1.5"
                >
                  HuggingFace Space
                  <span className="text-sm font-sans transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT THREE: PUCIT Grade Calculator (Asymmetrical Left details, Right mockup) */}
          <div id="project-card-gpa" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-cream">
                {gpaProject.name}
              </h3>
              
              {/* Tech Stack Tags using custom contrast sage color */}
              <div id="gpa-tags" className="flex flex-wrap gap-2">
                {gpaProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-sage hover:text-peach bg-clay/55 border border-cream/5 px-3 py-1 rounded-sm transition duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-sans text-base text-cream/70 leading-relaxed font-light">
                {gpaProject.description}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 items-center pt-2">
                <a
                  id="btn-gpa-source"
                  href={gpaProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-peach text-terracotta border border-peach font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-transparent hover:text-peach transition-all duration-300 flex items-center gap-2 pointer-events-auto cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </a>
                <a
                  id="btn-gpa-live"
                  href={gpaProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group py-2 px-3 text-cream hover:text-peach font-mono text-xs tracking-wider transition duration-300 flex items-center gap-1.5"
                >
                  Run Calculator
                  <span className="text-sm font-sans transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Right Mockup Code Editor Console */}
            <div className="lg:col-span-7">
              <div className="rounded-sm border border-cream/15 bg-neutral-950 overflow-hidden shadow-2xl relative group">
                {/* Console header */}
                <div className="bg-clay/40 px-4 py-3 flex justify-between items-center border-b border-cream/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                  </div>
                  <span className="font-mono text-[10px] text-cream/35 tracking-widest uppercase">
                    pucit-calculator.js (npm script)
                  </span>
                  <button
                    id="sim-grade-btn"
                    onClick={() => setGradeActive((p) => !p)}
                    className="p-1 rounded-sm hover:bg-cream/5 text-peach/70 hover:text-peach transition duration-200"
                    title={gradeActive ? "Reset computations" : "Execute grade math"}
                  >
                    {gradeActive ? (
                      <RotateCcw className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {/* Text area code output */}
                <pre className="p-6 font-mono text-xs text-cream/80 leading-relaxed overflow-x-auto whitespace-pre h-72">
                  <code className="text-sage">{gradeActive ? activeGradeScript : baseGradeScript}</code>
                </pre>
                {/* Interactivity Indicator */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 to-transparent py-4 flex justify-center pointer-events-none opacity-80">
                  <span className="bg-clay border border-cream/10 px-3 py-1 rounded-sm text-[10px] font-mono text-sage">
                    {gradeActive ? "[CGPA SYNCHRONIZATION: EXCELLENT]" : "Click play to feed sample student grading structure"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT FOUR: Resume Screener AI (Asymmetrical Right details, Left mockup) */}
          <div id="project-card-screener" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Mockup Mini Resume Screener Workspace container */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-neutral-900 rounded-sm border border-cream/15 overflow-hidden shadow-2xl relative">
                {/* Simulated browser header */}
                <div className="bg-clay/55 px-4 py-3 flex justify-between items-center border-b border-cream/10">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
                    <span className="font-mono text-[9.5px] text-cream/45 ml-4 bg-neutral-950 px-3 py-0.5 rounded-sm border border-cream/5">
                      https://resume-screener.railway.app
                    </span>
                  </div>
                  {/* Theme Switcher Button mimics interactivity */}
                  <button
                    id="screener-trigger-btn"
                    onClick={triggerScreenerParsing}
                    disabled={isScreening}
                    className="p-1 px-2.5 rounded-sm bg-clay hover:bg-cream/15 text-[10px] font-mono text-peach flex items-center gap-1 transition duration-200 disabled:opacity-50"
                  >
                    <RefreshCw className={`w-2.5 h-2.5 ${isScreening ? "animate-spin" : ""}`} />
                    {isScreening ? "Screening..." : "Switch Candidate"}
                  </button>
                </div>

                {/* Simulated Content of ML NLP Screener platform */}
                <div className="p-8 bg-neutral-950 min-h-[220px] transition-all duration-500 flex flex-col justify-between">
                  <div className="flex justify-between items-start pb-4 border-b border-cream/5">
                    <div>
                      <h4 className="font-serif text-base text-cream">TF-IDF Vector Ranking Output</h4>
                      <p className="font-mono text-[9px] text-sage">Active Role: {screeningJobs[activeJobIdx].role}</p>
                    </div>
                    <span className="font-mono text-xs px-2 py-0.5 bg-peach/10 text-peach rounded-sm border border-peach/15">
                      {screeningJobs[activeJobIdx].status}
                    </span>
                  </div>

                  <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-cream/80">
                        <FileText className="w-4 h-4 text-peach" />
                        <span className="font-mono text-[11px] truncate">{screeningJobs[activeJobIdx].bestMatch}</span>
                      </div>
                      <div className="text-[10px] font-sans text-sage/75">
                        <span className="font-mono text-[9px] text-cream">Focus:</span> {screeningJobs[activeJobIdx].nlpFocus}
                      </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-end justify-center">
                      <div className="text-2xl font-serif font-bold text-peach leading-none">
                        {screeningJobs[activeJobIdx].score}%
                      </div>
                      <span className="font-mono text-[8px] text-cream/40 uppercase tracking-wider mt-1">Cosine Match Matrix</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-[9px] font-mono border-t border-cream/5 text-sage/60">
                    <span>Model: scikit-learn Logistic Regression</span>
                    <span className="flex items-center gap-1 text-[#27C93F]">
                      <UserCheck className="w-3 h-3" /> API_READY
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <h3 className="font-serif text-3xl font-semibold text-cream">
                {screenerProject.name}
              </h3>
              
              {/* Tech tags */}
              <div id="screener-tags" className="flex flex-wrap gap-2">
                {screenerProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-sage hover:text-peach bg-clay/55 border border-cream/5 px-3 py-1 rounded-sm transition duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-sans text-base text-cream/70 leading-relaxed font-light">
                {screenerProject.description}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 items-center pt-2">
                <a
                  id="btn-screener-source"
                  href={screenerProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-peach text-terracotta border border-peach font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-transparent hover:text-peach transition-all duration-300 flex items-center gap-2 pointer-events-auto cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </a>
                <a
                  id="btn-screener-live"
                  href={screenerProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group py-2 px-3 text-cream hover:text-peach font-mono text-xs tracking-wider transition duration-300 flex items-center gap-1.5"
                >
                  Source Code/Live
                  <span className="text-sm font-sans transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Cross section Divider rule */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-28">
        <hr className="border-cream/15" />
      </div>
    </section>
  );
}
