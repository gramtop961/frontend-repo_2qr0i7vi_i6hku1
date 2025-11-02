import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Brain, Camera, Film, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Crowd Behaviour Monitoring',
    date: 'Jun 2025',
    stack: 'AI + OpenCV',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1675856899175-de4dada137c0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWFsLVRpbWUlMjBDcm93ZCUyMEJlaGF2aW91ciUyME1vbml0b3Jpbmd8ZW58MHwwfHx8MTc2MjEwNzg0Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Live anomaly detection that watches crowd movement patterns and flags irregular behavior in real-time using computer vision pipelines.',
  },
  {
    title: 'Movie Management System',
    date: 'Aug 2025',
    stack: 'Java • DSA',
    icon: Film,
    image: 'https://images.unsplash.com/photo-1695548487477-32cd8f3b2f35?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb3ZpZSUyME1hbmFnZW1lbnQlMjBTeXN0ZW18ZW58MHwwfHx8MTc2MjEwNzg0Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'A robust Java application for adding, sorting, and searching movies with efficient data structures and clean CLI interactions.',
  },
  {
    title: 'Embedded Night Vision Pedestrian Detection',
    date: 'Dec 2024',
    stack: 'HAAR + HOG + AdaBoost',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1758941808600-0ab29006b36d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbWJlZGRlZCUyME5pZ2h0JTIwVmlzaW9uJTIwUGVkZXN0cmlhbnxlbnwwfDB8fHwxNzYyMTA3ODQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Pedestrian detection model for low-light conditions achieving around 80% accuracy, optimized for embedded hardware constraints.',
  },
];

const TiltCard = ({ p, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useTransform(y, [-60, 60], [10, -10]);
  const rY = useTransform(x, [-60, 60], [-10, 10]);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const posX = e.clientX - (rect.left + rect.width / 2);
    const posY = e.clientY - (rect.top + rect.height / 2);
    x.set(posX / 3);
    y.set(posY / 3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = p.icon;

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-3xl p-0.5"
    >
      {/* Iridescent border */}
      <div className="absolute -inset-[1px] rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,_#22d3ee,_#a78bfa,_#ec4899,_#22d3ee)] opacity-70 blur-[2px] transition duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-3xl bg-slate-900/80 shadow-xl backdrop-blur-xl" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
        {/* Image layer */}
        <div className="relative h-56 w-full overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
          <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {/* Shine sweep */}
          <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/10 blur-md transition duration-700 group-hover:translate-x-[300%]" />
        </div>

        {/* Content */}
        <div className="relative p-6" style={{ transform: 'translateZ(35px)' }}>
          <div className="absolute right-6 top-6 text-xs text-slate-300">{p.date}</div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs text-slate-200">
            <Icon className="h-4 w-4" /> {p.stack}
          </div>
          <h3 className="text-xl font-semibold text-white">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>

          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-slate-100 transition hover:bg-white/20">
              <ExternalLink className="h-4 w-4" /> Learn more
            </button>
          </div>
        </div>

        {/* Floating orbs for depth */}
        <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/20 blur-3xl" style={{ transform: 'translateZ(40px)' }} />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-3xl" style={{ transform: 'translateZ(40px)' }} />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-black via-slate-950 to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Iridescent, glassy project cards with parallax and tilt for a high-end 3D aesthetic.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <TiltCard p={projects[0]} index={0} />
            <TiltCard p={projects[2]} index={1} />
          </div>
          <div className="flex flex-col justify-center">
            <TiltCard p={projects[1]} index={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
