import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Wrench } from 'lucide-react';

const categories = [
  {
    name: 'Programming',
    icon: Code,
    items: ['C', 'Java', 'Python'],
    from: 'from-violet-500/20',
    to: 'to-fuchsia-500/20',
  },
  {
    name: 'Databases',
    icon: Database,
    items: ['MySQL'],
    from: 'from-sky-500/20',
    to: 'to-indigo-500/20',
  },
  {
    name: 'Web Frontend',
    icon: Globe,
    items: ['HTML', 'CSS', 'JavaScript'],
    from: 'from-emerald-500/20',
    to: 'to-teal-500/20',
  },
  {
    name: 'Core CS',
    icon: Cpu,
    items: ['DSA', 'OOPS', 'DBMS', 'OS', 'Networks'],
    from: 'from-rose-500/20',
    to: 'to-orange-500/20',
  },
  {
    name: 'Tools',
    icon: Wrench,
    items: ['Git'],
    from: 'from-yellow-500/20',
    to: 'to-amber-500/20',
  },
];

const SkillCard = ({ name, icon: Icon, items, from, to }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={`group relative rounded-2xl bg-gradient-to-br ${from} ${to} p-0.5`}
  >
    <div className="rounded-2xl bg-slate-900/80 p-5 backdrop-blur">
      <div className="mb-3 flex items-center gap-2">
        <div className="rounded-xl bg-white/10 p-2">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-100 transition group-hover:bg-white/20"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-slate-950 to-indigo-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Skills</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          A balanced stack across programming, data, and systems — with a taste for thoughtful design and clean code.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <SkillCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
