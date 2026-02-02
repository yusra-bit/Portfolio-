
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isGithub = project.url?.includes('github.com');

  return (
    <div className="group minimal-border rounded-lg p-6 flex flex-col h-full transition-all duration-300 hover:bg-white/[0.02]">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
          {project.category}
        </span>
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
      
      <div className="flex items-center justify-end gap-6 pt-4 border-t border-white/5">
        {project.url && (
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
          >
            {isGithub ? 'Source' : 'Explore'} <i className="fa-solid fa-arrow-right ml-1 text-[7px]" />
          </a>
        )}
        {project.liveDemoUrl && (
          <a 
            href={project.liveDemoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-widest text-white hover:opacity-70 transition-opacity"
          >
            Live Site <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-[7px]" />
          </a>
        )}
      </div>
    </div>
  );
};
