'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

type Project = {
  id: string;
  name: string;
  tags: string[];
  link?: {
    label: string;
    href: string;
  };
};

const projects: Project[] = [
  {
    id: "01",
    name: "Showhand",
    tags: ["2026 Q3", "Roguelike", "Action", "Poker"],
    link: {
      label: "Steam",
      href: "https://store.steampowered.com/app/4629890/SHOWHAND/",
    },
  },
  {
    id: "02",
    name: "Project G",
    tags: ["2026 Q4", "Co-op", "Puzzle", "Platformer"]
  },
  {
    id: "03",
    name: "Project C",
    tags: ["2026 Q4", "TBA"]
  }
];

function SteamLogo() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="15.5" cy="8.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8.5" cy="15.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M10.1 14L13.7 10.2M6.5 14.8L3.8 13.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

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
          const itemT = t.projects.items[project.name];

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
                  {itemT?.direction && (
                    <h4 className="text-xl md:text-2xl font-medium">
                      {itemT.direction}
                    </h4>
                  )}
                  {itemT?.description && (
                    <p className="text-sm md:text-base leading-relaxed break-keep whitespace-pre-line">
                      {itemT.description}
                    </p>
                  )}
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 border border-current px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
                    >
                      <SteamLogo />
                      {project.link.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

