import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200 antialiased">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sangishetti Naveen Kumar · Built with React, Tailwind, Framer Motion, and Spline
      </footer>
    </div>
  );
}

export default App;
