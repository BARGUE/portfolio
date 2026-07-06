import { Zap, Palette, Code, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Développement Front-End",
    description: "React, Next.js & TypeScript, code propre et maintenable",
  },
  {
    icon: Palette,
    title: "Intégration & UI",
    description: "Composants réutilisables fidèles au design system (Figma)",
  },
  {
    icon: Lightbulb,
    title: "Approche Product",
    description: "Collaboration produit, design & back-end orientée utilisateur",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisation continue sur des plateformes à forte audience",
  },
];

const timeline = [
  {
    year: "2020 – 2026",
    title: "Développeur Front-End",
    company: "Clig Digital · Paris",
  },
  {
    year: "2020 – 2023",
    title: "Master 2 Ingénierie Sciences Numériques",
    company: "ETNA · Paris-Ivry",
  },
  {
    year: "2012 – 2017",
    title: "Militaire",
    company: "Ministère de la Défense · Mâcon",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-background opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="reveal-up text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            À propos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Développeur front-end{" "}
            <span className="gradient-text">passionné</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plus de 5 ans à concevoir des applications web performantes en React
            et Next.js. Mon objectif : transformer des maquettes en interfaces
            accessibles et maintenables, au service de l&apos;expérience
            utilisateur et des enjeux business.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="reveal-up glass-card p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="reveal-up animation-delay-400 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-8 text-center">Parcours</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  className={`reveal-up relative flex items-center gap-6 ${
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
