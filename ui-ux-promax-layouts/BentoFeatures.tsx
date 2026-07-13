import { motion } from "framer-motion";

export default function BentoFeatures() {
  const features = [
    { title: "Real-time AI Transcription", desc: "Converts speech to pristine structured notes instantly in 50+ languages.", size: "md:col-span-2" },
    { title: "15-Speaker Separation", desc: "Smart audio diarization fixes speaker identities flawlessly.", size: "md:col-span-1" },
    { title: "FlowMark Technology", desc: "One-click hardware button bookmarking during live recording sessions.", size: "md:col-span-1" },
    { title: "Premium Titanium Build", desc: "Engineered with knurled grip and custom matte black metallic finish.", size: "md:col-span-2" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6 py-12">
      {features.map((f, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5, borderColor: "rgba(99, 102, 241, 0.4)" }}
          className={`${f.size} p-8 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl relative overflow-hidden group transition-all duration-300`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xl font-bold text-white mb-2 relative z-10">{f.title}</h3>
          <p className="text-zinc-400 text-sm relative z-10 leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
