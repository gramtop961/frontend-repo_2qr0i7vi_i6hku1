import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Minimal Portfolio',
    description: 'Personal site with a 3D Spline hero, clean sections, and subtle motion.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Task Tracker',
    description: 'Lightweight tasks app with filters and keyboard-friendly UX.',
    stack: ['Vite', 'React', 'Local Storage'],
    link: '#',
  },
  {
    title: 'API Dashboard',
    description: 'Stats and alerts for APIs with charts and semantic color system.',
    stack: ['React', 'REST', 'Chart.js'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
        <p className="mt-3 text-sm text-slate-400">Selected work</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group block rounded-lg border border-white/10 bg-white/5 p-5 transition hover:border-white/20"
          >
            <div className="mb-4 flex h-36 items-center justify-center rounded-md bg-gradient-to-br from-slate-800 to-slate-900 text-slate-400">
              <span className="text-sm">{p.title}</span>
            </div>
            <h3 className="text-lg font-medium text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-slate-300">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300">
              <span>View</span>
              <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
