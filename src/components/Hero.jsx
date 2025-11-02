import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-sm tracking-widest text-slate-300">PORTFOLIO · SANGISHETTI NAVEEN KUMAR</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
            Building reliable frontends with a calm, minimal aesthetic
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            I specialize in crafting performant, accessible React interfaces with clean design, smooth motion, and thoughtful details.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/20 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/40"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
