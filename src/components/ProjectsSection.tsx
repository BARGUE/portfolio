"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronRight,
  Code2,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project, projects } from "@/lib/dataProjects";
import Image from "next/image";

const allTags = ["Tous", "Web", "Mobile"];

export const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [gitMenuId, setGitMenuId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const filteredProjects =
    selectedTag === "Tous"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Projets <span className="gradient-text">sélectionnés</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes réalisations récentes en design et
            développement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                onMouseLeave={() => setGitMenuId(null)}
                className="group cursor-pointer"
              >
                <div className="glass-card overflow-hidden card-hover">
                  <div className="relative aspect-[16/10] overflow-hidden transform-gpu">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10`}
                    />
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        width={1000}
                        height={1000}
                      />
                    ) : (
                      <div
                        className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.color}`}
                      >
                        <span className="text-2xl font-bold text-foreground/70 px-6 text-center">
                          {project.title}
                        </span>
                      </div>
                    )}

                    {/* Hover actions */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {(() => {
                        const hasFront = !!project.repoFrontUrl;
                        const hasBack = !!project.repoBackUrl;
                        const hasSplit = hasFront || hasBack;

                        // Un seul repo : lien direct
                        if (!hasSplit && project.repoUrl) {
                          return (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`Code source de ${project.title}`}
                              title="Code source"
                              className="p-3 rounded-full bg-background/70 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          );
                        }

                        // Front et/ou back : icône Git avec menu de choix
                        if (!hasSplit) return null;
                        const isOpen = gitMenuId === project.id;
                        return (
                          <div className="relative">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setGitMenuId(isOpen ? null : project.id);
                              }}
                              aria-label={`Voir le code de ${project.title}`}
                              aria-expanded={isOpen}
                              title="Voir le code"
                              className="p-3 rounded-full bg-background/70 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <Github className="w-5 h-5" />
                            </button>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                                  transition={{ duration: 0.15 }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="absolute left-1/2 top-full z-30 mt-2 flex min-w-36 -translate-x-1/2 flex-col gap-1 rounded-xl border border-border bg-background/95 p-1.5 shadow-lg backdrop-blur-sm"
                                >
                                  {hasFront && (
                                    <a
                                      href={project.repoFrontUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                      <Code2 className="w-4 h-4" />
                                      Front-end
                                    </a>
                                  )}
                                  {hasBack && (
                                    <a
                                      href={project.repoBackUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                      <Server className="w-4 h-4" />
                                      Back-end
                                    </a>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })()}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Site en ligne de ${project.title}`}
                          title="Site en ligne"
                          className="p-3 rounded-full bg-background/70 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      <span className="text-xs text-muted-foreground ml-auto">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center text-sm text-primary font-medium">
                      Voir le projet
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} mix-blend-overlay z-10`}
                />
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${selectedProject.color}`}
                  >
                    <span className="text-3xl font-bold text-foreground/70 px-8 text-center">
                      {selectedProject.title}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.role} • {selectedProject.year}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Contexte</h4>
                    <p className="text-muted-foreground">
                      {selectedProject.context}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <p className="text-muted-foreground">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Résultats</h4>
                    <ul className="space-y-1">
                      {selectedProject.results.map((result, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-border">
                  {selectedProject.liveUrl && (
                    <Button asChild>
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir le site
                      </a>
                    </Button>
                  )}
                  {selectedProject.repoFrontUrl && (
                    <Button variant="outline" asChild>
                      <a
                        href={selectedProject.repoFrontUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code2 className="w-4 h-4 mr-2" />
                        Code front-end
                      </a>
                    </Button>
                  )}
                  {selectedProject.repoBackUrl && (
                    <Button variant="outline" asChild>
                      <a
                        href={selectedProject.repoBackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Server className="w-4 h-4 mr-2" />
                        Code back-end
                      </a>
                    </Button>
                  )}
                  {selectedProject.repoUrl && (
                    <Button variant="outline" asChild>
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
