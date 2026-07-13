export default function ModernHero() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
        <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-6">Introducing v2.0</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl max-w-4xl mx-auto bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Build professional websites in record time
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto">
          A high-performance design system crafted carefully for production-ready frontend products and clean interfaces.
        </p>
      </div>
    </section>
  );
}
