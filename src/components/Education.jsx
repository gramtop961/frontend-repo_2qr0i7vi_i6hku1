import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const items = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'Your University Name',
    period: '2019 – 2023',
    highlights: [
      'Focused on frontend engineering and UX fundamentals',
      'Projects with React, Tailwind, and APIs',
    ],
  },
  {
    degree: 'Intermediate (MPC)',
    school: 'Your College Name',
    period: '2017 – 2019',
    highlights: ['Mathematics, Physics, and Chemistry core curriculum'],
  },
];

const Education = () => {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Education</h2>
        <p className="mt-3 text-sm text-slate-400">Milestones & learning</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
        <div className="space-y-10">
          {items.map((item, idx) => (
            <motion.div
              key={item.degree + idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative grid gap-6 md:grid-cols-12`}
            >
              <div className="md:col-span-5 md:col-start-1">
                <div className="flex items-center gap-3">
                  <div className="relative hidden md:block">
                    <div className="absolute -left-1 top-2 h-3 w-3 rounded-full bg-white/20 ring-2 ring-white/10" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">{item.period}</p>
                    <h3 className="mt-1 text-lg font-medium text-white">{item.degree}</h3>
                    <p className="text-sm text-slate-300">{item.school}</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                  <ul className="space-y-2 text-sm text-slate-300">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <GraduationCap className="mt-0.5 h-4 w-4 text-slate-300" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
