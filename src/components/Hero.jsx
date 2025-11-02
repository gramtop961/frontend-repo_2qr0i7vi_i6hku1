import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Interactive Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient veil that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 py-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-slate-200" />
          Minimal • Futuristic • Interactive
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Sangishetti
          <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-white bg-clip-text text-transparent"> Naveen Kumar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg text-slate-200 md:text-xl"
        >
          Aspiring Data Scientist & Developer focusing on clear, reliable and human-centered technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex items-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white shadow-lg ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/15"
          >
            Let's Connect
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
