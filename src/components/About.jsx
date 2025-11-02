import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Flame, Heart } from 'lucide-react';

const Fact = ({ label, value, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="flex items-center gap-3 rounded-xl bg-white/70 p-3 shadow-sm backdrop-blur-md"
  >
    <Icon className="h-5 w-5 text-violet-600" />
    <div>
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-sm font-semibold text-slate-800">{value}</div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square w-full rounded-3xl bg-gradient-to-br from-blue-500/30 via-violet-500/30 to-fuchsia-400/30 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-900/60">
                <div className="h-44 w-44 rounded-full bg-gradient-to-b from-slate-300 to-slate-100 shadow-2xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl font-bold md:text-4xl">About</h2>
            <p className="leading-relaxed text-slate-300">
              I'm Naveen, a Computer Science undergraduate who believes technology should make life smarter and simpler. My journey began with curiosity — how machines learn, how data tells stories, and how ideas become code. Over time, that curiosity turned into projects, internships, and late-night experiments that taught me to build thoughtfully and ship with care.
            </p>
            <p className="leading-relaxed text-slate-300">
              I’m most alive when I’m exploring data, designing models, and crafting clean systems that solve real problems. From AI-powered anomaly detection to building robust Java applications, I enjoy blending logic with creativity. My goal is simple: to grow into a skilled data scientist who applies AI to meaningful, human-centered challenges.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Fact label="City" value="Valigonda" icon={MapPin} />
              <Fact label="Passion" value="Data Science & AI" icon={Flame} />
              <Fact label="Mindset" value="Learn • Build • Share" icon={Heart} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
