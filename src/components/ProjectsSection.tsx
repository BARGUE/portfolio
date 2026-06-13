"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project, projects } from "@/lib/dataProjects";
import Image from "next/image";

const allTags = [
  "Tous",
  ...Array.from(new Set(projects.flatMap((p: Project) => p.tags))),
];

export const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
                className="group cursor-pointer"
              >
                <div className="glass-card overflow-hidden card-hover">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10`}
                    />
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      width={1000}
                      height={1000}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-20" />
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
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
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
