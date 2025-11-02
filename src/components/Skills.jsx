import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Wrench } from 'lucide-react';

const categories = [
  {
    name: 'Programming',
    icon: Code,
    items: ['C', 'Java', 'Python'],
    tone: 'from-slate-800 to-slate-900',
  },
  {
    name: 'Databases',
    icon: Database,
    items: ['MySQL'],
    tone: 'from-slate-800 to-slate-900',
  },
  {
    name: 'Web Frontend',
    icon: Globe,
    items: ['HTML', 'CSS', 'JavaScript'],
    tone: 'from-slate-800 to-slate-900',
  },
  {
    name: 'Core CS',
    icon: Cpu,
    items: ['DSA', 'OOPS', 'DBMS', 'OS', 'Networks'],
    tone: 'from-slate-800 to-slate-900',
  },
  {
    name: 'Tools',
    icon: Wrench,
    items: ['Git'],
    tone: 'from-slate-800 to-slate-900',
  },
];

const SkillCard = ({ name, icon: Icon, items, tone, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className={`group relative rounded-2xl border border-white/10 bg-gradient-to-b ${tone} p-5 shadow-sm`}
  >
    <div className="mb-3 flex items-center gap-2">
      <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-base font-semibold text-white">{name}</h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={it}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition group-hover:border-white/20 group-hover:bg-white/10"
        >
          {it}
        </span>
      ))}
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition group-hover:ring-1 group-hover:ring-white/20" />
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Skills</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              A clean, minimal presentation with clear categories and concise skill tags.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <SkillCard key={c.name} index={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
