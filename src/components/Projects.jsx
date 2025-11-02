import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Camera, Film } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Crowd Behaviour Monitoring',
    date: 'Jun 2025',
    stack: 'AI + OpenCV',
    icon: Camera,
    description:
      'Live anomaly detection that watches crowd movement patterns and flags irregular behavior in real-time using computer vision pipelines.',
  },
  {
    title: 'Movie Management System',
    date: 'Aug 2025',
    stack: 'Java • DSA',
    icon: Film,
    description:
      'A robust Java application for adding, sorting, and searching movies with efficient data structures and clean CLI interactions.',
  },
  {
    title: 'Embedded Night Vision Pedestrian Detection',
    date: 'Dec 2024',
    stack: 'HAAR + HOG + AdaBoost',
    icon: Brain,
    description:
      'Pedestrian detection model for low-light conditions achieving around 80% accuracy, optimized for embedded hardware constraints.',
  },
];

const ProjectCard = ({ p, index }) => {
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-0.5 shadow-lg backdrop-blur-xl"
    >
      <div className="relative h-full rounded-3xl bg-slate-900/80 p-6">
        <div className="absolute right-6 top-6 text-xs text-slate-300">{p.date}</div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs text-slate-200">
          <Icon className="h-4 w-4" /> {p.stack}
        </div>
        <h3 className="text-xl font-semibold text-white">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>
        <div className="mt-4">
          <button className="rounded-full bg-white/10 px-4 py-2 text-xs text-slate-100 transition hover:bg-white/20">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-indigo-950 to-purple-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Projects</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Thoughtful builds that blend AI, systems thinking, and craftsmanship.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <ProjectCard p={projects[0]} index={0} />
            <ProjectCard p={projects[2]} index={1} />
          </div>
          <div className="flex flex-col justify-center">
            <ProjectCard p={projects[1]} index={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
