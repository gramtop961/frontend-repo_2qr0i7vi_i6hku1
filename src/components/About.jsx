import React from 'react';
import { motion } from 'framer-motion';
import SectionBG3D from './SectionBG3D.jsx';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Decorative 3D strip at the top of the section */}
      <SectionBG3D height={220} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative grid gap-10 md:grid-cols-12"
      >
        {/* Photo column */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="h-72 w-full rounded-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
            ].map((src, i) => (
              <img key={i} src={src} alt="Gallery" className="h-24 w-full rounded-md object-cover opacity-90" />
            ))}
          </div>
        </div>

        {/* Text column */}
        <div className="md:col-span-7">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
          <p className="mt-3 text-sm text-slate-400">A brief introduction</p>
          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-6">
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
