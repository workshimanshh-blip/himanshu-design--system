import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveTabs() {
  const [activeTab, setActiveTab] = useState("hardware");

  const tabs = [
    { id: "hardware", label: "Hardware Specs", content: "Aircraft-grade titanium body, dynamic LED indicator ring, precise knurled metallic grip, and omnidirectional studio mic." },
    { id: "ai", label: "AI Engine", content: "Advanced LLM integration for live summaries, automated action items, and instant mind-mapping from voice data." },
    { id: "battery", label: "Power & Sync", content: "12 hours of continuous recording, ultra-fast Type-C charging, and instant local-to-cloud end-to-end encrypted sync." }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <div className="flex justify-center space-x-2 bg-zinc-900 p-1.5 rounded-2xl border border-zinc-800 max-w-md mx-auto mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 ${activeTab === tab.id ? "text-white" : "text-zinc-400 hover:text-white"}`}
          >
            {activeTab === tab.id && (
              <motion.div layoutId="active-pill" className="absolute inset-0 bg-indigo-600 rounded-xl" transition={{ type: "spring", stiffness: 380, damping: 30 }} style={{ zIndex: 0 }} />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 min-h-[140px] flex items-center justify-center backdrop-blur-sm">
        <AnimatePresence mode="wait">
          <motion.p key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
            {tabs.find((t) => t.id === activeTab)?.content}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
