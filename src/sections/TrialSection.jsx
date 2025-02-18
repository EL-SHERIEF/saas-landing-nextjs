'use client';
import { useState } from 'react';

const StatsCard = ({ value, label }) => (
  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center">
    <div className="text-3xl font-semibold text-slate-950  mb-2">{value}</div>
    <div className="text-zinc-400 text-sm">{label}</div>
  </div>
);

export default function TrialSection() {
  const [email, setEmail] = useState('');

  const stats = [
    { value: '1M+', label: 'Student Users' },
    { value: '950M+', label: 'Task Organized' },
    { value: '70+', label: 'ran Companies' },
    { value: '10M+', label: 'Users' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="backdrop-blur-sm bg-white/50 rounded-3xl border border-zinc-800/10 p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black mb-6">
              <span className="text-green-400">⚡</span>
              <span className="text-zinc-300 text-sm">Follow us for more</span>
            </div>
            <h2 className="text-4xl font-semibold text-slate-950 mb-4">Keep Up With AI</h2>
            <p className="text-zinc-400">
              Start your journey now to experience seamless new AI generation tools!
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex gap-3 flex-wrap flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg bg-white border border-zinc-700/50 text-slate-950  placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white font-medium   rounded-lg hover:bg-black/80 transition-colors"
              >
                Get Started
              </button>
            </div>
          </form>

          {/* Features */}
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-400 mb-12">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              99 PAID Bots
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Just for 1$
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Cancel anytime
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
