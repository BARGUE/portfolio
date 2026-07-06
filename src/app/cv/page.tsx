"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV_PDF = "/images/cv/CV.pdf";

const CVPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-20 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Button>
          </Link>

          <h1 className="text-lg font-semibold hidden sm:block">
            CV — <span className="gradient-text">Maylvin Bargue</span>
          </h1>

          <a href={CV_PDF} download="CV_Maylvin_Bargue.pdf">
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="w-4 h-4" />
              Télécharger
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/50 shadow-lg">
          <object
            data={CV_PDF}
            type="application/pdf"
            className="w-full h-[calc(100vh-10rem)]"
          >
            <div className="p-8 text-center text-muted-foreground">
              Impossible d&apos;afficher le PDF dans le navigateur.{" "}
              <a href={CV_PDF} className="text-primary underline" target="_blank" rel="noopener noreferrer">
                Ouvrir le CV dans un nouvel onglet
              </a>
              .
            </div>
          </object>
        </div>
      </main>
    </div>
  );
};

export default CVPage;
