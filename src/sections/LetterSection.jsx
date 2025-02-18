'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import paperTexture from '@/assets/paper-texture.png'; // Ensure the path is correct

const StatsCard = ({ value, label }) => (
  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center">
    <div className="text-3xl font-semibold text-slate-950 mb-2">{value}</div>
    <div className="text-zinc-400 text-sm">{label}</div>
  </div>
);

export default function Paper({
  tag,
  title,
  icon,
  description,
  subheading,
  emailPlaceholder,
  stats,
  footerText,
  features,
  productImage,
  buttonText,
  imageAlt,
}) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="bg-white px-4 py-24 !max-w-screen">
      <div className="max-w-3xl mx-auto">
        <div className="relative bg-white/20 bg-cover bg-no-repeat p-12 rounded-3xl shadow-xl backdrop-blur-md" style={{ backgroundImage: `url(${paperTexture.src})` }}>
          {/* Floating Tag Cards */}
          <motion.div
            className="absolute -top-10 -right-10 sm:-right-2 sm:-top-16 transform -translate-x-16 -translate-y-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          >
            <Image
              src={productImage}
              alt={imageAlt}
              fill
              className="max-w-[200px] max-h-[200px] sm:max-w-[150px] sm:max-h-[150px] object-cover rounded-2xl "
            />
          </motion.div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black mb-6">
              <span className="text-green-400">{icon}</span>
              <span className="text-zinc-300 text-sm">{tag}</span>
            </div>
            <h2 className="text-4xl font-semibold text-slate-950 mb-4">{title}</h2>
            <p className="text-zinc-400">{description}</p>
            <h3 className="text-lg my-10">{subheading}</h3>
          </div>

          {/* Modern Letter Design */}
          <div className="bg-white/30 backdrop-blur-lg p-8 rounded-3xl mb-8 text-center">
            <p className="text-lg text-white mb-6">I'm going to ask you for ONE favor..</p>
            <p className="text-lg text-white mb-6">It's not a BIG favor..</p>
            <p className="text-lg text-white mb-6">In fact, it's a favor so small it's not even worth mentioning.</p>

            <p className="text-lg text-white mb-6">We are going to give you a sneak peek of our new dashboard..</p>
            <p className="text-lg text-white mb-6">All we ask is that 7 days later, you give us feedback on our platform.</p>

            <p className="text-lg text-white mb-6">Inside, you'll get access to your bots and step-by-step trainings on how to implement them..</p>

            <p className="text-lg text-white mb-6">In fact, it's a favor so small it's not even worth mentioning.</p>

            <p className="text-lg text-white mb-6">All I ask from you, is when these 99 bots help you save time, money, and make you more productive, is that you share them with your friends and family.</p>

            <p className="text-lg text-white mb-6">Together, we will help usher in the new Age of Abundance.</p>

            <p className="text-lg text-white mb-6">Enjoy!</p>

            <p className="mt-12 text-3xl text-white font-bold">Sam Blake</p>
            <p className="text-xl text-white font-semibold italic">Founder</p>
            <p className="text-md text-white opacity-75">AI Pro University</p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex gap-3 flex-wrap flex-row">
              <input
                type="email"
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg bg-white border border-zinc-700/50 text-slate-950 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-black/80 transition-colors"
              >
                {buttonText}
              </button>
            </div>
          </form>

          <h3 className="text-center text-lg border border-zinc-700/20 p-10 rounded-2xl mb-10">
            {footerText}
          </h3>

          {/* Features */}
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-400 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                {feature}
              </div>
            ))}
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
