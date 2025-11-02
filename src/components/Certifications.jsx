import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  { name: 'Meta Front-End Developer', org: 'Coursera', link: '#', year: '2023' },
  { name: 'Responsive Web Design', org: 'freeCodeCamp', link: '#', year: '2022' },
  { name: 'JavaScript Algorithms', org: 'freeCodeCamp', link: '#', year: '2022' },
  { name: 'AWS Cloud Practitioner', org: 'Amazon', link: '#', year: '2023' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Certifications</h2>
        <p className="mt-3 text-sm text-slate-400">Credible, verifiable badges</p>
      </div>

      <div className="overflow-x-auto">
        <div className="flex min-w-max gap-4">
          {certs.map((c, idx) => (
            <motion.a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group flex w-72 flex-col rounded-lg border border-white/10 bg-white/5 p-5 hover:border-white/20"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-slate-200" />
                  <h3 className="text-sm font-medium text-white">{c.name}</h3>
                </div>
                <span className="text-xs text-slate-400">{c.year}</span>
              </div>
              <p className="text-sm text-slate-300">{c.org}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-300">
                <span>Verify</span>
                <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
