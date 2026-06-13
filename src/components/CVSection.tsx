"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CVSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const cvPath = "/cv.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "CV_Portfolio.pdf";
    link.click();
  };

  const handleView = () => {
    window.open("/cv.pdf", "_blank");
  };

  return (
    <section id="cv" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 mesh-background opacity-50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center"
              >
                <FileText className="w-10 h-10 text-primary" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
                  Curriculum Vitae
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Téléchargez mon <span className="gradient-text">CV</span>
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Retrouvez mon parcours complet, mes compétences et mes
                  expériences professionnelles dans mon CV détaillé.
                </p>

                <div className="bg-secondary/50 rounded-xl p-6 mb-8 border border-border/50">
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      CV_Portfolio.pdf
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>~150 Ko</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    onClick={handleDownload}
                    size="lg"
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger le CV
                  </Button>

                  <Button
                    onClick={handleView}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold border-border hover:bg-secondary"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Voir le CV
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
