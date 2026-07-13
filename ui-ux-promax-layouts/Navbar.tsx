export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-white tracking-wider">HIMANSHU<span className="text-indigo-500">.</span></div>
        <div className="hidden md:flex items-center gap-8 text-zinc-400 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>
        <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-white rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">
          Dashboard
        </button>
      </div>
    </nav>
  );
}
