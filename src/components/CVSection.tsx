"use client";

import { useRouter } from "next/navigation";
import { Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV_PDF = "/images/cv/CV.pdf";

export const CVSection = () => {
  const router = useRouter();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV_PDF;
    link.download = "CV_Maylvin_Bargue.pdf";
    link.click();
  };

  const handleView = () => {
    router.push("/cv");
  };

  return (
    <section id="cv" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="reveal-up max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 mesh-background opacity-50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div
                className="reveal-scale animation-delay-200 w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center"
              >
                <FileText className="w-10 h-10 text-primary" />
              </div>

              <div className="reveal-up animation-delay-400">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
                  Curriculum Vitae
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Consultez mon <span className="gradient-text">CV</span>
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Retrouvez mon parcours complet, mes compétences et mes
                  expériences professionnelles dans mon CV détaillé.
                </p>

                <div className="bg-secondary/50 rounded-xl p-6 mb-8 border border-border/50">
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      CV_Maylvin_Bargue.pdf
                    </span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
