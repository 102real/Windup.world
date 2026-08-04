'use client';

import React from 'react';
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
    name: "OMG: Oh My Gravity",
    tags: ["2026 Q4", "Co-op", "Puzzle", "Platformer"]
  },
  {
    id: "02",
    name: "CLIMB",
    tags: ["2026 Q4", "Simulation", "Incremental"]
  },
  {
    id: "03",
    name: "SHOWHAND",
    tags: ["2027 Q1", "Roguelike", "Action", "Poker"],
    link: {
      label: "Steam",
      href: "https://store.steampowered.com/app/4629890/SHOWHAND/",
    },
  },
  {
    id: "04",
    name: "Heart stamp",
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
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12 w-full overflow-hidden">
      <div className="mb-20 md:mb-24">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-tertiary mb-4">
          ( 02 — {t.projects.title} )
        </p>
        <div className="flex items-end justify-between border-b border-border-strong pb-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase font-display">
            {t.projects.title}
            <span className="font-mono font-normal text-[0.35em] tracking-normal align-super text-secondary ml-3">({projects.length})</span>
          </h2>
          <span className="hidden md:block font-mono text-xs text-tertiary uppercase tracking-widest pb-2">
            2026 — 2027
          </span>
        </div>
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

                {/* Title and details only sit side by side from xl up — below that
                    the columns get too narrow, so they stack instead of shrinking. */}
                <div className="grid grid-cols-12 gap-x-4 gap-y-8 items-start">
                  {/* Index */}
                  <span className="col-span-12 xl:col-span-1 font-mono text-xs md:text-sm text-tertiary group-hover:text-secondary transition-colors duration-500 xl:pt-3">
                    /{project.id}
                  </span>

                  {/* Title */}
                  <div className="col-span-12 xl:col-span-6">
                    <h3 className="text-[clamp(3rem,15vw,10rem)] xl:text-[clamp(6rem,7.5vw,10rem)] font-bold tracking-tighter leading-none uppercase group-hover:translate-x-4 transition-transform duration-500 font-display break-keep">
                      {project.name}
                    </h3>
                  </div>

                  {/* Details */}
                  <div className="col-span-12 xl:col-span-5 flex flex-col gap-5 max-w-3xl xl:max-w-none xl:pt-2">
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
                      <h4 className="text-2xl lg:text-3xl xl:text-2xl font-semibold leading-snug">
                        {itemT.direction}
                      </h4>
                    )}
                    {itemT?.description && (
                      <p className="text-base lg:text-lg xl:text-base leading-relaxed break-keep whitespace-pre-line text-secondary">
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

