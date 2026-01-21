import React from "react";
import { TrendingDown, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const ResultsDashboard = ({ results }) => {
  return (
    <div className="bg-[#181818] border border-white/10 p-8 rounded-3xl h-full flex flex-col shadow-2xl">
      {/* TOP SECTION: Grade & Score */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">
            Audit Grade
          </h2>
          <div
            className={`text-8xl font-black tracking-tighter transition-colors duration-500`}
            style={{ color: "#9B51E0" }} // Strict accent color
          >
            {results.grade}
          </div>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center min-w-[100px]">
          <div className="text-[10px] font-bold text-slate-500 uppercase">
            Score
          </div>
          <div className="text-3xl font-black text-[#E1E1E1]">
            {results.score}
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION: Key Stats */}
      <div className="flex-grow space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex items-center gap-2 mb-1 text-red-400">
              <TrendingDown size={16} />
              <span className="text-[10px] font-black uppercase text-slate-500">
                User Loss
              </span>
            </div>
            <div className="text-2xl font-bold text-[#E1E1E1]">
              {results.churnRisk}%
            </div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex items-center gap-2 mb-1 text-[#9B51E0]">
              <Zap size={16} />
              <span className="text-[10px] font-black uppercase text-slate-500">
                AI Savings
              </span>
            </div>
            <div className="text-2xl font-bold text-[#E1E1E1]">
              {results.potentialSavings}m
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>Market Benchmark</span>
            <span className="text-[#E1E1E1]">Top 15%</span>
          </div>
          <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-[2px]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${results.score}%` }}
              className="h-full rounded-full"
              style={{ backgroundColor: "#9B51E0" }}
            />
          </div>
        </div>

        <div className="bg-white/5 p-4 rounded-2xl flex items-start gap-3 border border-white/5">
          <ShieldCheck className="text-[#9B51E0] shrink-0" size={18} />
          <p className="text-xs text-[#E1E1E1]/70 leading-relaxed">
            Your current response time is{" "}
            <span className="text-[#E1E1E1] font-bold text-base">
              higher than 65%
            </span>{" "}
            of high-growth companies in our database.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION: The TruSupport CTA */}
      <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
        <div className="text-center">
          <p className="text-[11px] text-slate-500 font-medium italic uppercase tracking-tighter">
            Upgrade Hook: Auto-SLA alerts + AI replies
          </p>
        </div>
        <button
          className="w-full group py-5 rounded-2xl font-black text-[#E1E1E1] transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg"
          style={{ backgroundColor: "#9B51E0" }}
        >
          <Zap size={20} className="fill-current" />
          FIX THIS WITH TRUSUPPORT
        </button>
      </div>
    </div>
  );
};

export default ResultsDashboard;
