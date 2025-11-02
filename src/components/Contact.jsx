import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Globe, Download } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message is ready to send from your email app.');
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:sangishettinaveen@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contact</h2>
        <p className="mt-3 text-sm text-slate-400">Let’s build something great</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-white/10 bg-white/5 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-slate-400">Name</label>
              <input name="name" required className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-white/30" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-400">Email</label>
              <input type="email" name="email" required className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-white/30" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-xs text-slate-400">Message</label>
            <textarea name="message" required rows={5} className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-white/30" placeholder="What would you like to build?" />
          </div>
          <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/20">
            <Mail className="h-4 w-4" /> Send Message
          </button>
          {status && <p className="mt-3 text-xs text-slate-400">{status}</p>}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg border border-white/10 bg-white/5 p-6"
        >
          <h3 className="mb-3 text-lg font-medium text-white">Connect</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> sangishettinaveen@example.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-00000-00000</li>
            <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li className="flex items-center gap-2"><Github className="h-4 w-4" /> <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href="#" target="_blank" rel="noreferrer">GitHub</a></li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href="#" target="_blank" rel="noreferrer">Portfolio</a></li>
          </ul>
          <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm text-slate-200 hover:border-white/20">
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
