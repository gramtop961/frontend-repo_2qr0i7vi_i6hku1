import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionBG3D from './SectionBG3D.jsx';

const projects = [
  {
    title: 'Devfolio – Minimal Portfolio',
    description: 'Personal site with a 3D Spline hero, clean sections, and subtle motion.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Task Tracker',
    description: 'Lightweight tasks app with filters and keyboard-friendly UX.',
    stack: ['Vite', 'React', 'Local Storage'],
    link: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'API Dashboard',
    description: 'Stats and alerts for APIs with charts and semantic color system.',
    stack: ['React', 'REST', 'Chart.js'],
    link: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionBG3D height={220} />

      <div className="relative mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
        <p className="mt-3 text-sm text-slate-400">Selected work</p>
      </div>

      <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            className="group block overflow-hidden rounded-lg border border-white/10 bg-white/5 transition hover:border-white/20"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>
            <div className="p-5">
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
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
