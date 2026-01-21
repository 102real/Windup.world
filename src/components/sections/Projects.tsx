import React from 'react';

const projects = [
  {
    id: "01",
    name: "Showhand",
    direction: "마지막 패를 공개할 시간",
    description: "모든 것이 불타 사라지는 전장, 침묵을 깨는 것은 카드 섞이는 소리뿐.\n운조차 실력이 되는 이곳에서 당신의 직감을 시험해 보세요.\n이 판을 뒤집을 주인공은 바로 당신입니다.",
    tags: ["2026 Q1", "Roguelike", "Action", "Poker"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12 w-full max-w-[95vw] mx-auto">
      <div className="flex items-end justify-between mb-24 border-b border-current pb-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
          PROJECTS
        </h2>
      </div>
      
      <div className="flex flex-col gap-0">
        {projects.map((project) => (
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
                  {project.direction}
                </h4>
                <p className="text-sm md:text-base leading-relaxed break-keep whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

