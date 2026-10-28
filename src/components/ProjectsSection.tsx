"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Project, projects } from "@/lib/dataProjects";
import { cssVars } from "@/lib/utils";

const filters = [
  { label: "Tous", tag: null },
  { label: "Web", tag: "Web" },
  { label: "Mobile", tag: "Mobile" },
];

const projectLinks = (project: Project) =>
  [
    { label: "Site en ligne", href: project.liveUrl },
    { label: "Front-end", href: project.repoFrontUrl },
    { label: "Back-end", href: project.repoBackUrl },
    { label: "Code source", href: project.repoUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

export const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Rejoue l'apparition des cartes visibles à chaque changement de filtre.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gridRef.current
      ?.querySelectorAll<HTMLElement>(".card:not([hidden])")
      .forEach((card) => {
        card.style.animation = "none";
        void card.offsetWidth;
        card.style.animation = "up .5s both";
      });
  }, [selectedTag]);

  return (
    <section id="projets" className="section flush">
      <div className="wrap">
        <div className="head rv">
          <span className="mono">Portfolio</span>
          <h2>Projets sélectionnés</h2>
          <p>Une sélection de mes réalisations récentes en design et développement.</p>
        </div>

        <div className="filters rv" role="group" aria-label="Filtrer les projets">
          {filters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              className="btn"
              aria-pressed={selectedTag === filter.tag}
              onClick={() => setSelectedTag(filter.tag)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Les cartes filtrées restent dans le DOM (masquées) pour garder la mise en page bento */}
        <div ref={gridRef} className={selectedTag ? "projects f" : "projects"}>
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="card rv"
              hidden={selectedTag !== null && !project.tags.includes(selectedTag)}
              style={cssVars({ "--g": project.gradient, "--d": `${(i % 3) * 0.06}s` })}
            >
              <div
                className={
                  project.image
                    ? `mock shot${project.imageFit === "contain" ? " contain" : ""}`
                    : "mock"
                }
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className={project.tags.includes("Mobile") ? "win ph" : "win"} />
                )}
              </div>
              <div className="body">
                <div className="tags">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="links">
                  {projectLinks(project).map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
