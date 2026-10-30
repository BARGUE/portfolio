import { cssVars } from "@/lib/utils";

const marquee = ["React", "Next.js", "TypeScript", "Tailwind", "React Native", "Expo", "TanStack Query", "Radix UI", "Cloudflare Workers", "Figma"];

const facts = [
  {
    label: "Qualité",
    title: "+25 % de satisfaction client",
    description: "Outils internes, tests, moins d'incidents.",
  },
  {
    label: "Management",
    title: "Équipe de 5 personnes",
    description: "Formation, code review, suivi d'alternants.",
  },
  {
    label: "Localisation",
    title: "Vanves (92) – Paris",
    description: "Français natif, anglais intermédiaire.",
  },
];

const highlights = [
  {
    title: "Développement Front-End",
    description: "React, Next.js & TypeScript, code propre et maintenable.",
  },
  {
    title: "Intégration & UI",
    description: "Composants réutilisables fidèles au design system (Figma).",
  },
  {
    title: "Approche Product",
    description: "Collaboration produit, design & back-end orientée utilisateur.",
  },
  {
    title: "Performance",
    description: "Optimisation continue sur des plateformes à forte audience.",
  },
];

export const AboutSection = () => {
  return (
    <section id="apropos" className="section snug">
      <div className="wrap">
        <div className="bento">
          <div className="box t-big rv">
            <span className="mono">Profil</span>
            <p>
              5 ans d&apos;expérience chez Clig Digital, dont 3 en alternance et
              2 en CDI. À l&apos;aise en squad agile aux côtés du produit, du
              design et du back-end, avec un workflow IA (Claude Code) qui
              garde l&apos;exigence d&apos;un code propre et maintenable.
            </p>
            <div className="row">
              <div>
                <div className="num">
                  <span data-n="5">0</span>
                  <em>+</em>
                </div>
                <span className="mono">ans d&apos;expérience</span>
              </div>
              <div>
                <div className="num">
                  <em>+</em>
                  <span data-n="200" data-s=" %">0</span>
                </div>
                <span className="mono">livrables sites web</span>
              </div>
            </div>
          </div>

          <div className="box t-sm rv" style={cssVars({ "--d": ".06s" })}>
            <span className="mono">Impact · Clig Digital</span>
            <h3>+30 % d&apos;acquisition par site</h3>
            <p>
              Grâce à l&apos;amélioration d&apos;un projet clé de la plateforme,
              avec une optimisation continue des performances.
            </p>
          </div>

          <div className="box t-sm rv" style={cssVars({ "--d": ".12s" })}>
            <span className="mono">Stack</span>
            {/* Liste doublée pour une boucle sans à-coup */}
            <div className="mq" aria-label={marquee.join(", ")}>
              <div aria-hidden="true">
                {[...marquee, ...marquee].map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className="box t-xs rv"
              style={cssVars({ "--d": `${(i + 1) * 0.06}s` })}
            >
              <span className="mono">{fact.label}</span>
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </div>
          ))}
        </div>

        <div className="pillars">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="box rv"
              style={cssVars({ "--d": `${i * 0.06}s` })}
            >
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
