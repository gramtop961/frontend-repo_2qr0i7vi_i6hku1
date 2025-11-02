import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wrench, Database } from 'lucide-react';

const categories = [
  {
    icon: Code,
    title: 'Frontend',
    skills: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: Database,
    title: 'Backend & Data',
    skills: ['FastAPI', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'Vercel', 'ESLint/Prettier', 'Figma'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Skills</h2>
        <p className="mt-3 text-sm text-slate-400">Focused, modern stack</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-lg border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <cat.icon className="h-5 w-5 text-slate-200" />
              <h3 className="text-lg font-medium text-white">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="rounded-md border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
