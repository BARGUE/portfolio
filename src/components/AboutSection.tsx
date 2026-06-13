"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Palette, Code, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "Design UI/UX",
    description: "Interfaces intuitives et visuellement impactantes",
  },
  {
    icon: Code,
    title: "Développement Frontend",
    description: "Code propre, performant et maintenable",
  },
  {
    icon: Lightbulb,
    title: "Approche Product",
    description: "Focus utilisateur et résolution de problèmes",
  },
  {
    icon: Zap,
    title: "Efficacité",
    description: "Livraison rapide sans compromis sur la qualité",
  },
];

const timeline = [
  { year: "2024", title: "Lead Designer / Dev", company: "Projets Freelance" },
  { year: "2023", title: "UI/UX Designer", company: "Startup Tech" },
  { year: "2022", title: "Frontend Developer", company: "Agence Digitale" },
  {
    year: "2021",
    title: "Début de carrière",
    company: "Formation & Side projects",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-background opacity-50" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            À propos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Créateur d&apos;expériences{" "}
            <span className="gradient-text">mémorables</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Je combine design et développement pour créer des produits digitaux
            qui font la différence. Mon objectif : transformer des idées en
            expériences utilisateur exceptionnelles.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-8 text-center">Parcours</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    } pl-8 md:pl-0`}
                  >
                    <span className="text-sm font-semibold text-primary">
                      {item.year}
                    </span>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.company}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
