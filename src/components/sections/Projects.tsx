'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const projects = [
  {
    id: "01",
    name: "Showhand",
    tags: ["2026 Q1", "Roguelike", "Action", "Poker"]
  },
  {
    id: "02",
    name: "Project G",
    tags: ["2026 Q2", "Co-op", "Puzzle", "Platformer"]
  }
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12 w-full max-w-[95vw] mx-auto">
      <div className="flex items-end justify-between mb-24 border-b border-current pb-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
          {t.projects.title}
        </h2>
      </div>

      <div className="flex flex-col gap-0">
        {projects.map((project) => {
          const itemT = t.projects.items[project.name as keyof typeof t.projects.items];

          return (
            <div
              key={project.id}
              className="group relative border-b border-current/20 py-16 md:py-24 transition-all duration-500 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black -mx-6 px-6 md:-mx-12 md:px-12"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                {/* Index & Title */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 lg:w-1/2">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-4">
                      <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-500">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-6 lg:w-1/3 lg:pt-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex flex-wrap gap-2 items-center">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs border border-current px-3 py-1 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl md:text-2xl font-medium">
                    {itemT.direction}
                  </h4>
                  <p className="text-sm md:text-base leading-relaxed break-keep whitespace-pre-line">
                    {itemT.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

