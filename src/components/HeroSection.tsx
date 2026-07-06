"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToProjects } from "@/lib/utils";

export const HeroSection = () => {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 mesh-background" />
      <div className="absolute inset-0 noise-overlay" />

      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(185 100% 50%) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, hsl(260 100% 60%) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="reveal-up animation-delay-200 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance"
          >
            Je conçois des{" "}
            <span className="gradient-text">expériences digitales</span>{" "}
            modernes.
          </h1>

          <p
            className="reveal-up animation-delay-400 text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance"
          >
            Développeur Front-End (5+ ans), expert React et Next.js. Je conçois
            des interfaces performantes, accessibles et maintenables, au service
            de l&apos;expérience utilisateur et des enjeux business.
          </p>

          <div
            className="reveal-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollToProjects("#projects")}
              size="lg"
              className="group px-8 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
            >
              Voir mes projets
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              onClick={() => scrollToProjects("#cv")}
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-semibold border-border hover:bg-secondary"
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger mon CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
