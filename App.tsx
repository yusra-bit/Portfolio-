
import React, { useState, useMemo } from 'react';
import { ProjectCategory } from './types';
import { PROJECTS, SKILLS_LIST } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { AIChatBot } from './components/AIChatBot';

const App: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filteredProjects = useMemo(() => {
    return filter === ProjectCategory.ALL 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-[#050505]/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-sm tracking-tighter text-white uppercase">Yusra Abdi</span>
          <div className="flex gap-6 text-[11px] uppercase tracking-widest font-bold text-slate-500">
            <a href="#projects" className="hover:text-white transition-colors">Works</a>
            <a href="#skills" className="hover:text-white transition-colors">Skillset</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        {/* Minimal Hero */}
        <section className="pt-48 pb-32">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight leading-tight">
            Full-stack developer & web designer <br /> 
            building refined digital solutions.
          </h1>
          <p className="text-slate-500 text-base max-w-xl leading-relaxed mb-12">
            Based in technical excellence and aesthetic precision. Focused on creating software, 
            WordPress experiences, and Webflow ecosystems that scale.
          </p>
          <div className="flex gap-8">
            <a href="#projects" className="text-xs font-bold uppercase tracking-[0.2em] text-white border-b border-white/20 pb-1 hover:border-white transition-all">
              Selected Works
            </a>
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="mb-32">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-white/5 pb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4 md:mb-0">Selected Projects</h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {Object.values(ProjectCategory).map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[10px] uppercase tracking-widest whitespace-nowrap ${
                    filter === cat ? 'text-white font-black' : 'text-slate-600 hover:text-slate-400'
                  } transition-colors`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Skills - Minimal Grid */}
        <section id="skills" className="mb-32">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-12 border-b border-white/5 pb-8">Technicals & Marketing</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8">
            {SKILLS_LIST.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">{skill.name}</span>
                <span className="text-[10px] text-slate-600 uppercase tracking-widest">{skill.category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Minimal Contact */}
        <section id="contact" className="mb-32 py-24 border-t border-white/5">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light text-white mb-8">Let's build something refined.</h2>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <a href="mailto:contact.yusraa@gmail.com" className="group text-lg text-slate-400 hover:text-white transition-colors">
                contact.yusraa@gmail.com <i className="fa-solid fa-arrow-right ml-2 text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="https://github.com/yusra-bit" target="_blank" className="group text-lg text-slate-400 hover:text-white transition-colors">
                github.com/yusra-bit <i className="fa-solid fa-arrow-right ml-2 text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-600 font-bold">
        <span>© {new Date().getFullYear()} Yusra Abdi</span>
        <span>Minimal Edition</span>
      </footer>

      <AIChatBot />
    </div>
  );
};

export default App;
