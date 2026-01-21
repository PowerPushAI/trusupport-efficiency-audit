import React, { useState } from "react";
import { Activity, ShieldAlert, Rocket, Clock, Zap } from "lucide-react";
import ResultsDashboard from "./ResultsDashboard";
import { AnimatePresence, motion } from "framer-motion";
import { analyzeMetrics } from "../utils/scoringLogic";
// Import specific icons from react-icons
import { FaRocket, FaGlobeAmericas, FaShieldAlt } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { RiDashboardFill, RiBookOpenLine } from "react-icons/ri";

/**
 * 1. BRAND LOGO CONSTANT
 * Usage: <BrandLogo /> or <BrandLogo size="sm" />
 */
export const BrandLogo = ({ size = "base" }) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div
      className={`${size === "sm" ? "w-8 h-8" : "w-10 h-10"} bg-[#9B51E0]/10 rounded-xl flex items-center justify-center `}
    >
      <img
        src="/logo.png"
        alt="TruSupport"
        className="rounded-full transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <span
      className={`${size === "sm" ? "text-lg" : "text-2xl"} font-black tracking-tighter text-[#E1E1E1]`}
    >
      Tru<span className="text-[#9B51E0]">Support</span>
    </span>
  </div>
);

/**
 * 2. NAVBAR CONSTANT
 */
export const Navbar = () => {
  const links = [
    { name: "Audit Engine", icon: <RiDashboardFill /> },
    { name: "SaaS Benchmarks", icon: <FaGlobeAmericas /> },
  ];

  return (
    <nav className="sticky top-0 z-[100] border-b border-white/5 bg-[#181818]/80 backdrop-blur-xl px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <BrandLogo />

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href="#"
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#9B51E0] transition-colors"
            >
              <span className="text-[#9B51E0]/60">{link.icon}</span>
              {link.name}
            </a>
          ))}
          <button className="px-5 py-2 bg-[#9B51E0] text-white text-[11px] font-bold uppercase rounded-xl hover:opacity-90 shadow-lg shadow-[#9B51E0]/20 transition-all flex items-center gap-2">
            Connect CRM <FaRocket />
          </button>
        </div>
      </div>
    </nav>
  );
};

/**
 * 3. FOOTER CONSTANT
 */
export const Footer = () => {
  const sections = [
    {
      title: "Resources",
      icon: <RiBookOpenLine className="mb-1" />,
      items: ["SLA Guide", "API Docs", "Support Index"],
    },
    {
      title: "Company",
      icon: <FaShieldAlt className="mb-1" />,
      items: ["Privacy", "Terms", "Security"],
    },
  ];

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#121212] pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <BrandLogo size="sm" />
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Standardizing support efficiency via the SSSI framework. Auditing
              human performance for modern SaaS teams across the globe.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#9B51E0]">
                {section.icon}
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} TRUSUPPORT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <HiOutlineStatusOnline className="text-emerald-500 text-sm animate-pulse" />
            Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

const SlaChecker = () => {
  const [metrics, setMetrics] = useState({ frt: "", resolution: "" });
  const [results, setResults] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAction = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const data = analyzeMetrics({
        frt: Number(metrics.frt),
        resolution: Number(metrics.resolution),
      });
      setResults(data);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#181818] text-[#E1E1E1] selection:bg-[#9B51E0]/30 font-sans antialiased ">
      <Navbar />
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none p-4 md:p-0">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[40%] bg-[#9B51E0]/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[40%] bg-[#9B51E0]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto py-8 md:py-16">
        <header className="text-center mb-10 md:mb-16 space-y-4 px-4">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9B51E0]/20 text-[#9B51E0] text-[10px] md:text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: "rgba(155, 81, 224, 0.1)" }}
          >
            <Activity size={14} /> Efficiency Auditor
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#E1E1E1] tracking-tight leading-tight md:leading-none">
            Stop Losing Customers to <br className="hidden md:block" />
            <span style={{ color: "#9B51E0" }}>Slow Support.</span>
          </h1>
        </header>

        {/* Responsive Grid: stacks on mobile/tablet, 12 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch px-2 md:px-0">
          {/* LEFT COLUMN: INPUT CARD */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="w-full bg-[#181818] border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col h-full">
              <h3 className="text-lg md:text-xl font-bold text-[#E1E1E1] mb-6 md:mb-8 flex items-center gap-2">
                <Clock className="text-[#9B51E0]" size={20} /> Enter Metrics
              </h3>

              <div className="space-y-5 md:space-y-6 flex-grow">
                <MetricInput
                  label="Avg. First Response Time"
                  unit="Mins"
                  value={metrics.frt}
                  onChange={(v) => setMetrics({ ...metrics, frt: v })}
                />
                <MetricInput
                  label="Avg. Resolution Time"
                  unit="Mins"
                  value={metrics.resolution}
                  onChange={(v) => setMetrics({ ...metrics, resolution: v })}
                />

                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-[#9B51E0] text-[10px] font-black uppercase tracking-widest">
                    <Zap size={14} /> Audit Note
                  </div>
                  <p className="text-[10px] md:text-[11px] text-slate-500 leading-relaxed italic">
                    SLA scores are calculated using the{" "}
                    <strong className="text-[#E1E1E1]">
                      Standard SaaS Support Index (SSSI)
                    </strong>
                    .
                  </p>
                </div>
              </div>

              <div className="pt-6 md:pt-8">
                <button
                  onClick={handleAction}
                  disabled={!metrics.frt || isAnimating}
                  className="w-full group relative flex items-center justify-center gap-2 py-4 text-[#E1E1E1] font-black rounded-2xl transition-all overflow-hidden disabled:bg-white/5 disabled:text-slate-600 text-sm md:text-base"
                  style={{
                    backgroundColor:
                      !metrics.frt || isAnimating ? "" : "#9B51E0",
                  }}
                >
                  {isAnimating ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Analyze Support Health{" "}
                      <Rocket
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: RESULTS */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[300px] md:min-h-full">
              <AnimatePresence mode="wait">
                {results ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="h-full"
                  >
                    <ResultsDashboard results={results} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full"
                  >
                    <EmptyState />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const MetricInput = ({ label, unit, value, onChange }) => (
  <div className="space-y-1.5 md:space-y-2">
    <label className="text-[10px] md:text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest">
      {label}
    </label>
    <div className="relative">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 md:py-4 px-4 md:px-5 text-[#E1E1E1] focus:border-[#9B51E0] outline-none transition-all placeholder:text-slate-700 font-mono text-sm md:text-base"
        placeholder="0"
      />
      <span className="absolute right-[50px] top-1/2 -translate-y-1/2 text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest pointer-events-none">
        {unit}
      </span>
    </div>
  </div>
);

const EmptyState = () => (
  <div className="h-full bg-white/[0.02] border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-slate-500 p-8 md:p-12 text-center space-y-4">
    <div className="p-3 md:p-4 bg-white/5 rounded-full text-[#9B51E0]">
      <ShieldAlert size={28} md:size={32} />
    </div>
    <div className="space-y-2">
      <h4 className="text-[#E1E1E1] text-sm md:text-base font-bold tracking-tight uppercase">
        Audit Pending
      </h4>
      <p className="max-w-[250px] md:max-w-xs text-xs md:text-sm mx-auto leading-relaxed text-slate-500">
        Enter metrics on the left to unlock benchmarking.
      </p>
    </div>
  </div>
);

export default SlaChecker;
