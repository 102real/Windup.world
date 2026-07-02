'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';

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
    name: "SHOWHAND",
    tags: ["2027 Q1", "Roguelike", "Action", "Poker"],
    link: {
      label: "Steam",
      href: "https://store.steampowered.com/app/4629890/SHOWHAND/",
    },
  },
  {
    id: "02",
    name: "OMG: Oh My Gravity",
    tags: ["2026 Q4", "Co-op", "Puzzle", "Platformer"]
  },
  {
    id: "03",
    name: "CLIMB",
    tags: ["2026 Q4", "Simulation", "Incremental"]
  },
  {
    id: "04",
    name: "Heart Stemp",
    tags: ["2026 Q1", "Simulation", "Physics"]
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
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12 w-full max-w-[95vw] mx-auto overflow-hidden">
      <div className="flex items-end justify-between mb-24 border-b border-border-strong pb-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase font-display">
          {t.projects.title}
          <span className="font-serif italic font-normal text-[0.4em] tracking-normal align-super text-secondary ml-3">({projects.length})</span>
        </h2>
      </div>

      <div className="flex flex-col gap-0">
        {projects.map((project, index) => {
          const itemT = t.projects.items[project.name];

          return (
            <Reveal key={project.id} delay={index * 100}>
              <div
                className="group relative border-b border-border-subtle py-16 md:py-24 transition-colors duration-500 hover:bg-[var(--surface-hover)] -mx-6 px-6 md:-mx-12 md:px-12"
              >
                {/* Accent bar on hover */}
                <span
                  className="absolute left-0 top-0 h-full w-[3px] bg-foreground scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                  aria-hidden="true"
                ></span>

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                  {/* Index & Title */}
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 lg:w-1/2">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs md:text-sm text-tertiary mb-4 group-hover:text-secondary transition-colors duration-500">
                        /{project.id}
                      </span>
                      <div className="flex items-baseline gap-4">
                        <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-500 font-display">
                          {project.name}
                        </h3>
                        <ArrowUpRight
                          className="w-8 h-8 md:w-12 md:h-12 text-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col gap-6 lg:w-1/3 lg:pt-4">
                    <div className="flex flex-wrap gap-2 items-center">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="font-mono text-xs rounded-full border border-border-subtle bg-foreground/[0.02] text-secondary px-3 py-1 uppercase tracking-wider transition-colors duration-500 group-hover:border-border-strong group-hover:text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {itemT?.direction && (
                      <h4 className="font-serif italic font-normal text-2xl md:text-3xl leading-snug">
                        {itemT.direction}
                      </h4>
                    )}
                    {itemT?.description && (
                      <p className="text-sm md:text-base leading-relaxed break-keep whitespace-pre-line text-secondary">
                        {itemT.description}
                      </p>
                    )}
                    {project.link && (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong px-5 py-2 font-mono text-sm uppercase tracking-wider transition-colors duration-300 hover:bg-foreground hover:text-background hover:border-foreground"
                      >
                        <SteamLogo />
                        {project.link.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

