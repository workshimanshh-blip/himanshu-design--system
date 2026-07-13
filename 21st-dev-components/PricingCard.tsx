export default function PricingCard() {
  return (
    <div className="max-w-sm rounded-3xl p-8 bg-zinc-900 border-2 border-indigo-600 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">Popular</div>
      <p className="text-zinc-400 font-medium text-sm">Pro Plan</p>
      <div className="mt-4 flex items-baseline text-white">
        <span className="text-5xl font-extrabold tracking-tight">$49</span>
        <span className="ml-1 text-xl font-semibold text-zinc-400">/mo</span>
      </div>
      <p className="mt-4 text-zinc-400 text-sm">Best for scaling startups and dynamic development teams.</p>
      <button className="mt-8 w-full bg-indigo-600 text-white rounded-xl py-3 font-semibold hover:bg-indigo-700 transition-colors">Get Started</button>
    </div>
  );
}
