import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Camera, Film, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Crowd Behaviour Monitoring',
    date: 'Jun 2025',
    stack: 'AI + OpenCV',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1675856899175-de4dada137c0?auto=format&fit=crop&w=1600&q=80',
    description:
      'Live anomaly detection that watches crowd movement patterns and flags irregular behavior in real-time using computer vision pipelines.',
  },
  {
    title: 'Movie Management System',
    date: 'Aug 2025',
    stack: 'Java • DSA',
    icon: Film,
    image: 'https://images.unsplash.com/photo-1695548487477-32cd8f3b2f35?auto=format&fit=crop&w=1600&q=80',
    description:
      'A robust Java application for adding, sorting, and searching movies with efficient data structures and clean CLI interactions.',
  },
  {
    title: 'Embedded Night Vision Pedestrian Detection',
    date: 'Dec 2024',
    stack: 'HAAR + HOG + AdaBoost',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1758941808600-0ab29006b36d?auto=format&fit=crop&w=1600&q=80',
    description:
      'Pedestrian detection model for low-light conditions achieving around 80% accuracy, optimized for embedded hardware constraints.',
  },
];

const ProjectCard = ({ p, index }) => {
  const Icon = p.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-black shadow-sm"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white ring-1 ring-white/15">
          {p.date}
        </span>
      </div>

      <div className="p-6">
        <div className="mb-2 inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-slate-200 ring-1 ring-white/10">
          <Icon className="h-4 w-4" /> {p.stack}
        </div>
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>

        <div className="mt-4">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-slate-100 transition hover:border-white/20 hover:bg-white/10">
            <ExternalLink className="h-4 w-4" /> Learn more
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Minimal, professional cards with subtle motion and clear information hierarchy.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
