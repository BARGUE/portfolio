import { cssVars } from "@/lib/utils";

const timeline = [
  {
    period: "2020 – juin 2026",
    title: "Développeur Front-End – React / Next.js",
    description: "Clig Digital · Paris · CDI (2023 – 2026) et alternance (2020 – 2023)",
  },
  {
    period: "Sept. 2020 – août 2023",
    title: "Master 2 Ingénierie Sciences Numériques",
    description:
      "ETNA · Paris-Ivry · Alternance. Projet de fin d'études : jardinière autonome connectée.",
  },
  {
    period: "Nov. 2012 – déc. 2017",
    title: "Technicien des systèmes de communication et infrastructures techniques",
    description:
      "Ministère des Armées · Systèmes de communication fiables et sécurisés, pilotage d'infrastructures matérielles.",
  },
];

export const JourneySection = () => {
  return (
    <section id="parcours" className="section flush">
      <div className="wrap">
        <div className="head rv">
          <span className="mono">Parcours</span>
          <h2>Expérience &amp; formation</h2>
        </div>

        <div className="tl">
          {timeline.map((item, i) => (
            <div
              key={item.period}
              className="box rv"
              style={cssVars({ "--d": `${i * 0.08}s` })}
            >
              <span className="mono">{item.period}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
