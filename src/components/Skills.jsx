import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code, Database, Globe, Cpu, Wrench } from 'lucide-react';

const categories = [
  {
    name: 'Programming',
    icon: Code,
    items: ['C', 'Java', 'Python'],
    accent: 'from-cyan-400 to-fuchsia-500',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm9ncmFtbWluZ3xlbnwwfDB8fHwxNzYyMTA3ODM5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Databases',
    icon: Database,
    items: ['MySQL'],
    accent: 'from-purple-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1741958193874-6ef299f6b053?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXRhYmFzZXN8ZW58MHwwfHx8MTc2MjEwNzg0MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Web Frontend',
    icon: Globe,
    items: ['HTML', 'CSS', 'JavaScript'],
    accent: 'from-emerald-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1610986603166-f78428624e76?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWIlMjBGcm9udGVuZHxlbnwwfDB8fHwxNzYyMTA3ODQwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Core CS',
    icon: Cpu,
    items: ['DSA', 'OOPS', 'DBMS', 'OS', 'Networks'],
    accent: 'from-fuchsia-400 to-amber-400',
    image: 'https://images.unsplash.com/photo-1628952061849-b386b4ecf709?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIxMDc4NDF8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Tools',
    icon: Wrench,
    items: ['Git'],
    accent: 'from-rose-400 to-purple-500',
    image: 'https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUb29sc3xlbnwwfDB8fHwxNzYyMTA3ODQxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const Skill3DTile = ({ name, icon: Icon, items, accent, image }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useTransform(y, [-50, 50], [12, -12]);
  const rY = useTransform(x, [-50, 50], [-12, 12]);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const posX = e.clientX - (rect.left + rect.width / 2);
    const posY = e.clientY - (rect.top + rect.height / 2);
    x.set(posX / 4);
    y.set(posY / 4);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-3xl p-0.5"
    >
      {/* Neon border */}
      <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${accent} opacity-80 blur-sm transition duration-300 group-hover:opacity-100`} />

      <div className="relative rounded-3xl bg-slate-900/80 p-5 backdrop-blur-xl" style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }}>
        {/* Background image with parallax */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-25">
          <img src={image} alt="bg" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/60" />
        </div>

        {/* Floating orbs */}
        <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full bg-cyan-400/30 blur-2xl" style={{ transform: 'translateZ(40px)' }} />
        <div className="pointer-events-none absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-fuchsia-500/20 blur-2xl" style={{ transform: 'translateZ(40px)' }} />

        <div className="relative">
          <div className="mb-3 flex items-center gap-2" style={{ transform: 'translateZ(30px)' }}>
            <div className="rounded-xl bg-white/10 p-2">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
          </div>

          <div className="flex flex-wrap gap-2" style={{ transform: 'translateZ(20px)' }}>
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

        {/* Glass highlight sweep */}
        <span className="pointer-events-none absolute left-1/2 top-0 h-32 w-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-gradient-to-b from-white/30 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-black via-slate-950 to-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Skills</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              3D-tilting tiles with neon accents for a sleek, futuristic palette.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Skill3DTile key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
