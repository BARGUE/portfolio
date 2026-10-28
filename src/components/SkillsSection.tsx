import { skillCategories } from "@/lib/dataProjects";
import { cssVars } from "@/lib/utils";

const extras = [
  {
    label: "Langues",
    title: "Français · Anglais",
    description: "Français : langue maternelle. Anglais : intermédiaire.",
  },
  {
    label: "Centres d'intérêt",
    title: "Cinéma, jeux vidéo, musique",
    description: "Sports : ski alpin, VTT, randonnée.",
  },
  {
    label: "Collaboration",
    title: "Squad agile",
    description:
      "Produit, design et back-end, avec marketing, commercial et partenaires internationaux.",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section flush">
      <div className="wrap">
        <div className="head rv">
          <span className="mono">Compétences</span>
          <h2>Stack &amp; expertise</h2>
          <p>Les outils et technologies que j&apos;utilise pour donner vie à vos projets.</p>
        </div>

        <div className="stack">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="box rv"
              style={cssVars({ "--d": `${i * 0.06}s` })}
            >
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="tl">
          {extras.map((item, i) => (
            <div
              key={item.label}
              className="box rv"
              style={cssVars({ "--d": `${i * 0.08}s` })}
            >
              <span className="mono">{item.label}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
