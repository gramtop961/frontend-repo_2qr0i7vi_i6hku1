import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const roles = [
  {
    title: 'Frontend Developer',
    company: 'Company Name',
    period: '2023 – Present',
    points: [
      'Built accessible, component-driven UIs with React and Tailwind',
      'Improved performance and UX with code-splitting and motion',
      'Collaborated with designers and backend engineers to ship features',
    ],
    stack: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Frontend Intern',
    company: 'Previous Company',
    period: '2022 – 2023',
    points: [
      'Implemented reusable UI patterns and documentation',
      'Contributed to design system tokens and theming',
    ],
    stack: ['Vite', 'JavaScript', 'Git'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Experience</h2>
        <p className="mt-3 text-sm text-slate-400">Impact-focused highlights</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((role, idx) => (
          <motion.div
            key={role.title + idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">{role.title}</h3>
                <p className="text-sm text-slate-300">{role.company}</p>
              </div>
              <span className="text-xs text-slate-400">{role.period}</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              {role.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Briefcase className="mt-0.5 h-4 w-4 text-slate-300" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {role.stack.map((s) => (
                <span key={s} className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-slate-300">
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

export default Experience;
