import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 md:grid-cols-12"
      >
        <div className="md:col-span-5">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
          <p className="mt-3 text-sm text-slate-400">A brief introduction</p>
        </div>
        <div className="md:col-span-7">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="text-slate-300">
              I’m Naveen, a frontend-focused developer who enjoys turning complex problems into simple, beautiful interfaces. I value clarity, performance, and accessibility, and I work with modern tools like React, Tailwind CSS, and Framer Motion to craft polished user experiences.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <li className="rounded-md border border-white/10 bg-black/30 p-3">Strong foundation in React and component-driven design</li>
              <li className="rounded-md border border-white/10 bg-black/30 p-3">Clean, scalable styling with Tailwind CSS</li>
              <li className="rounded-md border border-white/10 bg-black/30 p-3">Subtle, meaningful motion with Framer Motion</li>
              <li className="rounded-md border border-white/10 bg-black/30 p-3">Collaborative, detail-oriented workflow</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
