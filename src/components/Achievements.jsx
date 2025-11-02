import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Star } from 'lucide-react';

const highlights = [
  {
    title: 'Hackathon Finalist',
    desc: 'Built a real-time dashboard with performant charts and clean UX.',
  },
  {
    title: 'Open-Source Contributor',
    desc: 'Contributed UI fixes and accessibility improvements to a React library.',
  },
  {
    title: 'College Tech Lead',
    desc: 'Organized workshops on React and Git for 100+ attendees.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Achievements & Activities</h2>
        <p className="mt-3 text-sm text-slate-400">Selected highlights</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((h, idx) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-lg border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-3 flex items-center gap-2 text-white">
              <Star className="h-5 w-5 text-slate-200" />
              <h3 className="text-lg font-medium">{h.title}</h3>
            </div>
            <p className="text-sm text-slate-300">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
